CREATE DATABASE lostAndFound;
use lostAndFound;

CREATE TABLE `users` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `login` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL
);

CREATE TABLE `item` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `description` varchar(150) NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `date_item` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `latitude` varchar(25),
    `longitude` varchar(25),
    `name_found` varchar(100),
    `phone` varchar(11),
    `email` varchar(255),
    `owner_id` int
);

CREATE TABLE `owner` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `cpf` varchar(11) NOT NULL,
    `birth_date` date NOT NULL,
    `phone` varchar(11) NOT NULL,
    `email` varchar(255) NOT NULL,
    `identification_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE `item` ADD FOREIGN KEY (`owner_id`) REFERENCES `owner` (`id`);

insert into users(`name`, `login`, `password`)
values('ADMIN', 'admin', '$2a$10$Tqcg3.zyLyTfhB2arNqituma7sWaC2qyyLmsY1llQ1KANCLqXjvoO');
