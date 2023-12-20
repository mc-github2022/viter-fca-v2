<?php
$conn = null;
$conn = checkDbConnection();
$tuitionFee = new TuitionFee($conn);
$error = [];
$returnData = [];
if (array_key_exists("tuitionfeeid", $_GET)) {
    checkPayload($data);
    $tuitionFee->tuition_fee_aid = $_GET['tuitionfeeid'];
    $tuitionFee->tuition_fee_category_id = checkIndex($data, "tuition_fee_category_id");
    $tuitionFee->tuition_fee_grade_id = checkIndex($data, "tuition_fee_grade_id");
    $tuitionFee->tuition_fee_entrance = checkIndex($data, "tuition_fee_entrance");
    $tuitionFee->tuition_fee_miscellaneous = checkIndex($data, "tuition_fee_miscellaneous");
    $tuitionFee->tuition_fee_tuition = checkIndex($data, "tuition_fee_tuition");
    $tuitionFee->tuition_fee_books = checkIndex($data, "tuition_fee_books");
    $tuitionFee->tuition_fee_start_date = checkIndex($data, "tuition_fee_start_date");
    $tuitionFee->tuition_fee_end_date = checkIndex($data, "tuition_fee_end_date");
    $tuitionFee->tuition_fee_datetime = date("Y-m-d H:i:s");
    checkId($tuitionFee->tuition_fee_aid);
    
    $tuition = "$tuitionFee->tuition_fee_category_id, $tuitionFee->tuition_fee_grade_id";
    $tuition_old = "$tuitionFee->tuition_fee_category_id_old, $tuitionFee->tuition_fee_grade_id_old";

    compareName($tuitionFee, $tuition_old, $tuition );

    $query = checkUpdate($tuitionFee);
    returnSuccess($tuitionFee, "Tuition Fee", $query);
}

checkEndpoint();
