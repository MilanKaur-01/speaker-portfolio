# Profile Image Setup

## Current Status
The hero section is now configured to display a profile image at `images/profile.jpg`.

## What You Need To Do
1. Add your profile picture to the `/images` folder as `profile.jpg`
2. Recommended specifications:
   - Format: JPEG (.jpg)
   - Minimum size: 500x500 pixels (square)
   - Optimal size: 800x800 pixels
   - The image will be displayed as a circle (250px diameter on desktop, 200px on tablet, 160px on mobile)

## Fallback
If `profile.jpg` is not found, the site will automatically fall back to the existing `profile-placeholder.svg` (a pink circular avatar icon).

## Alternative Format
If you prefer PNG format, you can name your file `profile.png` instead of `profile.jpg`, but you'll need to update the image reference in `index.html` line 56 accordingly.

## How to Add Your Image
Follow the instructions in the [UPLOAD-GUIDE.md](../UPLOAD-GUIDE.md) for detailed steps on uploading images to the repository.
