<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/UserOther.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_other = new UserOther($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// check if userid is in the url e.g. /user/1
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("userotherid", $_GET)) {
        // check data
        checkPayload($data);
        $user_other->user_other_aid = $_GET['userotherid'];
        $user_other->user_other_is_active = trim($data["isActive"]);
        $user_other->user_other_datetime = date("Y-m-d H:i:s");

        checkId($user_other->user_other_aid);
        $query = checkActive($user_other);
        http_response_code(200);
        returnSuccess($user_other, "user_other", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
