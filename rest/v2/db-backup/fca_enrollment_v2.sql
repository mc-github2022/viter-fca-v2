-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 03, 2024 at 11:55 PM
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
-- Table structure for table `fca_settings_department`
--

CREATE TABLE `fca_settings_department` (
  `department_aid` int(11) NOT NULL,
  `department_active` tinyint(1) NOT NULL,
  `department_name` varchar(50) NOT NULL,
  `department_created` varchar(20) NOT NULL,
  `department_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_department`
--

INSERT INTO `fca_settings_department` (`department_aid`, `department_active`, `department_name`, `department_created`, `department_datetime`) VALUES
(2, 1, 'Finance', '2024-01-03 12:07:24', '2024-01-03 12:07:24'),
(3, 1, 'Information Technology', '2024-01-03 12:07:33', '2024-01-03 12:08:35'),
(5, 1, 'Registrar', '2024-01-03 12:07:17', '2024-01-03 12:07:17');

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_grade_level`
--

CREATE TABLE `fca_settings_grade_level` (
  `grade_level_aid` int(11) NOT NULL,
  `grade_level_active` tinyint(1) NOT NULL,
  `grade_level_name` varchar(50) NOT NULL,
  `grade_level_is_pre_school` tinyint(1) NOT NULL,
  `grade_level_created` datetime NOT NULL,
  `grade_level_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_grade_level`
--

INSERT INTO `fca_settings_grade_level` (`grade_level_aid`, `grade_level_active`, `grade_level_name`, `grade_level_is_pre_school`, `grade_level_created`, `grade_level_datetime`) VALUES
(1, 1, '44', 1, '2023-12-11 13:58:46', '2024-01-03 14:34:44'),
(3, 1, 'wwwww', 1, '2024-01-03 14:32:54', '2024-01-03 14:34:56');

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_learning_type`
--

CREATE TABLE `fca_settings_learning_type` (
  `learning_type_aid` int(11) NOT NULL,
  `learning_type_active` tinyint(1) NOT NULL,
  `learning_type_name` varchar(50) NOT NULL,
  `learning_type_created` varchar(20) NOT NULL,
  `learning_type_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_learning_type`
--

INSERT INTO `fca_settings_learning_type` (`learning_type_aid`, `learning_type_active`, `learning_type_name`, `learning_type_created`, `learning_type_datetime`) VALUES
(3, 1, 'tesr', '2024-01-03 14:48:27', '2024-01-03 14:48:27'),
(4, 1, 'sssss', '2024-01-03 14:48:57', '2024-01-03 14:48:57');

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_notification`
--

CREATE TABLE `fca_settings_notification` (
  `notification_aid` int(11) NOT NULL,
  `notification_active` tinyint(1) NOT NULL,
  `notification_department_id` int(11) NOT NULL,
  `notification_email` varchar(50) NOT NULL,
  `notification_name` varchar(50) NOT NULL,
  `notification_created` varchar(20) NOT NULL,
  `notification_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_notification`
--

INSERT INTO `fca_settings_notification` (`notification_aid`, `notification_active`, `notification_department_id`, `notification_email`, `notification_name`, `notification_created`, `notification_datetime`) VALUES
(2, 1, 2, 'wwww@wwwww.com', 'tttt', '2023-12-11 15:15:58', '2023-12-11 15:20:52'),
(3, 0, 2, 'xxxxx@xxxx.comyyyy', 'xxxx', '2023-12-11 15:16:14', '');

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
(3, 1, '4465756', 1, '2023-12-11 13:37:57', '2024-01-03 14:12:24');

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_requirement_finance`
--

CREATE TABLE `fca_settings_requirement_finance` (
  `requirement_finance_aid` int(11) NOT NULL,
  `requirement_finance_active` tinyint(1) NOT NULL,
  `requirement_finance_department_id` int(11) NOT NULL,
  `requirement_finance_name` varchar(50) NOT NULL,
  `requirement_finance_created` varchar(20) NOT NULL,
  `requirement_finance_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_requirement_finance`
--

INSERT INTO `fca_settings_requirement_finance` (`requirement_finance_aid`, `requirement_finance_active`, `requirement_finance_department_id`, `requirement_finance_name`, `requirement_finance_created`, `requirement_finance_datetime`) VALUES
(1, 1, 3, 'Requirement Finance', '2023-12-20 08:09:35', '2023-12-20 08:09:35');

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_requirement_it`
--

CREATE TABLE `fca_settings_requirement_it` (
  `requirement_it_aid` int(11) NOT NULL,
  `requirement_it_active` tinyint(1) NOT NULL,
  `requirement_it_department_id` int(11) NOT NULL,
  `requirement_it_name` varchar(50) NOT NULL,
  `requirement_it_created` varchar(20) NOT NULL,
  `requirement_it_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_requirement_it`
--

INSERT INTO `fca_settings_requirement_it` (`requirement_it_aid`, `requirement_it_active`, `requirement_it_department_id`, `requirement_it_name`, `requirement_it_created`, `requirement_it_datetime`) VALUES
(1, 1, 4, 'Requirement IT', '2023-12-20 08:10:14', '2023-12-20 08:10:14');

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_requirement_registrar`
--

CREATE TABLE `fca_settings_requirement_registrar` (
  `requirement_registrar_aid` int(11) NOT NULL,
  `requirement_registrar_active` tinyint(1) NOT NULL,
  `requirement_registrar_department_id` int(11) NOT NULL,
  `requirement_registrar_name` varchar(50) NOT NULL,
  `requirement_registrar_created` varchar(20) NOT NULL,
  `requirement_registrar_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_requirement_registrar`
--

INSERT INTO `fca_settings_requirement_registrar` (`requirement_registrar_aid`, `requirement_registrar_active`, `requirement_registrar_department_id`, `requirement_registrar_name`, `requirement_registrar_created`, `requirement_registrar_datetime`) VALUES
(1, 1, 5, 'Requirement Registrar', '2023-12-20 08:14:56', '2023-12-20 08:14:56'),
(2, 1, 2, 'yyy', '2024-01-03 15:51:44', '2024-01-03 15:51:44');

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_role`
--

CREATE TABLE `fca_settings_role` (
  `role_aid` int(11) NOT NULL,
  `role_is_active` tinyint(1) NOT NULL,
  `role_name` varchar(50) NOT NULL,
  `role_description` text NOT NULL,
  `role_created` varchar(20) NOT NULL,
  `role_datetime` varchar(20) NOT NULL,
  `role_is_developer` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_role`
--

INSERT INTO `fca_settings_role` (`role_aid`, `role_is_active`, `role_name`, `role_description`, `role_created`, `role_datetime`, `role_is_developer`) VALUES
(1, 1, 'developer', 'qqqqqq', '2023-12-19 14:07:05', '2023-12-19 14:07:05', 1);

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_scheme`
--

CREATE TABLE `fca_settings_scheme` (
  `scheme_aid` int(11) NOT NULL,
  `scheme_active` tinyint(1) NOT NULL,
  `scheme_name` varchar(50) NOT NULL,
  `scheme_created` varchar(20) NOT NULL,
  `scheme_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_tuition_category`
--

CREATE TABLE `fca_settings_tuition_category` (
  `tuition_category_aid` int(11) NOT NULL,
  `tuition_category_active` tinyint(1) NOT NULL,
  `tuition_category_name` varchar(50) NOT NULL,
  `tuition_category_created` varchar(20) NOT NULL,
  `tuition_category_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_tuition_category`
--

INSERT INTO `fca_settings_tuition_category` (`tuition_category_aid`, `tuition_category_active`, `tuition_category_name`, `tuition_category_created`, `tuition_category_datetime`) VALUES
(1, 1, 'Legacy', '2023-12-20 08:53:04', '2023-12-20 08:53:04');

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_tuition_fee`
--

CREATE TABLE `fca_settings_tuition_fee` (
  `tuition_fee_aid` int(11) NOT NULL,
  `tuition_fee_active` tinyint(1) NOT NULL,
  `tuition_fee_category_id` varchar(20) NOT NULL,
  `tuition_fee_grade_id` varchar(20) NOT NULL,
  `tuition_fee_entrance` varchar(20) NOT NULL,
  `tuition_fee_miscellaneous` varchar(20) NOT NULL,
  `tuition_fee_tuition` varchar(20) NOT NULL,
  `tuition_fee_books` varchar(20) NOT NULL,
  `tuition_fee_start_date` varchar(50) NOT NULL,
  `tuition_fee_end_date` varchar(50) NOT NULL,
  `tuition_fee_created` date NOT NULL,
  `tuition_fee_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_tuition_fee`
--

INSERT INTO `fca_settings_tuition_fee` (`tuition_fee_aid`, `tuition_fee_active`, `tuition_fee_category_id`, `tuition_fee_grade_id`, `tuition_fee_entrance`, `tuition_fee_miscellaneous`, `tuition_fee_tuition`, `tuition_fee_books`, `tuition_fee_start_date`, `tuition_fee_end_date`, `tuition_fee_created`, `tuition_fee_datetime`) VALUES
(4, 0, '1', '1', 'zxcv', 'asdf', 'qwe', 'ghjf', 'xcvb', 'dfgh', '2023-12-19', '0000-00-00 00:00:00'),
(5, 1, '1', '1', 'zxcv', 'asdf', 'qwe', 'ghjf', 'xcvb', 'dfgh', '2023-12-19', '2023-12-19 11:37:17'),
(6, 1, '1', '1', 'zxcv', 'asdf', 'qwe', 'ghjf', 'xcvb', 'dfgh', '2023-12-19', '2023-12-19 11:39:02'),
(7, 1, '1', '1', 'zxcv', 'asdf', 'qwe', 'ghjf', 'xcvb', 'dfgh', '2023-12-19', '2023-12-19 11:41:18'),
(8, 1, '1', '1', 'zxcv', 'asdf', 'qwe', 'ghjf', 'xcvb', 'dfgh', '2023-12-19', '2023-12-19 11:43:52'),
(9, 1, '1', '1', 'zxcv', 'asdf', 'qwe', 'ghjf', 'xcvb', 'dfgh', '2023-12-19', '2023-12-19 12:35:11'),
(11, 1, '1', '1', 'zxcv', 'asdf', 'qwe', 'ghjf', 'xcvb', 'dfgh', '2023-12-19', '2023-12-19 12:43:18'),
(12, 1, '1', '1', 'zxcv', 'asdf', 'qwe', 'ghjf', 'xcvb', 'dfgh', '2023-12-19', '2023-12-19 12:43:20'),
(13, 1, '1', '1', 'zxcv', 'asdf', 'qwe', 'ghjf', 'xcvb', 'dfgh', '2023-12-19', '2023-12-19 12:43:20');

-- --------------------------------------------------------

--
-- Table structure for table `fca_settings_user_system`
--

CREATE TABLE `fca_settings_user_system` (
  `user_system_aid` int(11) NOT NULL,
  `user_system_is_active` tinyint(1) NOT NULL,
  `user_system_fname` varchar(128) NOT NULL,
  `user_system_lname` varchar(128) NOT NULL,
  `user_system_email` varchar(255) NOT NULL,
  `user_system_role_id` int(11) NOT NULL,
  `user_system_key` varchar(255) NOT NULL,
  `user_system_password` varchar(255) NOT NULL,
  `user_system_created` datetime NOT NULL,
  `user_system_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fca_settings_user_system`
--

INSERT INTO `fca_settings_user_system` (`user_system_aid`, `user_system_is_active`, `user_system_fname`, `user_system_lname`, `user_system_email`, `user_system_role_id`, `user_system_key`, `user_system_password`, `user_system_created`, `user_system_datetime`) VALUES
(1, 1, 'Mark Ryan', 'Merin', 'mark.merin@frontlinebusiness.com.ph', 1, 'c47a62a6f5fc28388226429177c984b80f52b3167a792da2dd70332e745ebf70', '$2y$10$g89vzPcXDXTxXpRFoSCu0ek2Y5Jn1bb2DN/Gm.3BpJH8ekWtM9SUK', '2023-04-19 09:13:08', '2023-12-19 14:54:05'),
(2, 1, 'Patrick', 'Reyes', 'patrick.reyes@frontlinebusiness.com.ph', 1, '958f0fc7fdacc72cca6bf5d0a5f56f107ca9d019721edfcd9a28f6dae79a5c2a', '$2y$10$g89vzPcXDXTxXpRFoSCu0ek2Y5Jn1bb2DN/Gm.3BpJH8ekWtM9SUK', '2023-04-19 09:13:08', '2023-12-19 14:53:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fca_settings_department`
--
ALTER TABLE `fca_settings_department`
  ADD PRIMARY KEY (`department_aid`);

--
-- Indexes for table `fca_settings_grade_level`
--
ALTER TABLE `fca_settings_grade_level`
  ADD PRIMARY KEY (`grade_level_aid`);

--
-- Indexes for table `fca_settings_learning_type`
--
ALTER TABLE `fca_settings_learning_type`
  ADD PRIMARY KEY (`learning_type_aid`);

--
-- Indexes for table `fca_settings_notification`
--
ALTER TABLE `fca_settings_notification`
  ADD PRIMARY KEY (`notification_aid`);

--
-- Indexes for table `fca_settings_relationship`
--
ALTER TABLE `fca_settings_relationship`
  ADD PRIMARY KEY (`relationship_aid`);

--
-- Indexes for table `fca_settings_requirement_finance`
--
ALTER TABLE `fca_settings_requirement_finance`
  ADD PRIMARY KEY (`requirement_finance_aid`);

--
-- Indexes for table `fca_settings_requirement_it`
--
ALTER TABLE `fca_settings_requirement_it`
  ADD PRIMARY KEY (`requirement_it_aid`);

--
-- Indexes for table `fca_settings_requirement_registrar`
--
ALTER TABLE `fca_settings_requirement_registrar`
  ADD PRIMARY KEY (`requirement_registrar_aid`);

--
-- Indexes for table `fca_settings_role`
--
ALTER TABLE `fca_settings_role`
  ADD PRIMARY KEY (`role_aid`);

--
-- Indexes for table `fca_settings_scheme`
--
ALTER TABLE `fca_settings_scheme`
  ADD PRIMARY KEY (`scheme_aid`);

--
-- Indexes for table `fca_settings_tuition_category`
--
ALTER TABLE `fca_settings_tuition_category`
  ADD PRIMARY KEY (`tuition_category_aid`);

--
-- Indexes for table `fca_settings_tuition_fee`
--
ALTER TABLE `fca_settings_tuition_fee`
  ADD PRIMARY KEY (`tuition_fee_aid`);

--
-- Indexes for table `fca_settings_user_system`
--
ALTER TABLE `fca_settings_user_system`
  ADD PRIMARY KEY (`user_system_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fca_settings_department`
--
ALTER TABLE `fca_settings_department`
  MODIFY `department_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `fca_settings_grade_level`
--
ALTER TABLE `fca_settings_grade_level`
  MODIFY `grade_level_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `fca_settings_learning_type`
--
ALTER TABLE `fca_settings_learning_type`
  MODIFY `learning_type_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `fca_settings_notification`
--
ALTER TABLE `fca_settings_notification`
  MODIFY `notification_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `fca_settings_relationship`
--
ALTER TABLE `fca_settings_relationship`
  MODIFY `relationship_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `fca_settings_requirement_finance`
--
ALTER TABLE `fca_settings_requirement_finance`
  MODIFY `requirement_finance_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `fca_settings_requirement_it`
--
ALTER TABLE `fca_settings_requirement_it`
  MODIFY `requirement_it_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `fca_settings_requirement_registrar`
--
ALTER TABLE `fca_settings_requirement_registrar`
  MODIFY `requirement_registrar_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `fca_settings_role`
--
ALTER TABLE `fca_settings_role`
  MODIFY `role_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `fca_settings_scheme`
--
ALTER TABLE `fca_settings_scheme`
  MODIFY `scheme_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `fca_settings_tuition_category`
--
ALTER TABLE `fca_settings_tuition_category`
  MODIFY `tuition_category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `fca_settings_tuition_fee`
--
ALTER TABLE `fca_settings_tuition_fee`
  MODIFY `tuition_fee_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `fca_settings_user_system`
--
ALTER TABLE `fca_settings_user_system`
  MODIFY `user_system_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
