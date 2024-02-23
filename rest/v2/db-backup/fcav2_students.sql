-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 23, 2024 at 02:23 AM
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
-- Table structure for table `fcav2_students`
--

CREATE TABLE `fcav2_students` (
  `students_aid` int(11) NOT NULL,
  `students_is_active` tinyint(1) NOT NULL,
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
  `students_address` text NOT NULL,
  `students_institutional_email` varchar(255) NOT NULL,
  `students_family_doctor` varchar(100) NOT NULL,
  `students_family_doctor_contact` varchar(20) NOT NULL,
  `students_medical_remarks` text NOT NULL,
  `students_family_circumstances` text NOT NULL,
  `students_created` datetime NOT NULL,
  `students_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_students`
--
ALTER TABLE `fcav2_students`
  ADD PRIMARY KEY (`students_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_students`
--
ALTER TABLE `fcav2_students`
  MODIFY `students_aid` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
