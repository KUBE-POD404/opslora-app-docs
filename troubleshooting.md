---
title: Troubleshooting and FAQ
---

# Troubleshooting and FAQ

## I cannot sign in

Check:

- organization slug
- email address
- password
- whether you are using test or production

If you were already signed in and see unexpected behavior, sign out and sign in again.

## I do not see a customer in an order form

Check that the customer exists in Customers and belongs to the current organization workspace.

## I cannot create an invoice

Usually, invoices are created from confirmed orders.

Check:

- the order is confirmed
- the order has not already been invoiced
- customer details are valid
- invoice defaults/templates are configured if required

## A payment does not update the invoice as expected

Open the invoice detail and review payment history.

Check:

- payment amount
- payment method
- whether the invoice is partially paid, paid, refunded, or cancelled

## Lora AI is disabled

An organization admin must enable consent in Settings -> Lora AI consent.

Until consent is enabled, use the normal app screens for customers, orders, invoices, payments, inventory, and dashboard review.

## Lora AI gives an answer that looks wrong

Use the application records as the source of truth.

Recommended steps:

1. Open the relevant app page.
2. Refresh the data.
3. Check the exact customer/order/invoice/payment/product record.
4. Refresh the Lora AI briefing and ask again.

## The dashboard totals look stale

Refresh the page and verify recent changes in the related page:

- customers in Customers
- orders in Orders
- invoices in Invoices
- payments in Payments

## Which environment should I use?

Use production for real work:

```text
https://app.opslora.com
```

Use test for demos, validation, and safe checks:

```text
https://app-test.opslora.com
```

## Where are technical deployment docs?

This app docs site is intentionally focused on application usage. Internal infrastructure, services, deployment, and API documentation live outside the user-facing app docs.
