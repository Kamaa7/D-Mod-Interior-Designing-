import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Global error handlers
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  if (event.error) {
    console.error('Error stack:', event.error.stack);
  }
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

// Get root element
const rootElement = document.getElementById("root");

if (!rootElement) {
  const errorHTML = `
    <div style="padding: 20px; font-family: Arial; max-width: 600px; margin: 50px auto; text-align: center; min-height: 100vh; display: flex; align-items: center; justify-content: center;">
      <div>
        <h1 style="color: #d32f2f;">Loading Error</h1>
        <p>Root element not found. Please refresh the page.</p>
        <button onclick="window.location.reload()" style="padding: 12px 24px; background: #4F7CFF; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; margin-top: 20px;">
          Reload Page
        </button>
      </div>
    </div>
  `;
  document.body.innerHTML = errorHTML;
  throw new Error("Root element not found!");
}

// Show immediate loading state
rootElement.innerHTML = `
  <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: system-ui, -apple-system, sans-serif; background: #fafafa;">
    <div style="text-align: center;">
      <div style="width: 50px; height: 50px; border: 4px solid #f3f3f3; border-top: 4px solid #4F7CFF; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
      <p style="color: #666; font-size: 16px;">Loading...</p>
    </div>
  </div>
  <style>
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
`;

// Initialize React
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

// Render the app with error handling
try {
  // Use setTimeout to ensure React has time to initialize
  root.render(<App />);
  
  // Remove loading class after a delay to ensure React has rendered
  setTimeout(() => {
    try {
      document.body.classList.remove('loading');
      // Check if React actually rendered something
      if (rootElement.children.length === 0 || rootElement.innerHTML.trim() === '') {
        console.warn('React app may not have rendered properly');
      }
    } catch (e) {
      console.warn('Error removing loading class:', e);
    }
  }, 500);
  
} catch (error) {
  console.error('Failed to render app:', error);
  console.error('Error details:', {
    message: error instanceof Error ? error.message : String(error),
    stack: error instanceof Error ? error.stack : undefined,
    name: error instanceof Error ? error.name : undefined
  });
  
  // Show error message
  rootElement.innerHTML = `
    <div style="padding: 20px; font-family: Arial; background: #fafafa; color: black; min-height: 100vh; display: flex; align-items: center; justify-content: center;">
      <div style="text-align: center; max-width: 600px; background: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <h1 style="color: #d32f2f; margin-bottom: 10px; font-size: 32px;">Application Error</h1>
        <p style="color: #666; font-size: 18px; margin-bottom: 20px;">We're sorry, but something went wrong while loading the application.</p>
        <p style="color: #999; font-size: 14px; margin-bottom: 30px; font-family: monospace; background: #f5f5f5; padding: 10px; border-radius: 4px; word-break: break-all;">
          ${error instanceof Error ? error.message : String(error)}
        </p>
        <div style="margin-top: 30px; display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
          <button onclick="window.location.reload()" style="padding: 12px 32px; background: #4F7CFF; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 600; box-shadow: 0 2px 8px rgba(79, 124, 255, 0.3);">
            Reload Page
          </button>
          <button onclick="localStorage.clear(); sessionStorage.clear(); window.location.reload();" style="padding: 12px 32px; background: #fff; color: #4F7CFF; border: 2px solid #4F7CFF; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 600;">
            Clear Cache & Reload
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.classList.remove('loading');
}
