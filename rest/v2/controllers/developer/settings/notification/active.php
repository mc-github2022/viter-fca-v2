<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require '../../../../models/developer/settings/notification.php';

$conn = null;
$conn = checkDbConnection();

$notification = new Notification($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("notificationid", $_GET)) {

        checkPayload($data);
        $notification->notification_aid = $_GET['notificationid'];
        $notification->notification_active = trim($data["isActive"]);
        $notification->notification_datetime = date("Y-m-d H:i:s");

        checkId($notification->notification_aid);
        $query = checkActive($notification);
        http_response_code(200);
        returnSuccess($notification, "notification", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
