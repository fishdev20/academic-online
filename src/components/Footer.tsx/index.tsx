import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className=" mx-auto mb-6 max-w-screen-2xl rounded-xl bg-gray-900 px-6 py-8 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row md:px-6">
        <div className="flex items-center space-x-4">
          <Link className="text-white hover:text-gray-300" to="#">
            About us
          </Link>
        </div>
        <p className="mt-4 text-sm text-gray-300 md:mt-0">
          © 2024 Minh Nguyen.
        </p>
      </div>
    </footer>
  )
}

export default Footer
