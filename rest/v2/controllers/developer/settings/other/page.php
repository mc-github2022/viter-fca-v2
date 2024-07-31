<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../models/developer/settings/UserOther.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_other = new UserOther($conn);
$response = new Response();
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        $userParent = $data["role_is_parent"];

        // get data
        $user_other->user_other_start = $_GET['start'];
        $user_other->user_other_total = 10;
        checkLimitId($user_other->user_other_start, $user_other->user_other_total);
        $query = $userParent == 1 ? checkReadLimit($user_other) : checkReadLimitStaff($user_other);
        $total_result = $userParent == 1 ? checkReadAll($user_other) : checkReadAllStaff($user_other);
        http_response_code(200);

        checkReadQuery(
            $query,
            $total_result,
            $user_other->user_other_total,
            $user_other->user_other_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
