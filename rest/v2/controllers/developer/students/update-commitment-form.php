<?php
require '../../../core/header.php';
require '../../../core/functions.php';
require 'functions.php';
require '../../../models/developer/student/Student.php';

$conn = null;
$conn = checkDbConnection();
$student = new Student($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);

    $student->school_year_students_aid = checkIndex($data, "school_year_students_aid");
    $student->school_year_students_last_parent_commitment_is_agree = checkIndex($data, "school_year_students_last_parent_commitment_is_agree");

    $schoolYearStudent = getResultData($student->readSchoolYearStudent());

    if ($schoolYearStudent[0]["school_year_students_last_coc_is_agree"] == 1 && $schoolYearStudent[0]["school_year_students_last_parent_declaration_is_agree"] == 1 && $schoolYearStudent[0]["school_year_students_last_parent_consent_is_agree"] == 1) {
        $query = checkUpdateSchoolYearStudentCommitmentForm($student);
    } else {
        returnError("Error. You must agree first on Code of Conduct, Parent Declaration, and Parent Consent.");
    }

    // return success
    http_response_code(200);
    returnSuccess($student, "Student", $query);

    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
