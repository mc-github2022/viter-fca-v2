-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 14, 2024 at 05:24 AM
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

--
-- Dumping data for table `fcav2_settings_grade_level`
--

INSERT INTO `fcav2_settings_grade_level` (`grade_level_aid`, `grade_level_active`, `grade_level_name`, `grade_level_is_pre_school`, `grade_level_created`, `grade_level_datetime`) VALUES
(1, 1, 'Grade II', 1, '2023-12-11 13:58:46', '2024-01-03 14:34:44'),
(3, 1, 'wwwww444444', 1, '2024-01-03 14:32:54', '2024-01-23 07:53:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_emergency_contact`
--
ALTER TABLE `fcav2_emergency_contact`
  ADD PRIMARY KEY (`emergency_contact_aid`);

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_emergency_contact`
--
ALTER TABLE `fcav2_emergency_contact`
  MODIFY `emergency_contact_aid` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `grade_level_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
