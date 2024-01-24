-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 23, 2024 at 09:12 AM
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
-- Table structure for table `fca_info_contact`
--

CREATE TABLE `fca_info_contact` (
  `contact_aid` int(11) NOT NULL,
  `contact_user_id` varchar(20) NOT NULL,
  `contact_name` varchar(50) NOT NULL,
  `contact_email` varchar(50) NOT NULL,
  `contact_mobile` varchar(20) NOT NULL,
  `contact_landline` varchar(20) NOT NULL,
  `contact_level` varchar(20) NOT NULL,
  `contact_created` varchar(20) NOT NULL,
  `contact_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_info_contact`
--

INSERT INTO `fca_info_contact` (`contact_aid`, `contact_user_id`, `contact_name`, `contact_email`, `contact_mobile`, `contact_landline`, `contact_level`, `contact_created`, `contact_datetime`) VALUES
(21, '17', '11111', 'hjk', 'fgjhfghjfghj', 'hjk', 'primary', '2024-01-23 14:47:59', '2024-01-23 15:30:19'),
(22, '17', 'vbmnvbnmvbnv', 'fgsdfg', 'sdfg', 'sdfgsdf', 'secondary', '2024-01-23 14:51:04', '2024-01-23 15:30:32'),
(23, '1', '1', '2', '1', '1', '1', '2024-01-23 14:53:25', '2024-01-23 14:53:25'),
(24, '17', 'asdf', 'asdf', 'asdfas', 'dfasd', 'primary', '2024-01-23 14:54:23', '2024-01-23 14:54:23'),
(25, '17', 'asd', 'asd', 'asd', 'asd', 'secondary', '2024-01-23 14:56:26', '2024-01-23 14:56:26'),
(26, '1', 'qwerqwer', '2', '1', '1', '1', '2024-01-23 15:01:10', '2024-01-23 15:01:10'),
(27, '17', 'sdfgs', 'dfgsdf', 'sdfgsd', 'gsdfg', 'primary', '2024-01-23 15:03:23', '2024-01-23 15:03:23'),
(28, '17', 'sdfgsfghj', 'dfgsdf', 'sdfgsd', 'gsdfg', 'primary', '2024-01-23 15:03:51', '2024-01-23 15:03:51');

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
  MODIFY `contact_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
