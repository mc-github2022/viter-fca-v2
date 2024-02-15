<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require '../../../../models/developer/settings/Staff.php';

$conn = null;
$conn = checkDbConnection();
$staff = new Staff($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);

// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    // check api key
    checkApiKey();

    // payload must not be empty
    checkPayload($data);

    // get data
    $staff->settings_staff_search = $data["searchValue"];

    // value must not be empty
    checkKeyword($staff->settings_staff_search);

    // search
    $query = checkSearch($staff);

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
