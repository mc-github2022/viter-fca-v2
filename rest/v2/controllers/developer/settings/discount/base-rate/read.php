<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$basesRate = new BaseRate($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("baseRateId", $_GET)) {
    $basesRate->settings_base_rate_aid = $_GET['baseRateId'];
    checkId($basesRate->settings_base_rate_aid);
    $query = checkReadById($basesRate);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($basesRate);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
