SELECT
student_info_aid
,student_info_aid /* is active */
,student_info_aid /* sy id */
,student_info_aid /* student id */
,student_info_grade_id 
,student_info_learning_type
,student_info_last_school
,student_info_last_gpa
,student_info_last_grade /* grade id */
,student_info_school_address
,student_info_family_circumstances
,student_info_is_it_notify /* is notify */
,student_info_is_it_notify /* is accept payment */
,student_info_is_it_notify /* shcool fees id */
,student_info_is_it_notify /* student rate id */
,student_info_is_it_notify /* primary discount id */
,student_info_is_it_notify /* additional discount id */
,student_info_conduct
,student_info_declaration
,student_info_parent_consent
,student_info_parent_commitment
,student_info_created
,student_info_datetime
FROM 
dbpzz0guc0yztg.fca_student_info as student
,dbpzz0guc0yztg.fca_settings_users
,dbpzz0guc0yztg.fca_settings_grade_level as grade
,dbpzz0guc0yztg.fca_student_requirement_finance as finance
where
student_info_user_id = settings_users_aid
and
student_requirement_finance_student_id = student_info_user_id;