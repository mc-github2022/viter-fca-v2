<?php
$conn = null;
$conn = checkDbConnection();
$emailTemp = new EmailTemplate($conn);
if (array_key_exists("emailTemplateId", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$emailTemp->email_template_name = checkIndex($data, "email_template_name");
$emailTemp->email_template_content = $data["email_template_content"];
$emailTemp->email_template_receiver = checkIndex($data, "email_template_receiver");
$emailTemp->email_template_category = checkIndex($data, "email_template_category");
$emailTemp->email_template_cc_email = checkIndex($data, "email_template_cc_email");
$emailTemp->email_template_cc_email_two = checkIndex($data, "email_template_cc_email_two");
$emailTemp->email_template_is_active = 1;
$emailTemp->email_template_created = date("Y-m-d H:i:s");
$emailTemp->email_template_updated = date("Y-m-d H:i:s");

isNameExist($emailTemp, $emailTemp->email_template_name);

$query = checkCreate($emailTemp);
returnSuccess($emailTemp, "Email Template", $query);
