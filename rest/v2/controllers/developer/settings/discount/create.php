<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$discount = new Discount($conn);
// get should not be present
if (array_key_exists("discountid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$discount->discount_is_active = 1;
$discount->discount_type = checkIndex($data, "discount_type");
$discount->discount_tuition_fee = checkIndex($data, "discount_tuition_fee");
$discount->discount_entrance_fee = checkIndex($data, "discount_type");
$discount->discount_category = checkIndex($data, "discount_category");
$discount->discount_qualifications = checkIndex($data, "discount_qualifications");
$discount->discount_duration = checkIndex($data, "discount_duration");
$discount->discount_maintaining_grade = checkIndex($data, "discount_maintaining_grade");
$discount->discount_requirement = checkIndex($data, "discount_requirement");
$discount->discount_created = date("Y-m-d H:i:s");
$discount->discount_datetime = date("Y-m-d H:i:s");
// string value convert to lower case
$column_name = strtolower(str_replace(" ", "_", $data["discount_type"]));
// check name
isNameExist($discount, $discount->discount_type);
// create
$query = checkCreate($discount);
// add column
checkAddColumn($discount, $column_name);
// update column value after adding
checkUpdateColumnValue($discount, $column_name);
returnSuccess($discount, "Discount", $query);
