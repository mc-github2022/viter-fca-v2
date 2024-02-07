-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 07, 2024 at 08:53 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fca_enrollment_v2`
--

-- --------------------------------------------------------

--
-- Table structure for table `fca_info_contact`
--

CREATE TABLE `fca_info_contact` (
  `contact_aid` int(11) NOT NULL,
  `contact_user_id` varchar(20) NOT NULL,
  `contact_name` varchar(50) NOT NULL,
  `contact_email` varchar(50) NOT NULL,
  `contact_mobile` varchar(20) NOT NULL,
  `contact_landline` varchar(20) NOT NULL,
  `contact_level` varchar(20) NOT NULL,
  `contact_created` varchar(20) NOT NULL,
  `contact_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_info_contact`
--

INSERT INTO `fca_info_contact` (`contact_aid`, `contact_user_id`, `contact_name`, `contact_email`, `contact_mobile`, `contact_landline`, `contact_level`, `contact_created`, `contact_datetime`) VALUES
(26, '1', 'qwerqwer', '2', '1', '1', '1', '2024-01-23 15:01:10', '2024-01-23 15:01:10');

-- --------------------------------------------------------

--
-- Table structure for table `fca_info_financial`
--

CREATE TABLE `fca_info_financial` (
  `financial_info_aid` int(11) NOT NULL,
  `financial_info_user_id` varchar(20) NOT NULL,
  `financial_info_father_income` varchar(20) NOT NULL,
  `financial_info_mother_income` varchar(20) NOT NULL,
  `financial_info_financier_income` varchar(20) NOT NULL,
  `financial_info_financier_full_name` varchar(50) NOT NULL,
  `financial_info_financier_relationship` varchar(20) NOT NULL,
  `financial_info_financier_occupation` varchar(50) NOT NULL,
  `financial_info_created` varchar(20) NOT NULL,
  `financial_info_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `fca_info_parent_guardian`
--

