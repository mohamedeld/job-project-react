import { Link } from "react-router-dom"


function NotFound() {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center '>
      <h1 className='font-bold text-2xl mb-4'>Not Found</h1>
      
        
        <Link to="/" className="text-indigo-500 hover:text-indigo-600 hover:underline text-xl block">Go to home</Link>
      
    </div>
  )
}

export default NotFound