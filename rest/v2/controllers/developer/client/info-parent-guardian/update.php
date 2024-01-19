<?php
$conn = null;
$conn = checkDbConnection();
$parent = new InfoParentGuardian($conn);
$error = [];
$returnData = [];
if (array_key_exists("parentinfo", $_GET)) {
    checkPayload($data);
    $parent->parent_guardian_info_aid = $_GET['parentinfo'];
    $parent->parent_guardian_info_relationship_id = checkIndex($data, "parent_guardian_info_relationship_id");
    $parent->parent_guardian_info_reside = checkIndex($data, "parent_guardian_info_reside");
    $parent->parent_guardian_info_email = checkIndex($data, "parent_guardian_info_email");
    $parent->parent_guardian_info_mobile = checkIndex($data, "parent_guardian_info_mobile");
    $parent->parent_guardian_info_religion = checkIndex($data, "parent_guardian_info_religion");
    $parent->parent_guardian_info_occupation = checkIndex($data, "parent_guardian_info_occupation");
    $parent->parent_guardian_info_datetime = date("Y-m-d H:i:s");
    checkId($parent->parent_guardian_info_aid);
    // $parent_name_old = checkIndex($data, "parent_name_old");
    // compareName($parent, $parent_name_old, $parent->parent_name);
    $query = checkUpdate($parent);
    returnSuccess($parent, "Parent", $query);
}

checkEndpoint();
