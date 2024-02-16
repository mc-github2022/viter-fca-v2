<?php
$conn = null;
$conn = checkDbConnection();
$parent = new Parents($conn);

// if get method, return 404
if (array_key_exists("parentsid", $_GET)) {
    checkEndpoint();
}

// payload must not be empty
checkPayload($data);
$parent->parents_fname = checkIndex($data, "parents_fname");
$parent->parents_lname = checkIndex($data, "parents_lname");
$parent->parents_email = checkIndex($data, "parents_email");
$parent->parents_is_active = 1;
$parent->parents_created = date("Y-m-d H:i:s");
$parent->parents_datetime = date("Y-m-d H:i:s");

// email must not exist
isEmailExist($parent, $parent->parents_email);

// create
$query = checkCreate($parent);

// return sucess
returnSuccess($parent, "Staff", $query);
