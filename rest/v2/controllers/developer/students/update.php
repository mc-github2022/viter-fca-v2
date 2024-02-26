<?php

require "functions.php";

$conn = null;
$conn = checkDbConnection();
$student = new Student($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);

if (array_key_exists("studentid", $_GET)) {
    checkPayload($data);
    $student->students_aid = $_GET['studentid'];
    $student->school_year_students_aid = $data['school_year_students_aid'];

    // foreach ($data as $key => $value) {
    //     $student->$key = $data[$value];
    // }

    $student->students_parent_id = $data["students_parent_id"];
    $student->students_lrn = $data["students_lrn"];
    $student->students_fname = $data["students_fname"];
    $student->students_mname = $data["students_mname"];
    $student->students_lname = $data["students_lname"];
    $student->students_gender = $data["students_gender"];
    $student->students_birth_date = $data["students_birth_date"];
    $student->students_birth_place = $data["students_birth_place"];
    $student->students_email = $data["students_email"];
    $student->students_mobile = $data["students_mobile"];
    $student->students_landline = $data["students_landline"];
    $student->students_address = $data["students_address"];
    $student->students_institutional_email = $data["students_institutional_email"];
    $student->students_family_doctor = $data["students_family_doctor"];
    $student->students_family_doctor_contact = $data["students_family_doctor_contact"];
    $student->students_medical_remarks = $data["students_medical_remarks"];
    $student->students_family_circumstances = $data["students_family_circumstances"];
    $student->school_year_students_last_learning_type = $data["school_year_students_last_learning_type"];
    $student->school_year_students_last_school_attended = $data["school_year_students_last_school_attended"];
    $student->school_year_students_last_gpa = $data["school_year_students_last_gpa"];
    $student->school_year_students_last_school_address = $data["school_year_students_last_school_address"];
    $student->school_year_students_last_remarks = $data["school_year_students_last_remarks"];
    $student->students_datetime = date("Y-m-d H:i:s");

    $students_lrn_old = $data["students_lrn_old"];

    checkId($student->students_aid);

    if ($student->students_lrn != "") {
        compareLrn($student, $students_lrn_old, $student->students_lrn);
    }

    $query = checkUpdate($student);
    checkUpdateSchoolYearStudent($student);

    returnSuccess($student, "Student", $query);
}

checkEndpoint();
