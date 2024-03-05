-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 06, 2024 at 12:31 AM
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
-- Table structure for table `fcav2_settings_grade_level`
--

CREATE TABLE `fcav2_settings_grade_level` (
  `grade_level_aid` int(11) NOT NULL,
  `grade_level_active` tinyint(1) NOT NULL,
  `grade_level_order` int(11) NOT NULL,
  `grade_level_name` varchar(50) NOT NULL,
  `grade_level_is_pre_school` tinyint(1) NOT NULL,
  `grade_level_created` datetime NOT NULL,
  `grade_level_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_grade_level`
--

INSERT INTO `fcav2_settings_grade_level` (`grade_level_aid`, `grade_level_active`, `grade_level_order`, `grade_level_name`, `grade_level_is_pre_school`, `grade_level_created`, `grade_level_datetime`) VALUES
(1, 1, 1, 'Grade 1', 0, '2024-02-23 08:15:25', '2024-02-28 10:22:34'),
(2, 1, 2, 'Grade 2', 0, '2024-02-23 08:15:32', '2024-02-23 08:15:32'),
(3, 1, 3, 'Grade 3', 0, '2024-02-23 08:15:37', '2024-02-23 08:15:37'),
(4, 1, 4, 'Grade 4', 0, '2024-02-28 10:25:18', '2024-02-28 10:25:18'),
(5, 1, 5, 'Grade 5', 0, '2024-02-28 10:25:29', '2024-02-28 10:25:29'),
(6, 1, 6, 'Grade 6', 0, '2024-02-28 10:25:36', '2024-02-28 10:25:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_settings_grade_level`
--
ALTER TABLE `fcav2_settings_grade_level`
  ADD PRIMARY KEY (`grade_level_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_settings_grade_level`
--
ALTER TABLE `fcav2_settings_grade_level`
  MODIFY `grade_level_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
