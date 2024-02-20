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
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    // check data
    $query = checkReadAllGrade($tuitionFee);
    http_response_code(200);
    getQueriedData($query);
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
