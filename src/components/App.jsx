
import { HashRouter, Routes, Route } from 'react-router-dom'
import ThemeProvider from './ThemeProvider'
import NavBar from './NavBar'
import HomePage from '../pages/Home'
import ProjectsPage from '../pages/Projects'
import SkillsPage from '../pages/Skills'
import NotFoundPage from '../pages/NotFound'

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="flex flex-col w-full h-screen">
          <NavBar />
          <main className="w-full h-full max-w-hd m-auto px-4 mt-14 overflow-auto">
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
              <Route
                path="*"
                element={<NotFoundPage />}
              />
            </Routes>
          </main>
        </div>
      </HashRouter>
    </ThemeProvider>
  )
}