<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require 'functions.php';
require '../../../../models/developer/student/PaymentScheme.php';

$conn = null;
$conn = checkDbConnection();
$payment_scheme = new PaymentScheme($conn);
// $encrypt = new Encryption();
$body = file_get_contents("php://input");
$data = json_decode($body, true);

if (array_key_exists("studentSyId", $_GET)) {
    checkPayload($data);

    $payment_scheme->school_year_students_aid = $_GET['studentSyId'];
    $payment_scheme->school_year_students_is_accept_payment = 0;
    $payment_scheme->school_year_students_is_notify = 0;
    $payment_scheme->school_year_students_schedule_fees_id = $data["tuition_fee_aid"];
    $payment_scheme->school_year_students_rate_id = checkIndex($data, "tuition_category_aid");
    $payment_scheme->school_year_students_datetime = date("Y-m-d H:i:s");

    // // use this update with no email if parent has account
    $query = checkUpdatePaymentSchemeSaveOrRevert($payment_scheme);
    // return success 
    http_response_code(200);
    returnSuccess($payment_scheme, "Payment Scheme", $query);
}

checkEndpoint();