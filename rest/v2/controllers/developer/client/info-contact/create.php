<?php
$conn = null;
$conn = checkDbConnection();
$infoContact = new InfoContact($conn);

checkPayload($data);
$infoContact->emergency_contact_parent_id = checkIndex($data, "emergency_contact_parent_id");
$infoContact->emergency_contact_name = checkIndex($data, "emergency_contact_name");
$infoContact->emergency_contact_email = checkIndex($data, "emergency_contact_email");
$infoContact->emergency_contact_mobile = checkIndex($data, "emergency_contact_mobile");
$infoContact->emergency_contact_landline = $data["emergency_contact_landline"];
$infoContact->emergency_contact_level = checkIndex($data, "emergency_contact_level");
$infoContact->emergency_contact_created = date("Y-m-d H:i:s");
$infoContact->emergency_contact_datetime = date("Y-m-d H:i:s");

isNameExist($infoContact, $infoContact->emergency_contact_name);

$query = checkCreate($infoContact);
returnSuccess($infoContact, "", $query);
checkEndpoint();