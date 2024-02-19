-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 20, 2024 at 12:56 AM
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
-- Table structure for table `fcav2_guardian`
--

CREATE TABLE `fcav2_guardian` (
  `guardian_aid` int(11) NOT NULL,
  `guardian_active` tinyint(1) NOT NULL,
  `guardian_relationship_id` int(11) NOT NULL,
  `guardian_parent_id` int(11) NOT NULL,
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
  MODIFY `guardian_aid` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
