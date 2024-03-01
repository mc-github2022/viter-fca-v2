<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require 'functions.php';
require '../../../../models/developer/student/PaymentScheme.php';

$conn = null;
$conn = checkDbConnection();
$payment_scheme = new PaymentScheme($conn);

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("studentSyId", $_GET)) {

        $payment_scheme->school_year_students_aid = $_GET['studentSyId'];

        checkId($payment_scheme->school_year_students_aid);
        $query = checkReadByCurrentSyStudentAid($payment_scheme);

        http_response_code(200);
        getQueriedData($query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
