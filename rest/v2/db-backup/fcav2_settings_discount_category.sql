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
-- Table structure for table `fcav2_settings_discount_category`
--

CREATE TABLE `fcav2_settings_discount_category` (
  `discount_category_aid` int(11) NOT NULL,
  `discount_category_name` varchar(200) NOT NULL,
  `discount_category_is_active` tinyint(1) NOT NULL,
  `discount_category_created` datetime NOT NULL,
  `discount_category_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_discount_category`
--

INSERT INTO `fcav2_settings_discount_category` (`discount_category_aid`, `discount_category_name`, `discount_category_is_active`, `discount_category_created`, `discount_category_updated`) VALUES
(1, 'Legacy & Loyalty', 1, '2024-02-19 15:00:23', '2024-02-19 15:03:30'),
(2, 'Regular', 1, '2024-02-19 15:03:39', '2024-02-19 15:04:23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_settings_discount_category`
--
ALTER TABLE `fcav2_settings_discount_category`
  ADD PRIMARY KEY (`discount_category_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_settings_discount_category`
--
ALTER TABLE `fcav2_settings_discount_category`
  MODIFY `discount_category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
