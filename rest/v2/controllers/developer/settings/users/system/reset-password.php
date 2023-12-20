<?php
// set http header
require '../../../../../core/header.php';
require '../../../../../core/Encryption.php';
// use needed functions
require '../../../../../core/functions.php';
// use notification template
require '../../../../../notification/reset-password.php';
// use needed classes
require '../../../../../models/developer/settings/user/system/UserSystem.php';



// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_system = new UserSystem($conn);
$response = new Response();
$encrypt = new Encryption();
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// check if userid is in the url e.g. /usersystem/1
$error = [];
$returnData = [];
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    // check data
    checkPayload($data);
    // get task id from query string
    // get userid from query string

    $user_system->user_system_key = $encrypt->doHash(rand());
    $user_system->user_system_datetime = date("Y-m-d H:i:s");
    $user_system->user_system_email = trim($data["email"]);
    $password_link = "/system/create-password";

    $query = $user_system->readLogin();
    if ($query->rowCount() == 0) {
        returnError("Invalid email. Please use a registered one.");
    }
    $mail = sendEmail(
        $password_link,
        $user_system->user_system_email,
        $user_system->user_system_key
    );

    $query = checkResetPassword($user_system);
    http_response_code(200);
    returnSuccess($user_system, "User system", $query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
