-- Users
INSERT INTO users VALUES(
	'admin',
	'admin',
	'アドミン',
	'admin@XXX.com',
	NOW()
);

-- Portfolio
INSERT INTO portfolio(user_id, brand_code) VALUES(
	'admin',
	'{6012, 1212}'
);

-- Portfolio
INSERT INTO portfolio(user_id, brand_code) VALUES(
	'admin',
	'{1489}'
);

-- Brand
INSERT INTO brand VALUES(
	'6012',
	'テストブランド'
);

INSERT INTO brand VALUES(
	'1212',
	'テストブランド2'
);

INSERT INTO brand VALUES(
	'1489',
	'追加ブランド'
);

-- StockPrice
INSERT INTO stock_price VALUES(
	'2017-08-06 09:00',
	'6012',
	100.00,
	104.50,
	99.10,
	103.30,
	100300
);

INSERT INTO stock_price VALUES(
	'2017-08-06 09:05',
	'6012',
	100.00,
	104.50,
	99.10,
	103.30,
	100300
);

INSERT INTO stock_price VALUES(
	'2017-08-06 09:10',
	'6012',
	100.00,
	104.50,
	99.10,
	103.30,
	100300
);


INSERT INTO stock_price VALUES(
	'2017-08-06 09:05',
	'1212',
	100.00,
	104.50,
	99.10,
	103.30,
	100300
);

INSERT INTO stock_price VALUES(
	'2017-08-06 09:10',
	'1212',
	100.00,
	104.50,
	99.10,
	103.30,
	100300
);

INSERT INTO stock_price VALUES(
	'2017-08-06 09:15',
	'1212',
	100.00,
	104.50,
	99.10,
	103.30,
	100300
);

INSERT INTO stock_price VALUES(
	'2017-08-06 09:05',
	'1489',
	100.00,
	104.50,
	99.10,
	103.30,
	100300
);

INSERT INTO stock_price VALUES(
	'2017-08-06 09:10',
	'1489',
	100.00,
	104.50,
	99.10,
	103.30,
	100300
);

INSERT INTO stock_price VALUES(
	'2017-08-06 09:15',
	'1489',
	100.00,
	104.50,
	99.10,
	103.30,
	100300
);