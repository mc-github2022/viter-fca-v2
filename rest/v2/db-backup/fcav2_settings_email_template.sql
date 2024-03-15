-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2024 at 09:12 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

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
-- Table structure for table `fcav2_settings_email_template`
--

CREATE TABLE `fcav2_settings_email_template` (
  `email_template_aid` int(11) NOT NULL,
  `email_template_name` varchar(200) NOT NULL,
  `email_template_subject` varchar(200) NOT NULL,
  `email_template_is_active` tinyint(1) NOT NULL,
  `email_template_content` text NOT NULL,
  `email_template_receiver_id` varchar(20) NOT NULL,
  `email_template_category` varchar(200) NOT NULL,
  `email_template_cc_email` varchar(200) NOT NULL,
  `email_template_cc_email_two` varchar(200) NOT NULL,
  `email_template_created` datetime NOT NULL,
  `email_template_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_email_template`
--

INSERT INTO `fcav2_settings_email_template` (`email_template_aid`, `email_template_name`, `email_template_subject`, `email_template_is_active`, `email_template_content`, `email_template_receiver_id`, `email_template_category`, `email_template_cc_email`, `email_template_cc_email_two`, `email_template_created`, `email_template_updated`) VALUES
(3, 'Assessment (notify parent)', 'Assessment (notify parent)', 1, 'Hi Cyrene\n\nThis is Notify Parent.\nPlease choose SCHEME.\n\nThanks.', '0', 'assessment-notify-parents', '', '', '2024-03-15 12:23:40', '2024-03-15 12:27:32'),
(4, 'Assessment Accept Payment', 'Assessment Accept Payment', 1, 'Hi Cyrene\n\nThis is Accept Payment. \n\nThanks.', 'client', 'assessment-accept-payment', '', '', '2024-03-15 12:26:51', '2024-03-15 12:27:36'),
(5, 'Assessment notify finance', 'Assessment notify finance', 1, 'Hi this is client\n\n\nI already sent to you the Sheme I choose.', '1', 'assessment-notify-finance', 'a@gmail.com', 'a@gmail.com', '2024-03-15 14:40:32', '2024-03-15 14:41:19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_settings_email_template`
--
ALTER TABLE `fcav2_settings_email_template`
  ADD PRIMARY KEY (`email_template_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_settings_email_template`
--
ALTER TABLE `fcav2_settings_email_template`
  MODIFY `email_template_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
