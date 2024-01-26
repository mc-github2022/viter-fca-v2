<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../models/developer/settings/Discount.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$discount = new Discount($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("discountid", $_GET)) {
        // check data
        checkPayload($data);
        $discount->discount_aid = $_GET['discountid'];
        $discount->discount_is_active = trim($data["isActive"]);
        checkId($discount->discount_aid);
        $query = checkActive($discount);
        http_response_code(200);
        returnSuccess($discount, "Role", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
