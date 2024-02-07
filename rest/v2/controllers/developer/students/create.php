<?php
$conn = null;
$conn = checkDbConnection();
$student = new StudentInfo($conn);
if (array_key_exists("studentid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$student->student_info_user_id = checkIndex($data, "student_info_user_id");
$student->student_info_is_archive = 1;
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
// $student->student_info_address_id = checkIndex($data, "student_info_address_id");
$student->student_info_last_school = checkIndex($data, "student_info_last_school");
$student->student_info_last_gpa = checkIndex($data, "student_info_last_gpa");
$student->student_info_last_grade = checkIndex($data, "student_info_last_grade");
$student->student_info_school_address = checkIndex($data, "student_info_school_address");
$student->student_info_school_other = checkIndex($data, "student_info_school_other");
$student->student_info_conduct = 0;
$student->student_info_declaration = 0;
$student->student_info_parent_commitment = 0;
$student->student_info_parent_consent = 0;
$student->student_info_is_registrar_notify = 0;
$student->student_info_is_finance_notify = 0;
$student->student_info_is_it_notify = 0;
$student->student_info_is_enrolled = 0;
$student->student_info_medical_notes = checkIndex($data, "student_info_medical_notes");
$student->student_info_medical_doctor = checkIndex($data, "student_info_medical_doctor");
$student->student_info_medical_contact = checkIndex($data, "student_info_medical_contact");
$student->student_info_family_circumstances = checkIndex($data, "student_info_family_circumstances");
// $student->student_info_archive_remark = checkIndex($data, "student_info_archive_remark");
$student->student_info_created = date("Y-m-d H:i:s");
$student->student_info_datetime = date("Y-m-d H:i:s");

// isNameExist($student, $student->student_name);

$query = checkCreate($student);
returnSuccess($student, "student", $query);
