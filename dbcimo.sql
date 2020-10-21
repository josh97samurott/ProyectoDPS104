-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-10-2020 a las 20:10:25
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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

CREATE TABLE `accept_request` (
  `id` int(11) NOT NULL,
  `id_doctor` int(11) NOT NULL,
  `link_meeting` text NOT NULL,
  `commentary` text NOT NULL,
  `id_billing` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `accept_request`
--

INSERT INTO `accept_request` (`id`, `id_doctor`, `link_meeting`, `commentary`, `id_billing`) VALUES
(1, 1, '', '', 1),
(2, 1, 'www.youtube.com', 'pronto nos veremos guapo', 10),
(3, 1, 'www.yahoo.com', 'lo quiero mucho', 8),
(4, 1, 'www.angular.com', 'la veo prono señorita', 5),
(5, 1, 'www.udb.edu.sv', 'pronto mi little friend', 10),
(6, 1, 'www.internacionla.com', 'pronto lo vere patron', 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `account_to_pay`
--

CREATE TABLE `account_to_pay` (
  `id` int(11) NOT NULL,
  `id_doctor` int(11) NOT NULL,
  `route_number` int(11) NOT NULL,
  `account_number` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `appoiment_request`
--

CREATE TABLE `appoiment_request` (
  `id` int(11) NOT NULL,
  `id_pacient` int(11) NOT NULL,
  `id_profession_specialization` int(11) NOT NULL,
  `age` int(11) NOT NULL,
  `date` text NOT NULL,
  `start_session` text NOT NULL,
  `duration` int(11) NOT NULL,
  `type_date` text NOT NULL,
  `commentary` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `appoiment_request`
--

INSERT INTO `appoiment_request` (`id`, `id_pacient`, `id_profession_specialization`, `age`, `date`, `start_session`, `duration`, `type_date`, `commentary`) VALUES
(1, 2, 2, 43, '2020-10-23T06:00:00.000Z', '21', 30, 'videoconferencia', 'me duele la vida'),
(2, 2, 4, 34, '2020-10-20T06:00:00.000Z', '12', 30, 'videoconferencia', 'me duele espalda'),
(3, 2, 4, 34, '2020-10-20T06:00:00.000Z', '12', 30, 'videoconferencia', 'me duele espalda'),
(4, 2, 4, 34, '2020-10-20T06:00:00.000Z', '12', 30, 'videoconferencia', 'me duele espalda'),
(5, 2, 4, 34, '2020-10-20T06:00:00.000Z', '12', 30, 'videoconferencia', 'me duele espalda'),
(6, 2, 4, 66, '2020-10-24T06:00:00.000Z', '14', 60, 'videoconferencia', 'soy lesbiano'),
(7, 2, 1, 34, '2020-11-16T06:00:00.000Z', '5', 120, 'videoconferencia', 'me duele una muela'),
(8, 2, 4, 11, '2020-10-24T06:00:00.000Z', '7', 120, 'chat en linea', 'dolor de nalga'),
(9, 2, 2, 88, '2020-12-04T06:00:00.000Z', '9', 60, 'chat en linea', 'me duele la vida'),
(10, 5, 2, 16, '2020-10-27T06:00:00.000Z', '5', 30, 'videoconferencia', 'me llamo nosue'),
(11, 5, 4, 8, '2020-11-18T06:00:00.000Z', '7', 60, 'chat en linea', 'me duele el pecho'),
(12, 5, 1, 89, '2020-12-19T06:00:00.000Z', '9', 60, 'videoconferencia', 'me duele el alma'),
(13, 5, 3, 13, '2021-01-31T06:00:00.000Z', '1', 120, 'chat en linea', 'gripe fuerte'),
(14, 7, 3, 17, '2020-12-13T06:00:00.000Z', '2', 60, 'chat en linea', 'enfermo del corazon'),
(15, 7, 1, 12, '2020-12-13T06:00:00.000Z', '4', 30, 'videoconferencia', 'dolor de ojos'),
(16, 7, 2, 77, '2020-12-13T06:00:00.000Z', '8', 60, 'chat en linea', 'dolor de estomago');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `billing`
--

CREATE TABLE `billing` (
  `id` int(11) NOT NULL,
  `id_appoiment_request` int(11) NOT NULL,
  `date` text NOT NULL,
  `description` text NOT NULL,
  `number_card` int(11) NOT NULL,
  `expiration_date_card` text NOT NULL,
  `to_name_card` text NOT NULL,
  `security_code` int(11) NOT NULL,
  `total` double NOT NULL,
  `state` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `billing`
--

INSERT INTO `billing` (`id`, `id_appoiment_request`, `date`, `description`, `number_card`, `expiration_date_card`, `to_name_card`, `security_code`, `total`, `state`) VALUES
(1, 2, '2020-10-20T06:00:00.000Z', 'Compra de sesión de videoconferencia', 1234, '2020-10-31T06:00:00.000Z', 'samuel tobias', 54321, 10, 'espera'),
(2, 2, '2020-10-20T06:00:00.000Z', 'Compra de sesión de videoconferencia', 1234, '2020-10-31T06:00:00.000Z', 'samuel tobias', 54321, 10, 'espera'),
(3, 2, '2020-10-20T06:00:00.000Z', 'Compra de sesión de videoconferencia', 1234, '2020-10-31T06:00:00.000Z', 'samuel tobias', 54321, 10, 'espera'),
(4, 6, '2020-10-24T06:00:00.000Z', 'Compra de sesión de videoconferencia', 56789, '2020-12-31T06:00:00.000Z', 'joshua caleb', 123456789, 20, 'espera'),
(5, 7, '2020-11-16T06:00:00.000Z', 'Compra de sesión de videoconferencia', 12, '2020-11-18T06:00:00.000Z', 'wilmer flores', 456, 30, 'cancelado'),
(6, 6, '2020-10-24T06:00:00.000Z', 'Compra de sesión de chat en linea', 890, '2020-11-24T06:00:00.000Z', 'joshua reyes', 56789, 24, 'espera'),
(7, 9, '2020-12-04T06:00:00.000Z', 'Compra de sesión de chat en linea', 123456789, '2020-10-30T06:00:00.000Z', 'kevin pleitez', 4321, 16, 'espera'),
(8, 10, '2020-10-27T06:00:00.000Z', 'Compra de sesión de videoconferencia', 213, '2020-10-30T06:00:00.000Z', 'samuel tobias', 345, 10, 'espera'),
(9, 11, '2020-11-18T06:00:00.000Z', 'Compra de sesión de chat en linea', 567, '2020-10-24T06:00:00.000Z', 'samuel rodrigeuz', 564323, 16, 'espera'),
(10, 12, '2020-10-20T16:10:45.638Z', 'Compra de sesión de videoconferencia', 1456, '2020-10-29T06:00:00.000Z', 'samuel pacheco', 612, 20, 'cancelado'),
(11, 13, '2020-10-20T16:23:33.069Z', 'Compra de sesión de chat en linea', 678, '2020-11-08T06:00:00.000Z', 'wilmer flores', 876, 24, 'espera'),
(12, 14, '2020-10-20T16:33:44.668Z', 'Compra de sesión de chat en linea', 123456, '2020-10-31T06:00:00.000Z', 'samuel pacheco', 54321, 16, 'cancelado'),
(13, 15, '	\r\n2020-10-20T16:33:44.668Z', 'Compra de sesión de videoconferencia', 1234, '	\r\n2020-10-25T16:33:44.668Z', 'samuel tobias', 5432, 10, 'cancelado'),
(14, 16, '	\r\n2020-10-20T16:33:44.668Z', 'Compra de sesión de chat en linea', 1234, '	\r\n2020-10-25T16:33:44.668Z', 'samuel tobias', 5432, 16, 'cancelado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctor_information`
--

CREATE TABLE `doctor_information` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `cv` text DEFAULT NULL,
  `observation` text DEFAULT NULL,
  `confirm_info` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctor_rel_specialization`
--

CREATE TABLE `doctor_rel_specialization` (
  `id_doctor_information` int(11) NOT NULL,
  `id_profession_specialization` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `meeting_chat`
--

CREATE TABLE `meeting_chat` (
  `id` int(11) NOT NULL,
  `id_billing` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `message_chat`
--

CREATE TABLE `message_chat` (
  `id` int(11) NOT NULL,
  `id_meeting_chat` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `message` text NOT NULL,
  `time_send` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payroll`
--

CREATE TABLE `payroll` (
  `id` int(11) NOT NULL,
  `id_accept_request` int(11) NOT NULL,
  `id_account_to_pay` int(11) NOT NULL,
  `payment_porcentage` int(11) NOT NULL,
  `total` double NOT NULL,
  `state` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profession_and_specialization`
--

CREATE TABLE `profession_and_specialization` (
  `id` int(11) NOT NULL,
  `profession` text NOT NULL,
  `specialization` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

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

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `name` text NOT NULL,
  `lastname` text NOT NULL,
  `role` int(11) NOT NULL,
  `email` text NOT NULL,
  `phone` int(11) DEFAULT NULL,
  `nationality` text NOT NULL,
  `dui_or_passport` text DEFAULT NULL,
  `creation_date` text NOT NULL,
  `confirm_email` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `name`, `lastname`, `role`, `email`, `phone`, `nationality`, `dui_or_passport`, `creation_date`, `confirm_email`) VALUES
(1, 'joshua.reyes', 'e10adc3949ba59abbe56e057f20f883e', 'Joshua Caleb', 'Reyes Rosa', 1, 'joshuacalebreyes77@gmail.com', 79529318, 'El Salvador', '05574240-3', '14/10/2020', 0),
(2, 'samuel.tobias', 'e10adc3949ba59abbe56e057f20f883e', 'Josué Samuel', 'Rodríguez Tobías', 0, 'samuel.tobias@gmail.com', 72658628, 'El Salvador', '00000000-0', '16/10/2020', 0),
(5, 'wilmer.flores', 'e10adc3949ba59abbe56e057f20f883e', 'melchor', 'flores', 2, 'wilmer.flores@gmail.com', 12345678, 'Alabama', '', '17/10/2020', 0),
(6, 'kevin.pleitez', 'e10adc3949ba59abbe56e057f20f883e', 'kevin', 'pleitez', 2, 'kevin.pleitez@gmail.com', 12345678, 'Pennsylvania', '', '17/10/2020', 0),
(7, 'samuel.pacheco', 'e10adc3949ba59abbe56e057f20f883e', 'josue', 'pacheco', 2, 'samuel.pacheco@yahoo.es', 72658528, 'El Salvador', '', '20/10/2020', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `accept_request`
--
ALTER TABLE `accept_request`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_doctor` (`id_doctor`),
  ADD KEY `id_billing` (`id_billing`);

--
-- Indices de la tabla `account_to_pay`
--
ALTER TABLE `account_to_pay`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_doctor` (`id_doctor`);

--
-- Indices de la tabla `appoiment_request`
--
ALTER TABLE `appoiment_request`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_pacient` (`id_pacient`),
  ADD KEY `id_profession_specialization` (`id_profession_specialization`);

--
-- Indices de la tabla `billing`
--
ALTER TABLE `billing`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_appoiment_request` (`id_appoiment_request`);

--
-- Indices de la tabla `doctor_information`
--
ALTER TABLE `doctor_information`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `doctor_rel_specialization`
--
ALTER TABLE `doctor_rel_specialization`
  ADD KEY `id_doctor_information` (`id_doctor_information`),
  ADD KEY `id_profession_specialization` (`id_profession_specialization`);

--
-- Indices de la tabla `meeting_chat`
--
ALTER TABLE `meeting_chat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_billing` (`id_billing`);

--
-- Indices de la tabla `message_chat`
--
ALTER TABLE `message_chat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_meeting_chat` (`id_meeting_chat`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `payroll`
--
ALTER TABLE `payroll`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_accept_request` (`id_accept_request`),
  ADD KEY `id_account_to_pay` (`id_account_to_pay`);

--
-- Indices de la tabla `profession_and_specialization`
--
ALTER TABLE `profession_and_specialization`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `accept_request`
--
ALTER TABLE `accept_request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `account_to_pay`
--
ALTER TABLE `account_to_pay`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `appoiment_request`
--
ALTER TABLE `appoiment_request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `billing`
--
ALTER TABLE `billing`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `doctor_information`
--
ALTER TABLE `doctor_information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `meeting_chat`
--
ALTER TABLE `meeting_chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `message_chat`
--
ALTER TABLE `message_chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `payroll`
--
ALTER TABLE `payroll`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `profession_and_specialization`
--
ALTER TABLE `profession_and_specialization`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
