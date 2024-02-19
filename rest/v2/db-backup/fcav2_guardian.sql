-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 20, 2024 at 12:42 AM
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
-- Table structure for table `fcav2_guardian`
--

CREATE TABLE `fcav2_guardian` (
  `guardian_aid` int(11) NOT NULL,
  `guardian_active` tinyint(1) NOT NULL,
  `guardian_relationship_id` varchar(11) NOT NULL,
  `guardian_parent_id` varchar(20) NOT NULL,
  `guardian_is_reside` tinyint(1) NOT NULL,
  `guardian_salutation` varchar(10) NOT NULL,
  `guardian_fname` varchar(50) NOT NULL,
  `guardian_mname` int(20) NOT NULL,
  `guardian_maiden_name` varchar(20) NOT NULL,
  `guardian_lname` varchar(50) NOT NULL,
  `guardian_email` varchar(100) NOT NULL,
  `guardian_mobile` varchar(30) NOT NULL,
  `guardian_landline` varchar(30) NOT NULL,
  `guardian_address` varchar(50) NOT NULL,
  `guardian_province` varchar(30) NOT NULL,
  `guardian_city` varchar(20) NOT NULL,
  `guardian_zipcode` varchar(10) NOT NULL,
  `guardian_country` varchar(20) NOT NULL,
  `guardian_religion` varchar(30) NOT NULL,
  `guardian_occupation` varchar(30) NOT NULL,
  `guardian_datetime` varchar(20) NOT NULL,
  `guardian_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_guardian`
--

INSERT INTO `fcav2_guardian` (`guardian_aid`, `guardian_active`, `guardian_relationship_id`, `guardian_parent_id`, `guardian_is_reside`, `guardian_salutation`, `guardian_fname`, `guardian_mname`, `guardian_maiden_name`, `guardian_lname`, `guardian_email`, `guardian_mobile`, `guardian_landline`, `guardian_address`, `guardian_province`, `guardian_city`, `guardian_zipcode`, `guardian_country`, `guardian_religion`, `guardian_occupation`, `guardian_datetime`, `guardian_created`) VALUES
(3, 0, '2', '1', 0, 'mrs', 'vbncbn', 0, '', 'qwecvbncvbncv', 'xx@ccc.com', '1233232132', '12312312312', 'sdfgs', 'sdfgsdf', 'sdfg', '2223', 'Philippines', 'asdfasd', 'asdfasd', '2024-02-19 13:23:38', ''),
(6, 0, '2', '1', 1, 'mr', 'xxxxx', 0, '', 'sssss', 'xx@ccc.com', '1233232132', '', 'qqq', 'qq', 'qqq', 'qqqq', 'Philippines', 'sdf', 'sdf', '2024-02-19 14:48:51', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_guardian`
--
ALTER TABLE `fcav2_guardian`
  ADD PRIMARY KEY (`guardian_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_guardian`
--
ALTER TABLE `fcav2_guardian`
  MODIFY `guardian_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
