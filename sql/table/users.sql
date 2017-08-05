CREATE TABLE users (
	user_id varchar(10) NOT NULL,
	password varchar(10) NOT NULL,
	user_name varchar(10),
	email varchar(20),
	create_date DATE,
	PRIMARY KEY(user_id, password)
);