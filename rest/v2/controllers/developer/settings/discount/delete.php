<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$discount = new Discount($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("discountId", $_GET)) {
    // get data
    $discount->discount_aid = $_GET['discountId'];

    checkId($discount->discount_aid);
    $query = checkDelete($discount);
    returnSuccess($discount, "Discount", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
