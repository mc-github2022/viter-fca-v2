<?php
class Student
{
    public $students_aid;
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

    public $connection;
    public $lastInsertedId;
    public $students_start;
    public $students_total;
    public $students_search;
    public $tblStudentInfo;
    public $tblGradeLevel;
    public $tblParentInfo;

    public $fullname;


    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblStudentInfo = "fcav2_student_info";
        $this->tblGradeLevel = "fcav2_settings_grade_level";
        $this->tblParentInfo = "fcav2_info_parent_guardian";
    }


    public function create()
    {
        try {
            $sql = "insert into {$this->tblStudentInfo} ";
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

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblStudentInfo} as student, ";
            $sql .= "{$this->tblGradeLevel} as gradeLevel ";
            $sql .= "where student.students_grade_id = gradeLevel.grade_level_aid ";
            $sql .= "order by student.students_is_enrolled asc, ";
            $sql .= "student.students_is_registrar_notify desc, ";
            $sql .= "student.students_created, ";
            $sql .= "student.students_lname, ";
            $sql .= "student.students_fname asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readLimit()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblStudentInfo} as student, ";
            $sql .= "{$this->tblGradeLevel} as gradeLevel ";
            $sql .= "where student.students_grade_id = gradeLevel.grade_level_aid ";
            $sql .= "order by student.students_is_enrolled asc, ";
            $sql .= "student.students_is_registrar_notify desc, ";
            $sql .= "student.students_created, ";
            $sql .= "student.students_lname, ";
            $sql .= "student.students_fname asc ";
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
            $sql = "select students_aid, ";
            $sql .= "students_user_id, ";
            $sql .= "students_fname, ";
            $sql .= "students_lname, ";
            $sql .= "students_is_archive ";
            $sql .= "from {$this->tblStudentInfo} ";
            $sql .= "where (students_fname like :search ";
            $sql .= "or students_aid like :students_aid) ";
            $sql .= "order by students_is_archive desc, ";
            $sql .= "students_aid asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "search" => "{$this->student_search}%",
                // "client_id" => "{$this->client_search}%",
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
            $sql .= "from {$this->tblStudentInfo} as student, ";
            $sql .= "{$this->tblGradeLevel} as gradeLevel ";
            $sql .= "where student.students_grade_id = gradeLevel.grade_level_aid ";
            $sql .= "and student.students_aid = :students_aid ";
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
            $sql = "update {$this->tblStudentInfo} set ";
            $sql .= "students_is_archive = :students_is_archive, ";
            $sql .= "students_datetime = :students_datetime ";
            $sql .= "where students_aid = :students_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "students_is_archive" => $this->students_is_archive,
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
            $sql = "delete from {$this->tblStudentInfo} ";
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

    // update
    public function update()
    {
        try {
            $sql = "update {$this->tblStudentInfo} set ";
            // $sql .= "students_user_id = :students_user_id, ";
            $sql .= "students_learning_type = :students_learning_type, ";
            $sql .= "students_grade_id = :students_grade_id, ";
            $sql .= "students_reference_no = :students_reference_no, ";
            $sql .= "students_fname = :students_fname, ";
            $sql .= "students_lname = :students_lname, ";
            $sql .= "students_mname = :students_mname, ";
            $sql .= "students_gender = :students_gender, ";
            $sql .= "students_bday = :students_bday, ";
            $sql .= "students_birth_place = :students_birth_place, ";
            // $sql .= "students_email = :students_email, ";
            $sql .= "students_institutional_email = :students_institutional_email, ";
            $sql .= "students_mobile = :students_mobile, ";
            $sql .= "students_landline = :students_landline, ";
            $sql .= "students_adress_id = :students_adress_id, ";
            $sql .= "students_last_school = :students_last_school, ";
            $sql .= "students_last_gpa = :students_last_gpa, ";
            $sql .= "students_last_grade = :students_last_grade, ";
            $sql .= "students_school_address = :students_school_address, ";
            $sql .= "students_school_other = :students_school_other, ";
            // $sql .= "students_conduct = :students_conduct, ";
            // $sql .= "students_declaration = :students_declaration, ";
            // $sql .= "students_parent_commitment = :students_parent_commitment, ";
            // $sql .= "students_parent_consent = :students_parent_consent, ";
            // $sql .= "students_is_registrar_notify = :students_is_registrar_notify, ";
            // $sql .= "students_is_finance_notify = :students_is_finance_notify, ";
            // $sql .= "students_is_it_notify = :students_is_it_notify, ";
            // $sql .= "students_is_enrolled = :students_is_enrolled, ";
            $sql .= "students_medical_notes = :students_medical_notes, ";
            $sql .= "students_medical_doctor = :students_medical_doctor, ";
            $sql .= "students_medical_contact = :students_medical_contact, ";
            $sql .= "students_family_circumstances = :students_family_circumstances, ";
            // $sql .= "students_archive_remark = :students_archive_remark, ";
            $sql .= "students_datetime = :students_datetime ";
            $sql .= "where students_aid = :students_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                // "students_user_id" => $this->students_user_id,
                "students_learning_type" => $this->students_learning_type,
                "students_grade_id" => $this->students_grade_id,
                "students_reference_no" => $this->students_reference_no,
                "students_fname" => $this->students_fname,
                "students_lname" => $this->students_lname,
                "students_mname" => $this->students_mname,
                "students_gender" => $this->students_gender,
                "students_bday" => $this->students_bday,
                "students_birth_place" => $this->students_birth_place,
                // // "students_email" => $this->students_email,
                "students_institutional_email" => $this->students_institutional_email,
                "students_mobile" => $this->students_mobile,
                "students_landline" => $this->students_landline,
                "students_adress_id" => $this->students_adress_id,
                "students_last_school" => $this->students_last_school,
                "students_last_gpa" => $this->students_last_gpa,
                "students_last_grade" => $this->students_last_grade,
                "students_school_address" => $this->students_school_address,
                "students_school_other" => $this->students_school_other,
                // "students_conduct" => $this->students_conduct,
                // "students_declaration" => $this->students_declaration,
                // "students_parent_commitment" => $this->students_parent_commitment,
                // "students_parent_consent" => $this->students_parent_consent,
                // "students_is_registrar_notify" => $this->students_is_registrar_notify,
                // "students_is_finance_notify" => $this->students_is_finance_notify,
                // "students_is_it_notify" => $this->students_is_it_notify,
                // "students_is_enrolled" => $this->students_is_enrolled,
                "students_medical_notes" => $this->students_medical_notes,
                "students_medical_doctor" => $this->students_medical_doctor,
                "students_medical_contact" => $this->students_medical_contact,
                "students_family_circumstances" => $this->students_family_circumstances,
                // "students_archive_remark" => $this->students_archive_remark,
                "students_datetime" => $this->students_datetime,
                "students_aid" => $this->students_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkName()
    {
        try {
            $sql = "select students_fname, ";
            $sql .= "students_lname ";
            $sql .= "from {$this->tblStudentInfo} ";
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


    public function readAddressByStudentId()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblStudentInfo} as student, ";
            $sql .= "{$this->tblParentInfo} as parent ";
            $sql .= "where parent.parent_guardian_info_user_id = student.students_user_id ";
            $sql .= "and student.students_user_id = :students_user_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "students_user_id" => $this->students_user_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readStudentByParentId()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblStudentInfo} as student, ";
            $sql .= "{$this->tblUserOther} as other, ";
            $sql .= "{$this->tblGradeLevel} as gradeLevel ";
            $sql .= "where student.students_user_id = other.user_other_aid ";
            $sql .= "and student.students_grade_id = gradeLevel.grade_level_aid ";
            $sql .= "and student.students_user_id = :students_user_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "students_user_id" => $this->students_user_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
