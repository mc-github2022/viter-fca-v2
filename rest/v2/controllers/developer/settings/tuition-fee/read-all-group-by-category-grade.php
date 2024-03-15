<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require 'functions.php';
require '../../../../models/developer/settings/TuitionFee.php';

$conn = null;
$conn = checkDbConnection();

$body = file_get_contents("php://input");
$data = json_decode($body, true);
$tuitionFee = new TuitionFee($conn);

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);
    $tuitionFee->tuition_fee_grade_id = checkIndex($data, "gradeId");
    if ($tuitionFee->tuition_fee_grade_id !== "0") {
        $query = checkReadAllGroupBYCategoryGradeId($tuitionFee);
        http_response_code(200);
        getQueriedData($query);
    }
    $query = checkReadAllGroupBYCategoryGrade($tuitionFee);
    http_response_code(200);
    getQueriedData($query);
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
