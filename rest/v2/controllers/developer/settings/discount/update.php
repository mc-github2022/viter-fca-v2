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
    // check data
    checkPayload($data);
    // get data
    $discount->discount_aid = $_GET['discountid'];
    $discount->discount_type = checkIndex($data, "discount_type");
    $discount->discount_tuition_fee = checkIndex($data, "discount_tuition_fee");
    $discount->discount_entrance_fee = checkIndex($data, "discount_entrance_fee");
    $discount->discount_category = checkIndex($data, "discount_category");
    $discount->discount_qualifications = checkIndex($data, "discount_qualifications");
    $discount->discount_duration = checkIndex($data, "discount_duration");
    $discount->discount_maintaining_grade = checkIndex($data, "discount_maintaining_grade");
    $discount->discount_requirement = checkIndex($data, "discount_requirement");
    $discount->discount_datetime = date("Y-m-d H:i:s");
    checkId($discount->discount_aid);
    // update
    $query = checkUpdate($discount);
    returnSuccess($discount, "Role", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
