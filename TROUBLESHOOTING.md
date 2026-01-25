# Troubleshooting Guide

## Common Issues and Solutions

### 1. Metadata Warnings

**Issue:** Warnings about `viewport` and `themeColor` in metadata export.

**Solution:** Already fixed in `app/layout.js`. If you still see warnings:
- Clear `.next` cache: `rm -rf .next`
- Restart dev server: `npm run dev`

### 2. React Router Link Warnings

**Issue:** Console warnings about React Router Link usage.

**Solution:** These are informational only. The polyfill automatically converts React Router Links to anchor tags. The warnings are suppressed in production and minimized in development.

### 3. `[object Object]` Route Error

**Issue:** 404 error for `/[object Object]/` route.

**Solution:** Fixed in `nextRouterAdapter.js`. The adapter now ensures paths are always strings. If you still see this:
- Clear browser cache
- Restart dev server
- Check browser console for any components passing objects to navigation functions

### 4. Build Errors

**Issue:** Errors during `npm run build`.

**Solutions:**
- Clear `.next` folder: `rm -rf .next`
- Clear `node_modules`: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run lint`

### 5. Images Not Loading

**Issue:** Images not displaying.

**Solutions:**
- Ensure images are in `/public/images` or `/src/images`
- Check image paths in components
- Verify Next.js Image component usage (if applicable)

### 6. Styling Issues

**Issue:** Styles not applying correctly.

**Solutions:**
- Verify CSS files are imported in `app/globals.css`
- Check that `tachyons` is loaded in layout
- Ensure `react-mdl` styles are imported

### 7. Component Errors

**Issue:** Components not rendering.

**Solutions:**
- Check browser console for errors
- Verify all imports are correct
- Ensure client components have `'use client'` directive
- Check that router props are being passed correctly

## Quick Fixes

### Clear Everything and Rebuild
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### Check for Type Errors
```bash
npm run lint
```

### Build for Production
```bash
npm run build
```

## Still Having Issues?

1. Check the terminal output for specific error messages
2. Check browser console for runtime errors
3. Verify all dependencies are installed: `npm list`
4. Check Next.js version: `npm list next`
