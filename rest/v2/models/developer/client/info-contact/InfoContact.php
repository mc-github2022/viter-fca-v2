<?php
class InfoContact
{
    public $emergency_contact_aid;
    public $emergency_contact_parent_id;
    public $emergency_contact_name;
    public $emergency_contact_email;
    public $emergency_contact_mobile;
    public $emergency_contact_landline;
    public $emergency_contact_level;
    public $emergency_contact_created;
    public $emergency_contact_datetime;

    public $connection;
    public $lastInsertedId;
    public $contact_start;
    public $contact_total;
    public $contact_search;
    public $tblInfoContact;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblInfoContact = "fcav2_emergency_contact";
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblInfoContact} ";
            $sql .= "( emergency_contact_parent_id, ";
            $sql .= "emergency_contact_name, ";
            $sql .= "emergency_contact_email, ";
            $sql .= "emergency_contact_mobile, ";
            $sql .= "emergency_contact_landline, ";
            $sql .= "emergency_contact_level, ";
            $sql .= "emergency_contact_created, ";
            $sql .= "emergency_contact_datetime ) values ( ";
            $sql .= ":emergency_contact_parent_id, ";
            $sql .= ":emergency_contact_name, ";
            $sql .= ":emergency_contact_email, ";
            $sql .= ":emergency_contact_mobile, ";
            $sql .= ":emergency_contact_landline, ";
            $sql .= ":emergency_contact_level, ";
            $sql .= ":emergency_contact_created, ";
            $sql .= ":emergency_contact_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "emergency_contact_parent_id" => $this->emergency_contact_parent_id,
                "emergency_contact_name" => $this->emergency_contact_name,
                "emergency_contact_email" => $this->emergency_contact_email,
                "emergency_contact_mobile" => $this->emergency_contact_mobile,
                "emergency_contact_landline" => $this->emergency_contact_landline,
                "emergency_contact_level" => $this->emergency_contact_level,
                "emergency_contact_created" => $this->emergency_contact_created,
                "emergency_contact_datetime" => $this->emergency_contact_datetime,
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
            $sql .= "from {$this->tblInfoContact} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function readById()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblInfoContact} ";
            $sql .= "where emergency_contact_parent_id = :emergency_contact_parent_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "emergency_contact_parent_id" => $this->emergency_contact_parent_id
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function update()
    {
        try {
            $sql = "update {$this->tblInfoContact} set ";
            $sql .= "emergency_contact_parent_id = :emergency_contact_parent_id, ";
            $sql .= "emergency_contact_name = :emergency_contact_name, ";
            $sql .= "emergency_contact_email = :emergency_contact_email, ";
            $sql .= "emergency_contact_mobile = :emergency_contact_mobile, ";
            $sql .= "emergency_contact_landline = :emergency_contact_landline, ";
            $sql .= "emergency_contact_level = :emergency_contact_level, ";
            $sql .= "emergency_contact_datetime = :emergency_contact_datetime ";
            $sql .= "where emergency_contact_aid  = :emergency_contact_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "emergency_contact_parent_id" => $this->emergency_contact_parent_id,
                "emergency_contact_name" => $this->emergency_contact_name,
                "emergency_contact_email" => $this->emergency_contact_email,
                "emergency_contact_mobile" => $this->emergency_contact_mobile,
                "emergency_contact_landline" => $this->emergency_contact_landline,
                "emergency_contact_level" => $this->emergency_contact_level,
                "emergency_contact_datetime" => $this->emergency_contact_datetime,
                "emergency_contact_aid" => $this->emergency_contact_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }



    public function delete()
    {
        try {
            $sql = "delete from {$this->tblInfoContact} ";
            $sql .= "where emergency_contact_aid = :emergency_contact_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "emergency_contact_aid" => $this->emergency_contact_aid,
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
            $sql = "select emergency_contact_name from {$this->tblInfoContact} ";
            $sql .= "where emergency_contact_name = :emergency_contact_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "emergency_contact_name" => "{$this->emergency_contact_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }




    
}
