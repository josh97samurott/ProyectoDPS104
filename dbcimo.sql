-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 18-10-2020 a las 05:10:41
-- Versión del servidor: 5.7.24
-- Versión de PHP: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dbcimo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `accept_request`
--

DROP TABLE IF EXISTS `accept_request`;
CREATE TABLE IF NOT EXISTS `accept_request` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_doctor` int(11) NOT NULL,
  `link_meeting` text NOT NULL,
  `commentary` text NOT NULL,
  `id_billing` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_doctor` (`id_doctor`),
  KEY `id_billing` (`id_billing`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `account_to_pay`
--

DROP TABLE IF EXISTS `account_to_pay`;
CREATE TABLE IF NOT EXISTS `account_to_pay` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_doctor` int(11) NOT NULL,
  `route_number` int(11) NOT NULL,
  `account_number` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_doctor` (`id_doctor`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `appoiment_request`
--

DROP TABLE IF EXISTS `appoiment_request`;
CREATE TABLE IF NOT EXISTS `appoiment_request` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pacient` int(11) NOT NULL,
  `id_profession_specialization` int(11) NOT NULL,
  `age` int(11) NOT NULL,
  `date` text NOT NULL,
  `start_session` text NOT NULL,
  `duration` int(11) NOT NULL,
  `type_date` text NOT NULL,
  `commentary` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_pacient` (`id_pacient`),
  KEY `id_profession_specialization` (`id_profession_specialization`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `billing`
--

DROP TABLE IF EXISTS `billing`;
CREATE TABLE IF NOT EXISTS `billing` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_appoiment_request` int(11) NOT NULL,
  `date` text NOT NULL,
  `description` text NOT NULL,
  `expiration_date_card` text NOT NULL,
  `to_name_card` text NOT NULL,
  `security_code` int(11) NOT NULL,
  `total` double NOT NULL,
  `state` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_appoiment_request` (`id_appoiment_request`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctor_information`
--

DROP TABLE IF EXISTS `doctor_information`;
CREATE TABLE IF NOT EXISTS `doctor_information` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `cv` text NOT NULL,
  `observation` text NOT NULL,
  `confirm_info` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctor_rel_specialization`
--

DROP TABLE IF EXISTS `doctor_rel_specialization`;
CREATE TABLE IF NOT EXISTS `doctor_rel_specialization` (
  `id_doctor_information` int(11) NOT NULL,
  `id_profession_specialization` int(11) NOT NULL,
  KEY `id_doctor_information` (`id_doctor_information`),
  KEY `id_profession_specialization` (`id_profession_specialization`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `meeting_chat`
--

DROP TABLE IF EXISTS `meeting_chat`;
CREATE TABLE IF NOT EXISTS `meeting_chat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_billing` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_billing` (`id_billing`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `message_chat`
--

DROP TABLE IF EXISTS `message_chat`;
CREATE TABLE IF NOT EXISTS `message_chat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_meeting_chat` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `message` text NOT NULL,
  `time_send` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_meeting_chat` (`id_meeting_chat`),
  KEY `id_user` (`id_user`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payroll`
--

DROP TABLE IF EXISTS `payroll`;
CREATE TABLE IF NOT EXISTS `payroll` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_accept_request` int(11) NOT NULL,
  `id_account_to_pay` int(11) NOT NULL,
  `payment_porcentage` int(11) NOT NULL,
  `total` double NOT NULL,
  `state` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_accept_request` (`id_accept_request`),
  KEY `id_account_to_pay` (`id_account_to_pay`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profession_and_specialization`
--

DROP TABLE IF EXISTS `profession_and_specialization`;
CREATE TABLE IF NOT EXISTS `profession_and_specialization` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `profession` text NOT NULL,
  `specialization` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `name` text NOT NULL,
  `lastname` text NOT NULL,
  `role` int(11) NOT NULL,
  `email` text NOT NULL,
  `phone` int(11) DEFAULT NULL,
  `nationality` text NOT NULL,
  `dui_or_passport` text,
  `creation_date` text NOT NULL,
  `confirm_email` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `name`, `lastname`, `role`, `email`, `phone`, `nationality`, `dui_or_passport`, `creation_date`, `confirm_email`) VALUES
(1, 'joshua.reyes', '1ea024619b36a1a7e08d662c7e2ab661', 'Joshua Caleb', 'Reyes Rosa', 1, 'joshuacalebreyes77@gmail.com', 79529318, 'El Salvador', '05574240-3', '14/10/2020', 0),
(2, 'samuel.tobias', 'e10adc3949ba59abbe56e057f20f883e', 'Josué Samuel', 'Rodríguez Tobías', 0, 'samuel.tobias@gmail.com', NULL, 'El Salvador', '00000000-0', '16/10/2020', 0),
(5, 'wilmer.flores', 'e10adc3949ba59abbe56e057f20f883e', 'wilmer', 'flores', 2, 'wilmer.flores@gmail.com', 12345678, 'Alabama', '', '17/10/2020', 0),
(6, 'kevin.pleitez', 'e10adc3949ba59abbe56e057f20f883e', 'kevin', 'pleitez', 2, 'kevin.pleitez@gmail.com', 12345678, 'Pennsylvania', '', '17/10/2020', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
