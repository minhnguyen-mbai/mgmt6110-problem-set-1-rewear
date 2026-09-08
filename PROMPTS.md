# Rewear

Created by Nguyen Tran Nhat Minh
MGMT6110 Human-AI Collaboration
Problem Set 1

# Prompt Log

This file records the prompts I used while building Rewear in Google AI Studio.

The purpose of this log is to document how I specified the product, judged the AI-generated output, iterated on the interface, and prepared the final front-end for deployment.

---

## Prompt 1 — Initial RGOGC Build

### Prompt

## ROLE

You are a senior product designer and front-end engineer specializing in simple, mobile-first ecommerce experiences.

## GOAL

Build a minimalist secondhand fashion discovery website called **Rewear**.

The target user is a young professional living in Singapore who wants to find affordable, good-condition pre-loved fashion without spending too much time browsing.

The core job is:

**Help the user quickly find a secondhand fashion item that matches their size, category, and budget.**

The task is successful when the user can find a suitable item, open its details, and save it to their bag.

## OUTPUT

Build a responsive React and TypeScript front end with a maximum of **three screens**:

1. **Discover**
2. **Product Detail**
3. **Saved Bag**

### Discover screen

Include:

- A simple header and search area
- Filters for:
  - Category
  - Size
  - Budget
- At least 10 fictional product cards
- Each product card should show:
  - Fictional brand name
  - Product name
  - Size
  - Condition
  - Current price
  - Reference retail price
- Clicking a product should open the Product Detail screen

### Product Detail screen

Show:

- Product name
- Fictional brand
- Size
- Condition
- Price
- Reference retail price
- Short description
- Simple quality-check information
- CTA: **Save to My Bag**

### Saved Bag screen

Show:

- All saved products
- Total saved value
- A clear success state such as:
  **“2 items saved”**

Use invented data only and keep all product data in one separate local data file.

## GUARDRAILS

Do not use any real company name, logo, trademark, or real product listing.

Do not copy REFASH exactly. Use it only as general inspiration for a clean secondhand-fashion ecommerce experience.

Do not build:

- login
- user accounts
- checkout
- payment
- database
- backend
- APIs
- live data
- external services
- social feed
- reviews
- loyalty program
- merchant dashboard

Do not create more than three screens.

Do not add features that are not necessary for the core job.

The interface should work entirely with invented local data.

Prioritize:

1. simplicity
2. mobile usability
3. clear product discovery
4. easy filtering
5. clear visual hierarchy

## CONTEXT

Rewear is a fictional secondhand fashion platform for young professionals in Singapore.

The user likes affordable and sustainable fashion but does not want to browse hundreds of listings.

The main problem is decision fatigue and inefficient product discovery.

The product should help the user quickly narrow down products based on:

- category
- size
- budget

The design can take inspiration from modern secondhand-fashion ecommerce websites, but the brand identity, products, copy, and data must be original.

Build the first version only. Do not add extra features unless they are necessary to complete the core user job.

### What came back

AI Studio generated the first version of the Rewear front end with a product discovery page, product detail view, saved bag, and fictional product data.

### What I changed next and why

The first version gave me a useful starting point, but I wanted to make sure the product remained focused on one user and one main job. My next step was to remove unnecessary navigation and reduce information that did not directly help the user discover a suitable product.

---

## Prompt 2 — Simplify the Discover Screen

### Prompt

Simplify the current Discover screen so it focuses only on the user's main job: finding a suitable secondhand fashion item quickly.

Remove any navigation, labels, or sections that do not directly support product discovery.

Keep the existing three-screen structure.

On each product card, show only:

- product image
- fictional brand
- product name
- size
- condition
- current price
- reference retail price

Do not add any new features.

Keep the visual design clean, modern, and mobile-friendly.

### What came back

AI Studio simplified the product discovery page and reduced the amount of information displayed on each product card.

### What I changed next and why

The interface became easier to scan, but the product discovery experience still depended on the filters working correctly. My next step was to make category, size, and budget filtering functional using only the local fictional dataset.

---

## Prompt 3 — Make Filters Functional

### Prompt

Make the existing category, size, and budget filters functional using only the local fictional product data.

Requirements:

- Selecting a category should immediately update the visible product cards.
- Selecting a size should immediately update the visible product cards.
- Selecting a budget range should immediately update the visible product cards.
- Multiple filters should work together.
- Add a clear **Reset Filters** action.
- The page must update without reloading.

Do not use:

- backend
- database
- API
- external service
- live data

Keep all filtering logic in the front end.

### What came back

The filters became interactive and the displayed products updated according to the selected criteria.

### What I changed next and why

The discovery flow was now functional, so I moved to the next part of the user journey. I wanted the user to be able to save an item and see the saved state reflected immediately in the Saved Bag screen.

---

## Prompt 4 — Make Saved Bag Interaction Work

