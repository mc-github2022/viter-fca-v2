-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 14, 2024 at 06:55 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

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
-- Table structure for table `fcav2_settings_user_system`
--

CREATE TABLE `fcav2_settings_user_system` (
  `user_system_aid` int(11) NOT NULL,
  `user_system_is_active` tinyint(1) NOT NULL,
  `user_system_fname` varchar(128) NOT NULL,
  `user_system_lname` varchar(128) NOT NULL,
  `user_system_email` varchar(255) NOT NULL,
  `user_system_new_email` varchar(255) NOT NULL,
  `user_system_role_id` int(11) NOT NULL,
  `user_system_key` varchar(255) NOT NULL,
  `user_system_password` varchar(255) NOT NULL,
  `user_system_created` datetime NOT NULL,
  `user_system_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_user_system`
--

INSERT INTO `fcav2_settings_user_system` (`user_system_aid`, `user_system_is_active`, `user_system_fname`, `user_system_lname`, `user_system_email`, `user_system_role_id`, `user_system_key`, `user_system_password`, `user_system_created`, `user_system_datetime`) VALUES
(1, 1, 'Mark Ryan', 'Merin', 'mark.merin@frontlinebusiness.com.ph', 1, 'c47a62a6f5fc28388226429177c984b80f52b3167a792da2dd70332e745ebf70', '', '2023-04-19 09:13:08', '2023-12-19 14:54:05'),
(17, 1, 'Monmon', 'Plaza', 'ramon.plaza@frontlinebusiness.com.ph', 1, '', '$2y$10$KXu/IEfKf4hytdeRfVYTY.gnzHrNbZytzMQepTtZdifr8Ct3DJ1w2', '2024-01-08 08:26:34', '2024-01-08 12:50:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_settings_user_system`
--
ALTER TABLE `fcav2_settings_user_system`
  ADD PRIMARY KEY (`user_system_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_settings_user_system`
--
ALTER TABLE `fcav2_settings_user_system`
  MODIFY `user_system_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
