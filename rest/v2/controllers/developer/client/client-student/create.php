<?php

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
$student->school_year_students_sy_id = $data["school_year_students_sy_id"];
$student->school_year_students_last_learning_type = $data["school_year_students_last_learning_type"];
$student->school_year_students_last_school_attended = $data["school_year_students_last_grade_level_id"];
$student->school_year_students_last_gpa = $data["school_year_students_last_gpa"];
$student->school_year_students_last_grade_level_id = $data["school_year_students_last_grade_level_id"];
$student->school_year_students_last_school_address = $data["school_year_students_last_school_address"];
$student->school_year_students_last_remarks = $data["school_year_students_last_grade_level_id"];


// $fullname = "$student->students_fname, $student->students_lname";
// isNameExist($student, $fullname);

if ($student->students_lrn != "") {
    isLrnExist($student, $student->students_lrn);
}

$query = checkCreate($student);

checkCreateStudentSchoolYearByParent($student);

returnSuccess($student, "Student", $query);
