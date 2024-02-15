<?php
class Staff
{
    public $settings_staff_aid;
    public $settings_staff_is_active;
    public $settings_staff_fname;
    public $settings_staff_lname;
    public $settings_staff_email;
    public $settings_staff_created_at;
    public $settings_staff_updated_at;

    public $connection;
    public $lastInsertedId;
    public $settings_staff_start;
    public $settings_staff_total;
    public $settings_staff_search;

    public $tblStaff;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblStaff = "fcav2_settings_staff";
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblStaff} ";
            $sql .= "( settings_staff_is_active, ";
            $sql .= "settings_staff_fname, ";
            $sql .= "settings_staff_lname, ";
            $sql .= "settings_staff_email, ";
            $sql .= "settings_staff_created_at, ";
            $sql .= "settings_staff_updated_at ) values ( ";
            $sql .= ":settings_staff_is_active, ";
            $sql .= ":settings_staff_fname, ";
            $sql .= ":settings_staff_lname, ";
            $sql .= ":settings_staff_email, ";
            $sql .= ":settings_staff_created_at, ";
            $sql .= ":settings_staff_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_staff_is_active" => $this->settings_staff_is_active,
                "settings_staff_fname" => $this->settings_staff_fname,
                "settings_staff_lname" => $this->settings_staff_lname,
                "settings_staff_email" => $this->settings_staff_email,
                "settings_staff_created_at" => $this->settings_staff_created_at,
                "settings_staff_updated_at" => $this->settings_staff_updated_at,
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
            $sql .= "settings_staff_aid, ";
            $sql .= "settings_staff_is_active, ";
            $sql .= "settings_staff_fname, ";
            $sql .= "settings_staff_lname, ";
            $sql .= "settings_staff_email ";
            $sql .= "from {$this->tblStaff} ";
            $sql .= "order by settings_staff_is_active desc, ";
            $sql .= "settings_staff_fname ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read limit
    public function readLimit()
    {
        try {
            $sql = "select ";
            $sql .= "settings_staff_aid, ";
            $sql .= "settings_staff_is_active, ";
            $sql .= "settings_staff_fname, ";
            $sql .= "settings_staff_lname, ";
            $sql .= "settings_staff_email ";
            $sql .= "from {$this->tblStaff} ";
            $sql .= "order by settings_staff_is_active desc, ";
            $sql .= "settings_staff_fname ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->settings_staff_start - 1,
                "total" => $this->settings_staff_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // search
    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "settings_staff_aid, ";
            $sql .= "settings_staff_is_active, ";
            $sql .= "settings_staff_fname, ";
            $sql .= "settings_staff_lname, ";
            $sql .= "settings_staff_email ";
            $sql .= "from {$this->tblStaff} ";
            $sql .= "where ( ";
            $sql .= "settings_staff_fname like :settings_staff_fname ";
            $sql .= "or settings_staff_lname like :settings_staff_lname ";
            $sql .= "or settings_staff_email like :settings_staff_email ";
            $sql .= ") ";
            $sql .= "order by settings_staff_is_active desc, ";
            $sql .= "settings_staff_fname ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_staff_fname" => "%{$this->settings_staff_search}%",
                "settings_staff_lname" => "%{$this->settings_staff_search}%",
                "settings_staff_email" => "%{$this->settings_staff_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tblStaff} ";
            $sql .= "where settings_staff_aid = :settings_staff_aid ";
            $sql .= "order by user_other_fname asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_staff_aid" => $this->settings_staff_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblStaff} set ";
            $sql .= "settings_staff_fname = :settings_staff_fname, ";
            $sql .= "settings_staff_lname = :settings_staff_lname, ";
            $sql .= "settings_staff_email = :settings_staff_email, ";
            $sql .= "settings_staff_updated_at = :settings_staff_updated_at ";
            $sql .= "where settings_staff_aid  = :settings_staff_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_staff_fname" => $this->settings_staff_fname,
                "settings_staff_lname" => $this->settings_staff_lname,
                "settings_staff_email" => $this->settings_staff_email,
                "settings_staff_updated_at" => $this->settings_staff_updated_at,
                "settings_staff_aid" => $this->settings_staff_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblStaff} set ";
            $sql .= "settings_staff_is_active = :settings_staff_is_active, ";
            $sql .= "settings_staff_updated_at = :settings_staff_updated_at ";
            $sql .= "where settings_staff_aid  = :settings_staff_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_staff_is_active" => $this->settings_staff_is_active,
                "settings_staff_updated_at" => $this->settings_staff_updated_at,
                "settings_staff_aid" => $this->settings_staff_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblStaff} ";
            $sql .= "where settings_staff_aid = :settings_staff_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_staff_aid" => $this->settings_staff_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // validatior 

    // email
    public function checkEmail()
    {
        try {
            $sql = "select settings_staff_email from {$this->tblStaff} ";
            $sql .= "where settings_staff_email = :settings_staff_email ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_staff_email" => "{$this->settings_staff_email}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
