<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require '../../../../models/developer/settings/SystemMode.php';

$conn = null;
$conn = checkDbConnection();

$maintenances = new SystemMode($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("systemModeId", $_GET)) {

        checkPayload($data);
        $maintenances->system_mode_aid = $_GET['systemModeId'];
        $maintenances->system_mode_is_on = trim($data["isActive"]);
        $maintenances->system_mode_updated = date("Y-m-d H:i:s");
        checkId($maintenances->system_mode_aid);
        $query = checkActive($maintenances);
        http_response_code(200);
        returnSuccess($maintenances, "System Mode", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
