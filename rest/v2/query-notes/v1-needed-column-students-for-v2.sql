SELECT
student_info_aid
,student_info_aid /* is active */
,student_info_user_id
,student_info_reference_no
,student_info_fname
,student_info_mname
,student_info_lname
,student_info_gender
,student_info_bday
,student_info_birth_place
,student_info_email
,student_info_mobile
,student_info_landline
,student_info_adress_id
,student_info_institutional_email
,student_info_medical_doctor
,student_info_medical_contact
,student_info_medical_notes
,student_info_family_circumstances
,student_info_created
,student_info_datetime
FROM 
dbpzz0guc0yztg.fca_student_info as student
,dbpzz0guc0yztg.fca_settings_users
where
student_info_user_id = settings_users_aid;