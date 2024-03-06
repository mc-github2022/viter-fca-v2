<?php
require '../../../core/header.php';
require '../../../core/functions.php';
require 'functions.php';
require '../../../models/developer/student/Student.php';

$conn = null;
$conn = checkDbConnection();
$student = new Student($conn);

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("studentid", $_GET) && array_key_exists("syid", $_GET)) {


        $student->students_aid = $_GET['studentid'];
        $student->school_year_students_sy_id = $_GET['syid'];
        $student->current_students_sy_id = $_GET['syid'];
        $student->students_datetime = date("Y-m-d H:i:s");
        checkId($student->students_aid);
        checkId($student->school_year_students_sy_id);


        $syStudent = $student->readCountSchoolYearStudentByStudentId();

        // if can't find any student id in sy student table
        if ($syStudent->rowCount() == 0) {
            returnError('Invalid Student ID.');
        }

        // if have student id in sy student table
        if ($syStudent->rowCount() > 0) {
            $row = $syStudent->fetch(PDO::FETCH_ASSOC);
            extract($row);

            // if student id is only one
            if ($student_count == 1) {
                // checkUpdateSchoolYearStudent($student);
                // checkUpdateSchoolYearStudentCurrent($student); 
                $student->current_students_sy_id = 0;
                $query = checkUpdateSYCurrentSchoolYear($student);
                http_response_code(200);
                returnSuccess($student, "Student", $query);
            }
            // if student is morethan one
            if ($student_count > 1) {
                // delete current school year in SY student table
                checkDeleteSchoolYearStudents($student);
                // get last school year attended
                $lastSyStudent = $student->readLastSchoolYearStudentByStudentId();
                // if can't find any student id in sy student table
                if ($lastSyStudent->rowCount() == 0) {
                    returnError('Invalid Student ID.');
                }
                // if can't find any student id in sy student table
                if ($lastSyStudent->rowCount() > 0) {
                    $lastSyStudentRow = $lastSyStudent->fetch(PDO::FETCH_ASSOC);
                    extract($lastSyStudentRow);
                    $student->current_students_sy_id = 0;
                    $query = checkUpdateSYCurrentSchoolYear($student);
                    http_response_code(200);
                    returnSuccess($student, "Student", $query);
                }
            }
        }


        http_response_code(200);
        returnSuccess($student, "Student", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
