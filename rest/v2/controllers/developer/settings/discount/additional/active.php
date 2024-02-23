<?php

// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../../models/developer/settings/discount/DiscountAdditional.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$additional_discount = new DiscountAdditional($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("discountAdditionalId", $_GET)) {
        // check data
        checkPayload($data);
        $additional_discount->discount_additional_aid = $_GET['discountAdditionalId'];
        $additional_discount->discount_additional_is_active = trim($data["isActive"]);
        $additional_discount->discount_additional_updated = date("Y-m-d H:i:s");

        checkId($additional_discount->discount_additional_aid);
        $query = checkActive($additional_discount);
        http_response_code(200);
        returnSuccess($additional_discount, "Discount Additional", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
