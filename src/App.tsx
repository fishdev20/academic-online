import Footer from 'components/Footer.tsx'
import NavBar from 'components/NavBar'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

function App() {
  const { pathname } = useLocation()

  if (pathname === '/') {
    return <Navigate to="/explore" />
  }

  return (
    <>
      <NavBar />
      <main className="mx-auto my-36 h-full min-h-screen max-w-screen-2xl px-6">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
