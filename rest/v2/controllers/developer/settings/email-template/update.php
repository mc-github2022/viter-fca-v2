<?php
$conn = null;
$conn = checkDbConnection();
$emailTemp = new EmailTemplate($conn);
$error = [];
$returnData = [];
if (array_key_exists("emailTemplateId", $_GET)) {
    checkPayload($data);
    $emailTemp->email_template_aid = $_GET['emailTemplateId'];
    $emailTemp->email_template_name = checkIndex($data, "email_template_name");
    $emailTemp->email_template_subject = checkIndex($data, "email_template_subject");
    $emailTemp->email_template_content = $data["email_template_content"];
    $emailTemp->email_template_receiver_id = checkIndex($data, "email_template_receiver_id");
    $emailTemp->email_template_category = checkIndex($data, "email_template_category");
    $emailTemp->email_template_cc_email = $data["email_template_cc_email"];
    $emailTemp->email_template_cc_email_two = $data["email_template_cc_email_two"];
    $emailTemp->email_template_updated = date("Y-m-d H:i:s");

    checkId($emailTemp->email_template_aid);
    $email_template_name_old = checkIndex($data, "email_template_name_old");
    compareName($emailTemp, $email_template_name_old, $emailTemp->email_template_name);

    $query = checkUpdate($emailTemp);
    returnSuccess($emailTemp, "Email Template", $query);
}

checkEndpoint();
