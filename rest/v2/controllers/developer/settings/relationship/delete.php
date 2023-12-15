<?php
$conn = null;
$conn = checkDbConnection();
$relationship = new Relationship($conn);
$error = [];
$returnData = [];
if (array_key_exists("relationshipid", $_GET)) {
    $relationship->relationship_aid = $_GET['relationshipid'];
    checkId($relationship->relationship_aid);

    //isAssociated($relationship);
    $query = checkDelete($relationship);
    returnSuccess($relationship, "Relationship", $query);
}

checkEndpoint();
