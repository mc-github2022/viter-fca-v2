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
    // get data
    $discount->discount_aid = $_GET['discountid'];
    // $column_name = strtolower($data['item']);
    checkId($discount->discount_aid);
    // delete
    // if ($column_name == "developer") {
    //     isUserSystemAssociated($discount);
    // } else {
    //     isUserOtherAssociated($discount);
    // }

    $query = checkDelete($discount);
    // checkDropColumnName($discount, $column_name);
    returnSuccess($discount, "Discount", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
