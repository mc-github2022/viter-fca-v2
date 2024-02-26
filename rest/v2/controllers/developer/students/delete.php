<?php
require "functions.php";

$conn = null;
$conn = checkDbConnection();
$student = new Student($conn);

if (array_key_exists("studentid", $_GET) && array_key_exists("syid", $_GET)) {

    $student->students_aid = $_GET['studentid'];
    $student->school_year_students_sy_id = $_GET['syid'];
    checkId($student->students_aid);

    $query = checkDelete($student);

    checkDeleteSchoolYearStudents($student);

    returnSuccess($student, "Student", $query);
}

checkEndpoint();
