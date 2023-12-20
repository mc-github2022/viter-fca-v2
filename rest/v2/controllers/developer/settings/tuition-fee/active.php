<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require '../../../../models/developer/settings/TuitionFee.php';

$conn = null;
$conn = checkDbConnection();

$tuitionFee = new TuitionFee($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("tuitionfeeid", $_GET)) {
     
        checkPayload($data);
        $tuitionFee->tuition_fee_aid = $_GET['tuitionfeeid'];
        $tuitionFee->tuition_fee_active = trim($data["isActive"]);
        checkId($tuitionFee->tuition_fee_aid);
        $query = checkActive($tuitionFee);
        http_response_code(200);
        returnSuccess($tuitionFee, "Tuition Fee", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
