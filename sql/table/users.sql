-- USERS
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
	user_id VARCHAR(10) NOT NULL,
	password VARCHAR(10) NOT NULL,
	user_name VARCHAR(10),
	email VARCHAR(20),
	create_date DATE,
	PRIMARY KEY(user_id)
);
