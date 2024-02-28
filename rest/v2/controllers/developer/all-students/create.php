<?php

$conn = null;
$conn = checkDbConnection();
$student = new AllStudents($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);
checkPayload($data);

$student->school_year_students_is_active = 1;
$student->school_year_students_sy_id = $data["school_year_students_sy_id"];
$student->school_year_students_student_id = $data["school_year_students_student_id"];
$student->school_year_students_last_learning_type = $data["school_year_students_last_learning_type"];
$student->school_year_students_last_school_attended = $data["school_year_students_last_grade_level_id"];
$student->school_year_students_last_gpa = $data["school_year_students_last_gpa"];
$student->school_year_students_last_grade_level_id = $data["school_year_students_last_grade_level_id"];
$student->school_year_students_last_school_address = $data["school_year_students_last_school_address"];
$student->school_year_students_last_remarks = $data["school_year_students_last_grade_level_id"];
$student->school_year_students_created = date("Y-m-d H:i:s");
$student->school_year_students_datetime = date("Y-m-d H:i:s");

$query = checkCreate($student);

checkCreateStudentSchoolYearByParent($student);

returnSuccess($student, "Student", $query);
