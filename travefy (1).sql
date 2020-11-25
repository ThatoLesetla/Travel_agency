-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2020 at 08:33 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `travefy`
--

-- --------------------------------------------------------

--
-- Table structure for table `car`
--

CREATE TABLE `car` (
  `regNo` int(11) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `year` int(11) NOT NULL,
  `colour` varchar(255) NOT NULL,
  `plateNumber` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `car`
--

INSERT INTO `car` (`regNo`, `brand`, `model`, `year`, `colour`, `plateNumber`) VALUES
(5, 'BMW', 'M2', 2020, 'Red', 'AWS647GMP'),
(6, 'BMW', '320i', 2017, 'Blue', 'WER456GP');

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `clientID` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `postalCode` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `updateDate` datetime NOT NULL,
  `userType` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`clientID`, `name`, `surname`, `email`, `phone`, `address`, `postalCode`, `password`, `updateDate`, `userType`) VALUES
(4, 'Thato', 'Lesetla', 'tlesetla6198@gmail.com', 659113403, '26 Masike street, Vergenoeg', 1575, '19982013@', '0000-00-00 00:00:00', 'admin'),
(5, 'Shaun', 'Parker', 'shaun.parker@gmail.com', 659113403, '26 Masike street, vergenoeg', 1575, '765322@', '0000-00-00 00:00:00', 'user'),
(7, 'Thando', 'Mashego', 'mashego@gmail.com', 820914455, '27 Miule street, Mpumalanga', 1575, 'thando@5', '0000-00-00 00:00:00', 'user'),
(20, 'Lwazi', 'Vilkiazi', 'vilikazi@gmail.com', 616515253, '27 Mashiane street', 1575, '', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- Table structure for table `hotel`
--

CREATE TABLE `hotel` (
  `hotelID` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `pricePerNight` int(11) NOT NULL,
  `phone` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `hotelName` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hotel`
--

INSERT INTO `hotel` (`hotelID`, `address`, `pricePerNight`, `phone`, `email`, `hotelName`, `country`, `city`) VALUES
(18, '27 Colombia street', 1000, 2147483647, 'info@colombiahotel.com', 'Colombia Hotel', 'South Africa', ''),
(20, '374 Francis baard, Pretoria', 780, 718733645, 'info@proteahotel.com', 'Protea Hotel', 'South Africa', '');

-- --------------------------------------------------------

--
-- Table structure for table `packages`
--

CREATE TABLE `packages` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `hotelID` int(11) NOT NULL,
  `duration` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `transportationID` varchar(255) NOT NULL,
  `discountAmnt` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `flightCode` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `packages`
--

INSERT INTO `packages` (`id`, `title`, `hotelID`, `duration`, `price`, `transportationID`, `discountAmnt`, `description`, `flightCode`, `country`) VALUES
(25, 'A city that never sleeps, never stops moving', 20, 6, 18000, '', 2, 'Luxe hotels. Gritty dive bars. Broadway magic. Side-street snack baskets. Whether you’re a first-time traveller or a long-time resident, NYC is a city that loves to surprise. The unrivaled mix of iconic arts spaces, endless shopping experiences, architect', '3c4982', 'United States of America'),
(26, 'Small in size, the ‘Lion City’ offers big delights', 20, 8, 19000, '', 7, 'This tiny island city-state is a study of fusions and contrasts bursting with wonders waiting to be explored. Tranquil parks abut futuristic skyscrapers and luxe shopping malls. A thriving street food scene and world-class restaurants offer countless ways', 'ab0a73', 'Singapore'),
(27, 'Ancient sights with modern style, the Eternal City continues to shine', 20, 6, 30000, '', 10, 'The sprawling city of Rome remains one of the most significant stops in the world, thanks to its seamless blend of Old World wonders and modern delights. The ruins of the Colosseum, her iconic fountains, lazy wanders through cobblestone streets with gelat', 'a385ee', 'Italy'),
(28, 'Paris Tourism and Holidays: Best of Paris The City of Lights dazzles in every way', 0, 10, 4000, '', 9, 'Nowhere else on earth makes the heart swoon like the mention of Paris. The city lures with its magnificent art, architecture, culture, and cuisine, but there’s also a quieter magic waiting to be explored: the quaint cobbled lanes, the sweet patisseries ar', 'ab0a73', 'France'),
(29, 'A dreamy destination straight out of a fairytale', 20, 12, 0, '', 20, 'Bustling markets, tree lined blocks, and fantastical architecture cozy up to one another in this dreamy Mediterranean beach town. Paella and pintxos bars, exceptional seafood, standout local wines, a world-class arts scene, and bumping nightlife, Barcelon', '71c018', 'Spain');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `reviewID` int(11) NOT NULL,
  `description` varchar(200) NOT NULL,
  `reviewDate` datetime NOT NULL,
  `clientID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `car`
--
ALTER TABLE `car`
  ADD PRIMARY KEY (`regNo`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`clientID`);

--
-- Indexes for table `hotel`
--
ALTER TABLE `hotel`
  ADD PRIMARY KEY (`hotelID`);

--
-- Indexes for table `packages`
--
ALTER TABLE `packages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`reviewID`),
  ADD KEY `clientID` (`clientID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `car`
--
ALTER TABLE `car`
  MODIFY `regNo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `clientID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `hotel`
--
ALTER TABLE `hotel`
  MODIFY `hotelID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `packages`
--
ALTER TABLE `packages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `reviewID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`clientID`) REFERENCES `client` (`clientID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
