# 📤 How to Upload Pictures to Your Portfolio

This guide shows you exactly how to add pictures to your speaker portfolio website. Follow these simple steps!

---

## 🎯 Quick Overview

Your portfolio uses **3 types of images**:

1. **Profile Picture** - Your photo in the hero section (top of the page)
2. **Social Media Preview** - Image shown when you share your site on LinkedIn, Twitter, etc.
3. **Gallery Photos** - Photos in your gallery section (conferences, talks, events)

All images go in the **`images/`** folder of your repository.

---

## 👤 Option 1: Profile Picture

**Where it appears:** In a circle at the top of your homepage (hero section)

### Step-by-Step Instructions:

#### 1. Prepare Your Photo
- **Choose** a professional headshot or photo of yourself
- **Crop** it to a square (same width and height)
- **Resize** to 500x500 pixels (or any square size between 400-800px)
- **Save** as either:
  - `profile.jpg` (recommended) 
  - OR `profile.png`
- **Optimize** using [TinyPNG.com](https://tinypng.com/) to keep it under 200KB

#### 2. Upload via GitHub Website (Easiest Method)

**Step 2a:** Go to your repository
- Open your browser and go to: `https://github.com/MilanKaur-01/speaker-portfolio`

**Step 2b:** Navigate to the images folder
- Click on the **`images`** folder

**Step 2c:** Upload your file
- Click the **"Add file"** button (top right)
- Select **"Upload files"**
- Drag your `profile.jpg` file into the upload area (or click to browse)

**Step 2d:** Commit the change
- Scroll down
- Add a commit message like: `Add my profile picture`
- Click **"Commit changes"**

**Step 2e:** Wait and view!
- Wait 2-5 minutes for GitHub Pages to rebuild your site
- Visit `https://MilanKaur-01.github.io/speaker-portfolio/`
- Your photo should now appear! 🎉

#### 3. Alternative: Upload via Command Line (For Advanced Users)

```bash
# Navigate to your repository folder
cd speaker-portfolio

# Copy your photo to the images folder (rename it to profile.jpg)
cp /path/to/your/photo.jpg images/profile.jpg

# Add and commit
git add images/profile.jpg
git commit -m "Add my profile picture"

# Push to GitHub
git push

# Wait 2-5 minutes, then check your site!
```

---

## 🖼️ Option 2: Social Media Preview Image (Header Image)

**Where it appears:** When you share your portfolio link on LinkedIn, Twitter, Facebook, etc.

This is also called the "Open Graph" image or "og-image".

### Step-by-Step Instructions:

#### 1. Prepare Your Image
- **Create** a banner-style image showcasing you speaking or your branding
- **Size:** 1200px wide × 630px tall (this is the standard for social media)
- **Content:** Could include:
  - A photo of you speaking at an event
  - Your name and title
  - A professional backdrop
- **Save** as: `og-image.jpg`
- **Optimize** using [TinyPNG.com](https://tinypng.com/) to keep under 500KB

#### 2. Upload via GitHub Website

**Follow the same steps as Option 1**, but:
- Name your file: `og-image.jpg`
- Commit message: `Add social media preview image`

**That's it!** Your site already has the code to use this image. Once uploaded, when you share your portfolio link on social media, this image will appear as the preview.

#### 3. How to Test It Works

After uploading and waiting 2-5 minutes:
1. Go to [LinkedIn Post Composer](https://www.linkedin.com/)
2. Paste your portfolio URL: `https://MilanKaur-01.github.io/speaker-portfolio/`
3. You should see your image as the preview!

---

## 📸 Option 3: Gallery Photos

**Where they appear:** In the Gallery section of your portfolio

### Step-by-Step Instructions:

#### 1. Prepare Your Photos

You can add up to 9 photos (or more if you customize). Use these filenames:

**Conference Photos:**
- `conference1.jpg` - Main conference photo
- `conference2.jpg` - Additional conference photo
- `conference3.jpg` - Another conference photo

**Speaking Event Photos:**
- `speaking1.jpg` - Speaking at an event
- `speaking2.jpg` - Another speaking photo

**Community & Other Photos:**
- `community1.jpg` - Community event
- `community2.jpg` - Another community event
- `workshop1.jpg` - Workshop or panel
- `demo1.jpg` - Tech demo or presentation

**Specifications:**
- **Size:** 800-1200 pixels on the longest side
- **Format:** JPG (recommended) or PNG
- **File size:** Under 500KB each

#### 2. Upload All Your Gallery Photos

**Step 2a:** Go to your repository
- `https://github.com/MilanKaur-01/speaker-portfolio`

**Step 2b:** Navigate to images folder
- Click on **`images`** folder

**Step 2c:** Upload multiple files at once!
- Click **"Add file"** → **"Upload files"**
- Drag ALL your gallery photos at once
- Make sure they have the correct filenames (e.g., `conference1.jpg`, `speaking1.jpg`, etc.)

**Step 2d:** Commit
- Add commit message: `Add gallery photos`
- Click **"Commit changes"**

**Step 2e:** View results
- Wait 2-5 minutes
- Visit your portfolio
- Scroll to the Gallery section - your photos should be there! 📷

---

## 🔧 Troubleshooting

### My profile picture isn't showing up
- **Check filename:** Must be exactly `profile.jpg` or `profile.png` (lowercase)
- **Check location:** Must be in the `images/` folder, not a subfolder
- **Wait longer:** GitHub Pages can take up to 5 minutes to update
- **Clear cache:** Press Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac) to hard refresh

### My gallery photos aren't appearing
- **Check filenames:** Must match exactly (e.g., `conference1.jpg`, not `Conference1.jpg`)
- **Check format:** Must be `.jpg` or `.png` (not `.jpeg`, `.JPEG`, `.JPG`)
- **Check file size:** If over 1MB, the page might load slowly

### Social media preview isn't working
- **Wait 24 hours:** Social media platforms cache images
- **Use debugger tools:**
  - Facebook: [Sharing Debugger](https://developers.facebook.com/tools/debug/)
  - LinkedIn: Just try posting - it updates quickly
  - Twitter: [Card Validator](https://cards-dev.twitter.com/validator)

---

## 📞 Quick Reference

| Image Type | Filename | Size | Location |
|------------|----------|------|----------|
| Profile Picture | `profile.jpg` or `profile.png` | 500×500px | `images/` folder |
| Social Preview | `og-image.jpg` | 1200×630px | `images/` folder |
| Gallery Photos | `conference1.jpg`, etc. | 800-1200px | `images/` folder |

---

## 🎨 Tips for Best Results

### For Profile Picture:
- Use a professional, well-lit photo
- Smile! This is the first thing visitors see
- Plain or simple background works best
- Face should be clearly visible

### For Social Media Preview:
- Include your name and title
- Use brand colors (pink theme)
- Show yourself in action (speaking, presenting)
- Keep text readable at small sizes

### For Gallery Photos:
- Mix of close-ups and wide shots
- Show you actively engaged (speaking, presenting, networking)
- Include audience when possible
- Variety of events and locations

---

## ✅ Checklist

Before uploading, check:
- [ ] Images are named correctly
- [ ] Images are optimized (under 200-500KB)
- [ ] Profile picture is square
- [ ] Social preview is 1200×630px
- [ ] All files are JPG or PNG format
- [ ] Files are in the `images/` folder

After uploading:
- [ ] Waited 2-5 minutes
- [ ] Refreshed the page (hard refresh: Ctrl+Shift+R)
- [ ] Checked that images appear correctly
- [ ] Tested on mobile device

---

## 🚀 You're All Set!

Once you've uploaded your images, your portfolio will look amazing! If you need help, check the detailed instructions in `/images/README.md` or open an issue on GitHub.

**Live Site:** https://MilanKaur-01.github.io/speaker-portfolio/

Happy showcasing! 🎉
