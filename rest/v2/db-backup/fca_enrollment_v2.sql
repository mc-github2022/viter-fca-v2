-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 18, 2023 at 04:53 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

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
-- Table structure for table `fca_settings_department`
--

CREATE TABLE `fca_settings_department` (
  `department_aid` int(11) NOT NULL,
  `department_active` tinyint(1) NOT NULL,
  `department_name` varchar(50) NOT NULL,
  `department_description` text NOT NULL,
  `department_created` varchar(20) NOT NULL,
  `department_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_department`
--

INSERT INTO `fca_settings_department` (`department_aid`, `department_active`, `department_name`, `department_description`, `department_created`, `department_datetime`) VALUES
(1, 1, '44', '1', '2023-12-11 10:32:07', '2023-12-11 13:42:15'),
(2, 1, '33', '', '2023-12-11 10:33:09', '2023-12-11 10:33:59');

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
(1, 1, '44', 1, '2023-12-11 13:58:46', '0000-00-00 00:00:00');

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
(2, 1, 1, 'wwww@wwwww.com', 'tttt', '2023-12-11 15:15:58', '2023-12-11 15:20:52'),
(3, 1, 1, 'xxxxx@xxxx.com', 'xxxx', '2023-12-11 15:16:14', '2023-12-11 15:16:14');

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
(1, 1, '44', 1, '2023-12-11 13:27:05', '2023-12-11 13:44:02'),
(3, 1, '44', 1, '2023-12-11 13:37:57', '2023-12-11 13:39:32');

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
(1, 1, 1, 'finance two', '2023-12-15 09:41:17', '2023-12-15 09:41:17');

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
(1, 0, 1, '33333', '2023-12-15 12:48:44', '2023-12-15 12:50:49'),
(3, 1, 1, 'xxxxx', '2023-12-15 12:51:02', '2023-12-15 12:51:02');

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_requirement_registrar`
--

CREATE TABLE `fca_settings_requirement_registrar` (
  `requirement_registrar_aid` int(11) NOT NULL,
  `requirement_registrar_active` tinyint(1) NOT NULL,
  `requirement_registrar_department_id` int(11) NOT NULL,
  `requirement_registrar_name` varchar(50) NOT NULL,
  `requirement_registrar_created` varchar(20) NOT NULL,
  `requirement_registrar_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_requirement_registrar`
--

INSERT INTO `fca_settings_requirement_registrar` (`requirement_registrar_aid`, `requirement_registrar_active`, `requirement_registrar_department_id`, `requirement_registrar_name`, `requirement_registrar_created`, `requirement_registrar_datetime`) VALUES
(2, 0, 1, 'registrar two', '2023-12-15 09:22:37', '');

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
(2, 0, 'wwww', '2023-12-15 13:29:11', ''),
(3, 1, 'wwwxw', '2023-12-15 13:30:32', '2023-12-15 13:30:32');

--
-- Indexes for dumped tables
--

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
-- Indexes for table `fca_settings_tuition_category`
--
ALTER TABLE `fca_settings_tuition_category`
  ADD PRIMARY KEY (`tuition_category_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fca_settings_department`
--
ALTER TABLE `fca_settings_department`
  MODIFY `department_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `fca_settings_grade_level`
--
ALTER TABLE `fca_settings_grade_level`
  MODIFY `grade_level_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `fca_settings_notification`
--
ALTER TABLE `fca_settings_notification`
  MODIFY `notification_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `fca_settings_relationship`
--
ALTER TABLE `fca_settings_relationship`
  MODIFY `relationship_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `fca_settings_requirement_finance`
--
ALTER TABLE `fca_settings_requirement_finance`
  MODIFY `requirement_finance_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `fca_settings_requirement_it`
--
ALTER TABLE `fca_settings_requirement_it`
  MODIFY `requirement_it_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `fca_settings_requirement_registrar`
--
ALTER TABLE `fca_settings_requirement_registrar`
  MODIFY `requirement_registrar_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `fca_settings_tuition_category`
--
ALTER TABLE `fca_settings_tuition_category`
  MODIFY `tuition_category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
