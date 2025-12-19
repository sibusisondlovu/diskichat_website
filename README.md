# DiskiChat Website

The official marketing and landing website for the DiskiChat mobile application. Built with modern web technologies to provide a fast, responsive, and engaging user experience.

## 🚀 Technologies

This project is built using the following stack:

- **[React 19](https://react.dev/)**: The library for web and native user interfaces.
- **[Vite](https://vitejs.dev/)**: Next Generation Frontend Tooling for fast development and building.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
- **Azure Static Web Apps**: Hosted and deployed via Azure's global CDN.

## 🛠️ Project Setup

Follow these steps to get the project running locally on your machine.

### Prerequisites

- Node.js (Version 18 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd diskichat_website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## 💻 Development

Start the local development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## 📦 Build

To create a production build of the application:

```bash
npm run build
```

The built entries will be placed in the `dist/` directory. You can preview the production build locally using:

```bash
npm run preview
```

## ☁️ Deployment

This project is configured for continuous deployment to **Azure Static Web Apps**. 

- **Workflow**: `.github/workflows/azure-static-web-apps-lemon-glacier-00b314203.yml`
- **Output Location**: `dist`
- **App Location**: `/`

Any push to the `main` branch will automatically trigger a build and deploy action.

## 📄 License

This project is private and proprietary.
