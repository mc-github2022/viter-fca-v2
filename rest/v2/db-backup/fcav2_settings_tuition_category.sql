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
-- Table structure for table `fcav2_settings_tuition_category`
--

CREATE TABLE `fcav2_settings_tuition_category` (
  `tuition_category_aid` int(11) NOT NULL,
  `tuition_category_active` tinyint(1) NOT NULL,
  `tuition_category_name` varchar(50) NOT NULL,
  `tuition_category_created` varchar(20) NOT NULL,
  `tuition_category_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_tuition_category`
--

INSERT INTO `fcav2_settings_tuition_category` (`tuition_category_aid`, `tuition_category_active`, `tuition_category_name`, `tuition_category_created`, `tuition_category_datetime`) VALUES
(1, 1, 'Legacy', '2024-02-26 15:22:56', '2024-02-29 07:49:36'),
(2, 1, 'Loyalty', '2024-02-29 07:49:46', '2024-02-29 07:49:46'),
(3, 1, 'Regular', '2024-02-29 07:49:52', '2024-02-29 07:49:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_settings_tuition_category`
--
ALTER TABLE `fcav2_settings_tuition_category`
  ADD PRIMARY KEY (`tuition_category_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_settings_tuition_category`
--
ALTER TABLE `fcav2_settings_tuition_category`
  MODIFY `tuition_category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
