<?php

require 'functions.php';

$conn = null;
$conn = checkDbConnection();
$student = new Student($conn);

if (array_key_exists("studentid", $_GET)) {
    checkEndpoint();
}

checkPayload($data);

$student->students_is_active = 1;
$student->students_parent_id = $data["students_parent_id"];
$student->students_lrn = $data["students_lrn"];
$student->students_fname = checkIndex($data, "students_fname");
$student->students_lname = checkIndex($data, "students_lname");
$student->students_mname = $data["students_mname"];
$student->students_gender = checkIndex($data, "students_gender");
$student->students_birth_date = $data["students_birth_date"];
$student->students_email = $data["students_email"];
$student->students_mobile = $data["students_mobile"];
$student->students_landline = $data["students_landline"];
$student->students_created = date("Y-m-d H:i:s");
$student->students_datetime = date("Y-m-d H:i:s");
$student->school_year_students_last_learning_type = checkIndex($data, "school_year_students_last_learning_type");
$student->school_year_students_sy_id = checkIndex($data, "school_year_students_sy_id");
$student->school_year_students_grade_level_id = checkIndex($data, "school_year_students_grade_level_id");

if ($student->students_lrn != "") {
    isLrnExist($student, $student->students_lrn);
}

$query = checkCreate($student);

checkCreateSchoolYearStudent($student);

returnSuccess($student, "Student", $query);
