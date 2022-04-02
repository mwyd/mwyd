
import { HashRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import HomePage from '../pages/Home'
import ProjectsPage from '../pages/Projects'
import SkillsPage from '../pages/Skills'
import ThemeProvider from './ThemeProvider'

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <main className="flex flex-col w-full h-screen">
          <NavBar />
          <div className="w-full h-full max-w-hd m-auto pt-14 p-4">
            <Routes>
              <Route 
                path="/" 
                element={<HomePage />}
              />
              <Route 
                path="/projects" 
                element={<ProjectsPage />}
              />
              <Route 
                path="/skills" 
                element={<SkillsPage />}
              />
            </Routes>
          </div>
        </main>
      </HashRouter>
    </ThemeProvider>
  )
}