<?php
$conn = null;
$conn = checkDbConnection();
$relationship = new Relationship($conn);
$error = [];
$returnData = [];
if (array_key_exists("relationshipid", $_GET)) {
    checkPayload($data);
    $relationship->relationship_aid = $_GET['relationshipid'];
    $relationship->relationship_name = checkIndex($data, "relationship_name");
    $relationship->relationship_is_maiden = checkIndex($data, "relationship_is_maiden");
    $relationship->relationship_datetime = date("Y-m-d H:i:s");
    checkId($relationship->relationship_aid);
    $relationship_name_old = checkIndex($data, "relationship_name_old");
    compareName($relationship, $relationship_name_old, $relationship->relationship_name);
    $query = checkUpdate($relationship);
    returnSuccess($relationship, "Relationship", $query);
}

checkEndpoint();
