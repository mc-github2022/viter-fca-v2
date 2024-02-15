<?php
class SystemMode
{
    public $system_mode_aid;
    public $system_mode_is_on;
    public $system_mode_name;
    public $system_mode_created;
    public $system_mode_updated;

    public $connection;
    public $lastInsertedId;
    public $department_start;
    public $department_total;
    public $department_search;
    public $tblSystemMode;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSystemMode = "fcav2_settings_system_mode";
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblSystemMode} ";
            $sql .= "( system_mode_is_on, ";
            $sql .= "system_mode_name, ";
            $sql .= "system_mode_created, ";
            $sql .= "system_mode_updated ) values ( ";
            $sql .= ":system_mode_is_on, ";
            $sql .= ":system_mode_name, ";
            $sql .= ":system_mode_created, ";
            $sql .= ":system_mode_updated ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "system_mode_is_on" => $this->system_mode_is_on,
                "system_mode_name" => $this->system_mode_name,
                "system_mode_created" => $this->system_mode_created,
                "system_mode_updated" => $this->system_mode_updated,
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
            $sql = "select system_mode_aid, ";
            $sql .= "system_mode_is_on, ";
            $sql .= "system_mode_name ";
            $sql .= "from {$this->tblSystemMode} ";
            $sql .= "order by system_mode_name asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // add column to database table
    public function addColumn($column_name)
    {
        try {
            $sql = "alter table {$this->tblSystemMode} ";
            $sql .= "add column system_mode_is_{$column_name} boolean ";
            $sql .= "NOT NULL ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }

        return $query;
    }

    // update
    public function updateColumnValue($column_name)
    {
        try {
            $sql = "update {$this->tblSystemMode} set ";
            $sql .= "system_mode_is_{$column_name} = '1', ";
            $sql .= "system_mode_updated = :system_mode_updated ";
            $sql .= "where system_mode_name = :system_mode_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "system_mode_updated" => $this->system_mode_updated,
                "system_mode_name" => $this->system_mode_name,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblSystemMode} set ";
            $sql .= "system_mode_name = :system_mode_name, ";
            $sql .= "system_mode_updated = :system_mode_updated ";
            $sql .= "where system_mode_aid  = :system_mode_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "system_mode_name" => $this->system_mode_name,
                "system_mode_updated" => $this->system_mode_updated,
                "system_mode_aid" => $this->system_mode_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblSystemMode} set ";
            $sql .= "system_mode_is_on = :system_mode_is_on, ";
            $sql .= "system_mode_updated = :system_mode_updated ";
            $sql .= "where system_mode_aid  = :system_mode_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "system_mode_is_on" => $this->system_mode_is_on,
                "system_mode_updated" => $this->system_mode_updated,
                "system_mode_aid" => $this->system_mode_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblSystemMode} ";
            $sql .= "where system_mode_aid = :system_mode_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "system_mode_aid" => $this->system_mode_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // drop column name to database table
    public function dropColumnName($column_name)
    {
        try {
            $sql = "alter table {$this->tblSystemMode} ";
            $sql .= "drop system_mode_is_{$column_name} ";

            $query = $this->connection->query($sql);
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
            $sql = "select system_mode_name from {$this->tblSystemMode} ";
            $sql .= "where system_mode_name = :system_mode_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "system_mode_name" => "{$this->system_mode_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function readByMaintenance()
    {
        try {
            $sql = "select system_mode_aid, ";
            $sql .= "system_mode_is_on, ";
            $sql .= "system_mode_name ";
            $sql .= "from {$this->tblSystemMode} ";
            $sql .= "where system_mode_is_maintenance = '1' ";
            $sql .= "and system_mode_is_on = '1' ";
            $sql .= "order by system_mode_name asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
