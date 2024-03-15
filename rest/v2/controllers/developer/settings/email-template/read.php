<?php
$conn = null;
$conn = checkDbConnection();
$emailTemp = new EmailTemplate($conn);
$error = [];
$returnData = [];

if (array_key_exists("emailTemplateId", $_GET)) {
    $emailTemp->email_template_aid = $_GET['emailTemplateId'];
    checkId($emailTemp->email_template_aid);
    $query = checkReadById($emailTemp);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($emailTemp);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
