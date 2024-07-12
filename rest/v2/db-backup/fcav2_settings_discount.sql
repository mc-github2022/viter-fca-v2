-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 12, 2024 at 08:53 AM
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
-- Table structure for table `fcav2_settings_discount`
--

CREATE TABLE `fcav2_settings_discount` (
  `discount_aid` int(11) NOT NULL,
  `discount_category_id` varchar(20) NOT NULL,
  `discount_type` varchar(200) NOT NULL,
  `discount_is_active` tinyint(1) NOT NULL,
  `discount_admission_fee` varchar(50) NOT NULL,
  `discount_tuition_fee` varchar(50) NOT NULL,
  `discount_qualification` text NOT NULL,
  `discount_duration` text NOT NULL,
  `discount_maintaining_grade` varchar(200) NOT NULL,
  `discount_requirement` text NOT NULL,
  `discount_is_stand_alone_discount` tinyint(1) NOT NULL,
  `discount_created` datetime NOT NULL,
  `discount_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fcav2_settings_discount`
--

INSERT INTO `fcav2_settings_discount` (`discount_aid`, `discount_category_id`, `discount_type`, `discount_is_active`, `discount_admission_fee`, `discount_tuition_fee`, `discount_qualification`, `discount_duration`, `discount_maintaining_grade`, `discount_requirement`, `discount_is_stand_alone_discount`, `discount_created`, `discount_updated`) VALUES
(1, '1', 'Academic - Top 1&2 G4/G7', 1, '30', '30', 'Top 1/2  of class', 'Up to G6 or G10', '87', 'Cert from Prev School', 0, '2024-02-19 16:05:33', '2024-03-18 15:09:44'),
(3, '1', 'Pastor/Missionary Discount', 1, '30', '30', 'Child/ren of the qualified Pastor/Missionary', 'Duration of service at current church, or one (1) school year; whichever is longer.', '', 'Certification from church, and SEC Registration of church', 0, '2024-02-29 08:07:57', '2024-02-29 08:07:57'),
(4, '2', 'Children of Pastors/Missionaries', 1, '50', '50', 'Child/ren of the qualified Pastor/Missionary', 'Duration of service at current church, or one (1) school year; whichever is longer.', '', 'Certification from church, and SEC Registration of church', 0, '2024-03-18 09:10:45', '2024-03-18 09:11:43'),
(5, '2', 'PFM Affiliate', 1, '40', '40', 'Any PFM Affiliate (FBS, FTW, UE)', 'Duration of Employment at PFM affiliate, or one (1) school year; whichever is longer.', '', '', 0, '2024-03-18 09:12:47', '2024-03-18 15:36:27'),
(6, '2', 'Academic Discount (Grade 4 Transferee)', 1, '50', '50', 'Top 1 & 2 of Class', 'Up to Grade 6', '87', 'Certification from Previous School', 0, '2024-03-18 15:13:47', '2024-03-18 15:13:47'),
(7, '2', 'Academic Discount (Incoming Grade 7)', 1, '50', '50', 'Top 1 & 2 of Class', 'Up to Grade 10', '87', 'Certification from Previous School', 0, '2024-03-18 15:15:47', '2024-03-18 15:15:47'),
(8, '2', 'Sibling Discount 2-2', 1, '', '30', '2nd Sibling of 2 Enrolled at FCA', '2nd Sibling of 2 Enrolled at FCA', '', '', 0, '2024-03-18 15:31:10', '2024-03-18 15:32:35'),
(9, '2', 'Sibling Discount 1-3', 1, '', '30', '1st Sibling of 3 or more Enrolled at FCA', 'While Enrolled at FCA', '', '', 0, '2024-03-18 15:32:27', '2024-03-18 15:34:13'),
(10, '2', 'Sibling Discount 2-3', 1, '', '40', '2nd Sibling of 3 or more Enrolled at FCA', 'While Enrolled at FCA', '', '', 0, '2024-03-18 15:33:18', '2024-03-18 15:34:25'),
(11, '2', 'Sibling Discount 3+', 1, '', '50', '3rd Sibling (and up) Enrolled at FCA', 'While Enrolled at FCA', '', '', 0, '2024-03-18 15:34:03', '2024-03-18 15:34:03'),
(12, '2', 'Sibling Discount 4+', 1, '', '100', '4th Sibling (and up) Enrolled at FCA', 'While Enrolled at FCA', '', '', 0, '2024-03-18 15:35:30', '2024-03-18 15:35:30'),
(13, '4', 'Academic Discounts (Incoming Grade 7)', 1, '30', '30', 'Top 1 and 2 of Class', 'Up to Grade 10', '87', 'Certification from the Registrar', 0, '2024-03-19 13:44:30', '2024-04-26 08:54:27'),
(14, '4', 'FCA 3y+', 1, '50', '50', 'Employee of FCA for 3 years and above', 'Duration of employment to FCA', '', '', 0, '2024-03-25 10:26:10', '2024-03-25 10:26:10'),
(15, '1', 'Sibling Discount 2-2', 1, '', '10', '2nd Sibling of 2 Enrolled at FCA', 'While Enrolled at FCA', '', '', 0, '2024-04-26 08:43:09', '2024-04-26 08:43:44'),
(16, '1', 'Sibling Discount 1-3', 1, '', '10', '1st Sibling of 3 Enrolled at FCA', 'While Enrolled at FCA', '', '', 0, '2024-04-26 08:44:21', '2024-04-26 08:44:21'),
(17, '1', 'Sibling Discount 2-3', 1, '', '20', '2nd Sibling of 3 Enrolled at FCA', 'While Enrolled at FCA', '', '', 0, '2024-04-26 08:45:03', '2024-04-26 08:45:03'),
(18, '1', 'Sibling Discount 3-3', 1, '', '30', '3rd Sibling of 3 Enrolled at FCA', 'While Enrolled at FCA', '', '', 0, '2024-04-26 08:45:34', '2024-04-26 08:45:34'),
(19, '1', 'Sibling Discount 4+', 1, '', '100', '4th Sibling (and up) Enrolled at FCA', 'While Enrolled at FCA', '', '', 1, '2024-04-26 08:46:20', '2024-07-11 10:02:44'),
(20, '4', 'Loyalty Benefits (Incoming Grade1 rom FCA)', 1, '', '30', 'Completed K2 at FCA', '\\\"Discount: Until Grade 3\nSchool Supplies: Grade 1 only\\\"', '', '', 0, '2024-04-26 08:58:14', '2024-04-26 08:58:14'),
(21, '4', 'Sibling Discount 2-2', 1, '', '10', '2nd Sibling of 2 Enrolled at FCA', 'While Enrolled at FCA', '', '', 0, '2024-04-26 08:59:59', '2024-04-26 08:59:59'),
(22, '4', 'Sibling Discount 1-3', 1, '', '10', '1st Sibling of 3 Enrolled at FCA', 'While Enrolled at FCA', '', '', 0, '2024-04-26 09:00:24', '2024-04-26 09:00:24'),
(23, '4', 'Sibling Discount 2-3', 1, '', '20', '2nd Sibling of 3 Enrolled at FCA', 'While Enrolled at FCA', '', '', 0, '2024-04-26 09:00:55', '2024-04-26 09:00:55'),
(24, '4', 'Sibling Discount 3-3', 1, '', '30', '3rd Sibling (and up) Enrolled at FCA', 'While Enrolled at FCA', '', '', 0, '2024-04-26 09:01:40', '2024-04-26 09:01:40'),
(25, '4', 'Sibling Discount 4+', 1, '', '100', '4th Sibling (and up) Enrolled at FCA', 'While Enrolled at FCA', '', '', 0, '2024-04-26 09:02:06', '2024-04-26 09:02:06'),
(26, '4', 'Child/ren of Pastor/Missionary', 1, '30', '30', 'Child/ren of the qualified Pastor', 'Duration of service at current church, or one (1) school year; whichever is longer.', '', 'Certification from church, and SEC Registration of church', 0, '2024-04-26 09:04:06', '2024-04-26 09:04:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_settings_discount`
--
ALTER TABLE `fcav2_settings_discount`
  ADD PRIMARY KEY (`discount_aid`),
  ADD KEY `discount_aid` (`discount_aid`,`discount_category_id`,`discount_type`,`discount_is_active`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_settings_discount`
--
ALTER TABLE `fcav2_settings_discount`
  MODIFY `discount_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
