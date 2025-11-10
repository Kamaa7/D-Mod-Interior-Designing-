import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Global error handler
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

// Get root element
const rootElement = document.getElementById("root");

if (!rootElement) {
  document.body.innerHTML = `
    <div style="padding: 20px; font-family: Arial; max-width: 600px; margin: 50px auto; text-align: center; min-height: 100vh; display: flex; align-items: center; justify-content: center;">
      <div>
        <h1 style="color: #d32f2f;">Loading Error</h1>
        <p>Unable to initialize application. Please refresh the page.</p>
        <button onclick="window.location.reload()" style="padding: 12px 24px; background: #4F7CFF; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; margin-top: 20px;">
          Reload Page
        </button>
      </div>
    </div>
  `;
  throw new Error("Root element not found!");
}

// Show loading state
rootElement.innerHTML = `
  <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: Arial; background: #fafafa;">
    <div style="text-align: center;">
      <div style="width: 50px; height: 50px; border: 4px solid #f3f3f3; border-top: 4px solid #4F7CFF; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
      <p style="color: #666;">Loading...</p>
    </div>
  </div>
  <style>
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
`;

// Initialize and render
try {
  const root = createRoot(rootElement);
  root.render(<App />);
  
  // Remove loading class
  setTimeout(() => {
    document.body.classList.remove('loading');
  }, 100);
  
} catch (error) {
  console.error('Failed to render app:', error);
  rootElement.innerHTML = `
    <div style="padding: 20px; font-family: Arial; background: white; color: black; max-width: 800px; margin: 50px auto; min-height: 100vh; display: flex; align-items: center; justify-content: center;">
      <div style="text-align: center;">
        <h1 style="color: #d32f2f; margin-bottom: 10px; font-size: 32px;">Application Error</h1>
        <p style="color: #666; font-size: 18px; margin-bottom: 30px;">We're sorry, but something went wrong.</p>
        <button onclick="window.location.reload()" style="padding: 12px 32px; background: #4F7CFF; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 600; box-shadow: 0 2px 8px rgba(79, 124, 255, 0.3); margin-right: 15px;">
          Reload Page
        </button>
        <a href="/" style="display: inline-block; padding: 12px 32px; color: #4F7CFF; text-decoration: none; border: 2px solid #4F7CFF; border-radius: 8px; font-size: 16px; font-weight: 600;">
          Go Home
        </a>
      </div>
    </div>
  `;
  document.body.classList.remove('loading');
}
