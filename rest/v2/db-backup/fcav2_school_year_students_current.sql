-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 14, 2024 at 06:11 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

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
-- Table structure for table `fcav2_school_year_students_current`
--

CREATE TABLE `fcav2_school_year_students_current` (
  `current_students_aid` int(11) NOT NULL,
  `current_students_is_active` tinyint(1) NOT NULL,
  `current_students_sy_id` int(11) NOT NULL,
  `current_students_student_id` int(11) NOT NULL,
  `current_students_grade_level_id` int(11) NOT NULL,
  `current_students_last_learning_type` varchar(20) NOT NULL,
  `current_students_last_school_attended` varchar(255) NOT NULL,
  `current_students_last_gpa` varchar(20) NOT NULL,
  `current_students_last_grade_level_id` int(11) NOT NULL,
  `current_students_last_school_address` text NOT NULL,
  `current_students_last_remarks` text NOT NULL,
  `current_students_is_notify` tinyint(1) NOT NULL,
  `current_students_is_accept_payment` tinyint(1) NOT NULL,
  `current_students_schedule_fees_id` int(11) NOT NULL,
  `current_students_rate_id` int(11) NOT NULL,
  `current_students_assessment_remarks` text NOT NULL,
  `current_students_primary_discount_id` int(11) NOT NULL,
  `current_students_additional_discount_id` int(11) NOT NULL,
  `current_students_last_coc_is_agree` tinyint(1) NOT NULL,
  `current_students_last_parent_declaration_is_agree` tinyint(1) NOT NULL,
  `current_students_last_parent_consent_is_agree` tinyint(1) NOT NULL,
  `current_students_last_parent_commitment_is_agree` tinyint(1) NOT NULL,
  `current_students_created` datetime NOT NULL,
  `current_students_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_school_year_students_current`
--

INSERT INTO `fcav2_school_year_students_current` (`current_students_aid`, `current_students_is_active`, `current_students_sy_id`, `current_students_student_id`, `current_students_grade_level_id`, `current_students_last_learning_type`, `current_students_last_school_attended`, `current_students_last_gpa`, `current_students_last_grade_level_id`, `current_students_last_school_address`, `current_students_last_remarks`, `current_students_is_notify`, `current_students_is_accept_payment`, `current_students_schedule_fees_id`, `current_students_rate_id`, `current_students_assessment_remarks`, `current_students_primary_discount_id`, `current_students_additional_discount_id`, `current_students_last_coc_is_agree`, `current_students_last_parent_declaration_is_agree`, `current_students_last_parent_consent_is_agree`, `current_students_last_parent_commitment_is_agree`, `current_students_created`, `current_students_datetime`) VALUES
(18, 1, 6, 11, 1, 'online', '', '', 0, '', '', 1, 0, 0, 2, 'test data', 0, 5, 1, 1, 1, 1, '2024-03-07 10:29:06', '2024-03-14 12:38:22'),
(21, 1, 6, 14, 1, 'onsite', '', '', 0, '', '', 1, 0, 0, 2, '', 1, 3, 1, 1, 1, 1, '2024-03-07 10:35:03', '2024-03-07 10:36:16'),
(22, 1, 6, 15, 2, 'onsite', '', '', 0, '', '', 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, '2024-03-07 12:29:02', '2024-03-07 12:29:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_school_year_students_current`
--
ALTER TABLE `fcav2_school_year_students_current`
  ADD PRIMARY KEY (`current_students_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_school_year_students_current`
--
ALTER TABLE `fcav2_school_year_students_current`
  MODIFY `current_students_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
