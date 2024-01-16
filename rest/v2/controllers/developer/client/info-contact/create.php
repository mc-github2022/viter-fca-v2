<?php
$conn = null;
$conn = checkDbConnection();
$InfoContact = new InfoContact($conn);
if (array_key_exists("infocontact", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$InfoContact->contact_user_id = checkIndex($data, "contact_user_id");
$InfoContact->contact_name = checkIndex($data, "contact_name");
$InfoContact->contact_email = checkIndex($data, "contact_email");
$InfoContact->contact_mobile = checkIndex($data, "contact_mobile");
$InfoContact->contact_landline = checkIndex($data, "contact_landline");
$InfoContact->contact_level = checkIndex($data, "contact_level");
$InfoContact->contact_created = date("Y-m-d H:i:s");
$InfoContact->contact_datetime = date("Y-m-d H:i:s");

isNameExist($InfoContact, $InfoContact->contact_name);

$query = checkCreate($InfoContact);
returnSuccess($InfoContact, "InfoContact", $query);
