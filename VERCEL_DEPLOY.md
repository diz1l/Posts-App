# Quick Vercel Deployment Guide

## Step 1: Install Vercel CLI

Open your terminal (PowerShell or Git Bash) and run:

```bash
npm install -g vercel
```

Wait for installation to complete.

## Step 2: Login to Vercel

```bash
vercel login
```

Choose your preferred login method:
- GitHub (recommended)
- GitLab
- Bitbucket
- Email

## Step 3: Navigate to Project

```bash
cd E:\TEST\urok1_todo_posts
```

## Step 4: Deploy to Vercel

### Preview Deployment (Development)
```bash
vercel
```

### Production Deployment
```bash
vercel --prod
```

## Step 5: Answer Setup Questions

When prompted:

1. **Set up and deploy?** → Yes (Y)
2. **Which scope?** → Select your account
3. **Link to existing project?** → No (N) - for first deployment
4. **What's your project's name?** → `posts-app` (or press Enter for default)
5. **In which directory is your code located?** → Press Enter (current directory)
6. **Want to override the settings?** → No (N)

Vercel will automatically detect:
- Framework: Create React App
- Build Command: `npm run build`
- Output Directory: `build`
- Development Command: `npm start`

## Expected Output

```
🔗  Linked to your-username/posts-app
🔍  Inspect: https://vercel.com/...
✅  Production: https://posts-app-xxx.vercel.app [copied to clipboard]
```

## After Deployment

1. Click the production URL to open your live app
2. Test all features:
   - Login page
   - Posts page with pagination
   - Post details
   - About page
   - Create/Delete posts

## Troubleshooting

### Command not found: vercel
- Restart your terminal after installation
- Try using `npx vercel` instead

### Authentication Issues
- Make sure you're logged in: `vercel whoami`
- Re-login if needed: `vercel logout` then `vercel login`

### Build Errors
- All warnings have been fixed in the code
- If errors persist, check Vercel dashboard logs

## Alternative: Vercel Dashboard

If CLI doesn't work:

1. Go to https://vercel.com/new
2. Import from GitHub: `diz1l/Posts-App`
3. Click "Deploy"
4. Done! ✅

---

Your project is ready for deployment! 🚀
