CREATE DATABASE lostAndFound;
use lostAndFound;

CREATE TABLE `users` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `full_name` varchar(255) NOT NULL,
    `email` varchar(255)
);

CREATE TABLE `item` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(255),
    `description` varchar(150),
    `status` VARCHAR(255),
    `date_item` TIMESTAMP NOT NULL DEFAULT `CURRENT_TIMESTAMP`,
    `latitude` varchar(25),
    `longitude` varchar(25),
    `name_found` varchar(100),
    `phone` varchar(11),
    `email` varchar(255),
    `owner_id` int
);

CREATE TABLE `owner` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(255),
    `cpf` varchar(11),
    `birthDate` date,
    `phone` varchar(11),
    `email` varchar(255),
    `identificationDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE `item` ADD FOREIGN KEY (`owner_id`) REFERENCES `owner` (`id`);
