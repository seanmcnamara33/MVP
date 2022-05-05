-- DROP DATABASE IF EXISTS boulders;

-- CREATE DATABASE boulders;

-- \c boulders;

-- DROP TABLE IF EXISTS  reviews, sectors, areas boulders, messages, tags,

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  rating INT NOT NULL,
  date BIGINT NOT NULL,
  body VARCHAR(1000),
  author VARCHAR(255) NOT NULL
);

CREATE TABLE areas (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE sectors (
  id SERIAL PRIMARY KEY,
  area_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  FOREIGN KEY(area_id) REFERENCES areas(id)
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  author VARCHAR(255) NOT NULL,
  message VARCHAR(1000) NOT NULL,
  date BIGINT NOT NULL
);

CREATE TABLE boulders (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  grade VARCHAR(50) NOT NULL,
  type VARCHAR(50) NOT NULL,
  fa VARCHAR(100) NOT NULL,
  sector_id INT NOT NULL,
  area_id INT NOT NULL,
  description VARCHAR(1000) NOT NULL,
  FOREIGN KEY(sector_id) REFERENCES sectors(id),
  FOREIGN KEY(area_id) REFERENCES areas(id)
);

CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  review_id INT NOT NULL,
  boulder_id INT NOT NULL,
  message_id INT NOT NULL,
  FOREIGN KEY(review_id) REFERENCES reviews(id),
  FOREIGN KEY(boulder_id) REFERENCES boulders(id),
  FOREIGN KEY(message_id) REFERENCES messages(id)
);
