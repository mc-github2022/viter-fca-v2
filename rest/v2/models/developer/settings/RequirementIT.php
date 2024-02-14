<?php
class RequirementIT
{
    public $requirement_it_aid;
    public $requirement_it_active;
    public $requirement_it_department_id;

    public $requirement_it_name;
    public $requirement_it_created;
    public $requirement_it_datetime;

    public $connection;
    public $lastInsertedId;
    public $requirement_it_start;
    public $requirement_it_total;
    public $requirement_it_search;

    public $tblRequirementIT;
    public $tblDepartment;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblRequirementIT = "fcav2_settings_requirement_it";
        $this->tblDepartment = "fcav2_settings_department";
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblRequirementIT} ";
            $sql .= "( requirement_it_active, ";
            $sql .= "requirement_it_name, ";
            $sql .= "requirement_it_department_id, ";
            $sql .= "requirement_it_created, ";
            $sql .= "requirement_it_datetime ) values ( ";
            $sql .= ":requirement_it_active, ";
            $sql .= ":requirement_it_name, ";
            $sql .= ":requirement_it_department_id, ";
            $sql .= ":requirement_it_created, ";
            $sql .= ":requirement_it_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "requirement_it_active" => $this->requirement_it_active,
                "requirement_it_name" => $this->requirement_it_name,
                "requirement_it_department_id" => $this->requirement_it_department_id,
                "requirement_it_created" => $this->requirement_it_created,
                "requirement_it_datetime" => $this->requirement_it_datetime,
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
            $sql = "select * from {$this->tblRequirementIT} as it, ";
            $sql .= "{$this->tblDepartment} as dept ";
            $sql .= "where it.requirement_it_department_id = dept.department_aid ";
            $sql .= "order by requirement_it_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblRequirementIT} set ";
            $sql .= "requirement_it_department_id = :requirement_it_department_id, ";
            $sql .= "requirement_it_name = :requirement_it_name, ";
            $sql .= "requirement_it_datetime = :requirement_it_datetime ";
            $sql .= "where requirement_it_aid = :requirement_it_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "requirement_it_department_id" => $this->requirement_it_department_id,
                "requirement_it_name" => $this->requirement_it_name,
                "requirement_it_datetime" => $this->requirement_it_datetime,
                "requirement_it_aid" => $this->requirement_it_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblRequirementIT} set ";
            $sql .= "requirement_it_active = :requirement_it_active, ";
            $sql .= "requirement_it_datetime = :requirement_it_datetime ";
            $sql .= "where requirement_it_aid  = :requirement_it_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "requirement_it_active" => $this->requirement_it_active,
                "requirement_it_datetime" => $this->requirement_it_datetime,
                "requirement_it_aid" => $this->requirement_it_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblRequirementIT} ";
            $sql .= "where requirement_it_aid = :requirement_it_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "requirement_it_aid" => $this->requirement_it_aid,
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
            $sql = "select requirement_it_name from {$this->tblRequirementIT} ";
            $sql .= "where requirement_it_name = :requirement_it_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "requirement_it_name" => "{$this->requirement_it_name}",
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
            $sql .= "where employee_requirement_it_id = :requirement_it_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "requirement_it_aid" => $this->requirement_it_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
