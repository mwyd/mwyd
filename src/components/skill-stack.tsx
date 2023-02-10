import React from "react";
import { Skill as SkillType } from "../types/skill";
import BasePanel from "./containers/base-panel";

export default function SkillStack({ name, stack }: SkillType) {
  return (
    <BasePanel title={name}>
      <ul className="ml-4 list-[circle] text-sm">
        {stack.map((tech, i) =>
          <li key={`tech-${i}`}>
            {tech}
          </li>
        )}
      </ul>
    </BasePanel>
  );
}