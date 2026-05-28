# 🚀 Open Banking QE Automation Framework

## AI-Driven Self-Healing Playwright Framework for Enterprise Open Banking & Quality Engineering

This repository demonstrates a modern enterprise Quality Engineering approach for Open Banking / Consumer Data Right (CDR) validation using Playwright and scalable automation testing practices.

The framework demonstrates layered enterprise validation including API automation, contract validation, backend reconciliation, accessibility, performance and enterprise reporting.

It aligns to enterprise Open Banking validation layers covering ETL/CDC propagation, ODS reconciliation, aggregation validation, Snowflake consistency, consent lifecycle validation and downstream ADR consistency.

---

# 🏗️ End-to-End Open Banking / CDR Architecture

The framework aligns to a representative enterprise Open Banking / Consumer Data Right (CDR) ecosystem where customer banking data securely flows across operational, aggregation, warehouse and API layers before being exposed to downstream ADR applications.

```text
┌──────────────────────────────┐
│ Customer                     │
│ Provides Consent             │
└──────────────┬───────────────┘
               │ → Authorises secure banking data sharing
               ▼

┌──────────────────────────────┐
│ ADR Application              │
│ Lending / Fintech App        │
└──────────────┬───────────────┘
               │ → Requests customer banking data
               ▼

┌──────────────────────────────┐
│ OAuth 2.0 / FAPI             │
│ Authentication & Security    │
└──────────────┬───────────────┘
               │ → Secures API authentication
               ▼

┌──────────────────────────────┐
│ API Gateway                  │
│ Consent / Access / Throttle  │
└──────────────┬───────────────┘
               │ → Validates consent and API security
               ▼

┌──────────────────────────────┐
│ CDR APIs                     │
│ Accounts / Transactions API  │
└──────────────┬───────────────┘
               │ → Exposes Open Banking APIs
               ▼

┌──────────────────────────────┐
│ Core Banking Systems         │
│ Accounts / Payments / Cards  │
│ Transactions / Customer Data │
└──────────────┬───────────────┘
               │ → Source banking systems
               ▼

┌──────────────────────────────┐
│ ETL / CDC Pipelines          │
│ Extract / Transform / Load   │
└──────────────┬───────────────┘
               │ → Propagates banking data downstream
               ▼

┌──────────────────────────────┐
│ ODS                          │
│ Operational Data Store       │
└──────────────┬───────────────┘
               │ → Near real-time operational data
               ▼

┌──────────────────────────────┐
│ DAF / Aggregation Layer      │
│ Transformation & Aggregation │
└──────────────┬───────────────┘
               │ → Aggregates and transforms banking data
               ▼

┌──────────────────────────────┐
│ Snowflake / Enterprise DWH   │
│ Curated Enterprise Data      │
└──────────────┬───────────────┘
               │ → Curated warehouse data exposed through APIs
               ▼

┌──────────────────────────────┐
│ CDR APIs                     │
│ API Response Layer           │
└──────────────┬───────────────┘
               │ → Returns validated banking data to ADR
               ▼

┌──────────────────────────────┐
│ ADR Application              │
│ Receives API Response        │
└──────────────┬───────────────┘
               │ → Displays banking insights to customer
               ▼

┌──────────────────────────────┐
│ Customer                     │
│ Views Shared Banking Data    │
└──────────────────────────────┘
```

The framework validates enterprise Open Banking flows across consent management, OAuth/FAPI security, OpenAPI contracts, schema validation, backend reconciliation, ETL/CDC propagation, ODS/DAF/Snowflake consistency and downstream ADR/API validation.

---

# 🧪 Enterprise Validation Capabilities

| Layer | Validation Performed |
|---|---|
| Consent Layer | Consent lifecycle and access validation |
| OAuth/FAPI Layer | Authentication and security validation |
| OpenAPI Layer | Contract and governance validation |
| Schema Layer | Runtime payload and datatype validation |
| API Layer | Accounts, transactions and business response validation |
| CDC / ETL Layer | Downstream propagation validation |
| ODS Layer | Source-to-target reconciliation validation |
| DAF Layer | Aggregation and transformation validation |
| Snowflake Layer | Warehouse consistency validation |
| ADR Layer | Downstream customer-visible validation |

---


# 📂 Framework Structure

