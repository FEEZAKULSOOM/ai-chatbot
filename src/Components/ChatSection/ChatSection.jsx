import React, { useContext, useEffect, useState } from 'react';
import './ChatSection.css';
import DarkMode from '../Darkmode/DarkMode';
import { IoIosSend } from "react-icons/io";
import { dataContext } from '../../context/UserContext';
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { RiChatVoiceAiFill } from "react-icons/ri";

/**
 * Main Chat Interface Component
 * 
 * @component
 * @description Core chat functionality with:
 * - Text input with send button
 * - Voice input (speech recognition)
 * - Message display with user/AI avatars
 * - Loading animations
 * - Responsive design
 * 
 * Features:
 * - Enter key submission
 * - Conditional button display (mic/send)
 * - Real-time voice transcription
 * - Streaming response display
 * 
 * @returns {JSX.Element} Complete chat interface
 */
function ChatSection() {
    // ============================================
    // 🎯 CONTEXT & STATE
    // ============================================
    
    // Get context values from global state
    const { sendData, input, setInput, showRes, output, loading, recentPrompt } = useContext(dataContext);
    
    // Voice feature states
    const [isListening, setIsListening] = useState(false);
    const [recognition, setRecognition] = useState(null);

    // ============================================
    // 🎤 VOICE RECOGNITION SETUP
    // ============================================

    /**
     * Initialize speech recognition on component mount
     * Checks browser support and sets up event handlers
     */
    useEffect(() => {
        // Check for browser support (Webkit prefix for Safari/Chrome)
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognitionInstance = new SpeechRecognition();
            
            // Configure recognition settings
            recognitionInstance.continuous = false;     // Stop after pause
            recognitionInstance.interimResults = false; // Only final results
            recognitionInstance.lang = 'en-US';         // English (US)
            
            // Handle successful transcription
            recognitionInstance.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setInput(transcript);                    // Set input field with spoken text
                setIsListening(false);
            };
            
            // Error handling
            recognitionInstance.onerror = () => setIsListening(false);
            recognitionInstance.onend = () => setIsListening(false);
            
            setRecognition(recognitionInstance);
        }
        
        // Cleanup on unmount
        return () => {
            if (recognition) {
                recognition.stop();
            }
        };
    }, [setInput, recognition]);

    // ============================================
    // 🔧 HELPER FUNCTIONS
    // ============================================

    /**
     * Toggle voice recognition on/off
     */
    const toggleListening = () => {
        if (isListening) {
            recognition?.stop();
        } else {
            recognition?.start();
            setIsListening(true);
        }
    };

    // ============================================
    // 🎨 RENDER
    // ============================================

    return (
        <div className="chatSection">
            {/* ===== TOP SECTION - Messages/Welcome ===== */}
            <div className="topSection">
                {!showRes ? (
                    // Welcome screen (no conversation yet)
                    <div className='headings'>
                        <span>HELLO MASTER,</span>
                        <span>I'm Your Assistant</span>
                        <span>How can I help you today?</span>
                    </div>
                ) : (
                    // Active conversation display
                    <div className='outputRes'>
                        {/* User message */}
                        <div className="userBox">
                            <FaUserAlt />
                            <p>{recentPrompt}</p>
                        </div>
                        
                        {/* AI response with loading state */}
                        <div className="aiBox">
                            <RiChatVoiceAiFill />
                            {loading ? (
                                // Loading animation (shimmer effect)
                                <div className="loading">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                // Actual response
                                <p>{output}</p>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* ===== BOTTOM SECTION - Input Controls ===== */}
            <div className="bottomSection">
                {/* Text input field */}
                <input 
                    onChange={(e) => setInput(e.target.value)} 
                    onKeyDown={(e) => {
                        // Submit on Enter key
                        if (e.key === 'Enter' && input?.trim()) {
                            sendData(input);
                        }
                    }}
                    value={input} 
                    type="text" 
                    placeholder='Enter a prompt' 
                />
                
                {/* Conditional button: Mic (when empty) / Send (when has text) */}
                
                {/* 🎤 MICROPHONE BUTTON - Shown when input is empty */}
                {!input?.trim() && (
                    <button 
                        className={`mic-btn ${isListening ? 'listening' : ''}`}
                        onClick={toggleListening}
                        disabled={!recognition} // Disable if browser doesn't support
                    >
                        <FaMicrophoneAlt />
                    </button>
                )}

                {/* 📤 SEND BUTTON - Shown when input has text */}
                {input?.trim() && (
                    <button 
                        className="sendBtn" 
                        onClick={() => sendData(input)}
                    >
                        <IoIosSend />
                    </button>
                )}
                
                {/* 🌓 Dark mode toggle */}
                <DarkMode />
            </div>
        </div>
    );
}

export default ChatSection;