# Images Folder - Complete Image Upload Guide

This folder contains all images for your portfolio. Follow these instructions to add your photos to the website.

**📖 For a comprehensive, beginner-friendly guide, see [../UPLOAD-GUIDE.md](../UPLOAD-GUIDE.md)**

---

## 📤 Three Types of Images

### 1. 👤 Profile Picture (Hero Section)
### 2. 🖼️ Social Media Preview Image (og-image)  
### 3. 📸 Gallery Photos (Speaking Events)

---

## 👤 Profile Picture (Hero Section)

### Required File
- **Filename**: `profile.jpg` or `profile.png`
- **Location**: This folder (`/images/`)
- **Purpose**: Displays as a circular profile picture in the hero section at the top of the page

### Specifications
- **Recommended dimensions**: 400x400px to 800x800px (square)
- **File format**: JPEG (.jpg) or PNG (.png)
- **Maximum file size**: 200KB (for fast loading)
- **Content**: Professional headshot or photo of you

### How to Add Your Profile Picture

1. **Prepare your photo**:
   - Choose a professional, well-lit photo
   - Crop it to a square (1:1 aspect ratio)
   - Optimize it using [TinyPNG](https://tinypng.com/) or similar

2. **Upload via GitHub**:
   - Go to your repository on GitHub
   - Navigate to the `images/` folder
   - Click "Add file" → "Upload files"
   - Upload your photo with the filename `profile.jpg` (or `profile.png`)
   - Click "Commit changes"

3. **Or via command line**:
   ```bash
   # Copy your profile photo to the images folder
   cp /path/to/your/photo.jpg images/profile.jpg
   
   # Add and commit
   git add images/profile.jpg
   git commit -m "Add profile picture"
   git push
   ```

4. **Wait 2-5 minutes** for GitHub Pages to rebuild, then check your site!

**Note**: A placeholder avatar is currently displayed. Once you upload `profile.jpg`, it will automatically replace the placeholder.

---

## 🖼️ Social Media Preview Image (Header)

### What is this?
When you share your portfolio link on LinkedIn, Twitter, Facebook, or other social media, this image appears as the preview thumbnail.

### Required File
- **Filename**: `og-image.jpg`
- **Location**: This folder (`/images/`)
- **Purpose**: Social media preview/share image (also called "Open Graph" image)

### Specifications
- **Recommended dimensions**: 1200px wide × 630px tall (standard social media size)
- **File format**: JPEG (.jpg)
- **Maximum file size**: 500KB (for fast loading)
- **Content**: Banner-style image - could include:
  - Photo of you speaking at an event
  - Your name and professional title
  - Branding or professional backdrop

### How to Add Your Social Media Preview Image

1. **Create your image**:
   - Design a 1200×630px banner image
   - Include your photo and/or name
   - Keep important content in the center (edges may be cropped on some platforms)
   - Use your brand colors (pink theme matches the site)
   - Save as `og-image.jpg`

2. **Upload via GitHub**:
   - Go to your repository on GitHub
   - Navigate to the `images/` folder
   - Click "Add file" → "Upload files"
   - Upload your image named `og-image.jpg`
   - Click "Commit changes"

3. **Test it**:
   - Wait 2-5 minutes for GitHub Pages to rebuild
   - Share your portfolio link on LinkedIn or Twitter
   - Your image should appear as the preview!
   - Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) to test

---

## 📸 Gallery Photos (Speaking Events)

The portfolio gallery is designed to display 9 photos in a beautiful masonry layout. Here are the recommended image filenames:

### Conference Photos
- `conference1.jpg` - Main conference photo (large placeholder)
- `conference2.jpg` - Additional conference photo
- `conference3.jpg` - Another conference photo

### Speaking Engagements
- `speaking1.jpg` - Speaking event photo #1
- `speaking2.jpg` - Speaking event photo #2 (large placeholder)

### Community Events
- `community1.jpg` - Community event photo #1
- `community2.jpg` - Community event photo #2 (wide placeholder)

### Workshops & Demos
- `workshop1.jpg` - Workshop or panel photo (wide placeholder)
- `demo1.jpg` - Technical demo or coding session photo

## 🎨 Image Specifications

### Recommended Dimensions
- **Standard images**: 800x800px to 1200x1200px
- **Large images**: 1200x1600px (for tall gallery items)
- **Wide images**: 1600x900px (for wide gallery items)

