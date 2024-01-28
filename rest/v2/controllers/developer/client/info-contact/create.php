<?php
$conn = null;
$conn = checkDbConnection();
$contact = new InfoContact($conn);

checkPayload($data);
$contact->contact_user_id = checkIndex($data, "contact_user_id");
$contact->contact_name = checkIndex($data, "contact_name");
$contact->contact_email = checkIndex($data, "contact_email");
$contact->contact_mobile = checkIndex($data, "contact_mobile");
$contact->contact_landline = $data["contact_landline"];
$contact->contact_level = checkIndex($data, "contact_level");
$contact->contact_created = date("Y-m-d H:i:s");
$contact->contact_datetime = date("Y-m-d H:i:s");

isNameExist($contact, $contact->contact_name);

$query = checkCreate($contact);
returnSuccess($contact, "", $query);
checkEndpoint();