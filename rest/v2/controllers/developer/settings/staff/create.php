<?php
$conn = null;
$conn = checkDbConnection();
$staff = new Staff($conn);

// if get method, return 404
if (array_key_exists("departmentid", $_GET)) {
    checkEndpoint();
}

// payload must not be empty
checkPayload($data);
$staff->settings_staff_fname = checkIndex($data, "settings_staff_fname");
$staff->settings_staff_lname = checkIndex($data, "settings_staff_lname");
$staff->settings_staff_email = checkIndex($data, "settings_staff_email");
$staff->settings_staff_is_active = 1;
$staff->settings_staff_created_at = date("Y-m-d H:i:s");
$staff->settings_staff_updated_at = date("Y-m-d H:i:s");

// email must not exist
isEmailExist($staff, $staff->settings_staff_email);


// create
$query = checkCreate($staff);

// return sucess
returnSuccess($staff, "Staff", $query);
