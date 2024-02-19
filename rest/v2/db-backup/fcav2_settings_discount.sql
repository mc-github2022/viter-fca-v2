-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 19, 2024 at 09:08 AM
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
-- Table structure for table `fcav2_settings_discount`
--

CREATE TABLE `fcav2_settings_discount` (
  `discount_aid` int(11) NOT NULL,
  `discount_category_id` varchar(20) NOT NULL,
  `discount_is_active` tinyint(1) NOT NULL,
  `discount_entrance_fee` varchar(50) NOT NULL,
  `discount_tuition_fee` varchar(50) NOT NULL,
  `discount_qualification` text NOT NULL,
  `discount_duration` text NOT NULL,
  `discount_maintaining_grade` varchar(200) NOT NULL,
  `discount_requirement` text NOT NULL,
  `discount_created` datetime NOT NULL,
  `discount_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_discount`
--

INSERT INTO `fcav2_settings_discount` (`discount_aid`, `discount_category_id`, `discount_is_active`, `discount_entrance_fee`, `discount_tuition_fee`, `discount_qualification`, `discount_duration`, `discount_maintaining_grade`, `discount_requirement`, `discount_created`, `discount_updated`) VALUES
(1, '1', 1, '20', '2', 'xcbb', 'cvn', '13', 'xcgn', '2024-02-19 16:05:33', '2024-02-19 16:08:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_settings_discount`
--
ALTER TABLE `fcav2_settings_discount`
  ADD PRIMARY KEY (`discount_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_settings_discount`
--
ALTER TABLE `fcav2_settings_discount`
  MODIFY `discount_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
