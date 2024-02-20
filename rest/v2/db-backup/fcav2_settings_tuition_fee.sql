-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 20, 2024 at 06:15 AM
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
  `tuition_fee_entrance` varchar(20) NOT NULL,
  `tuition_fee_miscellaneous` varchar(20) NOT NULL,
  `tuition_fee_tuition` varchar(20) NOT NULL,
  `tuition_fee_books` varchar(20) NOT NULL,
  `tuition_fee_admission` varchar(20) NOT NULL,
  `tuition_fee_upon_enrollment` varchar(20) NOT NULL,
  `tuition_fee_created` date NOT NULL,
  `tuition_fee_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_tuition_fee`
--

INSERT INTO `fcav2_settings_tuition_fee` (`tuition_fee_aid`, `tuition_fee_active`, `tuition_fee_category_id`, `tuition_fee_grade_id`, `tuition_fee_scheme_id`, `tuition_fee_entrance`, `tuition_fee_miscellaneous`, `tuition_fee_tuition`, `tuition_fee_books`, `tuition_fee_admission`, `tuition_fee_upon_enrollment`, `tuition_fee_created`, `tuition_fee_updated`) VALUES
(1, 1, '5', '2', '2', '100', '300', '400', '500', '200', '1500', '2024-02-20', '2024-02-20 12:54:55');

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
  MODIFY `tuition_fee_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
