-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 06, 2024 at 12:30 AM
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
-- Table structure for table `fcav2_settings_tuition_fee`
--

CREATE TABLE `fcav2_settings_tuition_fee` (
  `tuition_fee_aid` int(11) NOT NULL,
  `tuition_fee_active` tinyint(1) NOT NULL,
  `tuition_fee_category_id` varchar(20) NOT NULL,
  `tuition_fee_grade_id` varchar(20) NOT NULL,
  `tuition_fee_scheme_id` varchar(20) NOT NULL,
  `tuition_fee_miscellaneous` varchar(20) NOT NULL,
  `tuition_fee_tuition` varchar(20) NOT NULL,
  `tuition_fee_books` varchar(20) NOT NULL,
  `tuition_fee_admission` varchar(20) NOT NULL,
  `tuition_fee_upon_enrollment` varchar(20) NOT NULL,
  `tuition_fee_monthly` varchar(20) NOT NULL,
  `tuition_fee_how_many_months` varchar(20) NOT NULL,
  `tuition_fee_total_monthly` varchar(20) NOT NULL,
  `tuition_fee_created` datetime NOT NULL,
  `tuition_fee_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_tuition_fee`
--

INSERT INTO `fcav2_settings_tuition_fee` (`tuition_fee_aid`, `tuition_fee_active`, `tuition_fee_category_id`, `tuition_fee_grade_id`, `tuition_fee_scheme_id`, `tuition_fee_miscellaneous`, `tuition_fee_tuition`, `tuition_fee_books`, `tuition_fee_admission`, `tuition_fee_upon_enrollment`, `tuition_fee_monthly`, `tuition_fee_how_many_months`, `tuition_fee_total_monthly`, `tuition_fee_created`, `tuition_fee_updated`) VALUES
(1, 1, '5', '2', '2', '2000', '35000', '6320.79', '12000', '55320.79', '', '', '', '2024-02-20 00:00:00', '2024-02-26 14:19:20'),
(2, 1, '5', '3', '2', '100', '400', '50', '300', '850', '', '', '', '2024-02-21 00:00:00', '2024-02-22 07:32:34'),
(6, 1, '2', '1', '3', '400', '6240', '1847.89', '2040', '10527.89', '4956.393', '9', '44607.537', '2024-02-26 00:00:00', '2024-02-29 08:00:07'),
(7, 1, '5', '2', '3', '1000', '17500', '3160.40', '6000', '27660.4', '5707.078', '5', '28535.39', '2024-02-26 00:00:00', '2024-02-26 14:49:42'),
(8, 1, '5', '2', '4', '400', '7000', '1264.16', '2400', '11064.16', '9411.326', '5', '47056.63', '2024-02-26 14:24:49', '2024-02-26 14:50:27'),
(9, 1, '2', '1', '1', '2000', '31200', '9239.43', '10200', '52639.43', '', '', '0', '2024-02-26 15:23:52', '2024-02-29 07:51:07'),
(10, 1, '2', '1', '2', '500', '7800', '2309.86', '2550', '13159.86', '13549.86', '3', '40649.58', '2024-02-26 15:25:31', '2024-02-29 07:51:59'),
(11, 1, '3', '1', '1', '2000', '33000', '9239.43', '12000', '56239.43', '', '', '0', '2024-02-29 08:01:15', '2024-02-29 08:01:15'),
(12, 1, '3', '1', '2', '500', '8250', '2309.86', '3000', '14059.86', '14472.356', '3', '43417.068', '2024-02-29 08:02:28', '2024-02-29 08:02:28'),
(13, 1, '3', '1', '3', '400', '6600', '1847.89', '2400', '11247.89', '5292.393', '9', '47631.537', '2024-02-29 08:03:13', '2024-02-29 08:03:13'),
(14, 1, '1', '1', '1', '1500', '27000', '11716.95', '8190', '48406.95', '', '', '0', '2024-02-29 08:04:41', '2024-02-29 08:04:41'),
(15, 1, '1', '1', '2', '375.00', '6750.00', '2929.24', '2047.50', '12101.74', '12439.236', '3', '37317.708', '2024-02-29 08:06:23', '2024-02-29 08:06:23'),
(16, 1, '1', '1', '3', '300', '5400', '2343.39', '1638', '9681.39', '4542.84', '9', '40885.56', '2024-02-29 08:06:57', '2024-02-29 08:06:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_settings_tuition_fee`
--
ALTER TABLE `fcav2_settings_tuition_fee`
  ADD PRIMARY KEY (`tuition_fee_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_settings_tuition_fee`
--
ALTER TABLE `fcav2_settings_tuition_fee`
  MODIFY `tuition_fee_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
