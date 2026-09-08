# Reflection

**Name:** Nguyen Tran Nhat Minh  
**Course:** MGMT6110 Human-AI Collaboration  
**Problem Set 1:** Rewear

---

## Q1 — Who are your users, and what changes for them?

My users are external users: young professionals living in Singapore who want to buy affordable, good-condition secondhand fashion but do not want to spend a long time browsing. The prototype is designed for one shopper at a time rather than for an internal business team.

Without Rewear, a user would normally open a secondhand fashion marketplace, browse many listings, compare prices, check sizes and product conditions, open several product pages, and then decide which items are worth saving. The problem is not a lack of products. The problem is that the user has to process many irrelevant options before reaching a useful choice.

Rewear changes the order of these steps. The user starts by narrowing the product list using category, size, and budget filters. They then open only the products that are relevant, review the details, and save suitable items to the Saved Bag.

The main step removed is unnecessary browsing. Instead of asking the user to search through a large catalogue first, the screen helps them reduce the choice set before they spend time reviewing individual products. Rewear is therefore not intended to be a complete marketplace. Its main job is to make secondhand product discovery faster and easier.

---

## Q2 — Augmented capacity and constrained capacity

### Augmented capacity

The biggest increase in my capacity was that I could build a working React and TypeScript interface even though I could not have written the full application from scratch myself in the same amount of time.

Before this exercise, I could define the business problem, user, and interface requirements, but I did not have enough front-end coding knowledge to manually build a multi-screen application with filters, product details, and a saved bag. Google AI Studio converted my specification into working code and allowed me to iterate on the product through natural-language instructions.

This changed how I spent my effort. Instead of spending most of the assignment learning React syntax, I spent more time deciding what the product should do, what information the user needed, what features were unnecessary, and whether the generated output still supported the original job-to-be-done.

### Constrained capacity

The main constraint I felt was verification. AI Studio could generate more code and technical decisions than I could comfortably inspect line by line.

I could directly test whether the filters worked, whether a product detail screen opened, and whether the Saved Bag updated. However, I could not confidently explain every part of the generated code or every dependency in the project.

This became especially clear when I reviewed whether the application contained anything outside the front-end-only scope. I added a prompt specifically asking AI Studio to check for unnecessary backend logic, APIs, external services, model calls, or secrets.

The pairing therefore increased my ability to build software, but it also moved the bottleneck from creation to judgment and verification. I could produce a working application faster than I could fully understand everything underneath it.

---

## Q3 — In the loop, on the loop, out of the loop: where was my judgment actually needed?

My judgment was most useful when I decided what the product should not include.

After the initial build, I wrote:

> “Simplify the current Discover screen so it focuses only on the user's main job: finding a suitable secondhand fashion item quickly.”

The first version contained more navigation and more information on the product cards than I thought the user needed. The interface looked complete, but I decided that these elements increased cognitive load without improving the main product-discovery job. My judgment changed the outcome by reducing the scope instead of asking AI to add more features.

There were also moments when I was only nominally in the loop. When AI Studio generated the initial code structure and technical implementation, I accepted many choices because I could judge the visible result but could not evaluate every technical decision. Being able to approve an output did not mean I fully understood it.

If Rewear became a real product, I would place simple filtering out of the loop. Filtering by category, size, and budget is reversible, low-stakes, easy to check, and likely to happen at high volume. A user can immediately see whether the results are wrong and reset the filters. Before signing this off, I would require all predefined filter test cases to pass and monitor empty-result and mismatch rates.

However, I would keep a human in the loop for final product-condition grading. If an item is labelled “Excellent” when it has visible defects, the customer bears the error and trust in the platform can be damaged. Even if AI image analysis were introduced later, I would keep human approval for the final grade until the system had demonstrated consistently reliable performance.

---

## Q4 — What did it build that I never sketched?

The most important difference between my original plan and the first generated version was the amount of navigation and information added to the Discover screen.

My initial goal was simple: help a user filter secondhand fashion by category, size, and budget, open a relevant product, and save it to the Saved Bag. I did not sketch additional navigation options or specify that each product card should contain a large amount of information.

However, the first version generated by AI Studio made several of these decisions for me. The product cards contained more information than I expected, and the screen included navigation elements that were not necessary for the user's main job. I had not realised that information density and navigation structure were decisions I needed to specify. Because I left them open, the model used its own defaults.

I noticed this during my first review of the generated interface, before deployment. The interface looked polished, but when I compared it with my original Goal, I realised that some elements made the screen busier without helping the user find a suitable item faster.

This led to my next prompt:

> “Simplify the current Discover screen so it focuses only on the user's main job: finding a suitable secondhand fashion item quickly.”

The model was not necessarily wrong to add these elements. It was filling gaps in my specification. The problem was that I had not consciously decided whether those elements should exist.

If I repeated the build, I would make my first specification more explicit. Before generating the interface, I would list both the required elements and the elements that should not appear, and then compare the first output against that list immediately. This would help me distinguish between decisions I intentionally made and defaults the AI introduced for me.

---

## Q5 — Learning pointers for the organisational context

My Rewear build was small, but it showed how quickly AI can move decisions from a human specification into generated software. At organisational scale, this could happen across many applications at the same time.

1. **Require every AI-built application to keep an auditable prompt and change log, because my `PROMPTS.md` made it possible to trace why Rewear changed from a broader first version to a more focused product-discovery flow.**

2. **Define an approved technical scope and require a dependency review before deployment, because my build required an explicit check for backend logic, APIs, external services, model calls, and secrets that were outside the assignment scope.**

3. **Assign a named human owner to every AI-generated application, because Rewear showed me that creating code can happen much faster than fully understanding, verifying, and maintaining everything the AI produces.**
