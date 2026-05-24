# 🚀 Open Banking QE Automation Framework

## AI-Driven Self-Healing Playwright Framework for Enterprise Open Banking & Quality Engineering

This repository demonstrates a modern enterprise Quality Engineering approach for Open Banking / Consumer Data Right (CDR) validation using Playwright and scalable automation testing practices.

The framework demonstrates layered enterprise validation including API automation, contract validation, backend reconciliation, accessibility, performance and enterprise reporting.

It aligns to enterprise Open Banking validation layers covering ETL/CDC propagation, ODS reconciliation, aggregation validation, Snowflake consistency, consent lifecycle validation and downstream ADR consistency.

---

# 🏗️ End-to-End Open Banking Architecture

<img width="486" height="322" alt="image" src="https://github.com/user-attachments/assets/60bb6ce5-0f87-4623-9e9f-73a2030fce41" />

---

# 📂 Framework Structure

```text
contracts/
├── cdr/
│   ├── account.schema.json
│   ├── transaction.schema.json
│   ├── consent.schema.json
│   └── openbanking-api.yaml

tests/
├── api/
├── database/
├── performance/
├── accessibility/
├── ui/

test-data/
utils/
screenshots/
```

---
# 🧪 Enterprise Validation Capabilities

### OpenAPI / Contract Validation
- Swagger / OpenAPI governance validation
- API contract and endpoint validation
- Source: `contracts/cdr/openbanking-api.yaml`

### Schema Validation
- AJV JSON schema validation
- Runtime payload and datatype validation
- Contract compliance validation

### API & Business Validation
- Open Banking / CDR API automation
- Consent lifecycle and negative scenario validation
- Business response and assertion validation
- Source: `test-data/accounts.json`

### Backend & Data Validation
- Backend reconciliation and database-to-API validation
- Financial data integrity validation
- ETL/CDC, ODS, aggregation and Snowflake validation concepts

### Accessibility & Performance Validation
- Accessibility validation using axe-core and WCAG patterns
- Performance and SLA validation

### UI Automation & Reporting
- Cross-browser UI automation using Playwright
- Allure and Playwright enterprise reporting
- Jira traceability integration patterns

### Scalable QE Architecture
- Modular reusable framework design
- Externalised test data management
- CI/CD-ready layered QE architecture

## Implemented Using

- Playwright
- JavaScript
- Page Object Model (POM)
  
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
Quality Engineering Lead | Test Architecture & Automation Lead

Enterprise QE | Open Banking | API Testing | Accessibility | Data Validation | Performance Testing
