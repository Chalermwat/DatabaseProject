CREATE DATABASE  IF NOT EXISTS `goodboigoodcar` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `goodboigoodcar`;
-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: goodboigoodcar
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `branch`
--

DROP TABLE IF EXISTS `branch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `branch` (
  `Branch_ID` int(2) unsigned NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Location` varchar(180) NOT NULL,
  `Number_of_Employees` int(3) NOT NULL,
  `Queue_Capacity` int(2) unsigned NOT NULL,
  PRIMARY KEY (`Branch_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `branch`
--

LOCK TABLES `branch` WRITE;
/*!40000 ALTER TABLE `branch` DISABLE KEYS */;
INSERT INTO `branch` VALUES (15,'hivehicle','khonkaen',11,12),(21,'hellocar','bangkok',10,10),(37,'helcd','korat',15,8);
/*!40000 ALTER TABLE `branch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `customer` (
  `ID` varchar(13) NOT NULL,
  `First_Name` varchar(50) NOT NULL,
  `Last_Name` varchar(50) NOT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Tel` varchar(10) NOT NULL,
  `Address` varchar(180) DEFAULT NULL,
  `Birthday` date DEFAULT NULL,
  `Membership` tinyint(1) NOT NULL,
  `Number_of_Vehicle` int(2) unsigned NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES ('1309902525151','kan','pipat','phggg@gmail.com','0824567887','45/56 sa road, sa city, 2110332','1978-05-14',1,4),('1309902541789','kantanat','siripipat','phantomggg@gmail.com','0823227894','12/34 db road, db city, 2110322','1998-01-13',1,2),('1604865865574','gun','zazzzzz','ggezbobo@pinoy.com','0978123655','7/5 wat road, loz city, 4846','1998-01-13',1,3),('2486278223989','hello','itsme','iwaswonderingif@afterall.com','0654891561','782/568 these year road, you would like to meet city, 7851','1988-05-05',1,2),('4215387521785','boyyyy','atreus','sonofkratos@ps4.com','0321654987','65/78 mid road, midgard city, 19','1989-04-03',1,1);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `reservation` (
  `Reservation_ID` int(13) NOT NULL AUTO_INCREMENT,
  `Service_type` varchar(20) NOT NULL,
  `Time` timestamp NOT NULL,
  `Branch_ID` int(2) unsigned NOT NULL,
  `License_plate` varchar(255) NOT NULL,
  PRIMARY KEY (`Reservation_ID`),
  KEY `Branch_ID` (`Branch_ID`),
  KEY `License_plate` (`License_plate`),
  CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`Branch_ID`) REFERENCES `branch` (`branch_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `reservation_ibfk_2` FOREIGN KEY (`License_plate`) REFERENCES `vehicle` (`license_plate`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7924 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservation`
--

LOCK TABLES `reservation` WRITE;
/*!40000 ALTER TABLE `reservation` DISABLE KEYS */;
INSERT INTO `reservation` VALUES (1234,'fixcar','2018-01-19 02:14:07',21,'abcd1234'),(2444,'changemirror','2018-03-09 08:44:00',37,'asdf1'),(4865,'washcar','2018-04-01 04:21:45',21,'trs487'),(7890,'changewheel','2018-05-16 07:52:13',15,'bnm56'),(7923,'fixcar','2018-05-28 06:14:15',15,'hgj348');
/*!40000 ALTER TABLE `reservation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle`
--

DROP TABLE IF EXISTS `vehicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `vehicle` (
  `Vehicle_ID` varchar(8) NOT NULL,
  `License_plate` varchar(255) NOT NULL,
  `Brand` varchar(15) NOT NULL,
  `Model` varchar(15) NOT NULL,
  `Last_Checking_Date` date DEFAULT NULL,
  `Number_of_Services` int(3) unsigned NOT NULL,
  `Car_age` int(2) unsigned NOT NULL,
  `Driving_distance` int(6) unsigned NOT NULL,
  `Customer_ID` varchar(13) NOT NULL,
  PRIMARY KEY (`License_plate`),
  KEY `Customer_ID` (`Customer_ID`),
  KEY `Brand` (`Brand`,`Model`),
  CONSTRAINT `vehicle_ibfk_1` FOREIGN KEY (`Customer_ID`) REFERENCES `customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `vehicle_ibfk_2` FOREIGN KEY (`Brand`, `Model`) REFERENCES `vehicle_type` (`brand`, `model`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle`
--

LOCK TABLES `vehicle` WRITE;
/*!40000 ALTER TABLE `vehicle` DISABLE KEYS */;
INSERT INTO `vehicle` VALUES ('ab12','abcd1234','toyota','vios','2018-01-10',2,3,6000,'1309902541789'),('cd13','asdf1','toyota','hyundai','2018-02-24',1,2,5500,'1309902525151'),('fg15','bnm56','bmw','2018 pickup','2018-04-15',1,4,1000,'4215387521785'),('yu20','hgj348','volkswagen','sharan','2018-05-07',2,3,4000,'2486278223989'),('rt17','trs487','honda','cb1300','2018-03-20',2,3,3200,'1604865865574');
/*!40000 ALTER TABLE `vehicle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle_type`
--

DROP TABLE IF EXISTS `vehicle_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `vehicle_type` (
  `Brand` varchar(15) NOT NULL,
  `Model` varchar(15) NOT NULL,
  `Type` varchar(10) NOT NULL,
  PRIMARY KEY (`Brand`,`Model`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle_type`
--

LOCK TABLES `vehicle_type` WRITE;
/*!40000 ALTER TABLE `vehicle_type` DISABLE KEYS */;
INSERT INTO `vehicle_type` VALUES ('bmw','2018 pickup','pickup'),('honda','cb1300','motorcycle'),('toyota','hyundai','sedan'),('toyota','vios','sedan'),('volkswagen','sharan','van');
/*!40000 ALTER TABLE `vehicle_type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-24 23:26:45
