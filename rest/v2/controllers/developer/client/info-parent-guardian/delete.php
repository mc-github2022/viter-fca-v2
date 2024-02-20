<?php
$conn = null;
$conn = checkDbConnection();
$parent = new InfoParent($conn);

$error = [];
$returnData = [];
if (array_key_exists("parentid", $_GET)) {
    $parent->parents_aid = $_GET['parentid'];
    checkId($parent->parents_aid);

    $query = checkDelete($parent);
    returnSuccess($parent, "Parent Info", $query);
}

checkEndpoint();
