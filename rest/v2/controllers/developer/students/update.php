<?php
$conn = null;
$conn = checkDbConnection();
$student = new StudentInfo($conn);
$error = [];
$returnData = [];
if (array_key_exists("studentid", $_GET)) {
    checkPayload($data);
    $student->student_info_aid = $_GET['studentid'];
    $student->student_info_user_id = checkIndex($data, "student_info_user_id");
    $student->student_info_learning_type = checkIndex($data, "student_info_learning_type");
    $student->student_info_grade_id = checkIndex($data, "student_info_grade_id");
    $student->student_info_reference_no = checkIndex($data, "student_info_reference_no");
    $student->student_info_fname = checkIndex($data, "student_info_fname");
    $student->student_info_lname = checkIndex($data, "student_info_lname");
    $student->student_info_mname = checkIndex($data, "student_info_mname");
    $student->student_info_gender = checkIndex($data, "student_info_gender");
    $student->student_info_bday = checkIndex($data, "student_info_bday");
    $student->student_info_birth_place = checkIndex($data, "student_info_birth_place");
    $student->student_info_email = checkIndex($data, "student_info_email");
    $student->student_info_institutional_email = checkIndex($data, "student_info_institutional_email");
    $student->student_info_mobile = checkIndex($data, "student_info_mobile");
    $student->student_info_landline = checkIndex($data, "student_info_landline");
    $student->student_info_address_id = checkIndex($data, "student_info_address_id");
    $student->student_info_last_school = checkIndex($data, "student_info_last_school");
    $student->student_info_last_gpa = checkIndex($data, "student_info_last_gpa");
    $student->student_info_last_grade = checkIndex($data, "student_info_last_grade");
    $student->student_info_school_address = checkIndex($data, "student_info_school_address");
    $student->student_info_school_other = checkIndex($data, "student_info_school_other");
    $student->student_info_conduct = checkIndex($data, "student_info_conduct");
    $student->student_info_declaration = checkIndex($data, "student_info_declaration");
    $student->student_info_parent_commitment = checkIndex($data, "student_info_parent_commitment");
    $student->student_info_parent_consent = checkIndex($data, "student_info_parent_consent");
    $student->student_info_is_registrar_notify = checkIndex($data, "student_info_is_registrar_notify");
    $student->student_info_is_finance_notify = checkIndex($data, "student_info_is_finance_notify");
    $student->student_info_is_it_notify = checkIndex($data, "student_info_is_it_notify");
    $student->student_info_is_enrolled = checkIndex($data, "student_info_is_enrolled");
    $student->student_info_medical_notes = checkIndex($data, "student_info_medical_notes");
    $student->student_info_medical_doctor = checkIndex($data, "student_info_medical_doctor");
    $student->student_info_medical_contact = checkIndex($data, "student_info_medical_contact");
    $student->student_info_family_circumstances = checkIndex($data, "student_info_family_circumstances");
    $student->student_info_archive_remark = checkIndex($data, "student_info_archive_remark");
    $student->student_info_datetime = date("Y-m-d H:i:s");
    checkId($student->student_info_aid);

    $student_fname_old = checkIndex($data, "student_info_fname");
    $student_lname_old = checkIndex($data, "student_info_lname");

    $student->fullname = strtolower($student->student_info_fname) ." ". strtolower($student->student_info_lname);

    $fullname_old = $student_fname_old . " " . $student_lname_old;

    compareName($student, $fullname_old, $student->fullname);

    $query = checkUpdate($student);
    returnSuccess($student, "student", $query);
}

checkEndpoint();



