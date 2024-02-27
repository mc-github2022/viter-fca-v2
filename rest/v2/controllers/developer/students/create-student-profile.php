<?php
require '../../../core/header.php';
require '../../../core/functions.php';
require 'functions.php';
require '../../../models/developer/student/Student.php';


$conn = null;
$conn = checkDbConnection();
$student = new Student($conn);

$student->students_is_active = 1;
$student->students_parent_id = $data["students_parent_id"];
$student->students_lrn = $data["students_lrn"];
$student->students_fname = checkIndex($data, "students_fname");
$student->students_lname = checkIndex($data, "students_lname");
$student->students_mname = $data["students_mname"];
$student->students_gender = checkIndex($data, "students_gender");
$student->students_birth_place = checkIndex($data, "students_birth_place");
$student->students_birth_date = checkIndex($data, "students_birth_date");
$student->students_address = checkIndex($data, "students_address");
$student->students_email = $data["students_email"];
$student->students_mobile = $data["students_mobile"];
$student->students_landline = $data["students_landline"];
// ADDRESS INSTITUTIONAL NOT INCLUDED 
$student->students_medical_remarks = $data["students_medical_remarks"];
$student->students_family_doctor = $data["students_family_doctor"];
$student->students_family_doctor_contact = $data["students_family_doctor_contact"];
$student->students_family_circumstances = $data["students_family_circumstances"];

$student->students_created = date("Y-m-d H:i:s");
$student->students_datetime = date("Y-m-d H:i:s");
// SCHOOL YEAR STUDENT
$student->school_year_students_last_learning_type = checkIndex($data, "school_year_students_last_learning_type");
$student->school_year_students_sy_id = checkIndex($data, "school_year_students_sy_id");
$student->school_year_students_last_grade_level_id = checkIndex($data, "school_year_students_last_grade_level_id");
$student->school_year_students_last_remarks = $data["school_year_students_last_grade_level_id"];
$student->school_year_students_last_school_attended = checkIndex($data, "school_year_students_last_grade_level_id");
$student->school_year_students_last_gpa = checkIndex($data, "school_year_students_last_gpa");


$query = checkCreateStudentProfileByParent($student);

// checkCreateSchoolYearStudent($student);

returnSuccess($student, "Student", $query);