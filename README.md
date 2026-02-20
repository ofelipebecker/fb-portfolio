# Felipe Becker - Frontend Development Portfolio

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![DataTables](https://img.shields.io/badge/DataTables-1.13-0D6EFD?logo=databricks&logoColor=white)](https://datatables.net/)
[![Chart.js](https://img.shields.io/badge/Chart.js-4.4-FF6384?logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

A personal portfolio showcasing frontend development projects. Built with React and Bootstrap, this portfolio features a complete multilingual system (English/Portuguese) and interactive case studies with live demonstrations.

🔗 **Link:** [felipebecker.com](https://felipebecker.com)

---

## 🎯 About The Project

### What is this project?
Personal frontend development portfolio with three case studies, each documenting the development process from research to implementation.

### Why did I build it?
- Organize and present my work professionally
- Demonstrate frontend development skills
- Provide interactive examples of my projects
- Implement and document frontend patterns (modular architecture, multilingual support)

### What technical challenges does it address?

**State Management**
- Global language context that switches content without page reloads
- Persistent user preferences across sessions

**Performance**
- Factory module pattern that loads only necessary language-specific components
- Code splitting to optimize bundle size

**Data Visualization**
- DataTables.js integration with FixedColumns and Buttons plugins
- Sortable, searchable tables with column management
- Chart.js for data visualization
- Mapbox integration for interactive maps

**Responsive Development**
- Custom `useMediaQuery` hook for viewport-based adaptations
- Mobile-first approach with Bootstrap 5
- Offcanvas navigation for mobile devices

**Component Architecture**
- Reusable components (ImageCarousel, SingleFigure, ProjectSteps)
- Language-agnostic components that receive content via props
- Consistent patterns across three projects

Each project focuses on different frontend aspects:
- **VC-X Dashboard:** Component composition and state management
- **Cities & Bikes:** Interactive mapping and API integration
- **VC-X Tables:** Advanced table implementations and modal workflows

---

## ✨ Key Features

### 🌐 **Multilingual System (EN/PT)**
- React Context API for language state
- Dynamic imports with factory modules (loads only selected language)
- Persistent language preference
- Responsive language switcher

```javascript
// Factory module pattern
const createIntro = (language) => {
  const introData = require(`./data/${language}/introData`).default;
  const introImage = require('./introImage').default;
  
  return { data: introData, image: introImage };
};
```

### 🏗️ **Modular Project Structure**
Self-contained projects for easy maintenance and expansion:

```
projectX/
├── components/
│   ├── en/StepsContent.jsx
│   └── pt/StepsContent.jsx
├── data/
│   ├── en/
│   └── pt/
├── intro.js
├── steps.js
└── conclusion.js
```

### 📱 **Responsive Implementation**
- Bootstrap 5 mobile-first grid
- Custom `useMediaQuery` hook for conditional rendering
- Offcanvas navigation on mobile
- Fluid typography and spacing

---

## 🛠️ Built With

| Category | Technologies | Reason |
|----------|-------------|--------|
| **Framework** | [React 18](https://reactjs.org/) | Component-based, ecosystem |
| **Routing** | [React Router 6](https://reactrouter.com/) | Declarative routing |
| **Styling** | [Bootstrap 5](https://getbootstrap.com/) | Responsive grid, components |
| **Tables** | [DataTables.js](https://datatables.net/) | Feature set, documentation |
| **Charts** | [Chart.js 4](https://www.chartjs.org/) | Simple API |
| **Maps** | [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/) | Interactive mapping |
| **Build** | Create React App | Zero-config setup |
| **Code Quality** | ESLint + Prettier | Consistent formatting |

---

## 🏗️ Architecture

### Factory Module Pattern
Dynamic imports based on language:

```javascript
// steps.js
const createSteps = (language) => {
  const stepsData = require(`./data/${language}/stepsData`).default;
  const stepsImages = require('./stepsImages').default;
  const stepsContent = require(`./components/${language}/StepsContent`).StepsContent;
  
  return { data: stepsData, content: stepsContent, images: stepsImages };
};
```

### Language Context
Global state management:

```javascript
// LanguageContext.jsx
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'pt' : 'en');
  };
  
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**
  ```bash
  git clone https://github.com/ofelipebecker/fb-portfolio.git
  ```
2. **Navigate to project directory**
  ```bash
  cd fb-portfolio
  ```
3. **Install dependencies**
  ```bash
  npm install
  ```
4. **Start the development server**
  ```bash
  npm start
  ```
5. **Open your browser**
  ```
  http://localhost:3000
  ```
---

## 📖 Usage

### Running the Project
```bash
# Development mode with hot reload
npm start

# Production build
npm run build
```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

This license allows others to:
- ✅ Use my code commercially
- ✅ Modify my code
- ✅ Distribute my code
- ✅ Use my code privately
- ❌ Hold me liable
- ❌ Use my name for endorsement

---

## 📫 Contact

**Felipe Becker** - Frontend Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/felipe-b-68968457)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ofelipebecker)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=firefox&logoColor=white)](https://felipebecker.com)

**Project Link:** [https://github.com/ofelipebecker/fb-portfolio](https://github.com/ofelipebecker/fb-portfolio)

---

**Made by Felipe Becker** | Last Updated: Feb 2026
