<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../jwt/vendor/autoload.php';
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
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    $user_other->user_other_email = $data['user_other_email'];
    $password = $data['password'];

    $key = "jwt_admin_ko_ito";

    $isAdminAccount = getResultData($user_other->readAdminLogin());

    if (count($isAdminAccount) > 0) {
        $result = checkAdminLogin($user_other);
    } else {
        $result = checkLogin($user_other);
    }

    $row = $result->fetch(PDO::FETCH_ASSOC);
    extract($row);

    loginAccess(
        $password,
        $user_other_password,
        $user_other_email,
        $row,
        $result,
        $key
    );
}

http_response_code(200);
