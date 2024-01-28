<?php
require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/account/Profile.php';

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$profile = new Profile($conn);
// get $_GET data 
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("profileid", $_GET)) {
        // get task id from query string
        $profile->user_system_aid = $_GET['profileid'];
        //check to see if task id in query string is not empty and is number, if not return json error
        checkId($profile->user_system_aid);
        $query = checkReadById($profile);
        http_response_code(200);
        getQueriedData($query);
    }

    // if request is a GET e.g. /client
    if (empty($_GET)) {
        $query = checkReadAll($profile);
        http_response_code(200);
        getQueriedData($query);
    }

    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
