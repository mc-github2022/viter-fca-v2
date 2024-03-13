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
    $student->current_students_sy_id = $data['current_students_sy_id'];

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
    $student->students_address_id = $data["students_address_id"];
    $student->students_institutional_email = $data["students_institutional_email"];
    $student->students_family_doctor = $data["students_family_doctor"];
    $student->students_family_doctor_contact = $data["students_family_doctor_contact"];
    $student->students_medical_remarks = $data["students_medical_remarks"];
    $student->students_family_circumstances = $data["students_family_circumstances"];

    $student->current_students_last_learning_type = $data["current_students_last_learning_type"];
    $student->current_students_grade_level_id = $data["current_students_grade_level_id"];
    $student->current_students_last_school_attended = $data["current_students_last_school_attended"];
    $student->current_students_last_gpa = $data["current_students_last_gpa"];
    $student->current_students_last_grade_level_id = $data["current_students_last_grade_level_id"];
    $student->current_students_last_school_address = $data["current_students_last_school_address"];
    $student->current_students_last_remarks = $data["current_students_last_remarks"];

    $student->students_datetime = date("Y-m-d H:i:s");

    $students_lrn_old = $data["students_lrn_old"];

    checkId($student->students_aid);

    if ($student->students_lrn != "") {
        compareLrn($student, $students_lrn_old, $student->students_lrn);
    }

    // for student
    $query = checkUpdate($student);

    // for school year student 
    checkUpdateSchoolYearStudent($student);

    // for school year student current
    checkUpdateSchoolYearStudentCurrent($student);

    returnSuccess($student, "Student", $query);
}

checkEndpoint();
