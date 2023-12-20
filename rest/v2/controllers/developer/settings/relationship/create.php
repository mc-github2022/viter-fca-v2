<?php
$conn = null;
$conn = checkDbConnection();
$relationship = new Relationship($conn);
if (array_key_exists("relationshipid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$relationship->relationship_name = checkIndex($data, "relationship_name");
$relationship->relationship_is_maiden = checkIndex($data, "relationship_is_maiden");
$relationship->relationship_active = 1;
$relationship->relationship_created = date("Y-m-d H:i:s");
$relationship->relationship_datetime = date("Y-m-d H:i:s");

isTuitionFeeExist($relationship, $relationship->relationship_name);

$query = checkCreate($relationship);
returnSuccess($relationship, "Relationship", $query);
