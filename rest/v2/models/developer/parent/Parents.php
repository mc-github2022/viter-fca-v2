<?php
class Parents
{
    public $parents_aid;
    public $parents_is_active;
    public $parents_fname;
    public $parents_lname;
    public $parents_email;
    public $parents_father_income;
    public $parents_mother_income;
    public $parents_financier_name;
    public $parents_financier_occupation;
    public $parents_financier_relationship;
    public $parents_financier_income;
    public $parents_created;
    public $parents_datetime;

    public $parents_email_old;

    public $user_other_key;

    public $connection;
    public $lastInsertedId;
    public $parents_start;
    public $parents_total;
    public $parents_search;

    public $tblParents;
    public $tblUserOther;
    public $tblStudents;
    public $tblStudentsSY;
    public $tblGradeLevel;
    public $tblSchoolYear;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblParents = "fcav2_parents";
        $this->tblStudents = "fcav2_students";
        $this->tblUserOther = "fcav2_settings_user_other";
        $this->tblStudentsSY = "fcav2_school_year_students";
        $this->tblGradeLevel = "fcav2_settings_grade_level";
        $this->tblSchoolYear = "fcav2_settings_school_year";
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblParents} ";
            $sql .= "( parents_is_active, ";
            $sql .= "parents_fname, ";
            $sql .= "parents_lname, ";
            $sql .= "parents_email, ";
            $sql .= "parents_created, ";
            $sql .= "parents_datetime ) values ( ";
            $sql .= ":parents_is_active, ";
            $sql .= ":parents_fname, ";
            $sql .= ":parents_lname, ";
            $sql .= ":parents_email, ";
            $sql .= ":parents_created, ";
            $sql .= ":parents_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parents_is_active" => $this->parents_is_active,
                "parents_fname" => $this->parents_fname,
                "parents_lname" => $this->parents_lname,
                "parents_email" => $this->parents_email,
                "parents_created" => $this->parents_created,
                "parents_datetime" => $this->parents_datetime,
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
            $sql .= "parents_aid, ";
            $sql .= "parents_is_active, ";
            $sql .= "parents_fname, ";
            $sql .= "parents_lname, ";
            $sql .= "parents_email ";
            $sql .= "from {$this->tblParents} ";
            $sql .= "order by parents_is_active desc, ";
            $sql .= "parents_fname ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read limit
    public function readLimit()
    {
        try {
            $sql = "select ";
            $sql .= "parents_aid, ";
            $sql .= "parents_is_active, ";
            $sql .= "parents_fname, ";
            $sql .= "parents_lname, ";
            $sql .= "parents_email ";
            $sql .= "from {$this->tblParents} ";
            $sql .= "order by parents_is_active desc, ";
            $sql .= "parents_fname ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->parents_start - 1,
                "total" => $this->parents_total,
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
            $sql .= "parents_aid, ";
            $sql .= "parents_is_active, ";
            $sql .= "parents_fname, ";
            $sql .= "parents_lname, ";
            $sql .= "parents_email ";
            $sql .= "from {$this->tblParents} ";
            $sql .= "where ( ";
            $sql .= "parents_fname like :parents_fname ";
            $sql .= "or parents_lname like :parents_lname ";
            $sql .= "or parents_email like :parents_email ";
            $sql .= ") ";
            $sql .= "order by parents_is_active desc, ";
            $sql .= "parents_fname ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parents_fname" => "%{$this->parents_search}%",
                "parents_lname" => "%{$this->parents_search}%",
                "parents_email" => "%{$this->parents_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tblParents} ";
            $sql .= "where parents_aid = :parents_aid ";
            $sql .= "order by parents_lname asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parents_aid" => $this->parents_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read by id
    public function readStudentById()
    {
        try {
            $sql = "select * from {$this->tblStudents} as students, ";
            $sql .= "{$this->tblParents} as parents, ";
            $sql .= "{$this->tblStudentsSY} as students_sy, ";
            $sql .= "{$this->tblGradeLevel} as grade_level, ";
            $sql .= "{$this->tblSchoolYear} as school_year ";
            $sql .= "where students.students_parent_id = parents.parents_aid ";
            $sql .= "and students_sy.school_year_students_student_id = students.students_aid ";
            $sql .= "and students_sy.school_year_students_sy_id = school_year.school_year_aid ";
            $sql .= "and students_sy.school_year_students_last_grade_level_id = grade_level.grade_level_aid ";
            $sql .= "and students.students_parent_id = :parents_aid ";
            $sql .= "order by students.students_fname asc ";
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
            $sql = "update {$this->tblParents} set ";
            $sql .= "parents_fname = :parents_fname, ";
            $sql .= "parents_lname = :parents_lname, ";
            // $sql .= "parents_email = :parents_email, ";
            $sql .= "parents_datetime = :parents_datetime ";
            $sql .= "where parents_aid  = :parents_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parents_fname" => $this->parents_fname,
                "parents_lname" => $this->parents_lname,
                // "parents_email" => $this->parents_email,
                "parents_datetime" => $this->parents_datetime,
                "parents_aid" => $this->parents_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateFinancier()
    {
        try {
            $sql = "update {$this->tblParents} set ";
            $sql .= "parents_father_income = :parents_father_income, ";
            $sql .= "parents_mother_income = :parents_mother_income, ";
            $sql .= "parents_financier_name = :parents_financier_name, ";
            $sql .= "parents_financier_occupation = :parents_financier_occupation, ";
            $sql .= "parents_financier_relationship = :parents_financier_relationship, ";
            $sql .= "parents_financier_income = :parents_financier_income, ";
            $sql .= "parents_datetime = :parents_datetime ";
            $sql .= "where parents_aid = :parents_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parents_father_income" => $this->parents_father_income,
                "parents_mother_income" => $this->parents_mother_income,
                "parents_financier_name" => $this->parents_financier_name,
                "parents_financier_occupation" => $this->parents_financier_occupation,
                "parents_financier_relationship" => $this->parents_financier_relationship,
                "parents_financier_income" => $this->parents_financier_income,
                "parents_datetime" => $this->parents_datetime,
                "parents_aid" => $this->parents_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateIfNoAccount()
    {
        try {
            $sql = "update {$this->tblParents} set ";
            $sql .= "parents_fname = :parents_fname, ";
            $sql .= "parents_lname = :parents_lname, ";
            $sql .= "parents_email = :parents_email, ";
            $sql .= "parents_datetime = :parents_datetime ";
            $sql .= "where parents_aid  = :parents_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parents_fname" => $this->parents_fname,
                "parents_lname" => $this->parents_lname,
                "parents_email" => $this->parents_email,
                "parents_datetime" => $this->parents_datetime,
                "parents_aid" => $this->parents_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update
    public function updateUserKeyAndNewEmail()
    {
        try {
            $sql = "update {$this->tblUserOther} set ";
            $sql .= "user_other_key = :user_other_key, ";
            $sql .= "user_other_new_email = :parents_email, ";
            $sql .= "user_other_datetime = :parents_datetime ";
            $sql .= "where user_other_email = :parents_email_old ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_key" => $this->user_other_key,
                "parents_email" => $this->parents_email,
                "parents_datetime" => $this->parents_datetime,
                "parents_email_old" => $this->parents_email_old,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblParents} set ";
            $sql .= "parents_is_active = :parents_is_active, ";
            $sql .= "parents_datetime = :parents_datetime ";
            $sql .= "where parents_aid  = :parents_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parents_is_active" => $this->parents_is_active,
                "parents_datetime" => $this->parents_datetime,
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
            $sql = "delete from {$this->tblParents} ";
            $sql .= "where parents_aid = :parents_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parents_aid" => $this->parents_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // validatior 

    // email
    public function checkEmail()
    {
        try {
            $sql = "select parents_email from {$this->tblParents} ";
            $sql .= "where parents_email = :parents_email ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parents_email" => "{$this->parents_email}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // email
    public function checkUserOtherAccount()
    {
        try {
            $sql = "select user_other_email from {$this->tblUserOther} ";
            $sql .= "where user_other_email = :parents_email_old ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parents_email_old" => "{$this->parents_email_old}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
