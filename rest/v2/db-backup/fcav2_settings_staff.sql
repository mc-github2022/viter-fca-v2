-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 20, 2024 at 12:56 AM
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
-- Table structure for table `fcav2_settings_staff`
--

CREATE TABLE `fcav2_settings_staff` (
  `settings_staff_aid` int(11) NOT NULL,
  `settings_staff_is_active` tinyint(1) NOT NULL,
  `settings_staff_fname` varchar(128) NOT NULL,
  `settings_staff_lname` varchar(128) NOT NULL,
  `settings_staff_email` varchar(255) NOT NULL,
  `settings_staff_created_at` datetime NOT NULL,
  `settings_staff_updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_staff`
--

INSERT INTO `fcav2_settings_staff` (`settings_staff_aid`, `settings_staff_is_active`, `settings_staff_fname`, `settings_staff_lname`, `settings_staff_email`, `settings_staff_created_at`, `settings_staff_updated_at`) VALUES
(1, 1, 'Mac', 'Mac', 'merin.ryanmark@gmail.com', '2024-02-15 10:11:20', '2024-02-15 10:11:20'),
(3, 1, 'Emman', 'Manalo', 'emmanuel.manalo@frontlinebusiness.com.ph', '2024-02-15 10:12:53', '2024-02-15 10:12:53'),
(4, 1, 'Rode', 'Delmonts', 'roderick@gmail.com', '2024-02-15 10:13:21', '2024-02-15 10:13:21'),
(5, 1, 'I-valo', 'Adao', 'valoadao@gmail.com', '2024-02-15 10:14:11', '2024-02-15 10:14:11'),
(6, 1, 'cy', 'pumasok', 'cy@gmail.com', '2024-02-15 10:14:25', '2024-02-15 10:14:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_settings_staff`
--
ALTER TABLE `fcav2_settings_staff`
  ADD PRIMARY KEY (`settings_staff_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_settings_staff`
--
ALTER TABLE `fcav2_settings_staff`
  MODIFY `settings_staff_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
