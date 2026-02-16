/**
 * Groq API Integration Module
 * 
 * @module groq
 * @description Handles all communication with Groq's LLM API
 * Features:
 * - Streaming responses for real-time output
 * - Error handling with user-friendly messages
 * - Environment variable validation
 * - Configurable model parameters
 */

// ============================================
// 🔧 CONFIGURATION
// ============================================

// Load API key from environment variables (Vite format)
const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

// Validate API key on module load
if (!API_KEY) {
  console.error("❌ VITE_GROQ_API_KEY not found in .env file!");
  console.error("📝 Create .env file in project root with: VITE_GROQ_API_KEY=gsk_your-key-here");
}

// ============================================
// 🚀 PRIMARY API FUNCTION
// ============================================

/**
 * Send a prompt to Groq API and receive streaming response
 * 
 * @async
 * @param {string} prompt - User input/question for the AI
 * @returns {Promise<string>} Complete response from the AI
 * @throws {Error} If API key missing, network error, or API returns error
 * 
 * @example
 * try {
 *   const response = await main("What is React?");
 *   console.log(response);
 * } catch (error) {
 *   console.error("Failed:", error.message);
 * }
 */
async function main(prompt = "hello") {
  // Validate API key before making request
  if (!API_KEY) {
    throw new Error("❌ API key is missing. Check your .env file!");
  }

  try {
    console.log("🤔 Asking Groq with model: llama-3.3-70b-versatile");
    
    // Make streaming request to Groq API
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",  // Free tier model with high limits
        messages: [
          { role: "user", content: prompt }
        ],
        temperature: 0.7,      // Controls randomness (0 = deterministic, 1 = creative)
        max_tokens: 1024,       // Maximum response length
        stream: true            // Enable streaming for real-time output
      })
    });

    // Handle HTTP errors
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || `HTTP error: ${response.status}`);
    }

    // ============================================
    // 📡 STREAMING RESPONSE HANDLER
    // ============================================
    
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullResponse = "";

    console.log("📝 Response streaming...");
    
    // Read the stream chunk by chunk
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      // Decode and process the chunk
      const chunk = decoder.decode(value);
      const lines = chunk.split("\n").filter(line => line.trim() && line.startsWith("data: "));

      for (const line of lines) {
        const data = line.slice(6); // Remove "data: " prefix
        
        if (data === "[DONE]") continue; // Skip end marker
        
        try {
          const parsed = JSON.parse(data);
          const content = parsed.choices[0]?.delta?.content || "";
          
          if (content) {
            fullResponse += content;
            console.log(content); // Log each chunk (useful for debugging)
          }
        } catch (e) {
          // Ignore parsing errors for incomplete chunks
          // This is normal during streaming
        }
      }
    }

    console.log("\n✅ Response complete!");
    return fullResponse;

  } catch (error) {
    // ============================================
    // 🚨 ERROR HANDLING WITH USER-FRIENDLY MESSAGES
    // ============================================
    
    console.error("❌ Error:", error.message);
    
    // Provide helpful hints based on error type
    if (error.message.includes("401")) {
      console.error("🔑 Invalid API key. Check your .env file!");
    } else if (error.message.includes("429")) {
      console.error("⏳ Rate limited. Wait a moment and try again.");
    } else if (error.message.includes("fetch")) {
      console.error("🌐 Network error. Check your internet connection.");
    }
    
    throw error; // Re-throw for handling in component
  }
}

// ============================================
// 📤 EXPORTS
// ============================================

export default main;