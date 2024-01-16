<?php
$conn = null;
$conn = checkDbConnection();
$parent = new InfoParentGuardian($conn);

if (array_key_exists("infoparent", $_GET)) {
checkPayload($data);
$parent->parent_guardian_info_user_id = $_GET['infoparent'];
$parent->parent_guardian_info_relationship_id = checkIndex($data, "parent_guardian_info_relationship_id");
$parent->parent_guardian_info_reside = checkIndex($data, "parent_guardian_info_reside");
$parent->parent_guardian_info_created = date("Y-m-d H:i:s");
$parent->parent_guardian_info_datetime = date("Y-m-d H:i:s");

$query = checkCreate($parent);
returnSuccess($parent, "Parent Info", $query);
}

checkEndpoint();