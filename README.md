# Rewear — Secondhand Fashion Discovery

**Student:** Minh Nguyen
**Course:** MGMT 6110 Human-AI Collaboration, SMU
**Assignment:** Individual Problem Set 1
**Built with:** Google AI Studio (specify → judge → iterate → ship)

**Live app:** https://mgmt6110-problem-set-1-rewear.vercel.app/
**Repository:** https://github.com/minhnguyen-mbai/mgmt6110-problem-set-1-rewear

---

## The user sentence

> A **young professional in Singapore, shopping on their phone in the evening**, opens Rewear to **find one secondhand fashion item that matches their size, category and budget**, and knows it worked when **the item sits in their Saved Bag and the bag shows the item count and total saved value**.

## Which kind of user

**Kind A — an external user the product earns from.** Rewear's user is a shopper who chooses this product and can leave for any other marketplace at any time. They are not given this tool by an employer, so the design question is whether a stranger, on a phone, with no training and no patience, can get from "I need a work shirt under $40" to a saved item in one sitting.

Value would be measured in the conversion from browse to save, and in what the shopper stopped doing elsewhere — specifically, the scrolling through a large undifferentiated catalogue that they do today on general resale marketplaces.

## The one job, and the three screens

The whole product serves a single job: **reduce the choice set before the user spends attention on individual products.** The problem is not a shortage of listings; it is that the user must process many irrelevant options before reaching a useful one.

| Screen | What it shows | What the user does | Knows it worked when |
|---|---|---|---|
| **Discover** | Product cards with brand, name, size, condition, current price and reference retail price | Filters by category, size and budget; the grid updates without a page reload | The visible list is short enough to read |
| **Product Detail** | Full item detail, description and quality-check information | Reviews the item and taps *Save to My Bag* | A confirmation appears |
| **Saved Bag** | Every saved item, the item count and the total saved value | Reviews what they kept | The bag reads e.g. "2 items saved" with a total |

Three screens is the ceiling for this problem set, and Rewear uses all three because the job genuinely spans discover → evaluate → keep.

## Data

**Every name, price, brand and date in this app is invented.** All of it lives in one local data file in `src/`. There is no real company name, logo, trademark or product listing anywhere in the app, and nothing confidential from any employer, client or classmate.

## Scope — what this app deliberately does not do

Front end only, running entirely on local invented data:

- No back end, no database, no server-side logic
- **No calls to Gemini or any other model**, at build time or at runtime
- No calls to any outside service, no fetching from any URL
- No login, no user accounts, no checkout, no payment
- No analytics
- No API keys and no environment secrets — `.env.example` exists only to record that none are required

The Gemini client and the `GEMINI_API_KEY` handling that Google AI Studio scaffolds by default are not present in this repository. `package.json` has no `@google/genai` dependency and `vite.config.ts` reads no key. This was a stated guardrail from the first prompt, not a fix applied afterwards — see Prompt 5 in `PROMPTS.md`.

## Running it locally

```bash
npm install
npm run dev      # serves on port 3000
npm run build    # production build
```

React 19 + TypeScript + Vite, styled with Tailwind. No environment variables are needed.

## The rest of the submission

- **[`PROMPTS.md`](./PROMPTS.md)** — every prompt sent to Google AI Studio, in order, each with what came back and what changed next and why.
- **[`REFLECTION.md`](./REFLECTION.md)** — the five reflection questions answered about this build.
