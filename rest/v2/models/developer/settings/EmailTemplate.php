<?php
class EmailTemplate
{
    public $email_template_aid;
    public $email_template_is_active;
    public $email_template_name;
    public $email_template_subject;
    public $email_template_content;
    public $email_template_receiver_id;
    public $email_template_category;
    public $email_template_cc_email;
    public $email_template_cc_email_two;
    public $email_template_created;
    public $email_template_updated;

    public $connection;
    public $lastInsertedId;
    public $email_template_start;
    public $email_template_total;
    public $email_template_search;
    public $tblEmailTemplate;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblEmailTemplate = "fcav2_settings_email_template";
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblEmailTemplate} ";
            $sql .= "( email_template_is_active, ";
            $sql .= "email_template_name, ";
            $sql .= "email_template_subject, ";
            $sql .= "email_template_content, ";
            $sql .= "email_template_receiver_id, ";
            $sql .= "email_template_category, ";
            $sql .= "email_template_cc_email, ";
            $sql .= "email_template_cc_email_two, ";
            $sql .= "email_template_created, ";
            $sql .= "email_template_updated ) values ( ";
            $sql .= ":email_template_is_active, ";
            $sql .= ":email_template_name, ";
            $sql .= ":email_template_subject, ";
            $sql .= ":email_template_content, ";
            $sql .= ":email_template_receiver_id, ";
            $sql .= ":email_template_category, ";
            $sql .= ":email_template_cc_email, ";
            $sql .= ":email_template_cc_email_two, ";
            $sql .= ":email_template_created, ";
            $sql .= ":email_template_updated ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "email_template_is_active" => $this->email_template_is_active,
                "email_template_name" => $this->email_template_name,
                "email_template_subject" => $this->email_template_subject,
                "email_template_content" => $this->email_template_content,
                "email_template_receiver_id" => $this->email_template_receiver_id,
                "email_template_category" => $this->email_template_category,
                "email_template_cc_email" => $this->email_template_cc_email,
                "email_template_cc_email_two" => $this->email_template_cc_email_two,
                "email_template_created" => $this->email_template_created,
                "email_template_updated" => $this->email_template_updated,
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
            $sql = "select email_template_aid, ";
            $sql .= "email_template_is_active, ";
            $sql .= "email_template_name, ";
            $sql .= "email_template_subject, ";
            $sql .= "email_template_content, ";
            $sql .= "email_template_receiver_id, ";
            $sql .= "email_template_category, ";
            $sql .= "email_template_cc_email, ";
            $sql .= "email_template_cc_email_two ";
            $sql .= "from {$this->tblEmailTemplate} ";
            $sql .= "order by email_template_is_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblEmailTemplate} set ";
            $sql .= "email_template_name = :email_template_name, ";
            $sql .= "email_template_subject = :email_template_subject, ";
            $sql .= "email_template_content = :email_template_content, ";
            $sql .= "email_template_receiver_id = :email_template_receiver_id, ";
            $sql .= "email_template_category = :email_template_category, ";
            $sql .= "email_template_cc_email = :email_template_cc_email, ";
            $sql .= "email_template_cc_email_two = :email_template_cc_email_two, ";
            $sql .= "email_template_updated = :email_template_updated ";
            $sql .= "where email_template_aid = :email_template_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "email_template_name" => $this->email_template_name,
                "email_template_subject" => $this->email_template_subject,
                "email_template_content" => $this->email_template_content,
                "email_template_receiver_id" => $this->email_template_receiver_id,
                "email_template_category" => $this->email_template_category,
                "email_template_cc_email" => $this->email_template_cc_email,
                "email_template_cc_email_two" => $this->email_template_cc_email_two,
                "email_template_updated" => $this->email_template_updated,
                "email_template_aid" => $this->email_template_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblEmailTemplate} set ";
            $sql .= "email_template_is_active = :email_template_is_active, ";
            $sql .= "email_template_updated = :email_template_updated ";
            $sql .= "where email_template_aid = :email_template_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "email_template_is_active" => $this->email_template_is_active,
                "email_template_updated" => $this->email_template_updated,
                "email_template_aid" => $this->email_template_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblEmailTemplate} ";
            $sql .= "where email_template_aid = :email_template_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "email_template_aid" => $this->email_template_aid,
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
            $sql = "select email_template_name from {$this->tblEmailTemplate} ";
            $sql .= "where email_template_name = :email_template_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "email_template_name" => "{$this->email_template_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
