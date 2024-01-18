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
    $parent->parent_guardian_info_user_id = checkIndex($data, "parent_guardian_info_user_id");
    $parent->parent_guardian_info_reside = checkIndex($data, "parent_guardian_info_reside");
    $parent->parent_guardian_info_relationship_id = checkIndex($data, "parent_guardian_info_relationship_id");
    $parent->parent_guardian_info_salutation = checkIndex($data, "parent_guardian_info_salutation");
    $parent->parent_guardian_info_fname = checkIndex($data, "parent_guardian_info_fname");
    $parent->parent_guardian_info_lname = checkIndex($data, "parent_guardian_info_lname");
    $parent->parent_guardian_info_mname = checkIndex($data, "parent_guardian_info_mname");
    $parent->parent_guardian_info_maiden_name = checkIndex($data, "parent_guardian_info_maiden_name");
    $parent->parent_guardian_info_datetime = date("Y-m-d H:i:s");
    
    checkId($parent->parent_guardian_info_aid );

    $query = checkUpdateRelationship($parent);
    returnSuccess($parent, "Parent Information", $query);
}

checkEndpoint();
