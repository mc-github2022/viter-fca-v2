-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2024 at 04:00 AM
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
  `email_template_name` varchar(20) NOT NULL,
  `email_template_is_active` tinyint(1) NOT NULL,
  `email_template_content` text NOT NULL,
  `email_template_receiver` varchar(200) NOT NULL,
  `email_template_category` varchar(200) NOT NULL,
  `email_template_cc_email` varchar(200) NOT NULL,
  `email_template_cc_email_two` varchar(200) NOT NULL,
  `email_template_created` datetime NOT NULL,
  `email_template_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_email_template`
--

INSERT INTO `fcav2_settings_email_template` (`email_template_aid`, `email_template_name`, `email_template_is_active`, `email_template_content`, `email_template_receiver`, `email_template_category`, `email_template_cc_email`, `email_template_cc_email_two`, `email_template_created`, `email_template_updated`) VALUES
(1, 'test data', 1, '<div>\n      <p>_recipient_</p>\n      <p>\n        This is _sender_ from Two Miles. I’m in charge of Form 571-L Business\n        Property Statement for _year_.\n        <br />\n        If your company owns taxable personal property with an aggregate cost of\n        $100,000 or more for any assessment year, you must file the Business\n        Property Statement (571-L) with your county whether or not you received\n        a notice to file.\n        <br />\n        The last day to file without incurring a penalty is May 7, 2024.\n      </p>\n      <p>\n        If you have received a 571-L Business Property Statement notice, you\n        need to file and make a tax payment.\n      </p>\n      <p style=\"font-weight: bold\">\n        If you have not received a 571-L notice, please go to the link below to\n        obtain necessary information.\n        <br />\n        If the below is not your county, please check yourself.\n      </p>\n\n      <p>\n        *Please update and review (be sure to add the amounts paid to vendors in\n        2022) before sending to _Assignee_ at _Assignee_email_.\n      </p>\n\n      <ul style=\"list-style: none; margin: 0px; padding: 0px\">\n        <li style=\"margin-bottom: 1.5rem\">\n          Orange County<br />\n          <a href=\"http://ocgov.com/gov/assessor/contact\"\n            >http://ocgov.com/gov/assessor/contact</a\n          ><br />\n          tel. 714-834-2930\n        </li>\n\n        <li style=\"margin-bottom: 1.5rem\">\n          Los Angeles County<br /><a\n            href=\"http://assessor.lacounty.gov/personal-property-assessments-2/\"\n          >\n            http://assessor.lacounty.gov/personal-property-assessments-2/ </a\n          ><br />\n          tel. 213-974-3211\n        </li>\n\n        <li style=\"margin-bottom: 1.5rem\">\n          San Diego County <br /><a\n            href=\"https://arcc.sdcounty.ca.gov/Pages/default.aspx\"\n          >\n            https://arcc.sdcounty.ca.gov/Pages/default.aspx </a\n          ><br />\n          tel. 858-505-6100\n        </li>\n\n        <li style=\"margin-bottom: 1.5rem\">\n          California all Counties: <br /><a\n            href=\"https://public.calbpsfile.org/counties\"\n          >\n            https://public.calbpsfile.org/counties\n          </a>\n        </li>\n      </ul>\n\n      <p style=\"font-weight: bold\">How to request Two Miles</p>\n      <p style=\"margin-top: 2rem\">\n        Please email the below to by April 15, Monday. <br />_sender_email_\n      </p>\n\n      <ul>\n        <li>Form 571L notice from county</li>\n        <li>\n          Any information regarding the assets you purchased or disposed of in\n          2023 (1/1/23 till 12/31/23) as well as any additional improvements\n          and/or leased equipment, including capitalized leased equipment.\n        </li>\n        <li>\n          You can enter that in attached excel template or send us information\n          in your format.\n        </li>\n      </ul>\n\n      <p style=\"color: #c55a11; font-weight: bold\">\n        Due Date for submitting to Two Miles : _due_date_\n      </p>\n\n      <p style=\"margin: 0\">\n        ----------------------------------------------------------\n      </p>\n      <div>\n        <p style=\"margin: 0\">\n          <span style=\"color: #1b7cc8; font-size: 20px; font-weight: 600\"\n            >Two Miles</span\n          >\n          Tax and Accounting Services\n        </p>\n        <p style=\"margin: 0\">400 N Tustin Ave Ste 240</p>\n        <p style=\"margin: 0\">Santa Ana, C 92705</p>\n        <p style=\"margin: 0\">Tel: 714-437-5823 | Fax: 714-437-5824</p>\n        <a href=\"#\" style=\"color: #2596be\">https://twomiles.net/en/</a>\n        <p>\n          Please consider the environment before printing this email. <br />\n          This message (including any attachments) contains confidential\n          information intended for a specific individual and purpose, and is\n          protected by law. <br />\n          If you are not the intended recipient, you should delete this\n          message.<br />\n          Any disclosure, copying, or distribution of this message, or the\n          taking of any action based on it, is strictly prohibited.<br />\n        </p>\n      </div>\n    </div>', 'client', 'assessment', 'sdsd', 'dsd', '2024-03-15 09:13:16', '2024-03-15 10:54:36'),
(2, 'dfgdfgh', 1, 'hi cy\n\nthis is a test', 'client', 'assessment', 'dgh', 'dgh', '2024-03-15 09:16:06', '2024-03-15 11:00:13');

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
  MODIFY `email_template_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
