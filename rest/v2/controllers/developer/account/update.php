<?php
$conn = null;
$conn = checkDbConnection();
$profile = new Profile($conn);
$error = [];
$returnData = [];
if (array_key_exists("profileid", $_GET)) {
    checkPayload($data);
    $profile->user_system_aid = $_GET['profileid'];
    $profile->user_system_fname = checkIndex($data, "user_system_fname");
    $profile->user_system_lname = checkIndex($data, "user_system_lname");
    $profile->user_system_email = checkIndex($data, "user_system_email");
    // $profile->student_datetime = date("Y-m-d H:i:s");
    checkId($profile->user_system_aid);
    // $student_name_old = checkIndex($data, "student_name_old");
    // compareName($profile, $student_name_old, $student->student_name);
    $query = checkUpdate($profile);
    returnSuccess($profile, "Profile", $query);
}

checkEndpoint();
