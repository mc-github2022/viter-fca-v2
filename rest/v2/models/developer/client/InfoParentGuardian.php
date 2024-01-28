<?php
class InfoParentGuardian
{
    public $parent_guardian_info_aid;
    public $parent_guardian_info_user_id;
    public $parent_guardian_info_relationship_id;
    public $parent_guardian_info_salutation;
    public $parent_guardian_info_reside;
    public $parent_guardian_info_fname;
    public $parent_guardian_info_mname;
    public $parent_guardian_info_lname;
    public $parent_guardian_info_maiden_name;
    public $parent_guardian_info_email;
    public $parent_guardian_info_mobile;
    public $parent_guardian_info_landline;
    public $parent_guardian_info_address;
    public $parent_guardian_info_province;
    public $parent_guardian_info_city;
    public $parent_guardian_info_zipcode;
    public $parent_guardian_info_religion;
    public $parent_guardian_info_occupation;

    public $parent_guardian_info_lname_old;
    public $parent_guardian_info_fname_old;


    public $parent_guardian_info_created;
    public $parent_guardian_info_datetime;

    public $connection;
    public $lastInsertedId;
    public $parent_guardian_info_start;
    public $parent_guardian_info_total;
    public $parent_guardian_info_search;

    public $fullname;

    public $tblInfoParentGuardian;
    public $tblParentRelationship;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblParentGuardian = "fca_info_parent_guardian";
        $this->tblRelationship = "fca_settings_relationship";
        
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblParentGuardian} ";
            $sql .= "( parent_guardian_info_user_id, ";
            $sql .= "parent_guardian_info_relationship_id, ";
            $sql .= "parent_guardian_info_salutation, ";
            $sql .= "parent_guardian_info_reside, ";
            $sql .= "parent_guardian_info_fname, ";
            $sql .= "parent_guardian_info_mname, ";
            $sql .= "parent_guardian_info_maiden_name, ";
            $sql .= "parent_guardian_info_lname, ";
            $sql .= "parent_guardian_info_email, ";
            $sql .= "parent_guardian_info_mobile, ";
            $sql .= "parent_guardian_info_landline, ";
            $sql .= "parent_guardian_info_address, ";
            $sql .= "parent_guardian_info_province, ";
            $sql .= "parent_guardian_info_city, ";
            $sql .= "parent_guardian_info_zipcode, ";
            $sql .= "parent_guardian_info_religion, ";
            $sql .= "parent_guardian_info_occupation, ";
            $sql .= "parent_guardian_info_created, ";
            $sql .= "parent_guardian_info_datetime ) values ( ";
            $sql .= ":parent_guardian_info_user_id, ";
            $sql .= ":parent_guardian_info_relationship_id, ";
            $sql .= ":parent_guardian_info_salutation, ";
            $sql .= ":parent_guardian_info_reside, ";
            $sql .= ":parent_guardian_info_fname, ";
            $sql .= ":parent_guardian_info_mname, ";
            $sql .= ":parent_guardian_info_maiden_name, ";
            $sql .= ":parent_guardian_info_lname, ";
            $sql .= ":parent_guardian_info_email, ";
            $sql .= ":parent_guardian_info_mobile, ";
            $sql .= ":parent_guardian_info_landline, ";
            $sql .= ":parent_guardian_info_address, ";
            $sql .= ":parent_guardian_info_province, ";
            $sql .= ":parent_guardian_info_city, ";
            $sql .= ":parent_guardian_info_zipcode, ";
            $sql .= ":parent_guardian_info_religion, ";
            $sql .= ":parent_guardian_info_occupation, ";
            $sql .= ":parent_guardian_info_created, ";
            $sql .= ":parent_guardian_info_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parent_guardian_info_user_id" => $this->parent_guardian_info_user_id,
                "parent_guardian_info_relationship_id" => $this->parent_guardian_info_relationship_id,
                "parent_guardian_info_salutation" => $this->parent_guardian_info_salutation,
                "parent_guardian_info_reside" => $this->parent_guardian_info_reside,
                "parent_guardian_info_fname" => $this->parent_guardian_info_fname,
                "parent_guardian_info_mname" => $this->parent_guardian_info_mname,
                "parent_guardian_info_maiden_name" => $this->parent_guardian_info_maiden_name,
                "parent_guardian_info_lname" => $this->parent_guardian_info_lname,
                "parent_guardian_info_email" => $this->parent_guardian_info_email,
                "parent_guardian_info_mobile" => $this->parent_guardian_info_mobile,
                "parent_guardian_info_landline" => $this->parent_guardian_info_landline,
                "parent_guardian_info_address" => $this->parent_guardian_info_address,
                "parent_guardian_info_province" => $this->parent_guardian_info_province,
                "parent_guardian_info_city" => $this->parent_guardian_info_city,
                "parent_guardian_info_zipcode" => $this->parent_guardian_info_zipcode,
                "parent_guardian_info_religion" => $this->parent_guardian_info_religion,
                "parent_guardian_info_occupation" => $this->parent_guardian_info_occupation,
                "parent_guardian_info_created" => $this->parent_guardian_info_created,
                "parent_guardian_info_datetime" => $this->parent_guardian_info_datetime,
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
            $sql .= "from {$this->tblParentGuardian} as parent, ";
            $sql .= "{$this->tblRelationship} as relationship ";
            $sql .= " where parent.parent_guardian_info_relationship_id = relationship.relationship_aid ";
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readById()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblParentGuardian} as parent, ";
            $sql .= "{$this->tblRelationship} as relationship ";
            $sql .= "where parent.parent_guardian_info_user_id = :parent_guardian_info_user_id ";
            $sql .= "and parent.parent_guardian_info_relationship_id = relationship.relationship_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parent_guardian_info_user_id" => $this->parent_guardian_info_user_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblParentGuardian} set ";
            $sql .= "parent_guardian_info_user_id = :parent_guardian_info_user_id, ";
            $sql .= "parent_guardian_info_relationship_id = :parent_guardian_info_relationship_id, ";
            $sql .= "parent_guardian_info_salutation = :parent_guardian_info_salutation, ";
            $sql .= "parent_guardian_info_reside = :parent_guardian_info_reside, ";
            $sql .= "parent_guardian_info_fname = :parent_guardian_info_fname, ";
            $sql .= "parent_guardian_info_mname = :parent_guardian_info_mname, ";
            $sql .= "parent_guardian_info_maiden_name = :parent_guardian_info_maiden_name, ";
            $sql .= "parent_guardian_info_lname = :parent_guardian_info_lname, ";
            $sql .= "parent_guardian_info_email = :parent_guardian_info_email, ";
            $sql .= "parent_guardian_info_mobile = :parent_guardian_info_mobile, ";
            $sql .= "parent_guardian_info_landline = :parent_guardian_info_landline, ";
            $sql .= "parent_guardian_info_address = :parent_guardian_info_address, ";
            $sql .= "parent_guardian_info_province = :parent_guardian_info_province, ";
            $sql .= "parent_guardian_info_city = :parent_guardian_info_city, ";
            $sql .= "parent_guardian_info_zipcode = :parent_guardian_info_zipcode, ";
            $sql .= "parent_guardian_info_religion = :parent_guardian_info_religion, ";
            $sql .= "parent_guardian_info_occupation = :parent_guardian_info_occupation, ";
            $sql .= "parent_guardian_info_datetime = :parent_guardian_info_datetime ";           
            $sql .= "where parent_guardian_info_aid  = :parent_guardian_info_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parent_guardian_info_aid" => $this->parent_guardian_info_aid,
                "parent_guardian_info_user_id" => $this->parent_guardian_info_user_id,
                "parent_guardian_info_relationship_id" => $this->parent_guardian_info_relationship_id,
                "parent_guardian_info_salutation" => $this->parent_guardian_info_salutation,
                "parent_guardian_info_reside" => $this->parent_guardian_info_reside,
                "parent_guardian_info_fname" => $this->parent_guardian_info_fname,
                "parent_guardian_info_mname" => $this->parent_guardian_info_mname,
                "parent_guardian_info_maiden_name" => $this->parent_guardian_info_maiden_name,
                "parent_guardian_info_lname" => $this->parent_guardian_info_lname,
                "parent_guardian_info_email" => $this->parent_guardian_info_email,
                "parent_guardian_info_mobile" => $this->parent_guardian_info_mobile,
                "parent_guardian_info_landline" => $this->parent_guardian_info_landline,
                "parent_guardian_info_address" => $this->parent_guardian_info_address,
                "parent_guardian_info_province" => $this->parent_guardian_info_province,
                "parent_guardian_info_city" => $this->parent_guardian_info_city,
                "parent_guardian_info_zipcode" => $this->parent_guardian_info_zipcode,
                "parent_guardian_info_religion" => $this->parent_guardian_info_religion,
                "parent_guardian_info_occupation" => $this->parent_guardian_info_occupation,
                "parent_guardian_info_datetime" => $this->parent_guardian_info_datetime,         
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

  
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblParentGuardian} ";
            $sql .= "where parent_guardian_info_aid = :parent_guardian_info_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parent_guardian_info_aid" => $this->parent_guardian_info_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkName()
    {
        try {
            $sql = "select parent_guardian_info_fname, ";
            $sql .= "parent_guardian_info_lname ";
            $sql .= "from {$this->tblParentGuardian} ";
            $sql .= "where parent_guardian_info_fname = :parent_guardian_info_fname ";
            $sql .= "and parent_guardian_info_lname = :parent_guardian_info_lname ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parent_guardian_info_fname" => "{$this->parent_guardian_info_fname}",
                "parent_guardian_info_lname" => "{$this->parent_guardian_info_lname}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

   




  




  
}
