<?php
class PaymentScheme
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

    public $tblCurrentSYStudent;
    public $tblSchoolYear;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblCurrentSYStudent = "fcav2_school_year_students";
        $this->tblSchoolYear = "fcav2_settings_school_year";
    }

    // update accept payment
    public function updatePaymentSchemeSaveOrRevert()
    {
        try {
            $sql = "update {$this->tblCurrentSYStudent} set ";
            $sql .= "school_year_students_is_accept_payment = :school_year_students_is_accept_payment, ";
            $sql .= "school_year_students_is_notify = :school_year_students_is_notify, ";
            $sql .= "school_year_students_schedule_fees_id = :school_year_students_schedule_fees_id, ";
            $sql .= "school_year_students_rate_id = :school_year_students_rate_id, ";
            $sql .= "school_year_students_datetime = :school_year_students_datetime ";
            $sql .= "where school_year_students_aid = :school_year_students_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_students_is_accept_payment" => $this->school_year_students_is_accept_payment,
                "school_year_students_is_notify" => $this->school_year_students_is_notify,
                "school_year_students_schedule_fees_id" => $this->school_year_students_schedule_fees_id,
                "school_year_students_rate_id" => $this->school_year_students_rate_id,
                "school_year_students_datetime" => $this->school_year_students_datetime,
                "school_year_students_aid" => $this->school_year_students_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readByCurrentSyStudentAid()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblCurrentSYStudent} ";
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
}
