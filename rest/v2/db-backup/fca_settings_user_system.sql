-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 14, 2024 at 08:47 AM
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
-- Database: `fca_enrollment_v2`
--

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_user_system`
--

CREATE TABLE `fca_settings_user_system` (
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
-- Dumping data for table `fca_settings_user_system`
--

INSERT INTO `fca_settings_user_system` (`user_system_aid`, `user_system_is_active`, `user_system_fname`, `user_system_lname`, `user_system_email`, `user_system_new_email`, `user_system_role_id`, `user_system_key`, `user_system_password`, `user_system_created`, `user_system_datetime`) VALUES
(1, 1, 'Mark Ryan', 'Merin', 'merin.ryanmark@gmail.com', '', 1, 'ce66539eedc453825e92a5e3617619480244b40658e1064a9947278479c09fc6', '$2y$10$g89vzPcXDXTxXpRFoSCu0ek2Y5Jn1bb2DN/Gm.3BpJH8ekWtM9SUK', '2023-04-19 09:13:08', '2024-02-14 12:46:23'),
(17, 1, 'Monmon', 'Plaza', 'ramon.plaza@frontlinebusiness.com.ph', '', 1, '', '$2y$10$KXu/IEfKf4hytdeRfVYTY.gnzHrNbZytzMQepTtZdifr8Ct3DJ1w2', '2024-01-08 08:26:34', '2024-01-08 12:50:29'),
(21, 1, 'Mark', 'Merin', 'mark.merin@frontlinebusiness.com.ph', 'macmerin24@gmail.com', 1, '', '$2y$10$4U6JveJWmU/w1wXL3SI5TeYwe5tExWLfGilESPj5BKTtSfl/Sq93.', '2024-02-14 13:30:33', '2024-02-14 15:47:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fca_settings_user_system`
--
ALTER TABLE `fca_settings_user_system`
  ADD PRIMARY KEY (`user_system_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fca_settings_user_system`
--
ALTER TABLE `fca_settings_user_system`
  MODIFY `user_system_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
