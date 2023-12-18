<?php
class RequirementFinance
{
    public $requirement_finance_aid;
    public $requirement_finance_active;
    public $requirement_finance_department_id;
    
    public $requirement_finance_name;
    public $requirement_finance_created;
    public $requirement_finance_datetime;

    public $connection;
    public $lastInsertedId;
    public $requirement_finance_start;
    public $requirement_finance_total;
    public $requirement_finance_search;

    public $tblRequirementFinance;
    public $tblDepartment;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblRequirementFinance = "fca_settings_requirement_finance";
        $this->tblDepartment = "fca_settings_department";
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblRequirementFinance} ";
            $sql .= "( requirement_finance_active, ";
            $sql .= "requirement_finance_name, ";
            $sql .= "requirement_finance_department_id, ";
            $sql .= "requirement_finance_created, ";
            $sql .= "requirement_finance_datetime ) values ( ";
            $sql .= ":requirement_finance_active, ";
            $sql .= ":requirement_finance_name, ";
            $sql .= ":requirement_finance_department_id, ";
            $sql .= ":requirement_finance_created, ";
            $sql .= ":requirement_finance_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "requirement_finance_active" => $this->requirement_finance_active,
                "requirement_finance_name" => $this->requirement_finance_name,
                "requirement_finance_department_id" => $this->requirement_finance_department_id,                
                "requirement_finance_created" => $this->requirement_finance_created,
                "requirement_finance_datetime" => $this->requirement_finance_datetime,
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
            $sql = "select * from {$this->tblRequirementFinance} as finance, ";
            $sql .= "{$this->tblDepartment} as dept ";
            $sql .= "where finance.requirement_finance_department_id = dept.department_aid ";
            $sql .= "order by requirement_finance_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblRequirementFinance} set ";
            $sql .= "requirement_finance_department_id = :requirement_finance_department_id, ";
            $sql .= "requirement_finance_name = :requirement_finance_name, ";
            $sql .= "requirement_finance_datetime = :requirement_finance_datetime ";
            $sql .= "where requirement_finance_aid = :requirement_finance_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "requirement_finance_department_id" => $this->requirement_finance_department_id,
                "requirement_finance_name" => $this->requirement_finance_name,
                "requirement_finance_datetime" => $this->requirement_finance_datetime,
                "requirement_finance_aid" => $this->requirement_finance_aid ,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblRequirementFinance} set ";
            $sql .= "requirement_finance_active = :requirement_finance_active, ";
            $sql .= "requirement_finance_datetime = :requirement_finance_datetime ";
            $sql .= "where requirement_finance_aid  = :requirement_finance_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "requirement_finance_active" => $this->requirement_finance_active,
                "requirement_finance_datetime" => $this->requirement_finance_datetime,
                "requirement_finance_aid" => $this->requirement_finance_aid ,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblRequirementFinance} ";
            $sql .= "where requirement_finance_aid = :requirement_finance_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "requirement_finance_aid" => $this->requirement_finance_aid,
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
            $sql = "select requirement_finance_name from {$this->tblRequirementFinance} ";
            $sql .= "where requirement_finance_name = :requirement_finance_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "requirement_finance_name" => "{$this->requirement_finance_name}",
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
            $sql .= "where employee_requirement_finance_id = :requirement_finance_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "requirement_finance_aid" => $this->requirement_finance_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
