-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 14, 2024 at 06:53 AM
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
-- Table structure for table `fcav2_parents`
--

CREATE TABLE `fcav2_parents` (
  `parents_aid` int(11) NOT NULL,
  `parents_is_active` tinyint(1) NOT NULL,
  `parents_student_id` varchar(20) NOT NULL,
  `parents_relationship_id` varchar(20) NOT NULL,
  `parents_salutation` varchar(10) NOT NULL,
  `parents_is_reside` tinyint(1) NOT NULL,
  `parents_fname` varchar(100) NOT NULL,
  `parents_mname` varchar(50) NOT NULL,
  `parents_maiden_name` varchar(50) NOT NULL,
  `parents_lname` varchar(50) NOT NULL,
  `parents_email` varchar(50) NOT NULL,
  `parents_mobile` varchar(30) NOT NULL,
  `parents_landline` varchar(30) NOT NULL,
  `parents_address` varchar(100) NOT NULL,
  `parents_province` varchar(20) NOT NULL,
  `parents_city` varchar(20) NOT NULL,
  `parents_zipcode` varchar(10) NOT NULL,
  `parents_country` varchar(20) NOT NULL,
  `parents_religion` varchar(30) NOT NULL,
  `parents_occupation` varchar(30) NOT NULL,
  `parents_datetime` varchar(20) NOT NULL,
  `parents_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_parents`
--
ALTER TABLE `fcav2_parents`
  ADD PRIMARY KEY (`parents_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_parents`
--
ALTER TABLE `fcav2_parents`
  MODIFY `parents_aid` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
