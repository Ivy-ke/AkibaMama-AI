# AkibaMama — Chama Financial Intelligence

> Turning informal savings into formal financial identity.

AkibaMama is an AI-powered financial management system built for Kenya's women savings groups (chamas). It replaces notebooks and WhatsApp with a structured, transparent, and intelligent platform that works on smartphones and feature phones alike.

---

## The Problem

Over 300,000 chamas operate across Kenya, collectively managing billions of shillings — mostly recorded in notebooks. The three biggest pain points:

- **Poor record keeping** — lost notebooks, disputed figures, treasurer errors
- **No financial insight** — women save consistently but have no guidance on growing that money
- **No financial identity** — years of disciplined saving are invisible to banks and formal lenders

---

## The Solution

AkibaMama provides three core capabilities:

**1. Financial Tracking**
Every M-Pesa contribution is automatically recorded when sent to the chama paybill. No manual entry. No disputes. Every member sees the same data in real time.

**2. AI Financial Intelligence**
The built-in Akiba AI Advisor gives members plain-language financial guidance — investment options, loan advice, savings forecasts — in the context of their actual chama data.

**3. Community Credit Score**
AkibaMama builds a financial reputation score from contribution history. A woman who has contributed consistently for 3 years has proven creditworthiness. AkibaMama makes that history visible — creating a pathway to formal bank credit.

---

## Features

### For Members
- Personal savings dashboard with contribution history
- Loan eligibility calculator based on chama rules
- Group savings view (privacy-protected — individual amounts hidden)
- AI financial advisor with Kenya-specific investment guidance
- Transparency voting — every group transaction requires member approval

### For Treasurers
- Full group dashboard — total savings, loans out, pending requests
- M-Pesa live feed — contributions auto-recorded from paybill
- Configurable loan rules (multiple, interest rate, repayment period, guarantors)
- Member management with SMS invitation
- Loan request approval with AI risk assessment

### Access
- **Smartphone app** — full dashboard experience
- **USSD (*789#)** — works on any feature phone, no internet required
- **SMS notifications** — contribution confirmations, vote alerts, reminders

---

## Technology Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript (single-file, no framework) |
| AI Advisor | Claude API (Anthropic claude-sonnet-4) |
| Payments | M-Pesa Paybill (Safaricom Daraja API) |
| USSD Gateway | Africa's Talking |
| SMS | Africa's Talking SMS API |
| Hosting | GitHub Pages (static) / any web server |

---

## Demo

**Live demo:** [https://YOUR-USERNAME.github.io/akibamama-ai/akibamama.html](https://YOUR-USERNAME.github.io/akibamama-ai/akibamama.html)

### Demo Login Credentials

| Role | Phone | Password |
|---|---|---|
| Member | 0700123456 | `Akiba@2025!` |
| Treasurer | 0711234567 | `Chama#9Tr3s!` |

Or use the **Quick Demo Login** cards on the login screen to jump straight in.

### What to explore

1. **Sign in as Member** → see personal savings, limited group view, credit score
2. **Switch to Treasurer** → see full dashboard, M-Pesa feed, pending loan requests
3. **Go to Vote tab** → cast a vote on a pending transaction, watch live tally
4. **Go to Loans tab** → apply for a loan, see live repayment calculator
5. **Open AI Advisor** → tap a topic chip or ask a financial question

---

## Running Locally

No build process required. Open the file directly:

```bash
git clone https://github.com/YOUR-USERNAME/akibamama-ai.git
cd akibamama-ai
open akibamama.html
```

Or with VS Code Live Server:
1. Install the **Live Server** extension in VS Code
2. Right-click `akibamama.html` → **Open with Live Server**

---

## Project Structure

```
akibamama-ai/
├── akibamama.html     # Complete application (single file)
└── README.md          # This file
```

The entire application is contained in a single HTML file — intentional for the hackathon prototype. Production architecture would separate concerns into a proper backend, database, and frontend build.

---

## Security & Privacy Design

AkibaMama was built with governance as a core principle, not an afterthought:

- Individual savings amounts are **never visible** to other members — including the treasurer
- Individual loan amounts are visible to members (group accountability) but not savings
- Every withdrawal or large transaction **requires a group vote** to proceed
- Role-based access: members cannot edit records, approve loans, or change rules
- Strong password requirements enforced at signup (uppercase, lowercase, number, special character, no common words)

---

## The Credit Score

The AkibaMama Credit Score (0–100) is calculated from:

- Percentage of months with on-time contributions
- Contribution consistency (amount variance)
- Loan repayment history
- Length of membership

This score creates a formal financial record for women with no credit history with the banks — connecting informal chama savings to the formal financial system.

---

## Roadmap (Post-Hackathon)

- [ ] Live M-Pesa Daraja API integration
- [ ] Real USSD deployment via Africa's Talking
- [ ] Backend database (member records, transaction history)
- [ ] SACCO and microfinance institution credit score partnerships
- [ ] Multi-chama support (one member, multiple groups)
- [ ] Swahili language support
- [ ] Group farming and investment coordination tools

---

## Built For

**Hackathon:** AI for Women's Financial Empowerment

**Target users:** Rural and peri-urban women's savings groups in Kenya

**Core insight:** The real product is not the app. It is the financial identity that the app builds — the credit score that opens a bank door that was previously closed.

---

## Team

Built with purpose for the women of Kenya's chama ecosystem.

---

