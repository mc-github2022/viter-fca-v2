<?php
$conn = null;
$conn = checkDbConnection();
$guardian = new InfoGuardian($conn);

$error = [];
$returnData = [];
if (array_key_exists("guardianid", $_GET)) {
    $guardian->guardian_aid = $_GET['guardianid'];
    checkId($guardian->guardian_aid);

    $query = checkDelete($guardian);
    returnSuccess($guardian, "Parent Info", $query);
}

checkEndpoint();
