<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require '../../../../models/developer/settings/GradeLevel.php';

$conn = null;
$conn = checkDbConnection();

$grade_level = new GradeLevel($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("gradelevelid", $_GET)) {
     
        checkPayload($data);
        $grade_level->grade_level_aid = $_GET['gradelevelid'];
        $grade_level->grade_level_active = trim($data["isActive"]);
        checkId($grade_level->grade_level_aid);
        $query = checkActive($grade_level);
        http_response_code(200);
        returnSuccess($grade_level, "grade_level", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
