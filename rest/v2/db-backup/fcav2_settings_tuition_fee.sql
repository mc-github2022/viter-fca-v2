-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 26, 2024 at 08:18 AM
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
(6, 1, '3', '2', '2', '20', '30', '40', '10', '100', '', '', '', '2024-02-26 00:00:00', '2024-02-26 10:06:47'),
(7, 1, '5', '2', '3', '1000', '17500', '3160.40', '6000', '27660.4', '5707.078', '5', '28535.39', '2024-02-26 00:00:00', '2024-02-26 14:49:42'),
(8, 1, '5', '2', '4', '400', '7000', '1264.16', '2400', '11064.16', '9411.326', '5', '47056.63', '2024-02-26 14:24:49', '2024-02-26 14:50:27');

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
  MODIFY `tuition_fee_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
