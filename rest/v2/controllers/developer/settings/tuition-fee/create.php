<?php
require 'functions.php';

$conn = null;
$conn = checkDbConnection();
$tuitionFee = new TuitionFee($conn);
if (array_key_exists("tuitionfeeid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$tuitionFee->tuition_fee_category_id = checkIndex($data, "tuition_fee_category_id");
$tuitionFee->tuition_fee_grade_id = checkIndex($data, "tuition_fee_grade_id");
$tuitionFee->tuition_fee_entrance = checkIndex($data, "tuition_fee_entrance");
$tuitionFee->tuition_fee_miscellaneous = checkIndex($data, "tuition_fee_miscellaneous");
$tuitionFee->tuition_fee_tuition = checkIndex($data, "tuition_fee_tuition");
$tuitionFee->tuition_fee_books = checkIndex($data, "tuition_fee_books");
$tuitionFee->tuition_fee_start_date = checkIndex($data, "tuition_fee_start_date");
$tuitionFee->tuition_fee_end_date = checkIndex($data, "tuition_fee_end_date");

$tuitionFee->tuition_fee_active = 1;
$tuitionFee->tuition_fee_created = date("Y-m-d H:i:s");
$tuitionFee->tuition_fee_datetime = date("Y-m-d H:i:s");

$tuition = "$tuitionFee->tuition_fee_category_id, $tuitionFee->tuition_fee_grade_id";

// isTuitionFeeExist($tuitionFee);

isNameExist($tuitionFee, $tuition);


$query = checkCreate($tuitionFee);
returnSuccess($tuitionFee, "Tuition Fee", $query);