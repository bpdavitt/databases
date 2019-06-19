DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'messages'
-- 
-- ---

DROP TABLE IF EXISTS `messages`;
		
CREATE TABLE `messages` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `user` INTEGER NOT NULL,
  `text` VARCHAR(120) NOT NULL,
  `room` VARCHAR(50) NOT NULL DEFAULT 'main',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
		
CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (user) REFERENCES `users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `messages` (`id`,`user`,`text`,`room`,`created_at`) VALUES
-- ('','','','','');
-- INSERT INTO `users` (`id`,`username`) VALUES
-- ('','');
/*
CREATE TABLE messages (
  /* Describe your table here.
);

Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

