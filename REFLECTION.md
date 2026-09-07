# Reflection

## Q1 — Who are your users, and what changes for them?

My primary users are external users: young professionals living in Singapore who want to buy affordable, good-condition secondhand fashion but do not want to spend a long time browsing. For this prototype, I focused on one primary user segment rather than trying to serve many different types of shoppers.

Without Rewear, the user would normally open a secondhand fashion marketplace, browse many listings, compare prices, check sizes and conditions, open several product pages, and then decide which items are worth saving. The main problem is not that products are unavailable. The problem is that the user has to process too many options before reaching a decision.

My product changes this sequence. The Discover screen lets the user narrow the product list immediately by category, size, and budget. Instead of browsing many unrelated items first, the user starts by defining what is relevant. They can then open a product detail screen and save a suitable item to the Saved Bag.

The main step removed is unnecessary browsing. The product does not try to become a complete fashion marketplace. Its job is narrower: help the user move from a large product list to a small set of relevant items more quickly.

---

## Q2 — Augmented capacity and constrained capacity

### Augmented capacity

The biggest increase in my capacity was that I could build a working React and TypeScript interface without being able to write the full application manually myself.

Before this exercise, I understood the business problem and could describe what the interface should do, but building the actual front end would have required much more time and technical knowledge. With Google AI Studio, I was able to turn my product idea into a working interface with multiple screens, filters, product details, and a saved bag.

This changed where I spent my time. Instead of spending most of the exercise learning React syntax, I spent more time deciding who the user was, what information should appear on the screen, what features were unnecessary, and whether the generated product still matched the original goal.

### Constrained capacity

The main constraint I felt was that the AI could generate more code than I could personally inspect in detail. I could test whether the filters worked and whether the Saved Bag updated correctly, but I could not confidently explain every line of the generated code.

This became visible when I reviewed the project structure and started checking whether the application contained unnecessary backend or external-service dependencies. My prompt asked AI Studio to remove anything outside the front-end-only scope because I could judge the visible user experience more easily than the underlying generated architecture.

This means the pairing increased my ability to build, but it also created a new bottleneck: verification. I could produce software faster than I could fully understand it.

---

## Q3 — In the loop, on the loop, out of the loop

My judgment mattered most when I decided what the product should not become.

For example, one of my prompts said:

> “Simplify the current Discover screen so it focuses only on the user's main job: finding a suitable secondhand fashion item quickly.”

I used this prompt because the first version **[CHECK: contained too many navigation options / contained unnecessary information / describe what actually happened]**. The AI could generate a polished interface, but I had to decide whether those elements helped the user's job. My judgment changed the outcome by reducing the scope rather than asking the AI to add more features.

There were also moments when I was only nominally in the loop. For example, when AI Studio generated the initial code structure, I accepted many technical choices because I could not evaluate each one. I was approving the result mainly through the visible interface, not through full technical understanding.

If Rewear became a real product, I would place simple product filtering out of the loop. Filtering by size, category, and budget is highly reversible, low-stakes, easy to check, and could happen thousands of times per day. Before approving this, I would measure filter accuracy, empty-result rates, and whether users could easily reset or correct their selection.

However, I would keep a human in the loop for product condition verification. If a product is labelled “Excellent” but has defects, the customer bears the cost of the error and trust is damaged. Even if automated image analysis were used in the future, I would still require human approval for the final condition grade until the system demonstrated very high and stable accuracy.

---

## Q4 — What did it build that you never sketched?

The most important gap was that AI Studio could create technical infrastructure beyond the visible front end I originally imagined.

My original specification focused on three screens: Discover, Product Detail, and Saved Bag. I was thinking mainly about what the user would see. During **[CHECK: the build / deployment / my later review]**, I realised that AI Studio was capable of generating more application infrastructure than I had explicitly designed.

This mattered because my assignment required no backend, API keys, live services, or external model calls. I therefore added a specific prompt asking AI Studio to review the project and remove unnecessary server-side logic, APIs, external services, model calls, or secrets.

I also realised that the model made smaller product decisions that I had not fully specified, such as spacing, ordering of products, empty states, mobile layouts, and how confirmation messages should appear. These looked like design details, but they were still product decisions.

The main lesson for me is that specifying the visible screen is not enough. Next time, I would review both the interface and the generated project structure immediately after the first build. I would create a checklist for infrastructure, dependencies, states, and edge cases before I started improving the visual design.

---

## Q5 — Learning pointers for the organisational context

My small build showed me that AI can make software creation much faster, but it also moves important decisions into places that may not be obvious to the person writing the prompt.

1. **Require every AI-built application to keep an auditable prompt and change log, because my PROMPTS.md helped me reconstruct why the Rewear interface changed between versions.**

2. **Define an approved technical scope before employees begin building, because my front-end exercise required an additional check to make sure unnecessary backend services, APIs, or secrets were not included.**

3. **Require a named human owner for every AI-generated application, because my build showed that generating code is much faster than fully understanding and maintaining everything the AI creates.**
