<?php

require '../../../core/header.php';
require '../../../core/functions.php';
require 'functions.php';
require '../../../models/developer/assessment/Assessment.php';

$conn = null;
$conn = checkDbConnection();
$assessment_list = new Assessment($conn);
// $encrypt = new Encryption();
$body = file_get_contents("php://input");
$data = json_decode($body, true);

checkPayload($data);

$assessment_list->current_students_aid = $data["current_students_aid"];
$assessment_list->current_students_is_accept_payment = $data["is_accept_payment"];
$assessment_list->students_aid = $data["students_aid"];
$assessment_list->current_students_sy_id = $data["current_students_sy_id"];
$assessment_list->current_students_datetime = date("Y-m-d H:i:s");

// // use this update with no email if parent has account
checkUpdateTemporaryEnroll($assessment_list);
$query = checkUpdateCurrentTemporaryEnroll($assessment_list);
// return success
returnSuccess($assessment_list, "Accept Payment", $query, $notifyParent);

checkEndpoint();
