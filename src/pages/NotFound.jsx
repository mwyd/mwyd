import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="w-full h-main-full flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
        404
      </h1>
      <button 
        className="pt-4 link-text"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </div>
  )
}