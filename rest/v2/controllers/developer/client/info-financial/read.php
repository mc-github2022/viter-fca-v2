<?php
$conn = null;
$conn = checkDbConnection();
$infoFinancial = new InfoFinancial($conn);
$error = [];
$returnData = [];

if (array_key_exists("infofinancial", $_GET)) {
    $infoContact->contact_aid = $_GET['infofinancial'];
    checkId($infoContact->contact_aid);
    $query = checkReadById($infoContact);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($infoFinancial);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
