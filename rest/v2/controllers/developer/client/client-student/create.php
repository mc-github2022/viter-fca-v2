<?php

require '../../../../notification/new-student.php';

$conn = null;
$conn = checkDbConnection();
$student = new ClientStudent($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);
checkPayload($data);

$student->students_is_active = 1;
$student->students_parent_id = $data["students_parent_id"];
$student->students_lrn = $data["students_lrn"];
$student->students_fname = $data["students_fname"];
$student->students_lname = $data["students_lname"];
$student->students_mname = $data["students_mname"];
$student->students_gender = $data["students_gender"];
$student->students_birth_place = $data["students_birth_place"];
$student->students_birth_date = $data["students_birth_date"];
$student->students_email = $data["students_email"];
$student->students_mobile = $data["students_mobile"];
$student->students_landline = $data["students_landline"];
$student->students_address_id = $data["students_address_id"];
$student->students_medical_remarks = $data["students_medical_remarks"];
$student->students_institutional_email = $data["students_institutional_email"];
$student->students_family_doctor = $data["students_family_doctor"];
$student->students_family_doctor_contact = $data["students_family_doctor_contact"];
$student->students_family_circumstances = $data["students_family_circumstances"];
$student->students_created = date("Y-m-d H:i:s");
$student->students_datetime = date("Y-m-d H:i:s");

// SCHOOL YEAR STUDENT
$student->current_students_sy_id = $data["current_students_sy_id"];
$student->current_students_last_learning_type = $data["current_students_last_learning_type"];
$student->current_students_last_school_attended = $data["current_students_last_school_attended"];
$student->current_students_last_gpa = $data["current_students_last_gpa"];
$student->current_students_last_grade_level_id = $data["current_students_last_grade_level_id"];
$student->current_students_grade_level_id = $data["current_students_grade_level_id"];
$student->current_students_last_school_address = $data["current_students_last_school_address"];
$student->current_students_last_remarks = $data["current_students_last_remarks"];

$queryRegistarNotification = $student->readTemplateForNewStudentNotifyRegistrar();

if ($student->students_lrn != "") {
    isLrnExist($student, $student->students_lrn);
}

$query = checkCreate($student);

checkCreateStudentSchoolYearByParent($student);
checkCreateStudentSchoolYearByParentCurrent($student);

// for parent protal only
if ($data["role_is_parent"] == 1) {

    if ($queryRegistarNotification->rowCount() == 0) {
        returnError('No Email Template, Please check the email template.');
    }

    $row = $queryRegistarNotification->fetch(PDO::FETCH_ASSOC);
    extract($row);

    if ($queryRegistarNotification->rowCount() > 0) {
        $ccEmail = [
            $email_template_cc_email,
            $email_template_cc_email_two
        ];

        $notifyRegistrar = sendEmail(
            $email_template_subject,
            $email_template_content,
            trim($notification_email),
            $ccEmail,
            [
                'client_name' => $data["parents_fname"] . ' ' . $data["parents_lname"],
                'student_name' => $data["students_fname"] . ' ' . $data["students_lname"],
                'grade_level' => $data["grade"],
                'sy' => $data["sy"],
                'timestamp' => $student->students_created
            ]
        );
        if ($notifyRegistrar["mail_success"] == false) {
            returnError($notifyRegistrar["error_message"]);
        }
    }

    // // loop through notification and get all the registrar department
    // // to send email
    // for ($i = 0; $i < count($queryRegistarNotification); $i++) {
    //     if ($queryRegistarNotification[$i]["notification_email"] == '') continue;

    //     $mailData = sendEmail(
    //         $student->students_fname . ' ' . $student->students_lname,
    //         $student->students_email,
    //         $queryRegistarNotification[$i]["notification_email"],
    //     );

    //     // failed sending email
    //     if ($mailData["mail_success"] == false) {
    //         returnError($mailData["error"]);
    //     }
    // }
}

returnSuccess($student, "Student", $query);
