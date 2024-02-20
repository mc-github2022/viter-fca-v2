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
    // get data
    $categroy_discount->discount_category_aid = $_GET['discountCategoryId'];
    checkId($categroy_discount->discount_category_aid);

    isAssociated($categroy_discount);
    $query = checkDelete($categroy_discount);
    returnSuccess($categroy_discount, "Discount Category", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
