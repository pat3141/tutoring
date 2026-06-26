# Pat S. Pathak — Tutoring Website

Personal tutoring website for Pat S. Pathak, Mathematics Tutor, Canberra ACT.

## File structure

```
pat-website/
├── index.html          ← Main page
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Contact form logic
├── images/
│   └── profile.jpg     ← Profile photo
└── README.md
```

## Deploy to GitHub Pages

1. Create a GitHub repo named `your-username.github.io`
2. Upload all files and folders (keeping the same structure)
3. Go to Settings → Pages → Source: `main` branch, `/ (root)`
4. Site goes live at `https://your-username.github.io`

## Connect the contact form (required)

1. Sign up at [formspree.io](https://formspree.io) (free)
2. Create a form → set email to `patpathak3141@gmail.com`
3. Copy your form ID (e.g. `xAbCdEfG`)
4. In `js/main.js`, replace `patpathak3141` in the fetch URL with your form ID:
   ```
   https://formspree.io/f/xAbCdEfG
   ```

## Connect Stripe payment link

In `index.html`, search for `YOUR_STRIPE_PAYMENT_LINK_HERE` and replace with your Stripe link.

## Custom domain (optional)

Add a `CNAME` file to the repo containing just your domain, e.g.:
```
patpathak.com.au
```
Then point your domain's DNS to GitHub Pages.
