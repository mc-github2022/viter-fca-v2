<?php
class Notification
{
    public $notification_aid ;
    public $notification_active;
    public $notification_department_id;
    public $notification_email;
    public $notification_name;
    public $notification_created;
    public $notification_datetime;

    public $connection;
    public $lastInsertedId;
    public $notification_start;
    public $notification_total;
    public $notification_search;

    public $tblNotification;
    public $tblDepartment;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblNotification = "fca_settings_notification";
        $this->tblDepartment = "fca_settings_department";
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblNotification} ";
            $sql .= "( notification_active, ";
            $sql .= "notification_name, ";
            $sql .= "notification_department_id, ";
            $sql .= "notification_email, ";
            $sql .= "notification_created, ";
            $sql .= "notification_datetime ) values ( ";
            $sql .= ":notification_active, ";
            $sql .= ":notification_name, ";
            $sql .= ":notification_department_id, ";
            $sql .= ":notification_email, ";
            $sql .= ":notification_created, ";
            $sql .= ":notification_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "notification_active" => $this->notification_active,
                "notification_name" => $this->notification_name,
                "notification_department_id" => $this->notification_department_id,
                "notification_email" => $this->notification_email,
                "notification_created" => $this->notification_created,
                "notification_datetime" => $this->notification_datetime,
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
            $sql = "select * from {$this->tblNotification} as notif, ";
            $sql .= "{$this->tblDepartment} as dept ";
            $sql .= "where notif.notification_department_id = dept.department_aid ";
            $sql .= "order by notification_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblNotification} set ";
            $sql .= "notification_department_id = :notification_department_id, ";
            $sql .= "notification_email = :notification_email, ";
            $sql .= "notification_name = :notification_name, ";
            $sql .= "notification_datetime = :notification_datetime ";
            $sql .= "where notification_aid  = :notification_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "notification_department_id" => $this->notification_department_id,
                "notification_email" => $this->notification_email,
                "notification_name" => $this->notification_name,
                "notification_datetime" => $this->notification_datetime,
                "notification_aid" => $this->notification_aid ,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblNotification} set ";
            $sql .= "notification_active = :notification_active, ";
            $sql .= "notification_datetime = :notification_datetime ";
            $sql .= "where notification_aid  = :notification_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "notification_active" => $this->notification_active,
                "notification_datetime" => $this->notification_datetime,
                "notification_aid" => $this->notification_aid ,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblNotification} ";
            $sql .= "where notification_aid = :notification_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "notification_aid" => $this->notification_aid,
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
            $sql = "select notification_name from {$this->tblNotification} ";
            $sql .= "where notification_name = :notification_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "notification_name" => "{$this->notification_name}",
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
            $sql = "select employee_last_name, ";
            $sql .= "employee_first_name, ";
            $sql .= "employee_aid ";
            $sql .= "from {$this->tblEmployee} ";
            $sql .= "where employee_notification_id = :notification_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "notification_aid" => $this->notification_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
