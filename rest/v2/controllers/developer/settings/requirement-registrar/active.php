<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require '../../../../models/developer/settings/requirementRegistrar.php';

$conn = null;
$conn = checkDbConnection();

$requirementRegistrar = new RequirementRegistrar($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("requirementregistrarid", $_GET)) {

        checkPayload($data);
        $requirementRegistrar->requirement_registrar_aid = $_GET['requirementregistrarid'];
        $requirementRegistrar->requirement_registrar_active = trim($data["isActive"]);
        $requirementRegistrar->requirement_registrar_datetime = date("Y-m-d H:i:s");

        checkId($requirementRegistrar->requirement_registrar_aid);
        $query = checkActive($requirementRegistrar);
        http_response_code(200);
        returnSuccess($requirementRegistrar, "Requirement Registrar", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
