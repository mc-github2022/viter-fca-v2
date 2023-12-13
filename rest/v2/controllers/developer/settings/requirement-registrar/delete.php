<?php
$conn = null;
$conn = checkDbConnection();
$notification = new Notification($conn);
$error = [];
$returnData = [];
if (array_key_exists("notificationid", $_GET)) {
    $notification->notification_aid = $_GET['notificationid'];
    checkId($notification->notification_aid);

    //isAssociated($notification);
    $query = checkDelete($notification);
    returnSuccess($notification, "notification", $query);
}

checkEndpoint();
