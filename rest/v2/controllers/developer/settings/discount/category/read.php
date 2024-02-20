<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$categroy_discount = new DiscountCategory($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("discountCategoryId", $_GET)) {
    $categroy_discount->discount_category_aid = $_GET['discountCategoryId'];
    checkId($categroy_discount->discount_category_aid);
    $query = checkReadById($categroy_discount);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($categroy_discount);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
