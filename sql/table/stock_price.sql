-- StockPrice
DROP TABLE IF EXISTS stock_price CASCADE;
CREATE TABLE stock_price (
	datetime TIMESTAMP NOT NULL,
	brand_code VARCHAR(4),
	open DECIMAL(5,2),
	high DECIMAL(5,2),
	low DECIMAL(5,2),
	close DECIMAL(5,2),
	volume INTEGER,
	PRIMARY KEY (datetime, brand_code),
	FOREIGN KEY (brand_code) REFERENCES brand(brand_code)
);
