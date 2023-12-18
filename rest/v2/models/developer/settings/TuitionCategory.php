<?php
class TuitionCategory
{
    public $tuition_category_aid;
    public $tuition_category_active;    
    public $tuition_category_name;
    public $tuition_category_created;
    public $tuition_category_datetime;

    public $connection;
    public $lastInsertedId;
    public $tuition_category_start;
    public $tuition_category_total;
    public $tuition_category_search;

    public $tblTuitionCategory;
    public $tblDepartment;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblTuitionCategory = "fca_settings_tuition_category";
        $this->tblDepartment = "fca_settings_department";
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblTuitionCategory} ";
            $sql .= "( tuition_category_active, ";
            $sql .= "tuition_category_name, ";
            $sql .= "tuition_category_created, ";
            $sql .= "tuition_category_datetime ) values ( ";
            $sql .= ":tuition_category_active, ";
            $sql .= ":tuition_category_name, ";
            $sql .= ":tuition_category_created, ";
            $sql .= ":tuition_category_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tuition_category_active" => $this->tuition_category_active,
                "tuition_category_name" => $this->tuition_category_name,
                "tuition_category_created" => $this->tuition_category_created,
                "tuition_category_datetime" => $this->tuition_category_datetime,
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
            $sql = "select * from {$this->tblTuitionCategory} ";
            $sql .= "order by tuition_category_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblTuitionCategory} set ";
            $sql .= "tuition_category_name = :tuition_category_name, ";
            $sql .= "tuition_category_datetime = :tuition_category_datetime ";
            $sql .= "where tuition_category_aid = :tuition_category_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tuition_category_name" => $this->tuition_category_name,
                "tuition_category_datetime" => $this->tuition_category_datetime,
                "tuition_category_aid" => $this->tuition_category_aid ,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblTuitionCategory} set ";
            $sql .= "tuition_category_active = :tuition_category_active, ";
            $sql .= "tuition_category_datetime = :tuition_category_datetime ";
            $sql .= "where tuition_category_aid  = :tuition_category_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tuition_category_active" => $this->tuition_category_active,
                "tuition_category_datetime" => $this->tuition_category_datetime,
                "tuition_category_aid" => $this->tuition_category_aid ,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblTuitionCategory} ";
            $sql .= "where tuition_category_aid = :tuition_category_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tuition_category_aid" => $this->tuition_category_aid,
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
            $sql = "select tuition_category_name from {$this->tblTuitionCategory} ";
            $sql .= "where tuition_category_name = :tuition_category_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tuition_category_name" => "{$this->tuition_category_name}",
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
            $sql .= "where employee_tuition_category_id = :tuition_category_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tuition_category_aid" => $this->tuition_category_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
