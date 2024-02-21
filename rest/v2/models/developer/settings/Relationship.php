<?php
class Relationship
{
    public $relationship_aid;
    public $relationship_active;
    public $relationship_name;
    public $relationship_is_maiden;
    public $relationship_created;
    public $relationship_datetime;

    public $connection;
    public $lastInsertedId;
    public $relationship_start;
    public $relationship_total;
    public $relationship_search;
    public $tblRelationship;
    public $tblInfoParentGuardian;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblRelationship = "fcav2_settings_relationship";
        $this->tblInfoParentGuardian = "fcav2_guardian";
    }


    public function create()
    {
        try {
            $sql = "insert into {$this->tblRelationship} ";
            $sql .= "( relationship_active, ";
            $sql .= "relationship_name, ";
            $sql .= "relationship_is_maiden, ";
            $sql .= "relationship_created, ";
            $sql .= "relationship_datetime ) values ( ";
            $sql .= ":relationship_active, ";
            $sql .= ":relationship_name, ";
            $sql .= ":relationship_is_maiden, ";
            $sql .= ":relationship_created, ";
            $sql .= ":relationship_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "relationship_active" => $this->relationship_active,
                "relationship_name" => $this->relationship_name,
                "relationship_is_maiden" => $this->relationship_is_maiden,
                "relationship_created" => $this->relationship_created,
                "relationship_datetime" => $this->relationship_datetime,
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
            $sql = "select relationship_aid, ";
            $sql .= "relationship_active, ";
            $sql .= "relationship_name, ";
            $sql .= "relationship_is_maiden ";
            $sql .= "from {$this->tblRelationship} ";
            $sql .= "order by relationship_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblRelationship} set ";
            $sql .= "relationship_name = :relationship_name, ";
            $sql .= "relationship_is_maiden = :relationship_is_maiden, ";
            $sql .= "relationship_datetime = :relationship_datetime ";
            $sql .= "where relationship_aid  = :relationship_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "relationship_name" => $this->relationship_name,
                "relationship_is_maiden" => $this->relationship_is_maiden,
                "relationship_datetime" => $this->relationship_datetime,
                "relationship_aid" => $this->relationship_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblRelationship} set ";
            $sql .= "relationship_active = :relationship_active, ";
            $sql .= "relationship_datetime = :relationship_datetime ";
            $sql .= "where relationship_aid  = :relationship_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "relationship_active" => $this->relationship_active,
                "relationship_datetime" => $this->relationship_datetime,
                "relationship_aid" => $this->relationship_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblRelationship} ";
            $sql .= "where relationship_aid = :relationship_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "relationship_aid" => $this->relationship_aid,
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
            $sql = "select relationship_name from {$this->tblRelationship} ";
            $sql .= "where relationship_name = :relationship_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "relationship_name" => "{$this->relationship_name}",
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
            $sql = "select guardian_relationship_id ";
            $sql .= "from {$this->tblInfoParentGuardian} ";
            $sql .= "where guardian_relationship_id = :relationship_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "relationship_aid" => "{$this->relationship_aid}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
