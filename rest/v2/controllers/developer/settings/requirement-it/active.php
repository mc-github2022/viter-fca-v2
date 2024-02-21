<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require '../../../../models/developer/settings/RequirementIT.php';

$conn = null;
$conn = checkDbConnection();

$requirementIT = new RequirementIT($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("requirementitid", $_GET)) {

        checkPayload($data);
        $requirementIT->requirement_it_aid = $_GET['requirementitid'];
        $requirementIT->requirement_it_active = trim($data["isActive"]);
        $requirementIT->requirement_it_datetime = date("Y-m-d H:i:s");

        checkId($requirementIT->requirement_it_aid);
        $query = checkActive($requirementIT);
        http_response_code(200);
        returnSuccess($requirementIT, "Requirement IT", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
