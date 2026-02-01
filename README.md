# ProWeb Developer Portfolio - Next.js

A modern, full-featured portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✅ **Multi-page website** with smooth navigation
- ✅ **Responsive design** - works on all devices
- ✅ **Modern UI/UX** with animations and transitions
- ✅ **SEO optimized** with proper meta tags
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for styling
- ✅ **Component-based** architecture
- ✅ **Fast performance** with Next.js optimization

## 📁 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── services/
│   │   └── page.tsx          # Services page
│   ├── portfolio/
│   │   └── page.tsx          # Portfolio page
│   ├── blog/
│   │   └── page.tsx          # Blog page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── components/
│   ├── Navbar.tsx            # Navigation component
│   └── Footer.tsx            # Footer component
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:3000`

## 📝 Pages

### Home Page (/)
- Hero section with animated background
- Services overview
- Why choose us section
- Client testimonials
- Call-to-action

### About Page (/about)
- Company story
- Team values
- Statistics
- Mission and vision

### Services Page (/services)
- Detailed service descriptions
- Pricing information
- Process workflow
- Service features

### Portfolio Page (/portfolio)
- Project showcase
- Filterable categories
- Case studies
- Project statistics

### Blog Page (/blog)
- Featured articles
- Blog post grid
- Category filters
- Newsletter subscription

### Contact Page (/contact)
- Contact form
- Contact information
- Business hours
- FAQ section

## 🎨 Customization

### Update Contact Information

Edit the contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

### Change Colors

Update the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: '#8B5CF6',      // Purple
  secondary: '#1E293B',    // Dark gray
  accent: '#F59E0B',       // Orange
}
```

### Add Your Content

1. **Services**: Edit `app/services/page.tsx`
2. **Portfolio Projects**: Edit `app/portfolio/page.tsx`
3. **Blog Posts**: Edit `app/blog/page.tsx`
4. **About Info**: Edit `app/about/page.tsx`

### Add Images

Place images in the `public/` folder and reference them:
```tsx
<Image src="/your-image.jpg" alt="Description" />
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy!

### Build for Production

```bash
npm run build
npm start
```

## 📦 Dependencies

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Icons** - Icon library
- **Framer Motion** - Animations (optional)

## 🔧 Configuration

### Environment Variables

Create `.env.local` for environment variables:
```
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com
```

### SEO

Update metadata in each page's file:
```tsx
export const metadata = {
  title: 'Your Page Title',
  description: 'Your page description',
}
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance Optimization

The site is optimized with:
- Static generation where possible
- Image optimization with Next.js Image
- Code splitting
- Lazy loading
- CSS optimization

## 📞 Support

For questions or issues:
- Email: info@prowebdev.com
- Phone: +234 810 009 8339

## 📄 License

This project is licensed under the MIT License.

## 🙏 Credits

Built with Next.js, TypeScript, and Tailwind CSS.
Designed and developed by ProWeb Developer.

---

**Ready to launch your website?** Contact us today for a free consultation!
