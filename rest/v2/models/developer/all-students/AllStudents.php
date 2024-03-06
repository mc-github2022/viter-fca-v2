<?php
class AllStudents
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
    public $school_year_students_grade_level_id;
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

    public function create()
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
            $sql .= "school_year_students_grade_level_id, ";
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
            $sql .= ":school_year_students_grade_level_id, ";
            $sql .= ":school_year_students_last_school_address, ";
            $sql .= ":school_year_students_last_remarks, ";
            $sql .= ":school_year_students_created, ";
            $sql .= ":school_year_students_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_students_is_active" => $this->school_year_students_is_active,
                "school_year_students_sy_id" => $this->school_year_students_sy_id,
                "school_year_students_student_id" => $this->school_year_students_student_id,
                "school_year_students_last_learning_type" => $this->school_year_students_last_learning_type,
                "school_year_students_last_school_attended" => $this->school_year_students_last_school_attended,
                "school_year_students_last_gpa" => $this->school_year_students_last_gpa,
                "school_year_students_grade_level_id" => $this->school_year_students_grade_level_id,
                "school_year_students_last_school_address" => $this->school_year_students_last_school_address,
                "school_year_students_last_remarks" => $this->school_year_students_last_remarks,
                "school_year_students_created" => $this->school_year_students_created,
                "school_year_students_datetime" => $this->school_year_students_datetime
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
            $sql .= "{$this->tblGradeLevel} as gradeLevel ";
            $sql .= "where student.students_aid = syStudentCurrent.current_students_student_id ";
            $sql .= "and parent.parents_aid = student.students_parent_id ";
            $sql .= "and gradeLevel.grade_level_aid = syStudentCurrent.current_students_grade_level_id ";
            $sql .= "and schoolYear.school_year_aid = syStudentCurrent.current_students_sy_id ";
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
            $sql .= "{$this->tblGradeLevel} as gradeLevel ";
            $sql .= "where student.students_aid = syStudentCurrent.current_students_student_id ";
            $sql .= "and parent.parents_aid = student.students_parent_id ";
            $sql .= "and gradeLevel.grade_level_aid = syStudentCurrent.current_students_grade_level_id ";
            $sql .= "and schoolYear.school_year_aid = syStudentCurrent.current_students_sy_id ";
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
            $sql .= "{$this->tblGradeLevel} as gradeLevel ";
            $sql .= "where student.students_aid = syStudentCurrent.current_students_student_id ";
            $sql .= "and parent.parents_aid = student.students_parent_id ";
            $sql .= "and gradeLevel.grade_level_aid = syStudentCurrent.current_students_grade_level_id ";
            $sql .= "and schoolYear.school_year_aid = syStudentCurrent.current_students_sy_id ";
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
}
