-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 10, 2024 at 04:08 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

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
-- Table structure for table `fcav2_settings_base_rate`
--

CREATE TABLE `fcav2_settings_base_rate` (
  `settings_base_rate_aid` int(11) NOT NULL,
  `settings_base_rate_is_active` tinyint(1) NOT NULL,
  `settings_base_rate_name` varchar(200) NOT NULL,
  `settings_base_rate_order` int(10) NOT NULL,
  `settings_base_rate_created` datetime NOT NULL,
  `settings_base_rate_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fcav2_settings_base_rate`
--

INSERT INTO `fcav2_settings_base_rate` (`settings_base_rate_aid`, `settings_base_rate_is_active`, `settings_base_rate_name`, `settings_base_rate_order`, `settings_base_rate_created`, `settings_base_rate_updated`) VALUES
(2, 1, 'Admission Fee', 0, '2024-07-09 15:45:05', '2024-07-09 15:45:05'),
(3, 1, 'Misc Fee', 0, '2024-07-09 15:45:09', '2024-07-09 15:45:09'),
(4, 1, 'Tuition Fee', 0, '2024-07-09 15:45:14', '2024-07-09 15:45:14'),
(5, 1, 'Books', 0, '2024-07-09 15:45:20', '2024-07-09 15:45:20'),
(6, 1, 'Upon Enrollment', 0, '2024-07-09 15:45:24', '2024-07-09 15:45:24'),
(7, 1, 'Monthly Fee', 0, '2024-07-09 15:45:28', '2024-07-09 15:45:28'),
(8, 1, 'Total Monthly Fee', 0, '2024-07-09 15:45:32', '2024-07-09 15:45:32'),
(9, 1, 'Monthly', 0, '2024-07-10 07:40:03', '2024-07-10 07:40:03'),
(10, 1, 'Total Monthly', 0, '2024-07-10 07:40:14', '2024-07-10 07:40:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_settings_base_rate`
--
ALTER TABLE `fcav2_settings_base_rate`
  ADD PRIMARY KEY (`settings_base_rate_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_settings_base_rate`
--
ALTER TABLE `fcav2_settings_base_rate`
  MODIFY `settings_base_rate_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
