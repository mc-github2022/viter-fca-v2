-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 14, 2023 at 11:46 AM
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
-- Database: `fbs_tm_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_user_other`
--

CREATE TABLE `fca_settings_user_other` (
  `user_other_aid` int(11) NOT NULL,
  `user_other_is_active` tinyint(1) NOT NULL,
  `user_other_fname` varchar(50) NOT NULL,
  `user_other_lname` varchar(50) NOT NULL,
  `user_other_email` varchar(128) NOT NULL,
  `user_other_new_email` varchar(128) NOT NULL,
  `user_other_role_id` varchar(20) NOT NULL,
  `user_other_key` varchar(255) NOT NULL,
  `user_other_password` varchar(255) NOT NULL,
  `user_other_created` datetime NOT NULL,
  `user_other_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_user_other`
--

INSERT INTO `fca_settings_user_other` (`user_other_aid`, `user_other_is_active`,  `user_other_fname`, `user_other_lname`, `user_other_email`, `user_other_new_email`, `user_other_role_id`, `user_other_key`, `user_other_password`, `user_other_created`, `user_other_datetime`) VALUES
(1,  0, 'Patrick', 'Reyes', 'merin.ryanmark@gmail.com', '', '2', '', '$2y$10$KokV2UCXZqLbL4.pwFu5auM.wDS2q6pNqSuWQpZlxPDjtzmt6qjSq', '2023-08-14 17:12:34', '2023-08-14 17:34:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fca_settings_user_other`
--
ALTER TABLE `fca_settings_user_other`
  ADD PRIMARY KEY (`user_other_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fca_settings_user_other`
--
ALTER TABLE `fca_settings_user_other`
  MODIFY `user_other_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
