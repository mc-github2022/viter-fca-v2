<?php
class Registrar
{
    public $students_requirements_aid;
    public $students_requirements_is_active;
    public $students_requirements_student_id;
    public $students_requirements_sy_id;
    public $students_requirements_id;
    public $students_requirements_remarks;
    public $students_requirements_created;
    public $students_requirements_datetime;

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
            $sql .= "( students_requirements_is_active, ";
            $sql .= "students_requirements_student_id, ";
            $sql .= "students_requirements_sy_id, ";
            $sql .= "students_requirements_id, ";
            $sql .= "students_requirements_remarks, ";
            $sql .= "students_requirements_created, ";
            $sql .= "students_requirements_datetime ) values ( ";
            $sql .= ":students_requirements_is_active, ";
            $sql .= ":students_requirements_student_id, ";
            $sql .= ":students_requirements_sy_id, ";
            $sql .= ":students_requirements_id, ";
            $sql .= ":students_requirements_remarks, ";
            $sql .= ":students_requirements_created, ";
            $sql .= ":students_requirements_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "students_requirements_is_active" => $this->students_requirements_is_active,
                "students_requirements_student_id" => $this->students_requirements_student_id,
                "students_requirements_sy_id" => $this->students_requirements_sy_id,
                "students_requirements_id" => $this->students_requirements_id,
                "students_requirements_remarks" => $this->students_requirements_remarks,
                "students_requirements_created" => $this->students_requirements_created,
                "students_requirements_datetime" => $this->students_requirements_datetime,
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
            $sql = "select ";
            $sql .= "students_requirements_aid, ";
            $sql .= "students_requirements_is_active, ";
            $sql .= "students_requirements_student_id, ";
            $sql .= "students_requirements_sy_id, ";
            $sql .= "students_requirements_remarks, ";
            $sql .= "students_requirements_id ";
            $sql .= "from {$this->tblRequirement} ";
            $sql .= "where students_requirements_student_id = :students_requirements_student_id";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "students_requirements_student_id" => $this->students_requirements_student_id,
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
            $sql .= "where students_requirements_aid = :students_requirements_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "students_requirements_aid" => $this->students_requirements_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
