-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 20, 2024 at 08:56 AM
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
-- Table structure for table `fcav2_settings_school_year`
--

CREATE TABLE `fcav2_settings_school_year` (
  `school_year_aid` int(11) NOT NULL,
  `school_year_is_active` tinyint(1) NOT NULL,
  `school_year_start_date` varchar(20) NOT NULL,
  `school_year_end_date` varchar(20) NOT NULL,
  `school_year_enrollment_start_date` varchar(20) NOT NULL,
  `school_year_enrollment_end_date` varchar(20) NOT NULL,
  `school_year_is_enrollment_open` tinyint(1) NOT NULL,
  `school_year_created` datetime NOT NULL,
  `school_year_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_school_year`
--

INSERT INTO `fcav2_settings_school_year` (`school_year_aid`, `school_year_is_active`, `school_year_start_date`, `school_year_end_date`, `school_year_enrollment_start_date`, `school_year_enrollment_end_date`, `school_year_is_enrollment_open`, `school_year_created`, `school_year_datetime`) VALUES
(1, 1, '2023-03-20', '2024-06-21', '2024-02-26', '2024-03-01', 0, '2024-02-20 14:47:26', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_settings_school_year`
--
ALTER TABLE `fcav2_settings_school_year`
  ADD PRIMARY KEY (`school_year_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_settings_school_year`
--
ALTER TABLE `fcav2_settings_school_year`
  MODIFY `school_year_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
