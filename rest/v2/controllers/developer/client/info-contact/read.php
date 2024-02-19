<?php
$conn = null;
$conn = checkDbConnection();
$infoContact = new InfoContact($conn);
$error = [];
$returnData = [];

if (array_key_exists("parentid", $_GET)) {
    $infoContact->emergency_contact_parent_id = $_GET['parentid'];
    checkId($infoContact->emergency_contact_parent_id);
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