CREATE TABLE `fca_info_parent_guardian` (
  `parent_guardian_info_aid` int(11) NOT NULL,
  `parent_guardian_info_user_id` varchar(20) NOT NULL,
  `parent_guardian_info_relationship_id` varchar(20) NOT NULL,
  `parent_guardian_info_salutation` varchar(50) NOT NULL,
  `parent_guardian_info_reside` varchar(10) NOT NULL,
  `parent_guardian_info_fname` varchar(100) NOT NULL,
  `parent_guardian_info_mname` varchar(100) NOT NULL,
  `parent_guardian_info_maiden_name` varchar(100) NOT NULL,
  `parent_guardian_info_lname` varchar(100) NOT NULL,
  `parent_guardian_info_email` varchar(100) NOT NULL,
  `parent_guardian_info_mobile` varchar(100) NOT NULL,
  `parent_guardian_info_landline` varchar(50) NOT NULL,
  `parent_guardian_info_address` varchar(150) NOT NULL,
  `parent_guardian_info_province` varchar(50) NOT NULL,
  `parent_guardian_info_city` varchar(50) NOT NULL,
  `parent_guardian_info_zipcode` varchar(10) NOT NULL,
  `parent_guardian_info_religion` varchar(20) NOT NULL,
  `parent_guardian_info_occupation` varchar(50) NOT NULL,
  `parent_guardian_info_created` varchar(20) NOT NULL,
  `parent_guardian_info_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_info_parent_guardian`
--

INSERT INTO `fca_info_parent_guardian` (`parent_guardian_info_aid`, `parent_guardian_info_user_id`, `parent_guardian_info_relationship_id`, `parent_guardian_info_salutation`, `parent_guardian_info_reside`, `parent_guardian_info_fname`, `parent_guardian_info_mname`, `parent_guardian_info_maiden_name`, `parent_guardian_info_lname`, `parent_guardian_info_email`, `parent_guardian_info_mobile`, `parent_guardian_info_landline`, `parent_guardian_info_address`, `parent_guardian_info_province`, `parent_guardian_info_city`, `parent_guardian_info_zipcode`, `parent_guardian_info_religion`, `parent_guardian_info_occupation`, `parent_guardian_info_created`, `parent_guardian_info_datetime`) VALUES
(26, '31', '3', 'mr', 'yes', 'wer', 'wer', 'wer', 'wer', 'wer@wer.com', '35674567456', '56745674567', '123 brgy testing', 'Laguna', 'San Pablo City', '4000', 'sdf', 'sdf', '2024-02-05 15:30:52', '2024-02-05 15:30:52');

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_department`
--

CREATE TABLE `fca_settings_department` (
  `department_aid` int(11) NOT NULL,
  `department_active` tinyint(1) NOT NULL,
  `department_name` varchar(50) NOT NULL,
  `department_created` varchar(20) NOT NULL,
  `department_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_department`
--

INSERT INTO `fca_settings_department` (`department_aid`, `department_active`, `department_name`, `department_created`, `department_datetime`) VALUES
(2, 1, 'Finance', '2024-01-03 12:07:24', ''),
(3, 1, 'Information Technology', '2024-01-03 12:07:33', ''),
(5, 1, 'Registrar', '2024-01-03 12:07:17', '');

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_grade_level`
--

CREATE TABLE `fca_settings_grade_level` (
  `grade_level_aid` int(11) NOT NULL,
  `grade_level_active` tinyint(1) NOT NULL,
  `grade_level_name` varchar(50) NOT NULL,
  `grade_level_is_pre_school` tinyint(1) NOT NULL,
  `grade_level_created` datetime NOT NULL,
  `grade_level_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_grade_level`
--

INSERT INTO `fca_settings_grade_level` (`grade_level_aid`, `grade_level_active`, `grade_level_name`, `grade_level_is_pre_school`, `grade_level_created`, `grade_level_datetime`) VALUES
(1, 1, 'Grade II', 1, '2023-12-11 13:58:46', '2024-01-03 14:34:44'),
(3, 1, 'wwwww444444', 1, '2024-01-03 14:32:54', '2024-01-23 07:53:40');

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_learning_type`
--

CREATE TABLE `fca_settings_learning_type` (
  `learning_type_aid` int(11) NOT NULL,
  `learning_type_active` tinyint(1) NOT NULL,
  `learning_type_name` varchar(50) NOT NULL,
  `learning_type_created` varchar(20) NOT NULL,
  `learning_type_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_learning_type`
--

INSERT INTO `fca_settings_learning_type` (`learning_type_aid`, `learning_type_active`, `learning_type_name`, `learning_type_created`, `learning_type_datetime`) VALUES
(1, 1, 'tesr', '2024-01-03 14:48:27', '2024-01-03 14:48:27'),
(4, 1, 'sssss', '2024-01-03 14:48:57', '2024-01-03 14:48:57');

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_notification`
--

CREATE TABLE `fca_settings_notification` (
  `notification_aid` int(11) NOT NULL,
  `notification_active` tinyint(1) NOT NULL,
  `notification_department_id` int(11) NOT NULL,
  `notification_email` varchar(50) NOT NULL,
  `notification_name` varchar(50) NOT NULL,
  `notification_created` varchar(20) NOT NULL,
  `notification_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_notification`
--

INSERT INTO `fca_settings_notification` (`notification_aid`, `notification_active`, `notification_department_id`, `notification_email`, `notification_name`, `notification_created`, `notification_datetime`) VALUES
(2, 1, 2, 'wwww@wwwww.com', 'tttt', '2023-12-11 15:15:58', '2023-12-11 15:20:52');

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_relationship`
--

CREATE TABLE `fca_settings_relationship` (
  `relationship_aid` int(11) NOT NULL,
  `relationship_active` tinyint(1) NOT NULL,
  `relationship_name` varchar(50) NOT NULL,
  `relationship_is_maiden` tinyint(1) NOT NULL,
  `relationship_created` varchar(20) NOT NULL,
  `relationship_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_relationship`
--

INSERT INTO `fca_settings_relationship` (`relationship_aid`, `relationship_active`, `relationship_name`, `relationship_is_maiden`, `relationship_created`, `relationship_datetime`) VALUES
(1, 1, 'Biological Father', 1, '2023-12-11 13:27:05', ''),
(3, 1, 'Biological Mother', 1, '2023-12-11 13:37:57', '2024-01-03 14:12:24');

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_requirement_finance`
--

CREATE TABLE `fca_settings_requirement_finance` (
  `requirement_finance_aid` int(11) NOT NULL,
  `requirement_finance_active` tinyint(1) NOT NULL,
  `requirement_finance_department_id` int(11) NOT NULL,
  `requirement_finance_name` varchar(50) NOT NULL,
  `requirement_finance_created` varchar(20) NOT NULL,
  `requirement_finance_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_requirement_finance`
--

INSERT INTO `fca_settings_requirement_finance` (`requirement_finance_aid`, `requirement_finance_active`, `requirement_finance_department_id`, `requirement_finance_name`, `requirement_finance_created`, `requirement_finance_datetime`) VALUES
(1, 1, 3, 'Requirement Finance', '2023-12-20 08:09:35', '2023-12-20 08:09:35');

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_requirement_it`
--

CREATE TABLE `fca_settings_requirement_it` (
  `requirement_it_aid` int(11) NOT NULL,
  `requirement_it_active` tinyint(1) NOT NULL,
  `requirement_it_department_id` int(11) NOT NULL,
  `requirement_it_name` varchar(50) NOT NULL,
  `requirement_it_created` varchar(20) NOT NULL,
  `requirement_it_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_requirement_it`
--

INSERT INTO `fca_settings_requirement_it` (`requirement_it_aid`, `requirement_it_active`, `requirement_it_department_id`, `requirement_it_name`, `requirement_it_created`, `requirement_it_datetime`) VALUES
(1, 1, 4, 'Requirement IT', '2023-12-20 08:10:14', '2023-12-20 08:10:14');

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_requirement_registrar`
--

CREATE TABLE `fca_settings_requirement_registrar` (
  `requirement_registrar_aid` int(11) NOT NULL,
  `requirement_registrar_active` tinyint(1) NOT NULL,
  `requirement_registrar_department_id` int(11) NOT NULL,
  `requirement_registrar_name` varchar(120) NOT NULL,
  `requirement_registrar_created` varchar(20) NOT NULL,
  `requirement_registrar_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_requirement_registrar`
--

INSERT INTO `fca_settings_requirement_registrar` (`requirement_registrar_aid`, `requirement_registrar_active`, `requirement_registrar_department_id`, `requirement_registrar_name`, `requirement_registrar_created`, `requirement_registrar_datetime`) VALUES
(3, 1, 5, 'Certificate of Clearance (Financial and Property Responsibility)', '2024-02-06 12:55:27', '2024-02-06 12:57:18'),
(4, 1, 5, 'Form 137/SF10', '2024-02-06 12:55:33', '2024-02-06 12:55:33'),
(5, 1, 5, 'Good Moral Certificate', '2024-02-06 12:55:41', '2024-02-06 12:55:41'),
(6, 1, 5, 'LCR / Local Civil Registry Birth Certificate (Temporary Enrollment Only) OR', '2024-02-06 12:55:48', '2024-02-06 12:57:39'),
(7, 1, 5, 'Passport - Photocopy made at FCA (Temporary Enrollment Only)', '2024-02-06 12:55:56', '2024-02-06 12:57:30'),
(8, 1, 5, 'PSA / Philippine Statistics Authority Original Bir', '2024-02-06 12:56:04', '2024-02-06 12:56:04');

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_role`
--

CREATE TABLE `fca_settings_role` (
  `role_aid` int(11) NOT NULL,
  `role_is_active` tinyint(1) NOT NULL,
  `role_name` varchar(50) NOT NULL,
  `role_description` text NOT NULL,
  `role_created` varchar(20) NOT NULL,
  `role_datetime` varchar(20) NOT NULL,
  `role_is_developer` tinyint(1) NOT NULL,
  `role_is_admin` tinyint(1) NOT NULL,
  `role_is_client` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_role`
--

INSERT INTO `fca_settings_role` (`role_aid`, `role_is_active`, `role_name`, `role_description`, `role_created`, `role_datetime`, `role_is_developer`, `role_is_admin`, `role_is_client`) VALUES
(1, 1, 'developer', 'qqqqqq', '2023-12-19 14:07:05', '2023-12-19 14:07:05', 1, 0, 0),
(2, 1, 'Admin', 'test', '2024-01-08 14:09:28', '2024-01-08 14:09:28', 0, 1, 0),
(3, 1, 'Client', 'Parent or other user', '2024-01-10 09:15:52', '2024-01-10 09:15:52', 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_scheme`
--

CREATE TABLE `fca_settings_scheme` (
  `scheme_aid` int(11) NOT NULL,
  `scheme_active` tinyint(1) NOT NULL,
  `scheme_name` varchar(50) NOT NULL,
  `scheme_created` varchar(20) NOT NULL,
  `scheme_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_scheme`
--

INSERT INTO `fca_settings_scheme` (`scheme_aid`, `scheme_active`, `scheme_name`, `scheme_created`, `scheme_datetime`) VALUES
(3, 1, 'test', '2024-01-11 07:57:09', '2024-01-11 07:57:09');

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_student_rt`
--

CREATE TABLE `fca_settings_student_rt` (
  `student_aid` int(11) NOT NULL,
  `student_active` tinyint(1) NOT NULL,
  `student_name` varchar(126) NOT NULL,
  `student_gender` varchar(20) NOT NULL,
  `student_grade_level` varchar(20) NOT NULL,
  `student_created` varchar(20) NOT NULL,
  `student_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_student_rt`
--

INSERT INTO `fca_settings_student_rt` (`student_aid`, `student_active`, `student_name`, `student_gender`, `student_grade_level`, `student_created`, `student_datetime`) VALUES
(1, 1, 'Mon', 'Male', 'Grade 1', '2024-01-11 09:27:25', '2024'),
(2, 1, 'Patrick', 'Male', 'Grade 1', '2024-01-11 09:27:36', '2024'),
(3, 0, 'JJ', 'Male', 'Grade 1', '2024-01-11 09:27:40', '2024'),
(4, 1, 'Mac', 'Male', 'Grade 2', '2024-01-11 09:27:49', '2024'),
(5, 0, 'MC', 'Male', 'Grade 2', '2024-01-11 09:27:57', '2024'),
(6, 1, 'Rico', 'Male', 'Grade 3', '2024-01-11 09:28:08', '2024'),
(7, 1, 'Emma', 'Male', 'Grade 5', '2024-01-11 09:28:19', '2024'),
(8, 0, 'Cyzy', 'Female', 'Grade 2', '2024-01-11 09:28:33', '2024'),
(9, 1, 'Inyaks', 'Female', 'Grade 1', '2024-01-11 09:28:42', '2024'),
(10, 1, 'Bell', 'Female', 'Grade 3', '2024-01-11 09:28:48', '2024'),
(11, 1, 'Kyuri', 'Female', 'Grade 3', '2024-01-11 09:28:56', '2024'),
(12, 1, 'Kyuri', 'Female', 'Grade 2', '2024-01-11 09:28:56', '2024'),
(13, 1, 'Kyuri', 'Male', 'Grade 2', '2024-01-11 09:28:56', '2024'),
(14, 1, 'Kyuri', 'Male', 'Grade 3', '2024-01-11 09:28:56', '2024');

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_tuition_category`
--

CREATE TABLE `fca_settings_tuition_category` (
  `tuition_category_aid` int(11) NOT NULL,
  `tuition_category_active` tinyint(1) NOT NULL,
  `tuition_category_name` varchar(50) NOT NULL,
  `tuition_category_created` varchar(20) NOT NULL,
  `tuition_category_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_tuition_category`
--

INSERT INTO `fca_settings_tuition_category` (`tuition_category_aid`, `tuition_category_active`, `tuition_category_name`, `tuition_category_created`, `tuition_category_datetime`) VALUES
(1, 1, 'Legacy', '2023-12-20 08:53:04', '2023-12-20 08:53:04');

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_tuition_fee`
--

CREATE TABLE `fca_settings_tuition_fee` (
  `tuition_fee_aid` int(11) NOT NULL,
  `tuition_fee_active` tinyint(1) NOT NULL,
  `tuition_fee_category_id` varchar(20) NOT NULL,
  `tuition_fee_grade_id` varchar(20) NOT NULL,
  `tuition_fee_entrance` varchar(20) NOT NULL,
  `tuition_fee_miscellaneous` varchar(20) NOT NULL,
  `tuition_fee_tuition` varchar(20) NOT NULL,
  `tuition_fee_books` varchar(20) NOT NULL,
  `tuition_fee_start_date` varchar(50) NOT NULL,
  `tuition_fee_end_date` varchar(50) NOT NULL,
  `tuition_fee_created` date NOT NULL,
  `tuition_fee_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_tuition_fee`
--

INSERT INTO `fca_settings_tuition_fee` (`tuition_fee_aid`, `tuition_fee_active`, `tuition_fee_category_id`, `tuition_fee_grade_id`, `tuition_fee_entrance`, `tuition_fee_miscellaneous`, `tuition_fee_tuition`, `tuition_fee_books`, `tuition_fee_start_date`, `tuition_fee_end_date`, `tuition_fee_created`, `tuition_fee_datetime`) VALUES
(4, 0, '1', '1', 'zxcv', 'asdf', 'qwe', 'ghjf', 'xcvb', 'dfgh', '2023-12-19', '0000-00-00 00:00:00'),
(5, 1, '1', '1', 'zxcv', 'asdf', 'qwe', 'ghjf', 'xcvb', 'dfgh', '2023-12-19', '2023-12-19 11:37:17'),
(6, 1, '1', '1', 'zxcv', 'asdf', 'qwe', 'ghjf', 'xcvb', 'dfgh', '2023-12-19', '2023-12-19 11:39:02'),
(7, 1, '1', '1', 'zxcv', 'asdf', 'qwe', 'ghjf', 'xcvb', 'dfgh', '2023-12-19', '2023-12-19 11:41:18'),
(8, 1, '1', '1', 'zxcv', 'asdf', 'qwe', 'ghjf', 'xcvb', 'dfgh', '2023-12-19', '2023-12-19 11:43:52'),
(9, 1, '1', '1', 'zxcv', 'asdf', 'qwe', 'ghjf', 'xcvb', 'dfgh', '2023-12-19', '2023-12-19 12:35:11'),
(11, 1, '1', '1', 'zxcv', 'asdf', 'qwe', 'ghjf', 'xcvb', 'dfgh', '2023-12-19', '2023-12-19 12:43:18'),
(12, 1, '1', '1', 'zxcv', 'asdf', 'qwe', 'ghjf', 'xcvb', 'dfgh', '2023-12-19', '2023-12-19 12:43:20'),
(13, 1, '1', '1', 'zxcv', 'asdf', 'qwe', 'ghjf', 'xcvb', 'dfgh', '2023-12-19', '2023-12-19 12:43:20');

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_user_other`
--

CREATE TABLE `fca_settings_user_other` (
  `user_other_aid` int(11) NOT NULL,
  `user_other_is_active` tinyint(1) NOT NULL,
  `user_other_fname` varchar(50) NOT NULL,
  `user_other_lname` varchar(50) NOT NULL,
  `user_other_email` varchar(128) NOT NULL,
  `user_other_new_email` varchar(128) NOT NULL,
  `user_other_role_id` varchar(20) NOT NULL,
  `user_other_key` varchar(255) NOT NULL,
  `user_other_password` varchar(255) NOT NULL,
  `user_other_created` datetime NOT NULL,
  `user_other_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_user_other`
--

INSERT INTO `fca_settings_user_other` (`user_other_aid`, `user_other_is_active`, `user_other_fname`, `user_other_lname`, `user_other_email`, `user_other_new_email`, `user_other_role_id`, `user_other_key`, `user_other_password`, `user_other_created`, `user_other_datetime`) VALUES
(31, 1, 'Ramon', 'Plaza', 'monmon.plaza.yt@gmail.com', '', '3', '', '$2y$10$ssl./XB9hjruRlk7v1u6HuuntB/3Myo3ELe66cRjoA8rk03MCuli2', '2024-01-30 13:03:19', '2024-01-30 13:14:44');

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_user_system`
--

CREATE TABLE `fca_settings_user_system` (
  `user_system_aid` int(11) NOT NULL,
  `user_system_is_active` tinyint(1) NOT NULL,
  `user_system_fname` varchar(128) NOT NULL,
  `user_system_lname` varchar(128) NOT NULL,
  `user_system_email` varchar(255) NOT NULL,
  `user_system_role_id` int(11) NOT NULL,
  `user_system_key` varchar(255) NOT NULL,
  `user_system_password` varchar(255) NOT NULL,
  `user_system_created` datetime NOT NULL,
  `user_system_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_user_system`
--

INSERT INTO `fca_settings_user_system` (`user_system_aid`, `user_system_is_active`, `user_system_fname`, `user_system_lname`, `user_system_email`, `user_system_role_id`, `user_system_key`, `user_system_password`, `user_system_created`, `user_system_datetime`) VALUES
(1, 1, 'Mark Ryan', 'Merin', 'mark.merin@frontlinebusiness.com.ph', 1, 'c47a62a6f5fc28388226429177c984b80f52b3167a792da2dd70332e745ebf70', '', '2023-04-19 09:13:08', '2023-12-19 14:54:05'),
(17, 1, 'Monmon', 'Plaza', 'ramon.plaza@frontlinebusiness.com.ph', 1, '', '$2y$10$KXu/IEfKf4hytdeRfVYTY.gnzHrNbZytzMQepTtZdifr8Ct3DJ1w2', '2024-01-08 08:26:34', '2024-01-08 12:50:29');

-- --------------------------------------------------------

--
-- Table structure for table `fca_student_info`
--

CREATE TABLE `fca_student_info` (
  `student_info_aid` int(11) NOT NULL,
  `student_info_user_id` varchar(20) NOT NULL,
  `student_info_is_archive` varchar(5) NOT NULL,
  `student_info_learning_type` varchar(100) NOT NULL,
  `student_info_grade_id` varchar(20) NOT NULL,
  `student_info_reference_no` varchar(100) NOT NULL,
  `student_info_fname` varchar(100) NOT NULL,
  `student_info_lname` varchar(100) NOT NULL,
  `student_info_mname` varchar(100) NOT NULL,
  `student_info_gender` varchar(50) NOT NULL,
  `student_info_bday` varchar(50) NOT NULL,
  `student_info_birth_place` varchar(200) NOT NULL,
  `student_info_email` varchar(200) NOT NULL,
  `student_info_institutional_email` varchar(200) NOT NULL,
  `student_info_mobile` varchar(100) NOT NULL,
  `student_info_landline` varchar(100) NOT NULL,
  `student_info_adress_id` varchar(20) NOT NULL,
  `student_info_last_school` varchar(200) NOT NULL,
  `student_info_last_gpa` varchar(100) NOT NULL,
  `student_info_last_grade` varchar(20) NOT NULL,
  `student_info_school_address` varchar(100) NOT NULL,
  `student_info_school_other` text NOT NULL,
  `student_info_conduct` tinyint(1) NOT NULL,
  `student_info_declaration` tinyint(1) NOT NULL,
  `student_info_parent_commitment` tinyint(1) NOT NULL,
  `student_info_parent_consent` tinyint(1) NOT NULL,
  `student_info_is_registrar_notify` tinyint(1) NOT NULL,
  `student_info_is_finance_notify` tinyint(1) NOT NULL,
  `student_info_is_it_notify` tinyint(1) NOT NULL,
  `student_info_is_enrolled` tinyint(1) NOT NULL,
  `student_info_medical_notes` text NOT NULL,
  `student_info_medical_doctor` varchar(200) NOT NULL,
  `student_info_medical_contact` varchar(50) NOT NULL,
  `student_info_family_circumstances` text NOT NULL,
  `student_info_archive_remark` text NOT NULL,
  `student_info_created` varchar(20) NOT NULL,
  `student_info_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fca_info_contact`
--
ALTER TABLE `fca_info_contact`
  ADD PRIMARY KEY (`contact_aid`);

--
-- Indexes for table `fca_info_financial`
--
ALTER TABLE `fca_info_financial`
  ADD PRIMARY KEY (`financial_info_aid`);

--
-- Indexes for table `fca_info_parent_guardian`
--
ALTER TABLE `fca_info_parent_guardian`
  ADD PRIMARY KEY (`parent_guardian_info_aid`);

--
-- Indexes for table `fca_settings_department`
--
ALTER TABLE `fca_settings_department`
  ADD PRIMARY KEY (`department_aid`);

--
-- Indexes for table `fca_settings_grade_level`
--
ALTER TABLE `fca_settings_grade_level`
  ADD PRIMARY KEY (`grade_level_aid`);

--
-- Indexes for table `fca_settings_learning_type`
--
ALTER TABLE `fca_settings_learning_type`
  ADD PRIMARY KEY (`learning_type_aid`);

--
-- Indexes for table `fca_settings_notification`
--
ALTER TABLE `fca_settings_notification`
  ADD PRIMARY KEY (`notification_aid`);

--
-- Indexes for table `fca_settings_relationship`
--
ALTER TABLE `fca_settings_relationship`
  ADD PRIMARY KEY (`relationship_aid`);

--
-- Indexes for table `fca_settings_requirement_finance`
--
ALTER TABLE `fca_settings_requirement_finance`
  ADD PRIMARY KEY (`requirement_finance_aid`);

--
-- Indexes for table `fca_settings_requirement_it`
--
ALTER TABLE `fca_settings_requirement_it`
  ADD PRIMARY KEY (`requirement_it_aid`);

--
-- Indexes for table `fca_settings_requirement_registrar`
--
ALTER TABLE `fca_settings_requirement_registrar`
  ADD PRIMARY KEY (`requirement_registrar_aid`);

--
-- Indexes for table `fca_settings_role`
--
ALTER TABLE `fca_settings_role`
  ADD PRIMARY KEY (`role_aid`);

--
-- Indexes for table `fca_settings_scheme`
--
ALTER TABLE `fca_settings_scheme`
  ADD PRIMARY KEY (`scheme_aid`);

--
-- Indexes for table `fca_settings_student_rt`
--
ALTER TABLE `fca_settings_student_rt`
  ADD PRIMARY KEY (`student_aid`);

--
-- Indexes for table `fca_settings_tuition_category`
--
ALTER TABLE `fca_settings_tuition_category`
  ADD PRIMARY KEY (`tuition_category_aid`);

--
-- Indexes for table `fca_settings_tuition_fee`
--
ALTER TABLE `fca_settings_tuition_fee`
  ADD PRIMARY KEY (`tuition_fee_aid`);

--
-- Indexes for table `fca_settings_user_other`
--
ALTER TABLE `fca_settings_user_other`
  ADD PRIMARY KEY (`user_other_aid`);

--
-- Indexes for table `fca_settings_user_system`
--
ALTER TABLE `fca_settings_user_system`
  ADD PRIMARY KEY (`user_system_aid`);

--
-- Indexes for table `fca_student_info`
--
ALTER TABLE `fca_student_info`
  ADD PRIMARY KEY (`student_info_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fca_info_contact`
--
ALTER TABLE `fca_info_contact`
  MODIFY `contact_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `fca_info_financial`
--
ALTER TABLE `fca_info_financial`
  MODIFY `financial_info_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `fca_info_parent_guardian`
--
ALTER TABLE `fca_info_parent_guardian`
  MODIFY `parent_guardian_info_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `fca_settings_department`
--
ALTER TABLE `fca_settings_department`
  MODIFY `department_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `fca_settings_grade_level`
--
ALTER TABLE `fca_settings_grade_level`
  MODIFY `grade_level_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `fca_settings_learning_type`
--
ALTER TABLE `fca_settings_learning_type`
  MODIFY `learning_type_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `fca_settings_notification`
--
ALTER TABLE `fca_settings_notification`
  MODIFY `notification_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `fca_settings_relationship`
--
ALTER TABLE `fca_settings_relationship`
  MODIFY `relationship_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `fca_settings_requirement_finance`
--
ALTER TABLE `fca_settings_requirement_finance`
  MODIFY `requirement_finance_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `fca_settings_requirement_it`
--
ALTER TABLE `fca_settings_requirement_it`
  MODIFY `requirement_it_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `fca_settings_requirement_registrar`
--
ALTER TABLE `fca_settings_requirement_registrar`
  MODIFY `requirement_registrar_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `fca_settings_role`
--
ALTER TABLE `fca_settings_role`
  MODIFY `role_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `fca_settings_scheme`
--
ALTER TABLE `fca_settings_scheme`
  MODIFY `scheme_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `fca_settings_student_rt`
--
ALTER TABLE `fca_settings_student_rt`
  MODIFY `student_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `fca_settings_tuition_category`
--
ALTER TABLE `fca_settings_tuition_category`
  MODIFY `tuition_category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `fca_settings_tuition_fee`
--
ALTER TABLE `fca_settings_tuition_fee`
  MODIFY `tuition_fee_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `fca_settings_user_other`
--
ALTER TABLE `fca_settings_user_other`
  MODIFY `user_other_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `fca_settings_user_system`
--
ALTER TABLE `fca_settings_user_system`
  MODIFY `user_system_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `fca_student_info`
--
ALTER TABLE `fca_student_info`
  MODIFY `student_info_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=133;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
