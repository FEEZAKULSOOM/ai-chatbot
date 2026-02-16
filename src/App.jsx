
import SideBar from './Components/SideBar/SideBar'
import ChatSection from './Components/ChatSection/ChatSection'
import Separation from './Components/Separation/Separation'

/**
 * Main Application Component
 * 
 * @component
 * @description Orchestrates the three primary layout sections:
 * - SideBar: Navigation and chat history
 * - Separation: Visual divider between sidebar and chat
 * - ChatSection: Main chat interface with AI interaction
 * 
 * @returns {JSX.Element} The complete application layout
 */
function App() {
  return (
    <>
      <SideBar />        {/* Left panel - navigation & history */}
      <Separation />     {/* Visual divider - 6px separator */}
      <ChatSection />    {/* Main panel - chat interface */}
    </>
  )
}

export default App