export default function ExternalLink({ title, url }) {
  return (
    <a
      className="link-text link-text--external text-xs"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {title}
    </a>
  )
}