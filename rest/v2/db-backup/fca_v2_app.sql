-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2024 at 09:05 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fca_v2_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_emergency_contact`
--

CREATE TABLE `fcav2_emergency_contact` (
  `emergency_contact_aid` int(11) NOT NULL,
  `emergency_contact_parent_id` int(11) NOT NULL,
  `emergency_contact_name` varchar(100) NOT NULL,
  `emergency_contact_mobile` varchar(30) NOT NULL,
  `emergency_contact_landline` varchar(30) NOT NULL,
  `emergency_contact_level` varchar(30) NOT NULL,
  `emergency_contact_created` varchar(20) NOT NULL,
  `emergency_contact_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_guardian`
--

CREATE TABLE `fcav2_guardian` (
  `guardian_aid` int(11) NOT NULL,
  `guardian_active` tinyint(1) NOT NULL,
  `guardian_relationship_id` int(11) NOT NULL,
  `guardian_parent_id` int(11) NOT NULL,
  `guardian_is_reside` tinyint(1) NOT NULL,
  `guardian_salutation` varchar(10) NOT NULL,
  `guardian_fname` varchar(50) NOT NULL,
  `guardian_mname` int(20) NOT NULL,
  `guardian_maiden_name` varchar(20) NOT NULL,
  `guardian_lname` varchar(50) NOT NULL,
  `guardian_email` varchar(100) NOT NULL,
  `guardian_mobile` varchar(30) NOT NULL,
  `guardian_landline` varchar(30) NOT NULL,
  `guardian_address` varchar(50) NOT NULL,
  `guardian_province` varchar(30) NOT NULL,
  `guardian_city` varchar(20) NOT NULL,
  `guardian_zipcode` varchar(10) NOT NULL,
  `guardian_country` varchar(20) NOT NULL,
  `guardian_religion` varchar(30) NOT NULL,
  `guardian_occupation` varchar(30) NOT NULL,
  `guardian_datetime` varchar(20) NOT NULL,
  `guardian_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_guardian`
--

INSERT INTO `fcav2_guardian` (`guardian_aid`, `guardian_active`, `guardian_relationship_id`, `guardian_parent_id`, `guardian_is_reside`, `guardian_salutation`, `guardian_fname`, `guardian_mname`, `guardian_maiden_name`, `guardian_lname`, `guardian_email`, `guardian_mobile`, `guardian_landline`, `guardian_address`, `guardian_province`, `guardian_city`, `guardian_zipcode`, `guardian_country`, `guardian_religion`, `guardian_occupation`, `guardian_datetime`, `guardian_created`) VALUES
(1, 0, 1, 1, 1, 'mr', 'Ramon', 0, '', 'Plaza', 'macmerin32@gmail.com', '09491040057', '', 'Block 8 Lot 6, Batubalani Subdivision Sitio 10', 'Laguna', 'San Pablo City', '4000', 'Philippines', 'Christian', 'I.T', '2024-02-27 13:31:35', '2024-02-27 13:31:35'),
(2, 0, 2, 1, 1, 'mrs', 'Bhea', 0, '', 'Del Monte', 'bhea@gmail.com', '09662993797', '', 'Brgy. Santo Nino, Frontline Campus', 'Laguna', 'San Pablo City', '4000', 'Philippines', 'Christian', 'Accounting', '2024-02-27 13:35:05', '2024-02-27 13:35:05');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_parents`
--

