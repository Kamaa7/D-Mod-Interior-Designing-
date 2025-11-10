import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Ensure root element exists
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found!");
}

// Create root and render with error handling
try {
  const root = createRoot(rootElement);
  root.render(<App />);
} catch (error) {
  console.error('Failed to render app:', error);
  rootElement.innerHTML = `
    <div style="padding: 20px; font-family: Arial; color: red;">
      <h1>Error Loading Application</h1>
      <p>${error instanceof Error ? error.message : 'Unknown error'}</p>
      <button onclick="window.location.reload()">Reload Page</button>
    </div>
  `;
}
