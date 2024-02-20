<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$categroy_discount = new DiscountCategory($conn);
// get should not be present
if (array_key_exists("discountCategoryId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$categroy_discount->discount_category_is_active = 1;
$categroy_discount->discount_category_name = checkIndex($data, "discount_category_name");
$categroy_discount->discount_category_created = date("Y-m-d H:i:s");
$categroy_discount->discount_category_updated = date("Y-m-d H:i:s");

// check name
isNameExist($categroy_discount, $categroy_discount->discount_category_name);
// create
$query = checkCreate($categroy_discount);
returnSuccess($categroy_discount, "Discount Category", $query);
