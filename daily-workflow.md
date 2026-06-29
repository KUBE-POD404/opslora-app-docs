---
title: Daily operations workflow
---

# Daily operations workflow

Opslora is designed around a practical daily operating rhythm: know what changed, know what needs action, then move customer work forward.

## Start with the dashboard

Use the dashboard to check:

- total revenue
- customer count
- order count
- average invoice value
- revenue trend
- invoice status mix

This is the fastest way to see whether the business needs attention before opening individual work areas.

## Review customers

Open Customers when you need to:

- add a new customer
- update billing or contact details
- check customer identity before creating an order
- keep tax details ready for invoices

Customer data is reused across orders and invoices, so fix customer details before creating downstream records.

## Check inventory before sales work

Open Inventory before creating or confirming orders.

Use it to:

- confirm products exist
- check available stock
- adjust stock when needed
- review sellable price and tax details

Inventory is a user-facing application workspace here. This documentation intentionally does not describe the internal inventory implementation.

## Move orders forward

Open Orders to manage the sales pipeline.

Typical order states:

- Created or draft: still being prepared.
- Confirmed: ready for invoice creation.
- Cancelled: no longer moving forward.

A confirmed order that does not yet have an invoice should be treated as an action item.

## Invoice confirmed work

Open Invoices to track what has been billed and what still needs payment.

Use invoice screens to:

- review invoice status
- open invoice details
- create payment flows from unpaid invoices
- cancel an invoice when allowed
- download the invoice document where available

## Collect and review payments

Open Payments to check:

- recorded payments
- payment methods
- settlement state
- refunds where available
- transaction history for an invoice

## Use Lora AI when enabled

If the organization has opted in to Lora AI, use it for operational questions such as:

- “Summarize open invoices and list follow-ups.”
- “Find confirmed orders ready to invoice.”
- “Explain low-stock products that may affect orders.”
- “Draft customer follow-up messages for overdue invoices.”

Lora AI is consent-gated. If disabled, an admin must enable it in Settings before application data is shared with Lora.

## End-of-day check

Before closing the day:

- confirm all ready orders are invoiced
- check open invoices
- check payment/refund exceptions
- review low or changed stock
- verify customer details for any records created today
