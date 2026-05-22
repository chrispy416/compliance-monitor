# Compliance Monitor

A web application that evaluates whether actions taken during a process comply with established guidelines, powered by the [facebook/bart-large-mnli](https://huggingface.co/facebook/bart-large-mnli) zero-shot classification model via Hugging Face.

## Tech Stack

- **Client** — React, TypeScript, Vite, Material UI
- **Server** — Node.js, Express, TypeScript
- **AI Model** — Hugging Face Inference API (facebook/bart-large-mnli)

## Prerequisites

- [Node.js](https://nodejs.org/) v20 (see `.nvmrc`)
- A free [Hugging Face](https://huggingface.co/) account with a Read access token

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/chrispy416/compliance-monitor.git
cd compliance-monitor
```

### 2. Use the correct Node version

```bash
nvm use
```

### 3. Install dependencies

Install server and client dependencies separately:

```bash
# Server
cd server
npm install

# Client
cd ../client
npm install
```

### 4. Configure environment variables

Create a `.env` file inside the `server/` directory:

```bash
touch server/.env
```

Add the following to `server/.env`:

```
HF_TOKEN=hf_your_token_here
PORT=3001
```

To get your Hugging Face token:
1. Go to [huggingface.co](https://huggingface.co/) and create a free account
2. Navigate to **Profile → Settings → Access Tokens**
3. Create a new **Read** token and paste it above

## Running the Project

You need two terminals open at the same time.

**Terminal 1 — Start the server:**

```bash
cd server
npm run serve
```

You should see: `Server running on port 3001`

**Terminal 2 — Start the client:**

```bash
cd client
npm run dev
```

You should see: `Local: http://localhost:5173`

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

1. Enter an **action** — what was done (e.g. `Closed ticket #48219 and sent confirmation email`)
2. Enter a **guideline** — the rule to check against (e.g. `All closed tickets must include a confirmation email`)
3. Click **Send**
4. The result will show as **COMPLIES**, **DEVIATES**, or **UNCLEAR** with a confidence score
5. Past analyses are saved in the history panel and persist across page refreshes
6. Click **Edit** on any history item to reload it into the form for re-analysis

## Running Tests

The E2E tests use [Playwright](https://playwright.dev/) and are located in `client/tests/`. Playwright will automatically start both the Vite dev server and the Express server before running the tests — no need to start them manually.

### Install Playwright browsers (first time only)

```bash
cd client
npx playwright install
```

### Run tests headlessly

```bash
cd client
npm run test:e2e
```

### Run tests with the Playwright UI (visual, easier to debug)

```bash
cd client
npm run test:e2e:ui
```

### Run tests in debug mode

```bash
cd client
npm run test:e2e:debug
```

Tests run across Chromium, Firefox, and WebKit by default. After a headless run, an HTML report will open automatically in your browser.

> **Note:** The HuggingFace API can be slow — each test has a 60 second timeout to account for this.
