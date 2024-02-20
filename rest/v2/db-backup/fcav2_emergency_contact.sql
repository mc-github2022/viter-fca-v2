-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 20, 2024 at 12:52 AM
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
-- Table structure for table `fcav2_emergency_contact`
--

CREATE TABLE `fcav2_emergency_contact` (
  `emergency_contact_aid` int(11) NOT NULL,
  `emergency_contact_parent_id` varchar(20) NOT NULL,
  `emergency_contact_name` varchar(100) NOT NULL,
  `emergency_contact_mobile` varchar(30) NOT NULL,
  `emergency_contact_email` varchar(50) NOT NULL,
  `emergency_contact_landline` varchar(30) NOT NULL,
  `emergency_contact_level` varchar(30) NOT NULL,
  `emergency_contact_created` varchar(20) NOT NULL,
  `emergency_contact_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_emergency_contact`
--

INSERT INTO `fcav2_emergency_contact` (`emergency_contact_aid`, `emergency_contact_parent_id`, `emergency_contact_name`, `emergency_contact_mobile`, `emergency_contact_email`, `emergency_contact_landline`, `emergency_contact_level`, `emergency_contact_created`, `emergency_contact_datetime`) VALUES
(1, '1', 'xcvncvbxcvbxcvbxcvbx', '1233232132', 'xx@ccc.com', '12312312', 'primary', '2024-02-19 14:34:16', '2024-02-19 14:38:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_emergency_contact`
--
ALTER TABLE `fcav2_emergency_contact`
  ADD PRIMARY KEY (`emergency_contact_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_emergency_contact`
--
ALTER TABLE `fcav2_emergency_contact`
  MODIFY `emergency_contact_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
