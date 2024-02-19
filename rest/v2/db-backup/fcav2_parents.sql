-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 20, 2024 at 12:41 AM
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
-- Table structure for table `fcav2_parents`
--

CREATE TABLE `fcav2_parents` (
  `parents_aid` int(11) NOT NULL,
  `parents_is_active` tinyint(1) NOT NULL,
  `parents_email` varchar(50) NOT NULL,
  `parents_fname` varchar(20) NOT NULL,
  `parents_lname` varchar(20) NOT NULL,
  `parents_father_income` varchar(10) NOT NULL,
  `parents_mother_income` varchar(10) NOT NULL,
  `parents_financier_name` varchar(50) NOT NULL,
  `parents_financier_relationship` varchar(20) NOT NULL,
  `parents_financier_occupation` varchar(20) NOT NULL,
  `parents_financier_income` varchar(10) NOT NULL,
  `parents_datetime` varchar(20) NOT NULL,
  `parents_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_parents`
--

INSERT INTO `fcav2_parents` (`parents_aid`, `parents_is_active`, `parents_email`, `parents_fname`, `parents_lname`, `parents_father_income`, `parents_mother_income`, `parents_financier_name`, `parents_financier_relationship`, `parents_financier_occupation`, `parents_financier_income`, `parents_datetime`, `parents_created`) VALUES
(3, 1, '', '', '', 'asdf', 'asdfasdfa', 'sdf', '123asd', '123123', '123123', '2024-02-20 07:39:17', '2024-02-19 15:42:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_parents`
--
ALTER TABLE `fcav2_parents`
  ADD PRIMARY KEY (`parents_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_parents`
--
ALTER TABLE `fcav2_parents`
  MODIFY `parents_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
