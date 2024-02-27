-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2024 at 03:56 AM
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

INSERT INTO `fcav2_school_year_students` (`school_year_students_aid`, `school_year_students_is_active`, `school_year_students_sy_id`, `school_year_students_student_id`, `school_year_students_last_learning_type`, `school_year_students_last_school_attended`, `school_year_students_last_gpa`, `school_year_students_last_grade_level_id`, `school_year_students_last_school_address`, `school_year_students_is_notify`, `school_year_students_is_accept_payment`, `school_year_students_schedule_fees_id`, `school_year_students_rate_id`, `school_year_students_primary_discount_id`, `school_year_students_additional_discount_id`, `school_year_students_last_coc_is_agree`, `school_year_students_last_parent_declaration_is_agree`, `school_year_students_last_parent_consent_is_agree`, `school_year_students_last_parent_commitment_is_agree`, `school_year_students_created`, `school_year_students_datetime`) VALUES
(1, 1, 4, 1, 'onsite', '', '', 1, '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2024-02-23 12:16:30', '2024-02-26 10:27:50'),
(2, 1, 4, 2, 'online', '', '', 3, '', 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, '2024-02-26 09:52:47', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_school_year_students`
--
ALTER TABLE `fcav2_school_year_students`
  ADD PRIMARY KEY (`school_year_students_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_school_year_students`
--
ALTER TABLE `fcav2_school_year_students`
  MODIFY `school_year_students_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;