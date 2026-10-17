# Shipping & Logistics Sales Analysis Using SQL

## Overview

A compact relational-data practice project analysing shipping mode, location, product category, sales, discount and customer segment.

## Data model

- `Logistics` contains order-level sales records.
- `Customers` contains customer ID, anonymised customer name and segment.
- The tables join through `Customer_ID`.

## Questions explored

- Which shipping mode generates the most sales?
- Which customer segments contribute the most revenue?
- Which categories receive the highest average discount?
- How do sales vary by city and shipping mode?
- Which customers rank highest by total sales?

## Files

- `data/logistics.csv`
- `data/customers.csv`
- `data/ShippingLogisticsSQLPractice_SANITISED.xlsx`
- `sql/shipping_logistics_analysis.sql`

## Skills demonstrated

SQL joins, aggregation, grouping, sorting, relational structure and translating commercial questions into queries.

## Limitation

The supplied workbook is a small practice dataset. A larger version with dates, quantities, delivery status, shipping cost and profit would support stronger trend and operational analysis.
