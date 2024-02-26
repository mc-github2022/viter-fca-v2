<?php
class TuitionFee
{
    public $tuition_fee_aid;
    public $tuition_fee_active;
    public $tuition_fee_category_id;
    public $tuition_fee_grade_id;
    public $tuition_fee_scheme_id;
    public $tuition_fee_miscellaneous;
    public $tuition_fee_tuition;
    public $tuition_fee_books;
    public $tuition_fee_admission;
    public $tuition_fee_upon_enrollment;
    public $tuition_fee_total_monthly;
    public $tuition_fee_monthly;
    public $tuition_fee_how_many_months;


    public $tuition_fee_category_id_old;
    public $tuition_fee_grade_id_old;

    public $tuition_fee_created;
    public $tuition_fee_updated;

    public $connection;
    public $lastInsertedId;
    public $tuition_fee_start;
    public $tuition_fee_total;
    public $tuition_fee_search;
    public $tblGradeLevel;
    public $tblTuitionCategory;
    public $tblTuitionFee;
    public $tblScheme;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblGradeLevel = "fcav2_settings_grade_level";
        $this->tblTuitionCategory = "fcav2_settings_tuition_category";
        $this->tblTuitionFee = "fcav2_settings_tuition_fee";
        $this->tblScheme = "fcav2_settings_scheme";
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblTuitionFee} ";
            $sql .= "( tuition_fee_active, ";
            $sql .= "tuition_fee_category_id, ";
            $sql .= "tuition_fee_grade_id, ";
            $sql .= "tuition_fee_miscellaneous, ";
            $sql .= "tuition_fee_tuition, ";
            $sql .= "tuition_fee_books, ";
            $sql .= "tuition_fee_scheme_id, ";
            $sql .= "tuition_fee_admission, ";
            $sql .= "tuition_fee_upon_enrollment, ";
            $sql .= "tuition_fee_monthly, ";
            $sql .= "tuition_fee_how_many_months, ";
            $sql .= "tuition_fee_total_monthly, ";
            $sql .= "tuition_fee_created, ";
            $sql .= "tuition_fee_updated ) values ( ";
            $sql .= ":tuition_fee_active, ";
            $sql .= ":tuition_fee_category_id, ";
            $sql .= ":tuition_fee_grade_id, ";
            $sql .= ":tuition_fee_miscellaneous, ";
            $sql .= ":tuition_fee_tuition, ";
            $sql .= ":tuition_fee_books, ";
            $sql .= ":tuition_fee_scheme_id, ";
            $sql .= ":tuition_fee_admission, ";
            $sql .= ":tuition_fee_upon_enrollment, ";
            $sql .= ":tuition_fee_monthly, ";
            $sql .= ":tuition_fee_how_many_months, ";
            $sql .= ":tuition_fee_total_monthly, ";
            $sql .= ":tuition_fee_created, ";
            $sql .= ":tuition_fee_updated ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tuition_fee_active" => $this->tuition_fee_active,
                "tuition_fee_category_id" => $this->tuition_fee_category_id,
                "tuition_fee_grade_id" => $this->tuition_fee_grade_id,
                "tuition_fee_miscellaneous" => $this->tuition_fee_miscellaneous,
                "tuition_fee_tuition" => $this->tuition_fee_tuition,
                "tuition_fee_books" => $this->tuition_fee_books,
                "tuition_fee_scheme_id" => $this->tuition_fee_scheme_id,
                "tuition_fee_admission" => $this->tuition_fee_admission,
                "tuition_fee_upon_enrollment" => $this->tuition_fee_upon_enrollment,
                "tuition_fee_monthly" => $this->tuition_fee_monthly,
                "tuition_fee_how_many_months" => $this->tuition_fee_how_many_months,
                "tuition_fee_total_monthly" => $this->tuition_fee_total_monthly,
                "tuition_fee_created" => $this->tuition_fee_created,
                "tuition_fee_updated" => $this->tuition_fee_updated,
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
            $sql .= "from {$this->tblTuitionFee} as fee, ";
            $sql .= "{$this->tblTuitionCategory} as category, ";
            $sql .= "{$this->tblGradeLevel} as grade, ";
            $sql .= "{$this->tblScheme} as scheme ";
            $sql .= "where fee.tuition_fee_category_id = category.tuition_category_aid ";
            $sql .= "and fee.tuition_fee_grade_id = grade.grade_level_aid ";
            $sql .= "and fee.tuition_fee_scheme_id = scheme.scheme_aid ";
            $sql .= "order by fee.tuition_fee_active desc ";
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
            $sql .= "from {$this->tblTuitionFee} as fee, ";
            $sql .= "{$this->tblTuitionCategory} as category, ";
            $sql .= "{$this->tblGradeLevel} as grade, ";
            $sql .= "{$this->tblScheme} as scheme ";
            $sql .= "where fee.tuition_fee_aid = :tuition_fee_aid ";
            $sql .= "where fee.tuition_fee_category_id = category.tuition_category_aid ";
            $sql .= "and fee.tuition_fee_grade_id = grade.grade_level_aid ";
            $sql .= "and fee.tuition_fee_scheme_id = scheme.scheme_aid ";
            $sql .= "order by fee.tuition_fee_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tuition_fee_aid" => $this->tuition_fee_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblTuitionFee} set ";
            $sql .= "tuition_fee_category_id = :tuition_fee_category_id, ";
            $sql .= "tuition_fee_grade_id = :tuition_fee_grade_id, ";
            $sql .= "tuition_fee_miscellaneous = :tuition_fee_miscellaneous, ";
            $sql .= "tuition_fee_tuition = :tuition_fee_tuition, ";
            $sql .= "tuition_fee_books = :tuition_fee_books, ";
            $sql .= "tuition_fee_scheme_id = :tuition_fee_scheme_id, ";
            $sql .= "tuition_fee_admission = :tuition_fee_admission, ";
            $sql .= "tuition_fee_upon_enrollment = :tuition_fee_upon_enrollment, ";
            $sql .= "tuition_fee_how_many_months = :tuition_fee_how_many_months, ";
            $sql .= "tuition_fee_monthly = :tuition_fee_monthly, ";
            $sql .= "tuition_fee_total_monthly = :tuition_fee_total_monthly, ";
            $sql .= "tuition_fee_updated = :tuition_fee_updated ";
            $sql .= "where tuition_fee_aid  = :tuition_fee_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tuition_fee_category_id" => $this->tuition_fee_category_id,
                "tuition_fee_grade_id" => $this->tuition_fee_grade_id,
                "tuition_fee_miscellaneous" => $this->tuition_fee_miscellaneous,
                "tuition_fee_tuition" => $this->tuition_fee_tuition,
                "tuition_fee_books" => $this->tuition_fee_books,
                "tuition_fee_scheme_id" => $this->tuition_fee_scheme_id,
                "tuition_fee_admission" => $this->tuition_fee_admission,
                "tuition_fee_total_monthly" => $this->tuition_fee_total_monthly,
                "tuition_fee_monthly" => $this->tuition_fee_monthly,
                "tuition_fee_how_many_months" => $this->tuition_fee_how_many_months,
                "tuition_fee_upon_enrollment" => $this->tuition_fee_upon_enrollment,
                "tuition_fee_updated" => $this->tuition_fee_updated,
                "tuition_fee_aid" => $this->tuition_fee_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblTuitionFee} set ";
            $sql .= "tuition_fee_active = :tuition_fee_active, ";
            $sql .= "tuition_fee_updated = :tuition_fee_updated ";
            $sql .= "where tuition_fee_aid  = :tuition_fee_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tuition_fee_active" => $this->tuition_fee_active,
                "tuition_fee_updated" => $this->tuition_fee_updated,
                "tuition_fee_aid" => $this->tuition_fee_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblTuitionFee} ";
            $sql .= "where tuition_fee_aid = :tuition_fee_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tuition_fee_aid" => $this->tuition_fee_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function checkName()
    {
        try {
            $sql = "select tuition_fee_category_id, ";
            $sql .= "tuition_fee_grade_id ";
            $sql .= "from {$this->tblTuitionFee} ";
            $sql .= "where tuition_fee_category_id = :tuition_fee_category_id ";
            $sql .= "and tuition_fee_grade_id = :tuition_fee_grade_id ";
            $sql .= "and tuition_fee_scheme_id = :tuition_fee_scheme_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tuition_fee_category_id" => "{$this->tuition_fee_category_id}",
                "tuition_fee_grade_id" => "{$this->tuition_fee_grade_id}",
                "tuition_fee_scheme_id" => "{$this->tuition_fee_scheme_id}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readByCategoryAndGrade()
    {
        try {
            $sql = "select fee.*, ";
            $sql .= "category.tuition_category_name, ";
            $sql .= "grade.grade_level_name, ";
            $sql .= "scheme.scheme_name ";
            $sql .= "from {$this->tblTuitionFee} as fee, ";
            $sql .= "{$this->tblTuitionCategory} as category, ";
            $sql .= "{$this->tblGradeLevel} as grade, ";
            $sql .= "{$this->tblScheme} as scheme ";
            $sql .= "where fee.tuition_fee_category_id = :tuition_fee_category_id ";
            $sql .= "and fee.tuition_fee_grade_id = :tuition_fee_grade_id ";
            $sql .= "and fee.tuition_fee_category_id = category.tuition_category_aid ";
            $sql .= "and fee.tuition_fee_grade_id = grade.grade_level_aid ";
            $sql .= "and fee.tuition_fee_scheme_id = scheme.scheme_aid ";
            $sql .= "order by fee.tuition_fee_active desc, ";
            $sql .= "scheme.scheme_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "tuition_fee_category_id" => $this->tuition_fee_category_id,
                "tuition_fee_grade_id" => $this->tuition_fee_grade_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readAllCategory()
    {
        try {
            $sql = "select tuition_category_aid, ";
            $sql .= "tuition_category_name ";
            $sql .= "from {$this->tblTuitionCategory} ";
            $sql .= "where tuition_category_active = '1' ";
            $sql .= "order by tuition_category_name asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readAllScheme()
    {
        try {
            $sql = "select scheme_aid, ";
            $sql .= "scheme_name ";
            $sql .= "from {$this->tblScheme} ";
            $sql .= "where scheme_active = '1' ";
            $sql .= "order by scheme_name asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readAllGrade()
    {
        try {
            $sql = "select grade_level_aid , ";
            $sql .= "grade_level_name ";
            $sql .= "from {$this->tblGradeLevel} ";
            $sql .= "where grade_level_active = '1' ";
            $sql .= "order by grade_level_name asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readAllGroupBYCategoryGrade()
    {
        try {
            $sql = "select fee.tuition_fee_category_id, ";
            $sql .= "fee.tuition_fee_grade_id, ";
            $sql .= "fee.tuition_fee_aid, ";
            $sql .= "category.tuition_category_name, ";
            $sql .= "grade.grade_level_name, ";
            $sql .= "scheme.scheme_name ";
            $sql .= "from {$this->tblTuitionFee} as fee, ";
            $sql .= "{$this->tblTuitionCategory} as category, ";
            $sql .= "{$this->tblGradeLevel} as grade, ";
            $sql .= "{$this->tblScheme} as scheme ";
            $sql .= "where fee.tuition_fee_category_id = category.tuition_category_aid ";
            $sql .= "and fee.tuition_fee_grade_id = grade.grade_level_aid ";
            $sql .= "and fee.tuition_fee_scheme_id = scheme.scheme_aid ";
            $sql .= "group by fee.tuition_fee_category_id, ";
            $sql .= "fee.tuition_fee_grade_id ";
            $sql .= "order by fee.tuition_fee_active desc, ";
            $sql .= "category.tuition_category_name asc, ";
            $sql .= "grade.grade_level_name asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
