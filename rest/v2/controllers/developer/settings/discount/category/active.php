<?php

// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../../models/developer/settings/discount/DiscountCategory.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$categroy_discount = new DiscountCategory($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("discountCategoryId", $_GET)) {
        // check data
        checkPayload($data);
        $categroy_discount->discount_category_aid = $_GET['discountCategoryId'];
        $categroy_discount->discount_category_is_active = trim($data["isActive"]);
        $categroy_discount->discount_category_updated = date("Y-m-d H:i:s");

        checkId($categroy_discount->discount_category_aid);
        $query = checkActive($categroy_discount);
        http_response_code(200);
        returnSuccess($categroy_discount, "Role", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
