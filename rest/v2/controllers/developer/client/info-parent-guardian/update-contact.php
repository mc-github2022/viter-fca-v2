<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require '../../../../models/developer/client/InfoParentGuardian.php';
require 'functions.php';

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
    $parent->parent_guardian_info_email = checkIndex($data, "parent_guardian_info_email");
    $parent->parent_guardian_info_mobile = checkIndex($data, "parent_guardian_info_mobile");
    $parent->parent_guardian_info_landline = checkIndex($data, "parent_guardian_info_landline");
    $parent->parent_guardian_info_address = checkIndex($data, "parent_guardian_info_address");
    $parent->parent_guardian_info_province = checkIndex($data, "parent_guardian_info_province");
    $parent->parent_guardian_info_city = checkIndex($data, "parent_guardian_info_city");
    $parent->parent_guardian_info_zipcode = checkIndex($data, "parent_guardian_info_zipcode");
    $parent->parent_guardian_info_datetime = date("Y-m-d H:i:s");
    
    checkId($parent->parent_guardian_info_aid );

    $query = checkUpdateContact($parent);
    returnSuccess($parent, "Parent Information Contact", $query);
}

checkEndpoint();
