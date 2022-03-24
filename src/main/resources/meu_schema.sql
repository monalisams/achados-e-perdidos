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
    `date_item` datetime,
    `latitude` varchar(25),
    `longitude` varchar(25),
    `name_found` varchar(100),
    `phone` varchar(11),
    `email` varchar(255),
    `owner_id` int
);

CREATE TABLE `owner` (
    `id` int PRIMARY KEY,
    `name` varchar(255),
    `cpf` varchar(11),
    `birth_date` datetime,
    `phone` varchar(11),
    `email` varchar(255),
    `identification_data` datetime
);

ALTER TABLE `item` ADD FOREIGN KEY (`owner_id`) REFERENCES `owner` (`id`);
