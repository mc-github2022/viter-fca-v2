<?php
class GradeLevel
{
    public $grade_level_aid ;
    public $grade_level_active;
    public $grade_level_name;
    public $grade_level_is_pre_school;
    public $grade_level_created;
    public $grade_level_datetime;

    public $connection;
    public $lastInsertedId;
    public $grade_level_start;
    public $grade_level_total;
    public $grade_level_search;
    public $tblGradeLevel;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblGradeLevel = "fca_settings_grade_level";
        $this->tblTuitionFee = "fca_settings_tuition_fee";
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblGradeLevel} ";
            $sql .= "( grade_level_active, ";
            $sql .= "grade_level_name, ";
            $sql .= "grade_level_is_pre_school, ";
            $sql .= "grade_level_created, ";
            $sql .= "grade_level_datetime ) values ( ";
            $sql .= ":grade_level_active, ";
            $sql .= ":grade_level_name, ";
            $sql .= ":grade_level_is_pre_school, ";
            $sql .= ":grade_level_created, ";
            $sql .= ":grade_level_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "grade_level_active" => $this->grade_level_active,
                "grade_level_name" => $this->grade_level_name,
                "grade_level_is_pre_school" => $this->grade_level_is_pre_school,
                "grade_level_created" => $this->grade_level_created,
                "grade_level_datetime" => $this->grade_level_datetime,
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
            $sql = "select grade_level_aid, ";
            $sql .= "grade_level_active, ";
            $sql .= "grade_level_name, ";
            $sql .= "grade_level_is_pre_school ";
            $sql .= "from {$this->tblGradeLevel} ";
            $sql .= "order by grade_level_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblGradeLevel} set ";
            $sql .= "grade_level_name = :grade_level_name, ";
            $sql .= "grade_level_is_pre_school = :grade_level_is_pre_school, ";
            $sql .= "grade_level_datetime = :grade_level_datetime ";
            $sql .= "where grade_level_aid  = :grade_level_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "grade_level_name" => $this->grade_level_name,
                "grade_level_is_pre_school" => $this->grade_level_is_pre_school,
                "grade_level_datetime" => $this->grade_level_datetime,
                "grade_level_aid" => $this->grade_level_aid ,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblGradeLevel} set ";
            $sql .= "grade_level_active = :grade_level_active, ";
            $sql .= "grade_level_datetime = :grade_level_datetime ";
            $sql .= "where grade_level_aid  = :grade_level_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "grade_level_active" => $this->grade_level_active,
                "grade_level_datetime" => $this->grade_level_datetime,
                "grade_level_aid" => $this->grade_level_aid ,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblGradeLevel} ";
            $sql .= "where grade_level_aid = :grade_level_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "grade_level_aid" => $this->grade_level_aid,
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
            $sql = "select grade_level_name from {$this->tblGradeLevel} ";
            $sql .= "where grade_level_name = :grade_level_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "grade_level_name" => "{$this->grade_level_name}",
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
            $sql = "select * ";
            $sql .= "from {$this->tblTuitionFee} ";
            $sql .= "where tuition_fee_grade_id = :grade_level_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "grade_level_aid" => $this->grade_level_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
