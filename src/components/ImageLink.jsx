import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

export default function ImageLink({ title, url }) {
  const { themeColor } = useContext(ThemeContext)

  return (
    <a
      className="flex items-center mx-2 link-image"
      href={url}
      title={title}
      target="_blank"
      rel="noreferrer"
    >
      <img 
        className="w-[20px] h-[20px]" 
        src={`/img/${title}-${themeColor}.png`}
        alt={title}
      />
    </a>
  )
}