# Inventory Service

The inventory service manages product master data and stock state for each organization.

## Responsibilities

- Product catalog
- SKU uniqueness per organization
- HSN/SAC and unit-of-measure metadata
- Sale price and tax rate snapshots for orders
- Stock balances
- Manual stock adjustments
- Stock deduction when orders are confirmed

## Main API Areas

- `GET /api/v1/inventory/products`
- `POST /api/v1/inventory/products`
- `PUT /api/v1/inventory/products/{product_id}`
- `GET /api/v1/inventory/products/{product_id}/order-snapshot`
- `GET /api/v1/inventory/stock/{product_id}`
- `POST /api/v1/inventory/stock/adjust`
- `POST /api/v1/inventory/stock/check`
- `POST /api/v1/inventory/stock/deduct`

## Application Usage

The app uses inventory products when creating orders. Product-backed order lines send `product_id` and quantity to the order service, which then fetches the authoritative product snapshot from inventory.

When an order is confirmed, stock deduction is requested for product-backed order lines.
