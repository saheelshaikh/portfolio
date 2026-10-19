-- Sample data only. Import sales.csv into an orders table with these columns.
-- SQL is compatible with SQLite and PostgreSQL.
CREATE TABLE orders (order_id TEXT, month TEXT, region TEXT, category TEXT, revenue NUMERIC, cost NUMERIC);

-- Monthly revenue and gross profit
SELECT month, COUNT(*) AS orders, ROUND(SUM(revenue), 2) AS revenue,
       ROUND(SUM(revenue - cost), 2) AS gross_profit
FROM orders GROUP BY month ORDER BY month;

-- Regional performance
SELECT region, COUNT(*) AS orders, ROUND(SUM(revenue), 2) AS revenue,
       ROUND(100.0 * SUM(revenue - cost) / NULLIF(SUM(revenue), 0), 2) AS margin_pct
FROM orders GROUP BY region ORDER BY revenue DESC;

-- Quality checks: run on a separate table populated from raw-orders.csv.
-- Duplicate occurrences beyond the first:
SELECT SUM(n - 1) AS duplicate_rows FROM (
  SELECT order_id, COUNT(*) AS n FROM orders
  WHERE order_id IS NOT NULL AND order_id <> ''
  GROUP BY order_id HAVING COUNT(*) > 1
) duplicates;
SELECT * FROM orders WHERE order_id IS NULL OR order_id = ''
 OR region IS NULL OR region = '' OR revenue IS NULL OR revenue <= 0
 OR cost IS NULL OR cost < 0 OR cost > revenue;
