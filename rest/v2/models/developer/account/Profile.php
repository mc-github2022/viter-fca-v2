<?php
class Profile
{
    public $user_system_aid;
    public $user_system_fname;
    public $user_system_lname;
    public $user_system_email;

    public $connection;
    public $lastInsertedId;
    public $contact_start;
    public $contact_total;
    public $contact_search;
    public $tblUserSystem;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblUserSystem = "fca_settings_user_system";
    }


    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblUserSystem} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function update()
    {
        try {
            $sql = "update {$this->tblUserSystem} set ";
            $sql .= "user_system_fname = :user_system_fname, ";
            $sql .= "user_system_lname = :user_system_lname, ";
            $sql .= "user_system_email = :user_system_email ";
            $sql .= "where user_system_aid = :user_system_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_system_fname" => $this->user_system_fname,
                "user_system_lname" => $this->user_system_lname,
                "user_system_email" => $this->user_system_email,
                "user_system_aid" => $this->user_system_aid,
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
            $sql = "select contact_name from {$this->tblInfoContact} ";
            $sql .= "where contact_name = :contact_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "contact_name" => "{$this->contact_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
