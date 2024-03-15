<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require dirname(__DIR__, 1) . '/PHPMailer/PHPMailer.php';
require dirname(__DIR__, 1) . '/PHPMailer/SMTP.php';
require dirname(__DIR__, 1) . '/PHPMailer/Exception.php';

include_once dirname(__DIR__, 1) . '/mail-config.php';
include_once dirname(__DIR__, 1) . '/template/assessment/assessment-notify-parent.php';

function sendNotifyParent($subject, $html_code, $email, $ccEmail)
{
    //trigger exception in a "try" block
    try {
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = 'mail.frontlinebusiness.com.ph'; // SiteGround
        $mail->Port = 465;
        $mail->SMTPSecure = "ssl";
        // $mail->Host = 'smtp-mail.outlook.com'; // if outlook use smtp-mail.outlook.com
        // $mail->Port = 587;
        // $mail->SMTPSecure = "tls";
        $mail->SMTPAuth = true;
        $mail->Username = USERNAME; // if gmail use your gmail email
        $mail->Password = PASSWORD; // if gmail use your email password
        $mail->Subject = $subject;
        $mail->setFrom(USERNAME, FROM);
        $mail->isHTML(true);
        $mail->Body = getHtmlAssessmentNotifyParent($html_code);
        $mail->addAddress($email);

        // cc emails
        // loop though all the cc email
        for ($i = 0; $i < count($ccEmail); $i++) {
            // skip all the blank or empty cc email 
            if ($ccEmail[$i] == '') continue;
            // send to cc email
            $mail->addCC($ccEmail[$i]);
        }

        if ($mail->Send()) {
            return array(
                "mail_success" => true,
                "error" => "No Error.",
            );
        } else {
            return array(
                "error" => "Could not send email. Please refresh your page and try again.",
                "mail_success" => false
            );
        }
    }
    //catch exception
    catch (Exception $e) {
        return array(
            "mail_error" => $e->getMessage(),
            "error_message" => "Could not authenticate. Please make sure your email and password are correct.",
            "mail_success" => false
        );
    }
}
