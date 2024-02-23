<?php
$conn = null;
$conn = checkDbConnection();
$student = new Student($conn);

if (array_key_exists("studentid", $_GET)) {
    $student->students_aid = $_GET['studentid'];
    checkId($student->students_aid);

    $query = checkReadById($student);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($student);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
