<?php
$conn = null;
$conn = checkDbConnection();
$parent = new InfoParentGuardian($conn);

checkPayload($data);
$parent->parent_guardian_info_user_id =  checkIndex($data, "parent_guardian_info_user_id");
$parent->parent_guardian_info_relationship_id = checkIndex($data, "parent_guardian_info_relationship_id");
$parent->parent_guardian_info_reside = checkIndex($data, "parent_guardian_info_reside");
$parent->parent_guardian_info_salutation = checkIndex($data, "parent_guardian_info_salutation");
$parent->parent_guardian_info_fname = checkIndex($data, "parent_guardian_info_fname");
$parent->parent_guardian_info_lname = checkIndex($data, "parent_guardian_info_lname");
$parent->parent_guardian_info_mname = checkIndex($data, "parent_guardian_info_mname");
$parent->parent_guardian_info_maiden_name = checkIndex($data, "parent_guardian_info_maiden_name");

$parent->parent_guardian_info_created = date("Y-m-d H:i:s");
$parent->parent_guardian_info_datetime = date("Y-m-d H:i:s");

$query = checkCreate($parent);
returnSuccess($parent, "", $query);


checkEndpoint();