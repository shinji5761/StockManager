-- BRAND
DROP TABLE IF EXISTS brand CASCADE;
CREATE TABLE brand (
	brand_code VARCHAR(4) NOT NULL,
	brand_name VARCHAR(20) NOT NULL,
	PRIMARY KEY (brand_code)
);
