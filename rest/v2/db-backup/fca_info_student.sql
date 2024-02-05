-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 05, 2024 at 02:15 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

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
-- Table structure for table `fca_info_student`
--

CREATE TABLE `fca_info_student` (
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
  `student_info_address_id` varchar(20) NOT NULL,
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
  `student_info_created` datetime NOT NULL,
  `student_info_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_info_student`
--

INSERT INTO `fca_info_student` (`student_info_aid`, `student_info_user_id`, `student_info_is_archive`, `student_info_learning_type`, `student_info_grade_id`, `student_info_reference_no`, `student_info_fname`, `student_info_lname`, `student_info_mname`, `student_info_gender`, `student_info_bday`, `student_info_birth_place`, `student_info_email`, `student_info_institutional_email`, `student_info_mobile`, `student_info_landline`, `student_info_address_id`, `student_info_last_school`, `student_info_last_gpa`, `student_info_last_grade`, `student_info_school_address`, `student_info_school_other`, `student_info_conduct`, `student_info_declaration`, `student_info_parent_commitment`, `student_info_parent_consent`, `student_info_is_registrar_notify`, `student_info_is_finance_notify`, `student_info_is_it_notify`, `student_info_is_enrolled`, `student_info_medical_notes`, `student_info_medical_doctor`, `student_info_medical_contact`, `student_info_family_circumstances`, `student_info_archive_remark`, `student_info_created`, `student_info_datetime`) VALUES
(2, '12341', '1', 'Face to Face', '3', '12343212', 'Johan Gabe', 'Bumagat', 'Cantos', 'Male', 'March', 'San Pablo City', '', 'mark.bumagat@gmail.com', '09752155213', 'N/A', '', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', '', '', '2024-01-26 06:05:00', '2024-01-26 06:05:00'),
(3, '12341', '1', 'Face to Face edited', '3', '12343212', 'Johan Gabe', 'Bumagat', 'Cantos', 'Male', 'March', 'San Pablo City', 'asdasdasdasd@gmail.com', 'mark.bumagat@gmail.com', '09752155213', 'N/A', '12s123', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 0, 0, 0, 0, 0, 0, 0, 0, 'asdasd', 'asdasd', 'asdasd', 'asdasd', 'asdasd', '2024-01-26 13:49:51', '2024-02-05 09:15:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fca_info_student`
--
ALTER TABLE `fca_info_student`
  ADD PRIMARY KEY (`student_info_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fca_info_student`
--
ALTER TABLE `fca_info_student`
  MODIFY `student_info_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
