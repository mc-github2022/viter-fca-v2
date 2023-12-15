-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 13, 2023 at 04:59 AM
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

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fca_settings_department`
--
ALTER TABLE `fca_settings_department`
  ADD PRIMARY KEY (`department_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fca_settings_department`
--
ALTER TABLE `fca_settings_department`
  MODIFY `department_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
