import Tag from './Tag'
import ExternalLink from './ExternalLink'

export default function Project({ name, description, tags, links }) {
  return (
    <div className="p-4 bg-white-400 dark:bg-black-700 rounded-sm">
      <h2 className="pb-2 text-lg">
        {name}
      </h2>
      <p className="text-sm pb-3">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 pb-3">
        {tags.map((tag, i) =>
          <Tag
            key={`tag-${i}`}
            title={tag}
          />
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {links.map((data, i) =>
          <ExternalLink
            key={`link-${i}`}
            {...data}
          />
        )}
      </div>
    </div>
  )
}