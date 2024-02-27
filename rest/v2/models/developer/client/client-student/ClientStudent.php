<?php
class ClientStudent
{
    public $students_aid;
    public $students_is_active;
    public $students_parent_id;
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
    public $students_address_id;
    public $students_institutional_email;
    public $students_family_doctor;
    public $students_family_doctor_contact;
    public $students_medical_remarks;
    public $students_family_circumstances;
    public $students_created;
    public $students_datetime;

    public $parents_aid;

    public $school_year_students_aid;
    public $school_year_students_is_active;

    public $school_year_students_last_learning_type;
    public $school_year_students_sy_id;
    public $school_year_students_last_grade_level_id;
    public $school_year_students_student_id;
    public $school_year_students_last_school_attended;
    public $school_year_students_last_gpa;
    public $school_year_students_last_school_address;
    public $school_year_students_last_remarks;
    public $school_year_students_last_coc_is_agree;
    public $school_year_students_last_parent_declaration_is_agree;
    public $school_year_students_last_parent_consent_is_agree;
    public $school_year_students_last_parent_commitment_is_agree;
    public $school_year_students_created;
    public $school_year_students_datetime;

    public $connection;
    public $lastInsertedId;
    public $students_start;
    public $students_total;
    public $students_search;

    public $tblParent;
    public $tblStudent;
    public $tblSyStudent;
    public $tblSchoolYear;
    public $tblGradeLevel;
    public $tblParentInfo;

