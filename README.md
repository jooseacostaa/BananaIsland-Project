# Banana Island - Digital Gallery of Art

![React](https://img.shields.io/badge/React-19.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.2.4-purple)
![React Router](https://img.shields.io/badge/React_Router-7.13.0-red)

Banana Island is a modern web application for a digital art gallery built with React and Vite. The project showcases a curated collection of classical artworks through a modern, responsive, and easy-to-navigate interface.

## 🎨 Design and Visual Reference

This project was designed following modern UX/UI principles, inspired by contemporary art galleries and professional portfolios. The design prioritizes:

- Intuitive navigation  
- Clear visual hierarchy  
- Responsive experience across all devices  
- Reusable and maintainable components

## 🚀 Technologies Used

- **React 19.2.0** — JavaScript library for building user interfaces  
- **Vite 7.2.4** — Fast build tool and development server  
- **React Router DOM 7.13.0** — Declarative routing for React  
- **Leaflet 1.9.4** — Interactive maps library  
- **React Leaflet 5.0.0** — React components for Leaflet  
- **React Icons 5.5.0** — Popular icons as React components

## 🎯 Main Features

### 1. **Full Navigation**
- Reusable header with logo and navigation menu  
- Footer with legal links, social media, and resources  
- Functional routing using React Router  

### 2. **Implemented Pages**
- **Home** (`/` and `/home`) — Main page with hero and featured gallery  
- **About** (`/about`) — Developer information  
- **Contact** (`/contact`) — Contact form and details  
- **Projects** (`/projects`) — Project portfolio  
- **Find Me** (`/findme`) — Interactive location map  
- **Terms & Privacy** (`/terms-privacity`) — Terms and conditions  

### 3. **Dynamic Content**
- `ArtSection` component consuming a JSON array of 7 artworks  
- Use of `.map()` for dynamic rendering  
- Clear separation between data and presentation logic  

### 4. **Props-Based Components**
- Reusable components receiving props  
- DRY (Don't Repeat Yourself) code  
- Modular and scalable architecture  

### 5. **Third-Party Integrations**
- **Leaflet** — Interactive map on the Find Me page  
- **React Icons** — Social media icons (GitHub, YouTube, LinkedIn)  

### 6. **Responsive Design**
- Extensive use of Flexbox  
- Media queries for mobile, tablet, and desktop  
- Adaptive layouts across all components  

## 🛠️ Installation and Setup

### Prerequisites
- Node.js (version 16 or higher)  
- npm or yarn

### Installation Steps

1. **Clone repository**
```bash
git clone https://github.com/jooseacostaa/banana-island.git
cd react-project-dam
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open in your browser**
```
http://localhost:5173
```

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run preview` - Previews the production build
- `npm run lint` - Runs the linter to check the code

## 📋 Code Conventions

The project follows strict naming conventions:

- **Folders**: kebab-case (`art-section`, `terms-privacity`)
- **Components & Pages:**: PascalCase (`Header.jsx`, `About.jsx`)
- **CSS Files**: PascalCase (`Header.css`, `Contact.css`)
- **CSS Classes & IDs**: kebab-case (`header__logo`, `contact-form`)
- **Variables & Functions**: camelCase (`featuredData`, `handleSubmit`)
- **Booleans**: Prefijos `is`, `has`, `should` (`isActive`, `hasError`)

## 🎨 Implemented Best Practices

### UX/UI
- Clear and consistent navigation
- Well-defined visual hierarchy
- Visual feedback on interactions
- Accessibility considered across all components

### Clean Code
- Small, focused functions
- Descriptive and semantic naming
- DRY principle applied consistently
- Comments only when meaningful
- Separation of concerns

### Responsive Design
- Mobile-first approach
- Well-defined breakpoints
- Optimized images
- Flexbox for flexible layouts

- ## 🌐 Application Routes

| Route | Component | Description |
|------|-----------|-------------|
| `/` | Home | Main page |
| `/home` | Home | Main page (alias) |
| `/about` | About | About the developer |
| `/contact` | Contact | Contact form |
| `/projects` | Projects | Project portfolio |
| `/findme` | FindMe | Location map |
| `/terms-privacity` | TermsPrivacity | Terms and conditions |

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

- ## 🔗 Links and Resources

- **GitHub Repository**: [https://github.com/jooseacostaa](https://github.com/jooseacostaa)
- **A2 Bikes Project**: [Website-A2Bikes-Project](https://github.com/jooseacostaa/Website-A2Bikes-Project)

- ## 👨‍💻 Author

**Jose Acosta**
- GitHub: [@jooseacostaa](https://github.com/jooseacostaa)
- Email: joseacostanaranjo@hotmail.com
- Gmail. joseluisacostanaranjo@alumno.ieselrincon.es
- Location: España

## 📄 License

This project was created for educational purposes as part of the Multiplatform Application Development (DAM) program.

---
