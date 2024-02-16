<?php
require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/Parent.php';

$conn = null;
$conn = checkDbConnection();
$parents = new Parents($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);

// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    // check api key
    checkApiKey();

    // payload must not be empty
    checkPayload($data);

    // get data
    $parents->parents_search = $data["searchValue"];

    // value must not be empty
    checkKeyword($parents->parents_search);

    // search
    $query = checkSearch($parents);

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
