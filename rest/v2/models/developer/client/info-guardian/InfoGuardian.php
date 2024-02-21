<?php
class InfoGuardian
{
    public $guardian_aid;
    public $guardian_active;
    public $guardian_relationship_id;
    public $guardian_parent_id;
    public $guardian_is_reside;
    public $guardian_salutation;
    public $guardian_fname;
    public $guardian_mname;
    public $guardian_maiden_name;
    public $guardian_lname;
    public $guardian_email;
    public $guardian_mobile;
    public $guardian_landline;
    public $guardian_address;
    public $guardian_province;
    public $guardian_city;
    public $guardian_zipcode;
    public $guardian_country;
    public $guardian_religion;
    public $guardian_occupation;

    public $guardian_fname_old;
    public $guardian_lname_old;

    public $guardian_created;
    public $guardian_datetime;

    public $connection;
    public $lastInsertedId;
    public $guardian_start;
    public $guardian_total;
    public $guardian_search;

    public $fullname;

    public $tblGuardian;
    public $tblRelationship;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblGuardian = "fcav2_guardian";
        $this->tblRelationship = "fcav2_settings_relationship";
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblGuardian} ";
            $sql .= "( guardian_parent_id, ";
            $sql .= "guardian_relationship_id, ";
            $sql .= "guardian_salutation, ";
            $sql .= "guardian_is_reside, ";
            $sql .= "guardian_fname, ";
            $sql .= "guardian_mname, ";
            $sql .= "guardian_maiden_name, ";
            $sql .= "guardian_lname, ";
            $sql .= "guardian_email, ";
            $sql .= "guardian_mobile, ";
            $sql .= "guardian_landline, ";
            $sql .= "guardian_address, ";
            $sql .= "guardian_province, ";
            $sql .= "guardian_city, ";
            $sql .= "guardian_zipcode, ";
            $sql .= "guardian_country, ";
            $sql .= "guardian_religion, ";
            $sql .= "guardian_occupation, ";
            $sql .= "guardian_datetime, ";
            $sql .= "guardian_created ) values ( ";
            $sql .= ":guardian_parent_id, ";
            $sql .= ":guardian_relationship_id, ";
            $sql .= ":guardian_salutation, ";
            $sql .= ":guardian_is_reside, ";
            $sql .= ":guardian_fname, ";
            $sql .= ":guardian_mname, ";
            $sql .= ":guardian_maiden_name, ";
            $sql .= ":guardian_lname, ";
            $sql .= ":guardian_email, ";
            $sql .= ":guardian_mobile, ";
            $sql .= ":guardian_landline, ";
            $sql .= ":guardian_address, ";
            $sql .= ":guardian_province, ";
            $sql .= ":guardian_city, ";
            $sql .= ":guardian_zipcode, ";
            $sql .= ":guardian_country, ";
            $sql .= ":guardian_religion, ";
            $sql .= ":guardian_occupation, ";
            $sql .= ":guardian_datetime, ";
            $sql .= ":guardian_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "guardian_parent_id" => $this->guardian_parent_id,
                "guardian_relationship_id" => $this->guardian_relationship_id,
                "guardian_salutation" => $this->guardian_salutation,
                "guardian_is_reside" => $this->guardian_is_reside,
                "guardian_fname" => $this->guardian_fname,
                "guardian_mname" => $this->guardian_mname,
                "guardian_maiden_name" => $this->guardian_maiden_name,
                "guardian_lname" => $this->guardian_lname,
                "guardian_email" => $this->guardian_email,
                "guardian_mobile" => $this->guardian_mobile,
                "guardian_landline" => $this->guardian_landline,
                "guardian_address" => $this->guardian_address,
                "guardian_province" => $this->guardian_province,
                "guardian_city" => $this->guardian_city,
                "guardian_zipcode" => $this->guardian_zipcode,
                "guardian_country" => $this->guardian_country,
                "guardian_religion" => $this->guardian_religion,
                "guardian_occupation" => $this->guardian_occupation,
                "guardian_datetime" => $this->guardian_datetime,
                "guardian_created" => $this->guardian_created,
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
            $sql .= "from {$this->tblGuardian} ";
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
            $sql .= "from {$this->tblGuardian} as guardian,  ";
            $sql .= "{$this->tblRelationship} as relationship ";
            $sql .= "where guardian.guardian_relationship_id = relationship.relationship_aid ";
            $sql .= "and guardian.guardian_parent_id = :guardian_parent_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "guardian_parent_id" => $this->guardian_parent_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblGuardian} set ";
            $sql .= "guardian_relationship_id = :guardian_relationship_id, ";
            $sql .= "guardian_parent_id = :guardian_parent_id, ";
            $sql .= "guardian_salutation = :guardian_salutation, ";
            $sql .= "guardian_is_reside = :guardian_is_reside, ";
            $sql .= "guardian_fname = :guardian_fname, ";
            $sql .= "guardian_mname = :guardian_mname, ";
            $sql .= "guardian_lname = :guardian_lname, ";
            $sql .= "guardian_maiden_name = :guardian_maiden_name, ";
            $sql .= "guardian_email = :guardian_email, ";
            $sql .= "guardian_mobile = :guardian_mobile	, ";
            $sql .= "guardian_landline = :guardian_landline, ";
            $sql .= "guardian_address = :guardian_address, ";
            $sql .= "guardian_province = :guardian_province, ";
            $sql .= "guardian_city = :guardian_city, ";
            $sql .= "guardian_zipcode = :guardian_zipcode, ";
            $sql .= "guardian_country = :guardian_country, ";
            $sql .= "guardian_religion = :guardian_religion, ";
            $sql .= "guardian_occupation = :guardian_occupation, ";
            $sql .= "guardian_created = :guardian_created ";
            $sql .= "where guardian_aid  = :guardian_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "guardian_relationship_id" => $this->guardian_relationship_id,
                "guardian_parent_id" => $this->guardian_parent_id,
                "guardian_salutation" => $this->guardian_salutation,
                "guardian_is_reside" => $this->guardian_is_reside,
                "guardian_fname" => $this->guardian_fname,
                "guardian_mname" => $this->guardian_mname,
                "guardian_lname" => $this->guardian_lname,
                "guardian_maiden_name" => $this->guardian_maiden_name,
                "guardian_email" => $this->guardian_email,
                "guardian_mobile" => $this->guardian_mobile,
                "guardian_landline" => $this->guardian_landline,
                "guardian_address" => $this->guardian_address,
                "guardian_province" => $this->guardian_province,
                "guardian_city" => $this->guardian_city,
                "guardian_zipcode" => $this->guardian_zipcode,
                "guardian_country" => $this->guardian_country,
                "guardian_religion" => $this->guardian_religion,
                "guardian_occupation" => $this->guardian_occupation,
                "guardian_created" => $this->guardian_created,
                "guardian_aid" => $this->guardian_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function delete()
    {
        try {
            $sql = "delete from {$this->tblGuardian} ";
            $sql .= "where guardian_aid  = :guardian_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "guardian_aid" => $this->guardian_aid ,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkName()
    {
        try {
            $sql = "select guardian_fname, ";
            $sql .= "guardian_lname ";
            $sql .= "from {$this->tblGuardian} ";
            $sql .= "where guardian_fname = :guardian_fname ";
            $sql .= "and guardian_lname = :guardian_lname ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "guardian_fname" => "{$this->guardian_fname}",
                "guardian_lname" => "{$this->guardian_lname}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function checkBiologicalParent()
    {
        try {
            $sql = "select guardian_relationship_id, ";
            $sql .= "guardian_parent_id ";
            $sql .= "from {$this->tblGuardian} ";
            $sql .= "where guardian_relationship_id = :guardian_relationship_id ";
            $sql .= "and guardian_parent_id = :guardian_parent_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "guardian_relationship_id" => "{$this->guardian_relationship_id}",
                "guardian_parent_id" => "{$this->guardian_parent_id}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    
}
