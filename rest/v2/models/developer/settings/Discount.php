<?php
class Discount
{
    public $discount_aid;
    public $discount_is_active;
    public $discount_type;
    public $discount_tuition_fee;
    public $discount_entrance_fee;
    public $discount_category;
    public $discount_qualifications;
    public $discount_duration;
    public $discount_maintaining_grade;
    public $discount_requirement;
    public $discount_datetime;
    public $discount_created;

    public $connection;
    public $lastInsertedId;
    public $tblDiscount;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblDiscount = "fca_settings_discount";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblDiscount} ";
            $sql .= "( discount_is_active, ";
            $sql .= "discount_type, ";
            $sql .= "discount_tuition_fee, ";
            $sql .= "discount_entrance_fee, ";
            $sql .= "discount_category, ";
            $sql .= "discount_qualifications, ";
            $sql .= "discount_duration, ";
            $sql .= "discount_maintaining_grade, ";
            $sql .= "discount_requirement, ";
            $sql .= "discount_datetime, ";
            $sql .= "discount_created ) values ( ";
            $sql .= ":discount_is_active, ";
            $sql .= ":discount_type, ";
            $sql .= ":discount_tuition_fee, ";
            $sql .= ":discount_entrance_fee, ";
            $sql .= ":discount_category, ";
            $sql .= ":discount_qualifications, ";
            $sql .= ":discount_duration, ";
            $sql .= ":discount_maintaining_grade, ";
            $sql .= ":discount_requirement, ";
            $sql .= ":discount_datetime, ";
            $sql .= ":discount_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "discount_is_active" => $this->discount_is_active,
                "discount_type" => $this->discount_type,
                "discount_tuition_fee" => $this->discount_tuition_fee,
                "discount_entrance_fee" => $this->discount_entrance_fee,
                "discount_category" => $this->discount_category,
                "discount_qualifications" => $this->discount_qualifications,
                "discount_duration" => $this->discount_duration,
                "discount_maintaining_grade" => $this->discount_maintaining_grade,
                "discount_requirement" => $this->discount_requirement,
                "discount_datetime" => $this->discount_datetime,
                "discount_created" => $this->discount_created,
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
            $sql .= "* ";
            $sql .= "from ";
            $sql .= " {$this->tblDiscount} ";
            $sql .= "order by discount_is_active desc, ";
            $sql .= "discount_type asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tblRole} ";
            $sql .= "where role_aid = :role_aid ";
            $sql .= "order by role_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "role_aid" => $this->role_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update
    public function update()
    {
        try {
            $sql = "update {$this->tblDiscount} set ";
            $sql .= "discount_type = :discount_type, ";
            $sql .= "discount_tuition_fee = :discount_tuition_fee, ";
            $sql .= "discount_entrance_fee = :discount_entrance_fee, ";
            $sql .= "discount_category = :discount_category, ";
            $sql .= "discount_qualifications = :discount_qualifications, ";
            $sql .= "discount_duration = :discount_duration, ";
            $sql .= "discount_maintaining_grade = :discount_maintaining_grade, ";
            $sql .= "discount_requirement = :discount_requirement, ";
            $sql .= "discount_datetime = :discount_datetime ";
            $sql .= "where discount_aid = :discount_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "discount_type" => $this->discount_type,
                "discount_tuition_fee" => $this->discount_tuition_fee,
                "discount_entrance_fee" => $this->discount_entrance_fee,
                "discount_category" => $this->discount_category,
                "discount_qualifications" => $this->discount_qualifications,
                "discount_duration" => $this->discount_duration,
                "discount_maintaining_grade" => $this->discount_maintaining_grade,
                "discount_requirement" => $this->discount_requirement,
                "discount_datetime" => $this->discount_datetime,
                "discount_aid" => $this->discount_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // active
    public function active()
    {
        try {
            $sql = "update {$this->tblDiscount} set ";
            $sql .= "discount_is_active = :discount_is_active, ";
            $sql .= "discount_datetime = :discount_datetime ";
            $sql .= "where discount_aid = :discount_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "discount_is_active" => $this->discount_is_active,
                "discount_datetime" => $this->discount_datetime,
                "discount_aid" => $this->discount_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // delete
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblDiscount} ";
            $sql .= "where discount_aid = :discount_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "discount_aid" => $this->discount_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // add column to database table
    public function addColumn($column_name)
    {
        try {
            $sql = "alter table {$this->tblRole} ";
            $sql .= "add column role_is_{$column_name} boolean ";
            $sql .= "NOT NULL ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }

        return $query;
    }

    // update
    public function updateColumnValue($column_name)
    {
        try {
            $sql = "update {$this->tblRole} set ";
            $sql .= "role_is_{$column_name} = :role_column_name, ";
            $sql .= "role_datetime = :role_datetime ";
            $sql .= "where role_name = :role_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "role_column_name" => $this->role_is_active,
                "role_datetime" => $this->role_datetime,
                "role_name" => $this->role_name,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update column name to database table
    public function updateColumnName($column_name, $column_name_old)
    {
        try {
            $sql = "alter table {$this->tblRole} change ";
            $sql .= "role_is_{$column_name_old} ";
            $sql .= "role_is_{$column_name} boolean ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // drop column name to database table
    public function dropColumnName($column_name)
    {
        try {
            $sql = "alter table {$this->tblRole} ";
            $sql .= "drop role_is_{$column_name} ";

            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // validator

    // name
    public function checkName()
    {
        try {
            $sql = "select discount_type from {$this->tblDiscount} ";
            $sql .= "where discount_type = :discount_type ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "discount_type" => "{$this->discount_type}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // association
    public function checkUserSystemAssociation()
    {
        try {
            $sql = "select user_system_role_id from {$this->tblUserSystem} ";
            $sql .= "where user_system_role_id = :role_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "role_aid" => "{$this->role_aid}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkUserOtherAssociation()
    {
        try {
            $sql = "select user_other_role_id from {$this->tblUserOther} ";
            $sql .= "where user_other_role_id = :role_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "role_aid" => "{$this->role_aid}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
