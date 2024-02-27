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
    // check data
    checkPayload($data);
    // get data
    $discount->discount_aid = $_GET['discountId'];
    $discount->discount_type = checkIndex($data, "discount_type");
    $discount->discount_tuition_fee = checkIndex($data, "discount_tuition_fee");
    $discount->discount_admission_fee = $data["discount_admission_fee"];
    $discount->discount_category_id = checkIndex($data, "discount_category_id");
    $discount->discount_qualification = checkIndex($data, "discount_qualification");
    $discount->discount_duration = checkIndex($data, "discount_duration");
    $discount->discount_maintaining_grade = $data["discount_maintaining_grade"];
    $discount->discount_requirement = $data["discount_requirement"];
    $discount->discount_updated = date("Y-m-d H:i:s");
    checkId($discount->discount_aid);
    // update
    $query = checkUpdate($discount);
    returnSuccess($discount, "Discount", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
