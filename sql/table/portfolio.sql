-- PORTFOLIO
DROP TABLE IF EXISTS portfolio CASCADE;
CREATE TABLE portfolio (
	portfolio_no SERIAL NOT NULL,
	user_id VARCHAR(10),
	brand_code VARCHAR(4)[],
	PRIMARY KEY (portfolio_no),
	FOREIGN KEY(user_id) REFERENCES users(user_id)
);