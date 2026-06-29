---
title: Opslora application guide
slug: /
---

# Opslora application guide

Opslora is a business operations workspace for teams that need one place to manage customers, products, orders, invoices, payments, and daily operating signals.

This documentation is written for people using the application. It does not document internal services, infrastructure, APIs, containers, or deployment architecture.

## What Opslora helps you do

- Create an organization workspace and sign in securely.
- Keep customer records clean and ready for orders and invoices.
- Maintain the product catalogue and stock information used by sales workflows.
- Create and confirm customer orders.
- Convert confirmed orders into invoices.
- Record payments, review payment history, and process refunds where available.
- Use settings to keep business profile, tax, invoice, portal, feature, and Lora AI consent options aligned.
- Use Lora AI, when enabled, as an operations assistant for summaries and follow-up prompts.

## Current application areas

| Area | What it is for |
| --- | --- |
| Dashboard | High-level revenue, order, customer, and invoice signals. |
| Customers | Customer profiles, billing details, tax details, and customer updates. |
| Inventory | Product catalogue, sellable items, stock balances, and stock adjustments. |
| Orders | Draft, confirm, cancel, and prepare orders for invoicing. |
| Invoices | Review invoices, track open/paid states, download invoice documents, and start payment flows. |
| Payments | See payment activity, open payment details, and process refunds. |
| Lora AI | Consent-gated assistant for operations briefing and natural-language questions. |
| Settings | Business profile, tax profile, invoice defaults, invoice templates, portal settings, feature flags, profile, and Lora AI consent. |

## Recommended reading path

1. [Getting started](./getting-started.md)
2. [Daily operations workflow](./daily-workflow.md)
3. [Customers](./customers.md)
4. [Inventory](./inventory.md)
5. [Orders](./orders.md)
6. [Invoices](./invoices.md)
7. [Payments](./payments.md)
8. [Lora AI](./lora-ai.md)
9. [Settings](./settings.md)
10. [Troubleshooting and FAQ](./troubleshooting.md)

## Product principle

Opslora is organized around the order-to-cash workflow:

```text
Customer -> Product/stock -> Order -> Invoice -> Payment -> Follow-up
```

The application keeps each step visible so users can see what needs action next, instead of jumping between disconnected tools.
