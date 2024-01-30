<?php
$conn = null;
$conn = checkDbConnection();
$student = new StudentInfo($conn);
$error = [];
$returnData = [];
if (array_key_exists("studentid", $_GET)) {
    checkPayload($data);
    $student->student_info_aid = $_GET['studentid'];
    $student->student_info_user_id = checkIndex($data, "student_info_user_id");
    $student->student_info_user_id = checkIndex($data, "student_info_user_id");
    $student->student_info_datetime = date("Y-m-d H:i:s");
    checkId($student->student_aid);
    $student_name_old = checkIndex($data, "student_name_old");
    compareName($student, $student_name_old, $student->student_name);
    $query = checkUpdate($student);
    returnSuccess($student, "student", $query);
}

checkEndpoint();
