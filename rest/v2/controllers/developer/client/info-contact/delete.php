<?php
$conn = null;
$conn = checkDbConnection();
$InfoContact = new InfoContact($conn);

$error = [];
$returnData = [];
if (array_key_exists("contactid", $_GET)) {
    $InfoContact->emergency_contact_aid  = $_GET['contactid'];
    checkId($InfoContact->emergency_contact_aid );


    $query = checkDelete($InfoContact);
    returnSuccess($InfoContact, "Info Contact", $query);
}

checkEndpoint();
