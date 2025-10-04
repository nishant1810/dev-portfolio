import { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from 'react-router-dom';
import './index.css';

import LoadingScreen from './components/common/LoadingScreen';
import Navbar from './components/layout/Navbar';
import MobileMenu from './components/layout/MobileMenu';
import Home from './components/Home/Home';
import Home2 from './components/Home/Home2';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Projects from './components/sections/Project';
import ContactMe from './components/sections/ContactMe';
import Footer from './components/layout/Footer';

// Layout component wraps the main structure: navbar, mobile menu, footer, and page content (Outlet)
const Layout = ({ menuOpen, setMenuOpen }) => (
  <div className="min-h-screen bg-black text-gray-100 transition-opacity duration-700">
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <div className="pt-20 px-4">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Define routes with React Router v6+
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout menuOpen={menuOpen} setMenuOpen={setMenuOpen} />,
      children: [
        {
          index: true,
          element: (
            <>
              <Home />
              <Home2 />
              <About />
              <Skills />
              <Education />
              <Projects />
              <ContactMe />
            </>
          ),
        },
        { path: 'about', element: <About /> },
        { path: 'skills', element: <Skills /> },
        { path: 'project', element: <Projects /> },
        { path: 'education', element: <Education /> },
        { path: 'contactMe', element: <ContactMe /> },
        { path: '*', element: <Navigate to="/" replace /> },
      ],
    },
  ]);

  // Optional: This useEffect forces URL to '/' when loading is complete and path is '/'
  useEffect(() => {
    if (isLoaded && window.location.pathname === '/') {
      window.history.pushState({}, '', '/');
    }
  }, [isLoaded]);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {isLoaded && <RouterProvider router={router} />}
    </>
  );
}
