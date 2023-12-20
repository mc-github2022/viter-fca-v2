<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_other = new UserOther($conn);
// get $_GET data
// check if userid is in the url e.g. /userid/1
$error = [];
$returnData = [];
if (array_key_exists("userotherid", $_GET)) {
    // check data
    checkPayload($data);

    // get userid from query string
    $user_other->user_other_aid = $_GET['userotherid'];
    $user_other->user_other_name = checkIndex($data, "user_other_name");
    $user_other->user_other_email = checkIndex($data, "user_other_email");
    $user_other->user_other_role_id = checkIndex($data, "user_other_role_id");
    $user_other->user_other_branch_code_id = checkIndex($data, "user_other_branch_code_id");
    $user_other->user_other_datetime = date("Y-m-d H:i:s");
    $user_other_email_old = strtolower($data["user_other_email_old"]);
    checkId($user_other->user_other_aid);
    // check name
    compareEmail($user_other, $user_other_email_old, $user_other->user_other_email);
    // update
    $query = checkUpdate($user_other);
    returnSuccess($user_other, "User other", $query);
}

// return 404 error if endpoint not available
checkEndpoint();