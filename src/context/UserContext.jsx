/**
 * User Context Module
 * 
 * @module UserContext
 * @description Global state management for the chat application
 * Provides centralized data store and functions for all chat-related operations
 * 
 * @context dataContext - The context object for consuming in components
 * @provider UserContext - Provider component that wraps the app
 */

import main from '../groq.js';
import React, { createContext, useState } from 'react';

/**
 * Create the context object
 * This will be imported by components that need access to global state
 */
export const dataContext = React.createContext();

/**
 * User Context Provider Component
 * 
 * @component
 * @description Wraps the application and provides global state management
 * Manages:
 * - Chat input and output states
 * - Conversation history
 * - Loading states with minimum display time
 * - API communication with Groq
 * 
 * Features:
 * - Minimum loader display time (1 second) for better UX
 * - Error handling for API calls
 * - Message formatting (removes markdown symbols)
 * - Conversation history tracking
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components to be wrapped
 * @returns {JSX.Element} Context provider component
 */
function UserContext({ children }) {
    // ============================================
    // 🎯 STATE MANAGEMENT
    // ============================================

    /** @state {string} input - Current value of the chat input field */
    const [input, setInput] = useState("");

    /** @state {boolean} showRes - Toggle between welcome screen and chat view */
    const [showRes, setShowRes] = useState(false);

    /** @state {string} output - Current AI response to display */
    const [output, setOutput] = useState("");

    /** @state {boolean} loading - Indicates if API request is in progress */
    const [loading, setLoading] = useState(false);

    /** @state {string} recentPrompt - The last prompt sent by the user */
    const [recentPrompt, setRecentPrompt] = useState("");

    /** @state {Array} previousPrompts - History of all user prompts */
    const [previousPrompts, setPreviousPrompts] = useState([]);

    // ============================================
    // 🔧 HELPER FUNCTIONS
    // ============================================

    /**
     * Start a new chat session
     * Resets the UI to welcome screen and clears loading state
     * 
     * @function newChat
     * @returns {void}
     */
    function newChat() {
        setShowRes(false);   // Return to welcome screen
        setLoading(false);   // Ensure loader is hidden
    }

    // ============================================
    // 📤 CORE FUNCTIONALITY
    // ============================================

    /**
     * Send user input to Groq API and handle response
     * 
     * @async
     * @function sendData
     * @param {string} input - The user's message/prompt
     * @returns {Promise<void>}
     * 
     * @description
     * 1. Shows loading state immediately for better UX
     * 2. Saves prompt to history
     * 3. Calls Groq API via main() function
     * 4. Ensures loader shows for minimum 1 second (prevents flashing)
     * 5. Formats response (removes markdown symbols)
     * 6. Updates UI with response
     * 
     * @example
     * sendData("What is React?");
     */
    async function sendData(input) {
        // Validate input
        if (!input?.trim()) return;

        // Reset output and show loading state immediately
        setOutput("");
        setLoading(true);                       // Show loader immediately
        
        // Add to conversation history (avoid duplicates)
        if (!previousPrompts.includes(input)) {
            setPreviousPrompts(prev => [...prev, input]);
        }

        try {
            // Record start time for minimum loading duration
            const startTime = Date.now();
            const MIN_LOAD_TIME = 1000;          // Show loader for at least 1 second
            
            // ====================================
            // 🚀 API CALL
            // ====================================
            const response = await main(input);   // Get response from Groq
            
            // ====================================
            // ⏱️ LOADER TIMING CONTROL
            // ====================================
            // Calculate how long API took
            const elapsedTime = Date.now() - startTime;
            
            // If API was too fast, wait remaining time
            // This prevents loader "flashing" for quick responses
            if (elapsedTime < MIN_LOAD_TIME) {
                await new Promise(resolve => 
                    setTimeout(resolve, MIN_LOAD_TIME - elapsedTime)
                );
            }
            
            // ====================================
            // 📝 RESPONSE FORMATTING
            // ====================================
            // Clean up markdown formatting:
            // - Removes ** (bold markers)
            // - Removes * (italic markers)
            // This provides cleaner text display
            const cleanResponse = response
                .split('**').join('')     // Remove bold markers
                .split('*').join('');      // Remove italic markers
            
            // Update UI with the response
            setOutput(cleanResponse);
            setShowRes(true);               // Switch to chat view
            setRecentPrompt(input);          // Save as most recent prompt
            
            // Clear input field for next message
            setInput("");
            
        } catch (error) {
            // ====================================
            // 🚨 ERROR HANDLING
            // ====================================
            console.error("❌ Error in sendData:", error);
            
            // Show user-friendly error message
            setOutput("Sorry, I encountered an error. Please try again.");
            setShowRes(true);                 // Still show chat view with error
            setRecentPrompt(input);            // Show what caused the error
            setInput("");                       // Clear input field
            
        } finally {
            // ====================================
            // ✅ CLEANUP
            // ====================================
            setLoading(false);                  // Hide loader
        }
    }

    // ============================================
    // 📦 CONTEXT VALUE
    // ============================================
    
    /**
     * Context value object containing all state and functions
     * This will be available to all consuming components
     */
    const contextValue = {
        // State values
        input,              // Current input field value
        showRes,            // Whether to show chat or welcome screen
        output,             // Current AI response
        loading,            // Loading state indicator
        recentPrompt,       // Most recent user prompt
        previousPrompts,    // History of all prompts
        
        // State setters (exposed for component control)
        setInput,
        setShowRes,
        setOutput,
        setLoading,
        setRecentPrompt,
        setPreviousPrompts,
        
        // Core functions
        sendData,           // Send message to AI
        newChat             // Start new conversation
    };

    // ============================================
    // 🎨 RENDER
    // ============================================

    return (
        <dataContext.Provider value={contextValue}>
            {children}  {/* Render child components with access to context */}
        </dataContext.Provider>
    );
}

export default UserContext;