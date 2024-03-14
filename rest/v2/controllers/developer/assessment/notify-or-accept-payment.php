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

if (array_key_exists("studentSyId", $_GET)) {
    checkPayload($data);

    $assessment_list->current_students_aid = $_GET['studentSyId'];
    $assessment_list->current_students_is_accept_payment = $data["is_accept_payment"];
    $assessment_list->current_students_is_notify = $data["is_notify"];
    $assessment_list->current_students_schedule_fees_id = $data["tuition_fee_aid"];
    $assessment_list->current_students_rate_id = checkIndex($data, "tuition_category_aid");
    $assessment_list->current_students_primary_discount_id = $data["primaryDiscountId"];
    $assessment_list->current_students_additional_discount_id = $data["additionalDiscountId"];
    $assessment_list->current_students_assessment_remarks = $data["assessmentRemarks"];
    $assessment_list->students_aid = $data["students_aid"];
    $assessment_list->current_students_sy_id = $data["current_students_sy_id"];
    $assessment_list->current_students_datetime = date("Y-m-d H:i:s");

    // // use this update with no email if parent has account
    checkUpdateNotifyOrAcceptPayment($assessment_list);
    $query = checkUpdateCurrentNotifyOrAcceptPayment($assessment_list);
    // return success
    returnSuccess($assessment_list, "Accept Payment", $query);
}

checkEndpoint();
