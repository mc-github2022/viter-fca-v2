<?php

require '../../../core/Encryption.php';
require 'functions.php';
// use notification template
require '../../../notification/verify-email.php';

$conn = null;
$conn = checkDbConnection();
$parents = new Parents($conn);
$encrypt = new Encryption();


if (array_key_exists("parentsid", $_GET)) {
    checkPayload($data);

    $parents->parents_aid = $_GET['parentsid'];
    $parents->parents_fname = checkIndex($data, "parents_fname");
    $parents->parents_lname = checkIndex($data, "parents_lname");
    $parents->parents_email = checkIndex($data, "parents_email");
   
    $parents->parents_datetime = date("Y-m-d H:i:s");

    $parents->user_other_key = $encrypt->doHash(rand());
    $link = "/verify-email";

    // validate id if empty or valid number
    checkId($parents->parents_aid);

    $parents->parents_email_old = checkIndex($data, "parents_email_old");

    // only if email is changed, then check if already exist
    compareEmail($parents, $parents->parents_email_old, $parents->parents_email);

    $userOther = getResultData($parents->checkUserOtherAccount($parents));

    // only if the parents has user account and email is edited or changed
    if (count($userOther) > 0 && $parents->parents_email != $parents->parents_email_old) {
        checkUpdateUserKeyAndNewEmail($parents);
        sendEmailVerify(
            $link,
            $parents->parents_fname,
            $parents->parents_email_old,
            $parents->parents_email,
            $parents->user_other_key
        );
    }

    // for update
    if (count($userOther) > 0) {
        // use this update with no email if parent has account
        $query = checkUpdate($parents);
    } else {
        // use this update with email if parent has no account
        $query = checkUpdateIfNoAccount($parents);
    }

    // return success
    returnSuccess($parents, "Parents", $query);
}

checkEndpoint();
