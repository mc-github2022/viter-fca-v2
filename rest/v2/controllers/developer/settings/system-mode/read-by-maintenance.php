<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require '../../../../models/developer/settings/SystemMode.php';
require 'functions.php';

$conn = null;
$conn = checkDbConnection();
$maintenances = new SystemMode($conn);

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (empty($_GET)) {
        $query = checkReadByMaintenanceOn($maintenances);
        http_response_code(200);
        getQueriedData($query);
    }

    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
