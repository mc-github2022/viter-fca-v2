<?php
class InfoParent
{
    public $parents_aid;
    public $parents_is_active;
    public $parents_student_id;
    public $parents_relationship_id;
    public $parents_salutation;
    public $parents_is_reside;
    public $parents_fname;
    public $parents_mname;
    public $parents_maiden_name;
    public $parents_lname;
    public $parents_email;
    public $parents_mobile;
    public $parents_landline;
    public $parents_address;
    public $parents_province;
    public $parents_city;
    public $parents_zipcode;
    public $parents_country;
    public $parents_religion;
    public $parents_occupation;

    public $parents_fname_old;
    public $parents_lname_old;

    public $parents_created;
    public $parents_datetime;

    public $connection;
    public $lastInsertedId;
    public $parents_start;
    public $parents_total;
    public $parents_search;

    public $fullname;

    public $tblParent;
    public $tblRelationship;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblParent = "fcav2_parents";
        $this->tblRelationship = "fcav2_settings_relationship";
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblParent} ";
            $sql .= "( parents_student_id, ";
            $sql .= "parents_relationship_id, ";
            $sql .= "parents_salutation, ";
            $sql .= "parents_is_reside, ";
            $sql .= "parents_fname, ";
            $sql .= "parents_mname, ";
            $sql .= "parents_maiden_name, ";
            $sql .= "parents_lname, ";
            $sql .= "parents_email, ";
            $sql .= "parents_mobile, ";
            $sql .= "parents_landline, ";
            $sql .= "parents_address, ";
            $sql .= "parents_province, ";
            $sql .= "parents_city, ";
            $sql .= "parents_zipcode, ";
            $sql .= "parents_country, ";
            $sql .= "parents_religion, ";
            $sql .= "parents_occupation, ";
            $sql .= "parents_datetime, ";
            $sql .= "parents_created ) values ( ";
            $sql .= ":parents_student_id, ";
            $sql .= ":parents_relationship_id, ";
            $sql .= ":parents_salutation, ";
            $sql .= ":parents_is_reside, ";
            $sql .= ":parents_fname, ";
            $sql .= ":parents_mname, ";
            $sql .= ":parents_maiden_name, ";
            $sql .= ":parents_lname, ";
            $sql .= ":parents_email, ";
            $sql .= ":parents_mobile, ";
            $sql .= ":parents_landline, ";
            $sql .= ":parents_address, ";
            $sql .= ":parents_province, ";
            $sql .= ":parents_city, ";
            $sql .= ":parents_zipcode, ";
            $sql .= ":parents_country, ";
            $sql .= ":parents_religion, ";
            $sql .= ":parents_occupation, ";
            $sql .= ":parents_datetime, ";
            $sql .= ":parents_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parents_student_id" => $this->parents_student_id,
                "parents_relationship_id" => $this->parents_relationship_id,
                "parents_salutation" => $this->parents_salutation,
                "parents_is_reside" => $this->parents_is_reside,
                "parents_fname" => $this->parents_fname,
                "parents_mname" => $this->parents_mname,
                "parents_maiden_name" => $this->parents_maiden_name,
                "parents_lname" => $this->parents_lname,
                "parents_email" => $this->parents_email,
                "parents_mobile" => $this->parents_mobile,
                "parents_landline" => $this->parents_landline,
                "parents_address" => $this->parents_address,
                "parents_province" => $this->parents_province,
                "parents_city" => $this->parents_city,
                "parents_zipcode" => $this->parents_zipcode,
                "parents_country" => $this->parents_country,
                "parents_religion" => $this->parents_religion,
                "parents_occupation" => $this->parents_occupation,
                "parents_datetime" => $this->parents_datetime,
                "parents_created" => $this->parents_created,
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
            $sql .= "from {$this->tblParent} ";
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
            $sql .= "from {$this->tblParent} as parent ";
            $sql .= "where parent.parents_aid = :parents_aid ";
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
            $sql = "update {$this->tblParent} set ";
            $sql .= "parents_student_id = :parents_student_id, ";
            $sql .= "parents_relationship_id = :parents_relationship_id, ";
            $sql .= "parents_salutation = :parents_salutation, ";
            $sql .= "parents_is_reside = :parents_is_reside, ";
            $sql .= "parents_fname = :parents_fname, ";
            $sql .= "parents_mname = :parents_mname, ";
            $sql .= "parents_lname = :parents_lname, ";
            $sql .= "parents_maiden_name = :parents_maiden_name, ";
            $sql .= "parents_email = :parents_email, ";
            $sql .= "parents_mobile	 = :parents_mobile	, ";
            $sql .= "parents_landline = :parents_landline, ";
            $sql .= "parents_address = :parents_address, ";
            $sql .= "parents_province = :parents_province, ";
            $sql .= "parents_city = :parents_city, ";
            $sql .= "parents_zipcode = :parents_zipcode, ";
            $sql .= "parents_country = :parents_country, ";
            $sql .= "parents_religion = :parents_religion, ";
            $sql .= "parents_occupation = :parents_occupation, ";
            $sql .= "parents_created = :parents_created ";
            $sql .= "where parents_aid  = :parents_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parents_student_id" => $this->parents_student_id,
                "parents_relationship_id" => $this->parents_relationship_id,
                "parents_salutation" => $this->parents_salutation,
                "parents_is_reside" => $this->parents_is_reside,
                "parents_fname" => $this->parents_fname,
                "parents_mname" => $this->parents_mname,
                "parents_lname" => $this->parents_lname,
                "parents_maiden_name" => $this->parents_maiden_name,
                "parents_email" => $this->parents_email,
                "parents_mobile" => $this->parents_mobile,
                "parents_landline" => $this->parents_landline,
                "parents_address" => $this->parents_address,
                "parents_province" => $this->parents_province,
                "parents_city" => $this->parents_city,
                "parents_zipcode" => $this->parents_zipcode,
                "parents_country" => $this->parents_country,
                "parents_religion" => $this->parents_religion,
                "parents_occupation" => $this->parents_occupation,
                "parents_created" => $this->parents_created,
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
            $sql = "delete from {$this->tblParent} ";
            $sql .= "where parents_aid  = :parents_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parents_aid " => $this->parents_aid ,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkName()
    {
        try {
            $sql = "select parents_fname, ";
            $sql .= "parents_lname ";
            $sql .= "from {$this->tblParent} ";
            $sql .= "where parents_fname = :parents_fname ";
            $sql .= "and parents_lname = :parents_lname ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parents_fname" => "{$this->parents_fname}",
                "parents_lname" => "{$this->parents_lname}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
