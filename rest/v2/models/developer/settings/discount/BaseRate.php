<?php
class BaseRate
{
    public $settings_base_rate_aid;
    public $settings_base_rate_is_active;
    public $settings_base_rate_name;
    public $settings_base_rate_created;
    public $settings_base_rate_updated;

    public $connection;
    public $lastInsertedId;
    public $tblBaseRate;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblBaseRate = "fcav2_settings_base_rate";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblBaseRate} ";
            $sql .= "( settings_base_rate_is_active, ";
            $sql .= "settings_base_rate_name, ";
            $sql .= "settings_base_rate_updated, ";
            $sql .= "settings_base_rate_created ) values ( ";
            $sql .= ":settings_base_rate_is_active, ";
            $sql .= ":settings_base_rate_name, ";
            $sql .= ":settings_base_rate_updated, ";
            $sql .= ":settings_base_rate_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_base_rate_is_active" => $this->settings_base_rate_is_active,
                "settings_base_rate_name" => $this->settings_base_rate_name,
                "settings_base_rate_updated" => $this->settings_base_rate_updated,
                "settings_base_rate_created" => $this->settings_base_rate_created,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read all
    public function readAll()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= " {$this->tblBaseRate} ";
            $sql .= "order by settings_base_rate_is_active desc, ";
            $sql .= "settings_base_rate_name asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    // read by id
    public function readById()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= " {$this->tblBaseRate} ";
            $sql .= "where settings_base_rate_aid = :settings_base_rate_aid, ";
            $sql .= "order by settings_base_rate_is_active desc, ";
            $sql .= "settings_base_rate_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_base_rate_aid" => $this->settings_base_rate_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update
    public function update()
    {
        try {
            $sql = "update {$this->tblBaseRate} set ";
            $sql .= "settings_base_rate_name = :settings_base_rate_name, ";
            $sql .= "settings_base_rate_updated = :settings_base_rate_updated ";
            $sql .= "where settings_base_rate_aid = :settings_base_rate_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_base_rate_name" => $this->settings_base_rate_name,
                "settings_base_rate_updated" => $this->settings_base_rate_updated,
                "settings_base_rate_aid" => $this->settings_base_rate_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // active
    public function active()
    {
        try {
            $sql = "update {$this->tblBaseRate} set ";
            $sql .= "settings_base_rate_is_active = :settings_base_rate_is_active, ";
            $sql .= "settings_base_rate_updated = :settings_base_rate_updated ";
            $sql .= "where settings_base_rate_aid = :settings_base_rate_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_base_rate_is_active" => $this->settings_base_rate_is_active,
                "settings_base_rate_updated" => $this->settings_base_rate_updated,
                "settings_base_rate_aid" => $this->settings_base_rate_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // delete
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblBaseRate} ";
            $sql .= "where settings_base_rate_aid = :settings_base_rate_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_base_rate_aid" => $this->settings_base_rate_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    // name
    public function checkName()
    {
        try {
            $sql = "select settings_base_rate_name from {$this->tblBaseRate} ";
            $sql .= "where settings_base_rate_name = :settings_base_rate_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_base_rate_name" => "{$this->settings_base_rate_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // // read all
    // public function checkAssociation()
    // {
    //     try {
    //         $sql = "select ";
    //         $sql .= "* ";
    //         $sql .= "from ";
    //         $sql .= " {$this->tblDiscount} ";
    //         $sql .= "where discount_category_id = :discount_category_id ";
    //         $sql .= "order by discount_is_active desc ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "discount_category_id" => $this->settings_base_rate_aid,
    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }
}
