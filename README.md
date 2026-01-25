# GITS - Global iTech Solutions

Student resources website built with Next.js 14, providing courses, documentation, API guides, practice exercises, and exam resources.

## 🚀 Quick Start

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

   If you encounter peer dependency errors (due to deprecated `react-mdl`), the project uses `.npmrc` with `legacy-peer-deps=true`. If issues persist:
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to see your site.

3. **Build for production:**
   ```bash
   npm run build
   ```
   This creates an optimized production build in the `/out` directory (static export).

4. **Start production server:**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
/app                  # Next.js App Router pages and layouts
/components           # Shared React components (Header, Footer)
/src
  /components         # Original components
  /page-components    # Page components
  /styles             # CSS files
  /utils              # Utilities and design system
  /utilities          # Data files and utilities
  /config             # Configuration files
  /images             # Source images
/public               # Static assets (images, resources)
```

## 🎯 Features

- ✅ Modern, responsive design
- ✅ Server-side rendering (SSR) ready
- ✅ Static site generation (SSG) support
- ✅ Optimized images with Next.js Image component
- ✅ Fast page transitions
- ✅ SEO optimized
- ✅ React Router compatibility via polyfill

## 📍 Routes

- `/` - Landing page
- `/courses` and `/courses/[slug]` - Courses pages
- `/docs` and `/docs/[slug]` - Documentation pages
- `/apis` and `/apis/[slug]` - API documentation
- `/apis/playwright/[slug]` - Playwright sub-pages
- `/aid` and `/aid/[slug]` - AID resources
- `/practice` and `/practice/[slug]` - Practice exercises
- `/practice/quiz/[examId]` - Exam pages (Exam1-Exam17)
- `/about`, `/contact`, `/how-it-works` - Static pages
- Legal pages: `/terms-of-use`, `/privacy-policy`, `/copyright-notice`, `/website-disclaimer`

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **React 18** - UI library
- **react-mdl** - Material Design Lite components (deprecated but functional)
- **tachyons** - Utility CSS framework

## 📝 Key Notes

- All pages, content, images, functions, and logic remain the same
- React Router has been replaced with Next.js App Router
- Components using `withRouter` work via polyfill
- All styles and assets have been preserved
- The design has been modernized while keeping all functionality intact

## 🐛 Troubleshooting

If you encounter issues:

1. **Clear node_modules and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Clear Next.js cache:**
   ```bash
   rm -rf .next
   npm run dev
   ```

3. **Check image paths:** Ensure images are in `/public/images` or `/src/images`

4. **Verify component imports:** All components should import from `@/src/...`

For more detailed troubleshooting, see [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)

## 📚 Documentation

- [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md) - Complete migration documentation
- [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) - Google Sheets integration setup
- [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) - EmailJS contact form setup
- [README_DESIGN_SYSTEM.md](./README_DESIGN_SYSTEM.md) - Design system documentation
- [RESET_EXAM.md](./RESET_EXAM.md) - How to reset exam attempts
- [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) - Common issues and solutions

## 🚢 Deployment

The project is configured for static export and can be deployed to:
- GitHub Pages
- Vercel
- Any static hosting service

```bash
npm run build
```

The output will be in the `/out` directory.

## 📄 License

See [LICENSE](./LICENSE) file for details.
