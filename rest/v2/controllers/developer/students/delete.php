<?php
$conn = null;
$conn = checkDbConnection();
$student = new Student($conn);

if (array_key_exists("studentid", $_GET)) {
    $student->students_aid = $_GET['studentid'];
    checkId($student->students_aid);

    $query = checkDelete($student);
    returnSuccess($student, "Student", $query);
}

checkEndpoint();
