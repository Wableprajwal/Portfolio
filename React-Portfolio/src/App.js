import { Routes, Route, useLocation } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { LightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"

//Components
import Main from './components/Main';
import EducationPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import ProjectsPage from './components/ProjectsPage';
import MySkillPage from './components/MySkillPage';
import { AnimatePresence } from "framer-motion"
import SoundBar from "./subComponents/SoundBar"

function App() {
  const location = useLocation();
  
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={LightTheme}>
        <SoundBar />
        {/*frame motion and animation on page change*/}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<MySkillPage />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  )
}

export default App