### File Format
- **Preferred**: JPEG (.jpg)
- **Alternative**: PNG (.png) for images with transparency
- **Maximum file size**: 500KB per image (for fast loading)

### Optimization
Before uploading, optimize your images using:
- [TinyPNG](https://tinypng.com/) - Free online image compression
- [Squoosh](https://squoosh.app/) - Advanced image optimization
- Or any image editing software with "Save for Web" option

## 📁 How to Add Images

### Method 1: Direct Upload (Easiest)
1. Go to your GitHub repository
2. Navigate to the `images/` folder
3. Click "Add file" → "Upload files"
4. Drag and drop your images (renamed according to the list above)
5. Click "Commit changes"

### Method 2: Git Command Line
```bash
# Navigate to your repository
cd speaker-portfolio

# Copy your images to the images folder
cp /path/to/your/photos/*.jpg images/

# Add and commit
git add images/
git commit -m "Add portfolio gallery images"
git push
```

### Method 3: GitHub Desktop
1. Open GitHub Desktop
2. Navigate to your repository
3. Copy your images to the `images/` folder in your local repository
4. The changes will appear in GitHub Desktop
5. Add a commit message and push to GitHub

## 🖼️ Gallery Layout

The gallery uses a masonry grid layout with three types of items:

- **Large items** (span 2 rows): Perfect for portrait-oriented photos
- **Wide items** (span 2 columns): Perfect for landscape/group photos
- **Standard items**: Regular square or slightly rectangular photos

### Current Layout Configuration:
```
Row 1: [Large-conference1] [speaking1] [community1]
Row 2: [          "       ] [----workshop1----]
Row 3: [conference2] [Large-speaking2] [demo1]
Row 4: [----community2----] [     "    ] [conference3]
```

## 🔄 Replacing Placeholders

Once you add images with the correct filenames, the placeholders will automatically be replaced. The `script.js` file contains logic to:
1. Check if an image file exists
2. Replace the placeholder with the actual image
3. Keep the placeholder if the image is not found

## ✨ Tips for Best Results

### Photo Selection
- Choose high-quality, well-lit photos
- Mix close-up shots with wide audience shots
- Include photos from different events/locations
- Show you actively engaged (speaking, presenting, interacting)

### Composition
- For **large items**: Use portrait-oriented photos (you on stage, headshots)
- For **wide items**: Use landscape photos (panel discussions, audience views)
- For **standard items**: Use square or balanced photos

### Professional Touch
- Ensure photos are well-lit and in focus
- Avoid overly casual or blurry images
- Include venue branding/signage when possible
- Show diverse settings and audiences

## 🎯 Alternative Image Names

If you prefer different naming conventions, update the `script.js` file:

Find this section (around line 182):
```javascript
const imagePaths = {
    '1': 'images/conference1.jpg',
    '2': 'images/speaking1.jpg',
    // ... etc
};
```

Update the paths to match your preferred filenames.

## 🚀 After Adding Images

1. **Push to GitHub**: Make sure all images are committed and pushed
2. **Wait 2-5 minutes**: GitHub Pages needs time to rebuild
3. **Visit your site**: Go to `https://MilanKaur-01.github.io/speaker-portfolio/`
4. **Check the gallery**: Your photos should now appear!

## 🐛 Troubleshooting

### Images not appearing?
- Check that filenames exactly match (case-sensitive!)
- Ensure images are in `.jpg` or `.png` format
- Verify images are in the `/images` folder, not a subfolder
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Images too large/slow loading?
- Compress images using TinyPNG or similar
- Aim for 200-500KB per image
- Consider reducing dimensions to 1200px max width

### Layout looks broken?
- Check that image aspect ratios are reasonable
- Ensure you're using landscape images for wide placeholders
- Portrait images work best for large placeholders

## 📞 Need Help?

If you encounter issues:
1. Check the browser console for errors (F12 → Console tab)
2. Verify the GitHub Pages site is deployed and active
3. Ensure all filenames match exactly (including file extensions)

## 🎨 Optional: Add More Images

To add more than 9 images:

1. Open `index.html`
2. Duplicate a gallery item block:
```html
<div class="gallery-item" data-image="10">
    <div class="gallery-placeholder">
        <i class="fas fa-camera"></i>
        <p>Your Photo Title</p>
        <span class="image-instruction">Add: images/yourphoto.jpg</span>
    </div>
</div>
```
3. Update `script.js` to include the new image path
4. Save and push changes

---

**Ready to showcase your amazing work? Add your photos and watch your portfolio come to life! 🚀**
