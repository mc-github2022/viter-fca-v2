<?php
$conn = null;
$conn = checkDbConnection();
$parent = new InfoParentGuardian($conn);

checkPayload($data);
$parent->parent_guardian_info_relationship_id =  checkIndex($data, "parent_guardian_info_relationship_id");
$parent->parent_guardian_info_reside = checkIndex($data, "parent_guardian_info_reside");
$parent->parent_guardian_info_email = checkIndex($data, "parent_guardian_info_email");
$parent->parent_guardian_info_mobile = checkIndex($data, "parent_guardian_info_mobile");
$parent->parent_guardian_info_religion = checkIndex($data, "parent_guardian_info_religion");
$parent->parent_guardian_info_occupation = checkIndex($data, "parent_guardian_info_occupation");

$parent->parent_guardian_info_created = date("Y-m-d H:i:s");
$parent->parent_guardian_info_datetime = date("Y-m-d H:i:s");

$query = checkCreate($parent);
returnSuccess($parent, "", $query);


checkEndpoint();