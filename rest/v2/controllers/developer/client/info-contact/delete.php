<?php
$conn = null;
$conn = checkDbConnection();
$InfoContact = new InfoContact($conn);

$error = [];
$returnData = [];
if (array_key_exists("infocontact", $_GET)) {
    $InfoContact->contact_aid = $_GET['infocontact'];
    checkId($InfoContact->contact_aid);

    // isAssociatedNotification($InfoContact);
    // isAssociatedRequirementFinance($InfoContact);
    // isAssociatedRequirementRegistrar($InfoContact);
    // isAssociatedRequirementIT($InfoContact);

    $query = checkDelete($InfoContact);
    returnSuccess($InfoContact, "Department", $query);
}

checkEndpoint();
