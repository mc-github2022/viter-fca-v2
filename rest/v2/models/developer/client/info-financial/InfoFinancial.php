<?php
class InfoFinancial
{
    public $financial_info_aid;
    public $financial_info_user_id;
    public $financial_info_father_income;
    public $financial_info_mother_income;
    public $financial_info_financer_income;
    public $financial_info_financer_full_name;
    public $financial_info_financer_relationship;
    public $financial_info_financer_occupation;
    public $financial_info_created;
    public $financial_info_datetime;

    public $connection;
    public $lastInsertedId;
    public $financial_info_start;
    public $financial_info_total;
    public $financial_info_search;
    public $tblInfoContact;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblInfoFinancial = "fca_info_financial";
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblInfoFinancial} ";
            $sql .= "( financial_info_user_id, ";
            $sql .= "financial_info_father_income, ";
            $sql .= "financial_info_mother_income, ";
            $sql .= "financial_info_financer_income, ";
            $sql .= "financial_info_financer_full_name, ";
            $sql .= "financial_info_financer_relationship, ";
            $sql .= "financial_info_financer_occupation, ";
            $sql .= "financial_info_created, ";
            $sql .= "financial_info_datetime ) values ( ";
            $sql .= ":financial_info_user_id, ";
            $sql .= ":financial_info_father_income, ";
            $sql .= ":financial_info_mother_income, ";
            $sql .= ":financial_info_financer_income, ";
            $sql .= ":financial_info_financer_full_name, ";
            $sql .= ":financial_info_financer_relationship, ";
            $sql .= ":financial_info_financer_occupation, ";
            $sql .= ":financial_info_created, ";
            $sql .= ":financial_info_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "financial_info_user_id" => $this->financial_info_user_id,
                "financial_info_father_income" => $this->financial_info_father_income,
                "financial_info_mother_income" => $this->financial_info_mother_income,
                "financial_info_financer_income" => $this->financial_info_financer_income,
                "financial_info_financer_full_name" => $this->financial_info_financer_full_name,
                "financial_info_financer_relationship" => $this->financial_info_financer_relationship,
                "financial_info_financer_occupation" => $this->financial_info_financer_occupation,
                "financial_info_created" => $this->financial_info_created,
                "financial_info_datetime" => $this->financial_info_datetime,
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
            $sql .= "from {$this->tblInfoFinancial} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function update()
    {
        try {
            $sql = "update {$this->tblInfoFinancial} set ";
            $sql .= "financial_info_user_id = :financial_info_user_id, ";
            $sql .= "financial_info_father_income = :financial_info_father_income, ";
            $sql .= "financial_info_mother_income = :financial_info_mother_income, ";
            $sql .= "financial_info_financer_income = :financial_info_financer_income, ";
            $sql .= "financial_info_financer_full_name = :financial_info_financer_full_name, ";
            $sql .= "financial_info_financer_relationship = :financial_info_financer_relationship, ";
            $sql .= "financial_info_financer_occupation = :financial_info_financer_occupation, ";
            $sql .= "financial_info_datetime = :financial_info_datetime ";
            $sql .= "where financial_info_aid = :financial_info_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "financial_info_user_id" => $this->financial_info_user_id,
                "financial_info_father_income" => $this->financial_info_father_income,
                "financial_info_mother_income" => $this->financial_info_mother_income,
                "financial_info_financer_income" => $this->financial_info_financer_income,
                "financial_info_financer_full_name" => $this->financial_info_financer_full_name,
                "financial_info_financer_relationship" => $this->financial_info_financer_relationship,
                "financial_info_financer_occupation" => $this->financial_info_financer_occupation,
                "financial_info_datetime" => $this->financial_info_datetime,
                "financial_info_aid" => $this->financial_info_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblInfoFinancial} set ";
            $sql .= "student_active = :student_active, ";
            $sql .= "student_datetime = :student_datetime ";
            $sql .= "where student_aid  = :student_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "student_active" => $this->student_active,
                "student_datetime" => $this->student_datetime,
                "student_aid" => $this->student_aid ,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblInfoFinancial} ";
            $sql .= "where financial_info_aid  = :financial_info_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "financial_info_aid" => $this->financial_info_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // validatior 
    // name
    public function checkName()
    {
        try {
            $sql = "select contact_name from {$this->tblInfoFinancial} ";
            $sql .= "where contact_name = :contact_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "contact_name" => "{$this->contact_name}",
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
            $sql .= "where employee_student_id = :student_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "student_aid" => $this->student_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
