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
    $tuitionFee->tuition_fee_scheme_id = checkIndex($data, "tuition_fee_scheme_id");
    $tuitionFee->tuition_fee_miscellaneous = checkIndex($data, "tuition_fee_miscellaneous");
    $tuitionFee->tuition_fee_tuition = checkIndex($data, "tuition_fee_tuition");
    $tuitionFee->tuition_fee_books = checkIndex($data, "tuition_fee_books");
    $tuitionFee->tuition_fee_admission = checkIndex($data, "tuition_fee_admission");
    $tuitionFee->tuition_fee_upon_enrollment = checkIndex($data, "tuition_fee_upon_enrollment");
    $tuitionFee->tuition_fee_updated = date("Y-m-d H:i:s");
    checkId($tuitionFee->tuition_fee_aid);

    $tuition = $data["tuition_name"];
    $tuition_old = $data["tuition_name_old"];


    compareName($tuitionFee, $tuition_old, $tuition);

    $query = checkUpdate($tuitionFee);
    returnSuccess($tuitionFee, "Tuition Fee", $query);
}

checkEndpoint();
