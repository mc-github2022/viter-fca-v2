<?php
$conn = null;
$conn = checkDbConnection();
$guardian = new InfoGuardian($conn);
$error = [];
$returnData = [];

if (array_key_exists("parentid", $_GET)) {
    $guardian->guardian_parent_id = $_GET['parentid'];
    checkId($guardian->guardian_parent_id);
    $query = checkReadById($guardian);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($guardian);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
