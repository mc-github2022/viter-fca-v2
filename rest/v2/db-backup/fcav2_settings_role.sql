-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 20, 2024 at 12:56 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

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
-- Table structure for table `fcav2_settings_role`
--

CREATE TABLE `fcav2_settings_role` (
  `role_aid` int(11) NOT NULL,
  `role_is_active` tinyint(1) NOT NULL,
  `role_name` varchar(50) NOT NULL,
  `role_description` text NOT NULL,
  `role_created` varchar(20) NOT NULL,
  `role_datetime` varchar(20) NOT NULL,
  `role_is_developer` tinyint(1) NOT NULL,
  `role_is_admin` tinyint(1) NOT NULL,
  `role_is_client` tinyint(1) NOT NULL,
  `role_is_parent` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_role`
--

INSERT INTO `fcav2_settings_role` (`role_aid`, `role_is_active`, `role_name`, `role_description`, `role_created`, `role_datetime`, `role_is_developer`, `role_is_admin`, `role_is_client`, `role_is_parent`) VALUES
(1, 1, 'developer', 'qqqqqq', '2023-12-19 14:07:05', '2023-12-19 14:07:05', 1, 0, 0, 0),
(2, 1, 'Admin', 'test', '2024-01-08 14:09:28', '2024-01-08 14:09:28', 0, 1, 0, 0),
(3, 1, 'Client', 'Parent or other user', '2024-01-10 09:15:52', '2024-01-10 09:15:52', 0, 0, 1, 0),
(4, 1, 'Parent', 'This is for parent only', '2024-02-14 07:49:38', '2024-02-14 07:49:38', 0, 0, 0, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_settings_role`
--
ALTER TABLE `fcav2_settings_role`
  ADD PRIMARY KEY (`role_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_settings_role`
--
ALTER TABLE `fcav2_settings_role`
  MODIFY `role_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
