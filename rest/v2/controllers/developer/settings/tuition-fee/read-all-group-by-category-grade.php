<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require 'functions.php';
require '../../../../models/developer/settings/TuitionFee.php';

$conn = null;
$conn = checkDbConnection();

$tuitionFee = new TuitionFee($conn);

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    $query = checkReadAllGroupBYCategoryGrade($tuitionFee);
    http_response_code(200);
    getQueriedData($query);
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
