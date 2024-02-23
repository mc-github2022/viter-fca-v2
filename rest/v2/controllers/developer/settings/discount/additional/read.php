<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$additional_discount = new DiscountAdditional($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("discountAdditionalId", $_GET)) {
    $additional_discount->discount_additional_aid = $_GET['discountAdditionalId'];
    checkId($additional_discount->discount_additional_aid);
    $query = checkReadById($additional_discount);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($additional_discount);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
