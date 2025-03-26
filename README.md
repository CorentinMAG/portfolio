# Modern Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Material-UI. This portfolio features smooth animations, a clean design, and is optimized for deployment on GitHub Pages.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive layout
- ⚡ Smooth page transitions and animations
- 🎯 SEO optimized
- 📦 Easy to customize and extend
- 🚀 Ready for GitHub Pages deployment

## Technologies Used

- React
- TypeScript
- Material-UI
- Framer Motion
- React Router
- GitHub Pages

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Customization

1. Update personal information in the components:

   - `src/pages/Home.tsx`: Update your name and introduction
   - `src/pages/About.tsx`: Update your story and skills
   - `src/pages/Projects.tsx`: Add your projects
   - `src/pages/Contact.tsx`: Update contact information and social links

2. Customize the theme in `src/App.tsx`:
   - Update colors in the `theme` object
   - Modify typography settings
   - Adjust component styles

## Deployment to GitHub Pages

1. Add the `homepage` field to your `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/portfolio"
}
```

2. Install the `gh-pages` package:

```bash
npm install --save-dev gh-pages
# or
yarn add -D gh-pages
```

3. Add deployment scripts to your `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

4. Deploy to GitHub Pages:

```bash
npm run deploy
# or
yarn deploy
```

5. Configure GitHub Pages:
   - Go to your repository settings
   - Navigate to the "Pages" section
   - Select the `gh-pages` branch as the source
   - Save the changes

Your portfolio will be available at `https://yourusername.github.io/portfolio`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
