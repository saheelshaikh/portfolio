# Data portfolio demonstrations

All records are deterministic synthetic data, not customer or employer data.

Sales analysis uses 180 valid records from January–June 2026. Revenue and cost are in SAR. Gross profit = revenue − cost. Margin = gross profit / revenue. The table displays every filtered record; charts and metrics use that same set.

The quality demonstration uses a deliberately corrupted copy with 182 rows: 2 repeated order IDs and 4 invalid records. Rules reject missing ID or region, nonpositive revenue, missing/negative cost and cost exceeding revenue. Repeated IDs after the first occurrence are rejected. The clean set contains 176 records. This is a browser demonstration of validation logic, not a scheduled production ETL system.

Open index.html through a static web server. Download sales.csv and analysis.sql to reproduce the sales summaries with SQL. Import raw-orders.csv into a separate orders table to reproduce quality checks. No installation or credentials are required for the web demo.
