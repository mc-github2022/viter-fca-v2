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
// if (array_key_exists("parentinfoid", $_GET)) {
    checkPayload($data);
    $parent->parent_guardian_info_aid =  checkIndex($data, "parent_guardian_info_aid");
    $parent->parent_guardian_info_user_id = checkIndex($data, "parent_guardian_info_user_id");
    $parent->parent_guardian_info_reside = checkIndex($data, "parent_guardian_info_reside");
    $parent->parent_guardian_info_relationship_id = checkIndex($data, "parent_guardian_info_relationship_id");
    $parent->parent_guardian_info_datetime = date("Y-m-d H:i:s");
    
    checkId($parent->parent_guardian_info_aid );

    $query = checkUpdateRelationship($parent);
    returnSuccess($parent, "Parent Information", $query);
// }

checkEndpoint();
