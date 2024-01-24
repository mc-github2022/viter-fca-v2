<?php
$conn = null;
$conn = checkDbConnection();
$profile = new Profile($conn);
$error = [];
$returnData = [];

if (array_key_exists("profileid", $_GET)) {
    $profile->student_aid = $_GET['profileid'];
    checkId($profile->user_system_aid);
    $query = checkReadById($profile);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($profile);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
