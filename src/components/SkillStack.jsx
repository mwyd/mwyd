export default function SkillStack({ name, abilities }) {
  return (
    <div className="p-4 bg-white-400 dark:bg-black-700 rounded-sm">
      <h2 className="pb-2 text-lg">
        {name}
      </h2>
      <ul className="ml-4 list-disc text-sm">
        {abilities.map((ability, i) => 
          <li key={`ability-${i}`}>
            {ability}
          </li>
        )}
      </ul>
    </div>
  )
}