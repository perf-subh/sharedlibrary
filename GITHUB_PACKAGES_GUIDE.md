# GitHub Packages Publication Guide

## Current Status:
✅ Package configured for GitHub Packages (@natashakediacts/shared-utils@1.0.1)
✅ Tests passing
✅ .npmrc configured
❌ GitHub Personal Access Token needed

## Steps to Complete:

### 1. Create GitHub Personal Access Token
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" > "Generate new token (classic)"
3. Token name: "NPM GitHub Packages"
4. Select scopes:
   - [x] read:packages
   - [x] write:packages
   - [x] delete:packages
   - [x] repo
5. Click "Generate token"
6. **IMPORTANT**: Copy the token immediately!

### 2. Set Environment Variable (PowerShell)
```powershell
$env:NPM_TOKEN = "ghp_your_actual_token_here"
```

### 3. Update .npmrc with your token
Replace YOUR_GITHUB_TOKEN_HERE in .npmrc with your actual token

### 4. Publish to GitHub Packages
```powershell
npm publish
```

### 5. Update Consumer App
```powershell
cd "..\consumer-app"
npm install @natashakediacts/shared-utils@1.0.1 --registry=https://npm.pkg.github.com
```

## Commands Ready to Run:
Once you have the token set up, run these commands in order:

```powershell
# 1. Verify authentication
npm whoami --registry=https://npm.pkg.github.com

# 2. Publish to GitHub Packages
npm publish

# 3. Navigate to consumer app
cd "..\consumer-app"

# 4. Create .npmrc in consumer app
echo '@natashakediacts:registry=https://npm.pkg.github.com' > .npmrc

# 5. Install from GitHub Packages
npm install @natashakediacts/shared-utils@1.0.1

# 6. Test the consumer app
node index.js
```
