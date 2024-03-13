<?php
class Student
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

    public $school_year_students_aid;
    public $school_year_students_is_active;

    public $school_year_students_last_learning_type;
    public $school_year_students_sy_id;
    public $school_year_students_last_grade_level_id;
    public $school_year_students_student_id;
    public $school_year_students_grade_level_id;
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

    public $current_students_aid;
    public $current_students_is_active;

    public $current_students_last_learning_type;
    public $current_students_sy_id;
    public $current_students_last_grade_level_id;
    public $current_students_student_id;
    public $current_students_grade_level_id;
    public $current_students_last_school_attended;
    public $current_students_last_gpa;
    public $current_students_last_school_address;
    public $current_students_last_remarks;
    public $current_students_last_coc_is_agree;
    public $current_students_last_parent_declaration_is_agree;
    public $current_students_last_parent_consent_is_agree;
    public $current_students_last_parent_commitment_is_agree;
    public $current_students_created;
    public $current_students_datetime;

    public $connection;
    public $lastInsertedId;
    public $students_start;
    public $students_total;
    public $students_search;

    public $tblParent;
    public $tblGuardian;
    public $tblStudent;
    public $tblSyStudent;
    public $tblSyStudentCurrent;
    public $tblSchoolYear;
    public $tblGradeLevel;
    public $tblParentInfo;

    public $fullname;


    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblParent = "fcav2_parents";
        $this->tblGuardian = "fcav2_guardian";
        $this->tblStudent = "fcav2_students";
        $this->tblSyStudent = "fcav2_school_year_students";
        $this->tblSyStudentCurrent = "fcav2_school_year_students_current";
        $this->tblGradeLevel = "fcav2_settings_grade_level";
        $this->tblParentInfo = "fcav2_info_parent_guardian";
        $this->tblSchoolYear = "fcav2_settings_school_year";
    }

    // create for student 
    public function create()
    {
        try {
            $sql = "insert into {$this->tblStudent} ";
            $sql .= "( ";
            $sql .= "students_is_active, ";
            $sql .= "students_parent_id, ";
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
            $sql .= ":students_is_active, ";
            $sql .= ":students_parent_id, ";
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
                "students_is_active" => $this->students_is_active,
                "students_parent_id" => $this->students_parent_id,
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

    // create for school year student -> repository
    public function createSchoolYearStudent()
    {
        try {
            $sql = "insert into {$this->tblSyStudent} ";
            $sql .= "( ";
            $sql .= "school_year_students_is_active, ";
            $sql .= "school_year_students_last_learning_type, ";
            $sql .= "school_year_students_sy_id, ";
            $sql .= "school_year_students_student_id, ";
            $sql .= "school_year_students_grade_level_id, ";
            $sql .= "school_year_students_created, ";
            $sql .= "school_year_students_datetime ) values ( ";
            $sql .= ":school_year_students_is_active, ";
            $sql .= ":school_year_students_last_learning_type, ";
            $sql .= ":school_year_students_sy_id, ";
            $sql .= ":school_year_students_student_id, ";
            $sql .= ":school_year_students_grade_level_id, ";
            $sql .= ":school_year_students_created, ";
            $sql .= ":school_year_students_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_students_is_active" => $this->students_is_active,
                "school_year_students_last_learning_type" => $this->school_year_students_last_learning_type,
                "school_year_students_sy_id" => $this->school_year_students_sy_id,
                "school_year_students_student_id" => $this->lastInsertedId,
                "school_year_students_grade_level_id" => $this->school_year_students_grade_level_id,
                "school_year_students_created" => $this->students_created,
                "school_year_students_datetime" => $this->students_datetime,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // create for school year student current -> current record
    public function createSchoolYearStudentCurrent()
    {
        try {
            $sql = "insert into {$this->tblSyStudentCurrent} ";
            $sql .= "( ";
            $sql .= "current_students_is_active, ";
            $sql .= "current_students_last_learning_type, ";
            $sql .= "current_students_sy_id, ";
            $sql .= "current_students_student_id, ";
            $sql .= "current_students_grade_level_id, ";
            $sql .= "current_students_created, ";
            $sql .= "current_students_datetime ) values ( ";
            $sql .= ":school_year_students_is_active, ";
            $sql .= ":school_year_students_last_learning_type, ";
            $sql .= ":school_year_students_sy_id, ";
            $sql .= ":school_year_students_student_id, ";
            $sql .= ":school_year_students_grade_level_id, ";
            $sql .= ":school_year_students_created, ";
            $sql .= ":school_year_students_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_students_is_active" => $this->students_is_active,
                "school_year_students_last_learning_type" => $this->school_year_students_last_learning_type,
                "school_year_students_sy_id" => $this->school_year_students_sy_id,
                "school_year_students_student_id" => $this->lastInsertedId,
                "school_year_students_grade_level_id" => $this->school_year_students_grade_level_id,
                "school_year_students_created" => $this->students_created,
                "school_year_students_datetime" => $this->students_datetime,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
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
            $sql .= "{$this->tblSyStudentCurrent} as syStudentCurrent, ";
            $sql .= "{$this->tblSchoolYear} as schoolYear, ";
            $sql .= "{$this->tblSyStudent} as syStudents, ";
            $sql .= "{$this->tblGradeLevel} as gradeLevel ";
            $sql .= "where student.students_aid = syStudentCurrent.current_students_student_id ";
            $sql .= "and schoolYear.school_year_aid = syStudentCurrent.current_students_sy_id ";
            $sql .= "and syStudents.school_year_students_sy_id = syStudentCurrent.current_students_sy_id ";
            $sql .= "and parent.parents_aid = student.students_parent_id ";
            $sql .= "and gradeLevel.grade_level_aid = syStudentCurrent.current_students_grade_level_id ";
            $sql .= "and (syStudentCurrent.current_students_last_coc_is_agree = 0 ";
            $sql .= "or syStudentCurrent.current_students_last_parent_declaration_is_agree = 0 ";
            $sql .= "or syStudentCurrent.current_students_last_parent_consent_is_agree = 0 ";
            $sql .= "or syStudentCurrent.current_students_last_parent_commitment_is_agree = 0) ";
            $sql .= "and schoolYear.school_year_is_active = 1 "; // only get or show all the student in the current or ongoing school year 
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
            $sql = "select *, ";
            $sql .= "student.students_aid, ";
            $sql .= "student.students_is_active, ";
            $sql .= "CONCAT(student.students_lname, ', ', student.students_fname) as student_fullname, ";
            $sql .= "CONCAT(parent.parents_fname, ' ', parent.parents_lname) as parent_fullname, ";
            $sql .= "CONCAT(YEAR(schoolYear.school_year_start_date), '-', YEAR(schoolYear.school_year_end_date)) as school_year ";
            $sql .= "from {$this->tblStudent} as student, ";
            $sql .= "{$this->tblParent} as parent, ";
            $sql .= "{$this->tblSyStudentCurrent} as syStudentCurrent, ";
            $sql .= "{$this->tblSchoolYear} as schoolYear, ";
            $sql .= "{$this->tblSyStudent} as syStudents, ";
            $sql .= "{$this->tblGradeLevel} as gradeLevel ";
            $sql .= "where student.students_aid = syStudentCurrent.current_students_student_id ";
            $sql .= "and schoolYear.school_year_aid = syStudentCurrent.current_students_sy_id ";
            $sql .= "and syStudents.school_year_students_sy_id = syStudentCurrent.current_students_sy_id ";
            $sql .= "and parent.parents_aid = student.students_parent_id ";
            $sql .= "and gradeLevel.grade_level_aid = syStudentCurrent.current_students_grade_level_id ";
            $sql .= "and (syStudentCurrent.current_students_last_coc_is_agree = 0 ";
            $sql .= "or syStudentCurrent.current_students_last_parent_declaration_is_agree = 0 ";
            $sql .= "or syStudentCurrent.current_students_last_parent_consent_is_agree = 0 ";
            $sql .= "or syStudentCurrent.current_students_last_parent_commitment_is_agree = 0) ";
            $sql .= "and schoolYear.school_year_is_active = 1 "; // only get or show all the student in the current or ongoing school year 
            $sql .= "group by ";
            $sql .= "student.students_aid ";
            $sql .= "order by ";
            $sql .= "student.students_lname, ";
            $sql .= "student.students_fname ";
            $sql .= "limit :start, ";
            $sql .= ":total "; // comment ni cy
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
            $sql = "select *, ";
            $sql .= "student.students_aid, ";
            $sql .= "student.students_is_active, ";
            $sql .= "CONCAT(student.students_lname, ', ', student.students_fname) as student_fullname, ";
            $sql .= "CONCAT(parent.parents_fname, ' ', parent.parents_lname) as parent_fullname, ";
            $sql .= "CONCAT(YEAR(schoolYear.school_year_start_date), '-', YEAR(schoolYear.school_year_end_date)) as school_year ";
            $sql .= "from {$this->tblStudent} as student, ";
            $sql .= "{$this->tblParent} as parent, ";
            $sql .= "{$this->tblSyStudentCurrent} as syStudentCurrent, ";
            $sql .= "{$this->tblSchoolYear} as schoolYear, ";
            $sql .= "{$this->tblSyStudent} as syStudents, ";
            $sql .= "{$this->tblGradeLevel} as gradeLevel ";
            $sql .= "where student.students_aid = syStudentCurrent.current_students_student_id ";
            $sql .= "and schoolYear.school_year_aid = syStudentCurrent.current_students_sy_id ";
            $sql .= "and syStudents.school_year_students_sy_id = syStudentCurrent.current_students_sy_id ";
            $sql .= "and parent.parents_aid = student.students_parent_id ";
            $sql .= "and gradeLevel.grade_level_aid = syStudentCurrent.current_students_grade_level_id ";
            $sql .= "and (syStudentCurrent.current_students_last_coc_is_agree = 0 ";
            $sql .= "or syStudentCurrent.current_students_last_parent_declaration_is_agree = 0 ";
            $sql .= "or syStudentCurrent.current_students_last_parent_consent_is_agree = 0 ";
            $sql .= "or syStudentCurrent.current_students_last_parent_commitment_is_agree = 0) ";
            $sql .= "and schoolYear.school_year_is_active = 1 "; // only get or show all the student in the current or ongoing school year
            $sql .= "and ";
            $sql .= "( ";
            $sql .= "student.students_fname like :students_fname ";
            $sql .= "or student.students_lname like :students_lname ";
            $sql .= "or gradeLevel.grade_level_name like :grade_level_name ";
            $sql .= ") ";
            $sql .= "group by ";
            $sql .= "student.students_aid ";
            $sql .= "order by ";
            $sql .= "student.students_lname, ";
            $sql .= "student.students_fname ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "students_fname" => "%{$this->students_search}%",
                "students_lname" => "%{$this->students_search}%",
                "grade_level_name" => "%{$this->students_search}%",
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


    public function readGuardianByParentId()
    {
        try {
            $sql = "select ";
            $sql .= "guardian_aid, ";
            $sql .= "guardian_address, ";
            $sql .= "guardian_province, ";
            $sql .= "guardian_city, ";
            $sql .= "guardian_zipcode, ";
            $sql .= "guardian_country ";
            $sql .= "from ";
            $sql .= "{$this->tblGuardian} ";
            $sql .= "where guardian_parent_id = :guardian_parent_id ";
            $sql .= "group by guardian_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "guardian_parent_id" => $this->students_parent_id
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

    public function updateSYCurrentSchoolYear()
    {
        try {
            $sql = "update {$this->tblSyStudentCurrent} set ";
            $sql .= "current_students_grade_level_id = :current_students_grade_level_id, ";
            $sql .= "current_students_sy_id = :current_students_sy_id, ";
            $sql .= "current_students_datetime = :current_students_datetime ";
            $sql .= "where current_students_student_id = :current_students_student_id ";
            $sql .= "and current_students_sy_id = :old_sy_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "current_students_grade_level_id" => $this->current_students_grade_level_id,
                "current_students_sy_id" => $this->current_students_sy_id,
                "current_students_datetime" => $this->students_datetime,
                "old_sy_id" => $this->school_year_students_sy_id,
                "current_students_student_id" => $this->students_aid,
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

    // update school year students -> repository
    public function updateSchoolYearStudent()
    {
        try {
            $sql = "update {$this->tblSyStudent} set ";
            $sql .= "school_year_students_last_learning_type = :school_year_students_last_learning_type, ";
            $sql .= "school_year_students_grade_level_id = :school_year_students_grade_level_id, ";
            $sql .= "school_year_students_last_school_attended = :school_year_students_last_school_attended, ";
            $sql .= "school_year_students_last_gpa = :school_year_students_last_gpa, ";
            $sql .= "school_year_students_last_school_address = :school_year_students_last_school_address, ";
            $sql .= "school_year_students_last_remarks = :school_year_students_last_remarks, ";
            $sql .= "school_year_students_datetime = :school_year_students_datetime ";
            $sql .= "where school_year_students_student_id = :school_year_students_student_id  ";
            $sql .= "and school_year_students_sy_id = :school_year_students_sy_id  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_students_last_learning_type" => $this->current_students_last_learning_type,
                "school_year_students_grade_level_id" => $this->current_students_grade_level_id,
                "school_year_students_last_school_attended" => $this->current_students_last_school_attended,
                "school_year_students_last_gpa" => $this->current_students_last_gpa,
                "school_year_students_last_school_address" => $this->current_students_last_school_address,
                "school_year_students_last_remarks" => $this->current_students_last_remarks,
                "school_year_students_datetime" => $this->students_datetime,
                "school_year_students_student_id" => $this->students_aid,
                "school_year_students_sy_id" => $this->current_students_sy_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    // update school year students current -> current record
    public function updateSchoolYearStudentCurrent()
    {
        try {
            $sql = "update {$this->tblSyStudentCurrent} set ";
            $sql .= "current_students_last_learning_type = :current_students_last_learning_type, ";
            $sql .= "current_students_grade_level_id = :current_students_grade_level_id, ";
            $sql .= "current_students_last_school_attended = :current_students_last_school_attended, ";
            $sql .= "current_students_last_gpa = :current_students_last_gpa, ";
            $sql .= "current_students_last_school_address = :current_students_last_school_address, ";
            $sql .= "current_students_last_remarks = :current_students_last_remarks, ";
            $sql .= "current_students_datetime = :current_students_datetime ";
            $sql .= "where current_students_student_id = :current_students_student_id  ";
            $sql .= "and current_students_sy_id = :current_students_sy_id  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "current_students_last_learning_type" => $this->current_students_last_learning_type,
                "current_students_grade_level_id" => $this->current_students_grade_level_id,
                "current_students_last_school_attended" => $this->current_students_last_school_attended,
                "current_students_last_gpa" => $this->current_students_last_gpa,
                "current_students_last_school_address" => $this->current_students_last_school_address,
                "current_students_last_remarks" => $this->current_students_last_remarks,
                "current_students_datetime" => $this->students_datetime,
                "current_students_student_id" => $this->students_aid,
                "current_students_sy_id" => $this->current_students_sy_id,
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
            $sql .= "where school_year_students_student_id = :school_year_students_student_id ";
            $sql .= "and school_year_students_sy_id = :school_year_students_sy_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_students_last_coc_is_agree" => $this->current_students_last_coc_is_agree,
                "school_year_students_datetime" => $this->students_datetime,
                "school_year_students_student_id" => $this->students_aid,
                "school_year_students_sy_id" => $this->current_students_sy_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update school year students Code of Conduct
    public function updateSchoolYearStudentCocCurrent()
    {
        try {
            $sql = "update {$this->tblSyStudentCurrent} set ";
            $sql .= "current_students_last_coc_is_agree = :current_students_last_coc_is_agree, ";
            $sql .= "current_students_datetime = :current_students_datetime ";
            $sql .= "where current_students_student_id = :current_students_student_id ";
            $sql .= "and current_students_sy_id = :current_students_sy_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "current_students_last_coc_is_agree" => $this->current_students_last_coc_is_agree,
                "current_students_datetime" => $this->students_datetime,
                "current_students_student_id" => $this->students_aid,
                "current_students_sy_id" => $this->current_students_sy_id,
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
            $sql .= "where school_year_students_student_id = :school_year_students_student_id ";
            $sql .= "and school_year_students_sy_id = :school_year_students_sy_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_students_last_parent_declaration_is_agree" => $this->current_students_last_parent_declaration_is_agree,
                "school_year_students_datetime" => $this->students_datetime,
                "school_year_students_student_id" => $this->students_aid,
                "school_year_students_sy_id" => $this->current_students_sy_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update school year students Parent Declaration
    public function updateSchoolYearStudentParentDeclareCurrent()
    {
        try {
            $sql = "update {$this->tblSyStudentCurrent} set ";
            $sql .= "current_students_last_parent_declaration_is_agree = :current_students_last_parent_declaration_is_agree, ";
            $sql .= "current_students_datetime = :current_students_datetime ";
            $sql .= "where current_students_student_id = :current_students_student_id ";
            $sql .= "and current_students_sy_id = :current_students_sy_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "current_students_last_parent_declaration_is_agree" => $this->current_students_last_parent_declaration_is_agree,
                "current_students_datetime" => $this->students_datetime,
                "current_students_student_id" => $this->students_aid,
                "current_students_sy_id" => $this->current_students_sy_id,
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
            $sql .= "where school_year_students_student_id = :school_year_students_student_id ";
            $sql .= "and school_year_students_sy_id = :school_year_students_sy_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_students_last_parent_consent_is_agree" => $this->current_students_last_parent_consent_is_agree,
                "school_year_students_datetime" => $this->students_datetime,
                "school_year_students_student_id" => $this->students_aid,
                "school_year_students_sy_id" => $this->current_students_sy_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update school year students Parent Consent
    public function updateSchoolYearStudentParentConsentCurrent()
    {
        try {
            $sql = "update {$this->tblSyStudentCurrent} set ";
            $sql .= "current_students_last_parent_consent_is_agree = :current_students_last_parent_consent_is_agree, ";
            $sql .= "current_students_datetime = :current_students_datetime ";
            $sql .= "where current_students_student_id = :current_students_student_id ";
            $sql .= "and current_students_sy_id = :current_students_sy_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "current_students_last_parent_consent_is_agree" => $this->current_students_last_parent_consent_is_agree,
                "current_students_datetime" => $this->students_datetime,
                "current_students_student_id" => $this->students_aid,
                "current_students_sy_id" => $this->current_students_sy_id,
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
            $sql .= "where school_year_students_student_id = :school_year_students_student_id ";
            $sql .= "and school_year_students_sy_id = :school_year_students_sy_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_students_last_parent_commitment_is_agree" => $this->current_students_last_parent_commitment_is_agree,
                "school_year_students_datetime" => $this->students_datetime,
                "school_year_students_student_id" => $this->students_aid,
                "school_year_students_sy_id" => $this->current_students_sy_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update school year students Commitment Form
    public function updateSchoolYearStudentCommitmentFormCurrent()
    {
        try {
            $sql = "update {$this->tblSyStudentCurrent} set ";
            $sql .= "current_students_last_parent_commitment_is_agree = :current_students_last_parent_commitment_is_agree, ";
            $sql .= "current_students_datetime = :current_students_datetime ";
            $sql .= "where current_students_student_id = :current_students_student_id ";
            $sql .= "and current_students_sy_id = :current_students_sy_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "current_students_last_parent_commitment_is_agree" => $this->current_students_last_parent_commitment_is_agree,
                "current_students_datetime" => $this->students_datetime,
                "current_students_student_id" => $this->students_aid,
                "current_students_sy_id" => $this->current_students_sy_id,
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
            $sql .= "where school_year_students_student_id = :school_year_students_student_id ";
            $sql .= "and school_year_students_sy_id = :school_year_students_sy_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_students_student_id" => $this->students_aid,
                "school_year_students_sy_id" => $this->current_students_sy_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readSchoolYearStudentCurrent()
    {
        try {
            $sql = "select ";
            $sql .= "current_students_last_coc_is_agree, ";
            $sql .= "current_students_last_parent_declaration_is_agree, ";
            $sql .= "current_students_last_parent_consent_is_agree ";
            $sql .= "from {$this->tblSyStudentCurrent} ";
            $sql .= "where current_students_student_id = :current_students_student_id ";
            $sql .= "and current_students_sy_id = :current_students_sy_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "current_students_student_id" => $this->students_aid,
                "current_students_sy_id" => $this->current_students_sy_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readCountSchoolYearStudentByStudentId()
    {
        try {
            $sql = "select ";
            $sql .= "school_year_students_student_id, ";
            $sql .= "count(school_year_students_student_id) as student_count ";
            $sql .= "from {$this->tblSyStudent} ";
            $sql .= "where school_year_students_student_id = :school_year_students_student_id ";
            $sql .= "group by school_year_students_student_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_students_student_id" => $this->students_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readLastSchoolYearStudentByStudentId()
    {
        try {
            $sql = "select ";
            $sql .= "school_year_students_student_id, ";
            $sql .= "school_year_students_last_learning_type, ";
            $sql .= "school_year_students_grade_level_id, ";
            $sql .= "school_year_students_last_school_attended, ";
            $sql .= "school_year_students_last_gpa, ";
            $sql .= "school_year_students_last_school_address, ";
            $sql .= "school_year_students_last_remarks ";
            $sql .= "from {$this->tblSyStudent} ";
            $sql .= "where school_year_students_student_id = :school_year_students_student_id ";
            $sql .= "group by school_year_students_student_id ";
            $sql .= "order by school_year_students_aid desc ";
            $sql .= "limit 1 ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_students_student_id" => $this->students_aid,
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


    // remove school year student
    public function removeSchoolYearStudents()
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

    // delete school year student
    public function deleteSchoolYearStudents()
    {
        try {
            $sql = "delete from {$this->tblSyStudent} ";
            $sql .= "where school_year_students_student_id = :students_aid ";
            // $sql .= "and school_year_students_sy_id = :school_year_students_sy_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "students_aid" => $this->students_aid,
                // "school_year_students_sy_id" => $this->school_year_students_sy_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // delete school year current student
    public function deleteSchoolYearCurrentStudents()
    {
        try {
            $sql = "delete from {$this->tblSyStudentCurrent} ";
            $sql .= "where current_students_student_id = :students_aid ";
            // $sql .= "and current_students_sy_id = :school_year_students_sy_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "students_aid" => $this->students_aid,
                // "school_year_students_sy_id" => $this->school_year_students_sy_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }



    public function createStudentProfileByParent()
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
            $sql .= "students_medical_remarks, ";
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
            $sql .= ":students_medical_remarks, ";
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
                "students_medical_remarks" => $this->students_medical_remarks,
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


    public function createStudentSchoolYearByParent()
    {
        try {
            $sql = "insert into {$this->tblSyStudent} ";
            $sql .= "( ";
            $sql .= "school_year_students_is_active, ";
            $sql .= "school_year_students_sy_id, ";
            $sql .= "school_year_students_student_id, ";
            $sql .= "school_year_students_last_learning_type, ";
            $sql .= "school_year_students_last_grade_level_id, ";
            $sql .= "school_year_students_last_remarks, ";
            $sql .= "school_year_students_last_school_attended, ";
            // $sql .= "school_year_students_last_school_address, ";
            $sql .= "school_year_students_last_gpa, ";
            $sql .= "school_year_students_created, ";
            $sql .= "school_year_students_datetime ) values ( ";
            $sql .= ":school_year_students_is_active, ";
            $sql .= ":school_year_students_sy_id, ";
            $sql .= ":school_year_students_student_id, ";
            $sql .= ":school_year_students_last_learning_type, ";
            $sql .= ":school_year_students_last_grade_level_id, ";
            $sql .= ":school_year_students_last_remarks, ";
            $sql .= ":school_year_students_last_school_attended, ";
            // $sql .= ":school_year_students_last_school_address, ";
            $sql .= ":school_year_students_last_gpa, ";
            $sql .= ":school_year_students_created, ";
            $sql .= ":school_year_students_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_students_is_active" => $this->school_year_students_is_active,
                "school_year_students_sy_id" => $this->school_year_students_sy_id,
                "school_year_students_student_id" => $this->lastInsertedId,
                "school_year_students_last_learning_type" => $this->school_year_students_last_learning_type,
                "school_year_students_last_grade_level_id" => $this->school_year_students_last_grade_level_id,
                "school_year_students_last_remarks" => $this->school_year_students_last_remarks,
                "school_year_students_last_school_attended" => $this->school_year_students_last_school_attended,
                // "school_year_students_last_school_address" => $this->school_year_students_last_school_address,
                "school_year_students_last_gpa" => $this->school_year_students_last_gpa,
                "school_year_students_created" => $this->school_year_students_created,
                "school_year_students_datetime" => $this->school_year_students_datetime
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
