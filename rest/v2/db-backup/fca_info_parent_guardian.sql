-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 16, 2024 at 08:43 AM
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
-- Table structure for table `fca_info_parent_guardian`
--

CREATE TABLE `fca_info_parent_guardian` (
  `parent_guardian_info_aid` int(11) NOT NULL,
  `parent_guardian_info_user_id` varchar(20) NOT NULL,
  `parent_guardian_info_relationship_id` varchar(20) NOT NULL,
  `parent_guardian_info_salutation` varchar(50) NOT NULL,
  `parent_guardian_info_reside` varchar(10) NOT NULL,
  `parent_guardian_info_fname` varchar(100) NOT NULL,
  `parent_guardian_info_mname` varchar(100) NOT NULL,
  `parent_guardian_info_maiden_name` varchar(100) NOT NULL,
  `parent_guardian_info_lname` varchar(100) NOT NULL,
  `parent_guardian_info_email` varchar(100) NOT NULL,
  `parent_guardian_info_mobile` varchar(100) NOT NULL,
  `parent_guardian_info_landline` varchar(50) NOT NULL,
  `parent_guardian_info_address` varchar(150) NOT NULL,
  `parent_guardian_info_province` varchar(50) NOT NULL,
  `parent_guardian_info_city` varchar(50) NOT NULL,
  `parent_guardian_info_zipcode` varchar(10) NOT NULL,
  `parent_guardian_info_religion` varchar(20) NOT NULL,
  `parent_guardian_info_occupation` varchar(50) NOT NULL,
  `parent_guardian_info_created` varchar(20) NOT NULL,
  `parent_guardian_info_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_info_parent_guardian`
--

INSERT INTO `fca_info_parent_guardian` (`parent_guardian_info_aid`, `parent_guardian_info_user_id`, `parent_guardian_info_relationship_id`, `parent_guardian_info_salutation`, `parent_guardian_info_reside`, `parent_guardian_info_fname`, `parent_guardian_info_mname`, `parent_guardian_info_maiden_name`, `parent_guardian_info_lname`, `parent_guardian_info_email`, `parent_guardian_info_mobile`, `parent_guardian_info_landline`, `parent_guardian_info_address`, `parent_guardian_info_province`, `parent_guardian_info_city`, `parent_guardian_info_zipcode`, `parent_guardian_info_religion`, `parent_guardian_info_occupation`, `parent_guardian_info_created`, `parent_guardian_info_datetime`) VALUES
(1, '1', '3', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', '', '2024-01-16 13:00:04', '2024-01-16 13:00:04'),
(4, '2', '2', '', '1', '', '', '', '', '', '', '', '', '', '', '', '', '', '2024-01-16 14:02:38', '2024-01-16 14:02:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fca_info_parent_guardian`
--
ALTER TABLE `fca_info_parent_guardian`
  ADD PRIMARY KEY (`parent_guardian_info_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fca_info_parent_guardian`
--
ALTER TABLE `fca_info_parent_guardian`
  MODIFY `parent_guardian_info_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
