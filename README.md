# alamyerGYR - Institut für Nachhilfe

A multilingual website for alamyerGYR tutoring institute, built with pure HTML, CSS, and JavaScript.

## 🌐 Languages Supported

- **German (Deutsch)** - Main language
- **English**
- **Arabic (العربية)** - with RTL support

## 📄 Pages

1. **Home Page** (`index.html`)
   - Welcome section
   - Three subject cards (Mathematics, German, Physics)
   - Google Maps location with embedded map

2. **Contact Page** (`contact.html`)
   - Contact form with Formspree integration
   - Form fields:
     - Name (Nachname)
     - First Name (Vorname)
     - Email
     - Date
     - Class (Klasse)
     - Subject (Fach)
     - Message

## 🚀 Setup Instructions

### Step 1: Files Structure
All website files are in the `/public` folder:
```
/public/
  ├── index.html      (Home page)
  ├── contact.html    (Contact page)
  ├── styles.css      (All styles)
  ├── script.js       (JavaScript for translations & form)
  └── README.md       (This file)
```

### Step 2: Formspree Setup

To activate the contact form:

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form ID (it looks like `xyzabc123`)
5. Open `contact.html`
6. Find line 72: `<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`
7. Replace `YOUR_FORM_ID` with your actual Formspree form ID

Example:
```html
<form id="contactForm" action="https://formspree.io/f/xyzabc123" method="POST">
```

### Step 3: Update Map Location

To change the Google Maps location:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your institute's address
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the iframe in both `index.html` (around line 108)

### Step 4: Deploy

You can deploy these files to any web hosting service:

**Option 1: GitHub Pages**
1. Create a GitHub repository
2. Upload all files from `/public` folder
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://username.github.io/repository-name`

**Option 2: Netlify (Recommended)**
1. Go to [https://netlify.com](https://netlify.com)
2. Drag and drop the `/public` folder
3. Your site will be live instantly with a custom URL

**Option 3: Any Web Host**
- Upload all files from `/public` folder via FTP
- Make sure `index.html` is in the root directory

## 🎨 Customization

### Change Colors

Edit the CSS variables in `styles.css` (lines 11-22):

```css
:root {
    --color-primary: #2563eb;        /* Main blue color */
    --color-primary-dark: #1d4ed8;   /* Darker blue for hover */
    --color-text: #1f2937;           /* Text color */
    /* ... more variables ... */
}
```

### Add More Languages

1. Open `script.js`
2. Find the `translations` object (starting line 2)
3. Add a new language following the existing pattern:

```javascript
const translations = {
    de: { /* German translations */ },
    en: { /* English translations */ },
    ar: { /* Arabic translations */ },
    fr: { /* Add French translations here */ },
};
```

4. Add language button in both HTML files:

```html
<button class="lang-btn" data-lang="fr">🇫🇷 Français</button>
```

### Modify Content

All text content is in the `translations` object in `script.js`. Update the translations to change any text on the website.

## ✨ Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Language switcher with browser storage (remembers selection)
- ✅ RTL support for Arabic language
- ✅ Contact form with Formspree integration
- ✅ Google Maps integration
- ✅ Clean, modern design
- ✅ No build process required - pure HTML/CSS/JS
- ✅ Fast loading and performance

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development

To test locally:

1. Open `index.html` directly in your browser, OR
2. Use a local server (recommended):
   - Python: `python -m http.server 8000`
   - Node.js: `npx serve`
   - VS Code: Use "Live Server" extension

Then visit `http://localhost:8000` in your browser.

## 📝 License

Free to use and modify for the alamyerGYR institute.

## 🆘 Support

For issues or questions:
1. Check that Formspree form ID is correctly configured
2. Verify all files are uploaded to the web server
3. Check browser console for any JavaScript errors
4. Ensure internet connection for Google Maps to load

---

**Made with ❤️ for alamyerGYR Institute**
