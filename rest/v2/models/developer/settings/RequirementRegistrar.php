<?php
class RequirementRegistrar
{
    public $requirement_registrar_aid;
    public $requirement_registrar_active;
    public $requirement_registrar_department_id;

    public $requirement_registrar_name;
    public $requirement_registrar_created;
    public $requirement_registrar_datetime;

    public $connection;
    public $lastInsertedId;
    public $requirement_registrar_start;
    public $requirement_registrar_total;
    public $requirement_registrar_search;

    public $tblRequirementRegistrar;
    public $tblDepartment;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblRequirementRegistrar = "fcav2_settings_requirement_registrar";
        $this->tblDepartment = "fcav2_settings_department";
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblRequirementRegistrar} ";
            $sql .= "( requirement_registrar_active, ";
            $sql .= "requirement_registrar_name, ";
            $sql .= "requirement_registrar_department_id, ";
            $sql .= "requirement_registrar_created, ";
            $sql .= "requirement_registrar_datetime ) values ( ";
            $sql .= ":requirement_registrar_active, ";
            $sql .= ":requirement_registrar_name, ";
            $sql .= ":requirement_registrar_department_id, ";
            $sql .= ":requirement_registrar_created, ";
            $sql .= ":requirement_registrar_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "requirement_registrar_active" => $this->requirement_registrar_active,
                "requirement_registrar_name" => $this->requirement_registrar_name,
                "requirement_registrar_department_id" => $this->requirement_registrar_department_id,
                "requirement_registrar_created" => $this->requirement_registrar_created,
                "requirement_registrar_datetime" => $this->requirement_registrar_datetime,
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

            $sql .= "from {$this->tblRequirementRegistrar} as registrar, ";
            $sql .= "{$this->tblDepartment} as dept ";
            $sql .= "where registrar.requirement_registrar_department_id = dept.department_aid ";
            $sql .= "order by requirement_registrar_aid ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblRequirementRegistrar} set ";
            $sql .= "requirement_registrar_department_id = :requirement_registrar_department_id, ";
            $sql .= "requirement_registrar_name = :requirement_registrar_name, ";
            $sql .= "requirement_registrar_datetime = :requirement_registrar_datetime ";
            $sql .= "where requirement_registrar_aid = :requirement_registrar_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "requirement_registrar_department_id" => $this->requirement_registrar_department_id,
                "requirement_registrar_name" => $this->requirement_registrar_name,
                "requirement_registrar_datetime" => $this->requirement_registrar_datetime,
                "requirement_registrar_aid" => $this->requirement_registrar_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblRequirementRegistrar} set ";
            $sql .= "requirement_registrar_active = :requirement_registrar_active, ";
            $sql .= "requirement_registrar_datetime = :requirement_registrar_datetime ";
            $sql .= "where requirement_registrar_aid  = :requirement_registrar_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "requirement_registrar_active" => $this->requirement_registrar_active,
                "requirement_registrar_datetime" => $this->requirement_registrar_datetime,
                "requirement_registrar_aid" => $this->requirement_registrar_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblRequirementRegistrar} ";
            $sql .= "where requirement_registrar_aid = :requirement_registrar_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "requirement_registrar_aid" => $this->requirement_registrar_aid,
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
            $sql = "select requirement_registrar_name from {$this->tblRequirementRegistrar} ";
            $sql .= "where requirement_registrar_name = :requirement_registrar_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "requirement_registrar_name" => "{$this->requirement_registrar_name}",
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
            $sql .= "where employee_requirement_registrar_id = :requirement_registrar_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "requirement_registrar_aid" => $this->requirement_registrar_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
