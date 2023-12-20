<?php
$conn = null;
$conn = checkDbConnection();
$tuitionFee = new TuitionFee($conn);
$error = [];
$returnData = [];
if (array_key_exists("tuitionfeeid", $_GET)) {
    $tuitionFee->tuition_fee_aid = $_GET['tuitionfeeid'];
    checkId($tuitionFee->tuition_fee_aid);

    //isAssociated($tuitionFee);
    $query = checkDelete($tuitionFee);
    returnSuccess($tuitionFee, "Tuition Fee", $query);
}

checkEndpoint();
