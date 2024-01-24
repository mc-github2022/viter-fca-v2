<?php
class Students
{
    public $student_aid ;
    public $student_active;
    public $student_name;
    public $student_gender;
    public $student_grade_level;
    public $student_created;
    public $student_datetime;

    public $connection;
    public $lastInsertedId;
    public $student_start;
    public $student_total;
    public $student_search;
    public $tblStudent;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblStudent = "fca_settings_student_rt";
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblStudent} ";
            $sql .= "( student_active, ";
            $sql .= "student_name, ";
            $sql .= "student_gender, ";
            $sql .= "student_grade_level, ";
            $sql .= "student_created, ";
            $sql .= "student_datetime ) values ( ";
            $sql .= ":student_active, ";
            $sql .= ":student_name, ";
            $sql .= ":student_gender, ";
            $sql .= ":student_grade_level, ";
            $sql .= ":student_created, ";
            $sql .= ":student_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "student_active" => $this->student_active,
                "student_name" => $this->student_name,
                "student_gender" => $this->student_gender,
                "student_grade_level" => $this->student_grade_level,
                "student_created" => $this->student_created,
                "student_datetime" => $this->student_datetime,
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
            $sql .= "from {$this->tblStudent} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblStudent} set ";
            $sql .= "student_name = :student_name, ";
            $sql .= "student_gender = :student_gender, ";
            $sql .= "student_grade_level = :student_grade_level, ";
            $sql .= "student_datetime = :student_datetime ";
            $sql .= "where student_aid  = :student_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "student_name" => $this->student_name,
                "student_gender" => $this->student_gender,
                "student_grade_level" => $this->student_grade_level,
                "student_datetime" => $this->student_datetime,
                "student_aid" => $this->student_aid ,
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
            $sql = "delete from {$this->tblStudent} ";
            $sql .= "where student_aid = :student_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "student_aid" => $this->student_aid,
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
            $sql = "select student_name from {$this->tblStudent} ";
            $sql .= "where student_name = :student_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "student_name" => "{$this->student_name}",
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
