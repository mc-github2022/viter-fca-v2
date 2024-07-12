-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 12, 2024 at 08:50 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

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
-- Table structure for table `fcav2_settings_grade_level`
--

CREATE TABLE `fcav2_settings_grade_level` (
  `grade_level_aid` int(11) NOT NULL,
  `grade_level_active` tinyint(1) NOT NULL,
  `grade_level_order` int(11) NOT NULL,
  `grade_level_name` varchar(50) NOT NULL,
  `grade_level_is_pre_school` tinyint(1) NOT NULL,
  `grade_level_is_base_two` tinyint(1) NOT NULL,
  `grade_level_created` datetime NOT NULL,
  `grade_level_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fcav2_settings_grade_level`
--

INSERT INTO `fcav2_settings_grade_level` (`grade_level_aid`, `grade_level_active`, `grade_level_order`, `grade_level_name`, `grade_level_is_pre_school`, `grade_level_is_base_two`, `grade_level_created`, `grade_level_datetime`) VALUES
(14, 1, 1, 'Pre-kindergarten', 1, 1, '2022-11-24 00:00:00', '2024-07-12 14:04:30'),
(15, 1, 2, 'Kindergarten', 1, 0, '2022-11-24 00:00:00', '2024-07-12 14:04:38'),
(16, 1, 3, 'Nursery', 1, 1, '2022-11-24 00:00:00', '2024-07-12 14:04:43'),
(17, 1, 4, 'Grade 1', 0, 0, '2022-11-24 00:00:00', '2022-11-24 12:36:46'),
(18, 1, 5, 'Grade 2', 0, 0, '2022-11-24 00:00:00', '2022-11-24 12:36:53'),
(19, 1, 6, 'Grade 3', 0, 0, '2022-11-24 00:00:00', '2022-11-24 12:37:02'),
(20, 1, 7, 'Grade 4', 0, 0, '2022-11-24 00:00:00', '2022-11-24 12:37:07'),
(21, 1, 8, 'Grade 5', 0, 0, '2022-11-24 00:00:00', '2022-11-24 12:37:11'),
(22, 1, 9, 'Grade 6', 0, 0, '2022-11-24 00:00:00', '2022-11-24 12:37:16'),
(23, 1, 10, 'Grade 7', 0, 0, '2022-11-24 00:00:00', '2022-11-24 12:37:21'),
(24, 1, 11, 'Grade 8', 0, 0, '2022-11-24 00:00:00', '2022-11-24 12:37:25'),
(25, 1, 12, 'Grade 9', 0, 0, '2022-11-24 00:00:00', '2022-11-24 12:37:31'),
(26, 1, 13, 'Grade10', 0, 0, '2022-11-24 00:00:00', '2022-11-24 12:37:58');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_settings_grade_level`
--
ALTER TABLE `fcav2_settings_grade_level`
  ADD PRIMARY KEY (`grade_level_aid`),
  ADD KEY `grade_level_aid` (`grade_level_aid`,`grade_level_active`,`grade_level_order`,`grade_level_is_pre_school`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_settings_grade_level`
--
ALTER TABLE `fcav2_settings_grade_level`
  MODIFY `grade_level_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
