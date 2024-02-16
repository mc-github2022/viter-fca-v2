<?php
$conn = null;
$conn = checkDbConnection();
$parents = new Parents($conn);

if (array_key_exists("parentsid", $_GET)) {
    checkPayload($data);

    $parents->parents_aid = $_GET['parentsid'];
    $parents->parents_fname = checkIndex($data, "parents_fname");
    $parents->parents_lname = checkIndex($data, "parents_lname");
    $parents->parents_email = checkIndex($data, "parents_email");
    $parents->parents_datetime = date("Y-m-d H:i:s");

    // validate id if empty or valid number
    checkId($parents->parents_aid);

    $parents_email_old = checkIndex($data, "parents_email_old");

    // only if email is changed, then check if already exist
    compareEmail($parents, $parents_email_old, $parents->parents_email);


    // update
    $query = checkUpdate($parents);

    // return success
    returnSuccess($parents, "parents", $query);
}

checkEndpoint();
