-- phpMyAdmin SQL Dump
-- version 5.1.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 01, 2024 at 11:51 PM
-- Server version: 5.7.44-48-log
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbcnhjwyikkyc3`
--

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_emergency_contact`
--

CREATE TABLE `fcav2_emergency_contact` (
  `emergency_contact_aid` int(11) NOT NULL,
  `emergency_contact_parent_id` int(11) NOT NULL,
  `emergency_contact_name` varchar(100) NOT NULL,
  `emergency_contact_mobile` varchar(30) NOT NULL,
  `emergency_contact_landline` varchar(30) NOT NULL,
  `emergency_contact_email` varchar(255) NOT NULL,
  `emergency_contact_level` varchar(30) NOT NULL,
  `emergency_contact_created` varchar(20) NOT NULL,
  `emergency_contact_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_emergency_contact`
--

INSERT INTO `fcav2_emergency_contact` (`emergency_contact_aid`, `emergency_contact_parent_id`, `emergency_contact_name`, `emergency_contact_mobile`, `emergency_contact_landline`, `emergency_contact_email`, `emergency_contact_level`, `emergency_contact_created`, `emergency_contact_datetime`) VALUES
(2, 48, 'Ronaldo Lumabas', '9095647849', '', '', '1', '2022-11-28', '2022-11-28 07:26:44'),
(3, 48, 'Janet Lumabas', '9095612438', '', '', '2', '2022-11-28', '2023-01-23 09:07:24'),
(4, 50, 'Myel Gracie Bernardino', '9277435420', '', '', '1', '2023-01-04', '2023-09-04 11:37:54'),
(5, 51, 'Kathleen Trixy F. Ubeda', '9369069302', '', '', '1', '2023-01-10', '2023-01-10 08:27:58'),
(6, 53, 'Nelisa Jumawan', '9367781856', '', '', '1', '2023-01-12', '2023-01-12 09:43:33'),
(7, 54, 'Criselda Claveria', '9500021400', '', '', '1', '2023-01-18', '2023-01-18 09:08:00'),
(9, 58, 'Joerge Carlou Callejo', '9000000000', '', '', '1', '2023-01-19', '2023-01-19 10:08:06'),
(10, 59, 'Jordan Cortez', '9324583399', '', '', '1', '2023-01-19', '2023-01-19 10:17:39'),
(11, 60, 'Elvin Acal', '9232754451', '09234973590', 'test@gmail.com', '1', '2023-01-19', '2024-03-15 13:04:11'),
(12, 61, 'Merellyn Calupas', '9663008092', '5018572', '', '1', '2023-01-19', '2023-01-19 10:27:58'),
(13, 62, 'Eric Jason Alcantara', '9266903915', '', '', '1', '2023-01-19', '2023-01-19 10:31:45'),
(14, 63, 'Mark Joseph Alva', '9165800784', '', '', '1', '2023-01-19', '2023-01-19 10:35:42'),
(15, 64, 'Errol Albert Amante', '9215455240', '', '', '1', '2023-01-19', '2023-01-19 10:38:42'),
(16, 65, 'Minelen Alvaran', '9150181880', '', '', '1', '2023-01-19', '2023-01-19 10:42:24'),
(17, 66, 'Maria Cecilia G. Basan', '9208369927', '5009362', '', '1', '2023-01-19', '2023-01-19 10:47:35'),
(18, 67, 'Venanda Ambay', '9279521170', '', '', '1', '2023-01-19', '2023-01-19 10:50:45'),
(19, 68, 'Alec Nil Coronado', '9486013333', '5435482', '', '1', '2023-01-19', '2023-01-19 10:54:34'),
(20, 69, 'Ma. Aiza Covic', '9053324099', '', '', '1', '2023-01-19', '2023-01-19 11:00:07'),
(21, 70, 'Ariel De Guia', '9274079937', '09322963341', '', '1', '2023-01-19', '2023-01-19 11:04:05'),
(22, 71, 'Reginald Roy Dela Cruz', '9064119374', '', '', '1', '2023-01-19', '2023-01-19 11:07:38'),
(23, 72, 'Rizuji Dela Rosa', '9568146072', '', '', '1', '2023-01-19', '2023-01-19 11:10:54'),
(24, 73, 'Jerico Delos Reyes', '9158133275', '5613695', '', '1', '2023-01-19', '2023-01-19 11:13:52'),
(25, 74, 'Jhon Galmer Escondo', '9369423808', '5667833', '', '1', '2023-01-19', '2023-01-19 11:19:33'),
(26, 75, 'Micko Favorito', '9214126284', '', '', '1', '2023-01-19', '2023-01-19 12:42:25'),
(27, 76, 'Mike Jerome Favorito', '9455728401', '', '', '1', '2023-01-19', '2023-01-19 12:46:57'),
(28, 77, 'Jericho Kua', '9684155129', '', '', '1', '2023-01-19', '2023-01-19 12:49:55'),
(29, 78, 'Alecci Carlson Lee', '9354930071', '', '', '1', '2023-01-19', '2023-01-19 12:52:58'),
(30, 79, 'Andrian Gil Manalang', '9195015521', '', '', '1', '2023-01-19', '2023-01-19 12:55:57'),
(31, 80, 'Irentom Marasigan', '9083331926', '', '', '1', '2023-01-19', '2023-01-19 12:59:17'),
(32, 81, 'Patriech Lester Marquez', '9291105635', '', '', '1', '2023-01-19', '2023-01-19 13:02:51'),
(33, 82, 'Henrik Nool', '9557551827', '', '', '1', '2023-01-19', '2023-01-19 13:06:10'),
(34, 83, 'Mark Alvin Pagkaliwangan', '9183829467', '0495455569', '', '1', '2023-01-19', '2023-01-19 13:09:12'),
(35, 84, 'Kurt Cederick Pangilinan', '9667281139', '', '', '1', '2023-01-19', '2023-01-19 14:02:41'),
(36, 85, 'Eduardo Javier', '9065963374', '', '', '1', '2023-01-19', '2023-01-19 14:06:34'),
(37, 86, 'Reymond Ramirez', '9778051756', '', '', '1', '2023-01-19', '2023-01-19 14:10:28'),
(38, 87, 'MARVIN ADRIAN', '9266327722', '5308235', '', '1', '2023-01-19', '2023-01-19 14:13:21'),
(39, 88, 'Donovan Rosales', '9634705826', '', '', '1', '2023-01-19', '2023-01-19 14:16:31'),
(40, 89, 'Achilles Sta. Cruz', '9152194079', '', '', '1', '2023-01-19', '2023-01-19 14:26:18'),
(41, 90, 'Merychel Endrinal', '9482859290', '5340322', '', '1', '2023-01-19', '2023-01-19 14:29:32'),
(42, 91, 'Joe Mari Castillo', '9157762584', '', '', '1', '2023-01-20', '2023-01-20 09:23:19'),
(43, 92, 'Cyrus Joseph Dimailig', '9279106453', '', '', '1', '2023-01-20', '2023-01-20 09:30:53'),
(44, 93, 'John Aries General', '9952710410', '', '', '1', '2023-01-20', '2023-01-20 09:42:15'),
(45, 94, 'Raymond Lat', '9203907229', '', '', '1', '2023-01-20', '2023-01-20 09:45:20'),
(46, 95, 'Leo Mendoza', '9078054226', '', '', '1', '2023-01-20', '2023-01-20 09:49:16'),
(47, 96, 'Niño Sherwin Orillaneda', '9569675342', '0495082583', '', '1', '2023-01-20', '2023-01-20 09:54:24'),
(48, 97, 'Darren Abram Panlaqui', '9985962840', '', '', '1', '2023-01-20', '2023-01-20 09:59:02'),
(49, 99, 'Khandy De Luna', '9094412893', '', '', '1', '2023-01-20', '2023-01-20 10:11:24'),
(50, 100, 'Jee Hyun Oh', '9369365597', '', '', '1', '2023-01-20', '2023-01-20 10:15:50'),
(51, 101, 'Vladimir Napay', '9687196124', '', '', '1', '2023-01-20', '2023-01-20 10:19:41'),
(52, 102, 'David Joseph Cristobal', '9352727281', '', '', '1', '2023-01-20', '2023-01-20 10:22:32'),
(53, 103, 'Christine Buquing', '9913565009', '', '', '1', '2023-01-20', '2023-01-20 11:03:17'),
(54, 104, 'Ken Lorica', '9662180967', '', '', '1', '2023-01-20', '2023-01-20 11:06:33'),
(55, 105, 'Susana Nipolo', '9090152947', '', '', '1', '2023-01-20', '2023-01-20 11:09:47'),
(56, 106, 'Elizabeth Recidocruz', '9155051371', '', '', '1', '2023-01-20', '2023-01-20 11:13:59'),
(57, 107, 'Artemio Tipan Jr.', '9171245351', '', '', '1', '2023-01-20', '2023-01-20 11:18:22'),
(58, 108, 'Emilio John Yuson', '9182754291', '', '', '1', '2023-01-20', '2023-08-20 21:29:26'),
(59, 109, 'Bayani Edwin Bongolan', '9426697823', '', '', '1', '2023-01-20', '2023-01-20 11:24:34'),
(60, 109, 'Joseph Mauk', '9189044721', '', '', '2', '2023-01-20', '2023-01-20 11:24:51'),
(61, 110, 'Juana Aglubat', '9454831182', '', '', '1', '2023-01-20', '2023-01-20 11:28:58'),
(62, 111, 'Juan Lorenzo Belen Jr.', '9291226069', '', '', '1', '2023-01-20', '2023-01-20 11:32:26'),
(63, 112, 'Krystal Doon', '9208378513', '', '', '1', '2023-01-20', '2023-01-20 11:35:13'),
(64, 113, 'Eleazar Francisco Jr.', '9174165491', '', '', '1', '2023-01-20', '2023-01-20 11:39:41'),
(65, 114, 'Ramjo Nery', '9919147816', '', '', '1', '2023-01-20', '2023-01-20 11:42:33'),
(66, 115, 'Jay Anthony Calabia', '9502721853', '', '', '1', '2023-01-20', '2023-01-20 11:47:18'),
(67, 116, 'Louie Fradejas', '9274319525', '5597644', '', '1', '2023-01-20', '2023-01-20 11:50:03'),
(68, 117, 'Mamerto Salmorin', '9994381133', '', '', '1', '2023-01-20', '2023-01-20 11:53:29'),
(69, 118, 'Kurt Joshua Ciabal', '9955607628', '', '', '1', '2023-01-20', '2023-01-20 11:57:35'),
(70, 119, 'Ardieboy Katigbak', '9456072755', '', '', '1', '2023-01-20', '2023-01-20 12:00:47'),
(71, 120, 'Teejay Robillos', '9453208811', '', '', '1', '2023-01-20', '2023-01-20 12:04:21'),
(72, 121, 'Sean Vanguardia', '9478870569', '5504156', '', '1', '2023-01-20', '2023-01-20 12:07:11'),
(73, 122, 'Denah Ortega', '9772349275', '', '', '2', '2023-01-20', '2023-07-13 14:16:02'),
(74, 125, 'Nimfa Alimagno', '9751464133', '', '', '1', '2023-01-23', '2023-07-06 14:51:09'),
(75, 127, 'Lawrence Empalmado', '9062331558', '', '', '1', '2023-01-23', '2023-01-23 09:27:54'),
(76, 128, 'Jose Israel', '9079164895', '', '', '1', '2023-01-23', '2023-01-23 09:32:01'),
(77, 129, 'Nel Jumawan', '9955755384', '', '', '1', '2023-01-23', '2023-01-23 09:40:56'),
(78, 130, 'Eliezer Mortilla', '9260778434', '', '', '1', '2023-01-23', '2023-01-23 09:43:47'),
(79, 131, 'Augusto Peña Jr.', '9175811549', '', '', '2', '2023-01-23', '2023-07-27 17:31:56'),
(80, 132, 'Arnulfo Sombillo', '9564061284', '', '', '1', '2023-01-23', '2023-01-23 09:58:10'),
(81, 133, 'Erwin Bustamante', '9287516649', '', '', '1', '2023-01-23', '2023-01-23 10:01:34'),
(82, 134, 'Noime Katigbak', '9270194472', '', '', '1', '2023-01-23', '2023-01-23 10:05:07'),
(83, 135, 'Albert Catapang', '9163260600', '', '', '1', '2023-01-23', '2023-01-23 10:08:02'),
(84, 136, 'Michelle Rapal', '9665005484', '', '', '1', '2023-01-23', '2023-01-23 10:13:05'),
(85, 126, 'Arianne Cueto', '9231851632', '', '', '1', '2023-01-23', '2023-01-23 10:18:26'),
(86, 137, 'Raymundo Averion', '9665870830', '', '', '1', '2023-01-23', '2023-01-23 10:25:28'),
(87, 138, 'Maria Jocelyn Mercado', '9051266294', '', '', '1', '2023-01-23', '2023-01-23 10:30:31'),
(88, 139, 'Edzel Carona', '9486569373', '', '', '1', '2023-01-23', '2023-01-23 10:34:20'),
(89, 140, 'Sel Claveria', '9282434777', '', '', '1', '2023-01-23', '2023-01-23 10:45:01'),
(90, 141, 'Mary Rose Tolentino', '9161705373', '', '', '1', '2023-01-23', '2023-01-23 10:48:47'),
(91, 142, 'Johnrey Dimapilis', '9983277531', '', '', '1', '2023-01-23', '2023-01-23 10:52:49'),
(92, 144, 'Ralph Acoba', '9173283159', '', '', '1', '2023-01-23', '2023-01-23 10:59:05'),
(93, 145, 'John Paulo Katigbak', '9175821616', '', '', '2', '2023-01-23', '2023-08-01 14:19:52'),
(94, 146, 'Kirby John Monterola', '9362903408', '5395224', '', '1', '2023-01-23', '2023-01-23 11:07:04'),
(95, 147, 'Paolo Cordero', '9475581752', '', '', '1', '2023-01-23', '2023-01-23 11:12:40'),
(96, 148, 'Rolando Del Monte', '9084843916', '', '', '1', '2023-01-23', '2023-01-23 11:15:26'),
(97, 149, 'Ren Azusano', '9276965880', '', '', '1', '2023-01-24', '2023-01-24 10:41:46'),
(98, 150, 'Rhoda Lynn Dayo', '9000000001', '', '', '1', '2023-01-24', '2023-01-24 10:47:10'),
(99, 151, 'Dennis Bagsic', '9000000003', '', '', '1', '2023-01-24', '2023-01-24 10:51:05'),
(100, 152, 'JP Katigbak', '9000000004', '', '', '1', '2023-01-24', '2023-01-24 10:58:51'),
(101, 153, 'Ramir Doliente', '9462491192', '', '', '1', '2023-01-24', '2023-01-24 11:09:45'),
(102, 154, 'Ruel Coracero', '9214845369', '', '', '1', '2023-01-24', '2023-01-24 11:13:57'),
(103, 155, 'Joven Fule', '9166628254', '', '', '1', '2023-01-24', '2023-01-24 11:18:06'),
(104, 156, 'Lamberto Jovellanos', '9613451155', '5622881', '', '1', '2023-01-24', '2023-01-24 11:24:26'),
(105, 157, 'Anthony Bondad', '9000000005', '', '', '1', '2023-01-24', '2023-01-24 11:30:40'),
(106, 158, 'Earl Villarosa', '9000000006', '', '', '1', '2023-01-24', '2023-01-24 11:34:16'),
(107, 160, 'Ruel Del Monte', '9279384441', '', '', '1', '2023-01-24', '2023-01-24 11:41:25'),
(108, 161, 'Jorge Meraveles', '9953037103', '', '', '1', '2023-01-24', '2023-01-24 11:44:40'),
(109, 162, 'Alvin Pascual', '9292075557', '', '', '1', '2023-01-24', '2023-07-04 23:20:05'),
(110, 163, 'Melojean Empemano', '9000000007', '', '', '1', '2023-01-24', '2023-01-24 11:50:11'),
(111, 166, 'Janine Katigbak', '9000000008', '', '', '1', '2023-01-24', '2023-01-24 12:00:36'),
(112, 167, 'Fely Alcantara', '9000000009', '', '', '1', '2023-01-24', '2023-01-24 12:03:52'),
(113, 171, 'Roderick Del Monte', '9477201813', '', '', '1', '2023-02-17', '2023-02-17 12:34:05'),
(114, 174, 'Marilyn Yason', '9499564154', '09499564154', '', '1', '2023-05-23', '2023-05-23 12:59:32'),
(115, 175, 'Joan Rose De La Cruz', '9667829370', '', '', '1', '2023-06-24', '2023-06-24 10:54:50'),
(116, 176, 'Marinel ', '9919501026', '', '', '1', '2023-06-26', '2023-06-26 12:20:25'),
(117, 177, 'Adrianne Dimapilis', '9087653739', '', '', '1', '2023-07-05', '2023-07-05 21:33:03'),
(118, 178, 'Niel Patrick Jaron', '9855492600', '', '', '1', '2023-07-07', '2023-07-07 10:59:32'),
(119, 180, 'Niña Aningalan', '9175406900', '', '', '1', '2023-07-10', '2023-07-10 10:28:43'),
(120, 181, 'Test', '9123456789', '', '', '1', '2023-07-11', '2023-07-11 14:59:24'),
(121, 182, 'Zaira Jean Alinea', '9494270740', '', '', '1', '2023-07-12', '2023-07-12 10:43:37'),
(122, 122, 'Meldy O. Almeda', '9453276648', '', '', '1', '2023-07-13', '2023-07-13 14:16:46'),
(123, 185, 'lauriz hinton', '9175770308', '', '', '1', '2023-07-14', '2023-07-14 09:16:15'),
(124, 186, 'Krizzle Ann O. Bacs', '9924872558', 'none', '', '1', '2023-07-14', '2023-07-14 13:56:59'),
(125, 188, 'janice coracero', '9202586111', '', '', '1', '2023-07-16', '2023-07-16 15:06:55'),
(126, 189, 'Princes Lucero', '9186650692', '', '', '1', '2023-07-17', '2023-07-17 14:28:01'),
(127, 190, 'Eva', '9675631461', '', '', '1', '2023-07-17', '2023-07-17 20:39:04'),
(128, 192, 'Elaine', '9189205375', '', '', '1', '2023-07-22', '2023-07-22 11:40:55'),
(129, 193, 'agnes maloles', '9959650246', '', '', '1', '2023-07-24', '2023-07-24 11:07:25'),
(130, 194, 'Louvi Lyn Martin', '9128677861', '', '', '1', '2023-07-24', '2023-07-24 11:19:58'),
(131, 195, 'Angelica Quijano', '9516445790', '', '', '1', '2023-07-26', '2023-07-26 12:09:13'),
(132, 196, 'Mark Alvin Dayo', '9260778889', '', '', '1', '2023-07-26', '2023-07-26 12:18:34'),
(133, 199, 'Maria Felina Reyes', '9956794506', '', '', '1', '2023-07-26', '2023-07-26 12:23:56'),
(134, 197, 'MARJEALYN PORTUGAL', '9090030055', '049 5306193', '', '1', '2023-07-26', '2023-07-26 20:04:28'),
(135, 200, 'Steven Villanueva', '9228649345', '', '', '1', '2023-07-27', '2023-07-27 15:02:18'),
(136, 131, 'Genalyn Buedad ', '9175685756', '5031153', '', '1', '2023-07-27', '2023-07-27 17:31:51'),
(137, 201, 'Elsie Chavez', '9942095433', '', '', '1', '2023-07-28', '2023-07-28 11:32:38'),
(138, 202, 'Gino Paolo Dones', '9060918507', '0427100282', '', '1', '2023-07-31', '2023-08-15 07:49:27'),
(139, 202, 'Lailanie Garcia', '9171192487', '', '', '2', '2023-07-31', '2023-07-31 13:39:28'),
(140, 203, 'Marifel Katigbak', '9190024349', '', '', '1', '2023-08-08', '2023-08-08 19:05:44'),
(141, 205, 'Donna Jane Faylon', '9162424106', '', '', '1', '2023-08-10', '2023-08-10 13:29:24'),
(142, 206, 'Jay Lyn R. villareal ', '9463799460', '', '', '1', '2023-08-11', '2023-08-11 11:51:41'),
(143, 208, 'Roy Balaaldia', '9498769815', '', '', '1', '2023-08-17', '2023-08-17 13:31:34'),
(144, 108, 'Joanna Almanza', '9166663469', '', '', '2', '2023-08-20', '2023-08-20 21:29:15'),
(145, 209, 'Elisha Mae Aramil', '9983607228', '0495211443', '', '1', '2023-08-23', '2023-08-28 13:04:11'),
(146, 209, 'Shirley T. Ronquillo', '9060934435', '0495211443', '', '3', '2023-08-23', '2023-08-28 13:04:05'),
(147, 210, 'Jeacel azores', '9556882242', 'n/a', '', '1', '2023-08-24', '2023-08-24 14:16:08'),
(148, 212, 'Judea De los Santos', '9274203409', '', '', '1', '2023-08-25', '2023-08-25 09:18:49'),
(149, 215, 'MJ', '9271280573', '', '', '1', '2023-08-25', '2023-08-25 13:54:24'),
(150, 213, 'Laarni Sato', '9813016407', '', '', '1', '2023-08-25', '2023-08-25 19:38:54'),
(151, 216, 'Pearlyn Frago', '9361618221', '', '', '1', '2023-08-29', '2023-08-29 12:15:06'),
(152, 217, 'jeacel v. azores', '9663725874', '', '', '1', '2023-08-29', '2023-08-29 18:05:11'),
(153, 218, 'Althea Sombillo', '9925281373', '', '', '1', '2023-09-04', '2023-09-04 07:59:38'),
(154, 219, 'Jocelyn Aquino', '9494836496', '', '', '1', '2023-09-07', '2023-09-07 17:41:02'),
(155, 221, 'Jaheizer Leianne', '9190066471', '', '', '1', '2023-09-14', '2023-09-14 14:57:45'),
(156, 221, 'Nicolo Pasimio', '9289039700', '', '', '2', '2023-09-14', '2023-09-14 14:58:37'),
(157, 222, 'Salem Joy Gonzales', '9617971181', '', '', '1', '2023-09-29', '2023-09-29 07:41:44'),
(158, 225, ' jojo gabutero', '9171591385', '', '', '1', '2023-10-02', '2023-10-02 08:25:01'),
(159, 226, 'Tester ', '1234567891', '123', '', '1', '2023-11-16', '2023-11-16 10:43:25'),
(160, 226, '1231', '1231231231', '', '', '2', '2023-11-16', '2023-11-16 10:44:05'),
(161, 226, '123123123', '1111111111', '', '', '3', '2023-11-16', '2023-11-16 10:44:29'),
(162, 226, 'Testereeee', '2222222222', '', '', '3', '2023-11-16', '2023-11-16 10:44:46'),
(163, 229, 'Mark Christopher Duerme Bumagat', '9752155213', '09752155213', '', '1', '2023-11-28', '2023-11-28 12:45:05'),
(164, 230, 'MC', '2232222222', '', '', '1', '2023-11-29', '2023-11-29 07:55:50'),
(165, 230, 'test123', '1234123412', '', '', '2', '2023-11-29', '2023-11-29 07:56:36'),
(166, 231, 'Angelito Alvarez', '9762384575', '', '', '1', '2024-02-08', '2024-02-08 07:31:13'),
(167, 234, 'Emilou Gabanes Flores', '09667427409', '000', 'e.gabanes@gmail.com', 'primary', '2024-03-15 14:44:04', '2024-03-15 14:44:04'),
(168, 235, 'Rolando Arambala Leonor', '09452337976', '5545826', 'allanleonor79sky@gmail.com', 'primary', '2024-03-25 17:27:40', '2024-03-25 17:27:40');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_guardian`
--

CREATE TABLE `fcav2_guardian` (
  `guardian_aid` int(11) NOT NULL,
  `guardian_active` tinyint(1) NOT NULL,
  `guardian_relationship_id` int(11) NOT NULL,
  `guardian_parent_id` int(11) NOT NULL,
  `guardian_is_reside` tinyint(1) NOT NULL,
  `guardian_salutation` varchar(10) NOT NULL,
  `guardian_fname` varchar(50) NOT NULL,
  `guardian_mname` int(20) NOT NULL,
  `guardian_maiden_name` varchar(20) NOT NULL,
  `guardian_lname` varchar(50) NOT NULL,
  `guardian_email` varchar(100) NOT NULL,
  `guardian_mobile` varchar(30) NOT NULL,
  `guardian_landline` varchar(30) NOT NULL,
  `guardian_address` varchar(50) NOT NULL,
  `guardian_province` varchar(30) NOT NULL,
  `guardian_city` varchar(20) NOT NULL,
  `guardian_zipcode` varchar(10) NOT NULL,
  `guardian_country` varchar(20) NOT NULL,
  `guardian_religion` varchar(30) NOT NULL,
  `guardian_occupation` varchar(30) NOT NULL,
  `guardian_created` varchar(20) NOT NULL,
  `guardian_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_guardian`
--

INSERT INTO `fcav2_guardian` (`guardian_aid`, `guardian_active`, `guardian_relationship_id`, `guardian_parent_id`, `guardian_is_reside`, `guardian_salutation`, `guardian_fname`, `guardian_mname`, `guardian_maiden_name`, `guardian_lname`, `guardian_email`, `guardian_mobile`, `guardian_landline`, `guardian_address`, `guardian_province`, `guardian_city`, `guardian_zipcode`, `guardian_country`, `guardian_religion`, `guardian_occupation`, `guardian_created`, `guardian_datetime`) VALUES
(49, 1, 12, 48, 0, 'Mrs.', 'Jannette', 0, 'Mercado', 'Lumabas', 'jannette@gmail.com', '9095618379', '', 'Brgy San Cristobal', 'Laguna', ' San Pablo City ', '4000', '4000', 'Catholic', 'Housewife', '', '2023-01-23 09:04:51'),
(50, 1, 13, 48, 0, 'Mr.', 'Ronaldo', 0, '', 'Lumabas', 'ronaldo@gmail.com', '9095612348', '', 'Brgy San Cristobal', 'Laguna', ' San Pablo City ', '4000', '4000', 'Catholic', 'Farmer', '', '2022-11-28 07:25:59'),
(51, 1, 14, 50, 0, 'Ms.', 'Myel Gracie', 0, '', 'Bernardino', 'meciebernardino@gmail.com', '9277435420', '', 'Brgy. Sto Nino Alcaraz', 'Laguna', 'San Pablo Vity', '4000', '4000', 'Born Again Christian', 'Communication Staff', '', '2023-09-04 11:36:15'),
(52, 1, 12, 51, 0, 'Mrs.', 'Kathleen Trixy', 0, 'Faustino', 'Ubeda', 'trixy.ubeda@fca.edu.ph', '9369069302', '', '384 Brgy. Sto. Niño', 'Laguna', 'San Pablo', '4000', '4000', 'Catholic', 'Brow & Lash Artist', '2023-01-10', '2023-01-10 08:27:22'),
(53, 1, 13, 53, 0, 'Mr.', 'Fermino Jr', 0, '', 'Jumawan', 'frednhel22@gmail.com', '9291201144', '', 'Blk.1 Lot 3 Clapson Homes San Nicolas', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Shoemaker', '2023-01-12', '2023-01-12 09:42:44'),
(54, 1, 12, 54, 0, 'Ms.', 'Criselda', 0, 'Claveria', 'Claveria', 'sel.claveria@fca.edu.ph', '9500021400', '', 'Mary Help Subdivision', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Businesswoman', '2023-01-18', '2023-01-18 09:07:11'),
(56, 1, 13, 58, 0, 'Mr.', 'Joerge Carlou', 0, '', 'Callejo', 'joerge.callejo@fca.edu.ph', '9000000000', '', 'Brgy. Sto. Anghel', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'CI Officer', '2023-01-19', '2023-01-19 10:07:38'),
(57, 1, 14, 59, 0, 'Mr.', 'Jordan', 0, '', 'Cortez', 'jordan.cortez@fca.edu.ph', '9000000000', '', 'Camella Homes Brgy. San Jose', 'Laguna', 'San Pablo City', '4000', '4000', 'N/A', 'Medical Sales Representative', '2023-01-19', '2023-01-19 10:17:02'),
(58, 1, 12, 60, 0, 'Mrs.', 'Cheska', 0, 'Please Edit', 'Acal', 'cheska.acal@fca.edu.ph', '9232754451', '', '#1451 Lot 9 Blk 12 Aranville Heights Brgy. San Jos', 'Laguna', 'San Pablo City', '4000', '4000', 'Roman Catholic', 'ESL Teacher', '2023-01-19', '2023-01-19 10:22:48'),
(59, 1, 13, 61, 0, 'Mr.', 'Noriel', 0, '', 'Alcantara', 'noriel.alcantara@fca.edu.ph', '9663008092', '', 'Brgy. San Francisco Calihan', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'OFW', '', '2023-07-14 21:40:45'),
(60, 1, 12, 62, 0, 'Mrs.', 'Fatima Eulynne', 0, 'Please Edit', 'Alcantara', 'fatima.alcantara@fca.edu.ph', '9175404505', '', 'BLK15 LOT13 KINGSROW SUBD. BRGY SAN FANCISCO CALIH', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Please Edit', '2023-01-19', '2023-01-19 10:31:22'),
(61, 1, 12, 63, 0, 'Ms.', 'Jennilyn', 0, 'Please Edit', 'Delos Santos', 'jennilyn.delossantos@fca.edu.ph', '9504534857', '', 'Brgy. San Marcos', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'House Parent', '2023-01-19', '2023-01-19 10:35:20'),
(62, 1, 12, 64, 0, 'Mrs.', 'Erlyn', 0, 'Please Edit', 'Amante', 'erlyn.amante@fca.edu.ph', '9215455240', '', 'St. Mary St. Mary Help Subd. Brgy. San Francisco', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Entrepreneur', '2023-01-19', '2023-01-19 10:38:23'),
(63, 1, 12, 65, 0, 'Mrs.', 'Minelen', 0, 'Please Edit', 'Alvaran', 'minelen.alvaran@fca.edu.ph', '9150181880', '', 'Brgy. San Francisco Calihan', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Grocery Store Owner', '2023-01-19', '2023-01-19 10:41:40'),
(64, 1, 13, 66, 0, 'Mr.', 'Marlon', 0, '', 'Basan', 'marlon.basan@fca.edu.ph', '9208369927', '5009362', '0101 Munting Paraiso Purok 1-A', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'OFW', '2023-01-19', '2023-01-19 10:47:06'),
(65, 1, 14, 67, 0, 'Ms.', 'Marivic', 0, '', 'Salvador', 'marivic.salvador@fca.edu.ph', '9279521170', '0918566702', '1044 Brgy. Sta Monica', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Freelancer', '2023-01-19', '2023-01-19 10:50:27'),
(66, 1, 12, 68, 0, 'Mrs.', 'Maricar', 0, 'Please Edit', 'Coronado', 'maricar.coronado@fca.edu.ph', '9486013333', '5435482', '108 Purok 3 Brgy. Sta Catalina', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Self Employed', '2023-01-19', '2023-01-19 10:54:09'),
(67, 1, 13, 69, 0, 'Mr.', 'David', 0, '', 'Covic', 'david.covic@thefrontline.asia', '9959646413', '', 'Frontline Center Brgy. Sto. Niño', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Operations Manager', '2023-01-19', '2023-01-19 10:59:47'),
(68, 1, 13, 70, 0, 'Ms.', 'Eileen Krystelle', 0, '', 'Manalo', 'ek.manalo@fca.edu.ph', '9322963341', '', 'Brgy. San Miguel', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Nurse', '2023-01-19', '2023-01-19 11:03:40'),
(69, 1, 12, 71, 0, 'Mrs.', 'Jamaica Angelica', 0, 'Please Edit', 'Dela Cruz', 'jamaica.delacruz@fca.edu.ph', '9173723635', '', '319 Purok 3 Brgy. Sta. Maria Magdalena', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Senior Specialist', '2023-01-19', '2023-01-19 11:07:23'),
(70, 1, 12, 72, 0, 'Ms.', 'Xena', 0, 'Please Edit', 'Bernas', 'xena.bernas@fca.edu.ph', '9694975824', '', '553 Ramos Compound Brgy. San Lucas 1', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Business Owner', '2023-01-19', '2023-01-19 11:10:28'),
(71, 1, 12, 73, 0, 'Mrs.', 'Marie Chrizza ', 0, 'Please Edit', 'Delos Reyes', 'marie.delosreyes@fca.edu.ph', '9054580272', '5613695', 'Laurel St.', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Nurse', '', '2023-01-19 11:14:43'),
(72, 1, 12, 74, 0, 'Ms.', 'Micaela Carina', 0, 'Please Edit', 'Bunquin', 'micaela.bunquin@fca.edu.ph', '9062462542', '5667833', 'Baloc Road Brgy. San Ignacio', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Marketer', '2023-01-19', '2023-01-19 11:18:52'),
(73, 1, 12, 75, 0, 'Ms.', 'Donna', 0, 'Please Edit', 'Armedilla', 'donna.armedilla@fca.edu.ph', '9661840350', '', 'Villa Favorito Resort Brgy. San Ignacio', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Front Desk Receptionist', '', '2023-01-19 12:43:15'),
(74, 1, 12, 76, 0, 'Mrs.', 'Ariane', 0, 'Please Edit', 'Favorito', 'ariane.favorito@fca.edu.ph', '9455728401', '', 'Sitio Baloc Brgy. San Ignacio', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Self Employed', '2023-01-19', '2023-01-19 12:45:55'),
(75, 1, 12, 77, 0, 'Mrs.', 'Johanna Erika', 0, 'Please Edit', 'Kua', 'je.kua@fca.edu.ph', '9171079183', '', '104 Mayon Street Joel Town Subdivision Brgy. San R', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'HR Supervisor', '2023-01-19', '2023-01-19 12:49:36'),
(76, 1, 12, 78, 0, 'Mrs.', 'Bonie Pauline', 0, 'Please Edit', 'Lee', 'bonie.lee@fca.edu.ph', '9310571312', '', 'Block 1 Lot 17 Lynville Residences Brgy. Sta Monic', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'N/A', '2023-01-19', '2023-01-19 12:52:37'),
(77, 1, 12, 79, 0, 'Mrs.', 'Charmaine Grace ', 0, 'Please Edit', 'Manalang', 'cg.manalang@fca.edu.ph', '9171458097', '09171458097', 'Block 9 Lot 2 Homeowners Brgy. San Ignacio', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Government Employee', '2023-01-19', '2023-01-19 12:55:40'),
(78, 1, 12, 80, 0, 'Mrs.', 'Ria', 0, 'Please Edit', 'Marasigan', 'ria.marasigan@fca.edu.ph', '9083331926', '', 'Sitio Baloc Brgy. San Ignacio', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Housewife', '', '2023-01-19 12:59:54'),
(79, 1, 12, 81, 0, 'Mrs.', 'Johanna Mae', 0, 'Please Edit', 'Marquez', 'jm.marquez@fca.edu.ph', '9294008211', '5668499', '063 Alvarez Street Brgy. 3-C', 'Laguna', 'San Pablo City', '4000', '4000', 'Iglesia ni Cristo', 'Business Owner', '2023-01-19', '2023-01-19 13:02:33'),
(80, 1, 12, 82, 0, 'Ms.', 'Anacarolina', 0, 'Please Edit', 'Dela Cruz', 'ac.delacruz@fca.edu.ph', '9557551827', '', 'Brgy. Sta Veronica', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Housewife', '2023-01-19', '2023-01-19 13:05:57'),
(81, 1, 12, 83, 0, 'Mrs.', 'Venus Lei', 0, 'Please Edit', 'Pagkaliwangan', 'venus.pagkaliwangan@fca.edu.ph', '9190771296', '5455569', 'Block 11 Lot 9 NHA Brgy. San Jose', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Business Owner', '2023-01-19', '2023-01-19 13:08:53'),
(82, 1, 12, 84, 0, 'Ms.', 'Ivy Joy', 0, 'Please Edit', 'Mangurali', 'ivy.mangurali@fca.edu.ph', '9363659381', '', '159 PNR Compound Brgy II-D', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Admin Officer', '2023-01-19', '2023-01-19 14:02:26'),
(83, 1, 12, 85, 0, 'Mrs.', 'Maria Paula Peth', 0, 'Please Edit', 'Javier', 'maria.javier@fca.edu.ph', '9182246440', '', '0466 Purok 2 Brgy. San Gregorio', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Housewife', '', '2023-01-19 14:07:35'),
(84, 1, 12, 86, 0, 'Mrs.', 'Annabel', 0, 'Please Edit', 'Ramirez', 'annabel.ramirez@fca.edu.ph', '9778051756', '5665786', '9001 NR Street St. Therese Mary Help of Christian ', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Housewife', '2023-01-19', '2023-01-19 14:10:11'),
(85, 1, 12, 87, 0, 'Mrs.', 'Clarize', 0, 'Please Edit', 'Ronquillo', 'clarize.ronquillo@fca.edu.ph', '9266327722', '5308235', '#40 Buncayo Park Subdivision Brgy. Sto. Niño', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Accountant', '2023-01-19', '2023-01-19 14:13:04'),
(86, 1, 12, 88, 0, 'Mrs.', 'Kimberly Ann', 0, 'Please Edit', 'Rosales', 'kimberly.rosales@fca.edu.ph', '9082724892', '', 'Block 5 Lot 13 Springleaf Heights Subdivision', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Business Owner', '2023-01-19', '2023-01-19 14:16:00'),
(87, 1, 12, 89, 0, 'Mrs.', 'Princess Diana', 0, 'Please Edit', 'Sta. Cruz', 'pd.stacruz@fca.edu.ph', '9155918089', '', '199 Socorro Fule Street', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Housewife', '2023-01-19', '2023-01-19 14:26:00'),
(88, 1, 13, 90, 0, 'Mr.', 'Rozel', 0, '', 'Talento', 'rozel.talento@fca.edu.ph', '9482859290', '5340322', 'Sitio Baloc Brgy. San Ignacio', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Plant Maintenance Manager', '2023-01-19', '2023-01-19 14:28:58'),
(89, 1, 12, 91, 0, 'Mrs.', 'Rosemaine', 0, 'Please Edit', 'Castillo', 'rosemaine.castillo@fca.edu.ph', '9959727159', '5031172', '589 Brgy. San Crispin', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Business Owner', '2023-01-20', '2023-01-20 09:23:01'),
(90, 1, 12, 92, 0, 'Mrs.', 'Ma. Larissa', 0, 'Please Edit', 'Dimailig', 'ml.dimailig@fca.edu.ph', '9054606659', '', 'Brgy. Sta Ana ', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Business Development Officer', '2023-01-20', '2023-01-20 09:30:37'),
(91, 1, 12, 93, 0, 'Mrs.', 'Gladys', 0, 'Please Edit', 'General', 'gladys.general@fca.edu.ph', '9267279836', '', '0055 Sitio Baloc Brgy. San Ignacio', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Housewife', '2023-01-20', '2023-01-20 09:42:00'),
(92, 1, 12, 94, 0, 'Mrs.', 'Janis Catherine', 0, 'Please Edit', 'Lat', 'jc.lat@fca.edu.ph', '9356238586', '', 'Block 2 Lot 17 Home Owners Sitio Baloc Brgy. San I', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Online Seller', '2023-01-20', '2023-01-20 09:45:05'),
(93, 1, 12, 95, 0, 'Mrs.', 'Averose', 0, 'Please Edit', 'Mendoza', 'averose.mendoza@fca.edu.ph', '9078054226', '', 'Phase 1 Blk 4 Lot 2 Sannera Subd. Brgy San Antonio', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Financial Advisor', '2023-01-20', '2023-01-20 09:48:58'),
(94, 1, 12, 96, 0, 'Mrs.', 'Maureen', 0, 'Please Edit', 'Orillaneda', 'maureen.orillaneda@fca.edu.ph', '9165888114', '5082583', 'Please Edit', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'QA Manager', '2023-01-20', '2023-01-20 09:53:59'),
(95, 1, 12, 97, 0, 'Mrs.', 'Maria Sasha Camille', 0, 'Please Edit', 'Panlaqui', 'msc.panlaqui@fca.edu.ph', '9175025775', '', '332 Sampaloc Lake Court Subdivision Brgy. Concepci', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Housewife', '2023-01-20', '2023-01-20 09:58:45'),
(96, 1, 12, 99, 0, 'Ms.', 'Khandy', 0, 'Please Edit', 'De Luna', 'khandy.deluna@fca.edu.ph', '9094412893', '', 'Block 10 Lot 16 Bria Homes San Gregorio', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Seller', '2023-01-20', '2023-01-20 10:09:58'),
(97, 1, 12, 100, 0, 'Ms.', 'Clarissa', 0, 'Please Edit', 'Bicomong', 'clarissa.bicomong@fca.edu.ph', '9369365597', '', 'Sitio Kasay\'an Brgy San Ignacio', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'N/A', '2023-01-20', '2023-01-20 10:15:20'),
(98, 1, 14, 101, 0, 'Mr.', 'Sonny', 0, '', 'Napay', 'sonny.napay@fca.edu.ph', '9687196124', '', 'Purok 2 Batubalani Subdivision Barangay Santa Elen', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Electrician', '2023-01-20', '2023-01-20 10:19:02'),
(99, 1, 12, 102, 0, 'Mrs.', 'Mary Jane', 0, 'Please Edit', 'Cristobal', 'mj.cristobal@fca.edu.ph', '9656731137', '', 'Sto Niño Homes Brgy Sto Niño', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Retail', '2023-01-20', '2023-01-20 10:22:18'),
(100, 1, 12, 103, 0, 'Ms.', 'Catherine', 0, 'Please Edit', 'Buquing', 'catherine.buquing@fca.edu.ph', '9490167417', '', 'Block1 Lot 4 Maureen Compd. Farconville Subd. Brgy', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Room Attendant', '2023-01-20', '2023-01-20 11:02:43'),
(101, 1, 12, 104, 0, 'Mrs.', 'Rosemarie', 0, 'Please Edit', 'Lorica', 'rosemarie.lorica@fca.edu.ph', '9673603569', '5393760', '317 Lilac St.Renmarville Brgy. San Ignacio', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Sales Specialist', '2023-01-20', '2023-01-20 11:06:13'),
(102, 1, 13, 105, 0, 'Mr.', 'Samel Joseph', 0, '', 'Nipolo', 'sam.nipolo@thefrontline.asia', '9519819618', '', 'Purok V Brgy. San Jose', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Camp Manager', '2023-01-20', '2023-01-20 11:09:25'),
(103, 1, 12, 106, 0, 'Mrs.', 'Edeliza', 0, 'Please Edit', 'Raras', 'edelizarecidocruz@gmail.com', '9060243635', '5611116', '235 Magsaysay St. Brgy. 1-B City Subdivision', 'Laguna', 'San Pablo City', '4000', '4000', 'Muslim', 'Housewife', '2023-01-20', '2023-01-20 11:13:23'),
(104, 1, 12, 107, 0, 'Ms.', 'Jeannie', 0, 'Please Edit', 'Anlacan', 'jean12anlacan@gmail.com', '9688866094', '', '502 Mariño Subdivision Brgy. San Lucas 1 ', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Financial Advisor', '2023-01-20', '2023-01-20 11:17:00'),
(105, 1, 12, 108, 0, 'Ms.', 'Joanna', 0, 'Please Edit', 'Almanza', 'wanaalmanza@gmail.com', '9166663469', '', '217 Brgy. Santa Maria Magdalena', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Senior Process Executive', '2023-01-20', '2023-01-20 11:20:46'),
(106, 1, 12, 109, 0, 'Mrs.', 'Miriam Grace', 0, 'N/A', 'Bongolan', 'msquareded@gmail.com', '9426697823', '', 'RRC Arban St.', 'Laguna', 'Rizal', '4000', '4000', 'Christian', 'Missionary', '2023-01-20', '2023-01-20 11:24:01'),
(107, 1, 12, 110, 0, 'Mrs.', 'Juana', 0, 'Please Edit', 'Aglubat', 'blakeaglubat@gmail.com', '9454831182', '', 'Blk 18 Lot 2 Camella Homes Brgy. San Ignacio', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Housewife', '2023-01-20', '2023-01-20 11:28:32'),
(108, 1, 12, 111, 0, 'Mrs.', 'Leslie Karen', 0, 'Please Edit', 'Belen', 'lesliekaren.belen@gmail.com', '9292074900', '', '339 Brgy. Sta. Maria Magdalena', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Financial Advisor', '2023-01-20', '2023-01-20 11:32:06'),
(109, 1, 13, 112, 0, 'Mr.', 'Jervie Paul', 0, '', 'Doon', 'doonjerviepaul@icloud.com', '9159867657', '', 'B30 L7 Phirst Park Homes Brgy. San Ignacio', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Software Engineer', '2023-01-20', '2023-01-20 11:34:54'),
(110, 1, 12, 113, 0, 'Ms.', 'Mahinhin', 0, 'Please Edit', 'Seraspi', 'seraspi01@gmail.com', '9770780572', '', 'Please Edit', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Freelance', '2023-01-20', '2023-01-20 11:39:25'),
(111, 1, 12, 114, 0, 'Mrs.', 'Monique', 0, 'Please Edit', 'Nery', 'cha.monique91@gmail.com', '9954434045', '', 'Blk5 Lot 8 Brgy. San Ignacio Homeowners', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Food Technologist', '2023-01-20', '2023-01-20 11:42:19'),
(112, 1, 12, 115, 0, 'Mrs.', 'Lanie', 0, 'Please Edit', 'Calabia', 'laniecalabia90@gmail.com', '9096600064', '', '545 Brgy. Sto. Niño', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Business Owner', '2023-01-20', '2023-01-20 11:47:02'),
(113, 1, 13, 116, 0, 'Ms.', 'Kimberly', 0, '', 'Alcantara', 'kgalcantara@gmail.com', '9052235225', '5597644', '2128 Brgy. San Jose', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'ESL Teacher', '2023-01-20', '2023-01-20 11:49:44'),
(114, 1, 12, 117, 0, 'Ms.', 'Rosenda', 0, 'Please Edit', 'Cuyson', 'rosendamcuyson@gmail.com', '9994381133', '', 'L2 B14 Sampaguita Street Renmar Ville Subdivision ', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Unspecified', '2023-01-20', '2023-01-20 11:53:13'),
(115, 1, 12, 118, 0, 'Ms.', 'Veronese', 0, 'Please Edit', 'Ciabal', 'vciabal5685@gmail.com', '9173021139', '', 'Block 26 Lot 8-9 Bria Homes Brgy. San Gregorio', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Virtual Assistant', '2023-01-20', '2023-01-20 11:57:04'),
(116, 1, 12, 119, 0, 'Ms.', 'Paula Blanca', 0, 'Please Edit', 'Viriña', 'virinapaulablanca@gmail.com', '9958949298', '', '0512 Sunflower St. Renmar Ville Subd. Brgy. San Ig', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Unspecified', '2023-01-20', '2023-01-20 12:00:28'),
(117, 1, 12, 120, 0, 'Mrs.', 'Rosemarie', 0, 'Please Edit', 'Robillos', 'mariedaverobillos@gmail.com', '9516909399', '', '0608 Sitio Baloc Brgy. San ignacio', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Housewife', '2023-01-20', '2023-01-20 12:03:55'),
(118, 1, 12, 121, 0, 'Mrs.', 'Leah Anne', 0, 'Please Edit', 'Alwani', 'leahanne.vanguardia@gmail.com', '9126525296', '5505146', '1137 El-Rey Subdivision Brgy. San Ignacio', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Unspecified', '2023-01-20', '2023-01-20 12:06:41'),
(119, 1, 14, 122, 0, 'Ms.', 'Katherine', 0, '', 'Gabanes', 'gabaneskatherine@gmail.com', '9453276647', '', 'Blk 19 Lot 29 Paseo Kahel St. Hacienda Escudero Vi', 'Quezon', 'Tiaong', '4325', '4325', 'Christian', 'Unspecified', '', '2023-07-13 14:15:22'),
(120, 1, 14, 125, 0, 'Ms.', 'Nimfa', 0, '', 'Alimagno', 'nimfa.alimagno@fca.edu.ph', '9751464133', '', '107 Farconville Subdivision Phase II-A Prof. AC Ko', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Freelancer', '2023-01-23', '2023-01-23 08:25:47'),
(122, 1, 12, 126, 0, 'Ms.', 'Arianne', 0, 'Please Edit', 'Cueto', 'arianne.cueto@fca.edu.ph', '9231851632', '', '022 Sitio VIII Brgy. San Gabriel', 'Laguna', 'San Pablo City', '4000', '4000', 'Unspecified', 'Unspecified', '', '2023-01-23 10:19:08'),
(123, 1, 12, 127, 0, 'Mrs.', 'Janelle Edriane', 0, 'Please Edit', 'Empalmado', 'janelle.empalmado@fca.edu.ph', '9771653193', '', '46 balagtas Blvd.', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Unspecified', '2023-01-23', '2023-01-23 09:27:38'),
(124, 1, 12, 128, 0, 'Ms.', 'Aiza', 0, 'Please Edit', 'Chavez', 'aiza.chavez@fca.edu.ph', '9079164895', '', 'Brgy.San Ignacio', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Unspecified', '2023-01-23', '2023-01-23 09:31:30'),
(125, 1, 12, 129, 0, 'Ms.', 'Bern', 0, 'Please Edit', 'Manosca', 'bern.manosca@fca.edu.ph', '9955755384', '', 'Brgy. Sto. Niño', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Laundry Staff', '2023-01-23', '2023-01-23 09:35:09'),
(126, 1, 12, 130, 0, 'Mrs.', 'Donnabel', 0, 'Please Edit', 'Mortilla', 'donnabelmortilla20@gmail.com', '9618322484', '', 'Brgy. San Ignacio', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Self Employed', '2023-01-23', '2023-01-23 09:43:28'),
(127, 1, 12, 131, 0, 'Ms.', 'Genalyn', 0, 'Please Edit', 'Buedad', 'gelyn.buedad@gmail.com', '9175685746', '5031153', '691 Luis Street Southeast Meadows Brgy. San Roque ', 'Laguna', 'San Pablo City', '4000', '4000', 'Protestant', 'Employee', '2023-01-23', '2023-01-23 09:48:06'),
(128, 1, 12, 132, 0, 'Mrs.', 'Althea Beatrice', 0, 'Please Edit', 'Sombillo', 'eyahx09@gmail.com', '9925281373', '', '0322  RenMar Ville Orchid Baloc Road Brgy. San Ign', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Unspecified', '2023-01-23', '2023-01-23 09:57:29'),
(129, 1, 12, 133, 0, 'Mrs.', 'Quencee Loreyne', 0, 'Please Edit', 'Bustamante', 'queen.loreyne@gmail.com', '9496535016', '', '414 Perla Agatha St. Magcaseville Brgy. Sto. Crist', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Housewife', '2023-01-23', '2023-01-23 10:01:15'),
(130, 1, 12, 134, 0, 'Ms.', 'Marifel', 0, 'Please Edit', 'Katigbak', 'katigbakmarifel@gmail.com', '9190024349', '5231403', 'Brgy. San Jose', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Dog Breeder', '2023-01-23', '2023-01-23 10:04:38'),
(131, 1, 12, 135, 0, 'Mrs.', 'Leonila', 0, 'Please Edit', 'Catapang', 'leonila.catapang@fca.edu.ph', '9152316131', '', 'Bañagale St. Bgy San Jose', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Unspecified', '2023-01-23', '2023-01-23 10:07:41'),
(132, 1, 12, 136, 0, 'Mrs.', 'Michelle', 0, 'Please Edit', 'Rapal', 'michelle.rapal@fca.edu.ph', '9665005484', '', 'San Buenaventura', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Self Employed ', '2023-01-23', '2023-01-23 10:12:28'),
(133, 1, 12, 137, 0, 'Mrs.', 'May Liza', 0, 'Please Edit', 'Averion', 'maylizaaverion@gmail.com', '9665870830', '', '202 Purok 2 Brgy. San Bartolome', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Vendor', '2023-01-23', '2023-01-23 10:16:03'),
(134, 1, 12, 138, 0, 'Mrs.', 'Phebe Lauren', 0, 'Please Edit', 'Balines', 'balinesphebe@gmail.com', '9166492052', '', 'Purok 2 Barangay Sto. Nino', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Cashier', '2023-01-23', '2023-01-23 10:29:55'),
(135, 1, 12, 139, 0, 'Mrs.', 'Myrna', 0, 'Please Edit', 'Carona', 'caronamyrna74@gmail.com', '9305969305', '', 'BRGY. STA LUCIA', 'Quezon', 'Dolores', '4326', '4326', 'Christian', 'Store Owner', '2023-01-23', '2023-01-23 10:33:59'),
(136, 1, 12, 140, 0, 'Mrs.', 'Grace', 0, 'Laluon', 'Rom', 'gwengaverom@gmail.com', '9282434777', '', 'Mary Help Subdivision Brgy. San Ignacio', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'OFW', '', '2023-08-23 08:33:18'),
(137, 1, 13, 141, 0, 'Mr.', 'Efren', 0, '', 'Tolentino', 'jandie29@gmail.com', '9754307396', '', 'Brgy. San Bartolome', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Driver', '2023-01-23', '2023-01-23 10:48:18'),
(138, 1, 12, 142, 0, 'Mrs.', 'Adrianne', 0, 'Please Edit', 'Dimapilis', 'adriannevelasco0121@gmail.com', '9087653739', '', '215 Brgy. San Jose', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Registered Nurse', '2023-01-23', '2023-01-23 10:52:27'),
(139, 1, 12, 144, 0, 'Mrs.', 'Bethany', 0, 'Del Monte', 'Acoba', 'bethany.pessina@thefrontline.asia', '9167462624', '', 'Frontline Center Sitio Subac Brgy.Sto. Niño', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Unspecified', '2023-01-23', '2023-01-23 10:58:39'),
(140, 1, 12, 145, 0, 'Mrs.', 'Jerina', 0, 'Please Edit', 'Katigbak', 'jerinadelosreyes@gmail.com', '9168373419', '', '634 Brgy. San Diego', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Accounting Associate', '', '2023-08-01 14:19:16'),
(141, 1, 12, 146, 0, 'Mrs.', 'Kathleen', 0, 'Please Edit', 'Monterola', 'khayemonterola09@gmail.com', '9059419600', '5295224', 'Brgy. Santiago 2', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Assistant Web App Admin', '2023-01-23', '2023-01-23 11:06:41'),
(142, 1, 12, 147, 0, 'Mrs.', 'Shiela', 0, 'Please Edit', 'Cordero', 'oknejunkshop.ph@gmail.com', '9475581752', '5236706', 'Brgy. Sto. Niño', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Self Employed', '2023-01-23', '2023-01-23 11:12:23'),
(143, 1, 12, 148, 0, 'Mrs.', 'Sarah Theresa', 0, 'Please Edit', 'Del Monte', 'sarah.delmomte@thefrontline.asia', '9084834816', '', 'Frontline Center Sitio Subac Brgy.Sto. Niño', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Businesswoman', '2023-01-23', '2023-01-23 11:15:12'),
(144, 1, 12, 149, 0, 'Mrs.', 'Rina', 0, 'Please Edit', 'Dayan', 'reniazusano@gmail.com', '9276965880', '', 'Brgy. San Francisco Calihan', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Teacher', '2023-01-24', '2023-01-24 10:41:23'),
(145, 1, 13, 150, 0, 'Mr.', 'Christian Wayne', 0, '', 'Dayo', 'cw.dayo@fca.edu.ph', '9178346261', 'na', 'Frontline Center Sitio Subac Brgy.Sto. Niño', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Bank Executive', '', '2023-08-05 15:08:10'),
(146, 1, 13, 151, 0, 'Mr.', 'Dennis', 0, '', 'Bagsic', 'dennis.bagsic@fca.edu.ph', '9000000002', '', 'Maharlika Highway Brgy. San Rafael', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'School Security Head', '2023-01-24', '2023-01-24 10:50:30'),
(147, 1, 14, 152, 0, 'Ms.', 'Judea', 0, '', 'Delos Santos', 'judea.delossantos@thefrontline.asia', '9274203409', '', 'Frontline Center Sitio Subac Brgy.Sto. Niño', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'FTC', '2023-01-24', '2023-01-24 10:57:46'),
(148, 1, 12, 153, 0, 'Ms.', 'Maricar', 0, 'Please Edit', 'De Guzman', 'ycardeguzman01132017@gmail.com', '9462491192', '', 'Brgy. San Lorenzo', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Secretary', '2023-01-24', '2023-01-24 11:08:19'),
(149, 1, 12, 154, 0, 'Mrs.', 'Janice', 0, 'Please Edit', 'Coracero', 'j.coracero@yazaki-torres.com', '9952013382', '', 'Guadalupe', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Unspecified', '2023-01-24', '2023-01-24 11:13:31'),
(150, 1, 12, 155, 0, 'Mrs.', 'Marinelle', 0, 'Please Edit', 'Fule', 'makohevetfule@gmail.com', '9166628254', '5211907', '65 M. Paulino St. Brgy. II-E', 'Laguna', 'San Pablo City', '4000', '4000', 'Unspecified', 'Unspecified', '2023-01-24', '2023-01-24 11:17:42'),
(151, 1, 12, 156, 0, 'Ms.', 'Venus', 0, 'Please Edit', 'Amarga', 'aguilarvenus87@gmail.com', '9271189074', '5622881', 'Brgy. San Francisco Calihan', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Factory Worker', '2023-01-24', '2023-01-24 11:23:53'),
(152, 1, 12, 157, 0, 'Mrs.', 'Marjorie', 0, 'Calabia', 'Bondad', 'bondadkylaanne@gmail.com', '9198228564', '', 'Brgy. San Ignacio', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Business Owner', '2023-01-24', '2023-01-24 11:30:10'),
(153, 1, 12, 158, 0, 'Mrs.', 'Keith', 0, 'Please Edit', 'Villarosa', 'keithelisha@icloud.com', '9979947132', '', 'Brgy. San Lucas', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Unspecified', '2023-01-24', '2023-01-24 11:33:49'),
(154, 1, 12, 160, 0, 'Mrs.', 'Florencia', 0, 'Please Edit', 'Del Monte', 'delmonteflor23@gmail.com', '9289874880', '', 'Brgy. Soledad', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Church Administrator', '2023-01-24', '2023-01-24 11:41:07'),
(155, 1, 12, 161, 0, 'Mrs.', 'Joan', 0, 'Please Edit', 'Meraveles', 'joanmeraveles@gmail.com', '9164638469', '', 'Blk 9 Lot 30 Home Owner\'s Subdivision Brgy. San Ig', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Unspecified', '2023-01-24', '2023-01-24 11:44:09'),
(156, 1, 12, 162, 0, 'Mrs.', 'Joan', 0, 'Please Edit', 'Pascual', 'joan_santos1028@yahoo.com.ph', '9292075557', '', 'Lot 8 Blk 23 Montelago Nature Estate Subd. Brgy. S', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Unspecified', '2023-01-24', '2023-01-24 11:46:50'),
(157, 1, 12, 163, 0, 'Ms.', 'Melojean', 0, 'Please Edit', 'Empemano', 'jhiemhyca163830@gmail.com', '9292755949', '', 'Brgy. Sto. Niño', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Production Operator', '2023-01-24', '2023-01-24 11:49:42'),
(158, 1, 12, 166, 0, 'Ms.', 'Jen Eloisa', 0, 'Please Edit', 'Katigbak', 'jen.katigbak@fca.edu.ph', '9199899208', '', 'Brgy. San Jose', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Vendor', '2023-01-24', '2023-01-24 11:59:52'),
(159, 1, 12, 167, 0, 'Mrs.', 'Alma', 0, 'Please Edit', 'Sanchez', 'purchasing.spli@gmail.com', '9661366995', '', 'Please Edit', 'Laguna', 'San Pablo City', '4000', '4000', 'Unspecified', 'Unspecified', '', '2023-09-04 15:56:07'),
(160, 1, 12, 171, 0, 'Mrs.', 'Shiela', 0, 'Please Edit', 'Del Monte', 'shiela.delmonte@fca.edu.ph', '9052268965', '', 'Brgy. Sto. Niño', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Church Administrator', '2023-02-17', '2023-02-17 12:32:32'),
(161, 1, 12, 170, 0, 'Mrs.', 'Jerina', 0, 'Delos Reyes', 'Katigbak', 'jerinadelosreyes@gmail.com', '9168373419', '0495030605', '634 San Diego', 'Laguna', 'San Pablo City', '4000', '4000', 'Born Again', 'Accounting Associate', '', '2023-08-01 14:14:05'),
(162, 1, 12, 174, 0, 'Mrs.', 'Marilyn', 0, 'Unspecified', 'Yason', 'mhalen45@gmail.com', '9499564154', '09499564154', 'Sitio Subac Brgy. Sto. Niño', 'Laguna', 'San Pablo', '4000', '4000', 'Catholic', 'Private Employee', '2023-05-23', '2023-05-23 12:58:26'),
(163, 1, 14, 175, 0, 'Ms.', 'Joan Rose', 0, '', 'De La Cruz', 'joanredomadelacruz@gmail.com', '9667829370', '', 'Block 18 Lot 29 Phase I Greenview Eastwood Subdivi', 'Rizal', 'Manila', '1860', '1860', 'Christian', 'Consultant', '2023-06-24', '2023-06-24 10:51:07'),
(164, 1, 12, 176, 0, 'Mrs.', 'Marinel ', 0, 'Gapor', 'Togonon', 'togononmarinel05@gmail.com', '9919501026', '', '9054 purok 3 brgy sto.nino', 'Laguna ', 'San Pablo City ', '4000', '4000', 'Catholic ', 'House keeper ', '2023-06-26', '2023-06-26 12:19:36'),
(165, 1, 12, 177, 0, 'Mrs.', 'Adrianne', 0, 'Velasco', 'Dimapilis', 'adriannevelasco0121@gmail.com', '9087653739', '', '215 brgy san jose', 'Laguna', 'San pablo city', '4000', '4000', 'Roman catholic', 'Registered Nurse / Clinical In', '2023-07-05', '2023-07-05 21:14:21'),
(166, 1, 13, 177, 0, 'Mr.', 'JohnRey', 0, '', 'Dimapilis', 'adriannevelasco0121@gmail.com', '9983277531', '', '215 brgy san jose', 'Laguna', 'San pablo city', '4000', '4000', 'Roman Catholic', 'Self owned business', '2023-07-05', '2023-07-05 21:16:41'),
(167, 1, 13, 178, 0, 'Mr.', 'Niel Patrick', 0, '', 'Jaron', 'nielpatrick.jaron@gmail.com', '9855492600', '', 'Brgy', 'Laguna', 'San Pablo', '4000', '4000', 'Roman Catholic', '123', '2023-07-07', '2023-07-07 10:58:54'),
(168, 1, 12, 180, 0, 'Mrs.', 'Niña', 0, 'Dela Cruz', 'Aningalan', 'nmj_12@yahoo.com', '9175406900', '', 'Brgy. sta elena', 'Laguna', 'San pablo city', '4000', '4000', 'Catholic', 'Businesswoman', '2023-07-10', '2023-07-10 10:30:47'),
(169, 1, 13, 181, 0, 'Mr.', 'Test', 0, '', 'Account', 'test.account@fca.edu.ph', '9123456789', '', 'as', 'a', 'a', '4000', '4000', 'a', 'a', '2023-07-11', '2023-07-11 14:53:11'),
(170, 1, 12, 182, 0, 'Ms.', 'Zaira Jean', 0, 'N/A', 'Alinea', 'zairajeanalinea@gmail.com', '9494270740', '', 'Sitio 7 Brgay. Bayanihan ', 'Quezon', 'Bayanihan', '4326', '4326', 'Evangelical Christian', 'Teacher', '2023-07-12', '2023-07-12 10:42:43'),
(171, 1, 12, 185, 0, 'Mrs.', 'lauriz', 0, 'gopez', 'hinton', 'laurizhinton@yahoo.com', '9175770308', '', '7010 mercury st adb subd brgy del remedio', 'laguna', 'san pablo city', '4000', '4000', 'born again christian', 'businesswoman', '2023-07-14', '2023-07-14 09:14:05'),
(172, 1, 14, 99, 0, 'Mr.', 'Jose III', 0, '', 'Papica', 'papicajose716@gmail.com', '9466480872', '', 'Bria Subdivision Brgy. San Gregorio', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Field Marketing', '', '2023-07-14 11:15:49'),
(173, 1, 12, 186, 0, 'Mrs.', 'Krizzle Ann', 0, 'Banayo', 'Bacsa', 'rommar.bacsa@gmail.com', '9924872558', 'n/a', '216 R.Magsaysay st. City Subdivision', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholi', 'Onlineseller', '2023-07-14', '2023-07-14 13:54:33'),
(174, 1, 12, 188, 0, 'Mrs.', 'janice', 0, 'coracero', 'coracero', 'janicecoracero16@gmail.com', '9202586111', '', 'guadalupe subd. phase 1', 'Laguna', 'san pablo city', '4000', '4000', 'inc', 'employee', '', '2023-07-16 15:13:27'),
(175, 1, 12, 189, 0, 'Ms.', 'Princes', 0, 'n/a', 'Lucero', 'princeslucero26@hotmail.com', '9186650692', '', 'Brgy. Quipot Tiaong ', 'Quezon', 'Tiaong', '4325', '4325', 'Catholic', 'Admin Officer', '2023-07-17', '2023-07-17 14:26:50'),
(176, 1, 12, 190, 0, 'Mrs.', 'Eva', 0, 'Aningalan', 'Fandialan', 'fandialaneva@gmail.com', '9675631461', 'NA.', 'Santa elena', 'Laguna', 'San pablo', '4001', '4001', 'Cahtolic', 'House wife', '2023-07-17', '2023-07-17 20:38:05'),
(177, 1, 12, 192, 0, 'Mrs.', 'Mary Elaine', 0, 'Cosico', 'Gamit', 'Meccosico2003@hotmail.com', '9189205375', '', 'Yambo St Sampaloc Lake Court Subd Concepcion', 'Laguna', 'San Pablo City', '4000', '4000', 'Roman Catholic', 'Employee', '2023-07-22', '2023-07-22 11:40:11'),
(178, 1, 12, 193, 0, 'Mrs.', 'agnes', 0, 'na', 'maloles', 'agnes5maloles@gmail.com', '9959650246', '', 'brgy uno alaminos laguna', 'Laguna', 'Alaminos', '4001', '4001', 'catholic', 'house wife', '2023-07-24', '2023-07-24 11:06:28'),
(179, 1, 12, 194, 0, 'Ms.', 'Louvi Lyn ', 0, 'Martin', 'Martin ', 'louvilynm@gmail.com', '9128677861', '', '971 Barangay San Cristobal San Pablo City Laguna ', 'Laguna ', 'San Pablo ', '4000', '4000', 'Catholic ', 'businesswoman ', '2023-07-24', '2023-07-24 11:15:31'),
(181, 1, 13, 195, 0, 'Mr.', 'Dennis', 0, '', 'Pundano', 'angelica.pundano.wat2016@gmail.com', '9611838319', '', 'Pundano Street Barangay Talisay ', 'Quezon', 'Tiaong', '4325', '4325', 'Roman Catholic', 'Farmer', '2023-07-26', '2023-07-26 12:06:57'),
(182, 1, 13, 196, 0, 'Mr.', 'Mark Alvin ', 0, '', 'Dayo', 'markalvindayo@gmail.com', '9260778889', '', '8 2nd St. Brgy. VI-D lakeside park Subd', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Employee', '2023-07-26', '2023-07-26 12:17:37'),
(183, 1, 12, 199, 0, 'Mrs.', 'Maria Felina', 0, 'N/A', 'Reyes', 'gillyreyes53@gmail.com', '9956794506', '', '285 C Brion St. San Pablo City', 'Laguna', 'San Pablo', '4000', '4000', 'Catholic', 'Tutor', '2023-07-26', '2023-07-26 12:23:17'),
(184, 1, 13, 197, 0, 'Mr.', 'LEANDRO', 0, '', 'PORTUGAL', 'lean.portugal@cardmri.com', '9295595434', '', '780 SAN CRISTOBAL ', 'LAGUNA', 'SAN PABLO CITY', '4000', '4000', 'ROMAN CATHOLIC', 'AREA MANAGER', '2023-07-26', '2023-07-26 19:57:52'),
(185, 1, 12, 197, 0, 'Mrs.', 'MARJEALYN', 0, 'PACIA', 'PORTUGAL', 'marjealynportugal2@gmail.com', '9090030054', '', '780 SAN CRISTOBAL', 'LAGUNA', 'SAN PABLO CITY', '4000', '4000', 'ROMAN CATHOLIC', 'COLLEGE PROFESSOR', '2023-07-26', '2023-07-26 20:00:40'),
(186, 1, 13, 200, 0, 'Mr.', 'Steven', 0, '', 'Villanueva', 'snvillanueva@gmail.com', '9228649345', '', '188 Dona Francica St. Teomora Village P2 San Gabie', 'Laguna', 'San Pablo City', '4000', '4000', 'Born Again Christian', 'DevOps Engineer', '2023-07-27', '2023-07-27 15:01:35'),
(187, 1, 12, 201, 0, 'Mrs.', 'Elsie', 0, 'N/A', 'Chavez', 'chvzelsie@gmail.com', '9942095433', '', 'Brgy. San Ignacio Sitio Malabo', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'DH', '2023-07-28', '2023-07-28 11:32:02'),
(188, 1, 13, 202, 0, 'Mr.', 'Gino Paolo', 0, '', 'Dones', 'gpld@outlook.com', '9060918507', '0427100282', '0690 Maharlika Highway Brgy. Lalig', 'Quezon', 'Tiaong', '4325', '4325', 'Catholic', 'NA', '', '2023-08-15 07:49:00'),
(189, 1, 12, 202, 0, 'Ms.', 'Lailanie', 0, 'Garcia', 'Garcia', 'Lailaniecg@gmail.com', '9171192487', '', '0690 Maharlika Highway Baranggay Lalig', 'Quezon', 'Tiaong', '4325', '4325', 'Catholic', 'Self employed ', '', '2023-08-08 09:54:29'),
(190, 1, 12, 150, 0, 'Mrs.', 'Rhoda Lynn', 0, 'Pessina', 'Dayo', 'rhodalynn.p.dayo@gmail.com', '9778599565', 'NA', 'Frontline Center Brgy. Sto. Nino', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'School Director', '2023-07-31', '2023-07-31 14:41:14'),
(191, 1, 12, 203, 0, 'Ms.', 'Marifel', 0, 'Katigbak', 'Katigbak', 'katigbakmarifel@gmail.com', '9190024349', 'None', '0717 Bañagale Subd. Brgy. San Jose Malamig', 'Laguna', 'San Pablo City', '4000', '4000', 'Born Again Christian', 'Housewife', '2023-08-08', '2023-08-08 19:04:48'),
(192, 1, 12, 205, 0, 'Mrs.', 'Donna Jane', 0, 'Lacbay', 'Faylon', 'donnajane.lacbay@gmail.com', '9162424106', '', 'Blk 13 Lot 9 Kingsrow Subd.', 'Laguna', 'San Pablo City', '4000', '4000', 'Bornagain Christian ', 'Production Supervisor ', '2023-08-10', '2023-08-10 13:28:38'),
(193, 1, 12, 206, 0, 'Mrs.', 'Jay Lyn', 0, 'Ramos', 'Villareal', 'jaylyn.villareal@deped.gov.ph', '9463799460', '', 'Sitio  Ibaba Purok 2 Brgy. San Ignacio', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'Teacher', '2023-08-11', '2023-08-11 11:50:37'),
(194, 1, 13, 208, 1, 'mr', 'Teodoro Jr', 0, '', 'Balaaldia', 'roy.balaaldia@gmail.com', '9498769815', '', 'Renmar Ville Brgy. San Ignacio', 'Laguna', 'San Pablo', '4000', '4000', 'Protestant', 'Wed Designer', '', '2023-08-17 13:30:37'),
(195, 1, 13, 108, 0, 'Mr.', 'Emilio John ', 0, '', 'Yuson', 'sevenzen.101@gmail.com', '9182754291', '', '217 Brgy. Sta. Maria Magdalena', 'Laguna', 'San Pablo City', '4000', '4000', 'Roman Catholic', 'Email Support Representative', '', '2023-08-20 21:31:18'),
(196, 1, 14, 209, 0, 'Ms.', 'Elisha Mae', 0, '', 'Aramil', 'emraramil17@gmail.com', '9983607228', '(049) 521 1443', 'Magcase Ville Subd. Brgy. Sto Cristo', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian - Baptist', 'N/A', '2023-08-23', '2023-08-23 14:31:20'),
(197, 1, 12, 209, 0, 'Ms.', 'Shirley', 0, 'Tolentino', 'Ronquillo', 'she.ronquillo15@gmail.com', '9060934435', '(049) 521 1443', 'Magcase Ville Subd. Brgy. Sto Cristo', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian-Baptist', 'Freelance Telemarketer', '2023-08-23', '2023-08-23 14:33:10'),
(198, 1, 12, 210, 0, 'Mrs.', 'Jeacel', 0, 'Pasumbal', 'Azores', 'jeacelazores@yahoo.com', '9556882242', 'N/a', 'house #42purok 2 Brgy Soledad ', 'Laguna', 'San Pablo City ', '4ooo', '4ooo', 'Catholic', 'Housewife', '2023-08-24', '2023-08-24 14:13:38'),
(199, 1, 14, 212, 0, 'Ms.', 'Judea', 0, '', 'De Los Santos', 'judea.delossanto@thefrontline.asia', '9274203409', '', 'Frontline Center Sitio Subac Road', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian ', 'HRAdmin/Financial Head', '2023-08-25', '2023-08-25 09:16:55'),
(200, 1, 12, 215, 0, 'Mrs.', 'Mary Jane', 0, 'Mendoza', 'Andaya', 'emjhaiye0528@gmail.com', '9271280573', '', '160 P. Alcantara Street Brgy 2D', 'Laguna', 'San Pablo City', '4000', '4000', 'Catholic', 'business owner', '2023-08-25', '2023-08-25 13:53:24'),
(201, 1, 13, 213, 0, 'Mr.', 'Takahiko', 0, '', 'Sato', 'satolaarni1106@gmail.com', '9854030692', '', '1505 PALAD STREET BRGY. BAGONG ANYO ', 'QUEZON ', 'DOLORES', '4326', '4326', 'BUKYO', 'N/A', '2023-08-25', '2023-08-25 19:34:10'),
(202, 1, 12, 216, 0, 'Mrs.', 'Pearlyn', 0, 'Cordero', 'Frago', 'corderopearlyn1991@gmail.com', '9361618221', '', 'Santo Nino', 'Laguna', 'San Pablo City', '4000', '4000', 'Christian', 'Teacher', '2023-08-29', '2023-08-29 12:13:59'),
(203, 1, 12, 217, 0, 'Mrs.', 'jeacel', 0, 'visleño', 'azores', 'jeacelazores@yahoo.com', '9556882242', 'n/a', 'House #42 purok 2 brgy soledad', 'laguna', 'san pablo city ', '4000', '4000', 'catholic', 'housewife', '2023-08-29', '2023-08-29 18:03:41'),
(204, 1, 14, 218, 0, 'Ms.', 'Althea Beatrice', 0, '', 'Sombillo', 'sombilloalthea0@gmail.com', '9925281373', '', 'Baloc Road Homeowners Blk 4 Lot 5 0331', 'Laguna', 'San Pablo', '4000', '4000', 'Christian', 'Online Seller', '2023-09-04', '2023-09-04 07:58:47'),
(205, 1, 12, 219, 0, 'Mrs.', 'Jocelyn', 0, 'Deyparine', 'Aquino', 'jocelyn.aquino0923@gmail.com', '9494836496', '', 'Blk 64 Lt 2 Bria Homes San Gregorio', 'Laguna', 'San Pablo City Lagun', '4000', '4000', 'Catholic', 'Project Manager', '2023-09-07', '2023-09-07 17:39:05'),
(206, 1, 13, 219, 0, 'Mr.', 'Nichole Eljude', 0, '', 'Aquino', 'nickoa79@gmail.com', '9494836494', '', 'Blk 64 Lt 2 Bria Homes San Gregorio', 'Laguna', 'San Pablo City Lagun', '4000', '4000', 'Catholic', 'Operations Manager', '2023-09-07', '2023-09-07 17:40:15'),
(207, 1, 13, 192, 0, 'Mr.', 'Christian Alfredo', 0, '', 'Gamit', 'christianalfredo.gamit@gmail.com', '9296752493', '', '434 yambo st. sampaloc lake court subd.', 'Laguna', 'San Pablo city', '4000', '4000', 'Catholic ', 'Employee', '2023-09-11', '2023-09-11 15:32:37'),
(208, 1, 12, 221, 0, 'Mrs.', 'Jaheizer Leianne', 0, 'Da', 'Pasimio', 'liannepasimio22@gmail.com', '9190066471', '', '4 Maharlika haay brgy san ignacio', 'laguna', 'san pablo city', '4000', '4000', 'christian', 'businesswoman', '2023-09-14', '2023-09-14 14:56:38'),
(209, 1, 12, 222, 0, 'Mrs.', 'Salem Joy ', 0, 'Santonia', 'Gonzales', 'sjgonzales.law21@gmail.com', '9617971181', '', 'Sannera SPC Brgy. San Antonio 2', 'Laguna', 'San Pablo ', '4000', '4000', 'Born Again', 'Associate Pastor', '2023-09-29', '2023-09-29 07:39:20'),
(210, 1, 13, 225, 0, 'Mr.', 'Jojo', 0, '', 'Gabutero', 'jojo.gabutero@franklinbaker.com', '9171591385', '', 'Sanvicente subdivision Brgy San Vicente Blk14 lot ', 'Laguna', 'San Pablo city', '4000', '4000', 'Catholic', 'Professional Mechanical Engine', '2023-10-02', '2023-10-02 08:22:42'),
(211, 1, 13, 226, 0, 'Mr.', 'Tester', 0, '', 'FCA', 'tester@fca.edu.ph', '1234567891', '', 'Sitio Subac Brgy. Sto. Niño', '123123', '123123', '123', '123', '12312', '123', '2023-11-16', '2023-11-16 10:42:16'),
(212, 1, 13, 229, 0, 'Mr.', 'Mark Christopher', 0, '', 'Bumagat', 'mark.bumagat@frontlinebusiness.com.ph', '9752155213', '09752155213', 'San Miguel', 'Laguna', 'Alaminos', '4001', '4001', 'Roman Catholic', 'Web Developer', '2023-11-28', '2023-11-28 12:44:34'),
(213, 1, 13, 230, 0, 'Mr.', 'Ramon', 0, '', 'Plaza', 'monmon.plaza@gmail.com', '9111234582', '', '565  Facundo Street', 'Metro Manila', 'Pasay ', '1000', '1000', 'Catholic', 'Tambay', '2023-11-29', '2023-11-29 07:53:35'),
(214, 1, 13, 231, 0, 'Mr.', 'Angelito', 0, '', 'Alvarez', 'litocwg@gmail.com', '9762384575', '', 'Sta Ana Village Sta Ana', 'Laguna', 'San Pablo', '4000', '4000', 'Catholic', 'Quality Analyst', '2024-02-08', '2024-02-08 07:29:59'),
(215, 1, 13, 44, 0, 'Mr.', 'xx', 0, '', 'xx', 'xx@ccc.com', '1233232132', '', 'qqq', 'qq', 'qqq', 'qqqqq', 'qqqqq', 'test', 'test', '2024-02-21', '2024-02-21 08:49:24'),
(216, 1, 13, 44, 0, 'Ms.', 'xx22', 0, '', 'xx22', '2xx@ccc.com', '1233232132', '', 'qqq', 'qq', 'qqq', 'qqqqq', 'qqqqq', 'qe', 'weqw', '2024-02-21', '2024-02-21 08:49:50'),
(217, 0, 13, 233, 1, 'mr', 'Mark Ryan', 0, '', 'Merin', 'merin.ryanmark@gmail.com', '09491040057', '', 'Dona Felisa st. Teomora phase 1', 'Laguna', 'San Pablo City', '4000', 'Philippines', 'Protestant', 'Computeran', '2024-03-15 08:55:00', '2024-03-15 08:55:00'),
(218, 0, 12, 234, 1, 'mrs', 'Emilou', 0, 'Gabanes', 'Flores', 'e.gabanes@gmail.com', '09667427409', '000', 'Blk. 19 Lot 29, Paseo Kahel Street', 'Hacienda Escudero', 'Tiaong Quezon', '4325', 'Philippines', 'Born Again Christian', 'Housewife', '2024-03-15 14:43:32', '2024-03-15 14:43:32'),
(219, 0, 12, 235, 1, 'ms', 'Neneth', 0, 'Necita Buban Basmayo', 'Obenita', 'nenethobenita@gmail.com', '09155167526', '5545826', 'Block 97 Lot 1 Main Avenue BellaVita Subdivision B', 'Laguna', 'San Pablo', '4000', 'Philippines', 'Catholic', 'Teacher', '', '2024-03-25 17:18:26'),
(220, 0, 13, 235, 1, 'mr', 'Rolando', 0, 'Maria Elena Orlanda ', 'Leonor', 'allanleonor79sky@gmail.com', '09452337976', '5545826', 'Block 97 Lot 1 Main Avenue BellaVita Subdivision B', 'Laguna', 'San Pablo', '4000', 'Philippines', 'Catholic', 'General Manager Uncle Eddy\\\'s ', '2024-03-25 17:21:56', '2024-03-25 17:21:56');

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
  `parents_created` varchar(20) NOT NULL,
  `parents_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_parents`
--

INSERT INTO `fcav2_parents` (`parents_aid`, `parents_is_active`, `parents_email`, `parents_fname`, `parents_lname`, `parents_father_income`, `parents_mother_income`, `parents_financier_name`, `parents_financier_relationship`, `parents_financier_occupation`, `parents_financier_income`, `parents_created`, `parents_datetime`) VALUES
(48, 1, 'cyrenemlumabas@gmail.com', 'Cyrene', 'Lumabas', '1', '', 'Janet Lumabas', 'Biological mother', 'Housewife', '10000', '2022-11-24', ''),
(50, 1, 'meciebernardino@gmail.com', 'Myel Gracie', 'Bernardino', '12000', '12000', 'Marjorie Bernardino', 'siblings', 'Communication Staff', '12000', '2023-01-04', '2023-09-04 11:39:27'),
(51, 1, 'alexander.ubeda@gmail.com', 'Trixy', 'Ubeda', '', '', 'Alexander P. Ubeda II', 'Spouse', 'IT Professional', '15000', '2023-01-10', '2024-03-19 08:34:33'),
(53, 1, 'frednhel22@gmail.com', 'Fermino', 'Jumawan Jr.', '', '', 'Nelisa Jumawan', 'Mother', 'school Principal', '200000', '2023-01-12', '2023-01-12 09:40:14'),
(54, 1, 'sel.claveria@fca.edu.ph', 'Criselda', 'Claveria', '', '', 'Frontline Business Solutions Inc.', 'Sponsor', 'IT Company', '1', '2023-01-18', '2023-01-18 08:58:55'),
(58, 1, 'joerge.callejo@fca.edu.ph', 'Joerge Carlou', 'Callejo', '', '', 'Joerge Carlou Callejo', 'Father', 'CI Officer', '20000', '2023-01-19', '2023-01-19 10:06:08'),
(60, 1, 'acalcheska@gmail.com', 'Cheska', 'Acal', '', '', 'Elvin Acal Cheska Acal', 'Parents', 'ESL Teacher Call Cen', '35000', '2023-01-19', '2023-07-14 11:43:27'),
(61, 1, 'noriel.alcantara@fca.edu.ph', 'Noriel', 'Alcantara', '', '', 'Noriel Alcantara', 'Father', 'OFW', '100000', '2023-01-19', '2023-01-30 08:43:05'),
(62, 1, 'fatimaeulynne@gmail.com', 'Fatima', 'Alcantara', '15000', '15000', 'Eric Jason Alcantara Fatima Alcantara', 'Parents', 'Please Edit', '30000', '2023-01-19', '2023-07-14 11:43:05'),
(63, 1, 'jennilyn.delossantos@fca.edu.ph', 'Jennilyn', 'Delos Santos', '', '', 'Jennilyn Delos Santos', 'Mother', 'House Parent', '13000', '2023-01-19', '2023-01-19 10:33:45'),
(64, 1, 'erlyn.amante@fca.edu.ph', 'Erlyn', 'Amante', '', '', 'Errol Albert Amante', 'Father', 'Please Edit', '1', '2023-01-19', '2023-01-19 10:37:12'),
(65, 1, 'minelen.alvaran@fca.edu.ph', 'Minelen', 'Alvaran', '', '', 'Minelen Alvaran', 'Mother', 'Grocery Store Owner', '15000', '2023-01-19', '2023-01-19 10:40:38'),
(66, 1, 'marlon.basan@fca.edu.ph', 'Marlon', 'Basan', '', '', 'Marlon Basan', 'Father', 'OFW', '40000', '2023-01-19', '2023-01-19 10:45:49'),
(67, 1, 'marivicas41@gmail.com', 'Marivic', 'Salvador', 'NA', 'NA', 'Marivic Salvador', 'Grandmother', 'Virtual Assistant', '15000', '2023-01-19', '2023-07-18 14:52:17'),
(68, 1, 'maricar.coronado@fca.edu.ph', 'Maricar', 'Coronado', '', '', 'Please Edit', 'Grandmother', 'Please Edit', '15000', '2023-01-19', '2023-01-19 10:52:54'),
(69, 1, 'david.covic@thefrontline.asia', 'David', 'Covic', '', '', 'Ma. Aiza Covic', 'Mother', 'Teacher', '10000', '2023-01-19', '2023-01-31 08:36:41'),
(70, 1, 'ek.manalo@fca.edu.ph', 'Eileen Krystelle', 'Manalo', '41699', '33000', 'Ariel De Guia Eileen Krystelle Manalo', 'Parents', 'Police Officer Nurse', '74699', '2023-01-19', '2023-01-19 11:02:39'),
(71, 1, 'jamaica.delacruz@fca.edu.ph', 'Jamaica', 'Dela Cruz', '40000', '50000', 'Reginald Roy Dela Cruz Jamaica Angelica Dela Cruz', 'Parents', 'Senior Science Resea', '90000', '2023-01-19', '2023-01-19 11:06:15'),
(72, 1, 'xena.bernas@fca.edu.ph', 'Xena', 'Bernas', '40000', '15000', 'Rizuji Dela Rosa Xena Bernas', 'Parents', 'Business Owners', '55000', '2023-01-19', '2023-01-19 11:09:25'),
(73, 1, 'marie.delosreyes@fca.edu.ph', 'Marie', 'Delos Reyes', '35000', '40000', 'Jerico Delos Reyes Marie Chrizza Delos Reyes', 'Parents', 'Bank Teller Nurse', '75000', '2023-01-19', '2023-01-19 11:12:19'),
(74, 1, 'micaela.bunquin@fca.edu.ph', 'Micaela Carina', 'Bunquin', '21000', '14000', 'Jhon Galmer Escondo Micaela Carina Bunquin', 'Parents', 'Cook Marketer', '35000', '2023-01-19', '2023-01-19 11:16:52'),
(75, 1, 'donna.armedilla@fca.edu.ph', 'Donna', 'Armedilla', '20000', '20000', 'Micko Favorito Donna Armedilla', 'Parents', 'Front Desk Reception', '40000', '2023-01-19', '2023-01-19 12:40:26'),
(76, 1, 'ariane.favorito@fca.edu.ph', 'Arianne', 'Favorito', '15000', '15000', 'Mike Jerome', 'Father', 'Self Employed', '15000', '2023-01-19', '2023-01-19 12:44:31'),
(77, 1, 'je.kua@fca.edu.ph', 'Johanna Erika', 'Kua', '30000', '18000', 'Jericho Kua Johanna Erika Kua', 'Parents', 'Manager HR Superviso', '48000', '2023-01-19', '2023-01-19 12:48:09'),
(78, 1, 'boniepaulinelee08@gmail.com', 'Bonie Pauline', 'Lee', '45000', '', 'Alecci Carlson Lee', 'Father', 'Teacher', '45000', '2023-01-19', '2023-07-24 14:37:25'),
(79, 1, 'cg.manalang@fca.edu.ph', 'Charmaine Grace', 'Manalang', '', '', 'Andrian Gil Manalang Charmaine Grace Manalang', 'Parents', 'Self Employed Govern', '1', '2023-01-19', '2023-01-19 12:54:18'),
(80, 1, 'marasiganria20@gmail.com', 'Ria', 'Marasigan', '50000', '', 'Irentom Marasigan', 'Father', 'OFW', '50000', '2023-01-19', '2023-07-14 13:20:49'),
(81, 1, 'jm.marquez@fca.edu.ph', 'Johanna Mae', 'Marquez', '30000', '30000', 'Patriech Lester Marquez Johanna Mae Marquez', 'Parents', 'Business Owners', '60000', '2023-01-19', '2023-01-19 13:01:14'),
(82, 1, 'ac.delacruz@fca.edu.ph', 'Anacarolina', 'Dela Cruz', '', '', 'Henrik Nool', 'Spouse', 'Seaman', '80000', '2023-01-19', '2023-01-19 13:04:54'),
(83, 1, 'venus.pagkaliwangan@fca.edu.ph', 'Venus Lei', 'Pagkaliwangan', '', '', 'Venus Lei Pagkaliwangan', 'Mother', 'Business Owner', '50000', '2023-01-19', '2023-01-19 13:07:44'),
(84, 1, 'ivymangurali@gmail.com', 'Ivy Joy', 'Mangurali', '15000', '30000', 'Kurt Cederick Pangilinan Ivy Joy Mangurali', 'Parents', 'IT Professional Admi', '45000', '2023-01-19', '2023-07-14 11:43:49'),
(85, 1, 'maria.javier@fca.edu.ph', 'Maria Paula Peth', 'Javier', '', '', 'Maria Paula Peth Javier', 'Mother', 'Please Edit', '22000', '2023-01-19', '2023-01-19 14:04:23'),
(86, 1, 'annabel.ramirez@fca.edu.ph', 'Annabel', 'Ramirez', '', '', 'Reymond Ramirez', 'Father', 'Architect', '50000', '2023-01-19', '2023-01-19 14:08:55'),
(87, 1, 'clarize.ronquillo@fca.edu.ph', 'Clarize', 'Ronquillo', '', '50000', 'Clarize Ronquillo', 'Mother', 'Accountant', '50000', '2023-01-19', '2023-01-19 14:11:41'),
(88, 1, 'kimberly.rosales@fca.edu.ph', 'Kimberly Ann', 'Rosales', '', '', 'Kimberly Ann Rosales', 'Mother', 'Business Owner', '40000', '2023-01-19', '2023-01-19 14:14:48'),
(89, 1, 'princessdannah@gmail.com', 'Princess Diana', 'Sta Cruz', '200000', '', 'Achilles Sta. Cruz', 'Father', 'Physician/Surgeon', '200000', '2023-01-19', '2023-07-24 14:37:05'),
(90, 1, 'rozel.talento@fca.edu.ph', 'Rozel', 'Talento', '65000', '', 'Rozel Talento', 'Father', 'Plant Maintenance Ma', '65000', '2023-01-19', '2023-01-19 14:27:30'),
(91, 1, 'rosemaine.castillo@fca.edu.ph', 'Rosemaine', 'Castillo', '', '', 'Joe Mari Castillo Rosemaine Castillo', 'Parents', 'Government Employee ', '50000', '2023-01-20', '2023-01-20 09:21:41'),
(92, 1, 'ml.dimailig@fca.edu.ph', 'Ma. Larissa', 'Dimailig', '', '', 'Cyrus Joseph Dimailig Ma. Larissa Dimailig', 'Parents', 'Sales Supervisor Bus', '70000', '2023-01-20', '2023-01-20 09:25:51'),
(93, 1, 'gladys.general@fca.edu.ph', 'Gladys', 'General', '', '', 'John Aries General', 'Father', 'Engineer', '1', '2023-01-20', '2023-01-20 09:33:07'),
(94, 1, 'jc.lat@fca.edu.ph', 'Janis Catherine', 'Lat', '', '', 'Raymond Lat Janis Catherine Lat', 'Parents', 'Sales Agent Online S', '40000', '2023-01-20', '2023-01-20 09:43:50'),
(95, 1, 'averose.mendoza@fca.edu.ph', 'Averose', 'Mendoza', '', '', 'Leo Mendoza Averose Mendoza', 'Parents', 'Business Owner Finan', '110000', '2023-01-20', '2023-01-20 09:47:38'),
(96, 1, 'maureen.orillaneda@fca.edu.ph', 'Maureen', 'Orillaneda', '', '', 'Maureen Orillaneda', 'Mother', 'QA Manager', '80000', '2023-01-20', '2023-01-20 09:51:12'),
(97, 1, 'msc.panlaqui@fca.edu.ph', 'Maria Sasha Camille', 'Panlaqui', '', '', 'Darren Abram Panlaqui', 'Father', 'Employee', '90000', '2023-01-20', '2023-01-20 09:56:04'),
(99, 1, 'khandydeluna@gmail.com', 'Khandy', 'De Luna', '', '', 'Khandy De Luna', 'Mother', 'Seller', '1', '2023-01-20', '2023-07-14 13:20:30'),
(100, 1, 'minjun062017@icloud.com', 'Clarissa', 'Bicomong', '', '', 'Clarissa Bicomong', 'Mother', 'N/A', '30000', '2023-01-20', '2023-07-17 13:07:42'),
(101, 1, 'sonny.napay@fca.edu.ph', 'Sonny', 'Napay', '', '', 'Sonny Napay', 'Grandfather', 'Electrician', '15000', '2023-01-20', '2023-01-20 10:17:36'),
(102, 1, 'mj.cristobal@fca.edu.ph', 'Mary Jane', 'Cristobal', '', '', 'David Joseph Cristobal Mary Jane Cristobal', 'Parents', 'Retail Freelance', '30000', '2023-01-20', '2023-01-20 10:21:08'),
(103, 1, 'catherine.buquing@fca.edu.ph', 'Catherine', 'Buquing', '', '', 'Heung Gyu Kim', 'Father', 'Business Owner', '110000', '2023-01-20', '2023-01-20 11:01:23'),
(104, 1, 'ilymarielorics@gmail.com', 'Rosemarie', 'Lorica', '', '', 'Ken Lorica Rosemarie Lorica', 'Parents', 'Business Owner Sales', '45000', '2023-01-20', '2023-07-14 14:18:41'),
(105, 1, 'sam.nipolo@thefrontline.asia', 'Samel', 'Nipolo', '', '', 'Samel Joseph Nipolo', 'Father', 'Camp Manager', '18000', '2023-01-20', '2023-02-02 08:46:19'),
(106, 1, 'edeliza.raras@fca.edu.ph', 'Edeliza', 'Raras', '', '', 'Eduardo Raras', 'Father', 'Engineer', '150000', '2023-01-20', '2023-01-20 11:11:52'),
(107, 1, 'jeannie.anlacan@fca.edu.ph', 'Jeannie', 'Anlacan', '', '', 'Artemio Tipan Jr. Jeannie Anlacan', 'Parents', 'Bank Manager Financi', '190000', '2023-01-20', '2023-01-20 11:15:42'),
(108, 1, 'joanna.almanza@fca.edu.ph', 'Joanna', 'Almanza', '', '', 'Emilio John Yuson Joanna Almanza', 'Parents', 'Email Support Repres', '55000', '2023-01-20', '2023-11-11 07:42:54'),
(109, 1, 'msquareded@gmail.com', 'Miriam Grace', 'Bongolan', '', '', 'Bayani Edwin Bongolan', 'Father', 'Missionary', '42000', '2023-01-20', '2023-07-17 10:43:19'),
(110, 1, 'juana.aglubat@fca.edu.ph', 'Juana', 'Aglubat', '', '', 'Christian Aglubat', 'Father', 'OFW', '35000', '2023-01-20', '2023-01-30 08:31:40'),
(111, 1, 'lk.belen@fca.edu.ph', 'Leslie Karen', 'Belen', '', '', 'Juan Lorenzo Belen Jr. Leslie Karen Belen', 'Parents', 'Dialysis Technician ', '43000', '2023-01-20', '2023-01-20 11:31:01'),
(112, 1, 'jp.doon@fca.edu.ph', 'Jervie Paul', 'Doon', '', '', 'Jervie Paul Doon', 'Father', 'Software Engineer', '100000', '2023-01-20', '2023-01-20 11:33:55'),
(113, 1, 'mahinhin.seraspi@fca.edu.ph', 'Mahinhin', 'Seraspi', '', '', 'Eleazar Francisco Jr. Mahinhin Seraspi', 'Parents', 'Freelancers', '40000', '2023-01-20', '2023-01-20 11:37:41'),
(114, 1, 'monique.nery@fca.edu.ph', 'Monique', 'Nery', '', '', 'Monique Nery', 'Mother', 'Food Technologist', '20000', '2023-01-20', '2023-01-20 11:41:15'),
(115, 1, 'lanie.calabia@gmail.com', 'Lanie', 'Calabia', '', '', 'Jay Anthony Calabia Lanie Calabia', 'Parents', 'Business Owners', '130000', '2023-01-20', '2023-07-19 10:47:25'),
(116, 1, 'kgalcantara@gmail.com', 'Kimberly', 'Alcantara', '', '', 'Louie Fradejas Kimberly Alcantara', 'Parents', 'ESL Teachers', '130000', '2023-01-20', '2023-07-12 12:15:02'),
(117, 1, 'rosendacuyson2014@gmail.com', 'Rosenda', 'Cuyson', '', '', 'Mamerto Salmorin Rosenda Cuyson', 'Parents', 'Installer Unspecifie', '35000', '2023-01-20', '2023-07-31 13:32:37'),
(118, 1, 'vciabal5685s@gmail.com', 'Veronese', 'Ciabal', '', '', 'Veronese Ciabal', 'Mother', 'Virtual Assistant', '80000', '2023-01-20', '2023-07-17 09:44:07'),
(119, 1, 'pb.virina@fca.edu.ph', 'Paula Blanca', 'Viriña', '', '', 'Ardieboy Katigbak', 'Father', 'Site Supervisor', '15000', '2023-01-20', '2023-01-20 11:58:48'),
(120, 1, 'rosemarie.robillos@fca.edu.ph', 'Rosemarie', 'Robillos', '', '', 'Sponsor', 'Sponsor', 'Sponsor', '1', '2023-01-20', '2023-01-20 12:02:34'),
(121, 1, 'leah.alwani@fca.edu.ph', 'Leah Anne', 'Alwani', '', '', 'Mr. Alwani', 'Father', 'Unspecified', '1', '2023-01-20', '2023-01-20 12:05:24'),
(122, 1, 'katherine.gabanes@fca.edu.ph', 'Katherine', 'Gabanes', '', '', 'Meldy Almeda', 'Mother', 'OFW', '100000', '2023-01-20', '2023-01-20 12:09:08'),
(125, 1, 'nimfa.alimagno@fca.edu.ph', 'Nimfa', 'Alimagno', '', '', 'Sponsored', 'Sponsored', 'Sponsored', '1', '2023-01-23', '2023-01-23 08:11:34'),
(126, 1, 'arianne.cueto@fca.edu.ph', 'Arianne', 'Cueto', '', '', 'Arianne Cueto', 'Mother', 'Unspecified', '1', '2023-01-23', '2023-01-23 10:20:59'),
(127, 1, 'janelle.empalmado@fca.edu.ph', 'Janelle Edriane', 'Empalmado', '', '', 'Lawrence Empalmado Janelle Edriane Empalmado', 'Parents', 'Unspecified', '1', '2023-01-23', '2023-01-23 09:25:44'),
(128, 1, 'aiza.chavez@fca.edu.ph', 'Aiza', 'Chavez', '', '', 'Sponsored', 'Sponsored', 'Sponsored', '1', '2023-01-23', '2023-01-23 09:30:11'),
(129, 1, 'bern.manosca@fca.edu.ph', 'Bern', 'Manosca', '', '', 'Sponsored', 'Sponsored', 'Sponsored', '1', '2023-01-23', '2023-01-23 09:33:55'),
(130, 1, 'donnabelmortilla@gmail.com', 'Donnabel', 'Mortilla', '', '', 'Scholar', 'Scholar', 'Scholar', '1', '2023-01-23', '2023-07-17 13:06:42'),
(131, 1, 'genalyn.buedad@fca.edu.ph', 'Genalyn', 'Buedad', '', '', 'Augusto Peña Jr. Genalyn Buedad', 'Parents', 'Employees', '180000', '2023-01-23', '2023-01-23 09:53:30'),
(132, 1, 'althea.sombillo@fca.edu.ph', 'Althea Beatrice', 'Sombillo', '', '', 'Arnulfo Sombillo', 'Father', 'Demolition Contracto', '18000', '2023-01-23', '2023-01-23 09:55:41'),
(133, 1, 'queen.loreyne@gmail.com', 'Quencee Loreyne', 'Bustamante', '', '', 'Erwin Bustamante', 'Father', 'Pastor', '10000', '2023-01-23', '2023-07-18 13:56:10'),
(134, 1, 'katigbakmarifel@gmail.com', 'Marifel', 'Katigbak', '', '', 'Academic Scholar', 'Academic Scholar', 'Academic Scholar', '1', '2023-01-23', '2023-07-17 13:06:20'),
(135, 1, 'leonila.catapang@fca.edu.ph', 'Leonila', 'Catapang', '', '', 'Academic Scholar', 'Academic Scholar', 'Academic Scholar', '1', '2023-01-23', '2023-01-23 10:06:39'),
(136, 1, 'michelle.rapal@fca.edu.ph', 'Michelle', 'Rapal', '', '', 'Michelle Rapal', 'Mother', 'Self Employed', '30000', '2023-01-23', '2023-01-23 10:10:31'),
(137, 1, 'mayliza.averion@fca.edu.ph', 'Mayliza', 'Averion', '', '', 'Academic Scholar', 'Academic Scholar', 'Academic Scholar', '1', '2023-01-23', '2023-01-23 10:14:50'),
(138, 1, 'balinesphebe@gmail.com', 'Phebe', 'Balines', '', '', 'Academic Scholar', 'Academic Scholar', 'Academic Scholar', '1', '2023-01-23', '2023-07-18 13:55:48'),
(139, 1, 'myrna.carona@fca.edu.ph', 'Myrna', 'Carona', '', '', 'Edzel Carona Myrna Carona', 'Parents', 'Driver Store Owner', '40000', '2023-01-23', '2023-01-23 10:35:08'),
(140, 1, 'grace.rom@fca.edu.ph', 'Grace', 'Rom', '', '', 'Grace Rom', 'Mother', 'OFW', '1', '2023-01-23', '2023-01-23 10:46:12'),
(141, 1, 'efren.tolentino@fca.edu.ph', 'Efren', 'Tolentino', '', '', 'Sponsored', 'Sponsored', 'Sponsored', '1', '2023-01-23', '2023-01-23 10:49:23'),
(142, 1, 'adriannevelasco0121@gmail.com', 'Adrianne', 'Dimapilis', '', '', 'Johnrey Dimapilis & Adrianne Dimapilis', 'Parents', 'Business Owner Regis', '40000', '2023-01-23', '2024-03-12 15:22:07'),
(144, 1, 'bethany.acoba@fca.edu.ph', 'Bethany', 'Acoba', '', '', 'Ralph Acoba Bethany Acoba', 'Parents', 'Operations Manager U', '85000', '2023-01-23', '2023-08-10 10:23:19'),
(145, 1, 'jerina.katigbak@fca.edu.ph', 'Jerina', 'Katigbak', '', '', 'John Paulo Katigbak Jerina Katigbak', 'Parents', 'Assistant Managing D', '1', '2023-01-23', '2023-01-23 11:04:14'),
(146, 1, 'kath.monterola@fca.edu.ph', 'Kathleen', 'Monterola', '', '', 'Kirby John Monterola Kathleen Monterola', 'Parents', 'Sales Executive Assi', '70000', '2023-01-23', '2023-01-23 11:08:00'),
(147, 1, 'shiela.cordero@fca.edu.ph', 'Shiela', 'Cordero', '', '', 'Grandparents', 'Grandparents', 'Grandparents', '1', '2023-01-23', '2023-01-23 11:11:05'),
(148, 1, 'sarah.delmonte@fca.edu.ph', 'Sarah Teresa', 'Del Monte', '', '', 'Pastor\'s Kid', 'Pastor\'s Kid', 'Pastor\'s Kid', '1', '2023-01-23', '2023-08-01 13:23:04'),
(149, 1, 'rina.dayan@fca.edu.ph', 'Rina', 'Dayan', '', '', 'Rina Dayan', 'Mother', 'Teacher', '1', '2023-01-24', '2023-01-31 09:08:55'),
(150, 1, 'cw.dayo@fca.edu.ph', 'Christian Wayne', 'Dayo', '', '', 'Christian Wayne Dayo Rhoda Lynn Dayo', 'Parents', 'Bank Executive Schoo', '1', '2023-01-24', '2023-02-01 09:44:10'),
(151, 1, 'dennis.bagsic@fca.edu.ph', 'Dennis', 'Bagsic', '', '', 'Dennis Bagsic', 'Father', 'School Security Head', '1', '2023-01-24', '2023-01-24 10:49:26'),
(152, 1, 'ftc@fca.edu.ph', 'FTC', 'Management', '', '', 'FTC', 'FTC', 'FTC', '1', '2023-01-24', '2023-01-30 10:29:33'),
(153, 1, 'maricar.deguzman@fca.edu.ph', 'Maricar', 'De Guzman', '', '', 'Ramir Doliente Maricar De Guzman', 'Parents', 'Service Crew Secreta', '33000', '2023-01-24', '2023-02-01 09:16:57'),
(155, 1, 'marinelle.fule@fca.edu.ph', 'Marinelle', 'Fule', '', '', 'Joven Fule Marinelle Fule', 'Parents', 'Doctor Unspecified', '1', '2023-01-24', '2023-01-24 11:16:43'),
(156, 1, 'venus.amarga@fca.edu.ph', 'Venus', 'Amarga', '', '', 'Lamberto Jovellanos Venus Amarga', 'Parents', 'Call Center Supervis', '1', '2023-01-24', '2023-01-24 11:22:43'),
(157, 1, 'marjorie.bondad@fca.edu.ph', 'Marjorie', 'Bondad', '', '', 'Anthony Bondad Marjorie Bondad', 'Parents', 'Business Owners', '1', '2023-01-24', '2023-01-24 11:27:19'),
(158, 1, 'kate.villarosa@fca.edu.ph', 'Keith', 'Villarosa', '', '', 'Earl Villarosa Keith Villarosa', 'Parents', 'OFW Unspecified', '1', '2023-01-24', '2023-02-02 10:48:26'),
(160, 1, 'florencia.delmonte@fca.edu.ph', 'Florencia', 'Del Monte', '', '', 'Pastor\'s Kid', 'Pastor\'s Kid', 'Pastor\'s Kid', '1', '2023-01-24', '2023-01-24 11:39:17'),
(161, 1, 'joanmeraveles25@gmail.com', 'Joan', 'Meraveles', '', '', 'Academic Scholar', 'Academic Scholar', 'Academic Scholar', '1', '2023-01-24', '2023-07-18 13:57:52'),
(162, 1, 'joan_santos1028@yahoo.com.ph', 'Joan', 'Pascual', '', '', 'Alvin Pascual', 'Father', 'Quantity Surveyor', '125000', '2023-01-24', '2023-07-13 11:57:03'),
(163, 1, 'melojean.empemano@fca.edu.ph', 'Melojean', 'Empemano', '', '', 'Sponsored', 'Sponsored', 'Sponsored', '1', '2023-01-24', '2023-01-24 11:48:43'),
(166, 1, 'jen.katigbak@fca.edu.ph', 'Jen Eloisa', 'Katigbak', '', '', 'Sponsored', 'Sponsored', 'Sponsored', '1', '2023-01-24', '2023-01-24 11:58:51'),
(167, 1, 'alma.sanchez@fca.edu.ph', 'Alma', 'Sanchez', '', '', 'Unspecified', 'Unspecified', 'Unspecified', '1', '2023-01-24', '2023-01-24 12:02:22'),
(171, 1, 'shiela.delmonte@fca.edu.ph', 'Shiela', 'Del Monte', '', '', 'Pastor\'s Kid', 'Pastor\'s Kid', 'Pastor\'s Kid', '1', '2023-02-17', '2023-02-17 12:40:33'),
(174, 1, 'marilyn.yason@fca.edu.ph', 'Marilyn', 'Yason', '1', '1', 'Marilyn Yason', 'Mother', 'Private Employee', '1', '2023-05-23', '2023-06-03 21:43:31'),
(175, 1, 'joanredomadelacruz@gmail.com', 'Joan Rose', 'De La Cruz', '', '', 'Joan Rose De La Cruz', 'Auntie', 'Consultant', '50000', '2023-06-24', '2023-06-24 10:48:57'),
(180, 1, 'nmj_12@yahoo.com', 'Niña', 'Aningalan', '', '', 'Niña Aningalan', 'Mother', 'Businesswoman', '150000', '2023-07-10', '2023-07-10 10:27:40'),
(182, 1, 'zairajeanalinea@gmail.com', 'Zaira Jean ', 'Alinea', '', '10000', 'Zaira Jean Alinea', 'Mother', 'Teacher', '10000', '2023-07-12', '2023-07-12 10:36:50'),
(185, 1, 'hintonunnah@gmail.com', 'Luciane', 'Hinton', '', '', 'lauriz hinton', 'mother', 'businesswoman', '100000', '2023-07-14', '2023-07-14 09:01:08'),
(186, 1, 'rommar.bacsa@gmail.com', 'Krizzle Ann ', 'Bacsa', '', '', 'Rommar Carlo S. Bacsa', 'Husband', 'Government Employee', '27000', '2023-07-14', '2023-07-14 13:47:43'),
(188, 1, 'janicecoracero16@gmail.com', 'Janice', 'Coracero', '', '', 'janice coracero', 'mother', 'employee', '50000', '2023-07-16', '2023-07-16 15:03:09'),
(189, 1, 'princeslucero26@hotmail.com', 'princes', 'lucero', '', '', 'Princes Lucero', 'Mother', 'Admin Officer', '35000', '2023-07-17', '2023-07-17 14:21:49'),
(190, 1, 'fandialaneva@gmail.com', 'Eva', 'Fandialan', '50000', '15000', 'Sergio H fandialan Jr.', 'Father', 'Businessman ', '50000', '2023-07-17', '2023-07-17 20:34:39'),
(192, 1, 'meccosico2003@hotmail.com', 'Mary elaine', 'Gamit', '', '', 'Mary Elaine Gamit', 'Mother', 'Employee', 'More than ', '2023-07-22', '2023-07-22 11:35:51'),
(193, 1, 'agnes5maloles@gmail.com', 'Agnes', 'Maloles', '', '', 'reynaldo maloles', 'father', 'merchandise', '10000', '2023-07-24', '2023-07-24 11:00:49'),
(194, 1, 'louvilynm@gmail.com', 'Louvi Lyn ', 'Martin', '', '', 'John Norven Avanzado', 'Father', 'contructor', '25000', '2023-07-24', '2023-07-24 11:12:54'),
(195, 1, 'angelica.pundano.wat2016@gmail.com', 'Angelica', 'Quijano', '30000', '45000', 'Rosemarie Moscare', 'Mother', 'OFW', '45000', '2023-07-26', '2023-07-26 11:22:48'),
(196, 1, 'markalvindayo@gmail.com', 'mark alvin', 'dayo', '', '', 'Mark Alvin Dayo', 'Father', 'Employee', '15000', '2023-07-26', '2023-07-26 12:10:39'),
(197, 1, 'marjealynportugal2@gmail.com', 'Marjealyn', 'Portugal', '', '', 'LEANDRO PORTUGAL', 'FATHER', 'AREA MANAGER', '40000', '2023-07-26', '2023-07-26 19:51:19'),
(199, 1, 'gillyreyes53@gmail.com', 'Maria Felina', 'Reyes', '', '', 'Maria Felina Reyes', 'Mother', 'Tutor', '7000', '2023-07-26', '2023-07-26 12:20:33'),
(200, 1, 'snvillanueva@gmail.com', 'Steven', 'Villanueva', '', '', 'Steven Villanueva', 'Father', 'DevOps Engineer', '95000', '2023-07-27', '2023-07-27 14:58:51'),
(201, 1, 'chvzelsie@gmail.com', 'Elsie', 'Chavez', '', '', 'Elsie Chavez', 'Mother', 'DH', '10000', '2023-07-28', '2023-07-28 11:29:58'),
(202, 1, 'gpld@outlook.com', 'Gino Paolo', 'Dones', '', '50000', 'Lailanie Garcia', 'Mother', 'Self employed', '50000', '2023-07-31', '2023-08-08 09:52:36'),
(203, 1, 'anne.cabrera@fca.edu.ph', 'Anne', 'Lorraine', '15000', '0', 'Academic Scholar FCA', 'Academic Scholar FCA', 'Academic Scholar FCA', '0', '2023-08-08', '2023-08-08 16:05:32'),
(205, 1, 'donnajane.lacbay@gmail.com', 'Donna Jane', 'Faylon', '', '', 'Donna Jane Faylon ', 'Mother', 'Production Superviso', '25000', '2023-08-10', '2023-08-10 12:57:15'),
(206, 1, 'jaylyn.villareal@deped.gov.ph', 'Jay Lyn', 'Villareal', '', '', 'Enrich D. villareal', 'Father', 'Sales Associate', '11500', '2023-08-11', '2023-08-11 11:45:08'),
(208, 1, 'roy.balaaldia@gmail.com', 'Roy', 'Balaadia', '19500', '', 'Teodoro Balaaldia', 'Father', 'Web Designer', '19500', '2023-08-17', '2023-08-17 13:27:54'),
(209, 1, 'emraramil17@gmail.com', 'Elisha Mae', 'Aramil', '0', '25000', 'Shirley T. Ronquillo', 'Mother', 'Freeance Telemarkete', '25000', '2023-08-23', '2023-08-23 14:28:11'),
(210, 1, 'jeacelazores@yahoo.com', 'Jeacel', 'Azores', '', '', 'John Christopher azores', 'Father', 'Geodetic engineer ', '100000', '2023-08-24', '2023-08-28 22:30:07'),
(212, 1, 'judea.delossantos@thefrontline.asia', 'JUDEA', 'DE LOS SANTOS', '', '', 'Judea', 'Guardian', 'Financial ', '21500', '2023-08-25', '2023-08-25 09:12:25'),
(213, 1, 'satolaarni1106@gmail.com', 'Laarni', 'Sato', '', '', 'Takahiko Sato', 'Father', 'N/A', '100000', '2023-08-25', '2023-08-25 09:50:30'),
(215, 1, 'emjhaiye0528@gmail.com', 'Mary Jane', 'Andaya', '', '', 'Mary Jane Andaya', 'mother', 'business owner', '20k', '2023-08-25', '2023-08-25 13:50:45'),
(216, 1, 'corderopearlyn1991@gmail.com', 'Pearlyn', 'Frago', '30000', '30000', 'Eph Frago', 'Father', 'Teacher', '30000', '2023-08-29', '2023-08-29 12:10:34'),
(217, 1, 'isiah.azores@fca.edu.ph', 'isiah ace', 'azores', '', '', 'john christopher azores', 'father', 'geodetic engineer', '100000', '2023-08-29', '2023-08-29 18:00:39'),
(218, 1, 'sombilloalthea0@gmail.com', 'Althea', 'Sombillo', '', '', 'Arnulfo Basco Sombillo', 'Father', 'Demolition', '40000', '2023-09-04', '2023-09-04 07:55:57'),
(219, 1, 'jocelyn.aquino0923@gmail.com', 'Jocelyn', 'Aquino', '', '', 'Nichole Eljude Aquino', 'Father', 'Operations Manager', '45000', '2023-09-07', '2023-09-07 17:35:19'),
(221, 1, 'liannepasimio22@gmail.com', 'Jaheizer Leianne', 'Pasimio', '', '', 'Nicolo pasimio', 'father', 'businessman and qual', '50000', '2023-09-14', '2023-09-14 14:49:26'),
(222, 1, 'sjgonzales.law21@gmail.com', 'Salem JOy', 'Gonzales', '', '', 'Daniel M. Gonzales', 'Father', 'Entrepreneur ', '40000', '2023-09-29', '2023-09-29 07:26:10'),
(225, 1, 'jojo.gabutero@franklinbaker.com', 'Jojo', 'Gabutero', '', '', 'Jojo Gabutero', 'father', 'Professional Mechani', '100000', '2023-10-02', '2023-10-02 08:17:48'),
(226, 1, 'tester@fca.edu.ph', 'FCA', 'Tester', '', '', 'FCA', 'FCA', 'FCA', '1', '2023-11-16', '2023-11-16 10:39:47'),
(229, 1, 'markbumagat87@gmail.com', 'MC', 'Bumagat', '', '', 'Mark Christopher Bumagat', 'Father', 'Web Developer', '20000', '2023-11-28', '2023-11-28 09:28:53'),
(230, 1, 'monmon.plaza.yt@gmail.com', 'Monmon', 'Plaza', '1000000', '100000', 'Cycy', 'Ninang', 'Doña', '2000000', '2023-11-29', '2023-11-29 07:49:11'),
(231, 1, 'litocwg@gmail.com', 'Angelito', 'Alvarez', '', '', 'Angelito Alvarez', 'Biological Father', 'Quality Analyst at B', '35000', '2024-02-08', '2024-02-08 07:27:33'),
(232, 1, 'patrickgreyes@gmail.com', 'Patrick', 'Reyes', '', '', '', '', '', '', '2024-03-15 07:13:20', '2024-03-15 14:32:52'),
(233, 1, 'merin.ryanmark@gmail.com', 'Mark', 'Merin', '', '', '', '', '', '', '2024-03-15 08:45:53', '2024-03-15 08:45:53'),
(234, 1, 'e.gabanes@gmail.com', 'Emilou', 'Flores', '', '', 'Jeezrel Flores', 'Father', 'OFW', '150000', '2024-03-15 14:35:49', '2024-03-15 14:45:44'),
(235, 1, 'nenethobenita@gmail.com', 'Neneth', 'Obenita', '', '', 'Rolando leonor', 'Father', 'General Manager Uncl', '17000', '2024-03-19 09:31:07', '2024-03-25 17:55:24');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_school_year_students`
--

CREATE TABLE `fcav2_school_year_students` (
  `school_year_students_aid` int(11) NOT NULL,
  `school_year_students_is_active` tinyint(1) NOT NULL,
  `school_year_students_sy_id` int(11) NOT NULL,
  `school_year_students_student_id` int(11) NOT NULL,
  `school_year_students_grade_level_id` int(11) NOT NULL,
  `school_year_students_last_learning_type` varchar(20) NOT NULL,
  `school_year_students_last_school_attended` varchar(255) NOT NULL,
  `school_year_students_last_gpa` varchar(20) NOT NULL,
  `school_year_students_last_grade_level_id` int(11) NOT NULL,
  `school_year_students_last_school_address` text NOT NULL,
  `school_year_students_last_remarks` text NOT NULL,
  `school_year_students_is_notify` tinyint(1) NOT NULL,
  `school_year_students_is_accept_payment` tinyint(1) NOT NULL,
  `school_year_students_assessment_remarks` text NOT NULL,
  `school_year_students_schedule_fees_id` int(11) NOT NULL,
  `school_year_students_rate_id` int(11) NOT NULL,
  `school_year_students_primary_discount_id` int(11) NOT NULL,
  `school_year_students_additional_discount_id` int(11) NOT NULL,
  `school_year_students_last_coc_is_agree` tinyint(1) NOT NULL,
  `school_year_students_last_parent_declaration_is_agree` tinyint(1) NOT NULL,
  `school_year_students_last_parent_consent_is_agree` tinyint(1) NOT NULL,
  `school_year_students_last_parent_commitment_is_agree` tinyint(1) NOT NULL,
  `school_year_students_created` datetime NOT NULL,
  `school_year_students_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_school_year_students`
--

INSERT INTO `fcav2_school_year_students` (`school_year_students_aid`, `school_year_students_is_active`, `school_year_students_sy_id`, `school_year_students_student_id`, `school_year_students_grade_level_id`, `school_year_students_last_learning_type`, `school_year_students_last_school_attended`, `school_year_students_last_gpa`, `school_year_students_last_grade_level_id`, `school_year_students_last_school_address`, `school_year_students_last_remarks`, `school_year_students_is_notify`, `school_year_students_is_accept_payment`, `school_year_students_assessment_remarks`, `school_year_students_schedule_fees_id`, `school_year_students_rate_id`, `school_year_students_primary_discount_id`, `school_year_students_additional_discount_id`, `school_year_students_last_coc_is_agree`, `school_year_students_last_parent_declaration_is_agree`, `school_year_students_last_parent_consent_is_agree`, `school_year_students_last_parent_commitment_is_agree`, `school_year_students_created`, `school_year_students_datetime`) VALUES
(2, 1, 7, 7, 25, '6', 'Frontline Christian Academy', '90', 24, 'Brgy. Baloc Road San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-10 00:00:00', '2023-07-14 09:50:50'),
(4, 1, 7, 9, 22, '6', 'Frontline Christian Academy Inc.', '90', 21, 'Baloc Road. Brgy. San Ignacio San Pablo City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-12 00:00:00', '2023-07-14 09:55:34'),
(5, 1, 7, 10, 14, '6', 'N/A', '0', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-24 00:00:00', '2023-07-18 08:27:42'),
(6, 1, 7, 15, 15, '6', 'Frontline Christian Academy', '1', 16, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-15 13:18:54'),
(7, 1, 7, 16, 18, '6', 'Frontline Christian Academy', '1', 17, 'Baloc Road Brgy. San Ignacio San Pablo City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-09-11 14:00:18'),
(8, 1, 7, 17, 14, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-07-18 08:36:31'),
(9, 1, 7, 18, 19, '6', 'FCA', '4', 18, 'Baloc San Pablo City ', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-08 08:37:04'),
(10, 1, 7, 19, 15, '6', 'frontline Christian academy ', '90', 16, 'baloc rd. brgy san ignacio san pablo city laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-07-18 08:35:59'),
(11, 1, 7, 20, 20, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:07:32'),
(12, 1, 7, 21, 26, '6', 'Frontline Christian Academy', '1', 24, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:08:10'),
(13, 1, 7, 22, 25, '6', 'Frontline Christian Academy', '1', 24, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:36:26'),
(14, 1, 7, 23, 21, '6', 'N/A', '1', 20, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:38:04'),
(15, 1, 7, 24, 21, '6', 'N/A', '1', 20, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:38:37'),
(16, 1, 7, 25, 14, '6', 'Frontline Christian Academy', '1', 16, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-01-30 09:38:45'),
(17, 1, 7, 26, 24, '6', 'Frontline Christian Academy', '1', 23, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:39:12'),
(18, 1, 7, 27, 17, '6', 'N/A', '1', 15, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:40:15'),
(19, 1, 7, 28, 18, '6', 'N/A', '1', 17, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:39:46'),
(20, 1, 7, 29, 25, '6', 'Frontline Christian Academy', '1', 24, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:40:46'),
(21, 1, 7, 30, 22, '6', 'Frontline Christian Academy', '1', 21, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:41:56'),
(22, 1, 7, 31, 23, '6', 'Frontline Christian Academy', '1', 22, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:42:21'),
(23, 1, 7, 32, 25, '6', 'Frontline Christian Academy', '1', 24, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:42:47'),
(24, 1, 7, 33, 24, '6', 'Frontline Christian Academy', '1', 23, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-30 16:24:13'),
(25, 1, 7, 34, 21, '6', 'Frontline Christian Academy', '1', 20, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:44:45'),
(26, 1, 7, 35, 25, '6', 'Frontline Christian Academy', '1', 24, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:43:42'),
(27, 1, 7, 36, 23, '6', 'Frontline Christian Academy', '1', 21, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-07 13:09:16'),
(28, 1, 7, 37, 17, '6', 'FCA', '1', 15, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:45:16'),
(29, 1, 7, 38, 16, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-01-30 10:39:52'),
(30, 1, 7, 39, 21, '6', 'Bernadina Aranza Deveza Memorial School', '1', 20, 'Brgy. San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-31 15:00:42'),
(31, 1, 7, 40, 16, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-01-30 10:45:29'),
(32, 1, 7, 41, 21, '6', 'Frontline Christian Academy', '1', 20, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-08 08:52:05'),
(33, 1, 7, 42, 17, '6', 'Frontlie Christian Academy', '1', 15, 'San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-08 08:18:48'),
(34, 1, 7, 43, 16, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-01-30 11:16:38'),
(35, 1, 7, 44, 25, '6', 'Frontline Christian Academy', '95', 24, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-07 13:11:46'),
(36, 1, 7, 45, 21, '6', 'Frontline Christian Academy', '1', 20, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-07-25 13:11:21'),
(37, 1, 7, 46, 25, '6', 'Frontline Christian Academy', '1', 24, 'Barangay San Ignacio San Pablo City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-07 13:13:30'),
(38, 1, 7, 47, 15, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-07-18 08:35:07'),
(39, 1, 7, 48, 18, '6', 'Frontline Christian Academy ', '1', 17, 'Baloc Road Brgy. San Ignacio San Pablo City ', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:37:00'),
(40, 1, 7, 49, 16, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-01-30 11:43:42'),
(41, 1, 7, 50, 17, '6', 'frontline christian academy', '1', 15, 'brgy san ignacio', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-07 13:14:19'),
(42, 1, 7, 51, 22, '6', 'Frontline Christian Academy', '1', 21, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-08 08:12:10'),
(43, 1, 7, 52, 18, '6', 'Kaleidoscope Kids Learning Center', '1', 15, 'Marciel Alimario corner Lt. R. Brian St. BRGY 3F San Pablo', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:37:34'),
(44, 1, 7, 53, 17, '6', 'Kaleidoscope Kids Learning Center', '1', 14, 'Marcial Alimario corner Lt. R. Brian St. BRGY 3F San Pablo', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-07 13:15:30'),
(45, 1, 7, 54, 23, '6', 'Frontline Christian Academy ', '93', 22, 'Baloc Road San Ignacio San Pablo City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-08 09:46:09'),
(46, 1, 7, 55, 16, '6', 'Kaleidoscope Kids Learning Center', '1', 29, 'Mabini St. San Pablo City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-01-30 13:12:35'),
(47, 1, 7, 56, 15, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-01-30 13:16:51'),
(48, 1, 7, 57, 24, '6', 'FCA', '92', 23, 'Brgy. San Ignacio San Pablo City 4000 ', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-08 09:56:35'),
(49, 1, 7, 58, 19, '6', 'frontline christian academy', '1', 18, 'San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-08 08:38:21'),
(50, 1, 7, 59, 14, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-07-18 08:31:07'),
(51, 1, 7, 60, 25, '6', 'Frontline Christian Academy', '1', 24, 'Baloc Rd. Brgy. San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-08 10:01:46'),
(52, 1, 7, 61, 26, '6', 'Frontline Christian Academy', '1', 25, 'Baloc Road Brgy. San Ignacio San Pablo City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-08 10:05:04'),
(53, 1, 7, 62, 14, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-01-30 13:52:13'),
(54, 1, 7, 63, 24, '6', 'FCA', '90', 23, 'Brgy.San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-08-08 09:57:05'),
(55, 1, 7, 64, 23, '6', 'Bernardina Aranza Deveza Memorial School', '1', 21, 'Brgy. San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-08-08 09:53:24'),
(56, 1, 7, 65, 20, '6', 'MANILA CHRISTIAN DAY SCHOOL', '1', 18, 'STA. MESA MANILA', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-08-08 08:40:14'),
(57, 1, 7, 66, 25, '6', 'Frontline Christian Academy', '1', 24, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-08-29 07:46:39'),
(58, 1, 7, 68, 19, '6', 'Baloc Elementary School', '1', 18, 'Brgy. Sto. Niño San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-09-11 14:02:17'),
(59, 1, 7, 69, 16, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-01-31 08:31:20'),
(60, 1, 7, 70, 21, '6', 'Frontline Christian Academy', '1', 20, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-08-08 08:48:35'),
(61, 1, 7, 71, 14, '6', 'Frontline Christian Academy', '1', 16, 'Baloc Rd. Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-08-07 13:58:44'),
(62, 1, 7, 72, 17, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-08-15 14:05:32'),
(63, 1, 7, 73, 21, '6', 'Kintner Christian Academy ', '1', 17, 'E. Aguinaldo St. Brgy 1B San Pablo City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-08-15 13:12:59'),
(64, 1, 7, 74, 23, '6', 'Frontline Christian Academy', '1', 22, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-08-29 07:46:03'),
(65, 1, 7, 75, 19, '6', 'Poblacion Elementary School ', '1', 17, 'Southville 3 Nha Poblacion', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-08-08 08:37:41'),
(66, 1, 7, 76, 20, '6', 'Frontline Christian Academy', '1', 18, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-08-08 09:59:25'),
(67, 1, 7, 77, 25, '6', 'Frontline Christian Academy', '1', 23, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-08-08 09:58:50'),
(68, 1, 7, 78, 20, '6', 'Frontline Christian Academy', '1', 18, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-08-08 08:45:54'),
(70, 1, 7, 83, 17, '6', 'Frontline Christian Academy', '1', 15, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 08:31:55'),
(71, 1, 7, 84, 17, '6', 'Brgy. V-C Day Care Center', '1', 14, 'San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 08:28:45'),
(72, 1, 7, 85, 25, '6', 'Frontline Christian Academy', '1', 23, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-09-11 14:03:42'),
(73, 1, 7, 86, 19, '6', 'Frontline Christian Academy', '1', 18, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 08:39:07'),
(74, 1, 7, 87, 26, '6', 'Frontline Christian Academy', '1', 25, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 10:07:39'),
(75, 1, 7, 88, 16, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-02-01 09:46:47'),
(76, 1, 7, 89, 14, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-07 14:15:08'),
(77, 1, 7, 90, 16, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-02-01 10:04:34'),
(78, 1, 7, 91, 16, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-02-01 10:12:07'),
(79, 1, 7, 92, 14, '6', 'Sta Ana Day Care Center', '1', 16, 'Brgy Sta Ana San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-02-01 10:46:35'),
(80, 1, 7, 93, 14, '6', 'Frontline Christian Academy', '1', 16, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 10:09:11'),
(81, 1, 7, 94, 17, '6', 'Bagumbong Elementary School', '1', 15, 'Bagumbong Caloocan City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-02-01 11:14:58'),
(82, 1, 7, 95, 22, '6', 'Frontline Christian Academy', '1', 21, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-02-01 11:18:29'),
(83, 1, 7, 96, 25, '6', 'Frontline Christian Academy', '1', 23, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 10:03:24'),
(84, 1, 7, 97, 15, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-29 07:48:06'),
(85, 1, 7, 98, 14, '6', 'N/A', '1', 29, 'ma.favorito@fca.edu.ph', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-29 07:51:09'),
(86, 1, 7, 99, 21, '6', 'Frontline Christian Academy', '1', 20, 'margaux.fule@fca.edu.ph', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 09:39:51'),
(87, 1, 7, 100, 22, '6', 'Frontline Christian Academy', '1', 21, 'San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 09:42:21'),
(88, 1, 7, 101, 14, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-02-01 14:46:09'),
(89, 1, 7, 102, 14, '6', 'N/A', '1', 29, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-07 14:11:13'),
(90, 1, 7, 103, 26, '6', 'Frontline Christian Academy', '1', 25, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 10:04:13'),
(91, 1, 7, 104, 18, '6', 'Frontline Christian Academy', '1', 17, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2024-01-26 10:37:20'),
(92, 1, 7, 105, 24, '6', 'San Pablo Central School', '90', 22, 'San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 09:55:50'),
(93, 1, 7, 106, 29, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-02-01 14:58:40'),
(94, 1, 7, 107, 16, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-02-01 15:01:19'),
(95, 1, 7, 108, 15, '6', 'Frontline Christian Academy', '1', 16, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-29 07:51:51'),
(96, 1, 7, 109, 17, '6', 'Frontline Christian Academy', '1', 15, 'Brgy. San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 08:29:44'),
(97, 1, 7, 110, 14, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-07 13:57:07'),
(98, 1, 7, 111, 15, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-29 07:47:07'),
(99, 1, 7, 112, 14, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-07 14:04:11'),
(100, 1, 7, 113, 23, '6', 'Sto. Niño Elementary School', '1', 22, 'Brgy. Sto. Niño San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 09:54:23'),
(101, 1, 7, 114, 15, '6', 'Frontline Christian Academy ', '1', 14, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 08:15:37'),
(102, 1, 7, 115, 25, '6', 'FCA', '91', 24, 'San Ignacio  San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 10:00:39'),
(103, 1, 7, 116, 15, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-29 08:01:16'),
(104, 1, 7, 117, 23, '6', 'fca', '88', 22, 'Brgy. San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 09:46:52'),
(105, 1, 7, 118, 17, '6', 'Frontline Christian Academy', '1', 15, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-08 08:20:50'),
(106, 1, 7, 119, 18, '6', 'Frontline Christian Academy', '88.429', 17, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-29 08:01:44'),
(107, 1, 7, 120, 19, '6', 'san jose es san pablo city', '1', 17, 'san jose san pablo city laguna ', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-29 08:02:07'),
(108, 1, 7, 121, 15, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-02-02 08:45:48'),
(109, 1, 7, 122, 14, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-02-02 09:02:49'),
(110, 1, 7, 123, 16, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-02-02 09:06:23'),
(111, 1, 7, 124, 15, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-07 14:18:43'),
(112, 1, 7, 125, 25, '6', 'Dolores Christian School Inc.', '1', 23, 'Brgy. Maligaya Dolores Quezon', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-07-06 09:51:07'),
(113, 1, 7, 126, 16, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-02-02 09:13:55'),
(114, 1, 7, 127, 23, '6', 'Hope Zoel Young Mind Builder Inc', '92', 22, '15 Fule Sahagun St San Pablo City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-02-02 09:27:48'),
(115, 1, 7, 128, 17, '6', 'Frontline Christian Academy', '1', 15, 'San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-15 13:16:55'),
(116, 1, 7, 129, 21, '6', 'San Pablo Central School', '1', 19, 'Mabini St. San Pablo City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-08 09:41:44'),
(117, 1, 7, 130, 25, '6', 'San Jose National High School', '1', 23, 'Brgy. San Jose Malamig', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-08 10:02:40'),
(118, 1, 7, 131, 24, '6', 'Frontline Christian Academy', '1', 23, 'gwen.rom@fca.edu.ph', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-29 08:02:35'),
(119, 1, 7, 132, 14, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-07 14:12:41'),
(120, 1, 7, 133, 17, '6', 'CHILD DEVELOPMENT LABORATORY', '1', 14, 'UP Los Baños', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-08 08:19:47'),
(121, 1, 7, 134, 15, '6', 'FCA', '1', 29, 'San Ignacio Road San Pablo City', 'Yes please be strict regarding Aston\'s  representative to pick him up from the school . Thank you so much ', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-08 08:16:48'),
(122, 1, 7, 135, 26, '6', 'Frontline Christian Academy', '1', 25, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-09-11 14:05:18'),
(123, 1, 7, 136, 18, '6', 'Frontline Christian Academy', '1', 17, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-08 08:35:46'),
(124, 1, 7, 137, 23, '6', 'Frontline Christian Academy', '1', 22, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-29 08:03:45'),
(125, 1, 7, 138, 15, '6', 'Frontline Christian Academy', '1', 16, 'Baloc Road Brgy. San Ignacio San Pablo City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-31 15:01:07'),
(126, 1, 7, 139, 16, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-02-02 10:39:46'),
(127, 1, 7, 140, 22, '6', 'Frontline Christian Academy', '1', 20, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-15 13:14:08'),
(128, 1, 7, 141, 24, '6', 'Frontline Christian Academy', '1', 23, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-15 13:14:36'),
(129, 1, 7, 142, 23, '6', 'Frontline Christian Academy', '1', 21, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-09-11 14:05:39'),
(130, 1, 7, 143, 20, '6', 'Unspecified', '1', 18, 'Unspecified', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-08 08:46:37'),
(131, 1, 7, 144, 24, '6', 'Frontline Christian Academy', '1', 23, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-17 00:00:00', '2023-08-29 08:04:25'),
(132, 1, 7, 145, 23, '6', 'FCA', '92', 22, 'Brgy. San Ignacio San Pablo City Laguna', 'None.', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-05-12 00:00:00', '2023-07-14 10:12:07'),
(133, 1, 7, 146, 15, '6', 'Frontline Christian Academy', '1', 16, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-05-23 00:00:00', '2023-08-07 14:17:00'),
(134, 1, 7, 147, 21, '6', 'Sto. Niño Elementary School', '1', 20, 'Sto. Niño San Pablo City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-05-23 00:00:00', '2023-08-29 08:04:59'),
(135, 1, 7, 148, 16, '6', 'n/a', '0', 29, 'n/a', 'n/a', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-06-22 00:00:00', '2023-08-07 13:19:16'),
(136, 1, 7, 150, 20, '6', 'Please edit', '1', 19, 'Please edit', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-06 00:00:00', '2023-09-01 07:18:25'),
(137, 1, 7, 152, 14, '6', 'South Lakes', '91', 16, 'Brgy. San jose', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-10 00:00:00', '2023-07-14 11:26:28'),
(138, 1, 7, 154, 23, '6', 'CCD School Foundation Inc.', '91', 22, 'Bayanihan Dolores Quezon', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-12 00:00:00', '2023-07-12 11:41:48'),
(139, 1, 7, 155, 15, '6', 'frontline christian academy', '0', 16, 'baloc san pablo city', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-12 00:00:00', '2023-08-07 14:19:06'),
(140, 1, 7, 156, 14, '6', 'FCA ', '1', 16, 'Baloc road. Brgy San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-13 00:00:00', '2023-08-07 13:59:43'),
(141, 1, 7, 157, 16, '6', 'kaleidoscope ', '2023', 29, 'san pablo city', 'none', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-14 00:00:00', '2023-08-07 13:22:30'),
(142, 1, 7, 158, 16, '6', 'none', '0', 29, 'none', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-14 00:00:00', '2023-08-07 13:17:59'),
(143, 1, 7, 159, 21, '6', 'fca', '92', 20, 'fca', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-16 00:00:00', '2023-08-08 08:51:18'),
(144, 1, 7, 160, 15, '6', 'a', '1', 14, 'Tiaong Quezon ', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-17 00:00:00', '2023-08-07 14:20:37'),
(145, 1, 7, 161, 14, '6', 'South lake’s integrated school', '91', 16, 'San pablo city', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-17 00:00:00', '2023-08-07 14:00:37'),
(146, 1, 7, 162, 26, '6', 'marcelino fule memorial college', '91', 25, 'alaminos laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-24 00:00:00', '2023-09-18 12:13:43'),
(147, 1, 7, 163, 23, '6', 'San Cristobal Elementary School', '94.25', 22, 'san cristobal san pablo city', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-24 00:00:00', '2023-08-08 09:48:05'),
(148, 1, 7, 164, 23, '6', 'Platon Elementary School', '94', 22, 'Alvarez St. San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-26 00:00:00', '2023-08-08 09:49:24'),
(149, 1, 7, 165, 23, '6', 'San Pablo Central School', '93', 22, 'Mabini St. San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-26 00:00:00', '2023-08-22 13:55:10'),
(150, 1, 7, 166, 14, '6', 'Child and Teens', '0', 29, 'San Pablo City Laguna', 'N/A', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-26 00:00:00', '2023-08-07 14:16:26'),
(151, 1, 7, 167, 23, '6', 'SAN CRISTOBAL ELEMENTARY SCHOOL', '92', 22, 'SAN CRISTOBAL SAN PABLO CITY LAGUNA', 'NONE', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-26 00:00:00', '2023-08-11 07:30:08'),
(152, 1, 7, 168, 20, '6', 'DEBES Elementary School', '1', 19, 'Calihan San Pablo City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-27 00:00:00', '2023-08-08 08:44:49'),
(153, 1, 7, 169, 14, '6', 'NA', '1', 29, 'NA', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-27 00:00:00', '2023-08-07 14:06:16'),
(154, 1, 7, 170, 26, '6', 'FCA', '1', 25, 'Baloc Rd. Brgy. San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-28 00:00:00', '2023-08-08 10:06:43'),
(155, 1, 7, 171, 17, '6', 'Clark M. Recto Memorial Central School', '2022', 15, 'Tiaong Quezon PH', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-31 00:00:00', '2023-08-08 08:32:57'),
(156, 1, 7, 172, 14, '6', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-08-10 00:00:00', '2023-08-15 13:16:19'),
(157, 1, 7, 173, 17, '6', 'Hope Zoel Young Builder\'s school', '93', 15, 'Efarca Village San Pablo City', 'None', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-08-10 00:00:00', '2023-08-15 13:15:58'),
(158, 1, 7, 174, 24, '6', 'Col.Lauro Dizon Memorial Integrated High School', '93', 23, 'Brgy. 6-A San Pablo City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-08-11 00:00:00', '2023-08-15 12:55:32'),
(159, 1, 7, 175, 15, 'onsite', 'Gnostic Intervention Center', '1', 0, '38 Fule Sahagun Brgy. VII A 4000 San Pablo City Philippines', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-08-17 00:00:00', '2024-03-15 12:55:59'),
(160, 1, 7, 176, 18, '6', 'Escuela de Valle Verde', '89', 15, 'Greenvalley Subd. Kalihan San Pablo Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-08-23 00:00:00', '2023-10-05 07:10:39'),
(161, 1, 7, 177, 14, '6', 'N/a', '1', 29, 'N/a', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-08-24 00:00:00', '2023-08-29 09:32:59'),
(162, 1, 7, 178, 16, '6', 'n/a', '1', 29, 'n/a', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-08-25 00:00:00', '2023-08-29 08:47:06'),
(163, 1, 7, 179, 16, '6', 'Kaleidoscope', '0', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-08-25 00:00:00', '2023-08-29 08:46:56'),
(164, 1, 7, 180, 21, '6', 'Frontline Christian Academy', '1', 20, 'NA', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-08-29 00:00:00', '2023-08-31 15:03:23'),
(165, 1, 7, 181, 16, '6', 'N/A', '0', 29, 'N/A', 'N/A', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-08-30 00:00:00', '2023-08-31 15:03:59'),
(166, 1, 7, 182, 19, '6', 'Ajiyoshi sho gakko', '2022', 18, 'Japan', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-08-30 00:00:00', '2023-08-31 15:04:27'),
(167, 1, 7, 183, 25, '6', 'Manuel L. Quezon High School', '1', 25, 'Blumentritt Rd Santa Cruz Manila', 'None', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-09-04 00:00:00', '2023-09-11 14:07:15'),
(168, 1, 7, 184, 16, '6', 'Kaleidoscope Kids Learning Center', '0', 29, 'Brgy. 5C  San Pablo City Laguna', 'None', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-09-07 00:00:00', '2023-09-11 14:07:40'),
(169, 1, 7, 185, 16, '6', 'na', '1', 29, 'na', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-09-14 00:00:00', '2023-09-19 13:15:31'),
(170, 1, 7, 186, 19, '6', 'DEBES', '89', 18, 'Brgy. San Francisco San Pablo City', 'Jairus is sensitive to comments of persons whom he\'s closely interacting. He doesn\'t want to be left alone. He practice self time-out when he\'s processing his emotions normally 20-30 minutes. He remains quiet all through out that time.', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-09-29 00:00:00', '2023-09-29 10:59:04'),
(171, 1, 7, 187, 16, '6', 'na', '1', 14, 'FCA', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-10-02 00:00:00', '2023-10-09 08:04:53'),
(172, 1, 7, 188, 21, '6', '1231', '123', 20, 'San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-11-16 00:00:00', '2023-11-28 13:29:21'),
(175, 1, 7, 191, 19, '6', 'FCA', '8', 21, 'Baloc', '123', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-11-29 00:00:00', '2023-11-29 08:18:00'),
(180, 1, 9, 196, 14, 'onsite', 'Maranatha Christian Academy', '', 16, 'Brgy. Lalig Tiaong Quezon', '', 0, 1, '', 27, 3, 0, 3, 1, 1, 1, 1, '2024-03-15 14:53:18', '2024-03-15 15:29:11'),
(181, 1, 9, 182, 20, 'onsite', 'Ajiyoshi sho gakko', '2022', 19, 'Japan', '', 0, 1, 'Credit card payment', 30, 3, 0, 3, 1, 1, 1, 1, '2024-03-18 08:45:58', '2024-03-19 08:33:09'),
(182, 1, 9, 9, 23, 'onsite', 'Frontline Christian Academy Inc.', '90', 22, 'Baloc Road. Brgy. San Ignacio San Pablo City', '', 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 0, '2024-03-19 08:56:41', '2024-03-19 08:56:41'),
(183, 1, 9, 70, 22, 'onsite', 'Frontline Christian Academy', '1', 21, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 0, 0, '', 78, 2, 0, 0, 0, 0, 0, 0, '2024-03-20 10:34:29', '0000-00-00 00:00:00'),
(184, 1, 7, 197, 21, 'onsite', 'Frontline Christian Academy', '80', 20, 'Baloc Road, San Ignacio, San Pablo City, Laguna', '', 0, 1, '', 75, 2, 14, 0, 1, 1, 1, 1, '2024-03-25 10:23:08', '2024-03-25 10:36:36'),
(185, 1, 9, 198, 17, 'onsite', 'Blue Danube School', '', 17, '385M+MW5, Palawan St, San Pablo City, Laguna, Philippines', 'no', 0, 0, '', 0, 0, 0, 0, 1, 1, 1, 1, '2024-03-31 18:45:14', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_school_year_students_current`
--

CREATE TABLE `fcav2_school_year_students_current` (
  `current_students_aid` int(11) NOT NULL,
  `current_students_is_active` tinyint(1) NOT NULL,
  `current_students_sy_id` int(11) NOT NULL,
  `current_students_student_id` int(11) NOT NULL,
  `current_students_grade_level_id` int(11) NOT NULL,
  `current_students_last_learning_type` varchar(20) NOT NULL,
  `current_students_last_school_attended` varchar(255) NOT NULL,
  `current_students_last_gpa` varchar(20) NOT NULL,
  `current_students_last_grade_level_id` int(11) NOT NULL,
  `current_students_last_school_address` text NOT NULL,
  `current_students_last_remarks` text NOT NULL,
  `current_students_is_notify` tinyint(1) NOT NULL,
  `current_students_is_accept_payment` tinyint(1) NOT NULL,
  `current_students_assessment_remarks` text NOT NULL,
  `current_students_schedule_fees_id` int(11) NOT NULL,
  `current_students_rate_id` int(11) NOT NULL,
  `current_students_primary_discount_id` int(11) NOT NULL,
  `current_students_additional_discount_id` int(11) NOT NULL,
  `current_students_last_coc_is_agree` tinyint(1) NOT NULL,
  `current_students_last_parent_declaration_is_agree` tinyint(1) NOT NULL,
  `current_students_last_parent_consent_is_agree` tinyint(1) NOT NULL,
  `current_students_last_parent_commitment_is_agree` tinyint(1) NOT NULL,
  `current_students_created` datetime NOT NULL,
  `current_students_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_school_year_students_current`
--

INSERT INTO `fcav2_school_year_students_current` (`current_students_aid`, `current_students_is_active`, `current_students_sy_id`, `current_students_student_id`, `current_students_grade_level_id`, `current_students_last_learning_type`, `current_students_last_school_attended`, `current_students_last_gpa`, `current_students_last_grade_level_id`, `current_students_last_school_address`, `current_students_last_remarks`, `current_students_is_notify`, `current_students_is_accept_payment`, `current_students_assessment_remarks`, `current_students_schedule_fees_id`, `current_students_rate_id`, `current_students_primary_discount_id`, `current_students_additional_discount_id`, `current_students_last_coc_is_agree`, `current_students_last_parent_declaration_is_agree`, `current_students_last_parent_consent_is_agree`, `current_students_last_parent_commitment_is_agree`, `current_students_created`, `current_students_datetime`) VALUES
(2, 1, 7, 7, 25, 'onsite', 'Frontline Christian Academy', '90', 24, 'Brgy. Baloc Road San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-10 00:00:00', '2023-07-14 09:50:50'),
(4, 1, 9, 9, 23, 'onsite', 'Frontline Christian Academy Inc.', '90', 22, 'Baloc Road. Brgy. San Ignacio San Pablo City', '', 0, 0, '', 0, 0, 0, 0, 0, 0, 0, 0, '2023-01-12 00:00:00', '2024-03-19 08:56:41'),
(5, 1, 7, 10, 14, 'onsite', 'N/A', '0', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-24 00:00:00', '2023-07-18 08:27:42'),
(6, 1, 7, 15, 15, 'onsite', 'Frontline Christian Academy', '1', 16, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-15 13:18:54'),
(7, 1, 7, 16, 18, 'onsite', 'Frontline Christian Academy', '1', 17, 'Baloc Road Brgy. San Ignacio San Pablo City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-09-11 14:00:18'),
(8, 1, 7, 17, 14, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-07-18 08:36:31'),
(9, 1, 7, 18, 19, 'onsite', 'FCA', '4', 18, 'Baloc San Pablo City ', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-08 08:37:04'),
(10, 1, 7, 19, 15, 'onsite', 'frontline Christian academy ', '90', 16, 'baloc rd. brgy san ignacio san pablo city laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-07-18 08:35:59'),
(11, 1, 7, 20, 20, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:07:32'),
(12, 1, 7, 21, 26, 'onsite', 'Frontline Christian Academy', '1', 24, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:08:10'),
(13, 1, 7, 22, 25, 'onsite', 'Frontline Christian Academy', '1', 24, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:36:26'),
(14, 1, 7, 23, 21, 'onsite', 'N/A', '1', 20, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:38:04'),
(15, 1, 7, 24, 21, 'onsite', 'N/A', '1', 20, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:38:37'),
(16, 1, 7, 25, 14, 'onsite', 'Frontline Christian Academy', '1', 16, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-01-30 09:38:45'),
(17, 1, 7, 26, 24, 'onsite', 'Frontline Christian Academy', '1', 23, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:39:12'),
(18, 1, 7, 27, 17, 'onsite', 'N/A', '1', 15, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:40:15'),
(19, 1, 7, 28, 18, 'onsite', 'N/A', '1', 17, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:39:46'),
(20, 1, 7, 29, 25, 'onsite', 'Frontline Christian Academy', '1', 24, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:40:46'),
(21, 1, 7, 30, 22, 'onsite', 'Frontline Christian Academy', '1', 21, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:41:56'),
(22, 1, 7, 31, 23, 'onsite', 'Frontline Christian Academy', '1', 22, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:42:21'),
(23, 1, 7, 32, 25, 'onsite', 'Frontline Christian Academy', '1', 24, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:42:47'),
(24, 1, 7, 33, 24, 'onsite', 'Frontline Christian Academy', '1', 23, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-30 16:24:13'),
(25, 1, 7, 34, 21, 'onsite', 'Frontline Christian Academy', '1', 20, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:44:45'),
(26, 1, 7, 35, 25, 'onsite', 'Frontline Christian Academy', '1', 24, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:43:42'),
(27, 1, 7, 36, 23, 'onsite', 'Frontline Christian Academy', '1', 21, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-07 13:09:16'),
(28, 1, 7, 37, 17, 'onsite', 'FCA', '1', 15, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:45:16'),
(29, 1, 7, 38, 16, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-01-30 10:39:52'),
(30, 1, 7, 39, 21, 'onsite', 'Bernadina Aranza Deveza Memorial School', '1', 20, 'Brgy. San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-31 15:00:42'),
(31, 1, 7, 40, 16, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-01-30 10:45:29'),
(32, 1, 7, 41, 21, 'onsite', 'Frontline Christian Academy', '1', 20, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-08 08:52:05'),
(33, 1, 7, 42, 17, 'onsite', 'Frontlie Christian Academy', '1', 15, 'San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-08 08:18:48'),
(34, 1, 7, 43, 16, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-01-30 11:16:38'),
(35, 1, 7, 44, 25, 'onsite', 'Frontline Christian Academy', '95', 24, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-07 13:11:46'),
(36, 1, 7, 45, 21, 'onsite', 'Frontline Christian Academy', '1', 20, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-07-25 13:11:21'),
(37, 1, 7, 46, 25, 'onsite', 'Frontline Christian Academy', '1', 24, 'Barangay San Ignacio San Pablo City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-07 13:13:30'),
(38, 1, 7, 47, 15, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-07-18 08:35:07'),
(39, 1, 7, 48, 18, 'onsite', 'Frontline Christian Academy ', '1', 17, 'Baloc Road Brgy. San Ignacio San Pablo City ', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:37:00'),
(40, 1, 7, 49, 16, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-01-30 11:43:42'),
(41, 1, 7, 50, 17, 'onsite', 'frontline christian academy', '1', 15, 'brgy san ignacio', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-07 13:14:19'),
(42, 1, 7, 51, 22, 'onsite', 'Frontline Christian Academy', '1', 21, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-08 08:12:10'),
(43, 1, 7, 52, 18, 'onsite', 'Kaleidoscope Kids Learning Center', '1', 15, 'Marciel Alimario corner Lt. R. Brian St. BRGY 3F San Pablo', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-29 07:37:34'),
(44, 1, 7, 53, 17, 'onsite', 'Kaleidoscope Kids Learning Center', '1', 14, 'Marcial Alimario corner Lt. R. Brian St. BRGY 3F San Pablo', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-07 13:15:30'),
(45, 1, 7, 54, 23, 'onsite', 'Frontline Christian Academy ', '93', 22, 'Baloc Road San Ignacio San Pablo City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-08 09:46:09'),
(46, 1, 7, 55, 16, 'onsite', 'Kaleidoscope Kids Learning Center', '1', 29, 'Mabini St. San Pablo City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-01-30 13:12:35'),
(47, 1, 7, 56, 15, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-01-30 13:16:51'),
(48, 1, 7, 57, 24, 'onsite', 'FCA', '92', 23, 'Brgy. San Ignacio San Pablo City 4000 ', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-08 09:56:35'),
(49, 1, 7, 58, 19, 'onsite', 'frontline christian academy', '1', 18, 'San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-08 08:38:21'),
(50, 1, 7, 59, 14, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-07-18 08:31:07'),
(51, 1, 7, 60, 25, 'onsite', 'Frontline Christian Academy', '1', 24, 'Baloc Rd. Brgy. San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-08 10:01:46'),
(52, 1, 7, 61, 26, 'onsite', 'Frontline Christian Academy', '1', 25, 'Baloc Road Brgy. San Ignacio San Pablo City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-08-08 10:05:04'),
(53, 1, 7, 62, 14, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-30 00:00:00', '2023-01-30 13:52:13'),
(54, 1, 7, 63, 24, 'onsite', 'FCA', '90', 23, 'Brgy.San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-08-08 09:57:05'),
(55, 1, 7, 64, 23, 'onsite', 'Bernardina Aranza Deveza Memorial School', '1', 21, 'Brgy. San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-08-08 09:53:24'),
(56, 1, 7, 65, 20, 'onsite', 'MANILA CHRISTIAN DAY SCHOOL', '1', 18, 'STA. MESA MANILA', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-08-08 08:40:14'),
(57, 1, 7, 66, 25, 'onsite', 'Frontline Christian Academy', '1', 24, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-08-29 07:46:39'),
(58, 1, 7, 68, 19, 'onsite', 'Baloc Elementary School', '1', 18, 'Brgy. Sto. Niño San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-09-11 14:02:17'),
(59, 1, 7, 69, 16, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-01-31 08:31:20'),
(60, 1, 9, 70, 22, 'onsite', 'Frontline Christian Academy', '1', 21, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 0, 0, '', 78, 2, 0, 0, 0, 0, 0, 0, '2023-01-31 00:00:00', '0000-00-00 00:00:00'),
(61, 1, 7, 71, 14, 'onsite', 'Frontline Christian Academy', '1', 16, 'Baloc Rd. Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-08-07 13:58:44'),
(62, 1, 7, 72, 17, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-08-15 14:05:32'),
(63, 1, 7, 73, 21, 'onsite', 'Kintner Christian Academy ', '1', 17, 'E. Aguinaldo St. Brgy 1B San Pablo City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-08-15 13:12:59'),
(64, 1, 7, 74, 23, 'onsite', 'Frontline Christian Academy', '1', 22, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-08-29 07:46:03'),
(65, 1, 7, 75, 19, 'onsite', 'Poblacion Elementary School ', '1', 17, 'Southville 3 Nha Poblacion', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-08-08 08:37:41'),
(66, 1, 7, 76, 20, 'onsite', 'Frontline Christian Academy', '1', 18, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-08-08 09:59:25'),
(67, 1, 7, 77, 25, 'onsite', 'Frontline Christian Academy', '1', 23, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-08-08 09:58:50'),
(68, 1, 7, 78, 20, 'onsite', 'Frontline Christian Academy', '1', 18, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-01-31 00:00:00', '2023-08-08 08:45:54'),
(70, 1, 7, 83, 17, 'onsite', 'Frontline Christian Academy', '1', 15, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 08:31:55'),
(71, 1, 7, 84, 17, 'onsite', 'Brgy. V-C Day Care Center', '1', 14, 'San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 08:28:45'),
(72, 1, 7, 85, 25, 'onsite', 'Frontline Christian Academy', '1', 23, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-09-11 14:03:42'),
(73, 1, 7, 86, 19, 'onsite', 'Frontline Christian Academy', '1', 18, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 08:39:07'),
(74, 1, 7, 87, 26, 'onsite', 'Frontline Christian Academy', '1', 25, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 10:07:39'),
(75, 1, 7, 88, 16, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-02-01 09:46:47'),
(76, 1, 7, 89, 14, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-07 14:15:08'),
(77, 1, 7, 90, 16, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-02-01 10:04:34'),
(78, 1, 7, 91, 16, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-02-01 10:12:07'),
(79, 1, 7, 92, 14, 'onsite', 'Sta Ana Day Care Center', '1', 16, 'Brgy Sta Ana San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-02-01 10:46:35'),
(80, 1, 7, 93, 14, 'onsite', 'Frontline Christian Academy', '1', 16, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 10:09:11'),
(81, 1, 7, 94, 17, 'onsite', 'Bagumbong Elementary School', '1', 15, 'Bagumbong Caloocan City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-02-01 11:14:58'),
(82, 1, 7, 95, 22, 'onsite', 'Frontline Christian Academy', '1', 21, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-02-01 11:18:29'),
(83, 1, 7, 96, 25, 'onsite', 'Frontline Christian Academy', '1', 23, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 10:03:24'),
(84, 1, 7, 97, 15, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-29 07:48:06'),
(85, 1, 7, 98, 14, 'onsite', 'N/A', '1', 29, 'ma.favorito@fca.edu.ph', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-29 07:51:09'),
(86, 1, 7, 99, 21, 'onsite', 'Frontline Christian Academy', '1', 20, 'margaux.fule@fca.edu.ph', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 09:39:51'),
(87, 1, 7, 100, 22, 'onsite', 'Frontline Christian Academy', '1', 21, 'San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 09:42:21'),
(88, 1, 7, 101, 14, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-02-01 14:46:09'),
(89, 1, 7, 102, 14, 'onsite', 'N/A', '1', 29, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-07 14:11:13'),
(90, 1, 7, 103, 26, 'onsite', 'Frontline Christian Academy', '1', 25, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 10:04:13'),
(91, 1, 7, 104, 18, 'onsite', 'Frontline Christian Academy', '1', 17, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2024-01-26 10:37:20'),
(92, 1, 7, 105, 24, 'onsite', 'San Pablo Central School', '90', 22, 'San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 09:55:50'),
(93, 1, 7, 106, 29, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-02-01 14:58:40'),
(94, 1, 7, 107, 16, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-02-01 15:01:19'),
(95, 1, 7, 108, 15, 'onsite', 'Frontline Christian Academy', '1', 16, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-29 07:51:51'),
(96, 1, 7, 109, 17, 'onsite', 'Frontline Christian Academy', '1', 15, 'Brgy. San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 08:29:44'),
(97, 1, 7, 110, 14, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-07 13:57:07'),
(98, 1, 7, 111, 15, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-29 07:47:07'),
(99, 1, 7, 112, 14, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-07 14:04:11'),
(100, 1, 7, 113, 23, 'onsite', 'Sto. Niño Elementary School', '1', 22, 'Brgy. Sto. Niño San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 09:54:23'),
(101, 1, 7, 114, 15, 'onsite', 'Frontline Christian Academy ', '1', 14, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 08:15:37'),
(102, 1, 7, 115, 25, 'onsite', 'FCA', '91', 24, 'San Ignacio  San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 10:00:39'),
(103, 1, 7, 116, 15, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-29 08:01:16'),
(104, 1, 7, 117, 23, 'onsite', 'fca', '88', 22, 'Brgy. San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-01 00:00:00', '2023-08-08 09:46:52'),
(105, 1, 7, 118, 17, 'onsite', 'Frontline Christian Academy', '1', 15, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-08 08:20:50'),
(106, 1, 7, 119, 18, 'onsite', 'Frontline Christian Academy', '88.429', 17, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-29 08:01:44'),
(107, 1, 7, 120, 19, 'onsite', 'san jose es san pablo city', '1', 17, 'san jose san pablo city laguna ', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-29 08:02:07'),
(108, 1, 7, 121, 15, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-02-02 08:45:48'),
(109, 1, 7, 122, 14, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-02-02 09:02:49'),
(110, 1, 7, 123, 16, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-02-02 09:06:23'),
(111, 1, 7, 124, 15, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-07 14:18:43'),
(112, 1, 7, 125, 25, 'onsite', 'Dolores Christian School Inc.', '1', 23, 'Brgy. Maligaya Dolores Quezon', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-07-06 09:51:07'),
(113, 1, 7, 126, 16, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-02-02 09:13:55'),
(114, 1, 7, 127, 23, 'onsite', 'Hope Zoel Young Mind Builder Inc', '92', 22, '15 Fule Sahagun St San Pablo City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-02-02 09:27:48'),
(115, 1, 7, 128, 17, 'onsite', 'Frontline Christian Academy', '1', 15, 'San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-15 13:16:55'),
(116, 1, 7, 129, 21, 'onsite', 'San Pablo Central School', '1', 19, 'Mabini St. San Pablo City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-08 09:41:44'),
(117, 1, 7, 130, 25, 'onsite', 'San Jose National High School', '1', 23, 'Brgy. San Jose Malamig', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-08 10:02:40'),
(118, 1, 7, 131, 24, 'onsite', 'Frontline Christian Academy', '1', 23, 'gwen.rom@fca.edu.ph', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-29 08:02:35'),
(119, 1, 7, 132, 14, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-07 14:12:41'),
(120, 1, 7, 133, 17, 'onsite', 'CHILD DEVELOPMENT LABORATORY', '1', 14, 'UP Los Baños', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-08 08:19:47'),
(121, 1, 7, 134, 15, 'onsite', 'FCA', '1', 29, 'San Ignacio Road San Pablo City', 'Yes please be strict regarding Aston\'s  representative to pick him up from the school . Thank you so much ', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-08 08:16:48'),
(122, 1, 7, 135, 26, 'onsite', 'Frontline Christian Academy', '1', 25, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-09-11 14:05:18'),
(123, 1, 7, 136, 18, 'onsite', 'Frontline Christian Academy', '1', 17, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-08 08:35:46'),
(124, 1, 7, 137, 23, 'onsite', 'Frontline Christian Academy', '1', 22, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-29 08:03:45'),
(125, 1, 7, 138, 15, 'onsite', 'Frontline Christian Academy', '1', 16, 'Baloc Road Brgy. San Ignacio San Pablo City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-31 15:01:07'),
(126, 1, 7, 139, 16, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-02-02 10:39:46'),
(127, 1, 7, 140, 22, 'onsite', 'Frontline Christian Academy', '1', 20, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-15 13:14:08'),
(128, 1, 7, 141, 24, 'onsite', 'Frontline Christian Academy', '1', 23, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-15 13:14:36'),
(129, 1, 7, 142, 23, 'onsite', 'Frontline Christian Academy', '1', 21, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-09-11 14:05:39'),
(130, 1, 7, 143, 20, 'onsite', 'Unspecified', '1', 18, 'Unspecified', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-02 00:00:00', '2023-08-08 08:46:37'),
(131, 1, 7, 144, 24, 'onsite', 'Frontline Christian Academy', '1', 23, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-02-17 00:00:00', '2023-08-29 08:04:25'),
(132, 1, 7, 145, 23, 'onsite', 'FCA', '92', 22, 'Brgy. San Ignacio San Pablo City Laguna', 'None.', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-05-12 00:00:00', '2023-07-14 10:12:07'),
(133, 1, 7, 146, 15, 'onsite', 'Frontline Christian Academy', '1', 16, 'Baloc Road Brgy. San Ignacio San Pablo City Laguna 4000', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-05-23 00:00:00', '2023-08-07 14:17:00'),
(134, 1, 7, 147, 21, 'onsite', 'Sto. Niño Elementary School', '1', 20, 'Sto. Niño San Pablo City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-05-23 00:00:00', '2023-08-29 08:04:59'),
(135, 1, 7, 148, 16, 'onsite', 'n/a', '0', 29, 'n/a', 'n/a', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-06-22 00:00:00', '2023-08-07 13:19:16'),
(136, 1, 7, 150, 20, 'onsite', 'Please edit', '1', 19, 'Please edit', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-06 00:00:00', '2023-09-01 07:18:25'),
(137, 1, 7, 152, 14, 'onsite', 'South Lakes', '91', 16, 'Brgy. San jose', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-10 00:00:00', '2023-07-14 11:26:28'),
(138, 1, 7, 154, 23, 'onsite', 'CCD School Foundation Inc.', '91', 22, 'Bayanihan Dolores Quezon', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-12 00:00:00', '2023-07-12 11:41:48'),
(139, 1, 7, 155, 15, 'onsite', 'frontline christian academy', '0', 16, 'baloc san pablo city', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-12 00:00:00', '2023-08-07 14:19:06'),
(140, 1, 7, 156, 14, 'onsite', 'FCA ', '1', 16, 'Baloc road. Brgy San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-13 00:00:00', '2023-08-07 13:59:43'),
(141, 1, 7, 157, 16, 'onsite', 'kaleidoscope ', '2023', 29, 'san pablo city', 'none', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-14 00:00:00', '2023-08-07 13:22:30'),
(142, 1, 7, 158, 16, 'onsite', 'none', '0', 29, 'none', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-14 00:00:00', '2023-08-07 13:17:59'),
(143, 1, 7, 159, 21, 'onsite', 'fca', '92', 20, 'fca', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-16 00:00:00', '2023-08-08 08:51:18'),
(144, 1, 7, 160, 15, 'onsite', 'a', '1', 14, 'Tiaong Quezon ', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-17 00:00:00', '2023-08-07 14:20:37'),
(145, 1, 7, 161, 14, 'onsite', 'South lake’s integrated school', '91', 16, 'San pablo city', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-17 00:00:00', '2023-08-07 14:00:37'),
(146, 1, 7, 162, 26, 'onsite', 'marcelino fule memorial college', '91', 25, 'alaminos laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-24 00:00:00', '2023-09-18 12:13:43'),
(147, 1, 7, 163, 23, 'onsite', 'San Cristobal Elementary School', '94.25', 22, 'san cristobal san pablo city', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-24 00:00:00', '2023-08-08 09:48:05'),
(148, 1, 7, 164, 23, 'onsite', 'Platon Elementary School', '94', 22, 'Alvarez St. San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-26 00:00:00', '2023-08-08 09:49:24'),
(149, 1, 7, 165, 23, 'onsite', 'San Pablo Central School', '93', 22, 'Mabini St. San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-26 00:00:00', '2023-08-22 13:55:10'),
(150, 1, 7, 166, 14, 'onsite', 'Child and Teens', '0', 29, 'San Pablo City Laguna', 'N/A', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-26 00:00:00', '2023-08-07 14:16:26'),
(151, 1, 7, 167, 23, 'onsite', 'SAN CRISTOBAL ELEMENTARY SCHOOL', '92', 22, 'SAN CRISTOBAL SAN PABLO CITY LAGUNA', 'NONE', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-26 00:00:00', '2023-08-11 07:30:08'),
(152, 1, 7, 168, 20, 'onsite', 'DEBES Elementary School', '1', 19, 'Calihan San Pablo City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-27 00:00:00', '2023-08-08 08:44:49'),
(153, 1, 7, 169, 14, 'onsite', 'NA', '1', 29, 'NA', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-27 00:00:00', '2023-08-07 14:06:16'),
(154, 1, 7, 170, 26, 'onsite', 'FCA', '1', 25, 'Baloc Rd. Brgy. San Ignacio San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-28 00:00:00', '2023-08-08 10:06:43'),
(155, 1, 7, 171, 17, 'onsite', 'Clark M. Recto Memorial Central School', '2022', 15, 'Tiaong Quezon PH', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-07-31 00:00:00', '2023-08-08 08:32:57'),
(156, 1, 7, 172, 14, 'onsite', 'N/A', '1', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-08-10 00:00:00', '2023-08-15 13:16:19'),
(157, 1, 7, 173, 17, 'onsite', 'Hope Zoel Young Builder\'s school', '93', 15, 'Efarca Village San Pablo City', 'None', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-08-10 00:00:00', '2023-08-15 13:15:58'),
(158, 1, 7, 174, 24, 'onsite', 'Col.Lauro Dizon Memorial Integrated High School', '93', 23, 'Brgy. 6-A San Pablo City', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-08-11 00:00:00', '2023-08-15 12:55:32'),
(159, 1, 7, 175, 15, 'onsite', 'Gnostic Intervention Center', '1', 0, '38 Fule Sahagun Brgy. VII A 4000 San Pablo City Philippines', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-08-17 00:00:00', '2024-03-15 12:55:59'),
(160, 1, 7, 176, 18, 'onsite', 'Escuela de Valle Verde', '89', 15, 'Greenvalley Subd. Kalihan San Pablo Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-08-23 00:00:00', '2023-10-05 07:10:39'),
(161, 1, 7, 177, 14, 'onsite', 'N/a', '1', 29, 'N/a', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-08-24 00:00:00', '2023-08-29 09:32:59'),
(162, 1, 7, 178, 16, 'onsite', 'n/a', '1', 29, 'n/a', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-08-25 00:00:00', '2023-08-29 08:47:06'),
(163, 1, 7, 179, 16, 'onsite', 'Kaleidoscope', '0', 29, 'N/A', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-08-25 00:00:00', '2023-08-29 08:46:56'),
(164, 1, 7, 180, 21, 'onsite', 'Frontline Christian Academy', '1', 20, 'NA', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-08-29 00:00:00', '2023-08-31 15:03:23'),
(165, 1, 7, 181, 16, 'onsite', 'N/A', '0', 29, 'N/A', 'N/A', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-08-30 00:00:00', '2023-08-31 15:03:59'),
(166, 1, 9, 182, 20, 'onsite', 'Ajiyoshi sho gakko', '2022', 19, 'Japan', '', 0, 1, 'Credit card payment', 30, 3, 0, 3, 1, 1, 1, 1, '2023-08-30 00:00:00', '2024-03-19 08:33:09'),
(167, 1, 7, 183, 25, 'onsite', 'Manuel L. Quezon High School', '1', 25, 'Blumentritt Rd Santa Cruz Manila', 'None', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-09-04 00:00:00', '2023-09-11 14:07:15'),
(168, 1, 7, 184, 16, 'onsite', 'Kaleidoscope Kids Learning Center', '0', 29, 'Brgy. 5C  San Pablo City Laguna', 'None', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-09-07 00:00:00', '2023-09-11 14:07:40'),
(169, 1, 7, 185, 16, 'onsite', 'na', '1', 29, 'na', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-09-14 00:00:00', '2023-09-19 13:15:31'),
(170, 1, 7, 186, 19, 'onsite', 'DEBES', '89', 18, 'Brgy. San Francisco San Pablo City', 'Jairus is sensitive to comments of persons whom he\'s closely interacting. He doesn\'t want to be left alone. He practice self time-out when he\'s processing his emotions normally 20-30 minutes. He remains quiet all through out that time.', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-09-29 00:00:00', '2023-09-29 10:59:04'),
(171, 1, 7, 187, 16, 'onsite', 'na', '1', 14, 'FCA', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-10-02 00:00:00', '2023-10-09 08:04:53'),
(172, 1, 7, 188, 21, 'onsite', '1231', '123', 20, 'San Pablo City Laguna', '', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-11-16 00:00:00', '2023-11-28 13:29:21'),
(175, 1, 7, 191, 19, 'onsite', 'FCA', '8', 21, 'Baloc', '123', 1, 1, '', 0, 0, 0, 0, 1, 1, 1, 1, '2023-11-29 00:00:00', '2023-11-29 08:18:00'),
(178, 1, 9, 196, 14, 'onsite', 'Maranatha Christian Academy', '', 16, 'Brgy. Lalig Tiaong Quezon', '', 0, 1, '', 27, 3, 0, 3, 1, 1, 1, 1, '2024-03-15 14:53:18', '2024-03-15 15:29:11'),
(179, 1, 7, 197, 21, 'onsite', 'Frontline Christian Academy', '80', 20, 'Baloc Road, San Ignacio, San Pablo City, Laguna', '', 0, 1, '', 75, 2, 14, 0, 1, 1, 1, 1, '2024-03-25 10:23:08', '2024-03-25 10:36:36'),
(180, 1, 9, 198, 17, 'onsite', 'Blue Danube School', '', 17, '385M+MW5, Palawan St, San Pablo City, Laguna, Philippines', 'no', 0, 0, '', 0, 0, 0, 0, 1, 1, 1, 1, '2024-03-31 18:45:14', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_school_year_students_requirements`
--

CREATE TABLE `fcav2_school_year_students_requirements` (
  `students_requirements_aid` int(11) NOT NULL,
  `students_requirements_is_active` tinyint(1) NOT NULL,
  `students_requirements_sy_id` int(11) NOT NULL,
  `students_requirements_student_id` int(11) NOT NULL,
  `students_requirements_id` int(11) NOT NULL,
  `students_requirements_remarks` text NOT NULL,
  `students_requirements_created` datetime NOT NULL,
  `students_requirements_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_school_year_students_requirements`
--

INSERT INTO `fcav2_school_year_students_requirements` (`students_requirements_aid`, `students_requirements_is_active`, `students_requirements_sy_id`, `students_requirements_student_id`, `students_requirements_id`, `students_requirements_remarks`, `students_requirements_created`, `students_requirements_datetime`) VALUES
(1, 1, 8, 195, 2, '', '2024-03-15 10:25:15', '2024-03-15 10:25:15'),
(2, 1, 9, 196, 4, '', '2024-03-18 08:43:03', '2024-03-18 08:43:03'),
(3, 1, 9, 182, 1, '', '2024-03-18 13:28:57', '2024-03-18 13:28:57'),
(4, 1, 9, 182, 2, '', '2024-03-18 13:29:03', '2024-03-18 13:29:03'),
(5, 1, 9, 182, 4, '', '2024-03-18 13:29:05', '2024-03-18 13:29:05'),
(6, 1, 9, 182, 5, '', '2024-03-18 13:30:24', '2024-03-18 13:30:24'),
(7, 1, 9, 182, 6, '', '2024-03-18 13:30:25', '2024-03-18 13:30:25'),
(8, 1, 9, 182, 3, '', '2024-03-18 13:30:30', '2024-03-18 13:30:30'),
(9, 1, 7, 197, 1, '', '2024-03-25 10:23:23', '2024-03-25 10:23:23'),
(10, 1, 7, 197, 2, '', '2024-03-25 10:23:24', '2024-03-25 10:23:24'),
(11, 1, 7, 197, 3, '', '2024-03-25 10:23:25', '2024-03-25 10:23:25'),
(12, 1, 7, 197, 4, '', '2024-03-25 10:23:25', '2024-03-25 10:23:25'),
(13, 1, 7, 197, 5, '', '2024-03-25 10:23:26', '2024-03-25 10:23:26'),
(14, 1, 7, 197, 6, '', '2024-03-25 10:23:26', '2024-03-25 10:23:26');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_department`
--

CREATE TABLE `fcav2_settings_department` (
  `department_aid` int(11) NOT NULL,
  `department_active` tinyint(1) NOT NULL,
  `department_name` varchar(50) NOT NULL,
  `department_created` varchar(20) NOT NULL,
  `department_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_department`
--

INSERT INTO `fcav2_settings_department` (`department_aid`, `department_active`, `department_name`, `department_created`, `department_datetime`) VALUES
(1, 1, 'Registrar', '2024-02-26 14:45:14', '2024-02-26 14:45:45'),
(2, 1, 'IT', '2024-02-26 14:45:52', '2024-02-26 14:45:52'),
(3, 1, 'Finance', '2024-02-26 14:45:58', '2024-02-26 14:45:58');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_discount`
--

CREATE TABLE `fcav2_settings_discount` (
  `discount_aid` int(11) NOT NULL,
  `discount_category_id` varchar(20) NOT NULL,
  `discount_type` varchar(200) NOT NULL,
  `discount_is_active` tinyint(1) NOT NULL,
  `discount_admission_fee` varchar(50) NOT NULL,
  `discount_tuition_fee` varchar(50) NOT NULL,
  `discount_qualification` text NOT NULL,
  `discount_duration` text NOT NULL,
  `discount_maintaining_grade` varchar(200) NOT NULL,
  `discount_requirement` text NOT NULL,
  `discount_created` datetime NOT NULL,
  `discount_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_discount`
--

INSERT INTO `fcav2_settings_discount` (`discount_aid`, `discount_category_id`, `discount_type`, `discount_is_active`, `discount_admission_fee`, `discount_tuition_fee`, `discount_qualification`, `discount_duration`, `discount_maintaining_grade`, `discount_requirement`, `discount_created`, `discount_updated`) VALUES
(1, '1', 'Academic - Top 1&2 G4/G7', 1, '30', '30', 'Top 1/2  of class', 'Up to G6 or G10', '87', 'Cert from Prev School', '2024-02-19 16:05:33', '2024-03-18 15:09:44'),
(3, '1', 'Pastor/Missionary Discount', 1, '30', '30', 'Child/ren of the qualified Pastor/Missionary', 'Duration of service at current church, or one (1) school year; whichever is longer.', '', 'Certification from church, and SEC Registration of church', '2024-02-29 08:07:57', '2024-02-29 08:07:57'),
(4, '2', 'Children of Pastors/Missionaries', 1, '50', '50', 'Child/ren of the qualified Pastor/Missionary', 'Duration of service at current church, or one (1) school year; whichever is longer.', '', 'Certification from church, and SEC Registration of church', '2024-03-18 09:10:45', '2024-03-18 09:11:43'),
(5, '2', 'PFM Affiliate', 1, '40', '40', 'Any PFM Affiliate (FBS, FTW, UE)', 'Duration of Employment at PFM affiliate, or one (1) school year; whichever is longer.', '', '', '2024-03-18 09:12:47', '2024-03-18 15:36:27'),
(6, '2', 'Academic Discount (Grade 4 Transferee)', 1, '50', '50', 'Top 1 & 2 of Class', 'Up to Grade 6', '87', 'Certification from Previous School', '2024-03-18 15:13:47', '2024-03-18 15:13:47'),
(7, '2', 'Academic Discount (Incoming Grade 7)', 1, '50', '50', 'Top 1 & 2 of Class', 'Up to Grade 10', '87', 'Certification from Previous School', '2024-03-18 15:15:47', '2024-03-18 15:15:47'),
(8, '2', 'Sibling Discount 2-2', 1, '', '30', '2nd Sibling of 2 Enrolled at FCA', '2nd Sibling of 2 Enrolled at FCA', '', '', '2024-03-18 15:31:10', '2024-03-18 15:32:35'),
(9, '2', 'Sibling Discount 1-3', 1, '', '30', '1st Sibling of 3 or more Enrolled at FCA', 'While Enrolled at FCA', '', '', '2024-03-18 15:32:27', '2024-03-18 15:34:13'),
(10, '2', 'Sibling Discount 2-3', 1, '', '40', '2nd Sibling of 3 or more Enrolled at FCA', 'While Enrolled at FCA', '', '', '2024-03-18 15:33:18', '2024-03-18 15:34:25'),
(11, '2', 'Sibling Discount 3+', 1, '', '50', '3rd Sibling (and up) Enrolled at FCA', 'While Enrolled at FCA', '', '', '2024-03-18 15:34:03', '2024-03-18 15:34:03'),
(12, '2', 'Sibling Discount 4+', 1, '', '100', '4th Sibling (and up) Enrolled at FCA', 'While Enrolled at FCA', '', '', '2024-03-18 15:35:30', '2024-03-18 15:35:30'),
(13, '4', 'Academic Discounts (Incoming Grade 7)', 1, '30', '30', 'Top 1 and 2 of Class', 'Up to Grade 10', '87', 'Certification from the Registrar', '2024-03-19 13:44:30', '2024-04-26 08:54:27'),
(14, '4', 'FCA 3y+', 1, '50', '50', 'Employee of FCA for 3 years and above', 'Duration of employment to FCA', '', '', '2024-03-25 10:26:10', '2024-03-25 10:26:10'),
(15, '1', 'Sibling Discount 2-2', 1, '', '10', '2nd Sibling of 2 Enrolled at FCA', 'While Enrolled at FCA', '', '', '2024-04-26 08:43:09', '2024-04-26 08:43:44'),
(16, '1', 'Sibling Discount 1-3', 1, '', '10', '1st Sibling of 3 Enrolled at FCA', 'While Enrolled at FCA', '', '', '2024-04-26 08:44:21', '2024-04-26 08:44:21'),
(17, '1', 'Sibling Discount 2-3', 1, '', '20', '2nd Sibling of 3 Enrolled at FCA', 'While Enrolled at FCA', '', '', '2024-04-26 08:45:03', '2024-04-26 08:45:03'),
(18, '1', 'Sibling Discount 3-3', 1, '', '30', '3rd Sibling of 3 Enrolled at FCA', 'While Enrolled at FCA', '', '', '2024-04-26 08:45:34', '2024-04-26 08:45:34'),
(19, '1', 'Sibling Discount 4+', 1, '', '100', '4th Sibling (and up) Enrolled at FCA', 'While Enrolled at FCA', '', '', '2024-04-26 08:46:20', '2024-04-26 08:46:20'),
(20, '4', 'Loyalty Benefits (Incoming Grade1 rom FCA)', 1, '', '30', 'Completed K2 at FCA', '\\\"Discount: Until Grade 3\nSchool Supplies: Grade 1 only\\\"', '', '', '2024-04-26 08:58:14', '2024-04-26 08:58:14'),
(21, '4', 'Sibling Discount 2-2', 1, '', '10', '2nd Sibling of 2 Enrolled at FCA', 'While Enrolled at FCA', '', '', '2024-04-26 08:59:59', '2024-04-26 08:59:59'),
(22, '4', 'Sibling Discount 1-3', 1, '', '10', '1st Sibling of 3 Enrolled at FCA', 'While Enrolled at FCA', '', '', '2024-04-26 09:00:24', '2024-04-26 09:00:24'),
(23, '4', 'Sibling Discount 2-3', 1, '', '20', '2nd Sibling of 3 Enrolled at FCA', 'While Enrolled at FCA', '', '', '2024-04-26 09:00:55', '2024-04-26 09:00:55'),
(24, '4', 'Sibling Discount 3-3', 1, '', '30', '3rd Sibling (and up) Enrolled at FCA', 'While Enrolled at FCA', '', '', '2024-04-26 09:01:40', '2024-04-26 09:01:40'),
(25, '4', 'Sibling Discount 4+', 1, '', '100', '4th Sibling (and up) Enrolled at FCA', 'While Enrolled at FCA', '', '', '2024-04-26 09:02:06', '2024-04-26 09:02:06'),
(26, '4', 'Child/ren of Pastor/Missionary', 1, '30', '30', 'Child/ren of the qualified Pastor', 'Duration of service at current church, or one (1) school year; whichever is longer.', '', 'Certification from church, and SEC Registration of church', '2024-04-26 09:04:06', '2024-04-26 09:04:06');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_discount_additional`
--

CREATE TABLE `fcav2_settings_discount_additional` (
  `discount_additional_aid` int(11) NOT NULL,
  `discount_additional_is_active` tinyint(1) NOT NULL,
  `discount_additional_name` varchar(200) NOT NULL,
  `discount_additional_percent` varchar(20) NOT NULL,
  `discount_additional_amount` varchar(20) NOT NULL,
  `discount_additional_created` datetime NOT NULL,
  `discount_additional_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_discount_additional`
--

INSERT INTO `fcav2_settings_discount_additional` (`discount_additional_aid`, `discount_additional_is_active`, `discount_additional_name`, `discount_additional_percent`, `discount_additional_amount`, `discount_additional_created`, `discount_additional_updated`) VALUES
(1, 1, 'Enable Full Payment Discount?', '10', '', '2024-02-23 09:06:00', '2024-02-23 09:06:00'),
(2, 1, 'Enable New Student Promo?', '', '1500', '2024-02-23 09:06:36', '2024-02-23 09:06:36'),
(3, 1, 'Enable Early Bird Promo?', '', '', '2024-02-23 09:07:43', '2024-02-23 09:07:43'),
(4, 1, 'Enable Loyalty Discount?', '30', '', '2024-03-14 14:38:45', '2024-03-14 14:38:45'),
(5, 1, 'Enable Re-Enrolling Promo?', '', '1000', '2024-03-14 14:39:11', '2024-03-14 14:39:11');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_discount_category`
--

CREATE TABLE `fcav2_settings_discount_category` (
  `discount_category_aid` int(11) NOT NULL,
  `discount_category_name` varchar(200) NOT NULL,
  `discount_category_is_active` tinyint(1) NOT NULL,
  `discount_category_created` datetime NOT NULL,
  `discount_category_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_discount_category`
--

INSERT INTO `fcav2_settings_discount_category` (`discount_category_aid`, `discount_category_name`, `discount_category_is_active`, `discount_category_created`, `discount_category_updated`) VALUES
(1, 'Legacy', 1, '2024-02-19 15:00:23', '2024-03-18 15:46:58'),
(2, 'Regular', 1, '2024-02-19 15:03:39', '2024-03-18 15:07:52'),
(4, 'Loyalty', 1, '2024-03-19 13:40:51', '2024-03-19 13:40:51');

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
(6, 'Notify Parent', 'FCA SMIS - Enrollment', 1, 'Greetings!\n\n\nWe would like to inform you that the {Tuition Fee Category} rate has been applied to {Student Name} profile. ', 'client', 'assessment-notify-parents', '', '', '2024-03-18 15:35:01', '2024-03-25 10:34:05'),
(7, 'Notify Payment', 'FCA SMIS - Payment Confirmation', 1, 'Message 2', 'client', 'assessment-accept-payment', '', '', '2024-03-25 10:34:42', '2024-03-25 10:34:42'),
(8, 'Notify Finance', 'FCA SMIS - Payment Scheme Selected', 1, 'Message 3', 'client', 'assessment-notify-finance', '', '', '2024-03-25 10:35:47', '2024-03-25 10:35:47');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_grade_level`
--

CREATE TABLE `fcav2_settings_grade_level` (
  `grade_level_aid` int(11) NOT NULL,
  `grade_level_active` tinyint(1) NOT NULL,
  `grade_level_order` int(11) NOT NULL,
  `grade_level_name` varchar(50) NOT NULL,
  `grade_level_is_pre_school` tinyint(1) NOT NULL,
  `grade_level_created` datetime NOT NULL,
  `grade_level_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_grade_level`
--

INSERT INTO `fcav2_settings_grade_level` (`grade_level_aid`, `grade_level_active`, `grade_level_order`, `grade_level_name`, `grade_level_is_pre_school`, `grade_level_created`, `grade_level_datetime`) VALUES
(14, 1, 1, 'Pre-kindergarten', 1, '2022-11-24 00:00:00', '2022-11-24 12:30:31'),
(15, 1, 2, 'Kindergarten', 1, '2022-11-24 00:00:00', '2022-11-24 12:30:39'),
(16, 1, 3, 'Nursery', 1, '2022-11-24 00:00:00', '2022-11-24 12:36:42'),
(17, 1, 4, 'Grade 1', 0, '2022-11-24 00:00:00', '2022-11-24 12:36:46'),
(18, 1, 5, 'Grade 2', 0, '2022-11-24 00:00:00', '2022-11-24 12:36:53'),
(19, 1, 6, 'Grade 3', 0, '2022-11-24 00:00:00', '2022-11-24 12:37:02'),
(20, 1, 7, 'Grade 4', 0, '2022-11-24 00:00:00', '2022-11-24 12:37:07'),
(21, 1, 8, 'Grade 5', 0, '2022-11-24 00:00:00', '2022-11-24 12:37:11'),
(22, 1, 9, 'Grade 6', 0, '2022-11-24 00:00:00', '2022-11-24 12:37:16'),
(23, 1, 10, 'Grade 7', 0, '2022-11-24 00:00:00', '2022-11-24 12:37:21'),
(24, 1, 11, 'Grade 8', 0, '2022-11-24 00:00:00', '2022-11-24 12:37:25'),
(25, 1, 12, 'Grade 9', 0, '2022-11-24 00:00:00', '2022-11-24 12:37:31'),
(26, 1, 13, 'Grade10', 0, '2022-11-24 00:00:00', '2022-11-24 12:37:58');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_learning_type`
--

CREATE TABLE `fcav2_settings_learning_type` (
  `learning_type_aid` int(11) NOT NULL,
  `learning_type_active` tinyint(1) NOT NULL,
  `learning_type_name` varchar(50) NOT NULL,
  `learning_type_created` varchar(20) NOT NULL,
  `learning_type_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_learning_type`
--

INSERT INTO `fcav2_settings_learning_type` (`learning_type_aid`, `learning_type_active`, `learning_type_name`, `learning_type_created`, `learning_type_datetime`) VALUES
(1, 1, 'Online', '2024-03-12 15:24:45', '2024-03-12 15:24:45'),
(6, 1, 'On-site', '2024-03-12 15:24:51', '2024-03-12 15:24:51');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_notification`
--

CREATE TABLE `fcav2_settings_notification` (
  `notification_aid` int(11) NOT NULL,
  `notification_active` tinyint(1) NOT NULL,
  `notification_department_id` int(11) NOT NULL,
  `notification_email` varchar(50) NOT NULL,
  `notification_name` varchar(50) NOT NULL,
  `notification_created` varchar(20) NOT NULL,
  `notification_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_notification`
--

INSERT INTO `fcav2_settings_notification` (`notification_aid`, `notification_active`, `notification_department_id`, `notification_email`, `notification_name`, `notification_created`, `notification_datetime`) VALUES
(1, 1, 1, 'cy@gmail.com', 'cycy', '2024-03-20 10:27:12', '2024-03-20 10:27:12');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_relationship`
--

CREATE TABLE `fcav2_settings_relationship` (
  `relationship_aid` int(11) NOT NULL,
  `relationship_active` tinyint(1) NOT NULL,
  `relationship_name` varchar(50) NOT NULL,
  `relationship_is_maiden` tinyint(1) NOT NULL,
  `relationship_created` varchar(20) NOT NULL,
  `relationship_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_relationship`
--

INSERT INTO `fcav2_settings_relationship` (`relationship_aid`, `relationship_active`, `relationship_name`, `relationship_is_maiden`, `relationship_created`, `relationship_datetime`) VALUES
(3, 1, 'Grandfather', 0, '2024-02-27 13:29:23', '2024-03-07 14:54:07'),
(4, 1, 'Grandmother', 0, '2024-02-27 13:29:31', '2024-03-07 14:54:12'),
(12, 1, 'Mother', 1, '2024-02-27 13:29:14', '2024-03-07 14:52:06'),
(13, 1, 'Father', 0, '2024-02-27 13:29:06', '2024-03-07 14:54:04'),
(14, 1, 'Guardian', 0, '2024-02-27 13:29:31', '2024-03-18 16:01:35');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_requirement_finance`
--

CREATE TABLE `fcav2_settings_requirement_finance` (
  `requirement_finance_aid` int(11) NOT NULL,
  `requirement_finance_active` tinyint(1) NOT NULL,
  `requirement_finance_department_id` int(11) NOT NULL,
  `requirement_finance_name` varchar(50) NOT NULL,
  `requirement_finance_created` varchar(20) NOT NULL,
  `requirement_finance_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_requirement_it`
--

CREATE TABLE `fcav2_settings_requirement_it` (
  `requirement_it_aid` int(11) NOT NULL,
  `requirement_it_active` tinyint(1) NOT NULL,
  `requirement_it_department_id` int(11) NOT NULL,
  `requirement_it_name` varchar(50) NOT NULL,
  `requirement_it_created` varchar(20) NOT NULL,
  `requirement_it_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_requirement_registrar`
--

CREATE TABLE `fcav2_settings_requirement_registrar` (
  `requirement_registrar_aid` int(11) NOT NULL,
  `requirement_registrar_active` tinyint(1) NOT NULL,
  `requirement_registrar_department_id` int(11) NOT NULL,
  `requirement_registrar_is_for_pre_school` tinyint(1) NOT NULL,
  `requirement_registrar_name` varchar(120) NOT NULL,
  `requirement_registrar_created` varchar(20) NOT NULL,
  `requirement_registrar_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_requirement_registrar`
--

INSERT INTO `fcav2_settings_requirement_registrar` (`requirement_registrar_aid`, `requirement_registrar_active`, `requirement_registrar_department_id`, `requirement_registrar_is_for_pre_school`, `requirement_registrar_name`, `requirement_registrar_created`, `requirement_registrar_datetime`) VALUES
(1, 1, 1, 0, 'Certificate of Clearance (Financial and Property Responsibility)', '2024-02-26 14:46:25', '2024-02-26 14:46:25'),
(2, 1, 1, 0, 'Form 137/SF10', '2024-02-26 14:46:39', '2024-02-26 14:46:39'),
(3, 1, 1, 0, 'Good Moral Certificate', '2024-02-26 14:46:46', '2024-02-26 14:46:46'),
(4, 1, 1, 1, 'LCR / Local Civil Registry Birth Certificate (Temporary Enrollment Only) OR', '2024-02-26 14:46:52', '2024-03-15 15:40:31'),
(5, 1, 1, 0, 'Passport - Photocopy made at FCA (Temporary Enrollment Only)', '2024-02-26 14:46:59', '2024-02-26 14:46:59'),
(6, 1, 1, 0, 'PSA / Philippine Statistics Authority Original Birth Certificate', '2024-02-26 14:47:05', '2024-03-15 15:40:25');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_role`
--

CREATE TABLE `fcav2_settings_role` (
  `role_aid` int(11) NOT NULL,
  `role_is_active` tinyint(1) NOT NULL,
  `role_name` varchar(50) NOT NULL,
  `role_description` text NOT NULL,
  `role_created` varchar(20) NOT NULL,
  `role_datetime` varchar(20) NOT NULL,
  `role_is_developer` tinyint(1) NOT NULL,
  `role_is_admin` tinyint(1) NOT NULL,
  `role_is_client` tinyint(1) NOT NULL,
  `role_is_parent` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_role`
--

INSERT INTO `fcav2_settings_role` (`role_aid`, `role_is_active`, `role_name`, `role_description`, `role_created`, `role_datetime`, `role_is_developer`, `role_is_admin`, `role_is_client`, `role_is_parent`) VALUES
(1, 1, 'developer', 'qqqqqq', '2023-12-19 14:07:05', '2023-12-19 14:07:05', 1, 0, 0, 0),
(2, 1, 'Admin', 'test', '2024-01-08 14:09:28', '2024-01-08 14:09:28', 0, 1, 0, 0),
(4, 1, 'Parent', 'This is for parent only', '2024-02-14 07:49:38', '2024-02-14 07:49:38', 0, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_scheme`
--

CREATE TABLE `fcav2_settings_scheme` (
  `scheme_aid` int(11) NOT NULL,
  `scheme_active` tinyint(1) NOT NULL,
  `scheme_name` varchar(50) NOT NULL,
  `scheme_created` varchar(20) NOT NULL,
  `scheme_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_scheme`
--

INSERT INTO `fcav2_settings_scheme` (`scheme_aid`, `scheme_active`, `scheme_name`, `scheme_created`, `scheme_datetime`) VALUES
(1, 1, 'Scheme A', '2024-02-26 15:22:59', '2024-02-29 07:49:01'),
(2, 1, 'Scheme B', '2024-02-26 15:25:17', '2024-02-29 07:49:06'),
(3, 1, 'Scheme C', '2024-02-29 07:48:56', '2024-02-29 07:49:09');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_school_year`
--

CREATE TABLE `fcav2_settings_school_year` (
  `school_year_aid` int(11) NOT NULL,
  `school_year_is_active` tinyint(1) NOT NULL,
  `school_year_start_date` varchar(20) NOT NULL,
  `school_year_end_date` varchar(20) NOT NULL,
  `school_year_enrollment_start_date` varchar(20) NOT NULL,
  `school_year_enrollment_end_date` varchar(20) NOT NULL,
  `school_year_is_enrollment_open` tinyint(1) NOT NULL,
  `school_year_created` datetime NOT NULL,
  `school_year_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_school_year`
--

INSERT INTO `fcav2_settings_school_year` (`school_year_aid`, `school_year_is_active`, `school_year_start_date`, `school_year_end_date`, `school_year_enrollment_start_date`, `school_year_enrollment_end_date`, `school_year_is_enrollment_open`, `school_year_created`, `school_year_datetime`) VALUES
(7, 0, '2023-04-01', '2024-06-30', '', '', 0, '2024-03-07 13:32:28', '0000-00-00 00:00:00'),
(9, 1, '2024-08-01', '2025-06-30', '', '', 1, '2024-03-15 13:43:41', '2024-03-26 08:41:52');

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
(8, 1, 'Rhoda', 'Pessina', 'rhoda.pessina@fca.edu.ph', '2024-03-15 10:38:35', '2024-03-15 10:38:35'),
(9, 1, 'Registrar', 'FCA', 'registrar@fca.edu.ph', '2024-03-15 10:39:01', '2024-03-15 10:39:01'),
(10, 1, 'Finance', 'FCA', 'Finance@fca.edu.ph', '2024-03-15 10:39:13', '2024-03-15 10:39:13'),
(11, 1, 'Patrick', 'Reyes', 'patrick.reyes@frontlinebusiness.com.ph', '2024-03-15 10:43:20', '2024-03-15 10:43:20'),
(12, 1, 'Alexander', 'Ubeda', 'ict@fca.edu.ph', '2024-03-15 11:02:34', '2024-03-15 11:02:34'),
(13, 1, 'Morrhine Camille', 'Reclosa', 'mc.reclosa@fca.edu.ph', '2024-03-18 08:57:56', '2024-03-18 08:57:56'),
(14, 1, 'Niel Patrick', 'Jaron', 'niel.jaron@fca.edu.ph', '2024-03-18 08:58:16', '2024-03-18 08:58:16');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_system_mode`
--

CREATE TABLE `fcav2_settings_system_mode` (
  `system_mode_aid` int(11) NOT NULL,
  `system_mode_name` varchar(200) NOT NULL,
  `system_mode_is_on` tinyint(1) NOT NULL,
  `system_mode_created` datetime NOT NULL,
  `system_mode_updated` datetime NOT NULL,
  `system_mode_is_maintenance` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_system_mode`
--

INSERT INTO `fcav2_settings_system_mode` (`system_mode_aid`, `system_mode_name`, `system_mode_is_on`, `system_mode_created`, `system_mode_updated`, `system_mode_is_maintenance`) VALUES
(1, 'Maintenance', 0, '2024-02-15 13:53:53', '2024-03-14 13:47:11', 1);

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_tuition_category`
--

CREATE TABLE `fcav2_settings_tuition_category` (
  `tuition_category_aid` int(11) NOT NULL,
  `tuition_category_active` tinyint(1) NOT NULL,
  `tuition_category_name` varchar(50) NOT NULL,
  `tuition_category_created` varchar(20) NOT NULL,
  `tuition_category_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_tuition_category`
--

INSERT INTO `fcav2_settings_tuition_category` (`tuition_category_aid`, `tuition_category_active`, `tuition_category_name`, `tuition_category_created`, `tuition_category_datetime`) VALUES
(1, 1, 'Legacy', '2024-02-26 15:22:56', '2024-02-29 07:49:36'),
(2, 1, 'Loyalty', '2024-02-29 07:49:46', '2024-02-29 07:49:46'),
(3, 1, 'Regular', '2024-02-29 07:49:52', '2024-02-29 07:49:52'),
(4, 1, 'Sponsored', '2024-03-07 14:02:25', '2024-03-13 08:20:23');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_tuition_fee`
--

CREATE TABLE `fcav2_settings_tuition_fee` (
  `tuition_fee_aid` int(11) NOT NULL,
  `tuition_fee_active` tinyint(1) NOT NULL,
  `tuition_fee_category_id` varchar(20) NOT NULL,
  `tuition_fee_grade_id` varchar(20) NOT NULL,
  `tuition_fee_scheme_id` varchar(20) NOT NULL,
  `tuition_fee_miscellaneous` varchar(20) NOT NULL,
  `tuition_fee_tuition` varchar(20) NOT NULL,
  `tuition_fee_books` varchar(20) NOT NULL,
  `tuition_fee_admission` varchar(20) NOT NULL,
  `tuition_fee_upon_enrollment` varchar(20) NOT NULL,
  `tuition_fee_monthly` varchar(20) NOT NULL,
  `tuition_fee_how_many_months` varchar(20) NOT NULL,
  `tuition_fee_total_monthly` varchar(20) NOT NULL,
  `tuition_fee_created` datetime NOT NULL,
  `tuition_fee_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_tuition_fee`
--

INSERT INTO `fcav2_settings_tuition_fee` (`tuition_fee_aid`, `tuition_fee_active`, `tuition_fee_category_id`, `tuition_fee_grade_id`, `tuition_fee_scheme_id`, `tuition_fee_miscellaneous`, `tuition_fee_tuition`, `tuition_fee_books`, `tuition_fee_admission`, `tuition_fee_upon_enrollment`, `tuition_fee_monthly`, `tuition_fee_how_many_months`, `tuition_fee_total_monthly`, `tuition_fee_created`, `tuition_fee_updated`) VALUES
(21, 1, '2', '17', '1', '2000', '31200', '9239.43', '10200', '52639.43', '', '', '0', '2024-03-14 14:08:57', '2024-03-14 14:08:57'),
(22, 1, '2', '17', '2', '500', '7800', '2309.86', '2550', '13159.86', '13549.856', '3', '40649.568', '2024-03-14 14:10:00', '2024-03-14 14:10:00'),
(23, 1, '2', '17', '3', '400.00', '6240.00', '1847.89', '2040.00', '10527.89', '4956.393', '9', '44607.537', '2024-03-14 14:10:45', '2024-03-14 14:10:45'),
(24, 1, '3', '17', '1', '2000', '33000', '9239.43', '12000', '56239.43', '', '', '0', '2024-03-14 14:11:12', '2024-03-14 14:11:21'),
(25, 1, '3', '17', '2', '500', '8250', '2309.86', '3000', '14059.86', '14472.356', '3', '43417.068', '2024-03-14 14:12:32', '2024-03-14 14:12:32'),
(26, 1, '3', '17', '3', '400', '6600', '1847.89', '2400', '11247.89', '5292.393', '9', '47631.537', '2024-03-14 14:13:42', '2024-03-14 14:13:49'),
(27, 1, '3', '14', '1', '2000', '35000', '5102.55', '12000', '54102.55', '', '', '0', '2024-03-15 14:58:55', '2024-03-15 14:58:55'),
(28, 1, '3', '16', '1', '2000', '35000', '6320.79', '12000', '55320.79', '', '', '0', '2024-03-18 13:08:13', '2024-03-18 13:08:13'),
(29, 1, '3', '16', '2', '1000', '17500', '3160.40', '6000', '27660.4', '5707.08', '5', '28535.4', '2024-03-18 13:10:00', '2024-03-18 13:10:00'),
(30, 1, '3', '20', '1', '2000', '33000', '10606.43', '12000', '57606.43', '', '', '0', '2024-03-18 13:22:02', '2024-03-18 13:22:02'),
(31, 1, '3', '20', '2', '500', '8250', '2651.61', '3000', '14401.61', '14814.11', '3', '44442.33', '2024-03-18 13:28:46', '2024-03-18 13:28:46'),
(32, 1, '3', '20', '3', '400', '6600', '2121.29', '2400', '11521.29', '5413.90', '9', '48725.1', '2024-03-18 13:29:25', '2024-03-18 13:29:25'),
(33, 1, '3', '16', '3', '400', '7000', '1264.16', '2400', '11064.16', '9411.33', '5', '47056.65', '2024-03-18 13:30:16', '2024-03-18 13:30:16'),
(34, 1, '3', '14', '2', '1000', '17500', '2551.28', '6000', '27051.28', '5585.26', '5', '27926.3', '2024-03-18 13:31:57', '2024-03-18 13:31:57'),
(35, 1, '3', '14', '3', '400', '7000', '1020.51', '2400', '10820.51', '9216.41', '5', '46082.05', '2024-03-18 13:49:42', '2024-03-18 13:49:42'),
(36, 1, '3', '15', '1', '2000', '35000', '4743.25', '12000', '53743.25', '', '', '0', '2024-03-18 13:50:21', '2024-03-18 13:51:02'),
(37, 1, '3', '15', '2', '500', '8750', '1185.81', '3000', '13435.81', '13873.31', '3', '41619.93', '2024-03-18 13:51:48', '2024-03-18 13:51:48'),
(38, 1, '3', '15', '3', '400', '7000', '948.65', '2400', '10748.65', '5088.29', '9', '45794.61', '2024-03-18 13:52:35', '2024-03-18 13:52:35'),
(39, 1, '3', '18', '1', '2000', '33000', '9774.03', '12000', '56774.03', '', '', '0', '2024-03-18 13:53:56', '2024-03-18 13:53:56'),
(40, 1, '3', '18', '2', '500', '8250', '2443.51', '3000', '14193.51', '14606.01', '3', '43818.03', '2024-03-18 13:54:15', '2024-03-18 13:54:35'),
(41, 1, '3', '18', '3', '400', '6600', '1954.81', '2400', '11354.81', '5339.91', '9', '48059.19', '2024-03-18 13:55:03', '2024-03-18 13:55:03'),
(42, 1, '3', '19', '1', '2000', '33000', '10276.18', '12000', '57276.18', '', '', '0', '2024-03-18 13:55:46', '2024-03-18 13:55:46'),
(43, 1, '3', '19', '2', '500', '8250', '2569.05', '3000', '14319.05', '14731.55', '3', '44194.65', '2024-03-18 13:56:17', '2024-03-18 13:56:17'),
(44, 1, '3', '19', '3', '400', '6600', '2055.24', '2400', '11455.24', '5384.55', '9', '48460.95', '2024-03-18 13:56:47', '2024-03-18 13:56:47'),
(45, 1, '3', '21', '1', '2000', '33000', '10014.45', '12000', '57014.45', '', '', '0', '2024-03-18 13:57:22', '2024-03-18 13:57:22'),
(46, 1, '3', '21', '2', '500', '8250', '2503.61', '3000', '14253.61', '14666.11', '3', '43998.33', '2024-03-18 13:57:50', '2024-03-18 13:57:50'),
(47, 1, '3', '21', '3', '400', '6600', '2002.89', '2400', '11402.89', '5361.28', '9', '48251.52', '2024-03-18 13:58:22', '2024-03-18 13:58:22'),
(48, 1, '3', '22', '1', '2000', '33000', '9992.85', '12000', '56992.85', '', '', '0', '2024-03-18 14:15:17', '2024-03-18 14:15:17'),
(49, 1, '3', '22', '2', '500', '8250', '2498.21', '3000', '14248.21', '14660.71', '3', '43982.13', '2024-03-18 14:15:48', '2024-03-18 14:15:48'),
(50, 1, '3', '22', '3', '400', '6600', '1998.57', '2400', '11398.57', '5359.36', '9', '48234.24', '2024-03-18 14:16:19', '2024-03-18 14:16:19'),
(51, 1, '3', '23', '1', '2000', '33000', '11716.95', '12000', '58716.95', '', '', '0', '2024-03-18 14:16:46', '2024-03-18 14:16:46'),
(52, 1, '3', '23', '2', '500', '8250', '2929.24', '3000', '14679.24', '15091.74', '3', '45275.22', '2024-03-18 14:17:12', '2024-03-18 14:17:12'),
(53, 1, '3', '23', '3', '400', '6600', '2343.39', '2400', '11743.39', '5512.62', '9', '49613.58', '2024-03-18 14:17:36', '2024-03-18 14:17:36'),
(54, 1, '3', '24', '1', '2000', '33000', '9320.15', '12000', '56320.15', '', '', '0', '2024-03-18 14:18:04', '2024-03-18 14:18:04'),
(55, 1, '3', '24', '2', '500', '8250', '2330.04', '3000', '14080.04', '14492.54', '3', '43477.62', '2024-03-18 14:18:29', '2024-03-18 14:18:29'),
(56, 1, '3', '24', '3', '400', '6600', '1864.03', '2400', '11264.03', '5299.57', '9', '47696.13', '2024-03-18 14:18:55', '2024-03-18 14:18:55'),
(57, 1, '3', '25', '1', '2000', '33000', '7753.81', '12000', '54753.81', '', '', '0', '2024-03-18 14:19:26', '2024-03-18 14:19:26'),
(58, 1, '3', '25', '2', '500', '8250', '1938.45', '3000', '13688.45', '14100.95', '3', '42302.85', '2024-03-18 14:19:51', '2024-03-18 14:19:51'),
(59, 1, '3', '25', '3', '400', '6600', '1550.76', '2400', '10950.76', '5160.34', '9', '46443.06', '2024-03-18 14:20:14', '2024-03-18 14:20:14'),
(60, 1, '3', '26', '1', '2000', '33000', '9679.25', '12000', '56679.25', '', '', '0', '2024-03-18 14:21:06', '2024-03-18 14:21:06'),
(61, 1, '3', '26', '2', '500', '8250', '2419.81', '3000', '14169.81', '14582.31', '3', '43746.93', '2024-03-18 14:21:35', '2024-03-18 14:21:35'),
(62, 1, '3', '26', '3', '400', '6600', '1935.85', '2400', '11335.85', '5331.49', '9', '47983.41', '2024-03-18 14:22:03', '2024-03-18 14:22:03'),
(63, 1, '2', '15', '1', '2000', '32500', '4743.25', '10200', '49443.25', '', '', '0', '2024-03-18 14:22:57', '2024-03-18 14:24:10'),
(64, 1, '2', '15', '2', '500', '8125', '1185.81', '2550', '12360.81', '12767.06', '3', '38301.18', '2024-03-18 14:23:43', '2024-03-18 14:23:43'),
(65, 1, '2', '15', '3', '400', '6500', '948.65', '2040', '9888.65', '4683.84', '9', '42154.56', '2024-03-18 14:24:48', '2024-03-18 14:24:48'),
(66, 1, '2', '18', '1', '2000', '28200', '9774.03', '10200', '50174.03', '', '', '0', '2024-03-18 14:28:38', '2024-03-18 14:28:38'),
(67, 1, '2', '18', '2', '500', '7050', '2443.51', '2550', '12543.51', '12896.01', '3', '38688.03', '2024-03-18 14:29:12', '2024-03-18 14:29:12'),
(68, 1, '2', '18', '3', '400', '5640', '1954.81', '2040', '10034.81', '4710.58', '9', '42395.22', '2024-03-18 14:29:41', '2024-03-18 14:29:41'),
(69, 1, '2', '19', '1', '2000', '28200', '10276.18', '10200', '50676.18', '', '', '0', '2024-03-18 14:30:11', '2024-03-18 14:30:11'),
(70, 1, '2', '19', '2', '500', '7050', '2569.05', '2550', '12669.05', '13021.55', '3', '39064.65', '2024-03-18 14:30:38', '2024-03-18 14:30:38'),
(71, 1, '2', '19', '3', '400', '5640', '2055.24', '2040', '10135.24', '4755.22', '9', '42796.98', '2024-03-18 14:31:06', '2024-03-18 14:31:06'),
(72, 1, '2', '20', '1', '2000', '29700', '10606.43', '10200', '52506.43', '', '', '0', '2024-03-18 14:31:35', '2024-03-18 14:31:35'),
(73, 1, '2', '20', '2', '500', '7425', '2651.61', '2550', '13126.61', '13497.86', '3', '40493.58', '2024-03-18 14:32:15', '2024-03-18 14:32:15'),
(74, 1, '2', '20', '3', '400', '5940', '2121.29', '2040', '10501.29', '4931.24', '9', '44381.16', '2024-03-18 14:32:46', '2024-03-18 14:32:46'),
(75, 1, '2', '21', '1', '2000', '29700', '10014.45', '10200', '51914.45', '', '', '0', '2024-03-18 14:33:11', '2024-03-18 14:33:11'),
(76, 1, '2', '21', '2', '500', '7425', '2503.61', '2550', '12978.61', '13349.86', '3', '40049.58', '2024-03-18 14:33:42', '2024-03-18 14:33:42'),
(77, 1, '2', '21', '3', '400', '5940', '2002.89', '2040', '10382.89', '4878.62', '9', '43907.58', '2024-03-18 14:34:50', '2024-03-18 14:34:50'),
(78, 1, '2', '22', '1', '2000', '29700', '9992.85', '10200', '51892.85', '', '', '0', '2024-03-18 14:35:23', '2024-03-18 14:35:23'),
(79, 1, '2', '22', '2', '500', '7425', '2498.21', '2550', '12973.21', '13344.46', '3', '40033.38', '2024-03-18 14:35:50', '2024-03-18 14:35:50'),
(80, 1, '2', '22', '3', '400', '5940', '1998.57', '2040', '10378.57', '4876.70', '9', '43890.3', '2024-03-18 14:36:14', '2024-03-18 14:36:14'),
(81, 1, '2', '23', '1', '2000', '29700', '11716.95', '10200', '53616.95', '', '', '0', '2024-03-18 14:36:44', '2024-03-18 14:36:44'),
(82, 1, '2', '23', '2', '500', '7425', '2929.24', '2550', '13404.24', '13775.49', '3', '41326.47', '2024-03-18 14:37:12', '2024-03-18 14:37:12'),
(83, 1, '2', '23', '3', '400', '5940', '2343.39', '2040', '10723.39', '5029.95', '9', '45269.55', '2024-03-18 14:37:37', '2024-03-18 14:37:37'),
(84, 1, '2', '24', '1', '2000', '29700', '9320.15', '10200', '51220.15', '', '', '0', '2024-03-18 14:38:01', '2024-03-18 14:38:01'),
(85, 1, '2', '24', '2', '500', '7425', '2330.04', '2550', '12805.04', '13176.29', '3', '39528.87', '2024-03-18 14:38:27', '2024-03-18 14:38:27'),
(86, 1, '2', '24', '3', '400', '5940', '1864.03', '2040', '10244.03', '4816.90', '9', '43352.1', '2024-03-18 14:38:54', '2024-03-18 14:38:54'),
(87, 1, '2', '25', '1', '2000', '29700', '7753.81', '10200', '49653.81', '', '', '0', '2024-03-18 14:39:30', '2024-03-18 14:39:30'),
(88, 1, '2', '25', '2', '500', '7425', '1938.45', '2550', '12413.45', '12784.70', '3', '38354.1', '2024-03-18 14:39:59', '2024-03-18 14:39:59'),
(89, 1, '2', '25', '3', '400', '5940', '1550.76', '2040', '9930.76', '4677.67', '9', '42099.03', '2024-03-18 14:40:22', '2024-03-18 14:40:22'),
(90, 1, '2', '26', '1', '2000', '29700', '9679.25', '10200', '51579.25', '', '', '0', '2024-03-18 14:40:42', '2024-03-18 14:40:42'),
(91, 1, '2', '26', '2', '500', '7425', '2419.81', '2550', '12894.81', '13266.06', '3', '39798.18', '2024-03-18 14:41:09', '2024-03-18 14:41:09'),
(92, 1, '2', '26', '3', '400', '5940', '1935.85', '2040', '10315.85', '4848.82', '9', '43639.38', '2024-03-18 14:41:34', '2024-03-18 14:41:34'),
(93, 1, '2', '14', '1', '2000', '32500', '5102.55', '10200', '49802.55', '', '', '0', '2024-03-18 14:41:59', '2024-03-18 14:41:59'),
(94, 1, '2', '14', '2', '500', '8125', '1275.64', '2550', '12450.64', '7714.13', '5', '38570.65', '2024-03-18 14:42:28', '2024-03-18 14:42:28'),
(95, 1, '2', '14', '3', '400', '6500', '1020.51', '2040', '9960.51', '8488.41', '5', '42442.05', '2024-03-18 14:42:53', '2024-03-18 14:42:53'),
(96, 1, '1', '19', '1', '1500', '22000', '10276.18', '7665', '41441.18', '', '', '0', '2024-03-18 14:44:54', '2024-03-18 14:44:54'),
(97, 1, '1', '19', '2', '375', '5500', '2569.05', '1916.25', '10360.3', '10635.30', '3', '31905.9', '2024-03-18 14:45:23', '2024-03-18 14:45:23'),
(98, 1, '1', '19', '3', '300', '4400', '2055.24', '1533', '8288.24', '3879.22', '9', '34912.98', '2024-03-18 14:45:57', '2024-03-18 14:45:57'),
(99, 1, '1', '20', '1', '1500', '25500', '10606.43', '7665', '45271.43', '', '', '0', '2024-03-18 14:46:23', '2024-03-18 14:46:23'),
(100, 1, '1', '20', '2', '375', '6375', '2651.61', '1916.25', '11317.86', '11636.61', '3', '34909.83', '2024-03-18 14:46:53', '2024-03-18 14:46:53'),
(101, 1, '1', '20', '3', '300', '5100', '2121.29', '1533', '9054.29', '4250.79', '9', '38257.11', '2024-03-18 14:47:18', '2024-03-18 14:47:18'),
(102, 1, '1', '21', '1', '1500', '25500', '10014.45', '7665', '44679.45', '', '', '0', '2024-03-18 14:47:42', '2024-03-18 14:47:42'),
(103, 1, '1', '21', '2', '375', '6375', '2503.61', '1916.25', '11169.86', '11488.61', '3', '34465.83', '2024-03-18 14:48:10', '2024-03-18 14:48:10'),
(104, 1, '1', '21', '3', '300', '5100', '2002.89', '1533', '8935.89', '4198.17', '9', '37783.53', '2024-03-18 14:49:02', '2024-03-18 14:49:02'),
(105, 1, '1', '22', '1', '1500', '25500', '9992.85', '7665', '44657.85', '', '', '0', '2024-03-18 14:50:16', '2024-03-18 14:50:16'),
(106, 1, '1', '22', '2', '375', '6375', '2498.21', '1916.25', '11164.46', '11483.21', '3', '34449.63', '2024-03-18 14:50:47', '2024-03-18 14:50:47'),
(107, 1, '1', '22', '3', '300', '5100', '1998.57', '1533', '8931.57', '4196.25', '9', '37766.25', '2024-03-18 14:51:18', '2024-03-18 14:51:18'),
(108, 1, '1', '23', '1', '1500', '27000', '11716.95', '8190', '48406.95', '', '', '0', '2024-03-18 14:51:39', '2024-03-18 14:51:39'),
(109, 1, '1', '23', '2', '375', '6750', '2929.24', '2047.50', '12101.74', '12439.24', '3', '37317.72', '2024-03-18 14:52:06', '2024-03-18 14:52:06'),
(110, 1, '1', '23', '3', '300', '5400', '2343.39', '1638', '9681.39', '4542.84', '9', '40885.56', '2024-03-18 14:52:36', '2024-03-18 14:52:36'),
(111, 1, '1', '24', '1', '1500', '27000', '9320.15', '8190', '46010.15', '', '', '0', '2024-03-18 14:52:59', '2024-03-18 14:52:59'),
(112, 1, '1', '24', '2', '375', '6750', '2330.04', '2047.50', '11502.54', '11840.04', '3', '35520.12', '2024-03-18 14:54:25', '2024-03-18 14:54:25'),
(113, 1, '1', '24', '3', '300', '5400', '1864.03', '1638', '9202.03', '4329.79', '9', '38968.11', '2024-03-18 14:54:55', '2024-03-18 14:54:55'),
(114, 1, '1', '25', '1', '1500', '27000', '7753.81', '8190', '44443.81', '', '', '0', '2024-03-18 14:56:52', '2024-03-18 14:56:52'),
(115, 1, '1', '25', '2', '375', '6750', '1938.45', '2047.50', '11110.95', '11448.45', '3', '34345.35', '2024-03-18 14:57:25', '2024-03-18 14:57:25'),
(116, 1, '1', '25', '3', '300', '5400', '1550.76', '1638', '8888.76', '4190.56', '9', '37715.04', '2024-03-18 14:57:52', '2024-03-18 14:57:52'),
(117, 1, '1', '26', '1', '1500', '27000', '9679.25', '8190', '46369.25', '', '', '0', '2024-03-18 14:58:21', '2024-03-18 14:58:21'),
(118, 1, '1', '26', '2', '375', '6750', '2419.81', '2047.50', '11592.31', '11929.81', '3', '35789.43', '2024-03-18 14:58:48', '2024-03-18 14:58:48'),
(119, 1, '1', '26', '3', '300', '5400', '1935.85', '1638', '9273.85', '4361.71', '9', '39255.39', '2024-03-18 14:59:18', '2024-03-18 14:59:18');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_user_other`
--

CREATE TABLE `fcav2_settings_user_other` (
  `user_other_aid` int(11) NOT NULL,
  `user_other_is_active` tinyint(1) NOT NULL,
  `user_other_fname` varchar(50) NOT NULL,
  `user_other_lname` varchar(50) NOT NULL,
  `user_other_email` varchar(128) NOT NULL,
  `user_other_new_email` varchar(128) NOT NULL,
  `user_other_role_id` int(11) NOT NULL,
  `user_other_key` varchar(255) NOT NULL,
  `user_other_password` varchar(255) NOT NULL,
  `user_other_created` datetime NOT NULL,
  `user_other_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_user_other`
--

INSERT INTO `fcav2_settings_user_other` (`user_other_aid`, `user_other_is_active`, `user_other_fname`, `user_other_lname`, `user_other_email`, `user_other_new_email`, `user_other_role_id`, `user_other_key`, `user_other_password`, `user_other_created`, `user_other_datetime`) VALUES
(39, 1, 'Cyrene', 'Lumabas', 'cyrenemlumabas@gmail.com', '', 4, '', '$2y$10$g/zE/UpZWrfsQ.mJ2KSkkOGezAwVvJSdgjeXknWI/VOyDoSl4/uLm', '2024-02-19 13:52:56', '2024-03-14 16:02:48'),
(43, 1, 'Patrick', 'Reyes', 'patrickgreyes@gmail.com', 'macmerin24@gmail.com', 4, '', '$2y$10$dZBq6W7Aff2nTpidm3vXKeHkEusRaO9ZhE3G6By/pcl5RSBHdGK4i', '2024-03-15 07:14:17', '2024-03-15 16:11:12'),
(45, 1, 'Mark', 'Merin', 'merin.ryanmark@gmail.com', '', 4, '', '$2y$10$Ey4hBtVQFglIyRqnqBoOrehFdJ6wwaLodOQeFKPwCQKk9Nvd1350C', '2024-03-15 08:47:50', '2024-03-15 09:36:11'),
(46, 1, 'Patrick', 'Reyes', 'patrick.reyes@frontlinebusiness.com.ph', '', 2, '6e0d333e21e182f4b50753674443c604d24139424bc7ec04c367687975c706b9', '$2y$10$a3bEiK/99V23tvxhvKIi1uvxhzAv8I5LVWIx60NhL9ZzGe8DQmp4y', '2024-03-15 11:10:55', '2024-03-15 14:52:34'),
(47, 1, 'Alexander', 'Ubeda', 'ict@fca.edu.ph', '', 2, '', '$2y$10$CMJDuST7/ShN6sIEKtULaOrRLtfeSyRcsM1057vLgjJMIEauzc/TC', '2024-03-15 13:09:43', '2024-03-15 13:15:16'),
(48, 1, 'Finance', 'FCA', 'Finance@fca.edu.ph', '', 2, '', '$2y$10$f4PqfaLXgnBaGN7O./XSSuFLI8tofpAF/Fd3wkeKBgGE6Bc18bql.', '2024-03-15 13:09:52', '2024-03-18 12:36:38'),
(49, 1, 'Registrar', 'FCA', 'registrar@fca.edu.ph', '', 2, '', '$2y$10$84/kJCqT/AdnhmhfRYKumeUJE5M2A8voIr1hEgQ64bqVLkQYw3582', '2024-03-15 13:10:00', '2024-03-15 13:38:31'),
(50, 1, 'Rhoda', 'Pessina', 'rhoda.pessina@fca.edu.ph', '', 2, '', '$2y$10$7PFHf0wB5vAe1pU5CY/lMuOnPpW..ToEeKbp3or2RWlX4KZwzU2o.', '2024-03-15 13:10:05', '2024-03-15 13:33:46'),
(51, 1, 'Emilou', 'Flores', 'e.gabanes@gmail.com', '', 4, '', '$2y$10$Sndqq72lZkcDEWp7uX8kN.wq6IFSxDWQ8c4aGwuJ6oCroUFmwZilm', '2024-03-15 14:39:54', '2024-03-15 14:41:08'),
(52, 1, 'Roy', 'Balaaldia', 'roy.balaaldia@gmail.com', '', 4, '', '$2y$10$Kjk1AzOBvlDpo2luP/tyjO.RYfoGoijvAYHf5CfK5WjM8799NUMTK', '2024-03-15 15:09:54', '2024-03-15 15:12:27'),
(53, 1, 'Neneth', 'Obenita', 'nenethobenita@gmail.com', '', 4, '', '$2y$10$kWwL1p4H7qptM5BTYOE93eUaWs6rTqEnWtpY8ineVmFOgqcJF7t4.', '2024-03-19 09:31:35', '2024-03-25 17:12:55'),
(54, 1, 'Kathleen Trixy', 'Ubeda', 'alexander.ubeda@gmail.com', '', 4, '', '$2y$10$xn9zlLYQBvmArZQP59jkHOakCKbFo9V6LIhFqy1xOi2dcO5jTTVcW', '2024-03-25 08:04:29', '2024-03-25 08:04:48');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_settings_user_system`
--

CREATE TABLE `fcav2_settings_user_system` (
  `user_system_aid` int(11) NOT NULL,
  `user_system_is_active` tinyint(1) NOT NULL,
  `user_system_fname` varchar(128) NOT NULL,
  `user_system_lname` varchar(128) NOT NULL,
  `user_system_email` varchar(255) NOT NULL,
  `user_system_new_email` varchar(255) NOT NULL,
  `user_system_role_id` int(11) NOT NULL,
  `user_system_key` varchar(255) NOT NULL,
  `user_system_password` varchar(255) NOT NULL,
  `user_system_created` datetime NOT NULL,
  `user_system_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_settings_user_system`
--

INSERT INTO `fcav2_settings_user_system` (`user_system_aid`, `user_system_is_active`, `user_system_fname`, `user_system_lname`, `user_system_email`, `user_system_new_email`, `user_system_role_id`, `user_system_key`, `user_system_password`, `user_system_created`, `user_system_datetime`) VALUES
(1, 1, 'Cyrene', 'Lumabas', 'cyrenemlumabas@gmail.com', '', 1, '', '$2y$10$g/zE/UpZWrfsQ.mJ2KSkkOGezAwVvJSdgjeXknWI/VOyDoSl4/uLm', '2023-04-19 09:13:08', '2024-02-16 09:07:02'),
(17, 1, 'Monmon', 'Plaza', 'ramon.plaza@frontlinebusiness.com.ph', '', 1, '', '$2y$10$KXu/IEfKf4hytdeRfVYTY.gnzHrNbZytzMQepTtZdifr8Ct3DJ1w2', '2024-01-08 08:26:34', '2024-01-08 12:50:29'),
(18, 1, 'Patrick', 'Reyes', 'patrick.reyes@frontlinebusiness.com.ph', '', 1, '', '$2y$10$KXu/IEfKf4hytdeRfVYTY.gnzHrNbZytzMQepTtZdifr8Ct3DJ1w2', '2024-01-08 08:26:34', '2024-01-08 12:50:29');

-- --------------------------------------------------------

--
-- Table structure for table `fcav2_students`
--

CREATE TABLE `fcav2_students` (
  `students_aid` int(11) NOT NULL,
  `students_is_active` tinyint(1) NOT NULL,
  `students_parent_id` int(11) NOT NULL,
  `students_lrn` varchar(20) NOT NULL,
  `students_fname` varchar(50) NOT NULL,
  `students_mname` varchar(50) NOT NULL,
  `students_lname` varchar(50) NOT NULL,
  `students_gender` varchar(10) NOT NULL,
  `students_birth_date` varchar(20) NOT NULL,
  `students_birth_place` text NOT NULL,
  `students_email` varchar(255) NOT NULL,
  `students_mobile` varchar(20) NOT NULL,
  `students_landline` varchar(20) NOT NULL,
  `students_address_id` int(11) NOT NULL,
  `students_institutional_email` varchar(255) NOT NULL,
  `students_family_doctor` varchar(100) NOT NULL,
  `students_family_doctor_contact` varchar(20) NOT NULL,
  `students_medical_remarks` text NOT NULL,
  `students_family_circumstances` text NOT NULL,
  `students_created` datetime NOT NULL,
  `students_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fcav2_students`
--

INSERT INTO `fcav2_students` (`students_aid`, `students_is_active`, `students_parent_id`, `students_lrn`, `students_fname`, `students_mname`, `students_lname`, `students_gender`, `students_birth_date`, `students_birth_place`, `students_email`, `students_mobile`, `students_landline`, `students_address_id`, `students_institutional_email`, `students_family_doctor`, `students_family_doctor_contact`, `students_medical_remarks`, `students_family_circumstances`, `students_created`, `students_datetime`) VALUES
(7, 1, 50, '', 'Mark John', 'Cabanes', 'Bernardino', 'male', '2009-11-16', 'San Pablo City', '', '', '', 51, 'mj.bernardino@fca.edu.ph', '', '', '', '', '2023-01-10 00:00:00', '2023-07-14 09:50:50'),
(9, 1, 53, '428017150086', 'Elijah', 'Gatacelo', 'Jumawan', 'male', '2011-09-07', 'San Pablo', '', '', '', 53, 'elijah.jumawan@fca.edu.ph', '', '', '', '', '2023-01-12 00:00:00', '2023-07-14 09:55:34'),
(10, 1, 60, '', 'Khael Sebastian', 'Mortel ', 'Acal', 'male', '2018-12-05', 'San Pablo City Laguna', '', '', '', 58, 'kael.acal@fca.edu.ph', 'Dra. Charity Villanueva', '9062765416', 'N/A', 'N/A', '2023-01-24 00:00:00', '2023-07-18 08:27:42'),
(15, 1, 144, '', 'Amayah Winter', 'Pessina', 'Acoba', 'female', '2017-11-19', 'Philippines', 'amayah.acoba@fca.edu.ph', '', '', 139, 'amayah.acoba@fca.edu.ph', 'Dr. Grace Exconde', '', 'Allergic to peanuts cashews pistachio macadamia and most tree nuts. Almonds and walnuts are ok.', 'N/A', '2023-01-30 00:00:00', '2023-08-15 13:18:54'),
(16, 1, 110, '100808210024', 'Blake Matthew', 'Mallare', 'Aglubat', 'male', '2016-01-29', 'La Union', 'bm.aglubat@fca.edu.ph', '09454831182', '', 107, 'bm.aglubat@fca.edu.ph', 'N/A', '', 'N/A', 'N/A', '2023-01-30 00:00:00', '2023-09-11 14:00:18'),
(17, 1, 62, '', 'Elliam Khaelix', 'Velasco', 'Alcantara', 'male', '2018-10-01', 'San Pablo City Laguna', 'ek.alcantara@fca.edu.ph', '', '', 60, 'ek.alcantara@fca.edu.ph', 'N/A', '', 'N/A', 'N/A', '2023-01-30 00:00:00', '2023-07-18 08:36:31'),
(18, 1, 116, '', 'Daemun Yuri', 'Alcantara', 'Fradejas', 'male', '2015-04-28', 'San Pablo Laguna', 'kgalcantara@gmail.com', '09052235225', '', 113, 'dy.fradejas@fca.edu.ph', 'Dra. Chumacera', '0498000705', '', '', '2023-01-30 00:00:00', '2023-08-08 08:37:04'),
(19, 1, 61, '', 'Timothy Craig', 'Calupas', 'Alcantara', 'male', '2018-05-08', 'San Pablo City Laguna', 'tc.alcantara@fca.edu.ph', '', '', 59, 'tc.alcantara@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-07-18 08:35:59'),
(20, 1, 152, '', 'Michaela', 'N/A', 'Alcantara', 'female', '2010-12-09', 'Sto. Tomas', 'michaela.alcantara@fca.edu.ph', '', '', 147, 'michaela.alcantara@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-29 07:07:32'),
(21, 1, 152, '428017150044', 'Sarah Ysabella', 'N/A', 'Alday', 'female', '2007-10-31', 'Unspecified', 'sarah.alday@fca.edu.ph', '', '', 147, 'sarah.alday@fca.edu.ph', 'N/A', '9062765416', '', '', '2023-01-30 00:00:00', '2023-08-29 07:08:10'),
(22, 1, 152, '428017150116', 'Analyn', 'Espiritu', 'Almendras', 'female', '2007-02-23', 'Unspecified', 'analyn.almendras@fca.edu.ph', '', '', 147, 'analyn.almendras@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-29 07:36:26'),
(23, 1, 152, '', 'Mary Joy', 'N/A', 'Carandang', 'female', '2011-11-02', 'Sto. Tomas', 'mj.carandang@fca.edu.ph', '', '', 147, 'mj.carandang@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-29 07:38:04'),
(24, 1, 152, '', 'Ricka Mae', 'N/A', 'Carandang', 'female', '2010-03-25', 'Sto. Tomas', 'rm.carandang@fca.edu.ph', '', '', 147, 'rm.carandang@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-29 07:38:37'),
(25, 1, 152, '', 'Andrea', 'N/A', 'Carta', 'female', '2017-01-01', 'LPH SAN PABLO CITY DISTRICT HOSPITAL', 'andrea.carta@fca.edu.ph', '', '', 147, 'andrea.carta@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-01-30 09:38:45'),
(26, 1, 152, '428017150037', 'Cielitahine', 'N/A', 'Doroja', 'female', '2010-02-25', 'Unspecified', 'celine.doroja@fca.edu.ph', '', '', 147, 'celine.doroja@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-29 07:39:12'),
(27, 1, 152, '', 'Keren Sophia', 'N/A', 'Doroja', 'female', '2015-05-21', 'Unspecified', 'keren.doroja@fca.edu.ph', '', '', 147, 'keren.doroja@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-29 07:40:15'),
(28, 1, 152, '', 'Cornilito', 'N/A', 'Doroja', 'male', '2012-06-19', 'Unspecified', 'cornilito.doroja@fca.edu.ph', '', '', 147, 'cornilito.doroja@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-29 07:39:46'),
(29, 1, 152, '428017150102', 'Melquizedec', 'N/A', 'Doroja', 'male', '2007-03-13', 'Unspecified', 'milky.doroja@fca.edu.ph', '', '', 147, 'milky.doroja@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-29 07:40:46'),
(30, 1, 152, '428017150089', 'Desirre Lerry', 'Duardas', 'Socorro', 'female', '2010-12-09', 'Unspecified', 'desirre.socorro@fca.edu.ph', '', '', 147, 'desirre.socorro@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-29 07:41:56'),
(31, 1, 152, '', 'Shiela Mariel', 'N/A', 'Socorro', 'female', '2009-04-22', 'Unspecified', 'shiela.socorro@fca.edu.ph', '', '', 147, 'shiela.socorro@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-29 07:42:21'),
(32, 1, 152, '428017150117', 'Jocel', 'Angeles', 'Tabian', 'male', '2007-02-24', 'Unspecified', 'jocel.tabian@fca.edu.ph', '', '', 147, 'jocel.tabian@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-29 07:42:47'),
(33, 1, 152, '428017150036', 'Christopher', 'N/A', 'Tumbado', 'male', '2009-05-05', 'Unspecified', 'topher.tumbado@fca.edu.ph', '', '', 147, 'topher.tumbado@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-30 16:24:13'),
(34, 1, 152, '428017150115', 'Mary Ann', 'Valendia', 'Villaseñor', 'female', '2009-06-29', 'Unspecified', 'mary.villasenor@fca.edu.ph', '', '', 147, 'mary.villasenor@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-29 07:44:45'),
(35, 1, 152, '428017150112', 'Danica', 'Valendia', 'Villaseñor', 'female', '2005-01-22', 'Unspecified', 'danica.villasenor@fca.edu.ph', '', '', 147, 'danica.villasenor@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-29 07:43:42'),
(36, 1, 125, '109793150155', 'Iralen', 'N/A', 'Alimagno', 'female', '2010-05-14', 'San Pablo City Laguna', 'iralen.alimagno@fca.edu.ph', '', '', 120, 'iralen.alimagno@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-07 13:09:16'),
(37, 1, 108, '428017220002', 'Sev Franco', 'Almanza', 'Yuson', 'male', '2017-08-08', 'San Pablo City Laguna', 'sev.yuson@fca.edu.ph', '', '', 105, 'sev.yuson@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-29 07:45:16'),
(38, 0, 65, '', 'Caleen Zane', 'Alvaran', 'Azusano', 'female', '2018-11-10', 'San Pablo City Laguna', 'cz.azusano@fca.edu.ph', '', '', 63, 'cz.azusano@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2024-03-20 10:47:31'),
(39, 1, 121, '428017170002', 'Mira', 'Vanguardia', 'Alwani', 'female', '2012-06-16', 'San Pablo City Laguna', 'mira.alwani@fca.edu.ph', '09126525296', '', 118, 'mira.alwani@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-31 15:00:42'),
(40, 0, 64, '', 'East Avery', 'Bondad', 'Amante', 'female', '2018-08-27', 'San Pablo City Laguna', 'ea.amante@fca.edu.ph', '', '', 62, 'ea.amante@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2024-03-20 10:47:18'),
(41, 1, 156, '428017180002', 'Drizcia', 'Amarga', 'Jovellanos', 'female', '2012-12-17', 'San Pablo City Laguna', 'drizcia.jovellanos@fca.edu.ph', '', '', 151, 'drizcia.jovellanos@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-08 08:52:05'),
(42, 1, 107, '428017220004', 'Juan Miguel Antonio', 'Anlacan', 'Tipan', 'male', '2017-01-12', 'Sto. Tomas', 'jma.tipan@fca.edu.ph', '', '', 104, 'jma.tipan@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-08 08:18:48'),
(43, 1, 75, '', 'Mekx Damian', 'Armedilla', 'Favorito', 'male', '2018-07-09', 'San Pablo City Laguna', 'md.favorito@fca.edu.ph', '', '', 73, 'md.favorito@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-01-30 11:16:38'),
(44, 1, 137, '109779140044', 'Jianna Mariz', 'Serdeña', 'Averion', 'female', '2009-04-03', 'San Pablo City Laguna', 'mariz.averion@fca.edu.ph', '', '', 133, 'mariz.averion@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-07 13:11:46'),
(45, 1, 151, '428017180001', 'Miguel Drake', 'Race', 'Bagsic', 'male', '2012-09-21', 'San Pablo City Laguna', 'md.bagsic@fca.edu.ph', '09777439288', '', 146, 'md.bagsic@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-07-25 13:11:21'),
(46, 1, 138, '428017150097', 'Ethan Lemuel', 'Mercado', 'Balines', 'male', '2008-08-27', 'San Pablo City Laguna', 'ethan.balines@fca.edu.ph', '', '', 134, 'ethan.balines@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-07 13:13:30'),
(47, 1, 66, '', 'Princess Micah', 'Cagadas', 'Basan', 'female', '2018-07-31', 'San Pablo City Laguna', 'pm.basan@fca.edu.ph', '', '', 64, 'pm.basan@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-07-18 08:35:07'),
(48, 1, 111, '109776210029', 'Ralph Lauren', 'Gonzales', 'Belen', 'male', '2016-10-08', 'San Pablo City Laguna', 'rl.belen@fca.edu.ph', '09291226069', '', 108, 'rl.belen@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-29 07:37:00'),
(49, 1, 72, '', 'Ryuji', 'Bernas', 'Dela Rosa', 'male', '2019-03-16', 'San Pablo City Laguna', 'ryuji.delarosa@fca.edu.ph', '', '', 70, 'ryuji.delarosa@fca.edu.ph', 'Dra Daisy Tee / Dr. Friolan Vinuya', '', 'Asthma  Skin Rashes/ skin irritation or itchyness due to sweat or dust.', '', '2023-01-30 00:00:00', '2023-01-30 11:43:42'),
(50, 1, 100, '', 'Min Jun', 'N/A', 'Bicomong', 'male', '2017-07-06', 'San Pablo City Laguna', 'mj.bicomong@fca.edu.ph', '09369365597', '', 97, 'mj.bicomong@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-07 13:14:19'),
(51, 1, 157, '428017160014', 'Gail Patricia', 'Subijano', 'Bondad', 'female', '2011-12-12', 'San Pablo City Laguna', 'gail.bondad@fca.edu.ph', '', '', 152, 'gail.bondad@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-08 08:12:10'),
(52, 1, 109, '', 'Ruth Annarose', 'N/A', 'Bongolan', 'female', '2016-03-19', 'Muntinlupa', 'ra.bongolan@fca.edu.ph', '', '', 106, 'ra.bongolan@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-29 07:37:34'),
(53, 1, 109, '', 'Joan Zeldarose', 'N/A', 'Bongolan', 'female', '2017-05-06', 'San Pablo City Laguna', 'jz.bongolan@fca.edu.ph', '', '', 106, 'jz.bongolan@fca.edu.ph', 'Dr. Victa', '', '40% hearing loss and uses hearing aids.', '', '2023-01-30 00:00:00', '2023-08-07 13:15:30'),
(54, 1, 131, '403285160024', 'Juan Gabriel', 'Buedad', 'Peña', 'male', '2011-07-02', 'San Pablo City Laguna', 'jg.pena@fca.edu.ph', '', '5031153', 127, 'jg.pena@fca.edu.ph', 'Dra. Honeylyn Fernandez ', '0495611727', 'None', '', '2023-01-30 00:00:00', '2023-08-08 09:46:09'),
(55, 1, 74, '', 'Jhon Gamiel', 'Bunquin', 'Escondo', 'male', '0018-02-28', 'San Pablo City Laguna', 'jg.escondo@fca.edu.ph', '', '', 72, 'jg.escondo@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-01-30 13:12:35'),
(56, 1, 103, '', 'Iona Eun-Sol', 'Buquing', 'Kim', 'female', '2017-01-09', 'San Pablo City Laguna', 'ies.kim@fca.edu.ph', '', '', 100, 'ies.kim@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-01-30 13:16:51'),
(57, 1, 133, '403275160008', 'Cyrus Miguel', 'Castillo', 'Bustamante', 'male', '2010-11-22', 'San Pablo City Laguna', 'cm.bustamante@fca.edu.ph', '', '', 129, 'cm.bustamante@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-08 09:56:35'),
(58, 1, 115, '428021200006', 'Jaylan', 'Gutierrez ', 'Calabia ', 'male', '2015-08-26', 'San Pablo City Laguna', 'jaylan.calabia@fca.edu.ph', '', '', 112, 'jaylan.calabia@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-08 08:38:21'),
(59, 1, 58, '', 'Callie Joergina', 'Macandili', 'Callejo', 'female', '2019-09-26', 'San Pablo City Laguna', 'callie.callejo@fca.edu.ph', '', '', 56, 'callie.callejo@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-07-18 08:31:07'),
(60, 1, 139, '402740150024', 'Yael Grace', 'Medrano', 'Carona', 'female', '2009-10-11', 'San Pablo City Laguna', 'yael.carona@fca.edu.ph', '', '', 135, 'yael.carona@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-08 10:01:46'),
(61, 1, 139, '402740150037', 'Abby El', 'Medrano', 'Carona', 'female', '2008-08-27', 'HaifaIsrael', 'abby.carona@fca.edu.ph', '', '', 135, 'abby.carona@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-08-08 10:05:04'),
(62, 1, 91, '', 'Margaux Jazralie', 'Roldan', 'Castillo', 'female', '2018-10-04', 'San Pablo City Laguna', 'mj.castillo@fca.edu.ph', '', '', 89, 'mj.castillo@fca.edu.ph', '', '', '', '', '2023-01-30 00:00:00', '2023-01-30 13:52:13'),
(63, 1, 135, '109764150094', 'Heatherlaine Joy', 'Alcantara', 'Catapang', 'female', '2010-12-03', 'San Pablo City Laguna', 'hj.catapang@fca.edu.ph', '', '', 131, 'hj.catapang@fca.edu.ph', '', '', '', '', '2023-01-31 00:00:00', '2023-08-08 09:57:05'),
(64, 1, 128, '109798160075', 'Jezza Mae', 'Chavez', 'Israel', 'female', '2011-03-19', 'Goa Camarines Sur', 'jm.israel@fca.edu.ph', '', '', 124, 'jm.israel@fca.edu.ph', '', '', '', '', '2023-01-31 00:00:00', '2023-08-08 09:53:24'),
(65, 1, 118, '109759130075', 'Shawn Eisan', 'Ciabal', 'Monterola', 'male', '2007-06-01', 'San Pablo City Laguna', 'se.monterola@fca.edu.ph', '', '', 115, 'se.monterola@fca.edu.ph', '', '', '', '', '2023-01-31 00:00:00', '2023-08-08 08:40:14'),
(66, 1, 54, '428017150101', 'Alecs Rain', 'Claveria', 'Macalintal', 'female', '2009-07-19', 'San Pablo City Laguna', 'alecs.macalintal@fca.edu.ph', '', '', 54, 'alecs.macalintal@fca.edu.ph', '', '', '', '', '2023-01-31 00:00:00', '2023-08-29 07:46:39'),
(68, 1, 147, '403268190052', 'Area Jasmine', 'Madera', 'Cordero', 'female', '2014-08-12', 'San Pablo City Laguna', 'aj.cordero@fca.edu.ph', '09475581752', '', 142, 'aj.cordero@fca.edu.ph', '', '', '', '', '2023-01-31 00:00:00', '2023-09-11 14:02:17'),
(69, 1, 68, '', 'Althea Mariz', 'Macaspac', 'Coronado', 'female', '2018-11-14', 'San Pablo City Laguna', 'am.coronado@fca.edu.ph', '', '', 66, 'am.coronado@fca.edu.ph', '', '', '', '', '2023-01-31 00:00:00', '2023-01-31 08:31:20'),
(70, 1, 69, '428017160003', 'Aliyah Dyanna', 'Balaaldia', 'Covic', 'female', '2012-11-06', 'San Pablo City Laguna', 'aliyah.covic@fca.edu.ph', '', '', 67, 'aliyah.covic@fca.edu.ph', 'Dra. Honelyn Fernandez', '+639274724991', '', '', '2023-01-31 00:00:00', '2023-08-08 08:48:35'),
(71, 1, 69, '', 'Arielle', 'Balaaldia', 'Covic', 'female', '2019-06-09', 'San Pablo City Laguna', 'arielle.covic@fca.edu.ph', '', '', 67, 'arielle.covic@fca.edu.ph', 'Dra. Honelyn Fernandez', '+63 927 472 4991', 'She had an amoebiasis when she was an infant. It never acted up again but please be aware of what kind of food to offer to her. Thank you!', '', '2023-01-31 00:00:00', '2023-08-07 13:58:44'),
(72, 1, 102, '428017220005', 'Wreishen Chloe Jade', 'Quiobe', 'Cristobal', 'female', '2017-03-23', 'San Pablo City Laguna', 'wcj.cristobal@fca.edu.ph', '', '', 99, 'wcj.cristobal@fca.edu.ph', '', '', '', '', '2023-01-31 00:00:00', '2023-08-15 14:05:32'),
(73, 1, 102, '428008180001', 'Zenobia Gabrielle Nathalie', 'Quiobe', 'Cristobal', 'female', '2012-11-02', 'San Pablo City Laguna', 'zgn.cristobal@fca.edu.ph', '09656731137', '', 99, 'zgn.cristobal@fca.edu.ph', '', '', '', '', '2023-01-31 00:00:00', '2023-08-15 13:12:59'),
(74, 1, 126, '403276150004', 'Zachary Matthew', 'Reyes', 'Cueto', 'male', '2011-03-20', 'Sta. Cruz Laguna', 'zachary.cueto@fca.edu.ph', '', '', 122, 'zachary.cueto@fca.edu.ph', '', '', '', '', '2023-01-31 00:00:00', '2023-08-29 07:46:03'),
(75, 1, 117, '228501200064', 'Mikaela Mauritz', 'Cuyson', 'Salmorin', 'female', '2012-12-12', 'Muntinlupa', 'mm.salmorin@fca.edu.ph', '', '', 114, 'mm.salmorin@fca.edu.ph', '', '', '', '', '2023-01-31 00:00:00', '2023-08-08 08:37:41'),
(76, 1, 149, '428017190006', 'Tryxhien', 'Reyes', 'Dayan', 'female', '2013-10-14', 'San Pablo City Laguna', 'tryxhien.dayan@fca.edu.ph', '', '', 144, 'tryxhien.dayan@fca.edu.ph', '', '', '', '', '2023-01-31 00:00:00', '2023-08-08 09:59:25'),
(77, 1, 149, '109799150057', 'Trinity', 'Reyes', 'Dayan', 'female', '2009-10-31', 'San Pablo City Laguna', 'trinity.dayan@fca.edu.ph', '', '', 144, 'trinity.dayan@fca.edu.ph', '', '', '', '', '2023-01-31 00:00:00', '2023-08-08 09:58:50'),
(78, 1, 150, '428017160004', 'Christian Miguel', 'Pessina', 'Dayo', 'male', '2013-04-16', 'San Pablo City Laguna', 'miguel.dayo@fca.edu.ph', '', '', 145, 'miguel.dayo@fca.edu.ph', '', '', '', '', '2023-01-31 00:00:00', '2023-08-08 08:45:54'),
(83, 1, 153, '', 'Myiesha Rylie', 'De Guzman', 'Doliente', 'female', '2017-01-13', 'San Pablo City Laguna', 'rylie.doliente@fca.edu.ph', '09462491192', '', 148, 'rylie.doliente@fca.edu.ph', '', '', '', '', '2023-02-01 00:00:00', '2023-08-08 08:31:55'),
(84, 1, 99, '428017220001', 'Chelsea Ronny', 'De Luna', 'Balitaan', 'female', '2017-04-12', 'San Pablo City Laguna', 'chelsea.balitaan@fca.edu.ph', '', '', 96, 'chelsea.balitaan@fca.edu.ph', '', '', '', '', '2023-02-01 00:00:00', '2023-08-08 08:28:45'),
(85, 1, 160, '109758140011', 'Raymond France', 'Gamez', 'Del Monte', 'male', '2009-02-07', 'San Pablo City Laguna', 'france.delmonte@fca.edu.ph', '', '', 154, 'france.delmonte@fca.edu.ph', '', '', '', '', '2023-02-01 00:00:00', '2023-09-11 14:03:42'),
(86, 1, 148, '428017200002', 'Crystal Pearl', 'N/A', 'Vasquez', 'female', '2014-07-09', 'Antipolo City Rizal', 'pearl.vasquez@fca.edu.ph', '', '', 143, 'pearl.vasquez@fca.edu.ph', '', '', '', '', '2023-02-01 00:00:00', '2023-08-08 08:39:07'),
(87, 1, 148, '401683150044', 'Samantha Noelle', 'Lascano', 'Del Monte', 'female', '2007-09-03', 'Sto. Tomas Batangas', 'sam.delmonte@fca.edu.ph', '', '', 143, 'sam.delmonte@fca.edu.ph', 'Dra. Susan Lirio', '043-778-6867', 'Asthma', '', '2023-02-01 00:00:00', '2023-08-08 10:07:39'),
(88, 1, 82, '', 'Henson Bryce', 'Dela Cruz', 'Nool', 'male', '2017-09-16', 'San Pablo City Laguna', 'hb.nool@fca.edu.ph', '', '', 80, 'hb.nool@fca.edu.ph', '', '', '', '', '2023-02-01 00:00:00', '2023-02-01 09:46:47'),
(89, 1, 71, '', 'Raine Loremie ', 'Deriquito', 'Dela Cruz', 'female', '2018-12-28', 'San Pablo City Laguna', 'rl.delacruz@fca.edu.ph', '', '', 69, 'rl.delacruz@fca.edu.ph', 'Dr. Daisy Tee', '', '', '', '2023-02-01 00:00:00', '2023-08-07 14:15:08'),
(90, 1, 73, '', 'Dylan Drake', 'Reyes', 'Delos Reyes', 'male', '2019-05-30', 'San Pablo City Laguna', 'dylan.delosreyes@fca.edu.ph', '', '', 71, 'dylan.delosreyes@fca.edu.ph', 'Dra. Tee', '', '', '', '2023-02-01 00:00:00', '2023-02-01 10:04:34'),
(91, 0, 63, '', 'Spencer Renee', 'Delos Santos', 'Alva', 'male', '2018-05-10', 'San Pablo City Laguna', 'sr.alva@fca.edu.ph', '', '', 61, 'sr.alva@fca.edu.ph', '', '', '', '', '2023-02-01 00:00:00', '2024-03-20 10:46:10'),
(92, 1, 92, '', 'Cassey Louise', 'Rosales', 'Dimailig', 'female', '2017-10-30', 'San Pablo City Laguna', 'cl.dimailig@fca.edu.ph', '', '', 90, 'cl.dimailig@fca.edu.ph', 'Dra Mary Kristine Ciabal', '', 'Asthmatic', '', '2023-02-01 00:00:00', '2023-02-01 10:46:35'),
(93, 1, 142, '', 'Alfonsus Rey', 'Velasco', 'Dimapilis', 'male', '2018-11-26', 'San Pablo City Laguna', 'ar.dimapilis@fca.edu.ph', '', '', 138, 'ar.dimapilis@fca.edu.ph', 'Dra. Luz Bonifacio', '', '', '', '2023-02-01 00:00:00', '2023-08-08 10:09:11'),
(94, 1, 112, '136651210453', 'Felicity Zoe', 'Panganiban', 'Doon', 'female', '2016-09-05', 'Novaliches Quezon City', 'fz.doon@fca.edu.ph', '', '', 109, 'fz.doon@fca.edu.ph', '', '', '', '', '2023-02-01 00:00:00', '2023-02-01 11:14:58'),
(95, 1, 127, '403289151458', 'Eris Gabrielle', 'Santos', 'Empalmado', 'female', '2011-05-02', 'San Pablo City Laguna', 'eris.empalmado@fca.edu.ph', '', '', 123, 'eris.empalmado@fca.edu.ph', '', '', '', '', '2023-02-01 00:00:00', '2023-02-01 11:18:29'),
(96, 1, 163, '109798140077', 'Hannah Mhycaell', 'Empemano', 'Pasugac', 'female', '2009-02-16', 'San Pablo City Laguna', 'hannah.pasugac@fca.edu.ph', '', '', 157, 'hannah.pasugac@fca.edu.ph', '', '', '', '', '2023-02-01 00:00:00', '2023-08-08 10:03:24'),
(97, 1, 76, '', 'Maximus Jyrome', 'Mendoza', 'Favorito', 'male', '2018-03-11', 'San Pablo City Laguna', 'mj.favorito@fca.edu.ph', '', '', 74, 'mj.favorito@fca.edu.ph', '', '', '', '', '2023-02-01 00:00:00', '2023-08-29 07:48:06'),
(98, 1, 76, '', 'Mikhael Arkin', 'Mendoza', 'Favorito', 'male', '2019-03-27', 'San Pablo City Laguna', 'ma.favorito@fca.edu.ph', '', '', 74, 'ma.favorito@fca.edu.ph', '', '', '', '', '2023-02-01 00:00:00', '2023-08-29 07:51:09'),
(99, 1, 155, '428017160006', 'Lois Margaux', 'Macabago', 'Fule', 'female', '2012-09-30', 'San Pablo City Laguna', 'margaux.fule@fca.edu.ph', '', '', 150, 'margaux.fule@fca.edu.ph', '', '', '', '', '2023-02-01 00:00:00', '2023-08-08 09:39:51'),
(100, 1, 122, '428017160009', 'Lance Ezekiel', 'N/A', 'Ortega', 'male', '2012-05-19', 'San Pablo City Laguna', 'lance.ortega@fca.edu.ph', '', '', 119, 'lance.ortega@fca.edu.ph', '', '', '', '', '2023-02-01 00:00:00', '2023-08-08 09:42:21'),
(101, 1, 93, '', 'Amira Gliea', 'Bernardino', 'General', 'female', '2018-08-22', 'San Pablo City Laguna', 'ag.general@fca.edu.ph', '', '', 91, 'ag.general@fca.edu.ph', 'Dra. Charity Villanueva', '', '', '', '2023-02-01 00:00:00', '2023-02-01 14:46:09'),
(102, 1, 85, '', 'Anika Noelle', 'Javier', 'Pilapil', 'female', '2018-12-08', 'San Pablo City Laguna', 'anika.pilapil@fca.edu.ph', '', '', 83, 'anika.pilapil@fca.edu.ph', '', '', '', 'Mother is presently working in Manila.  Grandparents are the custodians.', '2023-02-01 00:00:00', '2023-08-07 14:11:13'),
(103, 1, 166, '109760160020', 'Nheryza Rieanne', 'Katigbak', 'Magbanua', 'female', '2007-09-21', 'San Pablo City Laguna', 'rieanne.magbanua@fca.edu.ph', '', '', 158, 'rieanne.magbanua@fca.edu.ph', '', '', '', '', '2023-02-01 00:00:00', '2023-08-08 10:04:13'),
(104, 1, 145, '428017210001', 'James Sebastian', 'Delos Reyes', 'Katigbak', 'male', '2016-05-16', 'San Pablo City Laguna', 'james.katigbak@fca.edu.ph', '', '', 140, 'james.katigbak@fca.edu.ph', 'DRA.LARGOZA', '0495623570', 'ALLERGIC RHINITIS  ALLERGENS: *POLLEN *DUST  ASTHMA', '', '2023-02-01 00:00:00', '2024-01-26 10:37:20'),
(105, 1, 134, '403268150195', 'Anne Lorraine', 'Katigbak', 'Cabrera', 'female', '2009-08-03', 'San Pablo City Laguna', 'anne.cabrera@fca.edu.ph', '', '', 130, 'anne.cabrera@fca.edu.ph', 'Dra. Largoza', '', 'Asthma', '', '2023-02-01 00:00:00', '2023-08-08 09:55:50'),
(106, 1, 77, '', 'Joaquin Kyro', 'Tan', 'Kua', 'male', '2019-04-05', 'San Pablo City Laguna', 'joaquin.kua@fca.edu.ph', '', '', 75, 'joaquin.kua@fca.edu.ph', 'Dra. Honeylyn Fernandez', '', '', '', '2023-02-01 00:00:00', '2023-02-01 14:58:40'),
(107, 1, 94, '', 'Ram Zachary', 'Molina', 'Lat', 'male', '2018-05-03', 'San Pablo City Laguna', 'rz.lat@fca.edu.ph', '', '', 92, 'rz.lat@fca.edu.ph', 'Dra. Daisy S. Tee', '0495620418', '', '', '2023-02-01 00:00:00', '2023-02-01 15:01:19'),
(108, 1, 78, '', 'Paul Alecxandre', 'Eballa', 'Lee', 'male', '2018-08-05', 'San Pablo City Laguna', 'paul.lee@fca.edu.ph', '', '', 76, 'paul.lee@fca.edu.ph', 'Dra. Jennifer Serrano-Flores', '09310180182', '', '', '2023-02-01 00:00:00', '2023-08-29 07:51:51'),
(109, 1, 104, '428017220009', 'Ily Rhienn', 'Lucero', 'Lorica', 'female', '2017-07-31', 'Candelaria Quezon', 'ir.lorica@fca.edu.ph', '', '', 101, 'ir.lorica@fca.edu.ph', '', '', '', '', '2023-02-01 00:00:00', '2023-08-08 08:29:44'),
(110, 1, 79, '', 'Andrienne Callie', 'Villota', 'Manalang', 'female', '2018-10-27', 'San Pablo City Laguna', 'ac.manalang@fca.edu.ph', '', '', 77, 'ac.manalang@fca.edu.ph', '', '', '', '', '2023-02-01 00:00:00', '2023-08-07 13:57:07'),
(111, 1, 70, '', 'Krystna Adrielle', 'Manalo', 'De Guia', 'female', '2018-10-10', 'Parañaque City', 'ka.deguia@fca.edu.ph', '', '', 68, 'ka.deguia@fca.edu.ph', 'Dra. Zarate', '', '', '', '2023-02-01 00:00:00', '2023-08-29 07:47:07'),
(112, 1, 84, '', 'Anastasia Coleen', 'Mangurali', 'Pangilinan', 'female', '2019-03-10', 'San Pablo City Laguna', 'ac.pangilinan@fca.edu.ph', '', '', 82, 'ac.pangilinan@fca.edu.ph', 'Dra. Joy Raymundo-Marcella', '', '', '', '2023-02-01 00:00:00', '2023-08-07 14:04:11'),
(113, 1, 129, '109767160004', 'Benler Shan', 'Manosca', 'Jumawan', 'male', '2010-11-24', 'San Pablo City Laguna', 'benler.jumawan@fca.edu.ph', '', '', 125, 'benler.jumawan@fca.edu.ph', '', '', '', '', '2023-02-01 00:00:00', '2023-08-08 09:54:23'),
(114, 1, 95, '', 'Aqia', 'Araña', 'Mendoza', 'male', '2018-07-17', 'San Pablo City Laguna', 'aqia.mendoza@fca.edu.ph', '', '', 93, 'aqia.mendoza@fca.edu.ph', 'Dra. Charity Villanueva', '', '', '', '2023-02-01 00:00:00', '2023-08-08 08:15:37'),
(115, 1, 161, '407807160017', 'Audrey', 'Pagaran', 'Meraveles ', 'female', '2010-01-02', 'San Pablo City Laguna', 'audrey.meraveles@fca.edu.ph', '', '', 155, 'audrey.meraveles@fca.edu.ph', '', '', '', '', '2023-02-01 00:00:00', '2023-08-08 10:00:39'),
(116, 1, 146, '', 'Khaliq Joab', 'Flores', 'Monterola', 'male', '2018-06-25', 'San Pablo City Laguna', 'kj.monterola@fca.edu.ph', '09362903408', '', 141, 'kj.monterola@fca.edu.ph', 'Dra. Honelyn Fernandez', '0495611727', '', '', '2023-02-01 00:00:00', '2023-08-29 08:01:16'),
(117, 1, 130, '109798160034', 'Elieza Mae', 'Malabanan', 'Mortilla', 'female', '2011-05-12', 'San Pablo City Laguna', 'em.mortilla@fca.edu.ph', '', '', 126, 'em.mortilla@fca.edu.ph', '', '', '', '', '2023-02-01 00:00:00', '2023-08-08 09:46:52'),
(118, 1, 101, '428017220012', 'Marcus Drake', 'Napay', 'Bruegas', 'male', '2017-08-28', 'San Pablo City Laguna', 'md.bruegas@fca.edu.ph', '', '', 98, 'md.bruegas@fca.edu.ph', 'Dr. Flores', '', '', '', '2023-02-02 00:00:00', '2023-08-08 08:20:50'),
(119, 1, 114, '107720210033', 'Johann Bryce', 'Mendoza', 'Nery', 'male', '2016-01-22', 'San Pablo City Laguna', 'jb.nery@fca.edu.ph', '', '', 111, 'jb.nery@fca.edu.ph', '', '', '', '', '2023-02-02 00:00:00', '2023-08-29 08:01:44'),
(120, 1, 105, '109764200123', 'Yzza Luzien', 'Romualdez', 'Nipolo', 'female', '2015-04-09', 'San Pablo City Laguna', 'yzza.nipolo@fca.edu.ph', '', '', 102, 'yzza.nipolo@fca.edu.ph', '', '', 'allergy in seafoods', '', '2023-02-02 00:00:00', '2023-08-29 08:02:07'),
(121, 1, 105, '', 'Yzhi Lorraine ', 'Romualdez', 'Nipolo', 'female', '2017-04-18', 'San Pablo City Laguna', 'yl.nipolo@fca.edu.ph', '', '', 102, 'yl.nipolo@fca.edu.ph', '', '', '', '', '2023-02-02 00:00:00', '2023-02-02 08:45:48'),
(122, 1, 96, '', 'Sabina Beatriz', 'Llamas', 'Orillaneda', 'female', '2018-03-23', 'Dasmarinas City Cavite', 'sb.orillaneda@fca.edu.ph', '', '', 94, 'sb.orillaneda@fca.edu.ph', 'Dr Katrina Banzali', '(0917) 890 0753', 'She is diagnosed with myopathy', '', '2023-02-02 00:00:00', '2023-02-02 09:02:49'),
(123, 1, 83, '', 'David Austine', 'Briones', 'Pagkaliwangan', 'male', '2018-12-14', 'San Pablo City Laguna', 'da.pagkaliwangan@fca.edu.ph', '', '', 81, 'da.pagkaliwangan@fca.edu.ph', 'Dra. Daisy s. Tee', '0495620418', '', '', '2023-02-02 00:00:00', '2023-02-02 09:06:23'),
(124, 1, 97, '', 'Avery Charlette', 'Velasco', 'Panlaqui', 'female', '2017-11-26', 'San Pablo City Laguna', 'ac.panlaqui@fca.edu.ph', '', '', 95, 'ac.panlaqui@fca.edu.ph', 'Dr. Honeylette Fernandez', '', '', '', '2023-02-02 00:00:00', '2023-08-07 14:18:43'),
(125, 1, 162, '403268150330', 'Azelie Jamilah', 'Santos', 'Pascual', 'female', '2009-10-30', 'San Pablo City Laguna', 'aj.pascual@fca.edu.ph', '', '', 156, 'aj.pascual@fca.edu.ph', 'Dr. Renato Alilio', '', '', '', '2023-02-02 00:00:00', '2023-07-06 09:51:07'),
(126, 1, 86, '', 'Anna Hailey', 'Prado', 'Ramirez', 'female', '2018-11-20', 'San Pablo City Laguna', 'anna.ramierez@fca.edu.ph', '', '', 84, 'anna.ramierez@fca.edu.ph', 'Dra. Ciabal', '(049) 521-8102', '', '', '2023-02-02 00:00:00', '2023-02-02 09:13:55'),
(127, 1, 136, '428017150075', 'Jamella Sophia', 'Callejo', 'Rapal', 'female', '2011-05-11', 'San Pablo City Laguna', 'js.rapal@fca.edu.ph', '', '', 132, 'js.rapal@fca.edu.ph', 'Dra. Largoza', '', '', '', '2023-02-02 00:00:00', '2023-02-02 09:27:48'),
(128, 1, 106, '428017220003', 'Ahmed Yuri', 'Recidocruz', 'Raras', 'male', '2017-10-03', 'San Pablo City Laguna', 'ay.raras@fca.edu.ph', '09060243635', '5611116', 103, 'ay.raras@fca.edu.ph', 'Dra. Fernandez/Dra. Chumacera', '+639060243635', '', '', '2023-02-02 00:00:00', '2023-08-15 13:16:55'),
(129, 1, 120, '109798180022', 'Roshjay', 'De Vera', 'Robillos', 'male', '2012-09-15', 'San Pablo City Laguna', 'roshjay.robillos@fca.edu.ph', '', '', 117, 'roshjay.robillos@fca.edu.ph', '', '', 'His head cannot be inflicted with any force or trauma.', '', '2023-02-02 00:00:00', '2023-08-08 09:41:44'),
(130, 1, 120, '109798140096', 'Shaira', 'Ramos', 'Robillos', 'female', '2009-09-05', 'San Pablo City Laguna', 'shaira.robillos@fca.edu.ph', '', '', 117, 'shaira.robillos@fca.edu.ph', '', '', '', '', '2023-02-02 00:00:00', '2023-08-08 10:02:40'),
(131, 1, 140, '428017150039', 'Gwen Axelle', 'Claveria', 'Rom', 'female', '2010-03-28', 'San Pablo City Laguna', 'gwen.rom@fca.edu.ph', '', '', 136, 'gwen.rom@fca.edu.ph', '', '', '', '', '2023-02-02 00:00:00', '2023-08-29 08:02:35'),
(132, 1, 87, '', 'Elle Maverie', 'Silang', 'Ronquillo', 'female', '2019-05-28', 'San Pablo City Laguna', 'em.ronquillo@fca.edu.ph', '', '', 85, 'em.ronquillo@fca.edu.ph', 'DRA. LYDA LARGOZA', '(049) 562 3570', '', '', '2023-02-02 00:00:00', '2023-08-07 14:12:41'),
(133, 1, 88, '428017220006', 'Leela Zuneasha', 'Brion', 'Rosales', 'female', '2017-07-02', 'San Pablo City Laguna', 'lz.rosales@fca.edu.ph', '', '', 86, 'lz.rosales@fca.edu.ph', '', '', '', '', '2023-02-02 00:00:00', '2023-08-08 08:19:47'),
(134, 1, 67, '', 'Aston Laurent', 'Salvador', 'Bataclan', 'male', '2018-03-20', 'San Pablo City Laguna', 'al.bataclan@fca.edu.ph', '', '', 65, 'al.bataclan@fca.edu.ph', 'Dra Cabigan ', '', '', 'Yes please be strict regarding Aston\'s  representative to pick him up from the school . Thank you so much ', '2023-02-02 00:00:00', '2023-08-08 08:16:48'),
(135, 1, 167, '428017160018', 'Mikaela', 'Alcantara', 'Sanchez', 'female', '2008-04-01', 'San Pablo City Laguna', 'mikaela.sanchez@fca.edu.ph', '09662232985', '', 159, 'mikaela.sanchez@fca.edu.ph', '', '', '', '', '2023-02-02 00:00:00', '2023-09-11 14:05:18'),
(136, 1, 113, '428017210004', 'Cassiel', 'Seraspi', 'Francisco', 'female', '2016-02-14', 'Quezon City', 'cassiel.francisco@fca.edu.ph', '09770780572', '', 110, 'cassiel.francisco@fca.edu.ph', '', '', '', '', '2023-02-02 00:00:00', '2023-08-08 08:35:46'),
(137, 1, 132, '136458130069', 'Aldwin Vince', 'Arada ', 'Sombillo', 'male', '2008-10-19', 'Manila', 'av.sombillo@fca.edu.ph', '09152233193', '', 128, 'av.sombillo@fca.edu.ph', '', '', '', '', '2023-02-02 00:00:00', '2023-08-29 08:03:45'),
(138, 1, 89, '', 'Adam Cedric', 'Tan', 'Sta. Cruz', 'male', '2018-02-06', 'Alabang Muntinlupa City', 'ac.stacruz@fca.edu.ph', '', '', 87, 'ac.stacruz@fca.edu.ph', 'Dra. Honeylyn Kalaw', '', '', '', '2023-02-02 00:00:00', '2023-08-31 15:01:07'),
(139, 1, 90, '', 'Austin Rozel', 'Endrinal', 'Talento', 'male', '2018-08-02', 'San Pablo City Laguna', 'ar.talento@fca.edu.ph', '', '', 88, 'ar.talento@fca.edu.ph', 'Dr.Froilan Vinuya / Dra.Charity Villanueva', '0998-869-7567 / 0906', 'Heart Disease', '', '2023-02-02 00:00:00', '2023-02-02 10:39:46'),
(140, 1, 141, '109774170019', 'Jeraiah Grandine', 'Bonilla', 'Tolentino', 'female', '2012-05-29', 'San Pablo City Laguna', 'grandine.tolentino@fca.edu.ph', '', '', 137, 'grandine.tolentino@fca.edu.ph', '', '', '', '', '2023-02-02 00:00:00', '2023-08-15 13:14:08'),
(141, 1, 141, '109774150022', 'Dibri Evolet', 'Bonilla', 'Tolentino', 'female', '2009-12-18', 'San Pablo City Laguna', 'evolet.tolentino@fca.edu.ph', '', '', 137, 'evolet.tolentino@fca.edu.ph', '', '', '', '', '2023-02-02 00:00:00', '2023-08-15 13:14:36'),
(142, 1, 158, '403276150004', 'Stephen Latrell', 'Garcia', 'Serafin', 'male', '2010-12-04', 'Baguio City', 'latrell.garcia@fca.edu.ph', '', '', 153, 'latrell.garcia@fca.edu.ph', '', '', '', '', '2023-02-02 00:00:00', '2023-09-11 14:05:39'),
(143, 1, 119, '109798190006', 'Eugene', 'Viriña', 'Katigbak', 'male', '2014-01-19', 'San Pablo City Laguna', 'eugene.katigbak@fca.edu.ph', '', '', 116, 'eugene.katigbak@fca.edu.ph', '', '', '', '', '2023-02-02 00:00:00', '2023-08-08 08:46:37'),
(144, 1, 171, '428017150035', 'Rain Luke', 'Valmonte', 'Del Monte', 'male', '2010-10-03', 'San Pablo City Laguna', 'rain.delmonte@fca.edu.ph', '09555304140', '', 160, 'rain.delmonte@fca.edu.ph', '', '', '', '', '2023-02-17 00:00:00', '2023-08-29 08:04:25'),
(145, 1, 150, '', 'Gabriella Antoinette', 'Pessina', 'Dayo', 'female', '2011-03-19', 'San Pablo Laguna', 'rhodalynn.p.dayo@gmail.com', '09778599565', 'NA', 145, 'gabriella.dayo@fca.edu.ph', 'Dra. Grace Exconde', '', 'Not very serious but sometimes she gets bad nosebleeds. Please just practice first aid when that happens.', 'None.', '2023-05-12 00:00:00', '2023-07-14 10:12:07'),
(146, 1, 80, '', 'Eusef Ilija', 'Torres', 'Marasigan', 'male', '2018-03-03', 'Unspecified', 'eusef.marasigan@fca.edu.ph', '', '', 78, 'eusef.marasigan@fca.edu.ph', '', '', '', '', '2023-05-23 00:00:00', '2023-08-07 14:17:00'),
(147, 1, 174, '', 'Julia Marie', 'Bueno', 'Yason', 'female', '2013-07-03', 'Please Edit', 'julia.yason@fca.edu.ph', '09499564154', '', 162, 'julia.yason@fca.edu.ph', '', '', '', '', '2023-05-23 00:00:00', '2023-08-29 08:04:59'),
(148, 1, 155, '', 'John Marcus', 'Macabago', 'Fule', 'male', '2020-09-07', 'San Pablo City', 'jm.fule@fca.edu.ph', '', '', 150, 'jm.fule@fca.edu.ph', 'Dr. Jennifer Flores', '09310180182', 'n/a', 'n/a', '2023-06-22 00:00:00', '2023-08-07 13:19:16'),
(150, 1, 162, '', 'Jethro Azariah', 'Santos', 'Pascual', 'male', '2013-11-12', 'Please edit', '', '', '', 156, 'jethro.pascual@fca.edu.ph', '', '', '', '', '2023-07-06 00:00:00', '2023-09-01 07:18:25'),
(152, 1, 180, '', 'Evo Skylar', 'Awayan', 'Aningalan', 'male', '2019-01-13', 'Manila', '', '', '', 168, 'evo.aningalan@fca.edu.ph', '', '', '', '', '2023-07-10 00:00:00', '2023-07-14 11:26:28'),
(154, 1, 182, '425024160016', 'Aquinnah Bianca', 'Alinea', 'Carrascoso', 'female', '2011-01-01', 'San Pablo City Laguna', '', '', '', 170, 'aqui.carrascoso@fca.edu.ph', '', '', '', '', '2023-07-12 00:00:00', '2023-07-12 11:41:48'),
(155, 1, 127, '', 'Zeus Nathaniel', 'Santos', 'Empalmado', 'male', '2018-05-15', 'san pablo city', 'jnelle.riane@gmail.com', '09771653193', '', 123, 'zn.empalmado@fca.edu.ph', '', '', '', '', '2023-07-12 00:00:00', '2023-08-07 14:19:06'),
(156, 1, 88, '', 'Lonzo Zee', 'Brion', 'Rosales', 'male', '2019-03-11', 'San Pablo City', '', '', '', 86, 'lonzo.rosales@fca.edu.ph', '', '', '', '', '2023-07-13 00:00:00', '2023-08-07 13:59:43'),
(157, 1, 185, '', 'Amari', 'Gopez', 'Paguia', 'female', '2019-05-21', 'alabang muntinlupa city', '', '', '', 171, 'amari.paguia@fca.edu.ph', 'dr Mk Ciabal', '0917 810 4429', 'none', 'none', '2023-07-14 00:00:00', '2023-08-07 13:22:30'),
(158, 1, 186, '', 'Ryle Kriztoff', 'Obnial ', 'Bacsa', 'male', '2019-06-02', 'San Pablo City Laguna', '', '', '', 173, 'rk.bacsa@fca.edu.ph', 'Dra. Kristine Ciabal', '', '', '', '2023-07-14 00:00:00', '2023-08-07 13:17:59'),
(159, 1, 188, '', 'Kalel Clark', 'Atienza', 'Coracero', 'male', '2013-02-16', 'san pablo city', '', '', '', 174, 'kalel.coracero@fca.edu.ph', '', '', '', '', '2023-07-16 00:00:00', '2023-08-08 08:51:18'),
(160, 1, 189, '', 'Lara Dominique', 'n/a', 'Lucero', 'female', '2018-05-08', 'Candelaria Quezon', 'princeslucero26@hotmail.com', '09186650692', '', 175, 'lara.lucero@fca.edu.ph', '', '', '', '', '2023-07-17 00:00:00', '2023-08-07 14:20:37'),
(161, 1, 190, 'None', 'Isabella Lauren', 'Aningalan', 'Fandialan', 'female', '2019-01-10', 'San pablo city', '', '', '', 176, 'isabella.fandialan@fca.edu.ph', '', '', '', '', '2023-07-17 00:00:00', '2023-08-07 14:00:37'),
(162, 1, 193, '108188130101', 'Andrea', 'Aguila', 'Maloles', 'female', '2008-04-20', 'alaminos laguna', 'andreamaloles3@gmail.com', '09959650246', '', 178, 'andrea.maloles@fca.edu.ph', '', '', '', '', '2023-07-24 00:00:00', '2023-09-18 12:13:43'),
(163, 1, 194, '428022150024', 'Kurt Cedrick', 'Quijano', 'Martin', 'male', '2010-11-24', 'Marikina city', '', '09077621296', '', 179, 'kurt.martin@fca.edu.ph', '', '', '', '', '2023-07-24 00:00:00', '2023-08-08 09:48:05'),
(164, 1, 199, '109762160011', 'Ebraim Haley', 'N/A', 'Reyes', 'male', '2011-04-12', 'San Pablo', '', '09942140572', '', 183, 'ebraim.reyes@fca.edu.ph', '', '', '', '', '2023-07-26 00:00:00', '2023-08-08 09:49:24'),
(165, 1, 196, '', 'Tomas Enzo', 'Exconde', 'Dayo', 'male', '2011-06-20', 'Sta. Cruz', 'tomasenzodayo@gmail.com', '09150984994', '', 182, 'enzo.dayo@fca.edu.ph', 'Dra. Iya Masangga', '', 'Asthma', '', '2023-07-26 00:00:00', '2023-08-22 13:55:10'),
(166, 1, 195, '', 'Desmond', 'Moscare', 'Pundano', 'male', '2017-05-21', 'Candelaria Quezon', '', '', '', 181, 'desmond.pundano@fca.edu.ph', 'Dra. Daisy Tee', '0495620418', 'N/A', 'N/A', '2023-07-26 00:00:00', '2023-08-07 14:16:26'),
(167, 1, 197, '428020150339', 'Eann Yosef', 'Pacia', 'Portugal', 'male', '2011-05-22', 'SAN PABLO CITY', 'yosefportugal@yahoo.com', '09695043048', '', 184, 'yosef.portugal@fca.edu.ph', 'DR. CHARITY VILLANUEVA', '090627654126', 'NONE', 'NONE', '2023-07-26 00:00:00', '2023-08-11 07:30:08'),
(168, 1, 200, '', 'Bien Alsteve', 'Millares', 'Villanueva', 'male', '2013-11-11', 'San Pablo City', '', '', '', 186, 'alsteve.villanueva@fca.edu.ph', '', '', '', '', '2023-07-27 00:00:00', '2023-08-08 08:44:49'),
(169, 1, 200, '', 'Erin Lei', 'Millares', 'Villanueva', 'female', '2019-09-11', 'San Pablo City', '', '', '', 186, 'erin.villanueva@fca.edu.ph', '', '', '', '', '2023-07-27 00:00:00', '2023-08-07 14:06:16'),
(170, 1, 201, '', 'Eljhime', 'Chavez', 'Bonion', 'female', '2007-12-30', 'Hiwacloy Goa Camarines Sur', '', '', '', 187, 'eljhime.bonion@fca.edu.ph', '', '', '', '', '2023-07-28 00:00:00', '2023-08-08 10:06:43'),
(171, 1, 202, '109272-210144', 'Thomas John', 'Garcia', 'Dones', 'male', '2013-08-21', 'Manila', '', '09171192487', '', 188, 'tj.dones@fca.edu.ph', 'Dra. Suzada', '09085925553', '', '', '2023-07-31 00:00:00', '2023-08-08 08:32:57'),
(172, 1, 192, '', 'Lucas Nicolai', 'Cosico', 'Gamit', 'male', '2018-11-20', 'St. Luke\'s BGC', '', '09189205375', '0495620481', 177, 'lucas.gamit@fca.edu.ph', '', '', '', '', '2023-08-10 00:00:00', '2023-08-15 13:16:19'),
(173, 1, 205, '428011220008', 'Shemaiah Ysabela', 'N/a', 'Lacbay', 'female', '2017-07-27', 'San Pablo City', '', '', '', 192, 'sy.lacbay@fca.edu.ph', 'Dra. Velasquez ', '09688802767', 'None', 'None', '2023-08-10 00:00:00', '2023-08-15 13:15:58'),
(174, 1, 206, '', 'Venyse Denielle', 'Ramos', 'Villareal', 'female', '2010-05-04', 'San Pablo City', 'venyse.denielle@gmail.com', '09488594011', '', 193, 'vd.villareal@fca.edu.ph', '', '', '', '', '2023-08-11 00:00:00', '2023-08-15 12:55:32'),
(175, 1, 208, '', 'Zia', 'Umali', 'Balaaldia', 'female', '2014-11-17', 'San Pablo City', '', '', '', 194, 'zia.balaaldia@fca.edu.ph', '', '', 'Mild Autism spectrum disorder', '', '2023-08-17 00:00:00', '2024-03-15 12:55:59'),
(176, 1, 209, '', 'Matthew', '(n/a)', 'Ronquillo', 'male', '2015-10-19', 'San Pablo City Laguna', '', '', '', 197, 'mat.ronquillo@fca.edu.ph', '', '', '', '', '2023-08-23 00:00:00', '2023-10-05 07:10:39'),
(177, 1, 210, '', 'Isiah Ace', 'Visleño', 'Azores', 'male', '2019-02-12', 'Spc medical center San Rafael San Pablo City laguna', 'jeacelazores@yahoo.com', '09556882242', '', 198, 'isiah.azores@fca.edu.ph', '', '', '', '', '2023-08-24 00:00:00', '2023-08-29 09:32:59'),
(178, 1, 152, '', 'Alden', 'n/a', 'Dacoba', 'male', '2012-07-25', 'n/a', '', '', '', 147, 'alden.dacoba@fca.edu.ph', '', '', '', '', '2023-08-25 00:00:00', '2023-08-29 08:47:06'),
(179, 1, 215, '', 'Athena Ramina', 'Mendoza', 'Andaya', 'female', '2019-11-24', 'San Pablo City', '', '', '', 200, 'athena.andaya@fca.edu.ph', '', '', '', '', '2023-08-25 00:00:00', '2023-08-29 08:46:56'),
(180, 1, 152, '', 'Trixie Mae', 'R', 'Navarro ', 'female', '2013-02-13', 'Tondo Manila', '', '', '', 147, 'trixie.navarro@fca.edu.ph', '', '', '', '', '2023-08-29 00:00:00', '2023-08-31 15:03:23'),
(181, 1, 216, '', 'Haraya Goshen', 'Cordero', 'Frago', 'female', '2019-09-19', 'San Pablo City', 'haraya.frago@fca.edu.ph', '', '', 202, 'haraya.frago@fca.edu.ph', '', 'N/A', '', 'N/A', '2023-08-30 00:00:00', '2023-08-31 15:03:59'),
(182, 1, 213, '', 'Larah Adrienne', 'Angeles', 'Sato', 'female', '2014-08-14', 'San Pablo City ', 'la.sato@fca.edu.ph', '', '', 201, 'la.sato@fca.edu.ph', 'Dra. Charity Villanueva ', '', '', '', '2023-08-30 00:00:00', '2023-08-31 15:04:27'),
(183, 1, 218, '', 'Aldrich Justine', 'Arada', 'Sombillo', 'male', '2002-11-07', 'Manila', 'aldrichjustine07214@gmail.com', '09924485836', '', 204, 'aj.sombillo@fca.edu.ph', '', '', '', 'None', '2023-09-04 00:00:00', '2023-09-11 14:07:15'),
(184, 1, 219, '', 'Skyler Grey', 'Deyparine', 'Aquino', 'male', '2019-09-11', 'San Pablo City', '', '', '', 205, 'sg.aquino@fca.edu.ph', 'Ma. Carmela Sampelo-De Castro', '09690220843', 'None', 'None', '2023-09-07 00:00:00', '2023-09-11 14:07:40'),
(185, 1, 221, '', 'Coleen Light', 'Da', 'Pasimio', 'female', '2019-08-18', 'San pablo city', '', '', '', 208, 'coleen.pasimio@fca.edu.ph', '', '', 'na', '', '2023-09-14 00:00:00', '2023-09-19 13:15:31'),
(186, 1, 222, '', 'Jairus Daniel', 'Santonia', 'Gonzales', 'male', '2015-03-31', 'San Pablo City', '', '', '', 209, 'jd.gonzales@fca.edu.ph', '', '', 'Nothing', 'Jairus is sensitive to comments of persons whom he\'s closely interacting. He doesn\'t want to be left alone. He practice self time-out when he\'s processing his emotions normally 20-30 minutes. He remains quiet all through out that time.', '2023-09-29 00:00:00', '2023-09-29 10:59:04'),
(187, 1, 225, '', 'Aiden Shawn', 'Laurio', 'Gabutero', 'male', '2020-07-02', 'San Pablo Laguna', '', '', '', 210, 'aiden.gabutero@fca.edu.ph', '', '', '', '', '2023-10-02 00:00:00', '2023-10-09 08:04:53'),
(188, 1, 226, '', 'Test', 'Test', 'Test', 'male', '2023-11-08', 'San Pablo City Laguna', '', '', '', 211, '', '', '', '', '', '2023-11-16 00:00:00', '2023-11-28 13:29:21'),
(191, 1, 230, '', 'xxxzz', 'x', 'xx', 'male', '2023-11-14', 'Manila', 'xx@ccc.com', '', '', 213, '', 'Dr. Strange', '1233232132', 'My TB', '123', '2023-11-29 00:00:00', '2023-11-29 08:18:00'),
(193, 1, 48, '', 'Zaicy', '', 'lumabas', 'f', '2008-03-15', '', '', '', '', 49, '', '', '', '', '', '2024-03-15 10:09:39', '2024-03-15 10:09:39'),
(194, 1, 48, '', 'Zaicy', '', 'lumabas', 'f', '2008-03-15', '', '', '', '', 49, '', '', '', '', '', '2024-03-15 10:10:01', '2024-03-15 10:10:01'),
(196, 1, 234, '', 'Atarah Abigail', '', 'Gabanes', 'f', '2019-03-30', 'Laguna', 'atarah.gabanes@fca.edu.ph', '09667427409', '000', 218, '', '', '', '', '', '2024-03-15 14:53:18', '2024-03-15 14:53:18'),
(197, 1, 51, '', 'Alexander III', 'Faustino', 'Ubeda', 'm', '2012-07-09', 'San Pablo City', 'thirdy.ubeda@fca.edu.ph', '', '', 52, '', '', '', '', '', '2024-03-25 10:23:08', '2024-03-25 10:23:08'),
(198, 1, 235, '', 'Neandra Reese', 'Obenita', 'Leonor', 'f', '2016-10-16', 'Novaliches, Quezon City', 'nenethobenita@gmail.com', '09155167526', '5545326', 219, '', 'none ', 'Neneth Basmayor Oben', 'none ', 'Neneth Basmayor Obenita', '2024-03-31 18:45:14', '2024-03-31 18:45:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fcav2_emergency_contact`
--
ALTER TABLE `fcav2_emergency_contact`
  ADD PRIMARY KEY (`emergency_contact_aid`);

--
-- Indexes for table `fcav2_guardian`
--
ALTER TABLE `fcav2_guardian`
  ADD PRIMARY KEY (`guardian_aid`),
  ADD KEY `guardian_aid` (`guardian_aid`,`guardian_active`,`guardian_relationship_id`,`guardian_parent_id`,`guardian_is_reside`,`guardian_fname`,`guardian_lname`,`guardian_email`);

--
-- Indexes for table `fcav2_parents`
--
ALTER TABLE `fcav2_parents`
  ADD PRIMARY KEY (`parents_aid`),
  ADD KEY `parents_aid` (`parents_aid`,`parents_is_active`,`parents_email`,`parents_fname`,`parents_lname`);

--
-- Indexes for table `fcav2_school_year_students`
--
ALTER TABLE `fcav2_school_year_students`
  ADD PRIMARY KEY (`school_year_students_aid`),
  ADD KEY `school_year_students_aid` (`school_year_students_aid`,`school_year_students_is_active`,`school_year_students_sy_id`,`school_year_students_student_id`,`school_year_students_grade_level_id`,`school_year_students_last_learning_type`,`school_year_students_last_grade_level_id`,`school_year_students_schedule_fees_id`,`school_year_students_rate_id`,`school_year_students_primary_discount_id`,`school_year_students_additional_discount_id`);

--
-- Indexes for table `fcav2_school_year_students_current`
--
ALTER TABLE `fcav2_school_year_students_current`
  ADD PRIMARY KEY (`current_students_aid`),
  ADD KEY `current_students_aid` (`current_students_aid`,`current_students_is_active`,`current_students_sy_id`,`current_students_student_id`,`current_students_grade_level_id`,`current_students_last_learning_type`,`current_students_last_grade_level_id`,`current_students_schedule_fees_id`,`current_students_rate_id`,`current_students_primary_discount_id`,`current_students_additional_discount_id`);

--
-- Indexes for table `fcav2_school_year_students_requirements`
--
ALTER TABLE `fcav2_school_year_students_requirements`
  ADD PRIMARY KEY (`students_requirements_aid`),
  ADD KEY `students_requirements_aid` (`students_requirements_aid`,`students_requirements_is_active`,`students_requirements_sy_id`,`students_requirements_student_id`,`students_requirements_id`);

--
-- Indexes for table `fcav2_settings_department`
--
ALTER TABLE `fcav2_settings_department`
  ADD PRIMARY KEY (`department_aid`),
  ADD KEY `department_aid` (`department_aid`,`department_active`);

--
-- Indexes for table `fcav2_settings_discount`
--
ALTER TABLE `fcav2_settings_discount`
  ADD PRIMARY KEY (`discount_aid`),
  ADD KEY `discount_aid` (`discount_aid`,`discount_category_id`,`discount_type`,`discount_is_active`);

--
-- Indexes for table `fcav2_settings_discount_additional`
--
ALTER TABLE `fcav2_settings_discount_additional`
  ADD PRIMARY KEY (`discount_additional_aid`),
  ADD KEY `discount_additional_aid` (`discount_additional_aid`,`discount_additional_is_active`);

--
-- Indexes for table `fcav2_settings_discount_category`
--
ALTER TABLE `fcav2_settings_discount_category`
  ADD PRIMARY KEY (`discount_category_aid`),
  ADD KEY `discount_category_aid` (`discount_category_aid`,`discount_category_is_active`);

--
-- Indexes for table `fcav2_settings_email_template`
--
ALTER TABLE `fcav2_settings_email_template`
  ADD PRIMARY KEY (`email_template_aid`);

--
-- Indexes for table `fcav2_settings_grade_level`
--
ALTER TABLE `fcav2_settings_grade_level`
  ADD PRIMARY KEY (`grade_level_aid`),
  ADD KEY `grade_level_aid` (`grade_level_aid`,`grade_level_active`,`grade_level_order`,`grade_level_is_pre_school`);

--
-- Indexes for table `fcav2_settings_learning_type`
--
ALTER TABLE `fcav2_settings_learning_type`
  ADD PRIMARY KEY (`learning_type_aid`),
  ADD KEY `learning_type_aid` (`learning_type_aid`,`learning_type_active`);

--
-- Indexes for table `fcav2_settings_notification`
--
ALTER TABLE `fcav2_settings_notification`
  ADD PRIMARY KEY (`notification_aid`),
  ADD KEY `notification_aid` (`notification_aid`,`notification_active`,`notification_department_id`,`notification_email`);

--
-- Indexes for table `fcav2_settings_relationship`
--
ALTER TABLE `fcav2_settings_relationship`
  ADD PRIMARY KEY (`relationship_aid`),
  ADD KEY `relationship_aid` (`relationship_aid`,`relationship_active`);

--
-- Indexes for table `fcav2_settings_requirement_finance`
--
ALTER TABLE `fcav2_settings_requirement_finance`
  ADD PRIMARY KEY (`requirement_finance_aid`);

--
-- Indexes for table `fcav2_settings_requirement_it`
--
ALTER TABLE `fcav2_settings_requirement_it`
  ADD PRIMARY KEY (`requirement_it_aid`);

--
-- Indexes for table `fcav2_settings_requirement_registrar`
--
ALTER TABLE `fcav2_settings_requirement_registrar`
  ADD PRIMARY KEY (`requirement_registrar_aid`),
  ADD KEY `requirement_registrar_aid` (`requirement_registrar_aid`,`requirement_registrar_active`,`requirement_registrar_department_id`,`requirement_registrar_is_for_pre_school`);

--
-- Indexes for table `fcav2_settings_role`
--
ALTER TABLE `fcav2_settings_role`
  ADD PRIMARY KEY (`role_aid`),
  ADD KEY `role_aid` (`role_aid`,`role_is_active`,`role_is_developer`,`role_is_admin`,`role_is_client`,`role_is_parent`);

--
-- Indexes for table `fcav2_settings_scheme`
--
ALTER TABLE `fcav2_settings_scheme`
  ADD PRIMARY KEY (`scheme_aid`),
  ADD KEY `scheme_aid` (`scheme_aid`,`scheme_active`);

--
-- Indexes for table `fcav2_settings_school_year`
--
ALTER TABLE `fcav2_settings_school_year`
  ADD PRIMARY KEY (`school_year_aid`),
  ADD KEY `school_year_aid` (`school_year_aid`,`school_year_is_active`,`school_year_start_date`,`school_year_end_date`,`school_year_enrollment_start_date`,`school_year_enrollment_end_date`,`school_year_is_enrollment_open`);

--
-- Indexes for table `fcav2_settings_staff`
--
ALTER TABLE `fcav2_settings_staff`
  ADD PRIMARY KEY (`settings_staff_aid`),
  ADD KEY `settings_staff_aid` (`settings_staff_aid`,`settings_staff_is_active`,`settings_staff_email`);

--
-- Indexes for table `fcav2_settings_system_mode`
--
ALTER TABLE `fcav2_settings_system_mode`
  ADD PRIMARY KEY (`system_mode_aid`),
  ADD KEY `system_mode_aid` (`system_mode_aid`,`system_mode_is_on`);

--
-- Indexes for table `fcav2_settings_tuition_category`
--
ALTER TABLE `fcav2_settings_tuition_category`
  ADD PRIMARY KEY (`tuition_category_aid`),
  ADD KEY `tuition_category_aid` (`tuition_category_aid`,`tuition_category_active`);

--
-- Indexes for table `fcav2_settings_tuition_fee`
--
ALTER TABLE `fcav2_settings_tuition_fee`
  ADD PRIMARY KEY (`tuition_fee_aid`);

--
-- Indexes for table `fcav2_settings_user_other`
--
ALTER TABLE `fcav2_settings_user_other`
  ADD PRIMARY KEY (`user_other_aid`),
  ADD KEY `user_other_aid` (`user_other_aid`,`user_other_is_active`,`user_other_email`,`user_other_role_id`,`user_other_key`,`user_other_password`);

--
-- Indexes for table `fcav2_settings_user_system`
--
ALTER TABLE `fcav2_settings_user_system`
  ADD PRIMARY KEY (`user_system_aid`),
  ADD KEY `user_system_aid` (`user_system_aid`,`user_system_is_active`,`user_system_email`,`user_system_role_id`,`user_system_key`,`user_system_password`);

--
-- Indexes for table `fcav2_students`
--
ALTER TABLE `fcav2_students`
  ADD PRIMARY KEY (`students_aid`),
  ADD KEY `students_aid` (`students_aid`,`students_is_active`,`students_parent_id`,`students_lrn`,`students_fname`,`students_mname`,`students_gender`,`students_birth_date`,`students_email`,`students_address_id`,`students_institutional_email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fcav2_emergency_contact`
--
ALTER TABLE `fcav2_emergency_contact`
  MODIFY `emergency_contact_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=169;

--
-- AUTO_INCREMENT for table `fcav2_guardian`
--
ALTER TABLE `fcav2_guardian`
  MODIFY `guardian_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=221;

--
-- AUTO_INCREMENT for table `fcav2_parents`
--
ALTER TABLE `fcav2_parents`
  MODIFY `parents_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=236;

--
-- AUTO_INCREMENT for table `fcav2_school_year_students`
--
ALTER TABLE `fcav2_school_year_students`
  MODIFY `school_year_students_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=186;

--
-- AUTO_INCREMENT for table `fcav2_school_year_students_current`
--
ALTER TABLE `fcav2_school_year_students_current`
  MODIFY `current_students_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=181;

--
-- AUTO_INCREMENT for table `fcav2_school_year_students_requirements`
--
ALTER TABLE `fcav2_school_year_students_requirements`
  MODIFY `students_requirements_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `fcav2_settings_department`
--
ALTER TABLE `fcav2_settings_department`
  MODIFY `department_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `fcav2_settings_discount`
--
ALTER TABLE `fcav2_settings_discount`
  MODIFY `discount_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `fcav2_settings_discount_additional`
--
ALTER TABLE `fcav2_settings_discount_additional`
  MODIFY `discount_additional_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `fcav2_settings_discount_category`
--
ALTER TABLE `fcav2_settings_discount_category`
  MODIFY `discount_category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `fcav2_settings_email_template`
--
ALTER TABLE `fcav2_settings_email_template`
  MODIFY `email_template_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `fcav2_settings_grade_level`
--
ALTER TABLE `fcav2_settings_grade_level`
  MODIFY `grade_level_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `fcav2_settings_learning_type`
--
ALTER TABLE `fcav2_settings_learning_type`
  MODIFY `learning_type_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `fcav2_settings_notification`
--
ALTER TABLE `fcav2_settings_notification`
  MODIFY `notification_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `fcav2_settings_relationship`
--
ALTER TABLE `fcav2_settings_relationship`
  MODIFY `relationship_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `fcav2_settings_requirement_finance`
--
ALTER TABLE `fcav2_settings_requirement_finance`
  MODIFY `requirement_finance_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fcav2_settings_requirement_it`
--
ALTER TABLE `fcav2_settings_requirement_it`
  MODIFY `requirement_it_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fcav2_settings_requirement_registrar`
--
ALTER TABLE `fcav2_settings_requirement_registrar`
  MODIFY `requirement_registrar_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `fcav2_settings_role`
--
ALTER TABLE `fcav2_settings_role`
  MODIFY `role_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `fcav2_settings_scheme`
--
ALTER TABLE `fcav2_settings_scheme`
  MODIFY `scheme_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `fcav2_settings_school_year`
--
ALTER TABLE `fcav2_settings_school_year`
  MODIFY `school_year_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `fcav2_settings_staff`
--
ALTER TABLE `fcav2_settings_staff`
  MODIFY `settings_staff_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `fcav2_settings_system_mode`
--
ALTER TABLE `fcav2_settings_system_mode`
  MODIFY `system_mode_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `fcav2_settings_tuition_category`
--
ALTER TABLE `fcav2_settings_tuition_category`
  MODIFY `tuition_category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `fcav2_settings_tuition_fee`
--
ALTER TABLE `fcav2_settings_tuition_fee`
  MODIFY `tuition_fee_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT for table `fcav2_settings_user_other`
--
ALTER TABLE `fcav2_settings_user_other`
  MODIFY `user_other_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `fcav2_settings_user_system`
--
ALTER TABLE `fcav2_settings_user_system`
  MODIFY `user_system_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `fcav2_students`
--
ALTER TABLE `fcav2_students`
  MODIFY `students_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=199;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
