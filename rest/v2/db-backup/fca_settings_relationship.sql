-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 13, 2023 at 04:59 AM
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
-- Database: `fca_enrollment_v2`
--

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_relationship`
--

CREATE TABLE `fca_settings_relationship` (
  `relationship_aid` int(11) NOT NULL,
  `relationship_active` tinyint(1) NOT NULL,
  `relationship_name` varchar(50) NOT NULL,
  `relationship_is_maiden` tinyint(1) NOT NULL,
  `relationship_created` varchar(20) NOT NULL,
  `relationship_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_relationship`
--

INSERT INTO `fca_settings_relationship` (`relationship_aid`, `relationship_active`, `relationship_name`, `relationship_is_maiden`, `relationship_created`, `relationship_datetime`) VALUES
(1, 1, '44', 1, '2023-12-11 13:27:05', '2023-12-11 13:44:02'),
(3, 1, '44', 1, '2023-12-11 13:37:57', '2023-12-11 13:39:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fca_settings_relationship`
--
ALTER TABLE `fca_settings_relationship`
  ADD PRIMARY KEY (`relationship_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fca_settings_relationship`
--
ALTER TABLE `fca_settings_relationship`
  MODIFY `relationship_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
