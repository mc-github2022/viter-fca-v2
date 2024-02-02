<?php
$conn = null;
$conn = checkDbConnection();
$InfoContact = new InfoContact($conn);

$error = [];
$returnData = [];
if (array_key_exists("contactinfoid", $_GET)) {
    $InfoContact->contact_aid = $_GET['contactinfoid'];
    checkId($InfoContact->contact_aid);


    $query = checkDelete($InfoContact);
    returnSuccess($InfoContact, "Info Contact", $query);
}

checkEndpoint();
