-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 16, 2024 at 07:21 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

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
-- Table structure for table `fca_info_contact`
--

CREATE TABLE `fca_info_contact` (
  `contact_aid` int(11) NOT NULL,
  `contact_user_id` varchar(20) NOT NULL,
  `contact_name` varchar(50) NOT NULL,
  `contact_email` varchar(50) NOT NULL,
  `contact_mobile` varchar(20) NOT NULL,
  `contact_landline` varchar(20) NOT NULL,
  `contact_level` varchar(50) NOT NULL,
  `contact_created` datetime NOT NULL,
  `contact_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_info_contact`
--

INSERT INTO `fca_info_contact` (`contact_aid`, `contact_user_id`, `contact_name`, `contact_email`, `contact_mobile`, `contact_landline`, `contact_level`, `contact_created`, `contact_datetime`) VALUES
(2, 'USER1125', 'MONMON', 'mon.plaza@frontlinbusiness.com.ph', '09123456782', '567-2313', 'Level 1', '2024-01-16 10:21:07', '2024-01-16 10:21:07'),
(3, 'edit', 'MC', 'mark.bumagat@frontlinbusiness.com.ph', '091254126782', '567-2313', 'Level 1', '2024-01-16 13:20:17', '2024-01-16 14:08:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fca_info_contact`
--
ALTER TABLE `fca_info_contact`
  ADD PRIMARY KEY (`contact_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fca_info_contact`
--
ALTER TABLE `fca_info_contact`
  MODIFY `contact_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
