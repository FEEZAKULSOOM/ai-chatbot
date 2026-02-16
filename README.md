
<div align="center">
  
![Banner](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=250&section=header&text=AI%20Chat%20Assistant&fontSize=50&fontColor=ffffff&animation=twinkling)

<p align="center">
  <a href="#-features"><img src="https://img.shields.io/badge/Features-6366f1?style=for-the-badge&logo=starship&logoColor=white"/></a> •
  <a href="#-live-demo"><img src="https://img.shields.io/badge/Live_Demo-0ea5e9?style=for-the-badge&logo=github&logoColor=white"/></a> •
  <a href="#-documentation"><img src="https://img.shields.io/badge/Documentation-8b5cf6?style=for-the-badge&logo=gitbook&logoColor=white"/></a>
</p>

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Groq](https://img.shields.io/badge/Groq-LLM-ff6b6b?style=flat-square&logo=groq&logoColor=white)](https://groq.com)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=500&size=22&duration=3000&pause=1000&color=6366f1&center=true&vCenter=true&width=600&lines=A+modern%2C+responsive+AI+chat+assistant;Built+with+React+19+%26+Groq+LLM;Features+voice+recognition+%2B+dark+mode;Real-time+streaming+responses" alt="Typing SVG" />
</p>

</div>

---

## 📋 Table of Contents

<div align="center">

| Section | Description |
|---------|-------------|
| [✨ Features](#-features) | Key functionalities and capabilities |
| [🚀 Live Demo](#-live-demo) | See it in action |
| [📸 Screenshots](#-screenshots) | Visual preview |
| [⚙️ Tech Stack](#️-tech-stack) | Technologies and libraries |
| [📦 Installation](#-installation) | Setup and configuration guide |
| [🔧 Configuration](#-configuration) | Environment setup |
| [📁 Project Structure](#-project-structure) | File organization |
| [🌐 API Integration](#-api-integration) | Groq API details |
| [📄 License](#-license) | MIT License |

</div>

---

## ✨ Features

<div align="center">

<img src="https://via.placeholder.com/800x400/1e293b/ffffff?text=AI+Chat+Assistant+Interface" width="100%" style="border-radius: 12px;"/>

</div>

### 🎯 **Core Capabilities**

| Feature | Description | Status |
|---------|-------------|--------|
| 🌓 **Dark/Light Mode** | Seamless theme switching with CSS variables | ✅ |
| 🎤 **Voice Input** | Speech recognition for hands-free interaction | ✅ |
| ⚡ **Streaming Responses** | Real-time token-by-token response display | ✅ |
| 💬 **Chat History** | Persistent conversation tracking | ✅ |
| ⌨️ **Enter to Send** | Keyboard shortcut for quick submissions | ✅ |
| 📱 **Responsive Design** | Mobile-optimized layout with collapsible sidebar | ✅ |
| 🎨 **Loading Animations** | Shimmer effect during API calls | ✅ |
| 🔄 **Conversation Management** | New chat creation and history navigation | ✅ |

---

## 🚀 Live Demo

<div align="center">

### 🌐 **Experience the AI Assistant Live**

**👉 [https://yourusername.github.io/ai-chat-assistant](https://yourusername.github.io/ai-chat-assistant)**

| Test Credentials | |
|-----------------|-|
| **API Key Required** | Get your free key at [Groq Console](https://console.groq.com) |

</div>

---

## ⚙️ Tech Stack

<div align="center">

### 🚀 **Core Technologies**

<table align="center">
  <tr>
    <td align="center" width="120">
      <img src="https://skillicons.dev/icons?i=react" width="60" height="60" alt="React" />
      <br><b>React 19</b>
      <br><sub>UI Library</sub>
    </td>
    <td align="center" width="120">
      <img src="https://skillicons.dev/icons?i=js" width="60" height="60" alt="JavaScript" />
      <br><b>JavaScript</b>
      <br><sub>ES6+</sub>
    </td>
    <td align="center" width="120">
      <img src="https://skillicons.dev/icons?i=css" width="60" height="60" alt="CSS3" />
      <br><b>CSS3</b>
      <br><sub>Custom Properties</sub>
    </td>
    <td align="center" width="120">
      <img src="https://skillicons.dev/icons?i=vite" width="60" height="60" alt="Vite" />
      <br><b>Vite 6</b>
      <br><sub>Build Tool</sub>
    </td>
  </tr>
</table>

### 📦 **Key Libraries & APIs**

| Category | Technologies |
|----------|--------------|
| 🤖 **AI Provider** | Groq API (Llama 3.3 70B) |
| 🎤 **Voice Recognition** | Web Speech API |
| 🎨 **Icons** | React Icons |
| 🎭 **Animations** | CSS Keyframes |
| 🌓 **Theming** | CSS Variables, Media Queries |
| 🚀 **Deployment** | GitHub Pages |

</div>

---

## 📦 Installation

### 📋 **Prerequisites**

- Node.js (v18 or higher)
- npm or yarn
- Groq API key (free)

### ⚡ **Quick Setup**

```bash
# 1️⃣ Clone the repository
git clone https://github.com/yourusername/ai-chat-assistant.git

# 2️⃣ Navigate to project directory
cd ai-chat-assistant

# 3️⃣ Install dependencies
npm install

# 4️⃣ Create environment file
cp .env.example .env

# 5️⃣ Add your Groq API key to .env
# VITE_GROQ_API_KEY=gsk_your_api_key_here

# 6️⃣ Start development server
npm run dev

# 7️⃣ Build for production
npm run build
```

### 🔧 **Environment Configuration**

Create a `.env` file in the root directory:

```env
# Groq API Configuration
VITE_GROQ_API_KEY=gsk_your_api_key_here

# Optional: API endpoint (uses default if not specified)
VITE_GROQ_API_URL=https://api.groq.com/openai/v1/chat/completions
```

---

## 📁 Project Structure

```
📦 ai-chat-assistant/
├── 📂 public/
│   └── 📄 vite.svg
├── 📂 src/
│   ├── 📂 Components/
│   │   ├── 📂 ChatSection/
│   │   │   ├── 📄 ChatSection.jsx
│   │   │   └── 🎨 ChatSection.css
│   │   ├── 📂 SideBar/
│   │   │   ├── 📄 SideBar.jsx
│   │   │   └── 🎨 SideBar.css
│   │   ├── 📂 DarkMode/
│   │   │   ├── 📄 DarkMode.jsx
│   │   │   └── 🎨 DarkMode.css
│   │   └── 📂 Separation/
│   │       ├── 📄 Separation.jsx
│   │       └── 🎨 Separation.css
│   ├── 📂 context/
│   │   └── 📄 UserContext.jsx
│   ├── 📄 groq.js
│   ├── 📄 App.jsx
│   ├── 🎨 App.css
│   ├── 📄 main.jsx
│   └── 🎨 index.css
├── 📄 .env.example
├── 📄 .gitignore
├── 📄 package.json
├── 📄 README.md
└── 📄 vite.config.js
```

---

## 🌐 API Integration

### Groq LLM Configuration

The application uses Groq's Llama 3.3 70B model for AI responses with streaming support.

| Parameter | Value |
|-----------|-------|
| **Model** | `llama-3.3-70b-versatile` |
| **Temperature** | 0.7 |
| **Max Tokens** | 1024 |
| **Streaming** | Enabled |
| **Rate Limits** | Free tier (30 requests/min) |

### API Call Example

```javascript
// Streaming response handling
const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${API_KEY}`
  },
  body: JSON.stringify({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
    max_tokens: 1024,
    stream: true
  })
});
```

---

## 🚀 Deploy to GitHub Pages

### Step 1: Configure vite.config.js

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ai-chat-assistant/', // Replace with your repository name
})
```

### Step 2: Install gh-pages

```bash
npm install gh-pages --save-dev
```

### Step 3: Update package.json

```json
{
  "name": "ai-chat-assistant",
  "homepage": "https://yourusername.github.io/ai-chat-assistant",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 4: Deploy

```bash
npm run deploy
```

---

## 🎨 Theme System

### CSS Variables Architecture

```css
/* Dark Mode (Default) */
.darkMode {
  --color: white;
  --background-color: #111827;
  --btn-background-color: white;
  --btn-color: #1e293b;
  --hover-btn-background-color: #f1f5f9c4;
}

/* Light Mode */
.lightMode {
  --color: black;
  --background-color: #ffffffbf;
  --btn-background-color: #1e293b;
  --btn-color: white;
  --hover-btn-background-color: #334155e2;
}
```

---

## 🔧 Performance Optimizations

- **Minimum Loader Time**: 1 second minimum to prevent UI flashing
- **Responsive Images**: SVG icons for scalability
- **CSS Variables**: Efficient theme switching
- **Debounced Input**: Prevents excessive re-renders
- **Lazy Loading**: Component-based code splitting

---

## 📄 License

<div align="center">

MIT License © 2026 **AI Chat Assistant**

### 🌟 **Show your support**

If you like this project, please consider giving it a ⭐ on GitHub!

[![GitHub stars](https://img.shields.io/github/stars/yourusername/ai-chat-assistant?style=social)](https://github.com/yourusername/ai-chat-assistant)

---

### 📬 **Contact Me**

[![Email](https://img.shields.io/badge/Email-your.email%40gmail.com-6366f1?style=for-the-badge&logo=gmail)](mailto:your.email@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-yourusername-0ea5e9?style=for-the-badge&logo=github)](https://github.com/yourusername)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Your_Name-8b5cf6?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/yourusername)

---

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6366f1,100:8b5cf6&height=150&section=footer" width="100%"/>

</div>
```