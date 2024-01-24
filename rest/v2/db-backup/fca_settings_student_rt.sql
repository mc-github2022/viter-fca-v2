-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 18, 2024 at 01:00 AM
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

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fca_settings_student_rt`
--
ALTER TABLE `fca_settings_student_rt`
  ADD PRIMARY KEY (`student_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fca_settings_student_rt`
--
ALTER TABLE `fca_settings_student_rt`
  MODIFY `student_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
