<?php
$conn = null;
$conn = checkDbConnection();
$relationship = new Relationship($conn);
$error = [];
$returnData = [];

if (array_key_exists("relationshipid", $_GET)) {
    $relationship->relationship_aid = $_GET['relationshipid'];
    checkId($relationship->relationship_aid);
    $query = checkReadById($relationship);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($relationship);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
