<?php
require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/parent/Parents.php';
require 'functions.php';
$conn = null;
$conn = checkDbConnection();
$parents = new Parents($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// only if read by id
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    // check api key
    checkApiKey();

    $parents->user_other_email = $data['email'];

    // read by id
    $query = checkReadUserOtherAccount($parents);

    // return data
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
