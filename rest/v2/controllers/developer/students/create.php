<?php

require 'functions.php';

$conn = null;
$conn = checkDbConnection();
$student = new Student($conn);

if (array_key_exists("studentid", $_GET)) {
    checkEndpoint();
}

checkPayload($data);

$student->students_lrn = checkIndex($data, "students_lrn");
$student->students_fname = checkIndex($data, "students_fname");
$student->students_lname = checkIndex($data, "students_lname");
$student->students_mname = checkIndex($data, "students_mname");
$student->students_gender = checkIndex($data, "students_gender");
$student->students_birth_date = checkIndex($data, "students_birth_date");
$student->students_email = checkIndex($data, "students_email");
$student->students_mobile = checkIndex($data, "students_mobile");
$student->students_landline = checkIndex($data, "students_landline");
$student->students_created = date("Y-m-d H:i:s");
$student->students_datetime = date("Y-m-d H:i:s");
$student->school_year_students_sy_id = checkIndex($data, "school_year_students_sy_id");
$student->school_year_students_last_grade_level_id = checkIndex($data, "school_year_students_last_grade_level_id");

// isNameExist($student, $student->student_name);

$query = checkCreate($student);
checkCreateSchoolYearStudent($student);

returnSuccess($student, "Student", $query);
