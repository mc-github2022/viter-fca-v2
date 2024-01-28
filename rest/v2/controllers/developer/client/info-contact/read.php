<?php
$conn = null;
$conn = checkDbConnection();
$infoContact = new InfoContact($conn);
$error = [];
$returnData = [];

if (array_key_exists("parentuid", $_GET)) {
    $infoContact->contact_user_id = $_GET['parentuid'];
    checkId($infoContact->contact_user_id);
    $query = checkReadById($infoContact);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($infoContact);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
