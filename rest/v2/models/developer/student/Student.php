<?php
class Student
{
    public $students_aid;
    public $students_is_active;
    public $students_lrn;
    public $students_fname;
    public $students_lname;
    public $students_mname;
    public $students_gender;
    public $students_birth_date;
    public $students_birth_place;
    public $students_email;
    public $students_mobile;
    public $students_landline;
    public $students_address;
    public $students_institutional_email;
    public $students_family_doctor;
    public $students_family_doctor_contact;
    public $students_medical_remarks;
    public $students_family_circumstances;
    public $students_created;
    public $students_datetime;

    public $school_year_students_sy_id;
    public $school_year_students_last_grade_level_id;

    public $connection;
    public $lastInsertedId;
    public $students_start;
    public $students_total;
    public $students_search;

    public $tblStudent;
    public $tblSyStudent;
    public $tblSchoolYear;
    public $tblGradeLevel;
    public $tblParentInfo;

    public $fullname;


    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblStudent = "fcav2_student_info";
        $this->tblSyStudent = "fcav2_school_year_students";
        $this->tblGradeLevel = "fcav2_settings_grade_level";
        $this->tblParentInfo = "fcav2_info_parent_guardian";
        $this->tblSchoolYear = "fcav2_settings_school_year";
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblStudent} ";
            $sql .= "( ";
            $sql .= "students_lrn, ";
            $sql .= "students_fname, ";
            $sql .= "students_lname, ";
            $sql .= "students_mname, ";
            $sql .= "students_gender, ";
            $sql .= "students_birth_date, ";
            $sql .= "students_email, ";
            $sql .= "students_mobile, ";
            $sql .= "students_landline, ";
            $sql .= "students_created, ";
            $sql .= "students_datetime ) values ( ";
            $sql .= ":students_lrn, ";
            $sql .= ":students_fname, ";
            $sql .= ":students_lname, ";
            $sql .= ":students_mname, ";
            $sql .= ":students_gender, ";
            $sql .= ":students_birth_date, ";
            $sql .= ":students_email, ";
            $sql .= ":students_mobile, ";
            $sql .= ":students_landline, ";
            $sql .= ":students_created, ";
            $sql .= ":students_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "students_lrn" => $this->students_lrn,
                "students_fname" => $this->students_fname,
                "students_lname" => $this->students_lname,
                "students_mname" => $this->students_mname,
                "students_gender" => $this->students_gender,
                "students_birth_date" => $this->students_birth_date,
                "students_email" => $this->students_email,
                "students_mobile" => $this->students_mobile,
                "students_landline" => $this->students_landline,
                "students_created" => $this->students_created,
                "students_datetime" => $this->students_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createSchoolYearStudent()
    {
        try {
            $sql = "insert into {$this->tblSyStudent} ";
            $sql .= "( ";
            $sql .= "school_year_students_sy_id, ";
            $sql .= "school_year_students_student_id, ";
            $sql .= "school_year_students_last_grade_level_id, ";
            $sql .= "school_year_created, ";
            $sql .= "school_year_datetime ) values ( ";
            $sql .= ":school_year_students_sy_id, ";
            $sql .= ":school_year_students_student_id, ";
            $sql .= ":school_year_students_last_grade_level_id, ";
            $sql .= ":school_year_created, ";
            $sql .= ":school_year_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_students_sy_id" => $this->school_year_students_sy_id,
                "school_year_students_student_id" => $this->lastInsertedId,
                "school_year_students_last_grade_level_id" => $this->school_year_students_last_grade_level_id,
                "school_year_created" => $this->students_created,
                "school_year_datetime" => $this->students_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readAll()
    {
        try {
            $sql = "select ";
            $sql .= "student.students_is_active, ";
            $sql .= "CONCAT(student.students_lname, ', ', student.students_fname) as student_fullname, ";
            $sql .= "CONCAT(YEAR(schoolYear.school_year_start_date), '-', YEAR(schoolYear.school_year_end_date)) as school_year, ";
            $sql .= "gradeLevel.grade_level_name, ";
            $sql .= "gradeLevel.grade_level_is_pre_school ";
            $sql .= "from {$this->tblStudent} as student, ";
            $sql .= "{$this->tblSyStudent} as syStudent, ";
            $sql .= "{$this->tblSchoolYear} as schoolyear, ";
            $sql .= "{$this->tblGradeLevel} as gradeLevel ";
            $sql .= "where student.student_aid = syStudent.school_year_students_student_id ";
            $sql .= "and gradeLevel.grade_level_aid = syStudent.school_year_students_last_grade_level_id ";
            $sql .= "and schoolyear.school_year_aid = syStudent.school_year_students_sy_id ";
            $sql .= "and schoolyear.school_year_is_active = 1 "; // only get or show all the student in the current or ongoing school year
            $sql .= "group by ";
            $sql .= "student.students_aid ";
            $sql .= "order by ";
            $sql .= "student.students_lname, ";
            $sql .= "student.students_fname ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readLimit()
    {
        try {
            $sql = "select ";
            $sql .= "student.students_is_active, ";
            $sql .= "CONCAT(student.students_lname, ', ', student.students_fname) as student_fullname, ";
            $sql .= "CONCAT(YEAR(schoolYear.school_year_start_date), '-', YEAR(schoolYear.school_year_end_date)) as school_year, ";
            $sql .= "gradeLevel.grade_level_name, ";
            $sql .= "gradeLevel.grade_level_is_pre_school ";
            $sql .= "from {$this->tblStudent} as student, ";
            $sql .= "{$this->tblSyStudent} as syStudent, ";
            $sql .= "{$this->tblSchoolYear} as schoolyear, ";
            $sql .= "{$this->tblGradeLevel} as gradeLevel ";
            $sql .= "where student.student_aid = syStudent.school_year_students_student_id ";
            $sql .= "and gradeLevel.grade_level_aid = syStudent.school_year_students_last_grade_level_id ";
            $sql .= "and schoolyear.school_year_aid = syStudent.school_year_students_sy_id ";
            $sql .= "and schoolyear.school_year_is_active = 1 "; // only get or show all the student in the current or ongoing school year
            $sql .= "group by ";
            $sql .= "student.students_aid ";
            $sql .= "order by ";
            $sql .= "student.students_lname, ";
            $sql .= "student.students_fname ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->students_start - 1,
                "total" => $this->students_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "student.students_is_active, ";
            $sql .= "CONCAT(student.students_lname, ', ', student.students_fname) as student_fullname, ";
            $sql .= "CONCAT(YEAR(schoolYear.school_year_start_date), '-', YEAR(schoolYear.school_year_end_date)) as school_year, ";
            $sql .= "gradeLevel.grade_level_name, ";
            $sql .= "gradeLevel.grade_level_is_pre_school ";
            $sql .= "from {$this->tblStudent} as student, ";
            $sql .= "{$this->tblSyStudent} as syStudent, ";
            $sql .= "{$this->tblSchoolYear} as schoolyear, ";
            $sql .= "{$this->tblGradeLevel} as gradeLevel ";
            $sql .= "where student.student_aid = syStudent.school_year_students_student_id ";
            $sql .= "and gradeLevel.grade_level_aid = syStudent.school_year_students_last_grade_level_id ";
            $sql .= "and schoolyear.school_year_aid = syStudent.school_year_students_sy_id ";
            $sql .= "and schoolyear.school_year_is_active = 1 "; // only get or show all the student in the current or ongoing school year
            $sql .= "and ";
            $sql .= "( ";
            $sql .= "student.students_fname like :search ";
            $sql .= "or student.students_lname like :search ";
            $sql .= "or gradeLevel.grade_level_name like :search ";
            $sql .= ") ";
            $sql .= "group by ";
            $sql .= "student.students_aid ";
            $sql .= "order by ";
            $sql .= "student.students_lname, ";
            $sql .= "student.students_fname ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "search" => "%{$this->students_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readById()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblStudent} ";
            $sql .= "where students_aid = :students_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "students_aid" => $this->students_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblStudent} set ";
            $sql .= "students_is_active = :students_is_active, ";
            $sql .= "students_datetime = :students_datetime ";
            $sql .= "where students_aid = :students_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "students_is_active" => $this->students_is_active,
                "students_datetime" => $this->students_datetime,
                "students_aid" => $this->students_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    // delete
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblStudent} ";
            $sql .= "where students_aid = :students_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "students_aid" => $this->students_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // // update
    // public function update()
    // {
    //     try {
    //         $sql = "update {$this->tblStudent} set ";
    //         // $sql .= "students_user_id = :students_user_id, ";
    //         $sql .= "students_learning_type = :students_learning_type, ";
    //         $sql .= "students_grade_id = :students_grade_id, ";
    //         $sql .= "students_reference_no = :students_reference_no, ";
    //         $sql .= "students_fname = :students_fname, ";
    //         $sql .= "students_lname = :students_lname, ";
    //         $sql .= "students_mname = :students_mname, ";
    //         $sql .= "students_gender = :students_gender, ";
    //         $sql .= "students_bday = :students_bday, ";
    //         $sql .= "students_birth_place = :students_birth_place, ";
    //         // $sql .= "students_email = :students_email, ";
    //         $sql .= "students_institutional_email = :students_institutional_email, ";
    //         $sql .= "students_mobile = :students_mobile, ";
    //         $sql .= "students_landline = :students_landline, ";
    //         $sql .= "students_adress_id = :students_adress_id, ";
    //         $sql .= "students_last_school = :students_last_school, ";
    //         $sql .= "students_last_gpa = :students_last_gpa, ";
    //         $sql .= "students_last_grade = :students_last_grade, ";
    //         $sql .= "students_school_address = :students_school_address, ";
    //         $sql .= "students_school_other = :students_school_other, ";
    //         // $sql .= "students_conduct = :students_conduct, ";
    //         // $sql .= "students_declaration = :students_declaration, ";
    //         // $sql .= "students_parent_commitment = :students_parent_commitment, ";
    //         // $sql .= "students_parent_consent = :students_parent_consent, ";
    //         // $sql .= "students_is_registrar_notify = :students_is_registrar_notify, ";
    //         // $sql .= "students_is_finance_notify = :students_is_finance_notify, ";
    //         // $sql .= "students_is_it_notify = :students_is_it_notify, ";
    //         // $sql .= "students_is_enrolled = :students_is_enrolled, ";
    //         $sql .= "students_medical_notes = :students_medical_notes, ";
    //         $sql .= "students_medical_doctor = :students_medical_doctor, ";
    //         $sql .= "students_medical_contact = :students_medical_contact, ";
    //         $sql .= "students_family_circumstances = :students_family_circumstances, ";
    //         // $sql .= "students_archive_remark = :students_archive_remark, ";
    //         $sql .= "students_datetime = :students_datetime ";
    //         $sql .= "where students_aid = :students_aid ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             // "students_user_id" => $this->students_user_id,
    //             "students_learning_type" => $this->students_learning_type,
    //             "students_grade_id" => $this->students_grade_id,
    //             "students_reference_no" => $this->students_reference_no,
    //             "students_fname" => $this->students_fname,
    //             "students_lname" => $this->students_lname,
    //             "students_mname" => $this->students_mname,
    //             "students_gender" => $this->students_gender,
    //             "students_bday" => $this->students_bday,
    //             "students_birth_place" => $this->students_birth_place,
    //             // // "students_email" => $this->students_email,
    //             "students_institutional_email" => $this->students_institutional_email,
    //             "students_mobile" => $this->students_mobile,
    //             "students_landline" => $this->students_landline,
    //             "students_adress_id" => $this->students_adress_id,
    //             "students_last_school" => $this->students_last_school,
    //             "students_last_gpa" => $this->students_last_gpa,
    //             "students_last_grade" => $this->students_last_grade,
    //             "students_school_address" => $this->students_school_address,
    //             "students_school_other" => $this->students_school_other,
    //             // "students_conduct" => $this->students_conduct,
    //             // "students_declaration" => $this->students_declaration,
    //             // "students_parent_commitment" => $this->students_parent_commitment,
    //             // "students_parent_consent" => $this->students_parent_consent,
    //             // "students_is_registrar_notify" => $this->students_is_registrar_notify,
    //             // "students_is_finance_notify" => $this->students_is_finance_notify,
    //             // "students_is_it_notify" => $this->students_is_it_notify,
    //             // "students_is_enrolled" => $this->students_is_enrolled,
    //             "students_medical_notes" => $this->students_medical_notes,
    //             "students_medical_doctor" => $this->students_medical_doctor,
    //             "students_medical_contact" => $this->students_medical_contact,
    //             "students_family_circumstances" => $this->students_family_circumstances,
    //             // "students_archive_remark" => $this->students_archive_remark,
    //             "students_datetime" => $this->students_datetime,
    //             "students_aid" => $this->students_aid,
    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }

    public function checkName()
    {
        try {
            $sql = "select students_fname, ";
            $sql .= "students_lname ";
            $sql .= "from {$this->tblStudent} ";
            $sql .= "where students_fname = :students_fname ";
            $sql .= "and students_lname = :students_lname ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "students_fname" => "{$this->students_fname}",
                "students_lname" => "{$this->students_lname}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
