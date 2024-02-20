<?php
$conn = null;
$conn = checkDbConnection();
$sy = new SchoolYear($conn);

// if get method, return 404
if (array_key_exists("syid", $_GET)) {
    checkEndpoint();
}

// payload must not be empty
checkPayload($data);
$sy->school_year_start_date = checkIndex($data, "school_year_start_date");
$sy->school_year_end_date = checkIndex($data, "school_year_end_date");
$sy->school_year_is_active = 1;
$sy->school_year_created = date("Y-m-d H:i:s");
$sy->school_year_datetime = date("Y-m-d H:i:s");

// date must not exist
isNameExist($sy, $sy->school_year_start_date);

// create
$query = checkCreate($sy);

// return sucess
returnSuccess($sy, "School year", $query);
