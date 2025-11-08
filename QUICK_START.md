# 🚀 Quick Deployment Guide for HestiaCP

## ⚡ Fast Track (5 Steps)

### 1️⃣ Update Your Contact Info
Open `src/App.jsx`:
- Line 5: Change WhatsApp number
- Line 265: Change email address

### 2️⃣ Install & Build
```bash
npm install
npm run build
```

### 3️⃣ Login to HestiaCP
- Go to: https://your-server.com:8083
- Enter your credentials

### 4️⃣ Upload Files
- Click your domain → File Manager
- Go to `public_html` folder
- Delete old files
- Upload everything from `dist` folder

### 5️⃣ Done! 🎉
Visit your domain to see your live website!

---

## 📋 What Goes Where?

**From your computer's `dist` folder:**
```
dist/
├── index.html          → Upload to public_html/
├── logo.png            → Upload to public_html/
└── assets/             → Upload entire folder to public_html/
    ├── index-xxx.css
    └── index-xxx.js
```

**Final structure on server:**
```
public_html/
├── index.html
├── logo.png
└── assets/
    ├── index-xxx.css
    └── index-xxx.js
```

---

## ✅ Checklist

Before deploying:
- [ ] Updated WhatsApp number
- [ ] Updated email address
- [ ] Ran `npm install`
- [ ] Ran `npm run build`
- [ ] Checked `dist` folder exists

During deployment:
- [ ] Logged into HestiaCP
- [ ] Navigated to public_html
- [ ] Cleared old files
- [ ] Uploaded all files from dist
- [ ] Uploaded logo.png
- [ ] Uploaded assets folder

After deployment:
- [ ] Visited website URL
- [ ] Tested WhatsApp buttons
- [ ] Tested email button
- [ ] Checked on mobile
- [ ] Verified logo appears

---

## 🆘 Quick Fixes

**Blank page?**
→ Check browser console (F12), ensure all files uploaded

**No logo?**
→ Verify logo.png is in public_html root

**WhatsApp not working?**
→ Format should be: +31612345678 (with country code)

**Still need help?**
→ Read the full README.md

---

## 📞 HestiaCP Access Info

**Panel URL:** https://your-server-ip:8083  
**SSH:** `ssh username@your-server.com`  
**FTP:** Use FileZilla or similar FTP client

---

**Website will be live at:** https://your-domain.com

Good luck! 🍀
