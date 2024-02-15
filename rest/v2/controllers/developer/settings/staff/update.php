<?php
$conn = null;
$conn = checkDbConnection();
$staff = new Staff($conn);

if (array_key_exists("staffid", $_GET)) {
    checkPayload($data);

    $staff->settings_staff_aid = $_GET['staffid'];
    $staff->settings_staff_fname = checkIndex($data, "settings_staff_fname");
    $staff->settings_staff_lname = checkIndex($data, "settings_staff_lname");
    $staff->settings_staff_email = checkIndex($data, "settings_staff_email");
    $staff->settings_staff_updated_at = date("Y-m-d H:i:s");

    // validate id if empty or valid number
    checkId($staff->settings_staff_aid);

    $settings_staff_email_old = checkIndex($data, "settings_staff_email_old");

    // only if email is changed, then check if already exist
    compareEmail($staff, $settings_staff_email_old, $staff->settings_staff_email);


    // update
    $query = checkUpdate($staff);

    // return success
    returnSuccess($staff, "Staff", $query);
}

checkEndpoint();
