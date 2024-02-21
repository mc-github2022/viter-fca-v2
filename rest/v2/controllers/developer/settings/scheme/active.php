<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require '../../../../models/developer/settings/Scheme.php';

$conn = null;
$conn = checkDbConnection();

$scheme = new Scheme($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("schemeid", $_GET)) {
        checkPayload($data);
        $scheme->scheme_aid = $_GET['schemeid'];
        $scheme->scheme_active = trim($data["isActive"]);
        $scheme->scheme_datetime = date("Y-m-d H:i:s");

        checkId($scheme->scheme_aid);
        $query = checkActive($scheme);
        http_response_code(200);
        returnSuccess($scheme, "Scheme", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
