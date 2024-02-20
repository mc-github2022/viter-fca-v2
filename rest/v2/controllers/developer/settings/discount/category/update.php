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
    // check data
    checkPayload($data);
    // get data
    $categroy_discount->discount_category_aid = $_GET['discountCategoryId'];
    $categroy_discount->discount_category_name = checkIndex($data, "discount_category_name");
    $categroy_discount->discount_category_updated = date("Y-m-d H:i:s");
    checkId($categroy_discount->discount_category_aid);


    $discount_category_name_old = checkIndex($data, "discount_category_name_old");

    compareName($categroy_discount, $discount_category_name_old, $categroy_discount->discount_category_name);
    // update
    $query = checkUpdate($categroy_discount);
    returnSuccess($categroy_discount, "Discount Category", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
