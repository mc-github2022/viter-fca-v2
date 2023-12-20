-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2022 at 08:54 AM
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
-- Database: `db_fca_enrollment`
--

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_tuition_fee`
--

CREATE TABLE `fca_settings_tuition_fee` (
  `tuition_fee_aid` int(11) NOT NULL,
  `tuition_fee_category_id` varchar(20) NOT NULL,
  `tuition_fee_grade_id` varchar(20) NOT NULL,
  `tuition_fee_entrance` varchar(20) NOT NULL,
  `tuition_fee_miscellaneous` varchar(20) NOT NULL,
  `tuition_fee_tuition` varchar(20) NOT NULL,
  `tuition_fee_books` varchar(20) NOT NULL,
  `tuition_fee_start_date` varchar(50) NOT NULL,
  `tuition_fee_end_date` varchar(50) NOT NULL,
  `tuition_fee_created` date NOT NULL,
  `tuition_fee_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_tuition_fee`
--

INSERT INTO `fca_settings_tuition_fee` (`tuition_fee_aid`, `tuition_fee_category_id`, `tuition_fee_grade_id`, `tuition_fee_entrance`, `tuition_fee_miscellaneous`, `tuition_fee_tuition`, `tuition_fee_books`, `tuition_fee_start_date`, `tuition_fee_end_date`, `tuition_fee_created`, `tuition_fee_datetime`) VALUES
(9, '2', '8', '1', '2', '0', '0', '2022-10-31', '2022-12-11', '2022-10-24', '2022-11-21 09:23:52'),
(25, '3', '6', '', '', '', '', '', '', '2022-09-20', '2022-09-20 15:28:39'),
(37, '2', '6', '0', '2', '0', '0', '2021-12-30', '2022-12-01', '2022-10-24', '2022-11-21 09:27:21'),
(39, '3', '7', '', '', '', '', '', '', '2022-10-24', '2022-10-24 14:19:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fca_settings_tuition_fee`
--
ALTER TABLE `fca_settings_tuition_fee`
  ADD PRIMARY KEY (`tuition_fee_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fca_settings_tuition_fee`
--
ALTER TABLE `fca_settings_tuition_fee`
  MODIFY `tuition_fee_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
