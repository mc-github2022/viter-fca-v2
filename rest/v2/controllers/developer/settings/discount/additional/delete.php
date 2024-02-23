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
    // get data
    $additional_discount->discount_additional_aid = $_GET['discountAdditionalId'];
    checkId($additional_discount->discount_additional_aid);

    isAssociated($additional_discount);
    $query = checkDelete($additional_discount);
    returnSuccess($additional_discount, "Discount Additional", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
