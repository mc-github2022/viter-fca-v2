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

INSERT INTO `fcav2_settings_user_system` (`user_system_aid`, `user_system_is_active`, `user_system_fname`, `user_system_lname`, `user_system_email`, `user_system_new_email`, `user_system_role_id`, `user_system_key`, `user_system_password`, `user_system_created`, `user_system_datetime`) VALUES
(1, 1, 'Mark Ryan', 'Merin', 'mark.merin@frontlinebusiness.com.ph', '', 1, '', '$2y$10$KiIkfVXV5U357nFYWo0KDewRDHr7YTcGk9JC6G4bXsfQU7IOB7tfi', '2023-04-19 09:13:08', '2024-02-16 09:07:02'),
(17, 1, 'Monmon', 'Plaza', 'ramon.plaza@frontlinebusiness.com.ph', '', 1, '', '$2y$10$KXu/IEfKf4hytdeRfVYTY.gnzHrNbZytzMQepTtZdifr8Ct3DJ1w2', '2024-01-08 08:26:34', '2024-01-08 12:50:29');

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
