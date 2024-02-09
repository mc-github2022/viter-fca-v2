<?php
class ReqRegistrar
{
    public $requirement_registrar_user_aid ;
    public $requirement_registrar_user_id;
    public $requirement_registrar_student_id;
    public $requirement_registrar_submitted;
    public $requirement_registrar_remarks;
    public $requirement_registrar_created;
    public $requirement_registrar_datetime;

    public $connection;
    public $lastInsertedId;
    public $registrar_start;
    public $registrar_total;
    public $registrar_search;
    public $tblReqRegistrar;
    public $tblStudent;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblStudent = "fca_student_info";
        $this->tblReqRegistrar = "fca_requirement_registrar";
        
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblReqRegistrar} ";
            $sql .= "( requirement_registrar_user_id, ";
            $sql .= "requirement_registrar_student_id, ";
            $sql .= "requirement_registrar_submitted, ";
            $sql .= "requirement_registrar_remarks, ";
            $sql .= "requirement_registrar_created, ";
            $sql .= "requirement_registrar_datetime ) values ( ";
            $sql .= ":requirement_registrar_user_id, ";
            $sql .= ":requirement_registrar_student_id, ";
            $sql .= ":requirement_registrar_submitted, ";
            $sql .= ":requirement_registrar_remarks, ";
            $sql .= ":requirement_registrar_created, ";
            $sql .= ":requirement_registrar_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "requirement_registrar_user_id" => $this->requirement_registrar_user_id,
                "requirement_registrar_student_id" => $this->requirement_registrar_student_id,
                "requirement_registrar_submitted" => $this->requirement_registrar_submitted,
                "requirement_registrar_remarks" => $this->requirement_registrar_remarks,
                "requirement_registrar_created" => $this->requirement_registrar_created,
                "requirement_registrar_datetime" => $this->requirement_registrar_datetime,
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
            $sql = "select requirement_registrar_user_aid, ";
            $sql .= "requirement_registrar_user_id, ";
            $sql .= "requirement_registrar_submitted, ";
            $sql .= "requirement_registrar_remarks ";
            $sql .= "from {$this->tblReqRegistrar} ";
            $sql .= "order by requirement_registrar_user_id desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readByStudentID()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblReqRegistrar} as registar, ";
            $sql .= "{$this->tblStudent} as student ";
            $sql .= "where student.student_info_aid = registar.requirement_registrar_student_id ";
            $query = $this->connection->query($sql);
            $query->execute([
                "requirement_registrar_student_id" => $this->requirement_registrar_student_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblReqRegistrar} set ";
            $sql .= "requirement_registrar_submitted = :requirement_registrar_submitted, ";
            $sql .= "requirement_registrar_remarks = :requirement_registrar_remarks, ";
            $sql .= "requirement_registrar_datetime = :requirement_registrar_datetime ";
            $sql .= "where requirement_registrar_user_aid  = :requirement_registrar_user_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "requirement_registrar_submitted" => $this->requirement_registrar_submitted,
                "requirement_registrar_remarks" => $this->requirement_registrar_remarks,
                "requirement_registrar_datetime" => $this->requirement_registrar_datetime,
                "requirement_registrar_user_aid" => $this->requirement_registrar_user_aid ,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblReqRegistrar} set ";
            $sql .= "requirement_registrar_user_id = :requirement_registrar_user_id, ";
            $sql .= "requirement_registrar_datetime = :requirement_registrar_datetime ";
            $sql .= "where requirement_registrar_user_aid  = :requirement_registrar_user_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "requirement_registrar_user_id" => $this->requirement_registrar_user_id,
                "requirement_registrar_datetime" => $this->requirement_registrar_datetime,
                "requirement_registrar_user_aid" => $this->requirement_registrar_user_aid ,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblReqRegistrar} ";
            $sql .= "where requirement_registrar_user_aid = :requirement_registrar_user_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "requirement_registrar_user_aid" => $this->requirement_registrar_user_aid
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
            $sql = "select requirement_registrar_submitted from {$this->tblReqRegistrar} ";
            $sql .= "where requirement_registrar_submitted = :requirement_registrar_submitted ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "requirement_registrar_submitted" => "{$this->requirement_registrar_submitted}",
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
            $sql .= "from {$this->tblTuitionFee} ";
            $sql .= "where tuition_fee_grade_id = :requirement_registrar_user_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "requirement_registrar_user_aid" => $this->requirement_registrar_user_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
