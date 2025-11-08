# Exact Balance Website

Professional one-page website for Exact Balance administratiekantoor.

## 📋 Before You Start

### Update Your Contact Information

Before building, update these files:

1. **WhatsApp Number**: Open `src/App.jsx` and change line 5:
   ```javascript
   const [whatsappNumber, setWhatsappNumber] = useState('+31612345678');
   ```
   Replace `+31612345678` with your actual WhatsApp number (include country code).

2. **Email Address**: In `src/App.jsx`, find the email button (around line 265) and change:
   ```javascript
   onClick={() => window.location.href = 'mailto:info@exactbalance.nl'}
   ```
   Replace `info@exactbalance.nl` with your actual email.

## 🚀 Deployment Guide for HestiaCP

### Method 1: Build on Your Computer (Recommended)

#### Step 1: Install Node.js
If you don't have Node.js installed:
- Download from https://nodejs.org/
- Install version 18 or higher

#### Step 2: Build the Project
1. Open terminal/command prompt
2. Navigate to the project folder:
   ```bash
   cd exact-balance-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Build the production version:
   ```bash
   npm run build
   ```

This creates a `dist` folder with all your website files.

#### Step 3: Upload to HestiaCP

1. **Login to HestiaCP**
   - Go to your HestiaCP URL (e.g., https://your-server.com:8083)
   - Login with your credentials

2. **Navigate to File Manager**
   - Click on your domain
   - Click "File Manager"
   - Navigate to `public_html` folder

3. **Upload Files**
   - Delete all existing files in `public_html` (if any)
   - Upload ALL files and folders from the `dist` folder
   - Make sure to upload:
     - `index.html`
     - `assets` folder (contains CSS and JS)
     - `logo.png`

4. **Set Permissions** (if needed)
   - Select all uploaded files
   - Right-click → Permissions
   - Set to 644 for files
   - Set to 755 for folders

5. **Visit Your Website**
   - Go to your domain (e.g., https://exactbalance.nl)
   - Your website should now be live!

### Method 2: Build Directly on Server (Advanced)

If your HestiaCP server has Node.js:

1. **Upload Source Files via FTP/SFTP**
   - Upload the entire project folder to `/home/username/`

2. **Connect via SSH**
   ```bash
   ssh username@your-server.com
   ```

3. **Navigate to Project**
   ```bash
   cd ~/exact-balance-website
   ```

4. **Install and Build**
   ```bash
   npm install
   npm run build
   ```

5. **Move Files to public_html**
   ```bash
   cp -r dist/* ~/web/your-domain.com/public_html/
   ```

## 🔧 Local Development

To test the website locally before deploying:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:5173 in your browser.

## 📱 Features

✅ Fully responsive design
✅ Three pricing tiers (BASIS, STANDAARD, PRO)
✅ WhatsApp integration on each package
✅ Professional dark theme with gold accents
✅ Smooth animations and hover effects
✅ Contact section with email and WhatsApp
✅ Optimized for performance

## 🎨 Customization

### Changing Colors
Edit `src/App.jsx` and modify the Tailwind CSS classes:
- Yellow accents: `yellow-400`, `yellow-500`, `yellow-600`
- Gray background: `gray-800`, `gray-900`

### Changing Pricing
Edit the `packages` array in `src/App.jsx` (around line 7).

### Adding More Sections
Add new sections in `src/App.jsx` following the existing structure.

## 📦 Project Structure

```
exact-balance-website/
├── public/
│   └── logo.png           # Your logo
├── src/
│   ├── App.jsx           # Main component
│   ├── main.jsx          # Entry point
│   └── index.css         # Styles
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.js        # Build configuration
├── tailwind.config.js    # Tailwind configuration
└── README.md             # This file
```

## 🆘 Troubleshooting

### Website shows blank page
- Check browser console for errors (F12)
- Make sure all files from `dist` folder are uploaded
- Check file permissions (644 for files, 755 for folders)

### Logo not showing
- Verify `logo.png` is in the root of `public_html`
- Check file name is exactly `logo.png` (case-sensitive)

### WhatsApp not working
- Verify WhatsApp number includes country code
- Number should be format: +31612345678 (no spaces)

### Styling broken
- Make sure `assets` folder is uploaded
- Check that CSS files in `assets` folder are accessible

## 📞 Support

For issues with:
- **HestiaCP**: Contact your hosting provider
- **Website code**: Check the code or contact your developer
- **Node.js/npm**: Visit https://nodejs.org/

## 🔒 Security Notes

- Never commit sensitive data (API keys, passwords)
- Keep Node.js and dependencies updated
- Use HTTPS (SSL certificate) for production
- HestiaCP provides free Let's Encrypt SSL certificates

## 📄 License

© 2024 Exact Balance. All rights reserved.
