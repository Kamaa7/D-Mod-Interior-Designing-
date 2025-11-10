import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Ensure root element exists
const rootElement = document.getElementById("root");

if (!rootElement) {
  document.body.innerHTML = '<div style="padding: 20px; font-family: Arial;"><h1>Error: Root element not found</h1></div>';
  throw new Error("Root element not found!");
}

// Create root and render
try {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error('Failed to render app:', error);
  rootElement.innerHTML = `
    <div style="padding: 20px; font-family: Arial; background: white; color: black;">
      <h1>Error Loading Application</h1>
      <p><strong>${error instanceof Error ? error.message : 'Unknown error'}</strong></p>
      <pre style="background: #f5f5f5; padding: 10px; overflow: auto;">${error instanceof Error ? error.stack : String(error)}</pre>
      <button onclick="window.location.reload()" style="padding: 10px 20px; background: blue; color: white; border: none; cursor: pointer;">Reload Page</button>
    </div>
  `;
}
