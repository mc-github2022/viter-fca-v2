<?php
$conn = null;
$conn = checkDbConnection();
$requirementRegistrar = new RequirementRegistrar($conn);
$error = [];
$returnData = [];
if (array_key_exists("requirementregistrarid", $_GET)) {
    $requirementRegistrar->requirement_registrar_aid = $_GET['requirementregistrarid'];
    checkId($requirementRegistrar->requirement_registrar_aid);

    //isAssociated($notification);
    $query = checkDelete($requirementRegistrar);
    returnSuccess($requirementRegistrar, "Requirement Registrar", $query);
}

checkEndpoint();
