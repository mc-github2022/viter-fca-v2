-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 26, 2024 at 01:43 AM
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
-- Table structure for table `fca_settings_discount`
--

CREATE TABLE `fca_settings_discount` (
  `discount_aid` int(11) NOT NULL,
  `discount_is_active` tinyint(1) NOT NULL,
  `discount_type` varchar(50) NOT NULL,
  `discount_tuition_fee` varchar(50) NOT NULL,
  `discount_entrance_fee` varchar(50) NOT NULL,
  `discount_category` varchar(50) NOT NULL,
  `discount_qualifications` varchar(225) NOT NULL,
  `discount_duration` varchar(225) NOT NULL,
  `discount_maintaining_grade` varchar(50) NOT NULL,
  `discount_requirement` varchar(225) NOT NULL,
  `discount_datetime` datetime NOT NULL,
  `discount_created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_discount`
--

INSERT INTO `fca_settings_discount` (`discount_aid`, `discount_is_active`, `discount_type`, `discount_tuition_fee`, `discount_entrance_fee`, `discount_category`, `discount_qualifications`, `discount_duration`, `discount_maintaining_grade`, `discount_requirement`, `discount_datetime`, `discount_created`) VALUES
(1, 1, 'Sibling Discount 2-2', '10', '0', 'Legacy & Loyalty', '2nd Sibling of 2 Enrolled at FCA', 'While Enrolled at FCA', 'N/A', 'N/A', '0000-00-00 00:00:00', '2024-01-26 00:09:49'),
(2, 1, 'Sibling Discount 2-4', '10', 'Sibling Discount 2-4', 'Legacy & Loyalty', '2nd Sibling of 2 Enrolled at FCA', 'While Enrolled at FCA', 'N/A', 'N/A', '0000-00-00 00:00:00', '2024-01-26 07:42:20'),
(4, 1, 'Pastor/Missionary Discount', '30', 'Pastor/Missionary Discount', 'Legacy & Loyalty', 'Child/ren of the qualified Pastor/Missionary', 'Duration of service at current church, or one (1) school year; whichever is longer.', 'N/A', 'Certification from church, and SEC Registration of church', '2024-01-26 08:39:06', '2024-01-26 08:06:51');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fca_settings_discount`
--
ALTER TABLE `fca_settings_discount`
  ADD PRIMARY KEY (`discount_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fca_settings_discount`
--
ALTER TABLE `fca_settings_discount`
  MODIFY `discount_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
