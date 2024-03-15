<?php
class PaymentScheme
{
    public $students_aid;
    public $grade_level_aid;
    public $tuition_category_aid;
    public $current_students_aid;
    public $current_students_sy_id;
    public $current_students_is_accept_payment;
    public $current_students_is_notify;
    public $current_students_schedule_fees_id;
    public $current_students_assessment_remarks;
    public $current_students_rate_id;
    public $current_students_datetime;

    public $connection;
    public $lastInsertedId;
    public $student_start;
    public $student_total;
    public $student_search;

    public $tblStudent;
    public $tblParents;
    public $tblCurrentSYStudent;
    public $tblSYStudent;
    public $tblSchoolYear;
    public $tblGradeLevel;
    public $tblEmailTemplate;
    public $tblNotification;
    public $tblDepartment;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblStudent = "fcav2_students";
        $this->tblParents = "fcav2_parents";
        $this->tblCurrentSYStudent = "fcav2_school_year_students_current";
        $this->tblSYStudent = "fcav2_school_year_students";
        $this->tblSchoolYear = "fcav2_settings_school_year";
        $this->tblGradeLevel = "fcav2_settings_grade_level";
        $this->tblEmailTemplate = "fcav2_settings_email_template";
        $this->tblNotification = "fcav2_settings_notification";
        $this->tblDepartment = "fcav2_settings_department";
    }

    // update accept payment
    public function updatePaymentSchemeSaveOrRevert()
    {
        try {
            $sql = "update {$this->tblSYStudent} set ";
            $sql .= "school_year_students_is_accept_payment = :school_year_students_is_accept_payment, ";
            $sql .= "school_year_students_is_notify = :school_year_students_is_notify, ";
            $sql .= "school_year_students_schedule_fees_id = :school_year_students_schedule_fees_id, ";
            $sql .= "school_year_students_rate_id = :school_year_students_rate_id, ";
            $sql .= "school_year_students_datetime = :school_year_students_datetime ";
            $sql .= "where school_year_students_sy_id = :school_year_students_sy_id ";
            $sql .= "and school_year_students_student_id = :school_year_students_student_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_students_is_accept_payment" => $this->current_students_is_accept_payment,
                "school_year_students_is_notify" => $this->current_students_is_notify,
                "school_year_students_schedule_fees_id" => $this->current_students_schedule_fees_id,
                "school_year_students_rate_id" => $this->current_students_rate_id,
                "school_year_students_datetime" => $this->current_students_datetime,
                "school_year_students_sy_id" => $this->current_students_sy_id,
                "school_year_students_student_id" => $this->students_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update accept payment
    public function updateCurrentPaymentSchemeSaveOrRevert()
    {
        try {
            $sql = "update {$this->tblCurrentSYStudent} set ";
            $sql .= "current_students_is_accept_payment = :current_students_is_accept_payment, ";
            $sql .= "current_students_is_notify = :current_students_is_notify, ";
            $sql .= "current_students_schedule_fees_id = :current_students_schedule_fees_id, ";
            $sql .= "current_students_rate_id = :current_students_rate_id, ";
            $sql .= "current_students_datetime = :current_students_datetime ";
            $sql .= "where current_students_aid = :current_students_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "current_students_is_accept_payment" => $this->current_students_is_accept_payment,
                "current_students_is_notify" => $this->current_students_is_notify,
                "current_students_schedule_fees_id" => $this->current_students_schedule_fees_id,
                "current_students_rate_id" => $this->current_students_rate_id,
                "current_students_datetime" => $this->current_students_datetime,
                "current_students_aid" => $this->current_students_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update accept payment
    public function updatePaymentRemarks()
    {
        try {
            $sql = "update {$this->tblSYStudent} set ";
            $sql .= "school_year_students_assessment_remarks = :school_year_students_assessment_remarks, ";
            $sql .= "school_year_students_datetime = :school_year_students_datetime ";
            $sql .= "where school_year_students_sy_id = :school_year_students_sy_id ";
            $sql .= "and school_year_students_student_id = :school_year_students_student_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_students_assessment_remarks" => $this->current_students_assessment_remarks,
                "school_year_students_datetime" => $this->current_students_datetime,
                "school_year_students_sy_id" => $this->current_students_sy_id,
                "school_year_students_student_id" => $this->students_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update accept payment
    public function updateCurrentPaymentRemarks()
    {
        try {
            $sql = "update {$this->tblCurrentSYStudent} set ";
            $sql .= "current_students_assessment_remarks = :current_students_assessment_remarks, ";
            $sql .= "current_students_datetime = :current_students_datetime ";
            $sql .= "where current_students_aid = :current_students_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "current_students_assessment_remarks" => $this->current_students_assessment_remarks,
                "current_students_datetime" => $this->current_students_datetime,
                "current_students_aid" => $this->current_students_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readByCurrentSyStudentAid()
    {
        try {
            $sql = "select *, ";
            $sql .= "CONCAT(student.students_lname, ', ', student.students_fname) as student_fullname, ";
            $sql .= "CONCAT(parent.parents_fname, ' ', parent.parents_lname) as parent_fullname, ";
            $sql .= "CONCAT(YEAR(schoolYear.school_year_start_date), '-', YEAR(schoolYear.school_year_end_date)) as school_year ";
            $sql .= "from {$this->tblStudent} as student, ";
            $sql .= "{$this->tblParents} as parent, ";
            $sql .= "{$this->tblCurrentSYStudent} as currentSyStudent, ";
            $sql .= "{$this->tblSchoolYear} as schoolYear ";
            $sql .= "where currentSyStudent.current_students_student_id = :students_aid ";
            $sql .= "and student.students_aid = currentSyStudent.current_students_student_id ";
            $sql .= "and parent.parents_aid = student.students_parent_id ";
            $sql .= "and schoolYear.school_year_aid = currentSyStudent.current_students_sy_id ";
            $sql .= "order by ";
            $sql .= "student.students_lname, ";
            $sql .= "student.students_fname ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "students_aid" => $this->students_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read by id
    public function readTemplateForAssessmentNotifyFinance()
    {
        try {
            $sql = "select email_templates.email_template_aid, ";
            $sql .= "email_templates.email_template_is_active, ";
            $sql .= "email_templates.email_template_name, ";
            $sql .= "email_templates.email_template_subject, ";
            $sql .= "email_templates.email_template_content, ";
            $sql .= "email_templates.email_template_receiver_id, ";
            $sql .= "email_templates.email_template_category, ";
            $sql .= "email_templates.email_template_cc_email, ";
            $sql .= "email_templates.email_template_cc_email_two, ";
            $sql .= "notif.notification_email, ";
            $sql .= "dept.department_name ";
            $sql .= "from {$this->tblEmailTemplate} as email_templates, ";
            $sql .= "{$this->tblNotification} as notif, ";
            $sql .= "{$this->tblDepartment} as dept ";
            $sql .= "where notif.notification_department_id = dept.department_aid ";
            $sql .= "and notif.notification_aid = email_templates.email_template_receiver_id ";
            $sql .= "and email_templates.email_template_category = 'assessment-notify-finance' ";
            $sql .= "order by email_templates.email_template_is_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
