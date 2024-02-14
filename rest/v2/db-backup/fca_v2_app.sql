-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 14, 2024 at 07:01 AM
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
-- Database: `fca_v2_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_emergency_contact`
--

CREATE TABLE `fcav2_emergency_contact` (
  `emergency_contact_aid` int(11) NOT NULL,
  `emergency_contact_student_id` varchar(20) NOT NULL,
  `emergency_contact_name` varchar(100) NOT NULL,
  `emergency_contact_mobile` varchar(30) NOT NULL,
  `emergency_contact_landline` varchar(30) NOT NULL,
  `emergency_contact_level` varchar(30) NOT NULL,
  `emergency_contact_created` varchar(20) NOT NULL,
  `emergency_contact_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_financier`
--

CREATE TABLE `fcav2_financier` (
  `fcav2_financier_aid` int(11) NOT NULL,
  `fcav2_financier_student_id` varchar(20) NOT NULL,
  `fcav2_financier_father_income` varchar(20) NOT NULL,
  `fcav2_financier_mother_income` varchar(20) NOT NULL,
  `fcav2_financier_name` varchar(50) NOT NULL,
  `fcav2_financier_relationship` varchar(20) NOT NULL,
  `fcav2_financier_occupation` varchar(20) NOT NULL,
  `fcav2_financier_income` varchar(20) NOT NULL,
  `fcav2_financier_created` varchar(20) NOT NULL,
  `fcav2_financier_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_parents`
--

CREATE TABLE `fcav2_parents` (
  `parents_aid` int(11) NOT NULL,
  `parents_is_active` tinyint(1) NOT NULL,
  `parents_student_id` varchar(20) NOT NULL,
  `parents_relationship_id` varchar(20) NOT NULL,
  `parents_salutation` varchar(10) NOT NULL,
  `parents_is_reside` tinyint(1) NOT NULL,
  `parents_fname` varchar(100) NOT NULL,
  `parents_mname` varchar(50) NOT NULL,
  `parents_maiden_name` varchar(50) NOT NULL,
  `parents_lname` varchar(50) NOT NULL,
  `parents_email` varchar(50) NOT NULL,
  `parents_mobile` varchar(30) NOT NULL,
  `parents_landline` varchar(30) NOT NULL,
  `parents_address` varchar(100) NOT NULL,
  `parents_province` varchar(20) NOT NULL,
  `parents_city` varchar(20) NOT NULL,
  `parents_zipcode` varchar(10) NOT NULL,
  `parents_country` varchar(20) NOT NULL,
  `parents_religion` varchar(30) NOT NULL,
  `parents_occupation` varchar(30) NOT NULL,
  `parents_datetime` varchar(20) NOT NULL,
  `parents_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_tuition_fee`
--

CREATE TABLE `fcav2_settings_tuition_fee` (
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
  `user_other_role_id` varchar(20) NOT NULL,
  `user_other_key` varchar(255) NOT NULL,
  `user_other_password` varchar(255) NOT NULL,
  `user_other_created` datetime NOT NULL,
  `user_other_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_user_other`
--

INSERT INTO `fcav2_settings_user_other` (`user_other_aid`, `user_other_is_active`, `user_other_fname`, `user_other_lname`, `user_other_email`, `user_other_new_email`, `user_other_role_id`, `user_other_key`, `user_other_password`, `user_other_created`, `user_other_datetime`) VALUES
(34, 1, 'Mon', 'Mon', 'monmon.plaza@gmail.com', '', '4', '', '$2y$10$00A64PB.pRmYxFhebmPvJ.ht1iqqOF8HpoZD8Cc4euFaaw92Bol.G', '2024-02-14 07:35:12', '2024-02-14 07:36:25');

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
  `user_system_role_id` int(11) NOT NULL,
  `user_system_key` varchar(255) NOT NULL,
  `user_system_password` varchar(255) NOT NULL,
  `user_system_created` datetime NOT NULL,
  `user_system_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_user_system`
--

INSERT INTO `fcav2_settings_user_system` (`user_system_aid`, `user_system_is_active`, `user_system_fname`, `user_system_lname`, `user_system_email`, `user_system_role_id`, `user_system_key`, `user_system_password`, `user_system_created`, `user_system_datetime`) VALUES
(1, 1, 'Mark Ryan', 'Merin', 'mark.merin@frontlinebusiness.com.ph', 1, 'c47a62a6f5fc28388226429177c984b80f52b3167a792da2dd70332e745ebf70', '', '2023-04-19 09:13:08', '2023-12-19 14:54:05'),
(17, 1, 'Monmon', 'Plaza', 'ramon.plaza@frontlinebusiness.com.ph', 1, '', '$2y$10$KXu/IEfKf4hytdeRfVYTY.gnzHrNbZytzMQepTtZdifr8Ct3DJ1w2', '2024-01-08 08:26:34', '2024-01-08 12:50:29');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_students`
--

CREATE TABLE `fcav2_students` (
  `students_aid` int(11) NOT NULL,
  `students_is_active` tinyint(1) NOT NULL,
  `students_learning_type` varchar(20) NOT NULL,
  `students_grade_id` varchar(20) NOT NULL,
  `students_lrn` varchar(20) NOT NULL,
  `students_fname` varchar(50) NOT NULL,
  `students_lname` varchar(50) NOT NULL,
  `students_mname` varchar(50) NOT NULL,
  `students_gender` varchar(10) NOT NULL,
  `students_bday` varchar(20) NOT NULL,
  `students_birthplace` varchar(50) NOT NULL,
  `students_institutional_email` varchar(100) NOT NULL,
  `students_mobile` varchar(30) NOT NULL,
  `students_landline` varchar(30) NOT NULL,
  `students_address_id` varchar(20) NOT NULL,
  `students_last_school` varchar(50) NOT NULL,
  `students_last_gpa` varchar(20) NOT NULL,
  `students_last_grade` varchar(20) NOT NULL,
  `students_school_address` varchar(100) NOT NULL,
  `students_school_other` text NOT NULL,
  `students_conduct` tinyint(1) NOT NULL,
  `students_declaration` tinyint(1) NOT NULL,
  `students_commitment` tinyint(1) NOT NULL,
  `students_consent` tinyint(1) NOT NULL,
  `students_is_notify_registrar` tinyint(1) NOT NULL,
  `students_is_notify_finance` tinyint(1) NOT NULL,
  `students_is_notify_it` tinyint(1) NOT NULL,
  `students_is_enrolled` tinyint(1) NOT NULL,
  `students_medical_notes` text NOT NULL,
  `students_medical_doctor` varchar(50) NOT NULL,
  `students_medical_contact` varchar(30) NOT NULL,
  `students_family_circumstances` text NOT NULL,
  `students_archive_remark` text NOT NULL,
  `students_datetime` varchar(20) NOT NULL,
  `students_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_emergency_contact`
--
ALTER TABLE `fcav2_emergency_contact`
  ADD PRIMARY KEY (`emergency_contact_aid`);

--
-- Indexes for table `fcav2_financier`
--
ALTER TABLE `fcav2_financier`
  ADD PRIMARY KEY (`fcav2_financier_aid`);

--
-- Indexes for table `fcav2_parents`
--
ALTER TABLE `fcav2_parents`
  ADD PRIMARY KEY (`parents_aid`);

--
-- Indexes for table `fcav2_settings_department`
--
ALTER TABLE `fcav2_settings_department`
  ADD PRIMARY KEY (`department_aid`);

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
-- AUTO_INCREMENT for table `fcav2_financier`
--
ALTER TABLE `fcav2_financier`
  MODIFY `fcav2_financier_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fcav2_parents`
--
ALTER TABLE `fcav2_parents`
  MODIFY `parents_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fcav2_settings_department`
--
ALTER TABLE `fcav2_settings_department`
  MODIFY `department_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fcav2_settings_grade_level`
--
ALTER TABLE `fcav2_settings_grade_level`
  MODIFY `grade_level_aid` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `relationship_aid` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `requirement_registrar_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fcav2_settings_role`
--
ALTER TABLE `fcav2_settings_role`
  MODIFY `role_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `fcav2_settings_scheme`
--
ALTER TABLE `fcav2_settings_scheme`
  MODIFY `scheme_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fcav2_settings_tuition_category`
--
ALTER TABLE `fcav2_settings_tuition_category`
  MODIFY `tuition_category_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fcav2_settings_tuition_fee`
--
ALTER TABLE `fcav2_settings_tuition_fee`
  MODIFY `tuition_fee_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fcav2_settings_user_other`
--
ALTER TABLE `fcav2_settings_user_other`
  MODIFY `user_other_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `fcav2_settings_user_system`
--
ALTER TABLE `fcav2_settings_user_system`
  MODIFY `user_system_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `fcav2_students`
--
ALTER TABLE `fcav2_students`
  MODIFY `students_aid` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
