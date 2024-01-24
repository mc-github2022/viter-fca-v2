<?php


$conn = null;
$conn = checkDbConnection();
$parent = new InfoParentGuardian($conn);
$error = [];
$returnData = [];

$body = file_get_contents("php://input");
$data = json_decode($body, true);

if (array_key_exists("parentinfoaid", $_GET)) {
    checkPayload($data);
    $parent->parent_guardian_info_aid =  $_GET['parentinfoaid'];
    $parent->parent_guardian_info_user_id = checkIndex($data, "parent_guardian_info_user_id");
    $parent->parent_guardian_info_reside = checkIndex($data, "parent_guardian_info_reside");
    $parent->parent_guardian_info_relationship_id = checkIndex($data, "parent_guardian_info_relationship_id");
    $parent->parent_guardian_info_salutation = checkIndex($data, "parent_guardian_info_salutation");
    $parent->parent_guardian_info_fname = checkIndex($data, "parent_guardian_info_fname");
    $parent->parent_guardian_info_lname = checkIndex($data, "parent_guardian_info_lname");
    $parent->parent_guardian_info_mname = $data["parent_guardian_info_mname"];
    $parent->parent_guardian_info_maiden_name = $data["parent_guardian_info_maiden_name"];

    $parent->parent_guardian_info_email = checkIndex($data, "parent_guardian_info_email");
    $parent->parent_guardian_info_mobile = checkIndex($data, "parent_guardian_info_mobile");
    $parent->parent_guardian_info_landline = $data["parent_guardian_info_landline"];
    $parent->parent_guardian_info_address = checkIndex($data, "parent_guardian_info_address");
    $parent->parent_guardian_info_province = checkIndex($data, "parent_guardian_info_province");
    $parent->parent_guardian_info_city = checkIndex($data, "parent_guardian_info_city");
    $parent->parent_guardian_info_zipcode = checkIndex($data, "parent_guardian_info_zipcode");
    $parent->parent_guardian_info_occupation = checkIndex($data, "parent_guardian_info_occupation");
    $parent->parent_guardian_info_religion = checkIndex($data, "parent_guardian_info_religion");


    $parent->parent_guardian_info_datetime = date("Y-m-d H:i:s");
    
    checkId($parent->parent_guardian_info_aid );

    $query = checkUpdate($parent);
    returnSuccess($parent, "Parent Information", $query);
}

checkEndpoint();
