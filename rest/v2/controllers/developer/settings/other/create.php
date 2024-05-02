<?php
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_other = new UserOther($conn);
$encrypt = new Encryption();
// use notification template
require '../../../../notification/verify-account.php';
// get should not be present
if (array_key_exists("userotherid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$user_other->user_other_fname = checkIndex($data, "user_other_fname");
$user_other->user_other_lname = checkIndex($data, "user_other_lname");
$user_other->user_other_email = checkIndex($data, "user_other_email");
$user_other->user_other_role_id = checkIndex($data, "user_other_role_id");
$user_other->user_other_is_active = 1;
$user_other->user_other_key = $encrypt->doHash(rand());
$user_other->user_other_created = date("Y-m-d H:i:s");
$user_other->user_other_datetime = date("Y-m-d H:i:s");
$password_link = "/create-password";
$queryParentAccount = $user_other->checkEmailForParentd();
$queryRoleById = getResultData($user_other->readRoleById());

$queryRegistarNotification = getResultData($user_other->readRegistrarNotification());


// check email
isEmailExist($user_other, $user_other->user_other_email);

// only if role is parent
if ($queryRoleById[0]["role_is_parent"] == 1) {
    // check email for parent if exist
    if ($queryParentAccount->rowCount() == 0) {
        returnError("Invalid account. Please use a registered one.");
    }
}

$query = checkCreate($user_other);

// only if role is parent
if ($queryRoleById[0]["role_is_parent"] == 1) {
    // loop through notification and get all the registrar department
    // to send email
    for ($i = 0; $i < count($queryRegistarNotification); $i++) {
        if ($queryRegistarNotification[$i]["notification_email"] == '') continue;

        $mailDataAdmin = sendAdminEmail(
            $user_other->user_other_fname . ' ' . $user_other->user_other_lname,
            $user_other->user_other_email,
            $queryRegistarNotification[$i]["notification_email"],
        );
    }
}

// send email notification for user other account
$mailData = sendEmail(
    $password_link,
    $user_other->user_other_fname,
    $user_other->user_other_email,
    $user_other->user_other_key
);

// failed sending email
if ($mailData["mail_success"] == false) {
    returnError($mailData["error"]);
}

// failed sending email
if ($mailDataAdmin["mail_success"] == false) {
    returnError($mailDataAdmin["error"]);
}

// create

returnSuccess($user_other, "User Other", $query);
