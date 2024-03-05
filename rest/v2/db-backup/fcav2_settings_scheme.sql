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
-- Table structure for table `fcav2_settings_scheme`
--

CREATE TABLE `fcav2_settings_scheme` (
  `scheme_aid` int(11) NOT NULL,
  `scheme_active` tinyint(1) NOT NULL,
  `scheme_name` varchar(50) NOT NULL,
  `scheme_created` varchar(20) NOT NULL,
  `scheme_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_scheme`
--

INSERT INTO `fcav2_settings_scheme` (`scheme_aid`, `scheme_active`, `scheme_name`, `scheme_created`, `scheme_datetime`) VALUES
(1, 1, 'Scheme A', '2024-02-26 15:22:59', '2024-02-29 07:49:01'),
(2, 1, 'Scheme B', '2024-02-26 15:25:17', '2024-02-29 07:49:06'),
(3, 1, 'Scheme C', '2024-02-29 07:48:56', '2024-02-29 07:49:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_settings_scheme`
--
ALTER TABLE `fcav2_settings_scheme`
  ADD PRIMARY KEY (`scheme_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_settings_scheme`
--
ALTER TABLE `fcav2_settings_scheme`
  MODIFY `scheme_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
