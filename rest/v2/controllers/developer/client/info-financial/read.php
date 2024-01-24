<?php
$conn = null;
$conn = checkDbConnection();
$infoFinancial = new InfoFinancial($conn);
$error = [];
$returnData = [];

if (array_key_exists("parentuid", $_GET)) {
    $infoFinancial->financial_info_user_id = $_GET['parentuid'];
    checkId($infoFinancial->financial_info_user_id);
    $query = checkReadById($infoFinancial);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($infoFinancial);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
