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

    $student->students_aid = checkIndex($data, "students_aid");
    $student->current_students_sy_id = checkIndex($data, "current_students_sy_id");
    $student->current_students_last_parent_declaration_is_agree = checkIndex($data, "current_students_last_parent_declaration_is_agree");
    $student->current_students_last_parent_commitment_is_agree = 0;

    $query = checkUpdateSchoolYearStudentParentDeclare($student);
    checkUpdateSchoolYearStudentParentDeclareCurrent($student);
    checkUpdateSchoolYearStudentCommitmentForm($student);
    checkUpdateSchoolYearStudentCommitmentFormCurrent($student);

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
