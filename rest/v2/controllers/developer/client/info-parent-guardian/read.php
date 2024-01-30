<?php
$conn = null;
$conn = checkDbConnection();
$parent = new InfoParentGuardian($conn);
$error = [];
$returnData = [];

if (array_key_exists("parentinfoaid", $_GET)) {
    $parent->parent_guardian_info_user_id = $_GET['parentinfoaid'];
    checkId($parent->parent_guardian_info_user_id);
    $query = checkReadById($parent);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($parent);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