CREATE TABLE `fcav2_parents` (
  `parents_aid` int(11) NOT NULL,
  `parents_is_active` tinyint(1) NOT NULL,
  `parents_email` varchar(50) NOT NULL,
  `parents_fname` varchar(20) NOT NULL,
  `parents_lname` varchar(20) NOT NULL,
  `parents_father_income` varchar(10) NOT NULL,
  `parents_mother_income` varchar(10) NOT NULL,
  `parents_financier_name` varchar(50) NOT NULL,
  `parents_financier_relationship` varchar(20) NOT NULL,
  `parents_financier_occupation` varchar(20) NOT NULL,
  `parents_financier_income` varchar(10) NOT NULL,
  `parents_datetime` varchar(20) NOT NULL,
  `parents_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_parents`
--

INSERT INTO `fcav2_parents` (`parents_aid`, `parents_is_active`, `parents_email`, `parents_fname`, `parents_lname`, `parents_father_income`, `parents_mother_income`, `parents_financier_name`, `parents_financier_relationship`, `parents_financier_occupation`, `parents_financier_income`, `parents_datetime`, `parents_created`) VALUES
(1, 1, 'macdet21@gmail.com', 'Patrick', 'Reyes', '', '', '', '', '', '', '2024-02-20 07:45:59', '2024-02-20 07:45:59');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_school_year_students`
--

CREATE TABLE `fcav2_school_year_students` (
  `school_year_students_aid` int(11) NOT NULL,
  `school_year_students_is_active` tinyint(1) NOT NULL,
  `school_year_students_sy_id` int(11) NOT NULL,
  `school_year_students_student_id` int(11) NOT NULL,
  `school_year_students_last_learning_type` varchar(20) NOT NULL,
  `school_year_students_last_school_attended` varchar(255) NOT NULL,
  `school_year_students_last_gpa` varchar(20) NOT NULL,
  `school_year_students_last_grade_level_id` int(11) NOT NULL,
  `school_year_students_last_school_address` text NOT NULL,
  `school_year_students_last_remarks` text NOT NULL,
  `school_year_students_is_notify` tinyint(1) NOT NULL,
  `school_year_students_is_accept_payment` tinyint(1) NOT NULL,
  `school_year_students_schedule_fees_id` int(11) NOT NULL,
  `school_year_students_rate_id` int(11) NOT NULL,
  `school_year_students_primary_discount_id` int(11) NOT NULL,
  `school_year_students_additional_discount_id` int(11) NOT NULL,
  `school_year_students_last_coc_is_agree` tinyint(1) NOT NULL,
  `school_year_students_last_parent_declaration_is_agree` tinyint(1) NOT NULL,
  `school_year_students_last_parent_consent_is_agree` tinyint(1) NOT NULL,
  `school_year_students_last_parent_commitment_is_agree` tinyint(1) NOT NULL,
  `school_year_students_created` datetime NOT NULL,
  `school_year_students_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_school_year_students`
--

INSERT INTO `fcav2_school_year_students` (`school_year_students_aid`, `school_year_students_is_active`, `school_year_students_sy_id`, `school_year_students_student_id`, `school_year_students_last_learning_type`, `school_year_students_last_school_attended`, `school_year_students_last_gpa`, `school_year_students_last_grade_level_id`, `school_year_students_last_school_address`, `school_year_students_last_remarks`, `school_year_students_is_notify`, `school_year_students_is_accept_payment`, `school_year_students_schedule_fees_id`, `school_year_students_rate_id`, `school_year_students_primary_discount_id`, `school_year_students_additional_discount_id`, `school_year_students_last_coc_is_agree`, `school_year_students_last_parent_declaration_is_agree`, `school_year_students_last_parent_consent_is_agree`, `school_year_students_last_parent_commitment_is_agree`, `school_year_students_created`, `school_year_students_datetime`) VALUES
(1, 1, 4, 1, 'onsite', '', '', 1, '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2024-02-23 12:16:30', '2024-02-26 10:27:50'),
(2, 1, 4, 2, 'online', '', '', 3, '', '', 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, '2024-02-26 09:52:47', '2024-02-27 13:47:58');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_school_year_students_requirements`
--

CREATE TABLE `fcav2_school_year_students_requirements` (
  `students_requirements_aid` int(11) NOT NULL,
  `students_requirements_is_active` tinyint(1) NOT NULL,
  `students_requirements_sy_id` int(11) NOT NULL,
  `students_requirements_student_id` int(11) NOT NULL,
  `students_requirements_id` int(11) NOT NULL,
  `students_requirements_remarks` text NOT NULL,
  `students_requirements_created` datetime NOT NULL,
  `students_requirements_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_school_year_students_requirements`
--

INSERT INTO `fcav2_school_year_students_requirements` (`students_requirements_aid`, `students_requirements_is_active`, `students_requirements_sy_id`, `students_requirements_student_id`, `students_requirements_id`, `students_requirements_remarks`, `students_requirements_created`, `students_requirements_datetime`) VALUES
(12, 1, 4, 1, 6, '', '2024-02-27 10:29:54', '2024-02-27 10:29:54'),
(14, 1, 4, 1, 3, '', '2024-02-27 10:30:03', '2024-02-27 10:30:03'),
(15, 1, 4, 1, 4, '', '2024-02-27 10:30:04', '2024-02-27 10:30:04'),
(16, 1, 4, 1, 5, '', '2024-02-27 10:30:04', '2024-02-27 10:30:04'),
(18, 1, 4, 1, 1, '', '2024-02-27 14:51:37', '2024-02-27 14:51:37'),
(31, 1, 4, 2, 2, '', '2024-02-27 15:14:19', '2024-02-27 15:14:19');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_department`
--

CREATE TABLE `fcav2_settings_department` (
  `department_aid` int(11) NOT NULL,
  `department_active` tinyint(1) NOT NULL,
  `department_name` varchar(50) NOT NULL,
  `department_created` varchar(20) NOT NULL,
  `department_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_department`
--

INSERT INTO `fcav2_settings_department` (`department_aid`, `department_active`, `department_name`, `department_created`, `department_datetime`) VALUES
(1, 1, 'Registrar', '2024-02-26 14:45:14', '2024-02-26 14:45:45'),
(2, 1, 'IT', '2024-02-26 14:45:52', '2024-02-26 14:45:52'),
(3, 1, 'Finance', '2024-02-26 14:45:58', '2024-02-26 14:45:58');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_discount_additional`
--

CREATE TABLE `fcav2_settings_discount_additional` (
  `discount_additional_aid` int(11) NOT NULL,
  `discount_additional_is_active` tinyint(1) NOT NULL,
  `discount_additional_name` varchar(200) NOT NULL,
  `discount_additional_percent` varchar(20) NOT NULL,
  `discount_additional_amount` varchar(20) NOT NULL,
  `discount_additional_created` datetime NOT NULL,
  `discount_additional_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_discount_additional`
--

INSERT INTO `fcav2_settings_discount_additional` (`discount_additional_aid`, `discount_additional_is_active`, `discount_additional_name`, `discount_additional_percent`, `discount_additional_amount`, `discount_additional_created`, `discount_additional_updated`) VALUES
(1, 1, 'Enable Full Payment Discount?', '10', '', '2024-02-23 09:06:00', '2024-02-23 09:06:00'),
(2, 1, 'Enable New Student Promo?', '', '1500', '2024-02-23 09:06:36', '2024-02-23 09:06:36'),
(3, 1, 'Enable Early Bird Promo?', '', '', '2024-02-23 09:07:43', '2024-02-23 09:07:43');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_grade_level`
--

CREATE TABLE `fcav2_settings_grade_level` (
  `grade_level_aid` int(11) NOT NULL,
  `grade_level_active` tinyint(1) NOT NULL,
  `grade_level_name` varchar(50) NOT NULL,
  `grade_level_is_pre_school` tinyint(1) NOT NULL,
  `grade_level_created` datetime NOT NULL,
  `grade_level_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_grade_level`
--

INSERT INTO `fcav2_settings_grade_level` (`grade_level_aid`, `grade_level_active`, `grade_level_name`, `grade_level_is_pre_school`, `grade_level_created`, `grade_level_datetime`) VALUES
(1, 1, 'Grade 1', 0, '2024-02-23 08:15:25', '2024-02-23 08:15:25'),
(2, 1, 'Grade 2', 0, '2024-02-23 08:15:32', '2024-02-23 08:15:32'),
(3, 1, 'Grade 3', 0, '2024-02-23 08:15:37', '2024-02-23 08:15:37');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_learning_type`
--

CREATE TABLE `fcav2_settings_learning_type` (
  `learning_type_aid` int(11) NOT NULL,
  `learning_type_active` tinyint(1) NOT NULL,
  `learning_type_name` varchar(50) NOT NULL,
  `learning_type_created` varchar(20) NOT NULL,
  `learning_type_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_notification`
--

CREATE TABLE `fcav2_settings_notification` (
  `notification_aid` int(11) NOT NULL,
  `notification_active` tinyint(1) NOT NULL,
  `notification_department_id` int(11) NOT NULL,
  `notification_email` varchar(50) NOT NULL,
  `notification_name` varchar(50) NOT NULL,
  `notification_created` varchar(20) NOT NULL,
  `notification_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_relationship`
--

CREATE TABLE `fcav2_settings_relationship` (
  `relationship_aid` int(11) NOT NULL,
  `relationship_active` tinyint(1) NOT NULL,
  `relationship_name` varchar(50) NOT NULL,
  `relationship_is_maiden` tinyint(1) NOT NULL,
  `relationship_created` varchar(20) NOT NULL,
  `relationship_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_relationship`
--

INSERT INTO `fcav2_settings_relationship` (`relationship_aid`, `relationship_active`, `relationship_name`, `relationship_is_maiden`, `relationship_created`, `relationship_datetime`) VALUES
(1, 1, 'Father', 1, '2024-02-27 13:29:06', '2024-02-27 13:29:06'),
(2, 1, 'Mother', 1, '2024-02-27 13:29:14', '2024-02-27 13:29:14'),
(3, 1, 'Grandfather', 1, '2024-02-27 13:29:23', '2024-02-27 13:29:23'),
(4, 1, 'Grandmother', 1, '2024-02-27 13:29:31', '2024-02-27 13:29:31');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_requirement_finance`
--

CREATE TABLE `fcav2_settings_requirement_finance` (
  `requirement_finance_aid` int(11) NOT NULL,
  `requirement_finance_active` tinyint(1) NOT NULL,
  `requirement_finance_department_id` int(11) NOT NULL,
  `requirement_finance_name` varchar(50) NOT NULL,
  `requirement_finance_created` varchar(20) NOT NULL,
  `requirement_finance_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_requirement_it`
--

CREATE TABLE `fcav2_settings_requirement_it` (
  `requirement_it_aid` int(11) NOT NULL,
  `requirement_it_active` tinyint(1) NOT NULL,
  `requirement_it_department_id` int(11) NOT NULL,
  `requirement_it_name` varchar(50) NOT NULL,
  `requirement_it_created` varchar(20) NOT NULL,
  `requirement_it_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_requirement_registrar`
--

CREATE TABLE `fcav2_settings_requirement_registrar` (
  `requirement_registrar_aid` int(11) NOT NULL,
  `requirement_registrar_active` tinyint(1) NOT NULL,
  `requirement_registrar_department_id` int(11) NOT NULL,
  `requirement_registrar_name` varchar(120) NOT NULL,
  `requirement_registrar_created` varchar(20) NOT NULL,
  `requirement_registrar_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_requirement_registrar`
--

INSERT INTO `fcav2_settings_requirement_registrar` (`requirement_registrar_aid`, `requirement_registrar_active`, `requirement_registrar_department_id`, `requirement_registrar_name`, `requirement_registrar_created`, `requirement_registrar_datetime`) VALUES
(1, 1, 1, 'Certificate of Clearance (Financial and Property Responsibility)', '2024-02-26 14:46:25', '2024-02-26 14:46:25'),
(2, 1, 1, 'Form 137/SF10', '2024-02-26 14:46:39', '2024-02-26 14:46:39'),
(3, 1, 1, 'Good Moral Certificate', '2024-02-26 14:46:46', '2024-02-26 14:46:46'),
(4, 1, 1, 'LCR / Local Civil Registry Birth Certificate (Temporary Enrollment Only) OR', '2024-02-26 14:46:52', '2024-02-26 14:46:52'),
(5, 1, 1, 'Passport - Photocopy made at FCA (Temporary Enrollment Only)', '2024-02-26 14:46:59', '2024-02-26 14:46:59'),
(6, 1, 1, 'PSA / Philippine Statistics Authority Original Birth Certificate', '2024-02-26 14:47:05', '2024-02-26 14:47:05');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_role`
--

CREATE TABLE `fcav2_settings_role` (
  `role_aid` int(11) NOT NULL,
  `role_is_active` tinyint(1) NOT NULL,
  `role_name` varchar(50) NOT NULL,
  `role_description` text NOT NULL,
  `role_created` varchar(20) NOT NULL,
  `role_datetime` varchar(20) NOT NULL,
  `role_is_developer` tinyint(1) NOT NULL,
  `role_is_admin` tinyint(1) NOT NULL,
  `role_is_client` tinyint(1) NOT NULL,
  `role_is_parent` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_role`
--

INSERT INTO `fcav2_settings_role` (`role_aid`, `role_is_active`, `role_name`, `role_description`, `role_created`, `role_datetime`, `role_is_developer`, `role_is_admin`, `role_is_client`, `role_is_parent`) VALUES
(1, 1, 'developer', 'qqqqqq', '2023-12-19 14:07:05', '2023-12-19 14:07:05', 1, 0, 0, 0),
(2, 1, 'Admin', 'test', '2024-01-08 14:09:28', '2024-01-08 14:09:28', 0, 1, 0, 0),
(3, 1, 'Client', 'Parent or other user', '2024-01-10 09:15:52', '2024-01-10 09:15:52', 0, 0, 1, 0),
(4, 1, 'Parent', 'This is for parent only', '2024-02-14 07:49:38', '2024-02-14 07:49:38', 0, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_scheme`
--

CREATE TABLE `fcav2_settings_scheme` (
  `scheme_aid` int(11) NOT NULL,
  `scheme_active` tinyint(1) NOT NULL,
  `scheme_name` varchar(50) NOT NULL,
  `scheme_created` varchar(20) NOT NULL,
  `scheme_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_scheme`
--

INSERT INTO `fcav2_settings_scheme` (`scheme_aid`, `scheme_active`, `scheme_name`, `scheme_created`, `scheme_datetime`) VALUES
(1, 1, 'test', '2024-02-26 15:22:59', '2024-02-26 15:22:59'),
(2, 1, 'samp', '2024-02-26 15:25:17', '2024-02-26 15:25:17');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_school_year`
--

CREATE TABLE `fcav2_settings_school_year` (
  `school_year_aid` int(11) NOT NULL,
  `school_year_is_active` tinyint(1) NOT NULL,
  `school_year_start_date` varchar(20) NOT NULL,
  `school_year_end_date` varchar(20) NOT NULL,
  `school_year_enrollment_start_date` varchar(20) NOT NULL,
  `school_year_enrollment_end_date` varchar(20) NOT NULL,
  `school_year_is_enrollment_open` tinyint(1) NOT NULL,
  `school_year_created` datetime NOT NULL,
  `school_year_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_school_year`
--

INSERT INTO `fcav2_settings_school_year` (`school_year_aid`, `school_year_is_active`, `school_year_start_date`, `school_year_end_date`, `school_year_enrollment_start_date`, `school_year_enrollment_end_date`, `school_year_is_enrollment_open`, `school_year_created`, `school_year_datetime`) VALUES
(1, 0, '2023-03-20', '2024-02-22', '2024-02-26', '2024-03-01', 0, '2024-02-20 14:47:26', '0000-00-00 00:00:00'),
(2, 0, '2024-02-22', '2025-02-22', '', '', 0, '2024-02-22 10:49:49', '0000-00-00 00:00:00'),
(4, 1, '2025-02-22', '2024-02-21', '', '', 0, '2024-02-22 10:53:33', '0000-00-00 00:00:00'),
(5, 0, '2026-02-26', '2027-02-26', '', '', 0, '2024-02-26 12:32:06', '2024-02-26 12:32:06');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_staff`
--

CREATE TABLE `fcav2_settings_staff` (
  `settings_staff_aid` int(11) NOT NULL,
  `settings_staff_is_active` tinyint(1) NOT NULL,
  `settings_staff_fname` varchar(128) NOT NULL,
  `settings_staff_lname` varchar(128) NOT NULL,
  `settings_staff_email` varchar(255) NOT NULL,
  `settings_staff_created_at` datetime NOT NULL,
  `settings_staff_updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_staff`
--

INSERT INTO `fcav2_settings_staff` (`settings_staff_aid`, `settings_staff_is_active`, `settings_staff_fname`, `settings_staff_lname`, `settings_staff_email`, `settings_staff_created_at`, `settings_staff_updated_at`) VALUES
(1, 1, 'Mac', 'Mac', 'merin.ryanmark@gmail.com', '2024-02-15 10:11:20', '2024-02-15 10:11:20'),
(3, 1, 'Emman', 'Manalo', 'emmanuel.manalo@frontlinebusiness.com.ph', '2024-02-15 10:12:53', '2024-02-15 10:12:53'),
(4, 1, 'Rode', 'Delmonts', 'roderick@gmail.com', '2024-02-15 10:13:21', '2024-02-15 10:13:21'),
(5, 1, 'I-valo', 'Adao', 'valoadao@gmail.com', '2024-02-15 10:14:11', '2024-02-15 10:14:11'),
(6, 1, 'cy', 'pumasok', 'cy@gmail.com', '2024-02-15 10:14:25', '2024-02-15 10:14:25');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_tuition_category`
--

CREATE TABLE `fcav2_settings_tuition_category` (
  `tuition_category_aid` int(11) NOT NULL,
  `tuition_category_active` tinyint(1) NOT NULL,
  `tuition_category_name` varchar(50) NOT NULL,
  `tuition_category_created` varchar(20) NOT NULL,
  `tuition_category_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_tuition_category`
--

INSERT INTO `fcav2_settings_tuition_category` (`tuition_category_aid`, `tuition_category_active`, `tuition_category_name`, `tuition_category_created`, `tuition_category_datetime`) VALUES
(1, 1, 'test', '2024-02-26 15:22:56', '2024-02-26 15:22:56');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_tuition_fee`
--

CREATE TABLE `fcav2_settings_tuition_fee` (
  `tuition_fee_aid` int(11) NOT NULL,
  `tuition_fee_active` tinyint(1) NOT NULL,
  `tuition_fee_category_id` varchar(20) NOT NULL,
  `tuition_fee_grade_id` varchar(20) NOT NULL,
  `tuition_fee_scheme_id` varchar(20) NOT NULL,
  `tuition_fee_miscellaneous` varchar(20) NOT NULL,
  `tuition_fee_tuition` varchar(20) NOT NULL,
  `tuition_fee_books` varchar(20) NOT NULL,
  `tuition_fee_admission` varchar(20) NOT NULL,
  `tuition_fee_upon_enrollment` varchar(20) NOT NULL,
  `tuition_fee_monthly` varchar(20) NOT NULL,
  `tuition_fee_how_many_months` varchar(20) NOT NULL,
  `tuition_fee_total_monthly` varchar(20) NOT NULL,
  `tuition_fee_created` datetime NOT NULL,
  `tuition_fee_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_tuition_fee`
--

INSERT INTO `fcav2_settings_tuition_fee` (`tuition_fee_aid`, `tuition_fee_active`, `tuition_fee_category_id`, `tuition_fee_grade_id`, `tuition_fee_scheme_id`, `tuition_fee_miscellaneous`, `tuition_fee_tuition`, `tuition_fee_books`, `tuition_fee_admission`, `tuition_fee_upon_enrollment`, `tuition_fee_monthly`, `tuition_fee_how_many_months`, `tuition_fee_total_monthly`, `tuition_fee_created`, `tuition_fee_updated`) VALUES
(1, 1, '5', '2', '2', '2000', '35000', '6320.79', '12000', '55320.79', '', '', '', '2024-02-20 00:00:00', '2024-02-26 14:19:20'),
(2, 1, '5', '3', '2', '100', '400', '50', '300', '850', '', '', '', '2024-02-21 00:00:00', '2024-02-22 07:32:34'),
(6, 1, '3', '2', '2', '20', '30', '40', '10', '100', '', '', '', '2024-02-26 00:00:00', '2024-02-26 10:06:47'),
(7, 1, '5', '2', '3', '1000', '17500', '3160.40', '6000', '27660.4', '5707.078', '5', '28535.39', '2024-02-26 00:00:00', '2024-02-26 14:49:42'),
(8, 1, '5', '2', '4', '400', '7000', '1264.16', '2400', '11064.16', '9411.326', '5', '47056.63', '2024-02-26 14:24:49', '2024-02-26 14:50:27'),
(9, 1, '1', '3', '1', '200', '50', '200', '200', '650', '1000', '12', '12000', '2024-02-26 15:23:52', '2024-02-26 15:23:52'),
(10, 1, '1', '3', '2', '123', '123', '123', '123', '492', '123', '12', '1476', '2024-02-26 15:25:31', '2024-02-26 15:25:31');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_user_other`
--

CREATE TABLE `fcav2_settings_user_other` (
  `user_other_aid` int(11) NOT NULL,
  `user_other_is_active` tinyint(1) NOT NULL,
  `user_other_fname` varchar(50) NOT NULL,
  `user_other_lname` varchar(50) NOT NULL,
  `user_other_email` varchar(128) NOT NULL,
  `user_other_new_email` varchar(128) NOT NULL,
  `user_other_role_id` int(11) NOT NULL,
  `user_other_key` varchar(255) NOT NULL,
  `user_other_password` varchar(255) NOT NULL,
  `user_other_created` datetime NOT NULL,
  `user_other_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_user_other`
--

INSERT INTO `fcav2_settings_user_other` (`user_other_aid`, `user_other_is_active`, `user_other_fname`, `user_other_lname`, `user_other_email`, `user_other_new_email`, `user_other_role_id`, `user_other_key`, `user_other_password`, `user_other_created`, `user_other_datetime`) VALUES
(39, 1, 'Patrick', 'Reyes', 'macdet21@gmail.com', '', 4, '', '$2y$10$UGeHmWSHj4ri3vT/dDAQHuaGanPtRo0/tKAmhY0JTY27Hx1PfVkX2', '2024-02-19 13:52:56', '2024-02-19 15:50:13'),
(40, 1, 'Mac', 'Mac', 'merin.ryanmark@gmail.com', '', 2, '', '$2y$10$joJ4kHIyaroc/J5HzOXr3eZcEJtzdajKXCXd6vldDmqCEAiar3qkC', '2024-02-19 14:00:05', '2024-02-19 14:01:36');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_user_system`
--

CREATE TABLE `fcav2_settings_user_system` (
  `user_system_aid` int(11) NOT NULL,
  `user_system_is_active` tinyint(1) NOT NULL,
  `user_system_fname` varchar(128) NOT NULL,
  `user_system_lname` varchar(128) NOT NULL,
  `user_system_email` varchar(255) NOT NULL,
  `user_system_new_email` varchar(255) NOT NULL,
  `user_system_role_id` int(11) NOT NULL,
  `user_system_key` varchar(255) NOT NULL,
  `user_system_password` varchar(255) NOT NULL,
  `user_system_created` datetime NOT NULL,
  `user_system_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_user_system`
--

INSERT INTO `fcav2_settings_user_system` (`user_system_aid`, `user_system_is_active`, `user_system_fname`, `user_system_lname`, `user_system_email`, `user_system_new_email`, `user_system_role_id`, `user_system_key`, `user_system_password`, `user_system_created`, `user_system_datetime`) VALUES
(1, 1, 'Mark Ryan', 'Merin', 'mark.merin@frontlinebusiness.com.ph', '', 1, '', '$2y$10$KiIkfVXV5U357nFYWo0KDewRDHr7YTcGk9JC6G4bXsfQU7IOB7tfi', '2023-04-19 09:13:08', '2024-02-16 09:07:02'),
(17, 1, 'Monmon', 'Plaza', 'ramon.plaza@frontlinebusiness.com.ph', '', 1, '', '$2y$10$KXu/IEfKf4hytdeRfVYTY.gnzHrNbZytzMQepTtZdifr8Ct3DJ1w2', '2024-01-08 08:26:34', '2024-01-08 12:50:29');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_students`
--

CREATE TABLE `fcav2_students` (
  `students_aid` int(11) NOT NULL,
  `students_is_active` tinyint(1) NOT NULL,
  `students_parent_id` int(11) NOT NULL,
  `students_lrn` varchar(20) NOT NULL,
  `students_fname` varchar(50) NOT NULL,
  `students_mname` varchar(50) NOT NULL,
  `students_lname` varchar(50) NOT NULL,
  `students_gender` varchar(10) NOT NULL,
  `students_birth_date` varchar(20) NOT NULL,
  `students_birth_place` text NOT NULL,
  `students_email` varchar(255) NOT NULL,
  `students_mobile` varchar(20) NOT NULL,
  `students_landline` varchar(20) NOT NULL,
  `students_address_id` int(11) NOT NULL,
  `students_institutional_email` varchar(255) NOT NULL,
  `students_family_doctor` varchar(100) NOT NULL,
  `students_family_doctor_contact` varchar(20) NOT NULL,
  `students_medical_remarks` text NOT NULL,
  `students_family_circumstances` text NOT NULL,
  `students_created` datetime NOT NULL,
  `students_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_students`
--

INSERT INTO `fcav2_students` (`students_aid`, `students_is_active`, `students_parent_id`, `students_lrn`, `students_fname`, `students_mname`, `students_lname`, `students_gender`, `students_birth_date`, `students_birth_place`, `students_email`, `students_mobile`, `students_landline`, `students_address_id`, `students_institutional_email`, `students_family_doctor`, `students_family_doctor_contact`, `students_medical_remarks`, `students_family_circumstances`, `students_created`, `students_datetime`) VALUES
(1, 1, 1, '109749060127', 'Mark Ryan', '', 'Merin', 'm', '', '', '', '', '', 0, '', '', '', '', '', '2024-02-23 12:16:30', '2024-02-26 10:27:50'),
(2, 1, 1, '109749060126', 'Cyrene', '', 'Lumabas', 'f', '', '', '', '', '', 1, '', '', '', '', '', '2024-02-26 09:52:47', '2024-02-27 13:47:58');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_emergency_contact`
--
ALTER TABLE `fcav2_emergency_contact`
  ADD PRIMARY KEY (`emergency_contact_aid`);

--
-- Indexes for table `fcav2_guardian`
--
ALTER TABLE `fcav2_guardian`
  ADD PRIMARY KEY (`guardian_aid`);

--
-- Indexes for table `fcav2_parents`
--
ALTER TABLE `fcav2_parents`
  ADD PRIMARY KEY (`parents_aid`);

--
-- Indexes for table `fcav2_school_year_students`
--
ALTER TABLE `fcav2_school_year_students`
  ADD PRIMARY KEY (`school_year_students_aid`);

--
-- Indexes for table `fcav2_school_year_students_requirements`
--
ALTER TABLE `fcav2_school_year_students_requirements`
  ADD PRIMARY KEY (`students_requirements_aid`);

--
-- Indexes for table `fcav2_settings_department`
--
ALTER TABLE `fcav2_settings_department`
  ADD PRIMARY KEY (`department_aid`);

--
-- Indexes for table `fcav2_settings_discount_additional`
--
ALTER TABLE `fcav2_settings_discount_additional`
  ADD PRIMARY KEY (`discount_additional_aid`);

--
-- Indexes for table `fcav2_settings_grade_level`
--
ALTER TABLE `fcav2_settings_grade_level`
  ADD PRIMARY KEY (`grade_level_aid`);

--
-- Indexes for table `fcav2_settings_learning_type`
--
ALTER TABLE `fcav2_settings_learning_type`
  ADD PRIMARY KEY (`learning_type_aid`);

--
-- Indexes for table `fcav2_settings_notification`
--
ALTER TABLE `fcav2_settings_notification`
  ADD PRIMARY KEY (`notification_aid`);

--
-- Indexes for table `fcav2_settings_relationship`
--
ALTER TABLE `fcav2_settings_relationship`
  ADD PRIMARY KEY (`relationship_aid`);

--
-- Indexes for table `fcav2_settings_requirement_finance`
--
ALTER TABLE `fcav2_settings_requirement_finance`
  ADD PRIMARY KEY (`requirement_finance_aid`);

--
-- Indexes for table `fcav2_settings_requirement_it`
--
ALTER TABLE `fcav2_settings_requirement_it`
  ADD PRIMARY KEY (`requirement_it_aid`);

--
-- Indexes for table `fcav2_settings_requirement_registrar`
--
ALTER TABLE `fcav2_settings_requirement_registrar`
  ADD PRIMARY KEY (`requirement_registrar_aid`);

--
-- Indexes for table `fcav2_settings_role`
--
ALTER TABLE `fcav2_settings_role`
  ADD PRIMARY KEY (`role_aid`);

--
-- Indexes for table `fcav2_settings_scheme`
--
ALTER TABLE `fcav2_settings_scheme`
  ADD PRIMARY KEY (`scheme_aid`);

--
-- Indexes for table `fcav2_settings_school_year`
--
ALTER TABLE `fcav2_settings_school_year`
  ADD PRIMARY KEY (`school_year_aid`);

--
-- Indexes for table `fcav2_settings_staff`
--
ALTER TABLE `fcav2_settings_staff`
  ADD PRIMARY KEY (`settings_staff_aid`);

--
-- Indexes for table `fcav2_settings_tuition_category`
--
ALTER TABLE `fcav2_settings_tuition_category`
  ADD PRIMARY KEY (`tuition_category_aid`);

--
-- Indexes for table `fcav2_settings_tuition_fee`
--
ALTER TABLE `fcav2_settings_tuition_fee`
  ADD PRIMARY KEY (`tuition_fee_aid`);

--
-- Indexes for table `fcav2_settings_user_other`
--
ALTER TABLE `fcav2_settings_user_other`
  ADD PRIMARY KEY (`user_other_aid`);

--
-- Indexes for table `fcav2_settings_user_system`
--
ALTER TABLE `fcav2_settings_user_system`
  ADD PRIMARY KEY (`user_system_aid`);

--
-- Indexes for table `fcav2_students`
--
ALTER TABLE `fcav2_students`
  ADD PRIMARY KEY (`students_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_emergency_contact`
--
ALTER TABLE `fcav2_emergency_contact`
  MODIFY `emergency_contact_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fcav2_guardian`
--
ALTER TABLE `fcav2_guardian`
  MODIFY `guardian_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `fcav2_parents`
--
ALTER TABLE `fcav2_parents`
  MODIFY `parents_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `fcav2_school_year_students`
--
ALTER TABLE `fcav2_school_year_students`
  MODIFY `school_year_students_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `fcav2_school_year_students_requirements`
--
ALTER TABLE `fcav2_school_year_students_requirements`
  MODIFY `students_requirements_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `fcav2_settings_department`
--
ALTER TABLE `fcav2_settings_department`
  MODIFY `department_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `fcav2_settings_discount_additional`
--
ALTER TABLE `fcav2_settings_discount_additional`
  MODIFY `discount_additional_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `fcav2_settings_grade_level`
--
ALTER TABLE `fcav2_settings_grade_level`
  MODIFY `grade_level_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `fcav2_settings_learning_type`
--
ALTER TABLE `fcav2_settings_learning_type`
  MODIFY `learning_type_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fcav2_settings_notification`
--
ALTER TABLE `fcav2_settings_notification`
  MODIFY `notification_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fcav2_settings_relationship`
--
ALTER TABLE `fcav2_settings_relationship`
  MODIFY `relationship_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `fcav2_settings_requirement_finance`
--
ALTER TABLE `fcav2_settings_requirement_finance`
  MODIFY `requirement_finance_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fcav2_settings_requirement_it`
--
ALTER TABLE `fcav2_settings_requirement_it`
  MODIFY `requirement_it_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fcav2_settings_requirement_registrar`
--
ALTER TABLE `fcav2_settings_requirement_registrar`
  MODIFY `requirement_registrar_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `fcav2_settings_role`
--
ALTER TABLE `fcav2_settings_role`
  MODIFY `role_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `fcav2_settings_scheme`
--
ALTER TABLE `fcav2_settings_scheme`
  MODIFY `scheme_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `fcav2_settings_school_year`
--
ALTER TABLE `fcav2_settings_school_year`
  MODIFY `school_year_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `fcav2_settings_staff`
--
ALTER TABLE `fcav2_settings_staff`
  MODIFY `settings_staff_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `fcav2_settings_tuition_category`
--
ALTER TABLE `fcav2_settings_tuition_category`
  MODIFY `tuition_category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `fcav2_settings_tuition_fee`
--
ALTER TABLE `fcav2_settings_tuition_fee`
  MODIFY `tuition_fee_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `fcav2_settings_user_other`
--
ALTER TABLE `fcav2_settings_user_other`
  MODIFY `user_other_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `fcav2_settings_user_system`
--
ALTER TABLE `fcav2_settings_user_system`
  MODIFY `user_system_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `fcav2_students`
--
ALTER TABLE `fcav2_students`
  MODIFY `students_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
