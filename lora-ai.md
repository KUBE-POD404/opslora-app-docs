---
title: Lora AI
---

# Lora AI

Lora AI is Opslora's application assistant. It helps users summarize operational data and ask natural-language questions about customers, orders, invoices, payments, products, and stock.

This page documents Lora AI as an application feature only. It does not describe internal model hosting, infrastructure, or deployment details.

## Consent first

Lora AI is disabled by default for an organization.

An organization admin must enable consent before Opslora shares live application data or generated operations snapshots with Lora AI.

Consent settings are managed in:

```text
Settings -> Lora AI consent
```

## What Lora AI can help with

Example prompts:

- Summarize open invoices and list the three most important follow-ups.
- Find confirmed orders that are ready to invoice.
- Explain which low-stock products could affect active orders.
- Draft customer follow-up messages for overdue invoices.

## Daily operations briefing

When enabled, Lora AI can use an operations snapshot containing current application data such as:

- active customers
- open invoices
- overdue invoices
- orders ready to invoice
- payments
- products and stock signals

The structured briefing and recommended actions should be treated as the primary source of truth. AI commentary is helpful, but exact facts should be checked against the application tables when needed.

## Provider status

The Lora AI page can show provider status so users know whether the assistant is available.

If the provider is unavailable:

- continue using the normal app workflows
- try again later
- ask an admin/operator to check the environment if it remains down

## Good usage pattern

1. Open Lora AI.
2. Confirm the organization has consent enabled.
3. Refresh or review the daily briefing.
4. Ask a focused question.
5. Use cited or structured facts to open the relevant app screen.
6. Take the final business action in Customers, Orders, Invoices, Payments, or Inventory.

## Important limitations

- Lora AI should not be used as the only source for financial decisions.
- Always verify invoices, payments, and customer-facing messages before sending or acting.
- If results look stale, refresh the relevant application screen and rerun the briefing.
