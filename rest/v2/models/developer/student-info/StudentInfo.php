<?php
class StudentInfo
{
    public $student_info_aid;
    public $student_info_user_id;
    public $student_info_is_archive;
    public $student_info_learning_type;
    public $student_info_grade_id;
    public $student_info_reference_no;
    public $student_info_fname;
    public $student_info_lname;
    public $student_info_mname;
    public $student_info_gender;
    public $student_info_bday;
    public $student_info_birth_place;
    public $student_info_email;
    public $student_info_institutional_email;
    public $student_info_mobile;
    public $student_info_landline;
    public $student_info_adress_id;
    public $student_info_last_school;
    public $student_info_last_gpa;
    public $student_info_last_grade;
    public $student_info_school_address;
    public $student_info_school_other;
    public $student_info_conduct;
    public $student_info_declaration;
    public $student_info_parent_commitment;
    public $student_info_parent_consent;
    public $student_info_is_registrar_notify;
    public $student_info_is_finance_notify;
    public $student_info_is_it_notify;
    public $student_info_is_enrolled;
    public $student_info_medical_notes;
    public $student_info_medical_doctor;
    public $student_info_medical_contact;
    public $student_info_family_circumstances;
    public $student_info_archive_remark;
    public $student_info_created;
    public $student_info_datetime;

    public $connection;
    public $lastInsertedId;
    public $student_info_start;
    public $student_info_total;
    public $student_info_search;
    public $tblStudentInfo;
    public $tblGradeLevel;
    public $tblParentInfo;

    public $fullname;
    

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblStudentInfo = "fca_student_info";
        $this->tblGradeLevel = "fca_settings_grade_level";
        $this->tblParentInfo = "fca_info_parent_guardian";

