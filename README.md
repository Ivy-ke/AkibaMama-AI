# AkibaMama
### Chama Financial Intelligence Platform

> Turning informal savings into formal financial identity.

---

## The Problem

Over 300,000 chamas operate across Kenya, collectively managing billions of shillings — mostly recorded in notebooks and tracked on WhatsApp.

Three problems that repeat across every chama:

**1. Poor record-keeping.** Notebooks get lost. Figures get disputed. Treasurers make mistakes — or worse, disappear with the money.

**2. No financial insight.** Women save consistently and responsibly, but have no guidance on how to grow that money. No one tells them about money market funds or Treasury bills.

**3. Invisible creditworthiness.** A woman who has contributed KES 1,500 every month for 3 years has proven she is financially disciplined — but no bank can see it. She has no credit history. The door to formal finance stays closed.

---

## The Solution

AkibaMama is an AI-powered financial management platform built specifically for chamas. It replaces notebooks with structured records, adds intelligence to savings decisions, and builds a financial identity that connects informal savings to formal credit.

**The core insight:**

> The real product is not the app. It is the financial identity the app builds — the credit score that opens a bank door that was previously closed.

---

## Features

### Member Dashboard
- Personal savings balance and contribution history
- Loan eligibility calculated automatically from chama rules
- Group savings view — total and progress visible, individual amounts private
- AI financial advisor with Kenya-specific investment guidance
- Transparency voting — every group transaction requires member approval

### Treasurer Dashboard
- Full group overview — total savings, loans out, pending requests
- M-Pesa live feed — contributions auto-recorded from paybill
- Configurable loan rules — set your own multiple, interest rate, repayment period, guarantors
- Member management with SMS invitation flow
- Loan request review with AI risk assessment per member

### AI Advisor (Akiba AI)
- Answers financial questions in plain English
- Kenya-specific context — M-Pesa, SACCOs, NSE, CBK, Treasury Bills, chamas
- Quick topic chips — Best investments, Money Market Fund, Treasury Bills, Bank Loans, Compound Interest, SACCOs, Inflation
- Full conversation memory within each session

### Community Credit Score
Built from contribution history:
- On-time payment rate
- Contribution consistency
- Loan repayment record
- Length of membership

This score creates a formal financial record for women who have no credit history with banks — a direct pathway from informal chama savings to formal financial inclusion.

### Transparency Voting
Every withdrawal, investment, or large transaction requires a group vote before it processes. Members receive a notification, review the details with an AI risk assessment, and vote to accept or deny. The result is recorded and tamper-proof.

### Privacy by Design
- Individual savings amounts are never visible to other members — including the treasurer
- Group totals are visible to all members
- Active loan amounts are visible (group accountability), but savings are not
- Role-based access enforced throughout

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| AI Advisor |
| Payments (production) | M-Pesa Daraja C2B API — Safaricom |
| Notifications | SMS via Africa's Talking |
| Hosting | GitHub Pages |

---

## Live Demo

**[Open AkibaMama](https://Ivy-ke.github.io/akibamama-ai/)**

### Demo Login

| Role | Phone | Password |
|---|---|---|
| Member | 0700123456 | `Akiba@2025!` |
| Treasurer | 0711234567 | `Chama#9Tr3s!` |

Or tap the **Quick Demo Login** cards on the login screen.

### Suggested demo flow

1. Sign in as **Member (Mary)** — see personal savings, credit score, group balance, AI insight
2. Go to **Loans** — check eligibility, open the loan application, watch the repayment calculator update live
3. Go to **Vote** — cast a vote on the pending transaction, watch the live tally fill
4. Open **AI Advisor** — tap a topic chip or ask a financial question
5. Tap **Switch Role** — switch to Treasurer view
6. Explore **Dashboard** — M-Pesa feed, pending loan requests, member management

---

## Running Locally

No build process. No dependencies. Just open the file.

```bash
git clone https://github.com/YOUR-USERNAME/akibamama-ai.git
cd akibamama-ai
open index.html
```

Or with VS Code:
1. Install the **Live Server** extension
2. Right-click `index.html` → **Open with Live Server**

---

## Project Structure

```
akibamama-ai/
├── index.html     # Application structure and views
├── style.css      # All styling and layout
├── app.js         # All logic — auth, navigation, AI, voting
└── README.md      # This file
```

---

## How M-Pesa Integration Works

In this demo, the M-Pesa transaction feed is simulated with realistic data. In production, the flow is:

```
Member sends KES to Chama paybill
        ↓
Safaricom Daraja C2B API fires a webhook
        ↓
AkibaMama server receives and records the transaction
        ↓
App updates in real time · SMS sent to all members
```

This uses the M-Pesa Daraja C2B API — a real, documented API available to registered Kenyan businesses.

---

## Access for Feature Phone Users

AkibaMama is designed for two types of users. Smartphone users access the full app. Members without smartphones or internet access the core functions — savings balance, loan eligibility, and group voting — via USSD (\*789#) and SMS, powered by Africa's Talking. The same data, the same system, a simpler interface. This ensures no member is excluded based on the phone they own.

---

## Roadmap

- [ ] Live M-Pesa Daraja API integration
- [ ] Backend database — persistent member and transaction records
- [ ] USSD deployment via Africa's Talking
- [ ] SACCO and microfinance credit score partnerships
- [ ] Multi-chama support — one member, multiple groups
- [ ] Swahili language support
- [ ] Group investment coordination tools
- [ ] Offline-first PWA for low-connectivity areas

---

## Built For

**Hackathon:** AI for Women's Financial Empowerment

**Target users:** Women's savings groups (chamas) across Kenya

**The real impact:** Every chama that uses AkibaMama is building a financial record that did not exist before. For millions of women, that record is the difference between being invisible to formal finance and having access to credit, investment, and economic mobility.


