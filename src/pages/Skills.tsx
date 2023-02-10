import React from "react";
import SkillStack from "../components/skill-stack";
import DefaultLayout from "../layouts/default-layout";
import skills from "../data/skills";

export default function SkillsPage() {
  return (
    <DefaultLayout>
      <section>
        <h2 className="text-4xl font-bold my-8 border-l-8 border-l-red-500 pl-2">
          Skills
        </h2>
        {skills.map((data, i) =>
          <div
            className="pb-4"
            key={`skill-${i}`}
          >
            <SkillStack {...data} />
          </div>
        )}
      </section>
    </DefaultLayout>
  );
}