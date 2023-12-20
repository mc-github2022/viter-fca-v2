<?php
$conn = null;
$conn = checkDbConnection();
$tuitionFee = new TuitionFee($conn);
$error = [];
$returnData = [];

if (array_key_exists("tuitionfeeid", $_GET)) {
    $tuitionFee->tuition_fee_aid = $_GET['tuitionfeeid'];
    checkId($tuitionFee->tuition_fee_aid);
    $query = checkReadById($tuitionFee);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($tuitionFee);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
