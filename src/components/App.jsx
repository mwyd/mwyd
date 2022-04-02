
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
          <div className="w-full h-full mt-14 overflow-auto">
            <main className="w-full max-w-hd mx-auto px-4">
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
        </div>
      </HashRouter>
    </ThemeProvider>
  )
}