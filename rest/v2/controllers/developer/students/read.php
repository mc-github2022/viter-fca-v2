<?php
$conn = null;
$conn = checkDbConnection();
$student = new Students($conn);
$error = [];
$returnData = [];

if (array_key_exists("studentid", $_GET)) {
    $student->student_aid = $_GET['studentid'];
    checkId($student->student_aid);
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
