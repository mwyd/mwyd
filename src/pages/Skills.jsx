import SkillStack from '../components/SkillStack'
import skills from '../data/skills'

export default function SkillsPage() {
  return (
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
  )
}