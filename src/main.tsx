import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Global error handler for debugging
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

// Safely initialize the app with error handling
const rootElement = document.getElementById("root");

if (!rootElement) {
  document.body.innerHTML = '<div style="padding: 20px; font-family: Arial; max-width: 600px; margin: 50px auto; text-align: center;"><h1>Loading Error</h1><p>Unable to initialize application. Please refresh the page.</p><button onclick="window.location.reload()" style="padding: 12px 24px; background: #4F7CFF; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; margin-top: 20px;">Reload Page</button></div>';
  throw new Error("Root element not found!");
}

try {
  const root = createRoot(rootElement);
  root.render(<App />);
  
  // Remove loading class after render
  document.body.classList.remove('loading');
} catch (error) {
  console.error('Failed to render app:', error);
  rootElement.innerHTML = `
    <div style="padding: 20px; font-family: Arial; background: white; color: black; max-width: 800px; margin: 50px auto;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #d32f2f; margin-bottom: 10px;">Application Error</h1>
        <p style="color: #666; font-size: 18px;">We're sorry, but something went wrong.</p>
      </div>
      ${process.env.NODE_ENV === 'development' ? `
        <details style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <summary style="cursor: pointer; font-weight: bold; margin-bottom: 10px;">Error Details</summary>
          <p style="color: #d32f2f; font-family: monospace; margin: 10px 0;">${error instanceof Error ? error.message : 'Unknown error'}</p>
          <pre style="background: white; padding: 15px; border-radius: 4px; overflow: auto; font-size: 12px; border: 1px solid #ddd;">${error instanceof Error ? error.stack : String(error)}</pre>
        </details>
      ` : ''}
      <div style="text-align: center; margin-top: 30px;">
        <button onclick="window.location.reload()" style="padding: 12px 32px; background: #4F7CFF; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 600; box-shadow: 0 2px 8px rgba(79, 124, 255, 0.3); transition: all 0.2s;">
          Reload Page
        </button>
        <a href="/" style="display: inline-block; margin-left: 15px; padding: 12px 32px; color: #4F7CFF; text-decoration: none; border: 2px solid #4F7CFF; border-radius: 8px; font-size: 16px; font-weight: 600; transition: all 0.2s;">
          Go Home
        </a>
      </div>
    </div>
  `;
  document.body.classList.remove('loading');
}
