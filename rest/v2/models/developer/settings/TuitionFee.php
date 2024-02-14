<?php
class TuitionFee
{
    public $tuition_fee_aid;
    public $tuition_fee_active;
    public $tuition_fee_category_id;
    public $tuition_fee_grade_id;
    public $tuition_fee_entrance;
    public $tuition_fee_miscellaneous;
    public $tuition_fee_tuition;
    public $tuition_fee_books;
    public $tuition_fee_start_date;
    public $tuition_fee_end_date;


    public $tuition_fee_category_id_old;
    public $tuition_fee_grade_id_old;

    public $tuition_fee_created;
    public $tuition_fee_datetime;

    public $connection;
    public $lastInsertedId;
    public $tuition_fee_start;
    public $tuition_fee_total;
    public $tuition_fee_search;
    public $tblGradeLevel;
    public $tblTuitionCategory;
    public $tblTuitionFee;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblGradeLevel = "fcav2_settings_grade_level";
        $this->tblTuitionCategory = "fcav2_settings_tuition_category";
        $this->tblTuitionFee = "fcav2_settings_tuition_fee";
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblTuitionFee} ";
            $sql .= "( tuition_fee_active, ";
            $sql .= "tuition_fee_category_id, ";
            $sql .= "tuition_fee_grade_id, ";
            $sql .= "tuition_fee_entrance, ";
            $sql .= "tuition_fee_miscellaneous, ";
            $sql .= "tuition_fee_tuition, ";
            $sql .= "tuition_fee_books, ";
            $sql .= "tuition_fee_start_date, ";
            $sql .= "tuition_fee_end_date, ";
            $sql .= "tuition_fee_created, ";
            $sql .= "tuition_fee_datetime ) values ( ";
            $sql .= ":tuition_fee_active, ";
            $sql .= ":tuition_fee_category_id, ";
            $sql .= ":tuition_fee_grade_id, ";
            $sql .= ":tuition_fee_entrance, ";
            $sql .= ":tuition_fee_miscellaneous, ";
            $sql .= ":tuition_fee_tuition, ";
            $sql .= ":tuition_fee_books, ";
            $sql .= ":tuition_fee_start_date, ";
            $sql .= ":tuition_fee_end_date, ";
            $sql .= ":tuition_fee_created, ";
            $sql .= ":tuition_fee_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tuition_fee_active" => $this->tuition_fee_active,
                "tuition_fee_category_id" => $this->tuition_fee_category_id,
                "tuition_fee_grade_id" => $this->tuition_fee_grade_id,
                "tuition_fee_entrance" => $this->tuition_fee_entrance,
                "tuition_fee_miscellaneous" => $this->tuition_fee_miscellaneous,
                "tuition_fee_tuition" => $this->tuition_fee_tuition,
                "tuition_fee_books" => $this->tuition_fee_books,
                "tuition_fee_start_date" => $this->tuition_fee_start_date,
                "tuition_fee_end_date" => $this->tuition_fee_end_date,
                "tuition_fee_created" => $this->tuition_fee_created,
                "tuition_fee_datetime" => $this->tuition_fee_datetime,
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
            $sql .= "from {$this->tblTuitionFee} as fee, ";
            $sql .= "{$this->tblTuitionCategory} as category, ";
            $sql .= "{$this->tblGradeLevel} as grade ";
            $sql .= "where fee.tuition_fee_category_id = category.tuition_category_aid ";
            $sql .= "and fee.tuition_fee_grade_id = grade.grade_level_aid ";
            $sql .= "order by fee.tuition_fee_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblTuitionFee} set ";
            $sql .= "tuition_fee_category_id = :tuition_fee_category_id, ";
            $sql .= "tuition_fee_grade_id = :tuition_fee_grade_id, ";
            $sql .= "tuition_fee_entrance = :tuition_fee_entrance, ";
            $sql .= "tuition_fee_miscellaneous = :tuition_fee_miscellaneous, ";
            $sql .= "tuition_fee_tuition = :tuition_fee_tuition, ";
            $sql .= "tuition_fee_books = :tuition_fee_books, ";
            $sql .= "tuition_fee_start_date = :tuition_fee_start_date, ";
            $sql .= "tuition_fee_end_date = :tuition_fee_end_date, ";
            $sql .= "tuition_fee_datetime = :tuition_fee_datetime ";
            $sql .= "where tuition_fee_aid  = :tuition_fee_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tuition_fee_category_id" => $this->tuition_fee_category_id,
                "tuition_fee_grade_id" => $this->tuition_fee_grade_id,
                "tuition_fee_entrance" => $this->tuition_fee_entrance,
                "tuition_fee_miscellaneous" => $this->tuition_fee_miscellaneous,
                "tuition_fee_tuition" => $this->tuition_fee_tuition,
                "tuition_fee_books" => $this->tuition_fee_books,
                "tuition_fee_start_date" => $this->tuition_fee_start_date,
                "tuition_fee_end_date" => $this->tuition_fee_end_date,
                "tuition_fee_datetime" => $this->tuition_fee_datetime,
                "tuition_fee_aid" => $this->tuition_fee_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblTuitionFee} set ";
            $sql .= "tuition_fee_active = :tuition_fee_active, ";
            $sql .= "tuition_fee_datetime = :tuition_fee_datetime ";
            $sql .= "where tuition_fee_aid  = :tuition_fee_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tuition_fee_active" => $this->tuition_fee_active,
                "tuition_fee_datetime" => $this->tuition_fee_datetime,
                "tuition_fee_aid" => $this->tuition_fee_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblTuitionFee} ";
            $sql .= "where tuition_fee_aid = :tuition_fee_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tuition_fee_aid" => $this->tuition_fee_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function checkName()
    {
        try {
            $sql = "select tuition_fee_category_id, ";
            $sql .= "tuition_fee_grade_id ";
            $sql .= "from {$this->tblTuitionFee} ";
            $sql .= "where tuition_fee_category_id = :tuition_fee_category_id ";
            $sql .= "and tuition_fee_grade_id = :tuition_fee_grade_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tuition_fee_category_id" => "{$this->tuition_fee_category_id}",
                "tuition_fee_grade_id" => "{$this->tuition_fee_grade_id}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }



    // validator
    public function checkAssociation()
    {
        try {
            $sql = "select employee_last_name, ";
            $sql .= "employee_first_name, ";
            $sql .= "employee_aid ";
            $sql .= "from {$this->tblEmployee} ";
            $sql .= "where employee_tuition_fee_id = :tuition_fee_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tuition_fee_aid" => $this->tuition_fee_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
