<?php
class DiscountAdditional
{
    public $discount_additional_aid;
    public $discount_additional_is_active;
    public $discount_additional_name;
    public $discount_additional_percent;
    public $discount_additional_amount;
    public $discount_additional_base_rate_id;
    public $discount_additional_is_early_bird;
    public $discount_additional_created;
    public $discount_additional_updated;

    public $search;

    public $connection;
    public $lastInsertedId;
    public $tblDiscountAdditional;
    public $tblDiscount;
    public $tblBaseRate;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblDiscountAdditional = "fcav2_settings_discount_additional";
        $this->tblDiscount = "fcav2_settings_discount";
        $this->tblBaseRate = "fcav2_settings_base_rate";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblDiscountAdditional} ";
            $sql .= "( discount_additional_is_active, ";
            $sql .= "discount_additional_name, ";
            $sql .= "discount_additional_percent, ";
            $sql .= "discount_additional_amount, ";
            $sql .= "discount_additional_is_early_bird, ";
            $sql .= "discount_additional_base_rate_id, ";
            $sql .= "discount_additional_updated, ";
            $sql .= "discount_additional_created ) values ( ";
            $sql .= ":discount_additional_is_active, ";
            $sql .= ":discount_additional_name, ";
            $sql .= ":discount_additional_percent, ";
            $sql .= ":discount_additional_amount, ";
            $sql .= ":discount_additional_is_early_bird, ";
            $sql .= ":discount_additional_base_rate_id, ";
            $sql .= ":discount_additional_updated, ";
            $sql .= ":discount_additional_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "discount_additional_is_active" => $this->discount_additional_is_active,
                "discount_additional_name" => $this->discount_additional_name,
                "discount_additional_percent" => $this->discount_additional_percent,
                "discount_additional_amount" => $this->discount_additional_amount,
                "discount_additional_base_rate_id" => $this->discount_additional_base_rate_id,
                "discount_additional_is_early_bird" => $this->discount_additional_is_early_bird,
                "discount_additional_updated" => $this->discount_additional_updated,
                "discount_additional_created" => $this->discount_additional_created,
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
            $sql .= "additionalDiscount.*, ";
            $sql .= "baseRate.settings_base_rate_name ";
            $sql .= "from ";
            $sql .= " {$this->tblDiscountAdditional} as additionalDiscount, ";
            $sql .= " {$this->tblBaseRate} as baseRate ";
            $sql .= "where additionalDiscount.discount_additional_base_rate_id = baseRate.settings_base_rate_aid ";
            $sql .= "order by additionalDiscount.discount_additional_is_active desc, ";
            $sql .= "additionalDiscount.discount_additional_name asc ";
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
            $sql .= " {$this->tblDiscountAdditional} ";
            $sql .= "where discount_additional_aid = :discount_additional_aid, ";
            $sql .= "order by discount_additional_is_active desc, ";
            $sql .= "discount_additional_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "discount_additional_aid" => $this->discount_additional_aid,
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
            $sql = "update {$this->tblDiscountAdditional} set ";
            $sql .= "discount_additional_name = :discount_additional_name, ";
            $sql .= "discount_additional_percent = :discount_additional_percent, ";
            $sql .= "discount_additional_amount = :discount_additional_amount, ";
            $sql .= "discount_additional_base_rate_id = :discount_additional_base_rate_id, ";
            $sql .= "discount_additional_is_early_bird = :discount_additional_is_early_bird, ";
            $sql .= "discount_additional_updated = :discount_additional_updated ";
            $sql .= "where discount_additional_aid = :discount_additional_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "discount_additional_name" => $this->discount_additional_name,
                "discount_additional_percent" => $this->discount_additional_percent,
                "discount_additional_amount" => $this->discount_additional_amount,
                "discount_additional_base_rate_id" => $this->discount_additional_base_rate_id,
                "discount_additional_is_early_bird" => $this->discount_additional_is_early_bird,
                "discount_additional_updated" => $this->discount_additional_updated,
                "discount_additional_aid" => $this->discount_additional_aid,
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
            $sql = "update {$this->tblDiscountAdditional} set ";
            $sql .= "discount_additional_is_active = :discount_additional_is_active, ";
            $sql .= "discount_additional_updated = :discount_additional_updated ";
            $sql .= "where discount_additional_aid = :discount_additional_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "discount_additional_is_active" => $this->discount_additional_is_active,
                "discount_additional_updated" => $this->discount_additional_updated,
                "discount_additional_aid" => $this->discount_additional_aid,
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
            $sql = "delete from {$this->tblDiscountAdditional} ";
            $sql .= "where discount_additional_aid = :discount_additional_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "discount_additional_aid" => $this->discount_additional_aid,
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
            $sql = "select discount_additional_name from {$this->tblDiscountAdditional} ";
            $sql .= "where discount_additional_name = :discount_additional_name ";
            $sql .= "and discount_additional_base_rate_id = :discount_additional_base_rate_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "discount_additional_name" => "{$this->discount_additional_name}",
                "discount_additional_base_rate_id" => $this->discount_additional_base_rate_id,
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
            $sql .= "where discount_category_id = :discount_category_id ";
            $sql .= "order by discount_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "discount_category_id" => $this->discount_additional_aid,
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
            $sql .= "* ";
            $sql .= "from ";
            $sql .= " {$this->tblDiscountAdditional} ";
            $sql .= "where discount_additional_is_active = '1' ";
            $sql .= "and ";
            $sql .= "( ";
            $sql .= "discount_additional_name like :discount_additional_name ";
            $sql .= ") ";
            $sql .= "order by ";
            $sql .= "discount_additional_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "discount_additional_name" => "%{$this->search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
