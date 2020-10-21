-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 21-10-2020 a las 21:35:22
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
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `accept_request`
--

INSERT INTO `accept_request` (`id`, `id_doctor`, `link_meeting`, `commentary`, `id_billing`) VALUES
(1, 32, 'www.youtube.com', 'XD ni modo ya la regaste, haz feliz a joshua', 1),
(2, 32, '', 'bla bla bla', 2);

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
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `appoiment_request`
--

INSERT INTO `appoiment_request` (`id`, `id_pacient`, `id_profession_specialization`, `age`, `date`, `start_session`, `duration`, `type_date`, `commentary`) VALUES
(1, 31, 1, 24, '2020-10-23T06:00:00.000Z', '07:00 p.m.', 60, 'videoconferencia', 'Creo que estoy embarazada.'),
(2, 31, 1, 24, '2020-10-23T06:00:00.000Z', '07:00 p.m.', 60, 'videoconferencia', 'Creo que estoy embarazada.'),
(3, 31, 1, 24, '2020-10-23T06:00:00.000Z', '07:00 p.m.', 60, 'videoconferencia', 'Creo que estoy embarazada.'),
(4, 31, 2, 24, '2020-10-24T06:00:00.000Z', '07:00 p.m.', 30, 'chat en linea', 'Quiero saber con mi novio es tan guapo');

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
  `number_card` int(11) NOT NULL,
  `expiration_date_card` text NOT NULL,
  `to_name_card` text NOT NULL,
  `security_code` int(11) NOT NULL,
  `total` double NOT NULL,
  `state` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_appoiment_request` (`id_appoiment_request`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `billing`
--

INSERT INTO `billing` (`id`, `id_appoiment_request`, `date`, `description`, `number_card`, `expiration_date_card`, `to_name_card`, `security_code`, `total`, `state`) VALUES
(1, 1, '2020-10-21T21:12:42.954Z', 'Compra de sesión de videoconferencia', 2147483647, '2001-07-24T06:00:00.000Z', 'Flor Mejía', 123, 20, 'cancelado'),
(2, 4, '2020-10-21T21:17:01.377Z', 'Compra de sesión de chat en linea', 2147483647, '2001-07-24T06:00:00.000Z', 'Flor Mejía', 123, 8, 'cancelado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctor_information`
--

DROP TABLE IF EXISTS `doctor_information`;
CREATE TABLE IF NOT EXISTS `doctor_information` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `cv` text,
  `observation` text,
  `confirm_info` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `doctor_information`
--

INSERT INTO `doctor_information` (`id`, `id_user`, `cv`, `observation`, `confirm_info`) VALUES
(13, 32, NULL, NULL, 0),
(12, 30, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctor_rel_specialization`
--

DROP TABLE IF EXISTS `doctor_rel_specialization`;
CREATE TABLE IF NOT EXISTS `doctor_rel_specialization` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_doctor_information` int(11) NOT NULL,
  `id_profession_specialization` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_doctor_information` (`id_doctor_information`),
  KEY `id_profession_specialization` (`id_profession_specialization`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `doctor_rel_specialization`
--

INSERT INTO `doctor_rel_specialization` (`id`, `id_doctor_information`, `id_profession_specialization`) VALUES
(12, 13, 1),
(11, 12, 9);

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
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `profession_and_specialization`
--

INSERT INTO `profession_and_specialization` (`id`, `profession`, `specialization`) VALUES
(1, 'Psicología', 'Clínica de la salud'),
(2, 'Médico', 'Alergología'),
(3, 'Médico', 'Cardiología'),
(4, 'Médico', 'Gastroenterología'),
(5, 'Médico', 'Hematología'),
(6, 'Médico', 'Neumología'),
(7, 'Médico', 'Neurología'),
(8, 'Médico', 'Nutriología'),
(9, 'Médico', 'Pediatría'),
(10, 'Médico', 'Psiquiatría');

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
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `name`, `lastname`, `role`, `email`, `phone`, `nationality`, `dui_or_passport`, `creation_date`, `confirm_email`) VALUES
(29, 'samuel.tobias', 'e10adc3949ba59abbe56e057f20f883e', 'Samuel', 'Tobias', 2, 'samuel.tobias@gmail.com', 123, 'El Salvador', '', '21/10/2020', 0),
(30, 'kevin.pleitez', 'e10adc3949ba59abbe56e057f20f883e', 'Kevin', 'Pleitez', 1, 'kevin.pleitez@gmail.com', 123456, 'El Salvador', '', '21/10/2020', 0),
(31, 'flor.mejia', 'e10adc3949ba59abbe56e057f20f883e', 'Flor', 'Mejía', 2, 'flor.mejia@gmail.com', 77274499, 'El Salvador', '', '21/10/2020', 0),
(32, 'wilmer.flores', 'e10adc3949ba59abbe56e057f20f883e', 'Willmer', 'Flores', 1, 'wilmer.flores@gmail.com', 77274499, 'El Salvador', '123457', '21/10/2020', 0),
(27, 'joshua.reyes', 'e10adc3949ba59abbe56e057f20f883e', 'Joshua Caleb', 'Reyes Rosa', 0, 'joshuacalebreyes77@gmail.com', 77274499, 'El Salvador', '', '21/10/2020', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
