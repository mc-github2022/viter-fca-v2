<?php
$conn = null;
$conn = checkDbConnection();
$InfoContact = new InfoContact($conn);

$error = [];
$returnData = [];
if (array_key_exists("infocontactid", $_GET)) {
    $InfoContact->contact_aid = $_GET['infocontactid'];
    checkId($InfoContact->contact_aid);


    $query = checkDelete($InfoContact);
    returnSuccess($InfoContact, "Info Contact", $query);
}

checkEndpoint();
