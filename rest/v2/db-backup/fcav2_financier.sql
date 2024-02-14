-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 14, 2024 at 06:53 AM
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
-- Table structure for table `fcav2_financier`
--

CREATE TABLE `fcav2_financier` (
  `fcav2_financier_aid` int(11) NOT NULL,
  `fcav2_financier_student_id` varchar(20) NOT NULL,
  `fcav2_financier_father_income` varchar(20) NOT NULL,
  `fcav2_financier_mother_income` varchar(20) NOT NULL,
  `fcav2_financier_name` varchar(50) NOT NULL,
  `fcav2_financier_relationship` varchar(20) NOT NULL,
  `fcav2_financier_occupation` varchar(20) NOT NULL,
  `fcav2_financier_income` varchar(20) NOT NULL,
  `fcav2_financier_created` varchar(20) NOT NULL,
  `fcav2_financier_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_financier`
--
ALTER TABLE `fcav2_financier`
  ADD PRIMARY KEY (`fcav2_financier_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_financier`
--
ALTER TABLE `fcav2_financier`
  MODIFY `fcav2_financier_aid` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
