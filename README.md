# Modern Portfolio Website

A modern, responsive React-based portfolio website built with TypeScript, featuring a clean design, smooth animations, and dark/light mode toggle.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Smooth Animations**: Scroll-triggered animations using Framer Motion and AOS
- **Modern UI**: Clean, professional design with CSS Grid and Flexbox
- **Interactive Components**: Hover effects, smooth transitions, and engaging interactions
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📱 Pages

- **Home**: Hero section with quick stats and featured skills preview
- **About**: Personal bio, education, and social links with photo placeholder
- **Tools**: Comprehensive list of technologies organized by categories
- **Skills**: Technical skills, soft skills, and achievements with progress bars
- **Projects**: Project showcase with filtering and detailed project cards

## 🛠️ Technologies Used

- **React 19** with TypeScript
- **React Router DOM** for navigation
- **Framer Motion** for animations
- **AOS (Animate On Scroll)** for scroll effects
- **CSS3** with CSS Variables for theming
- **Vite** for build tooling

## 🎨 Design Features

- **CSS Variables**: Easy theme customization
- **Gradient Backgrounds**: Modern visual appeal
- **Card-based Layout**: Clean, organized content presentation
- **Smooth Scrolling**: Enhanced user experience
- **Interactive Elements**: Hover effects and micro-interactions
- **Typography**: Inter font family for modern look

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-react-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.tsx      # Navigation component
│   ├── Navbar.css
│   ├── Footer.tsx      # Footer component
│   ├── Footer.css
│   ├── ProjectCard.tsx # Project card component
│   └── ProjectCard.css
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── Home.css
│   ├── About.tsx       # About page
│   ├── About.css
│   ├── Tools.tsx       # Tools page
│   ├── Tools.css
│   ├── Skills.tsx      # Skills page
│   ├── Skills.css
│   ├── Projects.tsx    # Projects page
│   └── Projects.css
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Theme management
├── assets/             # Static assets
│   ├── images/         # Image files
│   └── icons/          # Icon files
├── App.tsx             # Main app component
├── App.css             # Global styles
├── main.tsx            # Entry point
└── index.css           # Base styles
```

## 🎨 Customization

### Adding Your Content

1. **Personal Information**: Update the content in each page component
2. **Photo**: Replace the placeholder in About page with your actual photo
3. **Projects**: Modify the projects array in `Projects.tsx`
4. **Skills**: Update the skills arrays in `Skills.tsx`
5. **Tools**: Customize the tools in `Tools.tsx`
6. **Social Links**: Update URLs in `About.tsx` and `Footer.tsx`

### Theme Customization

The theme system uses CSS variables defined in `App.css`. You can easily customize:

- Colors (primary, secondary, accent)
- Typography (font families, sizes)
- Spacing (margins, padding)
- Shadows and borders
- Gradients

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `App.tsx`
3. Add navigation link in `Navbar.tsx`
4. Style with corresponding CSS file

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🎯 Performance Features

- **Lazy Loading**: Images and components load as needed
- **Code Splitting**: Automatic code splitting with React Router
- **Optimized Images**: Proper image sizing and lazy loading
- **CSS Optimization**: Efficient CSS with minimal redundancy
- **Bundle Optimization**: Vite's built-in optimizations

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

Your Name - [@yourusername](https://twitter.com/yourusername) - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

---

⭐ Don't forget to give this project a star if you found it helpful!