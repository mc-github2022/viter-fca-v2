<?php
class Parents
{
    public $parents_aid;
    public $parents_is_active;
    public $parents_fname;
    public $parents_lname;
    public $parents_email;
    public $parents_created;
    public $parents_datetime;

    public $connection;
    public $lastInsertedId;
    public $parents_start;
    public $parents_total;
    public $parents_search;

    public $tblStaff;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblStaff = "fcav2_parents";
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblStaff} ";
            $sql .= "( parents_is_active, ";
            $sql .= "parents_fname, ";
            $sql .= "parents_lname, ";
            $sql .= "parents_email, ";
            $sql .= "parents_created, ";
            $sql .= "parents_datetime ) values ( ";
            $sql .= ":parents_is_active, ";
            $sql .= ":parents_fname, ";
            $sql .= ":parents_lname, ";
            $sql .= ":parents_email, ";
            $sql .= ":parents_created, ";
            $sql .= ":parents_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parents_is_active" => $this->parents_is_active,
                "parents_fname" => $this->parents_fname,
                "parents_lname" => $this->parents_lname,
                "parents_email" => $this->parents_email,
                "parents_created" => $this->parents_created,
                "parents_datetime" => $this->parents_datetime,
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
            $sql .= "parents_aid, ";
            $sql .= "parents_is_active, ";
            $sql .= "CONCAT(parents_fname, ' ', parents_lname) as parents_fullname, ";
            $sql .= "parents_email ";
            $sql .= "from {$this->tblStaff} ";
            $sql .= "order by parents_is_active desc, ";
            $sql .= "parents_fname ";
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
            $sql .= "parents_aid, ";
            $sql .= "parents_is_active, ";
            $sql .= "CONCAT(parents_fname, ' ', parents_lname) as parents_fullname, ";
            $sql .= "parents_email ";
            $sql .= "from {$this->tblStaff} ";
            $sql .= "order by parents_is_active desc, ";
            $sql .= "parents_fname ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->parents_start - 1,
                "total" => $this->parents_total,
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
            $sql .= "parents_aid, ";
            $sql .= "parents_is_active, ";
            $sql .= "CONCAT(parents_fname, ' ', parents_lname) as parents_fullname, ";
            $sql .= "parents_email ";
            $sql .= "from {$this->tblStaff} ";
            $sql .= "where ( ";
            $sql .= "parents_fname like :parents_fname ";
            $sql .= "or parents_lname like :parents_lname ";
            $sql .= "or parents_email like :parents_email ";
            $sql .= ") ";
            $sql .= "order by parents_is_active desc, ";
            $sql .= "parents_fname ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parents_fname" => "%{$this->parents_search}%",
                "parents_lname" => "%{$this->parents_search}%",
                "parents_email" => "%{$this->parents_search}%",
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
            $sql .= "where parents_aid = :parents_aid ";
            $sql .= "order by user_other_fname asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parents_aid" => $this->parents_aid,
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
            $sql .= "parents_fname = :parents_fname, ";
            $sql .= "parents_lname = :parents_lname, ";
            $sql .= "parents_email = :parents_email, ";
            $sql .= "parents_datetime = :parents_datetime ";
            $sql .= "where parents_aid  = :parents_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parents_fname" => $this->parents_fname,
                "parents_lname" => $this->parents_lname,
                "parents_email" => $this->parents_email,
                "parents_datetime" => $this->parents_datetime,
                "parents_aid" => $this->parents_aid,
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
            $sql .= "parents_is_active = :parents_is_active, ";
            $sql .= "parents_datetime = :parents_datetime ";
            $sql .= "where parents_aid  = :parents_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parents_is_active" => $this->parents_is_active,
                "parents_datetime" => $this->parents_datetime,
                "parents_aid" => $this->parents_aid,
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
            $sql .= "where parents_aid = :parents_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parents_aid" => $this->parents_aid,
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
            $sql = "select parents_email from {$this->tblStaff} ";
            $sql .= "where parents_email = :parents_email ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parents_email" => "{$this->parents_email}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
