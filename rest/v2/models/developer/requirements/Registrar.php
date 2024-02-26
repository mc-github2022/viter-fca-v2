<?php
class Registrar
{
    public $students_requirement_aid;
    public $students_requirement_is_active;
    public $students_requirement_student_id;
    public $students_requirement_sy_id;
    public $students_requirement_id;
    public $students_requirement_created;
    public $students_requirement_datetime;

    public $connection;
    public $lastInsertedId;
    public $registrar_start;
    public $registrar_total;
    public $registrar_search;
    public $tblRequirement;
    public $tblStudent;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblStudent = "fcav2_student_info";
        $this->tblRequirement = "fcav2_school_year_students_requirements";
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblRequirement} ";
            $sql .= "( students_requirement_is_active, ";
            $sql .= "students_requirement_student_id, ";
            $sql .= "students_requirement_sy_id, ";
            $sql .= "students_requirement_id, ";
            $sql .= "students_requirement_created, ";
            $sql .= "students_requirement_datetime ) values ( ";
            $sql .= ":students_requirement_is_active, ";
            $sql .= ":students_requirement_student_id, ";
            $sql .= ":students_requirement_sy_id, ";
            $sql .= ":students_requirement_id, ";
            $sql .= ":students_requirement_created, ";
            $sql .= ":students_requirement_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "students_requirement_is_active" => $this->students_requirement_is_active,
                "students_requirement_student_id" => $this->students_requirement_student_id,
                "students_requirement_sy_id" => $this->students_requirement_sy_id,
                "students_requirement_id" => $this->students_requirement_id,
                "students_requirement_created" => $this->students_requirement_created,
                "students_requirement_datetime" => $this->students_requirement_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readById()
    {
        try {
            $sql = "select students_requirement_aid, ";
            $sql .= "students_requirement_is_active, ";
            $sql .= "students_requirement_student_id, ";
            $sql .= "students_requirement_sy_id, ";
            $sql .= "students_requirement_id ";
            $sql .= "from {$this->tblRequirement} ";
            $sql .= "where students_requirement_student_id = :students_requirement_student_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "students_requirement_student_id" => $this->students_requirement_student_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblRequirement} ";
            $sql .= "where students_requirement_aid = :students_requirement_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "students_requirement_aid" => $this->students_requirement_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
