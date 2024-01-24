<?php
$conn = null;
$conn = checkDbConnection();
$parent = new InfoParentGuardian($conn);

$error = [];
$returnData = [];
if (array_key_exists("parentinfoaid", $_GET)) {
    $parent->parent_guardian_info_aid = $_GET['parentinfoaid'];
    checkId($parent->parent_guardian_info_aid);

    $query = checkDelete($parent);
    returnSuccess($parent, "Parent Info", $query);
}

checkEndpoint();
