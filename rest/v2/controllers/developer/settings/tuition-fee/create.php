<?php
$conn = null;
$conn = checkDbConnection();
$tuitionFee = new TuitionFee($conn);
if (array_key_exists("tuitionfeeid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$tuitionFee->tuition_fee_category_id = checkIndex($data, "tuition_fee_category_id");
$tuitionFee->tuition_fee_grade_id = checkIndex($data, "tuition_fee_grade_id");
$tuitionFee->tuition_fee_scheme_id = checkIndex($data, "tuition_fee_scheme_id");
$tuitionFee->tuition_fee_miscellaneous = checkIndex($data, "tuition_fee_miscellaneous");
$tuitionFee->tuition_fee_tuition = checkIndex($data, "tuition_fee_tuition");
$tuitionFee->tuition_fee_books = checkIndex($data, "tuition_fee_books");
$tuitionFee->tuition_fee_admission = checkIndex($data, "tuition_fee_admission");
$tuitionFee->tuition_fee_monthly = $data["tuition_fee_monthly"];
$tuitionFee->tuition_fee_how_many_months = $data["tuition_fee_how_many_months"];
$tuitionFee->tuition_fee_upon_enrollment = checkIndex($data, "tuition_fee_upon_enrollment");
$tuitionFee->tuition_fee_total_monthly = checkIndex($data, "tuition_fee_total_monthly");
$tuitionFee->tuition_fee_active = 1;
$tuitionFee->tuition_fee_created = date("Y-m-d H:i:s");
$tuitionFee->tuition_fee_updated = date("Y-m-d H:i:s");

$tuition = $data["tuition_name"];


isNameExist($tuitionFee, $tuition);


$query = checkCreate($tuitionFee);
returnSuccess($tuitionFee, "Tuition Fee", $query);
