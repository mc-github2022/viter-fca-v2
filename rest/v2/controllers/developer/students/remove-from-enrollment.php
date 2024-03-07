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
        $student->current_students_grade_level_id = 0;
        $student->students_datetime = date("Y-m-d H:i:s");
        checkId($student->students_aid);
        checkId($student->school_year_students_sy_id);

        // get count of student in sy student table
        $syStudent = getResultData($student->readCountSchoolYearStudentByStudentId());

        // if can't find any student id in sy student table
        if (count($syStudent) == 0) {
            returnError('Invalid Student ID.');
        }

        // if have student id in sy student table
        if (count($syStudent) > 0) {
            // delete current school year in SY student table
            checkDeleteSchoolYearStudents($student);
            // if student id is only one
            if ($syStudent[0]["student_count"] == 1) {
                $query = checkUpdateSYCurrentSchoolYear($student);
                http_response_code(200);
                returnSuccess($student, "Student", $query);
            }

            // if student is morethan one
            if ($syStudent[0]["student_count"] > 1) {

                // get count of student in sy student table
                $lastSyStudent = getResultData($student->readLastSchoolYearStudentByStudentId());
                // if can't find any student id in sy student table
                if (count($lastSyStudent) == 0) {
                    returnError('Invalid Last Student ID.');
                }
                // if can't find any student id in sy student table
                if (count($lastSyStudent) > 0) {
                    $student->current_students_grade_level_id = $lastSyStudent[0]["school_year_students_grade_level_id"];
                    $query = checkUpdateSYCurrentSchoolYear($student);
                    http_response_code(200);
                    returnSuccess($student, "Student", $query);
                }
            }
        }

        checkEndpoint();
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
