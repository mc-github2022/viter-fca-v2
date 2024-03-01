<?php
require '../../../../core/header.php';
require '../../../../core/functions.php';
require 'functions.php';
require '../../../../models/developer/client/client-student/ClientStudent.php';

$conn = null;
$conn = checkDbConnection();
$student = new ClientStudent($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);

checkPayload($data);
$student->current_students_is_active = 1;
$student->current_students_sy_id = $data["current_students_sy_id"];
$student->current_students_student_id = $data["current_students_student_id"];
$student->current_students_last_learning_type = $data["current_students_last_learning_type"];
$student->current_students_last_school_attended = $data["current_students_last_school_attended"];
$student->current_students_last_gpa = $data["current_students_last_gpa"];
$student->current_students_last_grade_level_id = $data["current_students_grade_level_id"];
$student->current_students_last_school_address = $data["current_students_last_school_address"];
$student->current_students_last_remarks = $data["current_students_last_remarks"];

$student->students_fname = $data["students_fname"];
$student->students_lname = $data["students_lname"];

$student->current_students_created = date("Y-m-d H:i:s");
$student->current_students_datetime = date("Y-m-d H:i:s");

$student->grade_level_order = $data["grade_level_order"];

$nextGradeLevel = getResultData($student->readNextGradeLevel());

$student->current_students_grade_level_id = $nextGradeLevel[0]["grade_level_aid"];

$fullname = "$student->students_fname $student->students_lname";

// check if student is already enrolled
isStudentExist($student, $fullname);

// for school year student -> repository // insert
$query = checkEnrollStudent($student);

// for school year student current -> current // update
checkUpdateSchoolYearStudentCurrent($student);

returnSuccess($student, "Parent", $query);

checkEndpoint();
