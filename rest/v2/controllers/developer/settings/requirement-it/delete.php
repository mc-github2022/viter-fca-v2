<?php
$conn = null;
$conn = checkDbConnection();
$requirementIT = new RequirementIT($conn);
$error = [];
$returnData = [];
if (array_key_exists("requirementitid", $_GET)) {
    $requirementIT->requirement_it_aid = $_GET['requirementitid'];
    checkId($requirementIT->requirement_it_aid);

    //isAssociated($notification);
    $query = checkDelete($requirementIT);
    returnSuccess($requirementIT, "Requirement IT", $query);
}

checkEndpoint();
