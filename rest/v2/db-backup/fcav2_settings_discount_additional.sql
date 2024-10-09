-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 15, 2024 at 02:20 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

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
-- Table structure for table `fcav2_settings_discount_additional`
--

CREATE TABLE `fcav2_settings_discount_additional` (
  `discount_additional_aid` int(11) NOT NULL,
  `discount_additional_is_active` tinyint(1) NOT NULL,
  `discount_additional_name` varchar(200) NOT NULL,
  `discount_additional_base_rate_id` varchar(20) NOT NULL,
  `discount_additional_percent` varchar(20) NOT NULL,
  `discount_additional_amount` varchar(20) NOT NULL,
  `discount_additional_created` datetime NOT NULL,
  `discount_additional_is_early_bird` tinyint(1) NOT NULL,
  `discount_additional_is_stand_alone_discount` tinyint(1) NOT NULL,
  `discount_additional_is_applyed_scheme_a` tinyint(1) NOT NULL,
  `discount_additional_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fcav2_settings_discount_additional`
--

INSERT INTO `fcav2_settings_discount_additional` (`discount_additional_aid`, `discount_additional_is_active`, `discount_additional_name`, `discount_additional_base_rate_id`, `discount_additional_percent`, `discount_additional_amount`, `discount_additional_created`, `discount_additional_is_early_bird`, `discount_additional_is_stand_alone_discount`, `discount_additional_is_applyed_scheme_a`, `discount_additional_updated`) VALUES
(1, 1, 'Enable Full Payment Discount?', '4', '10', '', '2024-02-23 09:06:00', 0, 0, 1, '2024-07-11 15:33:53'),
(2, 1, 'Enable New Student Promo?', '4', '', '1500', '2024-02-23 09:06:36', 0, 0, 0, '2024-07-10 08:29:01'),
(3, 1, 'Enable Early Bird Promo?', '4', '', '', '2024-02-23 09:07:43', 1, 0, 0, '2024-07-11 10:45:39'),
(4, 1, 'Enable Loyalty Discount?', '4', '30', '', '2024-03-14 14:38:45', 0, 0, 0, '2024-07-10 08:28:54'),
(5, 1, 'Enable Re-Enrolling Promo?', '4', '', '1000', '2024-03-14 14:39:11', 0, 0, 0, '2024-07-10 08:29:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_settings_discount_additional`
--
ALTER TABLE `fcav2_settings_discount_additional`
  ADD PRIMARY KEY (`discount_additional_aid`),
  ADD KEY `discount_additional_aid` (`discount_additional_aid`,`discount_additional_is_active`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_settings_discount_additional`
--
ALTER TABLE `fcav2_settings_discount_additional`
  MODIFY `discount_additional_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
