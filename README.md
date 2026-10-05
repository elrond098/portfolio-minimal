# Minimal Portfolio

Static, lightweight portfolio website using only HTML, CSS, JavaScript, and SVG assets.

## Structure

```text
portfolio-minimal/
├── index.html
├── about.html
├── work.html
├── contact.html
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    └── images/
        ├── project-dashboard.svg
        ├── project-notes.svg
        └── project-portfolio.svg
```

## Run

No build tool is required. Open `home.html` directly, or serve the folder with any static web server.

## Customize

1. Replace `S` in the logo with your own logo/initial.
2. Edit the text in each HTML page.
3. Replace the three SVG project previews with screenshots of your actual projects.
4. Change each `https://example.com` project URL.
5. Replace the contact email and social profile links.
6. If you rename pages, update the navigation links in all four HTML files.

The design intentionally uses a small dependency footprint and respects `prefers-reduced-motion`.


## Navigation

The left drawer uses **icons only**. Hovering or focusing an icon reveals a tooltip with its page name:

- ⌂ Home
- ○ About
- ◇ Work
- ↗ Contact

The active page is marked with a small indicator on the right side of its icon.
