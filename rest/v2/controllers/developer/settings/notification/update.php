<?php
$conn = null;
$conn = checkDbConnection();
$notification = new Notification($conn);
$error = [];
$returnData = [];
if (array_key_exists("notificationid", $_GET)) {
    checkPayload($data);
    $notification->notification_aid = $_GET['notificationid'];
    $notification->notification_name = checkIndex($data, "notification_name");
    $notification->notification_email = checkIndex($data, "notification_email");
    $notification->notification_department_id = checkIndex($data, "notification_department_id");
    $notification->notification_datetime = date("Y-m-d H:i:s");
    checkId($notification->notification_aid);
    $notification_name_old = checkIndex($data, "notification_name_old");
    compareName($notification, $notification_name_old, $notification->notification_name);
    $query = checkUpdate($notification);
    returnSuccess($notification, "notification", $query);
}

checkEndpoint();
