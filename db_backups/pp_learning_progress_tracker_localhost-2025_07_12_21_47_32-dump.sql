-- MySQL dump 10.13  Distrib 9.3.0, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: pp_learning_progress_tracker
-- ------------------------------------------------------
-- Server version	9.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_coursetotechnology`
--

DROP TABLE IF EXISTS `_coursetotechnology`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_coursetotechnology` (
  `A` int NOT NULL,
  `B` int NOT NULL,
  UNIQUE KEY `_CourseToTechnology_AB_unique` (`A`,`B`),
  KEY `_CourseToTechnology_B_index` (`B`),
  CONSTRAINT `_CourseToTechnology_A_fkey` FOREIGN KEY (`A`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `_CourseToTechnology_B_fkey` FOREIGN KEY (`B`) REFERENCES `technology` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_coursetotechnology`
--

LOCK TABLES `_coursetotechnology` WRITE;
/*!40000 ALTER TABLE `_coursetotechnology` DISABLE KEYS */;
INSERT INTO `_coursetotechnology` VALUES (8,1),(12,1),(21,1),(23,1),(26,1),(28,1),(9,2),(11,2),(12,2),(18,2),(22,2),(23,2),(25,2),(28,2),(8,3),(9,3),(10,3),(24,3),(26,3),(27,3),(28,3),(9,4),(14,4),(18,4),(24,4),(27,4),(8,5),(11,5),(14,5),(15,5),(21,5),(23,5),(26,5),(27,5),(28,5),(12,6),(15,6),(18,6),(21,6),(22,6),(23,6),(25,6),(28,6),(10,8),(24,8),(26,8),(28,8),(13,18);
/*!40000 ALTER TABLE `_coursetotechnology` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('0c618ee5-f2d8-4710-a7ec-f8864b90a870','9705764eba671aac51c3ea180349149675515f1fe42a551afffba6fda480aeb2','2025-05-12 20:46:41.582','20250512204640_testing_course_m_2_m_and_technology',NULL,NULL,'2025-05-12 20:46:41.533',1),('12d7089d-35a1-4089-9b51-00f3b6b8c4bc','120727118864cade0bdb037cca4fbbfc6c83cf15a17b259635f1755bc9d4fdf3','2025-06-07 18:43:44.966','20250607184344_added_learing_path_model',NULL,NULL,'2025-06-07 18:43:44.871',1),('2129f8a6-3c57-4faa-bf56-46114a7f2b99','fb6fa356f59b5acfade422194c0fb526d48fe618f3ad13f65419aa73b7c72156','2025-05-11 12:26:14.506','20250511122613_added_platform_to_course_model',NULL,NULL,'2025-05-11 12:26:14.415',1),('2314110c-06a3-4d1d-bc9a-6ebf82ee5cdd','a5a79ab7260d04ec3187ac2da13a906ca86738714960778a81dabfb508bfa07c','2025-05-11 11:09:07.266','20250511110906_fixed_naming_type_with_category',NULL,NULL,'2025-05-11 11:09:07.160',1),('2326caf0-683d-4a28-879c-6dcb8cb294f9','94cf11497315fcc17cb01fe1e434db867ad5d24dfc439643d9566c27ba0a8194','2025-06-08 22:57:15.306','20250608225713_added_description_to_course_model',NULL,NULL,'2025-06-08 22:57:15.283',1),('36a4e86d-88fc-47d5-8ae9-63ff5800c863','6905c22ce4d1de8edbb0584b641ac95c3e5ad7cba65f99665aef29b37c323001','2025-04-27 16:03:01.061','20250427160300_platform_model',NULL,NULL,'2025-04-27 16:03:01.037',1),('8da59463-c665-4fbd-9452-1d95b6dfa1ff','869def89d61a69a1bdbaf8ffafc51288959ef8bf5b05fd1f3962760ca1483b98','2025-05-12 20:28:43.312','20250512202842_revert_some_field_changes_on_course_table',NULL,NULL,'2025-05-12 20:28:43.071',1),('967928a9-387b-44e6-b57c-9026bd5ea2ff','a94f9544e62528bae90c345f540b0dbb5d995f6b328f039fb80602bf7a59f1ca','2025-05-11 11:02:43.508','20250511110243_added_caterogy_id_to_course',NULL,NULL,'2025-05-11 11:02:43.443',1),('b9d2477b-ae56-48dd-a527-6f1ed0545d23','fa0399f12a3941b3da8d3f69c90b59aa8348014fd2dfcc0904694ba482a738b9','2025-05-12 20:19:43.348','20250512201942_created_technology_priority_difficulty_and_update_course',NULL,NULL,'2025-05-12 20:19:43.185',1),('d452198b-f3c4-4304-8750-26d462028c0f','496b45e407fc6ce1ad28de190bf564ea87e1769e78e8ebf6f1e6eaebf83e2d79','2025-04-27 15:35:52.419','20250427153552_init_db_setup',NULL,NULL,'2025-04-27 15:35:52.387',1),('dfdb3ae9-ceda-4797-b940-dbec7b172e04','dbca8188655786d4f846b67f7355c82e6dd599db19f8eb7e96cacface2e7a3ba','2025-06-07 19:08:46.346','20250607190844_created_join_table_for_learning_path_and_courses',NULL,NULL,'2025-06-07 19:08:46.137',1),('f4e2b507-dc22-4a3e-a057-39c1fefb61e5','755ea624404e5d36073752d87e882a9655d58e526ee539e54be89f520d3394aa','2025-05-12 20:25:13.592','20250512202512_made_some_field_optional',NULL,NULL,'2025-05-12 20:25:13.545',1),('f8515bc1-afb6-4f44-9907-28b41f0f753b','a63c52da0747e87f3baadb345a4c8ec8c929dcfac460fb5abd59ac5c10e32649','2025-04-28 19:38:32.938','20250428193832_add_category_table',NULL,NULL,'2025-04-28 19:38:32.914',1),('fcfccb5b-4312-46b8-b292-372f746367c3','936cd0b9f1f1beb41ba9f0ba6aacc12d937dae7b9d5d5752dfe1ed31bbf84a6f','2025-06-07 18:46:52.097','20250607184650_added_courses_to_learning_path_model',NULL,NULL,'2025-06-07 18:46:52.023',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Category`
--

DROP TABLE IF EXISTS `Category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Category`
--

LOCK TABLES `Category` WRITE;
/*!40000 ALTER TABLE `Category` DISABLE KEYS */;
INSERT INTO `Category` VALUES (1,'Front-End'),(2,'Back-End'),(3,'Mobile Development'),(4,'AI & ML'),(5,'Database ');
/*!40000 ALTER TABLE `Category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('NOT_STARTED_YET','IN_PROGRESS','DONE','BLOCKED','ABANDONED') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'NOT_STARTED_YET',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) DEFAULT NULL,
  `categoryId` int NOT NULL,
  `platformId` int NOT NULL,
  `difficulty` enum('BEGINNER','INTERMEDIATE','ADVANCED','MASTERY') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'BEGINNER',
  `duration` float DEFAULT NULL,
  `lastSeen` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link` varchar(2048) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `note` mediumtext COLLATE utf8mb4_unicode_ci,
  `priority` enum('VERY_LOW','LOW','MEDIUM','HIGH','VERY_HIGH','URGENT') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'VERY_LOW',
  `description` mediumtext COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `Course_categoryId_fkey` (`categoryId`),
  KEY `Course_platformId_fkey` (`platformId`),
  CONSTRAINT `Course_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `Course_platformId_fkey` FOREIGN KEY (`platformId`) REFERENCES `platform` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `Course` WRITE;
/*!40000 ALTER TABLE `Course` DISABLE KEYS */;
INSERT INTO `Course` VALUES (8,'SQL Mastery','IN_PROGRESS','2025-05-12 22:48:29.969','2025-07-06 22:24:31.879',5,1,'BEGINNER',5,'12','https://github.com/erfanbr','','VERY_LOW','Become fluent in SQL (Structured Query Language) and take full control of data. This course guides you from the basics of writing queries to advanced data manipulation techniques used by analysts, engineers, and developers worldwide.'),(9,'Django v2','NOT_STARTED_YET','2025-05-12 23:15:20.827','2025-07-09 22:37:02.844',2,2,'INTERMEDIATE',5,'5','','','MEDIUM',''),(10,'Responsive Web Design','ABANDONED','2025-05-12 23:15:20.827','2025-07-05 22:09:11.058',1,2,'INTERMEDIATE',15,'43','','','MEDIUM',''),(11,'Another Course','BLOCKED','2025-05-12 23:15:20.827','2025-06-04 18:44:54.433',2,2,'ADVANCED',5,'26','','','VERY_HIGH',NULL),(12,'React: Zero to Hero','BLOCKED','2025-05-12 23:15:20.827','2025-06-08 23:18:22.193',2,2,'INTERMEDIATE',4,'45','','','MEDIUM','Dive into React, the powerful JavaScript library used by top tech companies to build fast, interactive web applications. This course will teach you how to create dynamic, component-based user interfaces with clean, maintainable code.'),(13,'Angular basics','DONE','2025-05-12 23:15:20.827','2025-06-09 09:59:03.904',1,2,'BEGINNER',8,'25','','','MEDIUM','Get started with Angular, the powerful front-end framework maintained by Google. This course will teach you how to build dynamic, single-page applications (SPAs) using a structured, component-driven approach.'),(14,'Another Course v5','IN_PROGRESS','2025-05-12 23:15:20.827','2025-06-05 19:43:16.119',5,1,'INTERMEDIATE',6,'10','','','MEDIUM',NULL),(15,'Another Course v6','IN_PROGRESS','2025-05-12 23:15:20.827','2025-06-04 20:12:18.482',5,1,'INTERMEDIATE',12,'42','','','VERY_LOW',NULL),(18,'Learn Typescript & Java Script','ABANDONED','2025-05-12 23:15:20.827','2025-06-08 23:18:34.764',5,3,'MASTERY',15,'8','','','MEDIUM','Master the language of the web with JavaScript, and level up your development with the power of TypeScript. This course introduces core programming concepts and shows how TypeScript enhances JavaScript with type safety and modern tooling.'),(21,'Another course test','DONE','2025-05-18 22:27:38.758','2025-05-25 21:57:37.224',4,3,'BEGINNER',21,'15','www.google.com','','URGENT',NULL),(22,'my last test b4 sleep','ABANDONED','2025-05-18 22:28:19.005','2025-05-18 22:28:19.005',1,1,'BEGINNER',123,'19','','','LOW',NULL),(23,'Basics of HTML & CSS','DONE','2025-05-19 21:05:04.261','2025-06-08 23:18:43.472',2,11,'MASTERY',12,'69','','','HIGH','Learn the building blocks of the web! This beginner-friendly course introduces you to HTML and CSS, the essential languages for creating and styling websites.'),(24,'Another title test','NOT_STARTED_YET','2025-05-19 21:07:43.220','2025-05-19 21:07:43.220',2,2,'MASTERY',56,'22','','','MEDIUM',NULL),(25,'My title','ABANDONED','2025-05-19 21:08:30.322','2025-05-19 21:08:30.322',3,11,'MASTERY',56,'56','','','LOW',NULL),(26,'Testin Enum component','ABANDONED','2025-05-19 21:39:02.817','2025-06-08 23:19:04.018',5,11,'MASTERY',69,'24','test url','','URGENT','Variables, data types, and operators  Functions, conditionals, and loops  Arrays and objects  DOM manipulation and events  ES6+ features like arrow functions, destructuring, and modules'),(27,'Testing disbale course','DONE','2025-05-20 21:42:49.883','2025-05-20 21:42:49.883',1,1,'ADVANCED',12,'12','asd12re12r','','LOW',NULL),(28,'My Test Course directly v3','DONE','2025-05-21 20:52:42.516','2025-05-21 20:52:42.516',4,2,'BEGINNER',12,'38','https://www.facebook.com/raya.abbassi/videos/906040140123576/','','URGENT',NULL);
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `learningpath`
--

DROP TABLE IF EXISTS `learningpath`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `learningpath` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` mediumtext COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `learningpath`
--

LOCK TABLES `learningpath` WRITE;
/*!40000 ALTER TABLE `learningpath` DISABLE KEYS */;
INSERT INTO `learningpath` VALUES (1,'Front-End Fundamentals','Kickstart your journey into web development by mastering the core technologies that power the web. This learning path guides you from the basics of building static web pages to creating dynamic, responsive, and interactive user interfaces. What You\'ll Learn: * HTML & CSS: Structure and style your pages from scratch. * JavaScript (JS): Add interactivity and dynamic behavior. * Responsive Design: Make websites look great on any device. * Frameworks & Libraries: Learn React and other modern tools. * Version Control: Collaborate and manage code with Git & GitHub. Perfect for beginners and aspiring front-end developers ready to build real-world projects.'),(2,'Database Fundamentals',NULL),(33,'Learning Path test','This a description for learning path');
/*!40000 ALTER TABLE `learningpath` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `learningpathcourse`
--

DROP TABLE IF EXISTS `learningpathcourse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `learningpathcourse` (
  `id` int NOT NULL AUTO_INCREMENT,
  `learningPathId` int DEFAULT NULL,
  `courseId` int NOT NULL,
  `order` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `LearningPathCourse_learningPathId_courseId_key` (`learningPathId`,`courseId`),
  KEY `LearningPathCourse_courseId_fkey` (`courseId`),
  CONSTRAINT `LearningPathCourse_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `course` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `LearningPathCourse_learningPathId_fkey` FOREIGN KEY (`learningPathId`) REFERENCES `learningpath` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=120 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `learningpathcourse`
--

LOCK TABLES `learningpathcourse` WRITE;
/*!40000 ALTER TABLE `learningpathcourse` DISABLE KEYS */;
INSERT INTO `learningpathcourse` VALUES (1,1,8,4),(2,1,12,3),(3,1,23,1),(4,2,26,1),(5,1,18,2),(6,2,27,2),(8,2,15,4),(13,2,18,3),(117,33,18,1),(118,33,15,2),(119,33,23,3);
/*!40000 ALTER TABLE `learningpathcourse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Platform`
--

DROP TABLE IF EXISTS `Platform`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Platform` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Platform`
--

LOCK TABLES `Platform` WRITE;
/*!40000 ALTER TABLE `Platform` DISABLE KEYS */;
INSERT INTO `Platform` VALUES (1,'Udemy'),(2,'Coursera'),(3,'Youtube'),(11,'Linkedin'),(13,'FrontEnd Masters'),(15,'Books');
/*!40000 ALTER TABLE `Platform` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Technology`
--

DROP TABLE IF EXISTS `Technology`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Technology` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Technology`
--

LOCK TABLES `Technology` WRITE;
/*!40000 ALTER TABLE `Technology` DISABLE KEYS */;
INSERT INTO `Technology` VALUES (1,'React'),(2,'TypeScript'),(3,'Python'),(4,'Django'),(5,'JavaScript'),(6,'Java'),(8,'C#'),(18,'Angular');
/*!40000 ALTER TABLE `Technology` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-12 21:47:32
