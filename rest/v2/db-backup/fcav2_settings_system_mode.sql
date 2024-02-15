-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 15, 2024 at 06:59 AM
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
-- Table structure for table `fcav2_settings_system_mode`
--

CREATE TABLE `fcav2_settings_system_mode` (
  `system_mode_aid` int(11) NOT NULL,
  `system_mode_name` varchar(200) NOT NULL,
  `system_mode_is_on` tinyint(1) NOT NULL,
  `system_mode_created` datetime NOT NULL,
  `system_mode_updated` datetime NOT NULL,
  `system_mode_is_maintenance` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_system_mode`
--

INSERT INTO `fcav2_settings_system_mode` (`system_mode_aid`, `system_mode_name`, `system_mode_is_on`, `system_mode_created`, `system_mode_updated`, `system_mode_is_maintenance`) VALUES
(1, 'Maintenance', 0, '2024-02-15 13:53:53', '2024-02-15 13:53:53', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_settings_system_mode`
--
ALTER TABLE `fcav2_settings_system_mode`
  ADD PRIMARY KEY (`system_mode_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_settings_system_mode`
--
ALTER TABLE `fcav2_settings_system_mode`
  MODIFY `system_mode_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
