<?php
class Discount
{
    public $discount_aid;
    public $discount_is_active;
    public $discount_type;
    public $discount_tuition_fee;
    public $discount_admission_fee;
    public $discount_category_id;
    public $discount_qualification;
    public $discount_duration;
    public $discount_maintaining_grade;
    public $discount_is_stand_alone_discount;
    public $discount_requirement;
    public $discount_updated;
    public $discount_created;

    public $connection;
    public $lastInsertedId;
    public $tblDiscount;
    public $tblDiscountCategory;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblDiscount = "fcav2_settings_discount";
        $this->tblDiscountCategory = "fcav2_settings_discount_category";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblDiscount} ";
            $sql .= "( discount_is_active, ";
            $sql .= "discount_type, ";
            $sql .= "discount_tuition_fee, ";
            $sql .= "discount_admission_fee, ";
            $sql .= "discount_category_id, ";
            $sql .= "discount_qualification, ";
            $sql .= "discount_duration, ";
            $sql .= "discount_maintaining_grade, ";
            $sql .= "discount_requirement, ";
            $sql .= "discount_is_stand_alone_discount, ";
            $sql .= "discount_updated, ";
            $sql .= "discount_created ) values ( ";
            $sql .= ":discount_is_active, ";
            $sql .= ":discount_type, ";
            $sql .= ":discount_tuition_fee, ";
            $sql .= ":discount_admission_fee, ";
            $sql .= ":discount_category_id, ";
            $sql .= ":discount_qualification, ";
            $sql .= ":discount_duration, ";
            $sql .= ":discount_maintaining_grade, ";
            $sql .= ":discount_requirement, ";
            $sql .= ":discount_is_stand_alone_discount, ";
            $sql .= ":discount_updated, ";
            $sql .= ":discount_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "discount_is_active" => $this->discount_is_active,
                "discount_type" => $this->discount_type,
                "discount_tuition_fee" => $this->discount_tuition_fee,
                "discount_admission_fee" => $this->discount_admission_fee,
                "discount_category_id" => $this->discount_category_id,
                "discount_qualification" => $this->discount_qualification,
                "discount_duration" => $this->discount_duration,
                "discount_maintaining_grade" => $this->discount_maintaining_grade,
                "discount_requirement" => $this->discount_requirement,
                "discount_is_stand_alone_discount" => $this->discount_is_stand_alone_discount,
                "discount_updated" => $this->discount_updated,
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
            $sql .= "discount.*, ";
            $sql .= "discountCategory.discount_category_name ";
            $sql .= "from ";
            $sql .= "{$this->tblDiscountCategory} as discountCategory, ";
            $sql .= "{$this->tblDiscount} as discount ";
            $sql .= "where discount.discount_category_id = discountCategory.discount_category_aid ";
            $sql .= "order by discount.discount_is_active desc, ";
            $sql .= "discountCategory.discount_category_name asc ";
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
            $sql = "select * from {$this->tblDiscount} ";
            $sql .= "where discount_aid = :discount_aid ";
            $sql .= "order by discount_category_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "discount_aid" => $this->discount_aid,
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
            $sql .= "discount_admission_fee = :discount_admission_fee, ";
            $sql .= "discount_category_id = :discount_category_id, ";
            $sql .= "discount_qualification = :discount_qualification, ";
            $sql .= "discount_duration = :discount_duration, ";
            $sql .= "discount_maintaining_grade = :discount_maintaining_grade, ";
            $sql .= "discount_requirement = :discount_requirement, ";
            $sql .= "discount_is_stand_alone_discount = :discount_is_stand_alone_discount, ";
            $sql .= "discount_updated = :discount_updated ";
            $sql .= "where discount_aid = :discount_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "discount_type" => $this->discount_type,
                "discount_tuition_fee" => $this->discount_tuition_fee,
                "discount_admission_fee" => $this->discount_admission_fee,
                "discount_category_id" => $this->discount_category_id,
                "discount_qualification" => $this->discount_qualification,
                "discount_duration" => $this->discount_duration,
                "discount_maintaining_grade" => $this->discount_maintaining_grade,
                "discount_requirement" => $this->discount_requirement,
                "discount_is_stand_alone_discount" => $this->discount_is_stand_alone_discount,
                "discount_updated" => $this->discount_updated,
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
            $sql .= "discount_updated = :discount_updated ";
            $sql .= "where discount_aid = :discount_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "discount_is_active" => $this->discount_is_active,
                "discount_updated" => $this->discount_updated,
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


    // name
    public function checkName()
    {
        try {
            $sql = "select discount_category_id from {$this->tblDiscount} ";
            $sql .= "where discount_category_id = :discount_category_id ";
            $sql .= "and discount_type = :discount_type ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "discount_type" => $this->discount_type,
                "discount_category_id" => $this->discount_category_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read all
    public function readAllCategory()
    {
        try {
            $sql = "select ";
            $sql .= "discount_category_aid, ";
            $sql .= "discount_category_name ";
            $sql .= "from ";
            $sql .= "{$this->tblDiscountCategory} ";
            $sql .= "where discount_category_is_active = '1' ";
            $sql .= "order by discount_category_name asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
