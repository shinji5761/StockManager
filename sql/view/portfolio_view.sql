CREATE OR REPLACE VIEW portfolio_view AS (
	-- ポートフォリオ画面を表示するのに､必要なデータを取得する｡
	-- ポートフォリオ番号､銘柄コード､銘柄情報
	SELECT
		P.portfolio_no
		, to_json(BR) AS brand
	FROM
	-- P ポートフォリオごとに､銘柄コードを分解する｡
	(
		SELECT
			portfolio_no
			, UNNEST(brand_code) AS code
		FROM portfolio
	) AS P
	JOIN
	-- BR : 各銘柄の最新値を取得する｡
	(
		SELECT
			T.brand_code
			, A.brand_name
			, T.latesttime AS datetime
			, A.open
			, A.high
			, A.low
			, A.close
			, A.volume	
		FROM
		-- T : 銘柄ごとの最新の時刻コマ
		(
			SELECT DISTINCT brand_code, MAX(datetime) AS latesttime FROM stock_price 
			GROUP BY brand_code
		) AS T JOIN
		-- A : 指定したポートフォリオIDに紐づくブランドを取得する｡
		(
			SELECT B.brand_code, S.datetime, B.brand_name, S.open, S.high, S.low, s.close, s.volume FROM
				-- B : 銘柄コードの銘柄名を取得する
				(
					SELECT brand_code, brand_name FROM brand
					WHERE brand_code IN
					-- ユーザーが登録しているポートフォリオの銘柄コードを取得する
					(
						SELECT DISTINCT UNNEST(brand_code) FROM portfolio
						WHERE
							user_id = 'admin'
					)
				) AS B JOIN
				-- S : 銘柄コードの市場価格を取得する｡
				(
					SELECT * FROM stock_price
					WHERE brand_code IN
					-- ユーザーが登録しているポートフォリオの銘柄を取得する
					(
						SELECT DISTINCT UNNEST(brand_code) FROM portfolio
						WHERE
							user_id = 'admin'
					)
				) AS S
			ON S.brand_code = B.brand_code
		) AS A
		ON T.brand_code = A.brand_code AND T.latesttime = A.datetime
	) AS BR
	ON P.code = BR.brand_code
);