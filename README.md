# Bluvanta - Premium E-Commerce Platform

Bluvanta is a state-of-the-art, frontend-only e-commerce application designed with a focus on visual excellence, performance, and user experience. It features a rich, dynamic interface with a curated product catalog and a seamless shopping flow.

## 🌟 Key Features

- **Premium UI/UX**: Modern design aesthetics featuring glassmorphism, smooth animations, and a responsive layout.
- **Vast Product Catalog**: Over 150 unique products across 8 major categories, including Electronics, Fashion, Beauty, Home Living, and more.
- **Intelligent Image Mapping**: Semantic matching of product images to names and categories using the DummyJSON API.
- **Dynamic Category Navigation**: Easily browse through departments with a premium sidebar and header navigation.
- **New Releases & Today's Deals**: Dedicated sections for discovering the latest items and special offers.
- **Full Shopping Experience**: 
  - Real-time cart management.
  - Interactive product detail pages.
  - Multi-step checkout process.
  - Order history and tracking.
- **Advanced Management Tools**: 
  - **Inventory System**: Track stock levels and view inventory change history (GRN).
  - **Vendor Management**: View and manage partner vendors with performance ratings.
- **State Persistence**: Uses LocalStorage to persist cart, orders, and user preferences across sessions.
- **Dark/Light Mode**: Fully theme-aware components that adapt to user preference.
- **User Authentication**: Secure-feeling login/signup flow with persistent user state.

## 🛠️ Technology Stack

- **Core**: React 19 + Vite
- **Routing**: React Router 7
- **Icons**: Lucide React
- **Styling**: Vanilla CSS (Modern CSS variables and flexbox/grid)
- **Data Source**: DummyJSON (Integrated for dynamic product seeding)
- **State Management**: React Context API (AppContext)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd bluvanta/client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 📂 Project Structure

```text
src/
├── components/     # Reusable UI components (Header, etc.)
├── context/        # AppContext for global state management
├── pages/          # Individual page components (Home, Products, Login, etc.)
├── assets/         # Static assets and images
└── App.jsx         # Main application routing and structure
```

## 🎨 Design Philosophy

Bluvanta is built with a "Visual First" approach. Every element is crafted to feel premium:
- **Glassmorphism**: Subtle translucent backgrounds for a modern, airy feel.
- **Dynamic Micro-animations**: Hover effects and transitions that make the app feel alive.
- **Curated Color Palette**: Harmonious HSL colors tailored for both light and dark modes.

## 📄 License

This project is developed for professional demonstration purposes. All rights reserved.