```text
Open-Banking-QE-Playwright-Automation-Framework/
│
├── contracts/                                        → API contract and schema validation
│   └── cdr/
│       ├── account.schema.json                       → validates account API response structure and mandatory fields
│       ├── transaction.schema.json                   → validates transaction response schema and data types
│       ├── consent.schema.json                       → validates consent lifecycle and status rules
│       └── openbanking-api.yaml                      → OpenAPI/Swagger contract validation
│
├── tests/                                            → actual automated test suites
│   ├── api/                                          → API status, headers, schema, auth and business rule validation
│   │   ├── accounts.spec.ts                          → validates accounts endpoint response and business rules
│   │   ├── transactions.spec.ts                      → validates transaction API response and reconciliation rules
│   │   └── consent.spec.ts                           → validates consent creation, expiry and revocation flows
│   │
│   ├── database/                                     → SQL/source table reconciliation and backend data validation
│   │   ├── account-reconciliation.sql                → validates API response against source account tables
│   │   └── transaction-reconciliation.sql            → backend transaction reconciliation validation
│   │
│   ├── performance/                                  → k6/JMeter response time, load and SLA validation
│   │   └── openbanking-load.js                       → validates API performance under expected user load
│   │
│   ├── accessibility/                                → axe/Lighthouse WCAG accessibility validation
│   │   └── accessibility.spec.ts                     → validates WCAG 2.1 AA compliance and accessibility rules
│   │
│   └── ui/                                           → Playwright end-to-end customer journey validation
│       ├── login.spec.ts                             → validates secure customer login journey
│       └── consent-flow.spec.ts                      → validates Open Banking consent authorisation flow
│
├── test-data/                                        → controlled mock payloads and reusable test input data
│   ├── mock-users.json                               → reusable customer and consent mock data
│   └── sample-transactions.json                      → reusable transaction validation payloads
│
├── utils/                                            → reusable helpers for API client, DB connection, auth, logging and validation
│   ├── api-client.ts                                 → reusable API request helper
│   ├── db-client.ts                                  → reusable database connection helper
│   ├── auth-helper.ts                                → supports OAuth2/FAPI token and secured header generation
│   ├── schema-validator.ts                           → reusable JSON schema validation utility
│   └── logger.ts                                     → centralised execution and error logging utility
│
├── reports/                                          → consolidated execution and validation reporting
│   ├── allure-report/                                → automation execution and test evidence reports
│   ├── lighthouse-report/                            → accessibility and performance audit reports
│   └── api-validation-report/                        → API schema and contract validation reports
│
├── screenshots/                                      → failure evidence and accessibility/UI execution snapshots
│   ├── ui-failures/                                  → failed Playwright execution screenshots
│   └── accessibility-reports/                        → accessibility scan evidence and reports
│
├── .github/
│   └── workflows/
│       └── ci.yml                                    → GitHub Actions CI/CD pipeline execution
│
├── playwright.config.ts                              → Playwright execution and environment configuration
├── package.json                                      → framework dependencies and execution scripts
├── tsconfig.json                                     → TypeScript compiler configuration
├── README.md                                         → framework overview, setup and execution guide
└── .env                                              → environment variables and secure configuration
```
## Implemented Using

- Playwright
- JavaScript
- Page Object Model (POM)
  
---
# 🧪 Validation coverage

OpenAPI / Contract Validation
- Validates Open Banking API endpoints, request/response contracts, mandatory fields and schema governance compliance

Schema Validation
- Validates runtime API payload structure, datatypes, required attributes and JSON schema compliance using AJV

API & Business Validation
- Validates Open Banking/CDR business flows, consent lifecycle, negative scenarios and API response assertions

Backend & Data Validation
- Validates backend reconciliation, API-to-database consistency, financial data integrity and ETL/ODS/Snowflake concepts

Accessibility & Performance Validation
- Validates WCAG accessibility compliance, response times, SLA thresholds and application performance behaviour

UI Automation & Reporting
- Validates cross-browser customer journeys with Playwright and generates enterprise execution/reporting evidence

Scalable QE Architecture
- Supports modular reusable automation, externalised test data management and CI/CD-ready layered QE design

# Technology Stack

Playwright • TypeScript • Node.js • AJV • OpenAPI/Swagger • REST API Testing • SQL • axe-core • Lighthouse • k6 • JMeter • Allure Reports • Jira Integration • GitHub Actions • CI/CD • OAuth2/FAPI Concepts • Open Banking/CDR Validation

---

# 🤖 AI-Assisted Self-Healing Concepts

The framework demonstrates AI-assisted self-healing and intelligent failure analysis concepts including:

- Resilient locator strategies
- Fallback locator recovery
- Retry and recovery patterns
- AI-assisted failure analysis workflows
- Reduced flaky failure handling

---

# 📸 Demo Screenshots

### ✅ Playwright Report

<img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/f13fdff1-f610-47ba-8e78-6d19a8c22a5b" />


---

### ⚡ Accessibility + Performance Validation

<img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/c938e11e-9f23-40ed-9133-59db69d1d621" />


<img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/446bdfda-680c-4998-a15a-36e33a11b95b" />



---

### 📊 Allure Reporting Dashboard

<img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/972b520a-f2a4-4a42-bd15-51d0802ef072" />


---

### 🤖 AI Failure Analysis

![AI Failure Analysis](screenshots/allure-ai-analysis.png)

---

# ▶️ Demo Video

👉 https://drive.google.com/file/d/1A1DT-3QVswHYtVJ5rDmKKXfzw5PaI7M5/view

---

# ⚙️ How to Run

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

### Run Complete Test Suite

```bash
npx playwright test
```

### Open Playwright Report

```bash
npx playwright show-report
```

### Generate Allure Report

```bash
npx playwright test --reporter=allure-playwright
npx allure serve allure-results
```

---

# ⚠️ Note

This framework is a representative enterprise QE accelerator designed to demonstrate scalable automation, Open Banking validation, backend reconciliation, contract validation, accessibility, reporting and enterprise testing concepts.

---

# 👩‍💻 Author

**Aparna Godse**  
Quality Engineering Lead | Automation Lead

Enterprise QE | Open Banking | API Testing | Accessibility | Data Validation | Performance Testing
