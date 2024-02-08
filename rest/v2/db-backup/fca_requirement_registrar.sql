-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 08, 2024 at 09:00 AM
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
-- Table structure for table `fca_requirement_registrar`
--

CREATE TABLE `fca_requirement_registrar` (
  `requirement_registrar_user_aid` int(11) NOT NULL,
  `requirement_registrar_user_id` int(11) NOT NULL,
  `requirement_registrar_student_id` int(11) NOT NULL,
  `requirement_registrar_submitted` text NOT NULL,
  `requirement_registrar_remarks` text NOT NULL,
  `requirement_registrar_datetime` varchar(20) NOT NULL,
  `requirement_registrar_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fca_requirement_registrar`
--
ALTER TABLE `fca_requirement_registrar`
  ADD PRIMARY KEY (`requirement_registrar_user_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fca_requirement_registrar`
--
ALTER TABLE `fca_requirement_registrar`
  MODIFY `requirement_registrar_user_aid` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
