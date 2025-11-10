import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Safely initialize the app with error handling
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Make sure there's a <div id='root'></div> in your HTML.");
}

try {
  const root = createRoot(rootElement);
  root.render(<App />);
  
  // Remove loading class after render
  document.body.classList.remove('loading');
} catch (error) {
  console.error('Failed to render app:', error);
  rootElement.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; flex-direction: column; padding: 20px; text-align: center; font-family: system-ui, -apple-system, sans-serif;">
      <h1 style="color: #dc2626; margin-bottom: 16px;">Application Error</h1>
      <p style="color: #6b7280; margin-bottom: 24px;">The application failed to load. Please refresh the page.</p>
      <button onclick="window.location.reload()" style="background: #2563eb; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 16px;">
        Refresh Page
      </button>
      ${process.env.NODE_ENV === 'development' ? `<pre style="margin-top: 24px; padding: 16px; background: #f3f4f6; border-radius: 6px; text-align: left; max-width: 600px; overflow: auto;">${error}</pre>` : ''}
    </div>
  `;
  document.body.classList.remove('loading');
}
