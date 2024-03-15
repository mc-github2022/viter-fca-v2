<?php
$conn = null;
$conn = checkDbConnection();
$emailTemp = new EmailTemplate($conn);

$error = [];
$returnData = [];
if (array_key_exists("emailTemplateId", $_GET)) {
    $emailTemp->email_template_aid = $_GET['emailTemplateId'];
    checkId($emailTemp->email_template_aid);

    $query = checkDelete($emailTemp);
    returnSuccess($emailTemp, "Email Template", $query);
}

checkEndpoint();
