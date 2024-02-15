<?php
class LearningType
{
    public $learning_type_aid;
    public $learning_type_active;
    public $learning_type_name;
    public $learning_type_created;
    public $learning_type_datetime;

    public $connection;
    public $lastInsertedId;
    public $learning_type_start;
    public $learning_type_total;
    public $learning_type_search;
    public $tblLearningType;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblLearningType = "fcav2_settings_learning_type";
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblLearningType} ";
            $sql .= "( learning_type_active, ";
            $sql .= "learning_type_name, ";
            $sql .= "learning_type_created, ";
            $sql .= "learning_type_datetime ) values ( ";
            $sql .= ":learning_type_active, ";
            $sql .= ":learning_type_name, ";
            $sql .= ":learning_type_created, ";
            $sql .= ":learning_type_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "learning_type_active" => $this->learning_type_active,
                "learning_type_name" => $this->learning_type_name,
                "learning_type_created" => $this->learning_type_created,
                "learning_type_datetime" => $this->learning_type_datetime,
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
            $sql = "select learning_type_aid, ";
            $sql .= "learning_type_active, ";
            $sql .= "learning_type_name ";
            $sql .= "from {$this->tblLearningType} ";
            $sql .= "order by learning_type_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblLearningType} set ";
            $sql .= "learning_type_name = :learning_type_name, ";
            $sql .= "learning_type_datetime = :learning_type_datetime ";
            $sql .= "where learning_type_aid  = :learning_type_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "learning_type_name" => $this->learning_type_name,
                "learning_type_datetime" => $this->learning_type_datetime,
                "learning_type_aid" => $this->learning_type_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblLearningType} set ";
            $sql .= "learning_type_active = :learning_type_active, ";
            $sql .= "learning_type_datetime = :learning_type_datetime ";
            $sql .= "where learning_type_aid  = :learning_type_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "learning_type_active" => $this->learning_type_active,
                "learning_type_datetime" => $this->learning_type_datetime,
                "learning_type_aid" => $this->learning_type_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblLearningType} ";
            $sql .= "where learning_type_aid = :learning_type_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "learning_type_aid" => $this->learning_type_aid,
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
            $sql = "select learning_type_name from {$this->tblLearningType} ";
            $sql .= "where learning_type_name = :learning_type_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "learning_type_name" => "{$this->learning_type_name}",
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
            $sql .= "where employee_learning_type_id = :learning_type_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "learning_type_aid" => $this->learning_type_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