    public $fullname;


    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblParent = "fcav2_parents";
        $this->tblStudent = "fcav2_students";
        $this->tblSyStudent = "fcav2_school_year_students";
        $this->tblGradeLevel = "fcav2_settings_grade_level";
        $this->tblParentInfo = "fcav2_info_parent_guardian";
        $this->tblSchoolYear = "fcav2_settings_school_year";
    }

    public function readAll()
    {
        try {
            $sql = "select *, ";
            $sql .= "student.students_aid, ";
            $sql .= "student.students_is_active, ";
            $sql .= "CONCAT(student.students_lname, ', ', student.students_fname) as student_fullname, ";
            $sql .= "CONCAT(parent.parents_fname, ' ', parent.parents_lname) as parent_fullname, ";
            $sql .= "CONCAT(YEAR(schoolYear.school_year_start_date), '-', YEAR(schoolYear.school_year_end_date)) as school_year ";
            $sql .= "from {$this->tblStudent} as student, ";
            $sql .= "{$this->tblParent} as parent, ";
            $sql .= "{$this->tblSyStudent} as syStudent, ";
            $sql .= "{$this->tblSchoolYear} as schoolYear, ";
            $sql .= "{$this->tblGradeLevel} as gradeLevel ";
            $sql .= "where student.students_aid = syStudent.school_year_students_student_id ";
            $sql .= "and parent.parents_aid = student.students_parent_id ";
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

    // update
    public function update()
    {
        try {
            $sql = "update {$this->tblStudent} set ";
            $sql .= "students_parent_id = :students_parent_id, ";
            $sql .= "students_lrn = :students_lrn, ";
            $sql .= "students_fname = :students_fname, ";
            $sql .= "students_mname = :students_mname, ";
            $sql .= "students_lname = :students_lname, ";
            $sql .= "students_gender = :students_gender, ";
            $sql .= "students_birth_date = :students_birth_date, ";
            $sql .= "students_birth_place = :students_birth_place, ";
            $sql .= "students_email = :students_email, ";
            $sql .= "students_mobile = :students_mobile, ";
            $sql .= "students_landline = :students_landline, ";
            $sql .= "students_address_id = :students_address_id, ";
            $sql .= "students_institutional_email = :students_institutional_email, ";
            $sql .= "students_family_doctor = :students_family_doctor, ";
            $sql .= "students_family_doctor_contact = :students_family_doctor_contact, ";
            $sql .= "students_medical_remarks = :students_medical_remarks, ";
            $sql .= "students_family_circumstances = :students_family_circumstances, ";
            $sql .= "students_datetime = :students_datetime ";
            $sql .= "where students_aid = :students_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "students_parent_id" => $this->students_parent_id,
                "students_lrn" => $this->students_lrn,
                "students_lrn" => $this->students_lrn,
                "students_fname" => $this->students_fname,
                "students_mname" => $this->students_mname,
                "students_lname" => $this->students_lname,
                "students_gender" => $this->students_gender,
                "students_birth_date" => $this->students_birth_date,
                "students_birth_place" => $this->students_birth_place,
                "students_email" => $this->students_email,
                "students_mobile" => $this->students_mobile,
                "students_landline" => $this->students_landline,
                "students_address_id" => $this->students_address_id,
                "students_institutional_email" => $this->students_institutional_email,
                "students_family_doctor" => $this->students_family_doctor,
                "students_family_doctor_contact" => $this->students_family_doctor_contact,
                "students_medical_remarks" => $this->students_medical_remarks,
                "students_family_circumstances" => $this->students_family_circumstances,
                "students_datetime" => $this->students_datetime,
                "students_aid" => $this->students_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    // update school year students Code of Conduct
    public function updateSchoolYearStudentCoc()
    {
        try {
            $sql = "update {$this->tblSyStudent} set ";
            $sql .= "school_year_students_last_coc_is_agree = :school_year_students_last_coc_is_agree, ";
            $sql .= "school_year_students_datetime = :school_year_students_datetime ";
            $sql .= "where school_year_students_aid = :school_year_students_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_students_last_coc_is_agree" => $this->school_year_students_last_coc_is_agree,
                "school_year_students_datetime" => $this->students_datetime,
                "school_year_students_aid" => $this->school_year_students_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update school year students Parent Declaration
    public function updateSchoolYearStudentParentDeclare()
    {
        try {
            $sql = "update {$this->tblSyStudent} set ";
            $sql .= "school_year_students_last_parent_declaration_is_agree = :school_year_students_last_parent_declaration_is_agree, ";
            $sql .= "school_year_students_datetime = :school_year_students_datetime ";
            $sql .= "where school_year_students_aid = :school_year_students_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_students_last_parent_declaration_is_agree" => $this->school_year_students_last_parent_declaration_is_agree,
                "school_year_students_datetime" => $this->students_datetime,
                "school_year_students_aid" => $this->school_year_students_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update school year students Parent Consent
    public function updateSchoolYearStudentParentConsent()
    {
        try {
            $sql = "update {$this->tblSyStudent} set ";
            $sql .= "school_year_students_last_parent_consent_is_agree = :school_year_students_last_parent_consent_is_agree, ";
            $sql .= "school_year_students_datetime = :school_year_students_datetime ";
            $sql .= "where school_year_students_aid = :school_year_students_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_students_last_parent_consent_is_agree" => $this->school_year_students_last_parent_consent_is_agree,
                "school_year_students_datetime" => $this->students_datetime,
                "school_year_students_aid" => $this->school_year_students_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update school year students Commitment Form
    public function updateSchoolYearStudentCommitmentForm()
    {
        try {
            $sql = "update {$this->tblSyStudent} set ";
            $sql .= "school_year_students_last_parent_commitment_is_agree = :school_year_students_last_parent_commitment_is_agree, ";
            $sql .= "school_year_students_datetime = :school_year_students_datetime ";
            $sql .= "where school_year_students_aid = :school_year_students_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_students_last_parent_commitment_is_agree" => $this->school_year_students_last_parent_commitment_is_agree,
                "school_year_students_datetime" => $this->students_datetime,
                "school_year_students_aid" => $this->school_year_students_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readSchoolYearStudent()
    {
        try {
            $sql = "select ";
            $sql .= "school_year_students_last_coc_is_agree, ";
            $sql .= "school_year_students_last_parent_declaration_is_agree, ";
            $sql .= "school_year_students_last_parent_consent_is_agree ";
            $sql .= "from {$this->tblSyStudent} ";
            $sql .= "where school_year_students_aid = :school_year_students_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_students_aid" => $this->school_year_students_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkLrn()
    {
        try {
            $sql = "select students_lrn ";
            $sql .= "from {$this->tblStudent} ";
            $sql .= "where students_lrn = :students_lrn ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "students_lrn" => "{$this->students_lrn}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // delete
    public function deleteSchoolYearStudents()
    {
        try {
            $sql = "delete from {$this->tblSyStudent} ";
            $sql .= "where school_year_students_student_id = :students_aid ";
            $sql .= "and school_year_students_sy_id = :school_year_students_sy_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "students_aid" => $this->students_aid,
                "school_year_students_sy_id" => $this->school_year_students_sy_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function readStudentById()
    {
        try {
            $sql = "select * from {$this->tblStudent} as students, ";
            $sql .= "{$this->tblParent} as parents, ";
            $sql .= "{$this->tblSyStudent} as students_sy, ";
            $sql .= "{$this->tblGradeLevel} as grade_level, ";
            $sql .= "{$this->tblSchoolYear} as school_year ";
            $sql .= "where students.students_parent_id = parents.parents_aid ";
            $sql .= "and students_sy.school_year_students_student_id = students.students_aid ";
            $sql .= "and students_sy.school_year_students_sy_id = school_year.school_year_aid ";
            $sql .= "and students_sy.school_year_students_last_grade_level_id = grade_level.grade_level_aid ";
            $sql .= "and students.students_parent_id = :parents_aid ";
            $sql .= "order by students.students_fname asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parents_aid" => $this->parents_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblStudent} ";
            $sql .= "( ";
            $sql .= "students_is_active, ";
            $sql .= "students_parent_id, ";
            $sql .= "students_lrn, ";
            $sql .= "students_fname, ";
            $sql .= "students_mname, ";
            $sql .= "students_lname, ";
            $sql .= "students_gender, ";
            $sql .= "students_birth_date, ";
            $sql .= "students_birth_place, ";
            $sql .= "students_email, ";
            $sql .= "students_mobile, ";
            $sql .= "students_landline, ";
            $sql .= "students_address_id, ";
            $sql .= "students_medical_remarks, ";
            $sql .= "students_institutional_email, ";
            $sql .= "students_family_doctor, ";
            $sql .= "students_family_doctor_contact, ";
            $sql .= "students_family_circumstances, ";
            $sql .= "students_created, ";
            $sql .= "students_datetime ) values ( ";
            $sql .= ":students_is_active, ";
            $sql .= ":students_parent_id, ";
            $sql .= ":students_lrn, ";
            $sql .= ":students_fname, ";
            $sql .= ":students_mname, ";
            $sql .= ":students_lname, ";
            $sql .= ":students_gender, ";
            $sql .= ":students_birth_date, ";
            $sql .= ":students_birth_place, ";
            $sql .= ":students_email, ";
            $sql .= ":students_mobile, ";
            $sql .= ":students_landline, ";
            $sql .= ":students_address_id, ";
            $sql .= ":students_medical_remarks, ";
            $sql .= ":students_institutional_email, ";
            $sql .= ":students_family_doctor, ";
            $sql .= ":students_family_doctor_contact, ";
            $sql .= ":students_family_circumstances, ";
            $sql .= ":students_created, ";
            $sql .= ":students_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "students_is_active" => $this->students_is_active,
                "students_parent_id" => $this->students_parent_id,
                "students_lrn" => $this->students_lrn,
                "students_fname" => $this->students_fname,
                "students_mname" => $this->students_mname,
                "students_lname" => $this->students_lname,
                "students_gender" => $this->students_gender,
                "students_birth_date" => $this->students_birth_date,
                "students_birth_place" => $this->students_birth_place,
                "students_email" => $this->students_email,
                "students_mobile" => $this->students_mobile,
                "students_landline" => $this->students_landline,
                "students_address_id" => $this->students_address_id,
                "students_medical_remarks" => $this->students_medical_remarks,
                "students_institutional_email" => $this->students_institutional_email,
                "students_family_doctor" => $this->students_family_doctor,
                "students_family_doctor_contact" => $this->students_family_doctor_contact,
                "students_family_circumstances" => $this->students_family_doctor_contact,
                "students_created" => $this->students_created,
                "students_datetime" => $this->students_datetime
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function checkName()
    {
        try {
            $sql = "select students_fname, students_lname from {$this->tblStudent} ";
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


    public function createStudentSchoolYearByParent()
    {
        try {
            $sql = "insert into {$this->tblSyStudent} ";
            $sql .= "( ";
            $sql .= "school_year_students_is_active, ";
            $sql .= "school_year_students_sy_id, ";
            $sql .= "school_year_students_student_id, ";
            $sql .= "school_year_students_last_learning_type, ";
            $sql .= "school_year_students_last_school_attended, ";
            $sql .= "school_year_students_last_gpa, ";
            $sql .= "school_year_students_last_grade_level_id, ";
            $sql .= "school_year_students_last_school_address, ";
            $sql .= "school_year_students_last_remarks, ";
            $sql .= "school_year_students_created, ";
            $sql .= "school_year_students_datetime ) values ( ";
            $sql .= ":school_year_students_is_active, ";
            $sql .= ":school_year_students_sy_id, ";
            $sql .= ":school_year_students_student_id, ";
            $sql .= ":school_year_students_last_learning_type, ";
            $sql .= ":school_year_students_last_school_attended, ";
            $sql .= ":school_year_students_last_gpa, ";
            $sql .= ":school_year_students_last_grade_level_id, ";
            $sql .= ":school_year_students_last_school_address, ";
            $sql .= ":school_year_students_last_remarks, ";
            $sql .= ":school_year_students_created, ";
            $sql .= ":school_year_students_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_students_is_active" => $this->students_is_active,
                "school_year_students_sy_id" => $this->school_year_students_sy_id,
                "school_year_students_student_id" => $this->lastInsertedId,
                "school_year_students_last_learning_type" => $this->school_year_students_last_learning_type,
                "school_year_students_last_school_attended" => $this->school_year_students_last_school_attended,
                "school_year_students_last_gpa" => $this->school_year_students_last_gpa,
                "school_year_students_last_grade_level_id" => $this->school_year_students_last_grade_level_id,
                "school_year_students_last_school_address" => $this->school_year_students_last_school_address,
                "school_year_students_last_remarks" => $this->school_year_students_last_remarks,
                "school_year_students_created" => $this->students_created,
                "school_year_students_datetime" => $this->students_datetime
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }




    // update school year students
    public function updateStudentSchoolYearByParent()
    {
        try {
            $sql = "update {$this->tblSyStudent} set ";
            $sql .= "school_year_students_sy_id = :school_year_students_sy_id, ";
            $sql .= "school_year_students_student_id = :school_year_students_student_id, ";
            $sql .= "school_year_students_last_learning_type = :school_year_students_last_learning_type, ";
            $sql .= "school_year_students_last_grade_level_id = :school_year_students_last_grade_level_id, ";
            $sql .= "school_year_students_last_remarks = :school_year_students_last_remarks, ";
            $sql .= "school_year_students_last_school_attended = :school_year_students_last_school_attended, ";
            $sql .= "school_year_students_datetime = :school_year_students_datetime ";
            $sql .= "where school_year_students_aid = :school_year_students_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_students_sy_id" => $this->school_year_students_sy_id,
                "school_year_students_student_id" => $this->school_year_students_student_id,
                "school_year_students_last_learning_type" => $this->school_year_students_last_learning_type,
                "school_year_students_last_grade_level_id" => $this->school_year_students_last_grade_level_id,
                "school_year_students_last_remarks" => $this->school_year_students_last_remarks,
                "school_year_students_last_school_attended" => $this->school_year_students_last_school_attended,
                "school_year_students_datetime" => $this->students_datetime,
                "school_year_students_aid" => $this->school_year_students_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
