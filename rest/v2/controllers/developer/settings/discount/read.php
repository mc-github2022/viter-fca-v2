<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$discount = new Discount($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("discountid", $_GET)) {
    $discount->discount_aid = $_GET['discountid'];
    checkId($discount->discount_aid);
    $query = checkReadById($discount);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($discount);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
