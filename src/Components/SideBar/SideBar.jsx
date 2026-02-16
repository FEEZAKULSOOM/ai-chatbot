import React, { useState, useContext } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { LuBotMessageSquare } from "react-icons/lu";
import { dataContext } from '../../context/UserContext';
import './SideBar.css';

/**
 * Sidebar Navigation Component
 * 
 * @component
 * @description Provides navigation and chat history management
 * Features:
 * - Collapsible menu with hamburger toggle
 * - New chat creation
 * - Previous conversations list
 * - Responsive design (hides on mobile)
 * 
 * @returns {JSX.Element} Sidebar with navigation and history
 */
function SideBar() {
  // ============================================
  // 🎯 STATE & CONTEXT
  // ============================================
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { sendData, previousPrompts, newChat } = useContext(dataContext);

  // ============================================
  // 🔧 HELPER FUNCTIONS
  // ============================================

  /**
   * Load a previous conversation into the chat
   * 
   * @async
   * @param {string} prompt - The previous prompt to load
   */
  async function loadPreviousPrompts(prompt) {
    sendData(prompt);
  }

  // ============================================
  // 🎨 RENDER
  // ============================================

  return (
    <div className="sideBar">
      {/* Fixed header - always visible */}
      <div className="sidebar-header">
        <GiHamburgerMenu 
          id="ham" 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar menu"
        />
        <div className="newChat" onClick={() => newChat()}>
          <FaPlus />
          {sidebarOpen && <p>New Chat</p>}
        </div>
      </div>
      
      {/* Scrollable content area - chat history */}
      <div className="sidebar-content">
        {previousPrompts?.map((item, index) => (
          <div 
            key={index} 
            className="recentChats" 
            onClick={() => loadPreviousPrompts(item)}
          >
            <LuBotMessageSquare />
            {sidebarOpen && <p>{item.slice(0, 16) + "..."}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;