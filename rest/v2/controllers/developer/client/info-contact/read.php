<?php
$conn = null;
$conn = checkDbConnection();
$infoContact = new InfoContact($conn);
$error = [];
$returnData = [];

if (array_key_exists("infocontact", $_GET)) {
    $infoContact->contact_aid = $_GET['infocontact'];
    checkId($infoContact->contact_aid);
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