### Prompt

Make the **Save to My Bag** interaction functional using front-end state only.

Requirements:

- When the user clicks **Save to My Bag** on the Product Detail screen, add that product to the Saved Bag.
- The Saved Bag screen should update immediately.
- Show the number of saved items.
- Show the total value of saved items.
- Prevent the same product from being added twice.
- Show a short confirmation message after an item is saved.
- Keep the interaction within the existing three-screen structure.

Do not use:

- localStorage
- database
- backend
- API
- user account
- external service

### What came back

AI Studio made the saved bag interactive. Saved items were reflected in the bag, and the interface showed the saved item count and total value.

### What I changed next and why

The main user flow now worked from discovery to saving an item. My next step was to inspect the codebase for unnecessary services, backend logic, API calls, or hidden dependencies that were outside the assignment scope.

---

## Prompt 5 — Remove Unnecessary Backend or API Dependencies

### Prompt

Review the current project and remove any unnecessary backend, server-side logic, API calls, external services, Gemini calls, model calls, or secrets.

The assignment requires a front-end-only application using invented local data.

Requirements:

- The app must work entirely with local mock data.
- Do not use Gemini or any other model at runtime.
- Do not use external APIs.
- Do not use a database.
- Do not require API keys or environment secrets.
- Remove any unnecessary server-side files or dependencies that are not required for the front end.
- Keep the current user interface and interactions working.

Do not add new features.

### What came back

AI Studio reviewed the project and removed or avoided unnecessary runtime dependencies so that the application could operate using only local fictional data.

### What I changed next and why

This step helped me confirm that the visible product experience did not depend on hidden services. My next step was to improve the interface specifically for mobile use, because the assignment requires a front end that can be opened and used on a phone.

---

## Prompt 6 — Improve Mobile Usability

### Prompt

Review the existing Rewear interface specifically for mobile use.

Optimize the current three-screen interface for a phone width of approximately 390 pixels.

Check and improve:

- spacing
- text size
- product card layout
- filter controls
- tap target size
- navigation between screens
- product image proportions
- button visibility
- saved bag layout

Make sure the interface can be used comfortably with one hand.

Do not redesign the product concept.

Do not add new screens or features.

Keep all existing functionality.

### What came back

AI Studio adjusted the mobile layout and improved the readability and usability of the interface on a smaller screen.

### What I changed next and why

The interface was now closer to the final version, but I wanted to verify that the user could complete the full flow without confusion. My next step was a final quality check focused on the core user journey rather than adding anything new.

---

## Prompt 7 — Final User Flow QA

### Prompt

Perform a final review of the existing Rewear front end.

Do not add new features.

Check whether the following user journey works clearly from start to finish:

1. The user opens the Discover screen.
2. The user filters products by category, size, and budget.
3. The user opens one product.
4. The user reviews the product details.
5. The user saves the product to their bag.
6. The Saved Bag updates correctly.
7. The user can clearly see that the task was completed.

Fix only issues that prevent this flow from working smoothly.

Also check:

- no page reload is required between screens
- no broken buttons
- no duplicate saved items
- no unnecessary navigation
- no live data
- no external services
- no backend dependency
- no API keys or secrets

Keep the product simple and mobile-friendly.

### What came back

AI Studio completed the final interface adjustments and confirmed the main product flow from discovery to saving an item.

### What I changed next and why

After the final QA, I stopped adding features because the assignment focuses on a clear user, a working front end, and the process of specifying, judging, and iterating with AI. I then prepared the codebase for GitHub and deployment to Vercel.

---

## Prompt 8 — Final Codebase Preparation

### Prompt

Prepare the current Rewear project for final submission and deployment.

Do not change the product design or add new features.

Check that:

- the project builds successfully
- the React and TypeScript front end is complete
- product data remains in a separate local data file
- there are no unused API integrations
- there are no API keys or secrets
- there is no database or backend dependency
- there are no references to real company names, logos, trademarks, or real product listings
- the app is ready to be pushed to GitHub and deployed on Vercel

Keep all existing front-end interactions working.

### What came back

AI Studio prepared the project for deployment and kept the application within the required front-end-only scope.

### What I changed next and why

I moved from building to shipping. I pushed the final codebase and documentation to my GitHub repository, deployed the application on Vercel, and tested the live URL on a mobile device.

---

# Final Notes

The main build process followed this sequence:

1. Define the user and the main job
2. Create the first version using an RGOGC master prompt
3. Judge the generated interface
4. Simplify the scope
5. Make the filters functional
6. Make the Saved Bag functional
7. Remove unnecessary hidden complexity
8. Optimize for mobile
9. Perform final QA
10. Ship through GitHub and Vercel

The most important part of the process was not the number of prompts used, but the judgment between prompts: what the AI generated, what I accepted, what I rejected, and why I changed the next instruction.
