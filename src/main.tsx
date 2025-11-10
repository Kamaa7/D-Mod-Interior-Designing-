import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Global error handler - log all errors
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  // Show error in console for debugging
  if (event.error) {
    console.error('Error stack:', event.error.stack);
  }
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

// Safely initialize the app with error handling
const rootElement = document.getElementById("root");

if (!rootElement) {
  const errorHTML = '<div style="padding: 20px; font-family: Arial; max-width: 600px; margin: 50px auto; text-align: center;"><h1 style="color: #d32f2f;">Loading Error</h1><p>Unable to initialize application. Please refresh the page.</p><button onclick="window.location.reload()" style="padding: 12px 24px; background: #4F7CFF; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; margin-top: 20px;">Reload Page</button></div>';
  document.body.innerHTML = errorHTML;
  throw new Error("Root element not found!");
}

// Show loading state immediately
rootElement.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: Arial; background: #fafafa;"><div style="text-align: center;"><div style="width: 50px; height: 50px; border: 4px solid #f3f3f3; border-top: 4px solid #4F7CFF; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div><p style="color: #666;">Loading...</p></div></div><style>@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); }}</style>';

// Initialize React app
let root;
try {
  root = createRoot(rootElement);
} catch (error) {
  console.error('Failed to create root:', error);
  rootElement.innerHTML = `
    <div style="padding: 20px; font-family: Arial; background: white; color: black; max-width: 800px; margin: 50px auto; min-height: 100vh; display: flex; align-items: center; justify-content: center;">
      <div style="text-align: center;">
        <h1 style="color: #d32f2f; margin-bottom: 10px; font-size: 32px;">Initialization Error</h1>
        <p style="color: #666; font-size: 18px; margin-bottom: 30px;">Failed to initialize React application.</p>
        <button onclick="window.location.reload()" style="padding: 12px 32px; background: #4F7CFF; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 600;">
          Reload Page
        </button>
      </div>
    </div>
  `;
  document.body.classList.remove('loading');
  throw error;
}

// Render the app
try {
  // Always render without StrictMode in production for better performance
  root.render(<App />);
  
  // Remove loading class after a short delay
  setTimeout(() => {
    document.body.classList.remove('loading');
  }, 200);
  
} catch (error) {
  console.error('Failed to render app:', error);
  rootElement.innerHTML = `
    <div style="padding: 20px; font-family: Arial; background: white; color: black; max-width: 800px; margin: 50px auto; min-height: 100vh; display: flex; align-items: center; justify-content: center;">
      <div style="text-align: center;">
        <h1 style="color: #d32f2f; margin-bottom: 10px; font-size: 32px;">Application Error</h1>
        <p style="color: #666; font-size: 18px; margin-bottom: 30px;">We're sorry, but something went wrong.</p>
        ${import.meta.env.DEV ? `
          <details style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: left; max-width: 600px;">
            <summary style="cursor: pointer; font-weight: bold; margin-bottom: 10px;">Error Details</summary>
            <p style="color: #d32f2f; font-family: monospace; margin: 10px 0; word-break: break-all;">${error instanceof Error ? error.message : 'Unknown error'}</p>
            <pre style="background: white; padding: 15px; border-radius: 4px; overflow: auto; font-size: 12px; border: 1px solid #ddd; max-height: 300px;">${error instanceof Error ? error.stack : String(error)}</pre>
          </details>
        ` : ''}
        <div style="margin-top: 30px;">
          <button onclick="window.location.reload()" style="padding: 12px 32px; background: #4F7CFF; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 600; box-shadow: 0 2px 8px rgba(79, 124, 255, 0.3); margin-right: 15px;">
            Reload Page
          </button>
          <a href="/" style="display: inline-block; padding: 12px 32px; color: #4F7CFF; text-decoration: none; border: 2px solid #4F7CFF; border-radius: 8px; font-size: 16px; font-weight: 600;">
            Go Home
          </a>
        </div>
      </div>
    </div>
  `;
  document.body.classList.remove('loading');
}
