<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require '../../../../models/developer/settings/EmailTemplate.php';

$conn = null;
$conn = checkDbConnection();

$emailTemp = new EmailTemplate($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("emailTemplateId", $_GET)) {

        checkPayload($data);
        $emailTemp->email_template_aid = $_GET['emailTemplateId'];
        $emailTemp->email_template_is_active = trim($data["isActive"]);
        $emailTemp->email_template_updated = date("Y-m-d H:i:s");

        checkId($emailTemp->email_template_aid);
        $query = checkActive($emailTemp);
        http_response_code(200);
        returnSuccess($emailTemp, "Email Template", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
