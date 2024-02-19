<?php
$conn = null;
$conn = checkDbConnection();
$parent = new InfoParent($conn);
$error = [];
$returnData = [];

if (array_key_exists("parentid", $_GET)) {
    $parent->parents_aid = $_GET['parentid'];
    checkId($parent->parents_aid);
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
