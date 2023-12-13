<?php
$conn = null;
$conn = checkDbConnection();
$notification = new Notification($conn);
if (array_key_exists("notificationid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$notification->notification_name = checkIndex($data, "notification_name");
$notification->notification_department_id = checkIndex($data, "notification_department_id");
$notification->notification_email = checkIndex($data, "notification_email");
$notification->notification_active = 1;
$notification->notification_created = date("Y-m-d H:i:s");
$notification->notification_datetime = date("Y-m-d H:i:s");

isNameExist($notification, $notification->notification_name);

$query = checkCreate($notification);
returnSuccess($notification, "notification", $query);
