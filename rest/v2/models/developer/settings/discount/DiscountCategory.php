<?php
class DiscountCategory
{
    public $discount_category_aid;
    public $discount_category_is_active;
    public $discount_category_name;
    public $discount_category_created;
    public $discount_category_updated;

    public $connection;
    public $lastInsertedId;
    public $tblDiscountCategory;
    public $tblDiscount;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblDiscountCategory = "fcav2_settings_discount_category";
        $this->tblDiscount = "fcav2_settings_discount";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblDiscountCategory} ";
            $sql .= "( discount_category_is_active, ";
            $sql .= "discount_category_name, ";
            $sql .= "discount_category_updated, ";
            $sql .= "discount_category_created ) values ( ";
            $sql .= ":discount_category_is_active, ";
            $sql .= ":discount_category_name, ";
            $sql .= ":discount_category_updated, ";
            $sql .= ":discount_category_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "discount_category_is_active" => $this->discount_category_is_active,
                "discount_category_name" => $this->discount_category_name,
                "discount_category_updated" => $this->discount_category_updated,
                "discount_category_created" => $this->discount_category_created,
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
            $sql .= " {$this->tblDiscountCategory} ";
            $sql .= "order by discount_category_is_active desc, ";
            $sql .= "discount_category_name asc ";
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
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= " {$this->tblDiscountCategory} ";
            $sql .= "where discount_category_aid = :discount_category_aid, ";
            $sql .= "order by discount_category_is_active desc, ";
            $sql .= "discount_category_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "discount_category_aid" => $this->discount_category_aid,
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
            $sql = "update {$this->tblDiscountCategory} set ";
            $sql .= "discount_category_name = :discount_category_name, ";
            $sql .= "discount_category_updated = :discount_category_updated ";
            $sql .= "where discount_category_aid = :discount_category_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "discount_category_name" => $this->discount_category_name,
                "discount_category_updated" => $this->discount_category_updated,
                "discount_category_aid" => $this->discount_category_aid,
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
            $sql = "update {$this->tblDiscountCategory} set ";
            $sql .= "discount_category_is_active = :discount_category_is_active, ";
            $sql .= "discount_category_updated = :discount_category_updated ";
            $sql .= "where discount_category_aid = :discount_category_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "discount_category_is_active" => $this->discount_category_is_active,
                "discount_category_updated" => $this->discount_category_updated,
                "discount_category_aid" => $this->discount_category_aid,
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
            $sql = "delete from {$this->tblDiscountCategory} ";
            $sql .= "where discount_category_aid = :discount_category_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "discount_category_aid" => $this->discount_category_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    // name
    public function checkName()
    {
        try {
            $sql = "select discount_category_name from {$this->tblDiscountCategory} ";
            $sql .= "where discount_category_name = :discount_category_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "discount_category_name" => "{$this->discount_category_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read all
    public function checkAssociation()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= " {$this->tblDiscount} ";
            $sql .= "where discount_category_id = :discount_category_id, ";
            $sql .= "order by discount_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "discount_category_id" => $this->discount_category_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
