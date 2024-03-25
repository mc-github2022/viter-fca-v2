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
            checkRemoveSchoolYearStudents($student);
            // if student id is only one
            if ($syStudent[0]["student_count"] == 1) {
                // $query = checkUpdateSYCurrentSchoolYear($student); 
                checkDeleteSchoolYearCurrentStudents($student);
                $query = checkDelete($student);
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
                    $student->current_students_sy_id = $lastSyStudent[0]["school_year_students_sy_id"];
                    $student->current_students_last_grade_level_id = $lastSyStudent[0]["school_year_students_last_grade_level_id"];
                    $student->current_students_is_notify = $lastSyStudent[0]["school_year_students_is_notify"];
                    $student->current_students_is_accept_payment = $lastSyStudent[0]["school_year_students_is_accept_payment"];
                    $student->current_students_schedule_fees_id = $lastSyStudent[0]["school_year_students_schedule_fees_id"];
                    $student->current_students_rate_id = $lastSyStudent[0]["school_year_students_rate_id"];
                    $student->current_students_assessment_remarks = $lastSyStudent[0]["school_year_students_assessment_remarks"];
                    $student->current_students_primary_discount_id = $lastSyStudent[0]["school_year_students_primary_discount_id"];
                    $student->current_students_additional_discount_id = $lastSyStudent[0]["school_year_students_additional_discount_id"];
                    $student->current_students_last_coc_is_agree = $lastSyStudent[0]["school_year_students_last_coc_is_agree"];
                    $student->current_students_last_parent_declaration_is_agree = $lastSyStudent[0]["school_year_students_last_parent_declaration_is_agree"];
                    $student->current_students_last_parent_consent_is_agree = $lastSyStudent[0]["school_year_students_last_parent_consent_is_agree"];
                    $student->current_students_last_parent_commitment_is_agree = $lastSyStudent[0]["school_year_students_last_parent_commitment_is_agree"];
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
