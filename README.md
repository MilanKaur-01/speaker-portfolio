# Milan Kaur - Speaker Portfolio

A professional portfolio website showcasing Developer Relations work, AI projects, speaking engagements, and technical blogs.

🌐 **Live Site**: [https://MilanKaur-01.github.io/speaker-portfolio/](https://MilanKaur-01.github.io/speaker-portfolio/)

## 🎯 Overview

This portfolio highlights expertise in:
- **Agentic AI** and multimodal communication
- **Microsoft Teams** extensibility
- **Azure Communication Services**
- **Developer Relations** and community engagement

## 📁 Project Structure

```
speaker-portfolio/
├── index.html          # Main portfolio page
├── styles.css          # All styling and responsive design
├── script.js           # Interactive features and animations
├── images/             # Photo gallery images
│   └── README.md       # Detailed instructions for adding photos
└── README.md           # This file
```

## 🚀 Deployment to GitHub Pages

### Initial Setup (One-time)

1. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select `main` branch
   - Click **Save**
   - Your site will be published at: `https://MilanKaur-01.github.io/speaker-portfolio/`

2. **Wait for Deployment**:
   - GitHub Pages takes 2-5 minutes to build and deploy
   - You'll see a green checkmark when it's ready
   - Visit the URL above to view your live portfolio

### Making Updates

Every time you commit and push changes to the `main` branch, GitHub Pages will automatically rebuild and deploy your site.

```bash
# Make changes to your files
git add .
git commit -m "Update portfolio content"
git push origin main

# Wait 2-5 minutes, then check your live site
```

## 📸 Adding Photos to Your Portfolio

The portfolio includes two types of images:

### 1. Profile Picture (Hero Section)
To add your profile picture that appears at the top of the page:
1. Navigate to the `images/` folder
2. Upload your photo as `profile.jpg` or `profile.png`
   - Recommended size: 400x400px to 800x800px (square)
   - Should be a professional headshot
   - Keep file size under 200KB

### 2. Gallery Photos
To add photos to the gallery section:
1. Navigate to the `images/` folder
2. Read the detailed instructions in `images/README.md`
3. Upload your photos with the recommended filenames:
   - `conference1.jpg`, `conference2.jpg`, `conference3.jpg`
   - `speaking1.jpg`, `speaking2.jpg`
   - `community1.jpg`, `community2.jpg`
   - `workshop1.jpg`, `demo1.jpg`

4. The gallery will automatically display your images once uploaded!

**See [images/README.md](images/README.md) for complete photo specifications and detailed instructions.**

## ✨ Features

### Design
- **Modern & Professional**: Pink color palette (pinks, whites, grays)
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Scroll effects, hover transitions, and smooth scrolling navigation
- **Accessible**: Semantic HTML5 and ARIA labels

### Sections
1. **Hero Section**: Name, title, profile picture, and call-to-action
2. **About**: Professional bio and specializations
3. **Popular Talks**: Professional table showcasing conference talks with video/GitHub links
4. **AI Projects**: Card-based layout of code samples and projects
5. **Blogs & Writing**: List of technical articles and blog posts
6. **Photo Gallery**: Masonry grid layout with lightbox functionality
7. **Contact**: Links to LinkedIn and GitHub

### Interactive Elements
- Sticky navigation with active link highlighting
- Mobile-friendly hamburger menu
- Hover effects on all interactive elements
- Lightbox for gallery images (when photos are added)
- Smooth scroll to sections

## 🛠️ Customization

### Update Content

**Personal Information** (`index.html`):
- Line 55-59: Update hero section name and titles
- Line 72-78: Update about section bio text
- Line 452-464: Update contact links

**Talks** (`index.html`):
- Line 86-178: Update table rows with your talks
- Add/remove rows as needed

**Projects** (`index.html`):
- Line 188-250: Update project cards
- Modify titles, descriptions, and GitHub links

**Blogs** (`index.html`):
- Line 260-343: Update blog links and titles
- Add/remove blog items as needed

### Styling

**Colors** (`styles.css`):
```css
/* Update the CSS variables at the top of styles.css */
:root {
    --primary-pink: #E91E63;      /* Main brand color (pink) */
    --primary-pink-dark: #C2185B; /* Hover states (dark pink) */
    --accent-pink: #FF4081;       /* Accents (light pink) */
    /* ... and more */
}
```

**Fonts** (`index.html`):
- Line 20-22: Change Google Fonts import
- Update `--font-primary` variable in `styles.css`

## 🔧 Local Development

To test the site locally before deploying:

### Option 1: Python Server
```bash
# Navigate to the project folder
cd speaker-portfolio

# Start a local server
python -m http.server 8000

# Open browser to http://localhost:8000
```

### Option 2: Node.js Server
```bash
# Install http-server globally (one-time)
npm install -g http-server

# Start server
http-server

# Open browser to http://localhost:8080
```

### Option 3: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

## 📱 Browser Compatibility

Tested and working on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, custom properties, animations
- **JavaScript (Vanilla)**: No frameworks or dependencies
- **Font Awesome**: Icons for links and sections
- **Google Fonts**: Inter font family

## 📄 License

This portfolio website is personal property. Feel free to use the structure and code as inspiration for your own portfolio, but please don't copy the content directly.

## 🤝 Contributing

This is a personal portfolio, but if you spot any bugs or have suggestions:
1. Open an issue
2. Describe the problem or suggestion
3. I'll review and respond as soon as possible

## 📞 Contact

**Milan Kaur**
- LinkedIn: [linkedin.com/in/milankaur](https://linkedin.com/in/milankaur)
- GitHub: [github.com/MilanKaur-01](https://github.com/MilanKaur-01)

---

**Built with ❤️ for the developer community** | Open for speaking engagements and collaborations!
