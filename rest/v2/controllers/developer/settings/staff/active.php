<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require '../../../../models/developer/settings/Staff.php';

$conn = null;
$conn = checkDbConnection();
$staff = new Staff($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("staffid", $_GET)) {

        // payload must not be empty
        checkPayload($data);

        $staff->settings_staff_aid = $_GET['staffid'];
        $staff->settings_staff_is_active = $data["isActive"];
        $staff->settings_staff_updated_at = date("Y-m-d H:i:s");

        // validate id if empty or valid number
        checkId($staff->settings_staff_aid);

        // update status
        $query = checkActive($staff);

        // return success
        http_response_code(200);
        returnSuccess($staff, "Staff", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
