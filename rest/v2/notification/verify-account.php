<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

include_once("mail-config.php");
include_once("template/verify-account.php");
include_once("template/admin-notification-new-parent.php");

function sendEmail($password_link, $name, $email, $key)
{
	//trigger exception in a "try" block
	try {
		$mail = new PHPMailer(true);
		$mail->isSMTP();
		$mail->Host = 'mail.frontlinebusiness.com.ph'; // if siteground
		$mail->Port = 465;
		$mail->SMTPSecure = "ssl";
		$mail->SMTPAuth = true;
		$mail->Username =  USERNAME; // if gmail use your gmail email
		$mail->Password = PASSWORD; // if gmail use your email password
		$mail->Subject = VERIFY_ACCOUNT;
		$mail->setFrom(USERNAME, FROM);
		$mail->isHTML(true);
		$mail->Body = getHtmlVerifyAccount(
			$password_link,
			$name,
			$email,
			$key,
			ROOT_DOMAIN,
			IMAGES_URL
		);

		$mail->addAddress($email);

		if ($mail->Send()) {
			return array(
				"mail_success" => true
			);
		} else {
			return array(
				"error" => "Could not send email. Please contact support.",
				"mail_success" => false
			);
		}
	}
	//catch exception
	catch (Exception $e) {
		return array(
			"mail_error" => $e->getMessage(),
			"error" => "Could not authenticate. Please make sure your email and password are correct.",
			"mail_success" => false
		);
	}
}

function sendAdminEmail($subject, $html_code, $email, $ccEmail)
{
	//trigger exception in a "try" block
	try {
		$mail = new PHPMailer(true);
		$mail->isSMTP();
		$mail->Host = 'mail.frontlinebusiness.com.ph'; // if siteground
		$mail->Port = 465;
		$mail->SMTPSecure = "ssl";
		$mail->SMTPAuth = true;
		$mail->Username =  USERNAME; // if gmail use your gmail email
		$mail->Password = PASSWORD; // if gmail use your email password
		$mail->Subject = $subject;
		$mail->setFrom(USERNAME, FROM);
		$mail->isHTML(true);
		$mail->Body = getHtmlAdminNotification(
			$html_code
		);

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
