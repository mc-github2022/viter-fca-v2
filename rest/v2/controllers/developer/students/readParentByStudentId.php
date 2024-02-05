<?php
require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/student-info/StudentInfo.php';
require  'functions.php';


$conn = null;
$conn = checkDbConnection();
$student = new StudentInfo($conn);
$error = [];
$returnData = [];

if (array_key_exists("studentid", $_GET)) {

    $student->student_info_user_id = $_GET['studentid'];
    $query = checkAddressByStudentId($student);
    http_response_code(200);
    getQueriedData($query);
}



checkEndpoint();
