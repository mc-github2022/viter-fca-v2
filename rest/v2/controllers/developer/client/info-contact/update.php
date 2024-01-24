<?php
$conn = null;
$conn = checkDbConnection();
$infoContact = new InfoContact($conn);
$error = [];
$returnData = [];
if (array_key_exists("infocontactid", $_GET)) {
    checkPayload($data);
    $infoContact->contact_aid = $_GET['infocontactid'];
    $infoContact->contact_user_id = checkIndex($data, "contact_user_id");
    $infoContact->contact_name = checkIndex($data, "contact_name");
    $infoContact->contact_email = checkIndex($data, "contact_email");
    $infoContact->contact_mobile = checkIndex($data, "contact_mobile");
    $infoContact->contact_landline = $data["contact_landline"];
    $infoContact->contact_level = checkIndex($data, "contact_level");
    $infoContact->contact_datetime = date("Y-m-d H:i:s");
    checkId($infoContact->contact_aid);
    
    $contact_name_old = checkIndex($data, "contact_name_old");
     compareName($infoContact, $contact_name_old, $infoContact->contact_name);
    $query = checkUpdate($infoContact);
    returnSuccess($infoContact, "InfoContact", $query);
}

checkEndpoint();
