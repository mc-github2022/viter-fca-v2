<?php
$conn = null;
$conn = checkDbConnection();
$student = new StudentInfo($conn);
$error = [];
$returnData = [];

if (array_key_exists("studentid", $_GET)) {
    $student->student_info_aid = $_GET['studentid'];
    checkId($student->student_info_aid);
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
