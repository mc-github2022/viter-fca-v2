<?php
$conn = null;
$conn = checkDbConnection();
$grade_level = new GradeLevel($conn);
$error = [];
$returnData = [];

if (array_key_exists("gradelevelid", $_GET)) {
    $grade_level->grade_level_aid = $_GET['gradelevelid'];
    checkId($grade_level->grade_level_aid);
    $query = checkReadById($grade_level);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($grade_level);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
