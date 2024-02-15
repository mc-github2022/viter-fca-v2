<?php
$conn = null;
$conn = checkDbConnection();
$staff = new Staff($conn);

// only if key exist
if (array_key_exists("staffid", $_GET)) {
    $staff->settings_staff_aid = $_GET['staffid'];

    // validate id if empty or valid number
    checkId($staff->settings_staff_aid);


    // delete
    $query = checkDelete($staff);

    // return success
    returnSuccess($staff, "Staff", $query);
}

checkEndpoint();
