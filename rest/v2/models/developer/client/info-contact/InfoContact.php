<?php
class InfoContact
{
    public $contact_aid;
    public $contact_user_id;
    public $contact_name;
    public $contact_email;
    public $contact_mobile;
    public $contact_landline;
    public $contact_level;
    public $contact_created;
    public $contact_datetime;

    public $connection;
    public $lastInsertedId;
    public $contact_start;
    public $contact_total;
    public $contact_search;
    public $tblInfoContact;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblInfoContact = "fca_info_contact";
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblInfoContact} ";
            $sql .= "( contact_user_id, ";
            $sql .= "contact_name, ";
            $sql .= "contact_email, ";
            $sql .= "contact_mobile, ";
            $sql .= "contact_landline, ";
            $sql .= "contact_level, ";
            $sql .= "contact_created, ";
            $sql .= "contact_datetime ) values ( ";
            $sql .= ":contact_user_id, ";
            $sql .= ":contact_name, ";
            $sql .= ":contact_email, ";
            $sql .= ":contact_mobile, ";
            $sql .= ":contact_landline, ";
            $sql .= ":contact_level, ";
            $sql .= ":contact_created, ";
            $sql .= ":contact_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "contact_user_id" => $this->contact_user_id,
                "contact_name" => $this->contact_name,
                "contact_email" => $this->contact_email,
                "contact_mobile" => $this->contact_mobile,
                "contact_landline" => $this->contact_landline,
                "contact_level" => $this->contact_level,
                "contact_created" => $this->contact_created,
                "contact_datetime" => $this->contact_datetime,
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
            $sql .= "where contact_user_id = :contact_user_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "contact_user_id" => $this->contact_user_id 
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
            $sql .= "contact_user_id = :contact_user_id, ";
            $sql .= "contact_name = :contact_name, ";
            $sql .= "contact_email = :contact_email, ";
            $sql .= "contact_mobile = :contact_mobile, ";
            $sql .= "contact_landline = :contact_landline, ";
            $sql .= "contact_level = :contact_level, ";
            $sql .= "contact_datetime = :contact_datetime ";
            $sql .= "where contact_aid  = :contact_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "contact_user_id" => $this->contact_user_id,
                "contact_name" => $this->contact_name,
                "contact_email" => $this->contact_email,
                "contact_mobile" => $this->contact_mobile,
                "contact_landline" => $this->contact_landline,
                "contact_level" => $this->contact_level,
                "contact_datetime" => $this->contact_datetime,
                "contact_aid" => $this->contact_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblStudent} set ";
            $sql .= "student_active = :student_active, ";
            $sql .= "student_datetime = :student_datetime ";
            $sql .= "where student_aid  = :student_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "student_active" => $this->student_active,
                "student_datetime" => $this->student_datetime,
                "student_aid" => $this->student_aid ,
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
            $sql .= "where contact_aid = :contact_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "contact_aid" => $this->contact_aid,
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

    // validator
    public function checkAssociation()
    {
        try {
            $sql = "select employee_last_name, ";
            $sql .= "employee_first_name, ";
            $sql .= "employee_aid ";
            $sql .= "from {$this->tblEmployee} ";
            $sql .= "where employee_student_id = :student_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "student_aid" => $this->student_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function ReadByStudentId()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblInfoContact} ";
            $sql .= "where contact_user_id = :contact_user_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "contact_user_id" => $this->contact_user_id 
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    
}
