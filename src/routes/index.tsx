import React from "react";
import { createHashRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import ProjectsPage from "../pages/Projects";
import SkillsPage from "../pages/Skills";
import NotFoundPage from "../pages/NotFound";

const router = createHashRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/projects',
    element: <ProjectsPage/>
  },
  {
    path: '/skills',
    element: <SkillsPage/>
  },
  {
    path: '*',
    element: <NotFoundPage/>
  }
]);

export default router;