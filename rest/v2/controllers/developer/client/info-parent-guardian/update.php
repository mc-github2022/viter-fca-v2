<?php


$conn = null;
$conn = checkDbConnection();
$parent = new InfoParent($conn);
$error = [];
$returnData = [];

$body = file_get_contents("php://input");
$data = json_decode($body, true);

if (array_key_exists("parentid", $_GET)) {
    checkPayload($data);
    $parent->parents_aid =  $_GET['parentid'];
    $parent->parents_relationship_id = checkIndex($data, "parents_relationship_id");
    $parent->parents_salutation = checkIndex($data, "parents_salutation");
    $parent->parents_is_reside = checkIndex($data, "parents_is_reside");
    $parent->parents_fname = checkIndex($data, "parents_fname");
    $parent->parents_mname = $data["parents_mname"];
    $parent->parents_lname = checkIndex($data, "parents_lname");
    $parent->parents_maiden_name = $data["parents_maiden_name"];
    $parent->parents_email = checkIndex($data, "parents_email");
    $parent->parents_mobile = checkIndex($data, "parents_mobile");
    $parent->parents_landline = $data["parents_landline"];
    $parent->parents_address = checkIndex($data, "parents_address");
    $parent->parents_province = checkIndex($data, "parents_province");
    $parent->parents_city = checkIndex($data, "parents_city");
    $parent->parents_zipcode = checkIndex($data, "parents_zipcode");
    $parent->parents_country = checkIndex($data, "parents_country");
    $parent->parents_religion = checkIndex($data, "parents_religion");
    $parent->parents_occupation = checkIndex($data, "parents_occupation");
    $parent->parents_datetime = date("Y-m-d H:i:s");

    $parents_fname_old = checkIndex($data, "parents_fname_old");
    $parents_lname_old = checkIndex($data, "parents_lname_old");

    
    $parent->fullname = strtolower($parent->parents_fname) ." ". strtolower($parent->parents_lname);

    $fullname_old = $parents_fname_old . " " . $parents_lname_old;

    checkId($parent->parents_aid);

    compareName($parent, $fullname_old, $parent->fullname);
    $query = checkUpdate($parent);
    returnSuccess($parent, "Parent Information", $query);
}

checkEndpoint();
