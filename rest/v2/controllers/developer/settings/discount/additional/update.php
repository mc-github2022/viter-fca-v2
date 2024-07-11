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
    // check data
    checkPayload($data);
    // get data
    $additional_discount->discount_additional_aid = $_GET['discountAdditionalId'];
    $additional_discount->discount_additional_name = checkIndex($data, "discount_additional_name");
    $additional_discount->discount_additional_percent = $data["discount_additional_percent"];
    $additional_discount->discount_additional_amount = $data["discount_additional_amount"];
    $additional_discount->discount_additional_base_rate_id = $data["discount_additional_base_rate_id"];
    $additional_discount->discount_additional_is_stand_alone_discount = $data["discount_additional_is_stand_alone_discount"];
    $additional_discount->discount_additional_is_applyed_scheme_a = $data["discount_additional_is_applyed_scheme_a"];
    $additional_discount->discount_additional_is_early_bird = $data["discount_additional_is_early_bird"];
    $additional_discount->discount_additional_updated = date("Y-m-d H:i:s");
    checkId($additional_discount->discount_additional_aid);


    $discount_additional_name_old = checkIndex($data, "discount_additional_name_old");

    compareName($additional_discount, $discount_additional_name_old, $additional_discount->discount_additional_name);
    // update
    $query = checkUpdate($additional_discount);
    returnSuccess($additional_discount, "Discount Additional", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
