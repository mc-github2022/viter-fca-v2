<?php

// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../../models/developer/settings/discount/BaseRate.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$basesRate = new BaseRate($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("baseRateId", $_GET)) {
        // check data
        checkPayload($data);
        $basesRate->settings_base_rate_aid = $_GET['baseRateId'];
        $basesRate->settings_base_rate_is_active = trim($data["isActive"]);
        $basesRate->settings_base_rate_updated = date("Y-m-d H:i:s");

        checkId($basesRate->settings_base_rate_aid);
        $query = checkActive($basesRate);
        http_response_code(200);
        returnSuccess($basesRate, "Base Rate", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
