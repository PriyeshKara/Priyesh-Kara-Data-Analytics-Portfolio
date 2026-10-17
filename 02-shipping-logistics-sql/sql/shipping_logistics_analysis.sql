-- Shipping & Logistics SQL Analysis
-- Compatible with SQLite after importing logistics.csv and customers.csv.

-- 1. Total sales by shipping mode
SELECT Ship_Mode, ROUND(SUM(Sales), 2) AS total_sales
FROM Logistics
GROUP BY Ship_Mode
ORDER BY total_sales DESC;

-- 2. Sales by customer segment
SELECT c.Segment, ROUND(SUM(l.Sales), 2) AS total_sales
FROM Logistics AS l
JOIN Customers AS c ON l.Customer_ID = c.Customer_ID
GROUP BY c.Segment
ORDER BY total_sales DESC;

-- 3. Average discount by product category
SELECT Category, ROUND(AVG(Discount), 3) AS average_discount
FROM Logistics
GROUP BY Category
ORDER BY average_discount DESC;

-- 4. Sales by city and shipping mode
SELECT City, Ship_Mode, ROUND(SUM(Sales), 2) AS total_sales
FROM Logistics
GROUP BY City, Ship_Mode
ORDER BY City, total_sales DESC;

-- 5. Customer-level sales ranking
SELECT c.Customer_ID, c.Segment, ROUND(SUM(l.Sales), 2) AS total_sales
FROM Logistics AS l
JOIN Customers AS c ON l.Customer_ID = c.Customer_ID
GROUP BY c.Customer_ID, c.Segment
ORDER BY total_sales DESC;
