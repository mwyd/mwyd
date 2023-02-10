import React from "react";
import Project from '../components/project';
import projects from '../data/projects';
import DefaultLayout from "../layouts/default-layout";

const ProjectsPage: React.FC = () => {
  return (
    <DefaultLayout>
      <section>
        <h2 className="text-4xl font-bold my-8 border-l-8 border-l-red-500 pl-2">
          Projects
        </h2>
        {projects.map((data, i) =>
          <div
            className="pb-4"
            key={`project-${i}`}
          >
            <Project {...data} />
          </div>
        )}
      </section>
    </DefaultLayout>
  )
}

export default ProjectsPage;