        $this->tblUserOther = "fca_settings_user_other";

      
    }


    public function create()
    {
        try {
            $sql = "insert into {$this->tblStudentInfo} ";
            $sql .= "( student_info_user_id, ";
            $sql .= "student_info_is_archive, ";
            $sql .= "student_info_learning_type, ";
            $sql .= "student_info_grade_id, ";
            $sql .= "student_info_reference_no, ";
            $sql .= "student_info_fname, ";
            $sql .= "student_info_lname, ";
            $sql .= "student_info_mname, ";
            $sql .= "student_info_gender, ";
            $sql .= "student_info_bday, ";
            $sql .= "student_info_birth_place, ";
            // $sql .= "student_info_email, ";
            $sql .= "student_info_institutional_email, ";
            $sql .= "student_info_mobile, ";
            $sql .= "student_info_landline, ";
            $sql .= "student_info_adress_id, ";
            $sql .= "student_info_last_school, ";
            $sql .= "student_info_last_gpa, ";
            $sql .= "student_info_last_grade, ";
            $sql .= "student_info_school_address, ";
            $sql .= "student_info_school_other, ";
            $sql .= "student_info_conduct, ";
            $sql .= "student_info_declaration, ";
            $sql .= "student_info_parent_commitment, ";
            $sql .= "student_info_parent_consent, ";
            $sql .= "student_info_is_registrar_notify, ";
            $sql .= "student_info_is_finance_notify, ";
            $sql .= "student_info_is_it_notify, ";
            $sql .= "student_info_is_enrolled, ";
            $sql .= "student_info_medical_notes, ";
            $sql .= "student_info_medical_doctor, ";
            $sql .= "student_info_medical_contact, ";
            $sql .= "student_info_family_circumstances, ";
            // $sql .= "student_info_archive_remark, ";
            $sql .= "student_info_created, ";
            $sql .= "student_info_datetime ) values ( ";
            $sql .= ":student_info_user_id, ";
            $sql .= ":student_info_is_archive, ";
            $sql .= ":student_info_learning_type, ";
            $sql .= ":student_info_grade_id, ";
            $sql .= ":student_info_reference_no, ";
            $sql .= ":student_info_fname, ";
            $sql .= ":student_info_lname, ";
            $sql .= ":student_info_mname, ";
            $sql .= ":student_info_gender, ";
            $sql .= ":student_info_bday, ";
            $sql .= ":student_info_birth_place, ";
            // $sql .= ":student_info_email, ";
            $sql .= ":student_info_institutional_email, ";
            $sql .= ":student_info_mobile, ";
            $sql .= ":student_info_landline, ";
            $sql .= ":student_info_adress_id, ";
            $sql .= ":student_info_last_school, ";
            $sql .= ":student_info_last_gpa, ";
            $sql .= ":student_info_last_grade, ";
            $sql .= ":student_info_school_address, ";
            $sql .= ":student_info_school_other, ";
            $sql .= ":student_info_conduct, ";
            $sql .= ":student_info_declaration, ";
            $sql .= ":student_info_parent_commitment, ";
            $sql .= ":student_info_parent_consent, ";
            $sql .= ":student_info_is_registrar_notify, ";
            $sql .= ":student_info_is_finance_notify, ";
            $sql .= ":student_info_is_it_notify, ";
            $sql .= ":student_info_is_enrolled, ";
            $sql .= ":student_info_medical_notes, ";
            $sql .= ":student_info_medical_doctor, ";
            $sql .= ":student_info_medical_contact, ";
            $sql .= ":student_info_family_circumstances, ";
            // $sql .= ":student_info_archive_remark, ";
            $sql .= ":student_info_created, ";
            $sql .= ":student_info_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "student_info_user_id" => $this->student_info_user_id,
                "student_info_is_archive" => $this->student_info_is_archive,
                "student_info_learning_type" => $this->student_info_learning_type,
                "student_info_grade_id" => $this->student_info_grade_id,
                "student_info_reference_no" => $this->student_info_reference_no,
                "student_info_fname" => $this->student_info_fname,
                "student_info_lname" => $this->student_info_lname,
                "student_info_mname" => $this->student_info_mname,
                "student_info_gender" => $this->student_info_gender,
                "student_info_bday" => $this->student_info_bday,
                "student_info_birth_place" => $this->student_info_birth_place,
                // // "student_info_email" => $this->student_info_email,
                "student_info_institutional_email" => $this->student_info_institutional_email,
                "student_info_mobile" => $this->student_info_mobile,
                "student_info_landline" => $this->student_info_landline,
                "student_info_adress_id" => $this->student_info_adress_id,
                "student_info_last_school" => $this->student_info_last_school,
                "student_info_last_gpa" => $this->student_info_last_gpa,
                "student_info_last_grade" => $this->student_info_last_grade,
                "student_info_school_address" => $this->student_info_school_address,
                "student_info_school_other" => $this->student_info_school_other,
                "student_info_conduct" => $this->student_info_conduct,
                "student_info_declaration" => $this->student_info_declaration,
                "student_info_parent_commitment" => $this->student_info_parent_commitment,
                "student_info_parent_consent" => $this->student_info_parent_consent,
                "student_info_is_registrar_notify" => $this->student_info_is_registrar_notify,
                "student_info_is_finance_notify" => $this->student_info_is_finance_notify,
                "student_info_is_it_notify" => $this->student_info_is_it_notify,
                "student_info_is_enrolled" => $this->student_info_is_enrolled,
                "student_info_medical_notes" => $this->student_info_medical_notes,
                "student_info_medical_doctor" => $this->student_info_medical_doctor,
                "student_info_medical_contact" => $this->student_info_medical_contact,
                "student_info_family_circumstances" => $this->student_info_family_circumstances,
                // "student_info_archive_remark" => $this->student_info_archive_remark,
                "student_info_created" => $this->student_info_created,
                "student_info_datetime" => $this->student_info_datetime,
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
            $sql .= "where student.student_info_grade_id = gradeLevel.grade_level_aid ";
            // $sql .= "order by student.student_info_is_enrolled asc, "; 
            // $sql .= "student.student_info_is_registrar_notify desc, "; 
            // $sql .= "student.student_info_created, "; 
            // $sql .= "student.student_info_lname, ";
            // $sql .= "student.student_info_fname asc ";
            $query = $this->connection->query($sql);
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
            $sql .= "where student.student_info_grade_id = gradeLevel.grade_level_aid ";
            $sql .= "and student.student_info_aid = :student_info_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "student_info_aid" => $this->student_info_aid,
            ]);
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
            $sql .= "where student.student_info_grade_id = gradeLevel.grade_level_aid ";
            $sql .= "order by student.student_info_is_enrolled asc, "; 
            $sql .= "student.student_info_is_registrar_notify desc, "; 
            $sql .= "student.student_info_created, "; 
            $sql .= "student.student_info_lname, ";
            $sql .= "student.student_info_fname asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->student_info_start - 1,
                "total" => $this->student_info_total,
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
            $sql .= "student_info_is_archive = :student_info_is_archive, ";
            $sql .= "student_info_datetime = :student_info_datetime ";
            $sql .= "where student_info_aid = :student_info_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "student_info_is_archive" => $this->student_info_is_archive,
                "student_info_datetime" => $this->student_info_datetime,
                "student_info_aid" => $this->student_info_aid,
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
            $sql .= "where student_info_aid = :student_info_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "student_info_aid" => $this->student_info_aid,
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
                $sql .= "student_info_user_id = :student_info_user_id, ";
                $sql .= "student_info_learning_type = :student_info_learning_type, ";
                $sql .= "student_info_grade_id = :student_info_grade_id, ";
                $sql .= "student_info_reference_no = :student_info_reference_no, ";
                $sql .= "student_info_fname = :student_info_fname, ";
                $sql .= "student_info_lname = :student_info_lname, ";
                $sql .= "student_info_mname = :student_info_mname, ";
                $sql .= "student_info_gender = :student_info_gender, ";
                $sql .= "student_info_bday = :student_info_bday, ";
                $sql .= "student_info_birth_place = :student_info_birth_place, ";
                // $sql .= "student_info_email = :student_info_email, ";
                $sql .= "student_info_institutional_email = :student_info_institutional_email, ";
                $sql .= "student_info_mobile = :student_info_mobile, ";
                $sql .= "student_info_landline = :student_info_landline, ";
                $sql .= "student_info_adress_id = :student_info_adress_id, ";
                $sql .= "student_info_last_school = :student_info_last_school, ";
                $sql .= "student_info_last_gpa = :student_info_last_gpa, ";
                $sql .= "student_info_last_grade = :student_info_last_grade, ";
                $sql .= "student_info_school_address = :student_info_school_address, ";
                $sql .= "student_info_school_other = :student_info_school_other, ";
                // $sql .= "student_info_conduct = :student_info_conduct, ";
                // $sql .= "student_info_declaration = :student_info_declaration, ";
                // $sql .= "student_info_parent_commitment = :student_info_parent_commitment, ";
                // $sql .= "student_info_parent_consent = :student_info_parent_consent, ";
                // $sql .= "student_info_is_registrar_notify = :student_info_is_registrar_notify, ";
                // $sql .= "student_info_is_finance_notify = :student_info_is_finance_notify, ";
                // $sql .= "student_info_is_it_notify = :student_info_is_it_notify, ";
                // $sql .= "student_info_is_enrolled = :student_info_is_enrolled, ";
                $sql .= "student_info_medical_notes = :student_info_medical_notes, ";
                $sql .= "student_info_medical_doctor = :student_info_medical_doctor, ";
                $sql .= "student_info_medical_contact = :student_info_medical_contact, ";
                $sql .= "student_info_family_circumstances = :student_info_family_circumstances, ";
                // $sql .= "student_info_archive_remark = :student_info_archive_remark, ";
                $sql .= "student_info_datetime = :student_info_datetime ";
                $sql .= "where student_info_aid = :student_info_aid ";
                $query = $this->connection->prepare($sql);
                $query->execute([
                    "student_info_user_id" => $this->student_info_user_id,
                    "student_info_learning_type" => $this->student_info_learning_type,
                    "student_info_grade_id" => $this->student_info_grade_id,
                    "student_info_reference_no" => $this->student_info_reference_no,
                    "student_info_fname" => $this->student_info_fname,
                    "student_info_lname" => $this->student_info_lname,
                    "student_info_mname" => $this->student_info_mname,
                    "student_info_gender" => $this->student_info_gender,
                    "student_info_bday" => $this->student_info_bday,
                    "student_info_birth_place" => $this->student_info_birth_place,
                    // // "student_info_email" => $this->student_info_email,
                    "student_info_institutional_email" => $this->student_info_institutional_email,
                    "student_info_mobile" => $this->student_info_mobile,
                    "student_info_landline" => $this->student_info_landline,
                    "student_info_adress_id" => $this->student_info_adress_id,
                    "student_info_last_school" => $this->student_info_last_school,
                    "student_info_last_gpa" => $this->student_info_last_gpa,
                    "student_info_last_grade" => $this->student_info_last_grade,
                    "student_info_school_address" => $this->student_info_school_address,
                    "student_info_school_other" => $this->student_info_school_other,
                    // "student_info_conduct" => $this->student_info_conduct,
                    // "student_info_declaration" => $this->student_info_declaration,
                    // "student_info_parent_commitment" => $this->student_info_parent_commitment,
                    // "student_info_parent_consent" => $this->student_info_parent_consent,
                    // "student_info_is_registrar_notify" => $this->student_info_is_registrar_notify,
                    // "student_info_is_finance_notify" => $this->student_info_is_finance_notify,
                    // "student_info_is_it_notify" => $this->student_info_is_it_notify,
                    // "student_info_is_enrolled" => $this->student_info_is_enrolled,
                    "student_info_medical_notes" => $this->student_info_medical_notes,
                    "student_info_medical_doctor" => $this->student_info_medical_doctor,
                    "student_info_medical_contact" => $this->student_info_medical_contact,
                    "student_info_family_circumstances" => $this->student_info_family_circumstances,
                    // "student_info_archive_remark" => $this->student_info_archive_remark,
                    "student_info_datetime" => $this->student_info_datetime,
                    "student_info_aid" => $this->student_info_aid,
                ]);
            } catch (PDOException $ex) {
                $query = false;
            }
            return $query;
        }

        public function checkName()
        {
            try {
                $sql = "select student_info_fname, ";
                $sql .= "student_info_lname ";
                $sql .= "from {$this->tblStudentInfo} ";
                $sql .= "where student_info_fname = :student_info_fname ";
                $sql .= "and student_info_lname = :student_info_lname ";
                $query = $this->connection->prepare($sql);
                $query->execute([
                    "student_info_fname" => "{$this->student_info_fname}",
                    "student_info_lname" => "{$this->student_info_lname}",
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
            $sql .= "where parent.parent_guardian_info_user_id = student.student_info_user_id ";
            $sql .= "and student.student_info_user_id = :student_info_user_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "student_info_user_id" => $this->student_info_user_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readStudentByParentId() {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblStudentInfo} as student, ";
            $sql .= "{$this->tblUserOther} as other, ";
            $sql .= "{$this->tblGradeLevel} as gradeLevel ";
            $sql .= "where student.student_info_user_id = other.user_other_aid ";
            $sql .= "and student.student_info_grade_id = gradeLevel.grade_level_aid ";
            $sql .= "and student.student_info_user_id = :student_info_user_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "student_info_user_id" => $this->student_info_user_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    


}