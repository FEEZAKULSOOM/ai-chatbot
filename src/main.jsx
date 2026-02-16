import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'

/**
 * Application Entry Point
 * 
 * @description Renders the React application with:
 * - StrictMode: Development checks and warnings
 * - UserContext: Global state management for chat data
 * - App: Root component
 */
createRoot(document.getElementById('root')).render(
  <UserContext>     {/* Provides chat state to all components */}
    <App />         {/* Main application component */}
  </UserContext>
)