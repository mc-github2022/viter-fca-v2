<?php
class SchoolYear
{
    public $school_year_aid;
    public $school_year_is_active;
    public $school_year_start_date;
    public $school_year_end_date;
    public $school_year_enrollment_start_date;
    public $school_year_enrollment_end_date;
    public $school_year_is_enrollment_open;
    public $school_year_created;
    public $school_year_datetime;

    public $connection;
    public $lastInsertedId;
    public $school_year_start;
    public $school_year_total;
    public $school_year_search;

    public $tblSchoolYear;
    public $tblStudentsSY;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSchoolYear = "fcav2_settings_school_year";
        $this->tblStudentsSY = "fcav2_school_year_students";
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblSchoolYear} ";
            $sql .= "( school_year_is_active, ";
            $sql .= "school_year_start_date, ";
            $sql .= "school_year_end_date, ";
            $sql .= "school_year_is_enrollment_open, ";
            $sql .= "school_year_created, ";
            $sql .= "school_year_datetime ) values ( ";
            $sql .= ":school_year_is_active, ";
            $sql .= ":school_year_start_date, ";
            $sql .= ":school_year_end_date, ";
            $sql .= ":school_year_is_enrollment_open, ";
            $sql .= ":school_year_created, ";
            $sql .= ":school_year_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_is_active" => $this->school_year_is_active,
                "school_year_start_date" => $this->school_year_start_date,
                "school_year_end_date" => $this->school_year_end_date,
                "school_year_is_enrollment_open" => $this->school_year_is_enrollment_open,
                "school_year_created" => $this->school_year_created,
                "school_year_datetime" => $this->school_year_datetime,
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
            $sql .= "school_year_aid, ";
            $sql .= "school_year_is_active, ";
            $sql .= "YEAR(school_year_start_date) as start_year, ";
            $sql .= "school_year_start_date, ";
            $sql .= "YEAR(school_year_end_date) as end_year, ";
            $sql .= "school_year_end_date, ";
            $sql .= "school_year_enrollment_start_date, ";
            $sql .= "school_year_enrollment_end_date, ";
            $sql .= "school_year_is_enrollment_open ";
            $sql .= "from {$this->tblSchoolYear} ";
            $sql .= "order by school_year_is_active desc, ";
            $sql .= "school_year_start_date desc ";
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
            $sql .= "school_year_aid, ";
            $sql .= "school_year_is_active, ";
            $sql .= "YEAR(school_year_start_date) as start_year, ";
            $sql .= "school_year_start_date, ";
            $sql .= "YEAR(school_year_end_date) as end_year, ";
            $sql .= "school_year_end_date, ";
            $sql .= "school_year_enrollment_start_date, ";
            $sql .= "school_year_enrollment_end_date, ";
            $sql .= "school_year_is_enrollment_open ";
            $sql .= "from {$this->tblSchoolYear} ";
            $sql .= "order by school_year_is_active desc, ";
            $sql .= "school_year_start_date desc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->school_year_start - 1,
                "total" => $this->school_year_total,
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
            $sql .= "school_year_aid, ";
            $sql .= "school_year_is_active, ";
            $sql .= "YEAR(school_year_start_date) as start_year, ";
            $sql .= "school_year_start_date, ";
            $sql .= "YEAR(school_year_end_date) as end_year, ";
            $sql .= "school_year_end_date, ";
            $sql .= "school_year_enrollment_start_date, ";
            $sql .= "school_year_enrollment_end_date, ";
            $sql .= "school_year_is_enrollment_open ";
            $sql .= "from {$this->tblSchoolYear} ";
            $sql .= "where ( ";
            $sql .= "school_year_start_date like :school_year_start_date ";
            $sql .= "or school_year_end_date like :school_year_end_date ";
            $sql .= "or school_year_enrollment_start_date like :school_year_enrollment_start_date ";
            $sql .= "or school_year_enrollment_end_date like :school_year_enrollment_end_date ";
            $sql .= "or school_year_is_enrollment_open like :school_year_is_enrollment_open ";
            $sql .= ") ";
            $sql .= "order by school_year_is_active desc, ";
            $sql .= "school_year_start_date desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_start_date" => "%{$this->school_year_search}%",
                "school_year_end_date" => "%{$this->school_year_search}%",
                "school_year_enrollment_start_date" => "%{$this->school_year_search}%",
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
            $sql = "select * from {$this->tblSchoolYear} ";
            $sql .= "where school_year_aid = :school_year_aid ";
            $sql .= "order by user_other_fname asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_aid" => $this->school_year_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read last school year
    public function readLastSchoolYear()
    {
        try {
            $sql = "select ";
            $sql .= "school_year_aid, ";
            $sql .= "school_year_is_active, ";
            $sql .= "YEAR(school_year_start_date) as start_year, ";
            $sql .= "school_year_start_date, ";
            $sql .= "YEAR(school_year_end_date) as end_year, ";
            $sql .= "school_year_end_date, ";
            $sql .= "school_year_is_enrollment_open ";
            $sql .= "from {$this->tblSchoolYear} ";
            $sql .= "where school_year_is_active = 1 ";
            $sql .= "order by ";
            $sql .= "school_year_start_date desc ";
            $sql .= "limit 1 ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblSchoolYear} set ";
            $sql .= "school_year_start_date = :school_year_start_date, ";
            $sql .= "school_year_end_date = :school_year_end_date, ";
            $sql .= "school_year_is_enrollment_open = :school_year_is_enrollment_open, ";
            $sql .= "school_year_datetime = :school_year_datetime ";
            $sql .= "where school_year_aid = :school_year_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_start_date" => $this->school_year_start_date,
                "school_year_end_date" => $this->school_year_end_date,
                "school_year_is_enrollment_open" => $this->school_year_is_enrollment_open,
                "school_year_datetime" => $this->school_year_datetime,
                "school_year_aid" => $this->school_year_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateEnrollmentDate()
    {
        try {
            $sql = "update {$this->tblSchoolYear} set ";
            $sql .= "school_year_enrollment_start_date = :school_year_enrollment_start_date, ";
            $sql .= "school_year_enrollment_end_date = :school_year_enrollment_end_date, ";
            $sql .= "school_year_datetime = :school_year_datetime ";
            $sql .= "where school_year_aid = :school_year_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_enrollment_start_date" => $this->school_year_enrollment_start_date,
                "school_year_enrollment_end_date" => $this->school_year_enrollment_end_date,
                "school_year_datetime" => $this->school_year_datetime,
                "school_year_aid" => $this->school_year_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblSchoolYear} set ";
            $sql .= "school_year_is_active = :school_year_is_active, ";
            $sql .= "school_year_datetime = :school_year_datetime ";
            $sql .= "where school_year_aid = :school_year_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_is_active" => $this->school_year_is_active,
                "school_year_datetime" => $this->school_year_datetime,
                "school_year_aid" => $this->school_year_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblSchoolYear} ";
            $sql .= "where school_year_aid = :school_year_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_aid" => $this->school_year_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // validatior 

    // year
    public function checkName()
    {
        try {
            $sql = "select YEAR(school_year_start_date) from {$this->tblSchoolYear} ";
            $sql .= "where YEAR(school_year_start_date) = YEAR(:school_year_start_date) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_start_date" => "{$this->school_year_start_date}",
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
            $sql = "select * ";
            $sql .= "from {$this->tblStudentsSY} ";
            $sql .= "where school_year_students_sy_id = :school_year_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "school_year_aid" => $this->school_year_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
