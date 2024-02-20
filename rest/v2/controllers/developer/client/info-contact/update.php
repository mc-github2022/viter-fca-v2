<?php
$conn = null;
$conn = checkDbConnection();
$infoContact = new InfoContact($conn);
$error = [];
$returnData = [];
if (array_key_exists("contactid", $_GET)) {
    checkPayload($data);
    $infoContact->emergency_contact_aid = $_GET['contactid'];
    $infoContact->emergency_contact_parent_id = checkIndex($data, "emergency_contact_parent_id");
    $infoContact->emergency_contact_name = checkIndex($data, "emergency_contact_name");
    $infoContact->emergency_contact_mobile = checkIndex($data, "emergency_contact_mobile");
    $infoContact->emergency_contact_email = checkIndex($data, "emergency_contact_email");
    $infoContact->emergency_contact_landline = $data["emergency_contact_landline"];
    $infoContact->emergency_contact_level = checkIndex($data, "emergency_contact_level");
    $infoContact->emergency_contact_datetime = date("Y-m-d H:i:s");
    checkId($infoContact->emergency_contact_aid);
    
    $emergency_contact_name_old = checkIndex($data, "emergency_contact_name_old");
    compareName($infoContact, $emergency_contact_name_old, $infoContact->emergency_contact_name);
    $query = checkUpdate($infoContact);
    returnSuccess($infoContact, "InfoContact", $query);
}

checkEndpoint();
