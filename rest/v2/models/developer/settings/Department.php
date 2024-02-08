<?php
class Department
{
    public $department_aid ;
    public $department_active;
    public $department_name;
    public $department_created;
    public $department_datetime;

    public $connection;
    public $lastInsertedId;
    public $department_start;
    public $department_total;
    public $department_search;
    public $tblDepartment;
    public $tblNotification;
    public $tblRequirementFinance;
    public $tblRequirementIT;
    public $tblRequirementRegistrar;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblDepartment = "fca_settings_department";
        $this->tblNotification = "fca_settings_notification";
        $this->tblRequirementFinance = "fca_settings_requirement_finance";
        $this->tblRequirementIT = "fca_settings_requirement_it";
        $this->tblRequirementRegistrar = "fca_settings_requirement_registrar";
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblDepartment} ";
            $sql .= "( department_active, ";
            $sql .= "department_name, ";
            $sql .= "department_created, ";
            $sql .= "department_datetime ) values ( ";
            $sql .= ":department_active, ";
            $sql .= ":department_name, ";
            $sql .= ":department_created, ";
            $sql .= ":department_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "department_active" => $this->department_active,
                "department_name" => $this->department_name,
                "department_created" => $this->department_created,
                "department_datetime" => $this->department_datetime,
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
            $sql = "select department_aid, ";
            $sql .= "department_active, ";
            $sql .= "department_name ";
            $sql .= "from {$this->tblDepartment} ";
            $sql .= "order by department_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblDepartment} set ";
            $sql .= "department_name = :department_name, ";
            $sql .= "department_datetime = :department_datetime ";
            $sql .= "where department_aid  = :department_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "department_name" => $this->department_name,
                "department_datetime" => $this->department_datetime,
                "department_aid" => $this->department_aid ,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblDepartment} set ";
            $sql .= "department_active = :department_active, ";
            $sql .= "department_datetime = :department_datetime ";
            $sql .= "where department_aid  = :department_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "department_active" => $this->department_active,
                "department_datetime" => $this->department_datetime,
                "department_aid" => $this->department_aid ,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblDepartment} ";
            $sql .= "where department_aid = :department_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "department_aid" => $this->department_aid,
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
            $sql = "select department_name from {$this->tblDepartment} ";
            $sql .= "where department_name = :department_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "department_name" => "{$this->department_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // validator
    public function checkAssociationNotification()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblNotification} ";
            $sql .= "where notification_department_id = :department_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "department_aid" => $this->department_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

     // validator
     public function checkAssociationRequirementFinance()
     {
         try {
             $sql = "select * ";
             $sql .= "from {$this->tblRequirementFinance} ";
             $sql .= "where requirement_finance_department_id = :department_aid ";
             $query = $this->connection->prepare($sql);
             $query->execute([
                 "department_aid" => $this->department_aid,
             ]);
         } catch (PDOException $ex) {
             $query = false;
         }
         return $query;
     }
     // validator
     public function checkAssociationRequirementRegistrar()
     {
         try {
             $sql = "select * ";
             $sql .= "from {$this->tblRequirementRegistrar} ";
             $sql .= "where requirement_registrar_department_id = :department_aid ";
             $query = $this->connection->prepare($sql);
             $query->execute([
                 "department_aid" => $this->department_aid,
             ]);
         } catch (PDOException $ex) {
             $query = false;
         }
         return $query;
     }

      // validator
      public function checkAssociationRequirementIT()
      {
          try {
              $sql = "select * ";
              $sql .= "from {$this->tblRequirementIT} ";
              $sql .= "where requirement_it_department_id = :department_aid ";
              $query = $this->connection->prepare($sql);
              $query->execute([
                  "department_aid" => $this->department_aid,
              ]);
          } catch (PDOException $ex) {
              $query = false;
          }
          return $query;
      }
}
