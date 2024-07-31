<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require 'functions.php';
require '../../../../models/developer/student/PaymentScheme.php';
require '../../../../notification/assessment/notify-parent.php';

$conn = null;
$conn = checkDbConnection();
$payment_scheme = new PaymentScheme($conn);
// $encrypt = new Encryption();
$body = file_get_contents("php://input");
$data = json_decode($body, true);

if (array_key_exists("studentSyId", $_GET)) {
    checkPayload($data);

    // returnError($data);

    $payment_scheme->current_students_aid = $_GET['studentSyId'];
    $payment_scheme->current_students_is_accept_payment = 0;
    $payment_scheme->current_students_is_notify = 0;
    $payment_scheme->current_students_schedule_fees_id = $data["tuition_fee_aid"];
    $payment_scheme->current_students_rate_id = checkIndex($data, "tuition_category_aid");
    $payment_scheme->current_students_sy_id = checkIndex($data, "current_students_sy_id");
    $payment_scheme->students_aid = checkIndex($data, "students_aid");
    $payment_scheme->current_students_datetime = date("Y-m-d H:i:s");

    $query = $payment_scheme->readTemplateForAssessmentNotifyFinance();

    if ($query->rowCount() == 0) {
        returnError('No Email Template, Please check the email template.');
    }
    $row = $query->fetch(PDO::FETCH_ASSOC);
    extract($row);

    // returnError($row);

    if ($query->rowCount() > 0) {
        $ccEmail = [
            $email_template_cc_email,
            $email_template_cc_email_two
        ];

        $notifyParent = sendNotifyParent(
            $email_template_subject,
            $email_template_content,
            trim($notification_email),
            $ccEmail,
            [
                'client_name' => $data["client_name"],
                'student_name' => $data["student_name"],
                'payment_rate' => $data["tuition_category_name"],
                'timestamp' => $payment_scheme->current_students_datetime,
                'primary' => $data["primary"],
                'additional' => $data["additional"]
            ]
        );
        if ($notifyParent["mail_success"] == false) {
            returnError($notifyParent["error_message"]);
        }
    }

    // // use this update with no email if parent has account
    checkUpdatePaymentSchemeSaveOrRevert($payment_scheme);
    $query = checkUpdateCurrentPaymentSchemeSaveOrRevert($payment_scheme);
    // return success 
    http_response_code(200);
    returnSuccess($payment_scheme, "Payment Scheme", $query);
}

checkEndpoint();
