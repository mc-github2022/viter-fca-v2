<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require 'functions.php';
require '../../../../models/developer/settings/TuitionFee.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes 
$tuitionFee = new TuitionFee($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    checkPayload($data);

    if (empty($_GET)) {
        $tuitionFee->tuition_fee_category_id = checkIndex($data, "category_id");
        $tuitionFee->tuition_fee_grade_id = checkIndex($data, "grade_id");

        $query = checkReadByCategoryAndGrade($tuitionFee);
        http_response_code(200);
        getQueriedData($query);
    }
}


http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
