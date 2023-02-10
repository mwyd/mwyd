import React from "react";
import { Skill as SkillType } from "../types/skill";

const SkillStack: React.FC<SkillType> = ({ name, stack }) => {
  return (
    <div className="p-4 bg-white-400 dark:bg-black-700 rounded-sm">
      <h2 className="pb-2 text-lg">
        {name}
      </h2>
      <ul className="ml-4 list-[circle] text-sm">
        {stack.map((tech, i) =>
          <li key={`tech-${i}`}>
            {tech}
          </li>
        )}
      </ul>
    </div>
  );
}

export default SkillStack;