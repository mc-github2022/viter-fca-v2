<?php
class Scheme
{
    public $scheme_aid;
    public $scheme_active;
    public $scheme_name;
    public $scheme_created;
    public $scheme_datetime;

    public $connection;
    public $lastInsertedId;
    public $scheme_start;
    public $scheme_total;
    public $scheme_search;
    public $tblScheme;
    public $tblTuitionFee;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblScheme = "fcav2_settings_scheme";
        $this->tblTuitionFee = "fcav2_settings_tuition_fee";
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblScheme} ";
            $sql .= "( scheme_active, ";
            $sql .= "scheme_name, ";
            $sql .= "scheme_created, ";
            $sql .= "scheme_datetime ) values ( ";
            $sql .= ":scheme_active, ";
            $sql .= ":scheme_name, ";
            $sql .= ":scheme_created, ";
            $sql .= ":scheme_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "scheme_active" => $this->scheme_active,
                "scheme_name" => $this->scheme_name,
                "scheme_created" => $this->scheme_created,
                "scheme_datetime" => $this->scheme_datetime,
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
            $sql = "select scheme_aid, ";
            $sql .= "scheme_active, ";
            $sql .= "scheme_name ";
            $sql .= "from {$this->tblScheme} ";
            $sql .= "order by scheme_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblScheme} set ";
            $sql .= "scheme_name = :scheme_name, ";
            $sql .= "scheme_datetime = :scheme_datetime ";
            $sql .= "where scheme_aid  = :scheme_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "scheme_name" => $this->scheme_name,
                "scheme_datetime" => $this->scheme_datetime,
                "scheme_aid" => $this->scheme_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblScheme} set ";
            $sql .= "scheme_active = :scheme_active, ";
            $sql .= "scheme_datetime = :scheme_datetime ";
            $sql .= "where scheme_aid  = :scheme_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "scheme_active" => $this->scheme_active,
                "scheme_datetime" => $this->scheme_datetime,
                "scheme_aid" => $this->scheme_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblScheme} ";
            $sql .= "where scheme_aid = :scheme_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "scheme_aid" => $this->scheme_aid,
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
            $sql = "select scheme_name from {$this->tblScheme} ";
            $sql .= "where scheme_name = :scheme_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "scheme_name" => "{$this->scheme_name}",
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
            $sql .= "where tuition_fee_scheme_id = :scheme_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "scheme_aid" => $this->scheme_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
