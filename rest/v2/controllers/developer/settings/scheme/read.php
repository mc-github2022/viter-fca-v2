<?php
$conn = null;
$conn = checkDbConnection();
$scheme = new Scheme($conn);
$error = [];
$returnData = [];

if (array_key_exists("schemeid", $_GET)) {
    $scheme->learning_type_aid = $_GET['schemeid'];
    checkId($scheme->learning_type_aid);
    $query = checkReadById($scheme);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($scheme);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
