<?php
class Assessment
{
    public $students_aid;
    public $grade_level_aid;
    public $tuition_category_aid;
    public $school_year_students_aid;
    public $school_year_students_is_accept_payment;
    public $school_year_students_is_notify;
    public $school_year_students_schedule_fees_id;
    public $school_year_students_rate_id;
    public $school_year_students_primary_discount_id;
    public $school_year_students_additional_discount_id;
    public $school_year_students_datetime;

    public $connection;
    public $lastInsertedId;
    public $student_start;
    public $student_total;
    public $student_search;

    public $tblStudent;
    public $tblParents;
    public $tblSyStudent;
    public $tblGradeLevel;
    public $tblParentInfo;
    public $tblSchoolYear;
    public $tblTuitionCategory;
    public $tblTuitionFee;
    public $tblScheme;
    public $tblDiscount;
    public $tblDiscountCategory;
    public $tblDiscountAdditional;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblStudent = "fcav2_students";
        $this->tblParents = "fcav2_parents";
        $this->tblSyStudent = "fcav2_school_year_students";
        $this->tblGradeLevel = "fcav2_settings_grade_level";
        $this->tblParentInfo = "fcav2_info_parent_guardian";
        $this->tblSchoolYear = "fcav2_settings_school_year";
        $this->tblTuitionCategory = "fcav2_settings_tuition_category";
        $this->tblTuitionFee = "fcav2_settings_tuition_fee";
        $this->tblScheme = "fcav2_settings_scheme";
        $this->tblDiscount = "fcav2_settings_discount";
        $this->tblDiscountCategory = "fcav2_settings_discount_category";
        $this->tblDiscountAdditional = "fcav2_settings_discount_additional";
    }


    // read all
    public function readAll()
    {
        try {
            $sql = "select student.*, ";
            $sql .= "syStudent.school_year_students_aid, ";
            $sql .= "syStudent.school_year_students_is_accept_payment, ";
            $sql .= "syStudent.school_year_students_is_notify, ";
            $sql .= "syStudent.school_year_students_schedule_fees_id, ";
            $sql .= "syStudent.school_year_students_rate_id, ";
            $sql .= "syStudent.school_year_students_primary_discount_id, ";
            $sql .= "syStudent.school_year_students_additional_discount_id, ";
            $sql .= "gradeLevel.grade_level_aid, ";
            $sql .= "gradeLevel.grade_level_name, ";
            $sql .= "CONCAT(student.students_lname, ', ', student.students_fname) as student_fullname, ";
            $sql .= "CONCAT(parent.parents_fname, ' ', parent.parents_lname) as parent_fullname, ";
            $sql .= "CONCAT(YEAR(schoolYear.school_year_start_date), '-', YEAR(schoolYear.school_year_end_date)) as school_year ";
            $sql .= "from {$this->tblStudent} as student, ";
            $sql .= "{$this->tblParents} as parent, ";
            $sql .= "{$this->tblSyStudent} as syStudent, ";
            $sql .= "{$this->tblSchoolYear} as schoolYear, ";
            $sql .= "{$this->tblGradeLevel} as gradeLevel ";
            $sql .= "where student.students_aid = syStudent.school_year_students_student_id ";
            $sql .= "and parent.parents_aid = student.students_parent_id ";
            $sql .= "and gradeLevel.grade_level_aid = syStudent.school_year_students_grade_level_id ";
            $sql .= "and schoolyear.school_year_aid = syStudent.school_year_students_sy_id ";
            $sql .= "and syStudent.school_year_students_is_accept_payment = 0 ";
            $sql .= "and syStudent.school_year_students_last_coc_is_agree = 1 ";
            $sql .= "and syStudent.school_year_students_last_parent_declaration_is_agree = 1 ";
            $sql .= "and syStudent.school_year_students_last_parent_consent_is_agree = 1 ";
            $sql .= "and syStudent.school_year_students_last_parent_commitment_is_agree = 1 ";
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

    // read limit
    public function readLimit()
    {
        try {
            $sql = "select student.*, ";
            $sql .= "syStudent.school_year_students_aid, ";
            $sql .= "syStudent.school_year_students_is_accept_payment, ";
            $sql .= "syStudent.school_year_students_is_notify, ";
            $sql .= "syStudent.school_year_students_schedule_fees_id, ";
            $sql .= "syStudent.school_year_students_rate_id, ";
            $sql .= "syStudent.school_year_students_primary_discount_id, ";
            $sql .= "syStudent.school_year_students_additional_discount_id, ";
            $sql .= "gradeLevel.grade_level_aid, ";
            $sql .= "gradeLevel.grade_level_name, ";
            $sql .= "CONCAT(student.students_lname, ', ', student.students_fname) as student_fullname, ";
            $sql .= "CONCAT(parent.parents_fname, ' ', parent.parents_lname) as parent_fullname, ";
            $sql .= "CONCAT(YEAR(schoolYear.school_year_start_date), '-', YEAR(schoolYear.school_year_end_date)) as school_year ";
            $sql .= "from {$this->tblStudent} as student, ";
            $sql .= "{$this->tblParents} as parent, ";
            $sql .= "{$this->tblSyStudent} as syStudent, ";
            $sql .= "{$this->tblSchoolYear} as schoolYear, ";
            $sql .= "{$this->tblGradeLevel} as gradeLevel ";
            $sql .= "where student.students_aid = syStudent.school_year_students_student_id ";
            $sql .= "and parent.parents_aid = student.students_parent_id ";
            $sql .= "and gradeLevel.grade_level_aid = syStudent.school_year_students_grade_level_id ";
            $sql .= "and schoolyear.school_year_aid = syStudent.school_year_students_sy_id ";
            $sql .= "and syStudent.school_year_students_is_accept_payment = 0 ";
            $sql .= "and syStudent.school_year_students_last_coc_is_agree = 1 ";
            $sql .= "and syStudent.school_year_students_last_parent_declaration_is_agree = 1 ";
            $sql .= "and syStudent.school_year_students_last_parent_consent_is_agree = 1 ";
            $sql .= "and syStudent.school_year_students_last_parent_commitment_is_agree = 1 ";
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
                "start" => $this->student_start - 1,
                "total" => $this->student_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // search
    public function search()
    {
        try {
            $sql = "select student.*, ";
            $sql .= "syStudent.school_year_students_aid, ";
            $sql .= "syStudent.school_year_students_is_accept_payment, ";
            $sql .= "syStudent.school_year_students_is_notify, ";
            $sql .= "syStudent.school_year_students_schedule_fees_id, ";
            $sql .= "syStudent.school_year_students_rate_id, ";
            $sql .= "syStudent.school_year_students_primary_discount_id, ";
            $sql .= "syStudent.school_year_students_additional_discount_id, ";
            $sql .= "gradeLevel.grade_level_aid, ";
            $sql .= "gradeLevel.grade_level_name, ";
            $sql .= "CONCAT(student.students_lname, ', ', student.students_fname) as student_fullname, ";
            $sql .= "CONCAT(parent.parents_fname, ' ', parent.parents_lname) as parent_fullname, ";
            $sql .= "CONCAT(YEAR(schoolYear.school_year_start_date), '-', YEAR(schoolYear.school_year_end_date)) as school_year ";
            $sql .= "from {$this->tblStudent} as student, ";
            $sql .= "{$this->tblParents} as parent, ";
            $sql .= "{$this->tblSyStudent} as syStudent, ";
            $sql .= "{$this->tblSchoolYear} as schoolYear, ";
            $sql .= "{$this->tblGradeLevel} as gradeLevel ";
            $sql .= "where student.students_aid = syStudent.school_year_students_student_id ";
            $sql .= "and parent.parents_aid = student.students_parent_id ";
            $sql .= "and gradeLevel.grade_level_aid = syStudent.school_year_students_grade_level_id ";
            $sql .= "and schoolyear.school_year_aid = syStudent.school_year_students_sy_id ";
            $sql .= "and syStudent.school_year_students_is_accept_payment = 0 ";
            $sql .= "and syStudent.school_year_students_last_coc_is_agree = 1 ";
            $sql .= "and syStudent.school_year_students_last_parent_declaration_is_agree = 1 ";
            $sql .= "and syStudent.school_year_students_last_parent_consent_is_agree = 1 ";
            $sql .= "and syStudent.school_year_students_last_parent_commitment_is_agree = 1 ";
            $sql .= "and schoolyear.school_year_is_active = 1 "; // only get or show all the student in the current or ongoing school year
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
                "students_fname" => "%{$this->student_search}%",
                "students_lname" => "%{$this->student_search}%",
                "grade_level_name" => "%{$this->student_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tblStudent} ";
            $sql .= "where students_aid = :students_aid ";
            $sql .= "order by students_lname asc, ";
            $sql .= "students_fname asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "students_aid" => $this->students_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function readAllByGroupTuitionFeeGrade()
    {
        try {
            $sql = "select category.tuition_category_aid, ";
            $sql .= "category.tuition_category_name, ";
            $sql .= "grade.grade_level_name ";
            $sql .= "from {$this->tblTuitionFee} as fee, ";
            $sql .= "{$this->tblTuitionCategory} as category, ";
            $sql .= "{$this->tblGradeLevel} as grade, ";
            $sql .= "{$this->tblScheme} as scheme ";
            $sql .= "where fee.tuition_fee_grade_id = :tuition_fee_grade_id ";
            $sql .= "and fee.tuition_fee_active = '1' ";
            $sql .= "and fee.tuition_fee_category_id = category.tuition_category_aid ";
            $sql .= "and fee.tuition_fee_grade_id = grade.grade_level_aid ";
            $sql .= "and fee.tuition_fee_scheme_id = scheme.scheme_aid ";
            $sql .= "group by fee.tuition_fee_category_id, ";
            $sql .= "fee.tuition_fee_grade_id ";
            $sql .= "order by fee.tuition_fee_active desc, ";
            $sql .= "category.tuition_category_name asc, ";
            $sql .= "grade.grade_level_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tuition_fee_grade_id" => $this->grade_level_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readByCategoryAndGrade()
    {
        try {
            $sql = "select fee.*, ";
            $sql .= "category.tuition_category_name, ";
            $sql .= "grade.grade_level_name, ";
            $sql .= "scheme.scheme_name ";
            $sql .= "from {$this->tblTuitionFee} as fee, ";
            $sql .= "{$this->tblTuitionCategory} as category, ";
            $sql .= "{$this->tblGradeLevel} as grade, ";
            $sql .= "{$this->tblScheme} as scheme ";
            $sql .= "where fee.tuition_fee_category_id = :tuition_fee_category_id ";
            $sql .= "and fee.tuition_fee_grade_id = :tuition_fee_grade_id ";
            $sql .= "and fee.tuition_fee_active = '1' ";
            $sql .= "and fee.tuition_fee_category_id = category.tuition_category_aid ";
            $sql .= "and fee.tuition_fee_grade_id = grade.grade_level_aid ";
            $sql .= "and fee.tuition_fee_scheme_id = scheme.scheme_aid ";
            $sql .= "order by scheme.scheme_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tuition_fee_category_id" => $this->tuition_category_aid,
                "tuition_fee_grade_id" => $this->grade_level_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read all
    public function readAllPrimaryDiscount()
    {
        try {
            $sql = "select ";
            $sql .= "discount.*, ";
            $sql .= "discountCategory.discount_category_name ";
            $sql .= "from ";
            $sql .= "{$this->tblDiscountCategory} as discountCategory, ";
            $sql .= "{$this->tblDiscount} as discount ";
            $sql .= "where discount.discount_category_id = discountCategory.discount_category_aid ";
            $sql .= "order by discount.discount_is_active desc, ";
            $sql .= "discountCategory.discount_category_name asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read all
    public function readAllAdditionalDiscount()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= " {$this->tblDiscountAdditional} ";
            $sql .= "order by discount_additional_is_active desc, ";
            $sql .= "discount_additional_name asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update accept payment
    public function updateAcceptPayment()
    {
        try {
            $sql = "update {$this->tblSyStudent} set ";
            $sql .= "school_year_students_is_accept_payment = :school_year_students_is_accept_payment, ";
            $sql .= "school_year_students_is_notify = :school_year_students_is_notify, ";
            $sql .= "school_year_students_schedule_fees_id = :school_year_students_schedule_fees_id, ";
            $sql .= "school_year_students_rate_id = :school_year_students_rate_id, ";
            $sql .= "school_year_students_primary_discount_id = :school_year_students_primary_discount_id, ";
            $sql .= "school_year_students_additional_discount_id = :school_year_students_additional_discount_id, ";
            $sql .= "school_year_students_datetime = :school_year_students_datetime ";
            $sql .= "where school_year_students_aid = :school_year_students_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_students_is_accept_payment" => $this->school_year_students_is_accept_payment,
                "school_year_students_is_notify" => $this->school_year_students_is_notify,
                "school_year_students_schedule_fees_id" => $this->school_year_students_schedule_fees_id,
                "school_year_students_rate_id" => $this->school_year_students_rate_id,
                "school_year_students_primary_discount_id" => $this->school_year_students_primary_discount_id,
                "school_year_students_additional_discount_id" => $this->school_year_students_additional_discount_id,
                "school_year_students_datetime" => $this->school_year_students_datetime,
                "school_year_students_aid" => $this->school_year_students_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
