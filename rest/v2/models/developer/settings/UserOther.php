<?php
class UserOther
{
    public $user_other_aid;
    public $user_other_is_active;
    public $user_other_fname;
    public $user_other_lname;
    public $user_other_email;
    public $user_other_new_email;
    public $user_other_role_id;
    public $user_other_key;
    public $user_other_password;
    public $user_other_created;
    public $user_other_datetime;

    public $parents_old_email;

    public $connection;
    public $lastInsertedId;
    public $user_other_start;
    public $user_other_total;
    public $user_other_search;

    public $tblUserOther;
    public $tblStaff;
    public $tblRole;
    public $tblParents;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblUserOther = "fcav2_settings_user_other";
        $this->tblRole = "fcav2_settings_role";
        $this->tblStaff = "fcav2_settings_staff";
        $this->tblParents = "fcav2_parents";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblUserOther} ";
            $sql .= "( user_other_fname, ";
            $sql .= "user_other_lname, ";
            $sql .= "user_other_is_active, ";
            $sql .= "user_other_email, ";
            $sql .= "user_other_role_id, ";
            $sql .= "user_other_key, ";
            $sql .= "user_other_created, ";
            $sql .= "user_other_datetime ) values ( ";
            $sql .= ":user_other_fname, ";
            $sql .= ":user_other_lname, ";
            $sql .= ":user_other_is_active, ";
            $sql .= ":user_other_email, ";
            $sql .= ":user_other_role_id, ";
            $sql .= ":user_other_key, ";
            $sql .= ":user_other_created, ";
            $sql .= ":user_other_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_fname" => $this->user_other_fname,
                "user_other_lname" => $this->user_other_lname,
                "user_other_is_active" => $this->user_other_is_active,
                "user_other_email" => $this->user_other_email,
                "user_other_role_id" => $this->user_other_role_id,
                "user_other_key" => $this->user_other_key,
                "user_other_created" => $this->user_other_created,
                "user_other_datetime" => $this->user_other_datetime,
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
            $sql = "select user.user_other_fname, ";
            $sql .= "user.user_other_lname, ";
            $sql .= "user.user_other_is_active, ";
            $sql .= "user.user_other_email, ";
            $sql .= "user.user_other_role_id, ";
            $sql .= "role.*, ";
            $sql .= "user.user_other_aid ";
            $sql .= "from {$this->tblUserOther} as user, ";
            $sql .= "{$this->tblRole} as role ";
            $sql .= "where user.user_other_role_id = role.role_aid ";
            $sql .= "order by user.user_other_is_active desc, ";
            $sql .= "user.user_other_fname ";
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
            $sql = "select user.user_other_fname, ";
            $sql .= "user.user_other_lname, ";
            $sql .= "user.user_other_is_active, ";
            $sql .= "user.user_other_email, ";
            $sql .= "user.user_other_role_id, ";
            $sql .= "role.*, ";
            $sql .= "user.user_other_aid ";
            $sql .= "from {$this->tblUserOther} as user, ";
            $sql .= "{$this->tblRole} as role ";
            $sql .= "where user.user_other_role_id = role.role_aid ";
            $sql .= "order by user.user_other_is_active desc, ";
            $sql .= "user.user_other_fname ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->user_other_start - 1,
                "total" => $this->user_other_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read login
    public function readLogin()
    {
        try {
            $sql = "select user.user_other_aid, ";
            $sql .= "user.user_other_is_active, ";
            $sql .= "user.user_other_fname, ";
            $sql .= "user.user_other_lname, ";
            $sql .= "user.user_other_email, ";
            $sql .= "user.user_other_password, ";
            $sql .= "role.* ";
            $sql .= "from {$this->tblUserOther} as user, ";
            $sql .= "{$this->tblRole} as role, ";
            $sql .= "{$this->tblStaff} as staff ";
            $sql .= "where user.user_other_role_id = role.role_aid ";
            $sql .= "and user.user_other_email like :user_other_email ";
            $sql .= "and user.user_other_is_active = 1 ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_email" => $this->user_other_email,
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
            $sql = "select user.user_other_fname, ";
            $sql .= "user.user_other_lname, ";
            $sql .= "user.user_other_is_active, ";
            $sql .= "user.user_other_email, ";
            $sql .= "user.user_other_role_id, ";
            $sql .= "role.*, ";
            $sql .= "user.user_other_aid ";
            $sql .= "from {$this->tblUserOther} as user, ";
            $sql .= "{$this->tblRole} as role ";
            $sql .= "where user.user_other_role_id = role.role_aid ";
            $sql .= "and ( user.user_other_fname like :user_other_fname ";
            $sql .= "or user.user_other_lname like :user_other_lname ";
            $sql .= "or user.user_other_email like :user_other_email ";
            $sql .= "or concat(user.user_other_lname, ' ' , user.user_other_lname) like :fullname ";
            $sql .= ") ";
            $sql .= "order by user.user_other_is_active desc, ";
            $sql .= "user.user_other_fname ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_fname" => "%{$this->user_other_search}%",
                "user_other_lname" => "%{$this->user_other_search}%",
                "user_other_email" => "%{$this->user_other_search}%",
                "fullname" => "%{$this->user_other_search}%",
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
            $sql = "select * from {$this->tblUserOther} ";
            $sql .= "where user_other_aid = :user_other_aid ";
            $sql .= "order by user_other_fname asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_aid" => $this->user_other_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read key
    public function readKey()
    {
        try {
            $sql = "select user_other_key from {$this->tblUserOther} ";
            $sql .= "where user_other_key = :user_other_key ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_key" => $this->user_other_key,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read key for email verification
    public function readKeyChangeEmail()
    {
        try {
            $sql = "select ";
            $sql .= "user_other_key, ";
            $sql .= "user_other_email, ";
            $sql .= "user_other_new_email ";
            $sql .= "from {$this->tblUserOther} ";
            $sql .= "where user_other_key = :user_other_key ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_key" => $this->user_other_key,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read role
    public function readRole()
    {
        try {
            $sql = "select * from {$this->tblRole} ";
            $sql .= "where role_is_active = 1 ";
            $sql .= "and role_is_developer = 0 ";
            $sql .= "order by role_is_active desc, ";
            $sql .= "role_name asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read staff
    public function readStaff()
    {
        try {
            $sql = "select ";
            $sql .= "settings_staff_aid, ";
            $sql .= "settings_staff_fname, ";
            $sql .= "settings_staff_lname, ";
            $sql .= "settings_staff_email, ";
            $sql .= "concat(settings_staff_fname, ' ', settings_staff_lname) as fullname ";
            $sql .= "from {$this->tblStaff} ";
            $sql .= "where settings_staff_is_active = 1 ";
            $sql .= "order by settings_staff_fname, ";
            $sql .= "settings_staff_lname ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read parents
    public function readParents()
    {
        try {
            $sql = "select ";
            $sql .= "parents_aid, ";
            $sql .= "parents_fname, ";
            $sql .= "parents_lname, ";
            $sql .= "parents_email, ";
            $sql .= "concat(parents_fname, ' ', parents_lname) as fullname ";
            $sql .= "from {$this->tblParents} ";
            $sql .= "where parents_is_active = 1 ";
            $sql .= "order by parents_fname, ";
            $sql .= "parents_lname ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update
    public function update()
    {
        try {
            $sql = "update {$this->tblUserOther} set ";
            $sql .= "user_other_fname = :user_other_fname, ";
            $sql .= "user_other_lname = :user_other_lname, ";
            $sql .= "user_other_role_id = :user_other_role_id, ";
            $sql .= "user_other_datetime = :user_other_datetime ";
            $sql .= "where user_other_aid  = :user_other_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_fname" => $this->user_other_fname,
                "user_other_lname" => $this->user_other_lname,
                "user_other_role_id" => $this->user_other_role_id,
                "user_other_datetime" => $this->user_other_datetime,
                "user_other_aid" => $this->user_other_aid,
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
            $sql .= "user_other_new_email = :user_other_email, ";
            $sql .= "user_other_datetime = :user_other_datetime ";
            $sql .= "where user_other_aid  = :user_other_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_key" => $this->user_other_key,
                "user_other_email" => $this->user_other_email,
                "user_other_datetime" => $this->user_other_datetime,
                "user_other_aid" => $this->user_other_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update email
    public function updateEmailForUser()
    {
        try {
            $sql = "update {$this->tblUserOther} set ";
            $sql .= "user_other_email = :user_other_email, ";
            $sql .= "user_other_new_email = '', ";
            $sql .= "user_other_key = '', ";
            $sql .= "user_other_datetime = :user_other_datetime ";
            $sql .= "where user_other_key = :user_other_key ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_email" => $this->user_other_email,
                "user_other_datetime" => $this->user_other_datetime,
                "user_other_key" => $this->user_other_key,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update email
    public function updateEmailForParents()
    {
        try {
            $sql = "update {$this->tblParents} set ";
            $sql .= "parents_email = :parents_email, ";
            $sql .= "parents_datetime = :user_other_datetime ";
            $sql .= "where parents_email = :parents_old_email ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "parents_email" => $this->user_other_email,
                "user_other_datetime" => $this->user_other_datetime,
                "parents_old_email" => $this->parents_old_email,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // set password
    public function setPassword()
    {
        try {
            $sql = "update {$this->tblUserOther} set ";
            $sql .= "user_other_password = :user_other_password, ";
            $sql .= "user_other_key = '', ";
            $sql .= "user_other_datetime = :user_other_datetime ";
            $sql .= "where user_other_key  = :user_other_key ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_password" => $this->user_other_password,
                "user_other_datetime" => $this->user_other_datetime,
                "user_other_key" => $this->user_other_key,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // reset password
    public function resetPassword()
    {
        try {
            $sql = "update {$this->tblUserOther} set ";
            $sql .= "user_other_key = :user_other_key, ";
            $sql .= "user_other_datetime = :user_other_datetime ";
            $sql .= "where user_other_email  = :user_other_email ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_key" => $this->user_other_key,
                "user_other_datetime" => $this->user_other_datetime,
                "user_other_email" => $this->user_other_email,
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
            $sql = "update {$this->tblUserOther} set ";
            $sql .= "user_other_is_active = :user_other_is_active, ";
            $sql .= "user_other_datetime = :user_other_datetime ";
            $sql .= "where user_other_aid = :user_other_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_is_active" => $this->user_other_is_active,
                "user_other_datetime" => $this->user_other_datetime,
                "user_other_aid" => $this->user_other_aid,
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
            $sql = "delete from {$this->tblUserOther} ";
            $sql .= "where user_other_aid = :user_other_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_aid" => $this->user_other_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // validator

    // email
    public function checkEmail()
    {
        try {
            $sql = "select user_other_email from {$this->tblUserOther} ";
            $sql .= "where user_other_email = :user_other_email ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_email" => "{$this->user_other_email}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
