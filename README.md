Usage in Components
-------------------

### Navbar

-   Background: `bg-brand-black`

-   Brand name "Yukti": `text-brand-gold font-bold`

-   Dropdown links: `text-brand-gray hover:text-brand-gold`

-   CTA buttons:

    -   **Contact Sales** → `bg-brand-gold text-brand-black hover:bg-yellow-400`

    -   **Request Demo** → `bg-brand-crimson text-white hover:bg-red-600`

### Hero Section

-   Background: `bg-brand-purple`

-   Headline: `text-brand-gold`

-   Sub-headline: `text-brand-gray`

### Service Tiles

-   Card background: `bg-brand-black`

-   Title: `text-brand-gold`

-   Description: `text-brand-gray`

-   Hover effect: `hover:border-brand-gold`

### Why Choose Us

-   Icons in `text-brand-gold`

-   Text in `text-brand-gray`

### Footer

-   Background: `bg-brand-black`

-   Headings: `text-brand-gold`

-   Links: `text-brand-gray hover:text-brand-gold`

-   Newsletter button: `bg-brand-gold text-brand-black hover:bg-yellow-400`


What the project includes
=========================

(You can see the full source in the canvas)

-   Vite + React app configured to run with `npm start`

-   TailwindCSS configured

-   React Router with routes for:

    -   `/` --- Home (hero, service tiles, why choose us, CTA)

    -   `/insightedge` --- InsightEdge service page

    -   `/playsure` --- PlaySure service page

    -   `/partnercare` --- PartnerCare service page

-   Navbar (brand left, Solutions dropdown next to brand, CTA buttons on the right)

-   Footer with newsletter subscription demo

-   Buttons and links are ready to wire to real endpoints (mail, forms, CRM)

Tips & small customizations
===========================

-   To make **Contact Sales** send an email, change the button to an anchor: `href="mailto:sales@yukti.com?subject=Contact%20Sales"`.

-   To connect newsletter to Mailchimp / SendGrid, replace the `handleSubscribe` demo alert in `src/components/Footer.jsx` with an API call to your backend.

-   To change brand name or copy, edit the `Yukti` text in `src/components/Navbar.jsx` and page copy in the `src/pages/*` files.