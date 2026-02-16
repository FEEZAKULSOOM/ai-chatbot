import React, { useEffect, useState } from 'react'
import { MdLightMode } from "react-icons/md";
import './DarkMode.css';
import { MdNightlight } from "react-icons/md";

/**
 * Dark Mode Toggle Component
 * 
 * @component
 * @description Provides theme switching functionality
 * Features:
 * - Toggles between light and dark modes
 * - Updates body class for CSS variable switching
 * - Icon changes based on current mode
 * - Persistent across component lifecycle
 * 
 * @returns {JSX.Element} Theme toggle button
 */
function DarkMode() {
    // ============================================
    // 🎯 STATE MANAGEMENT
    // ============================================
    
    const [mode, setMode] = useState("darkMode");

    // ============================================
    // 🔧 HELPER FUNCTIONS
    // ============================================

    /**
     * Toggle between light and dark themes
     */
    function toggle() {
        if (mode === "darkMode") {
            setMode("lightMode");
        } else {
            setMode("darkMode");
        }
    }

    // ============================================
    // ⚡ EFFECTS
    // ============================================

    /**
     * Apply theme class to body element whenever mode changes
     * This triggers CSS variable switching throughout the app
     */
    useEffect(() => {
        document.body.className = mode;
    }, [mode]);

    // ============================================
    // 🎨 RENDER
    // ============================================

    return (
        <button className='darkModeBtn' onClick={() => toggle()}>
            {/* Show sun icon in dark mode (to switch to light), moon in light mode */}
            {mode === "darkMode" ? <MdLightMode /> : <MdNightlight />}
        </button>
    )
}

export default DarkMode