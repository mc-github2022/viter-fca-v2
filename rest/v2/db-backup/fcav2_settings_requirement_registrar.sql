-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 14, 2024 at 02:19 AM
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
-- Table structure for table `fcav2_settings_requirement_registrar`
--

CREATE TABLE `fcav2_settings_requirement_registrar` (
  `requirement_registrar_aid` int(11) NOT NULL,
  `requirement_registrar_active` tinyint(1) NOT NULL,
  `requirement_registrar_department_id` int(11) NOT NULL,
  `requirement_registrar_name` varchar(120) NOT NULL,
  `requirement_registrar_is_for_pre_school` tinyint(1) NOT NULL,
  `requirement_registrar_created` varchar(20) NOT NULL,
  `requirement_registrar_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_requirement_registrar`
--

INSERT INTO `fcav2_settings_requirement_registrar` (`requirement_registrar_aid`, `requirement_registrar_active`, `requirement_registrar_department_id`, `requirement_registrar_name`, `requirement_registrar_is_for_pre_school`, `requirement_registrar_created`, `requirement_registrar_datetime`) VALUES
(1, 1, 1, 'Certificate of Clearance (Financial and Property Responsibility)', 0, '2024-02-26 14:46:25', '2024-02-26 14:46:25'),
(2, 1, 1, 'Form 137/SF10', 0, '2024-02-26 14:46:39', '2024-02-26 14:46:39'),
(3, 1, 1, 'Good Moral Certificate', 0, '2024-02-26 14:46:46', '2024-02-26 14:46:46'),
(4, 1, 1, 'LCR / Local Civil Registry Birth Certificate (Temporary Enrollment Only) OR', 1, '2024-02-26 14:46:52', '2024-03-14 08:28:05'),
(5, 1, 1, 'Passport - Photocopy made at FCA (Temporary Enrollment Only)', 0, '2024-02-26 14:46:59', '2024-02-26 14:46:59'),
(6, 1, 1, 'PSA / Philippine Statistics Authority Original Birth Certificate', 0, '2024-02-26 14:47:05', '2024-02-26 14:47:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_settings_requirement_registrar`
--
ALTER TABLE `fcav2_settings_requirement_registrar`
  ADD PRIMARY KEY (`requirement_registrar_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_settings_requirement_registrar`
--
ALTER TABLE `fcav2_settings_requirement_registrar`
  MODIFY `requirement_registrar_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
