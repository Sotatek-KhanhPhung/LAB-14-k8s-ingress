import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import TutorialsList from "./pages/TutorialsList";
import AddTutorial from "./pages/AddTutorial";

export default function App() {
  const linkClass = ({ isActive }) =>
    `font-semibold text-white/90 hover:text-white transition ${
      isActive ? "text-white underline underline-offset-4" : ""
    }`;

  return (
    <BrowserRouter>
      {/* Navbar full width */}
      <header className="bg-blue-600">
        <div className="w-full px-6 py-4">
          <nav className="flex items-center gap-8">
            <NavLink to="/tutorials" className={linkClass}>
              Tutorials
            </NavLink>
            <NavLink to="/add" className={linkClass}>
              Add
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Page container */}
      <main className="w-full bg-white min-h-[calc(100vh-64px)]">
        <div className="w-full px-6 py-10">
          <Routes>
            <Route path="/" element={<Navigate to="/tutorials" replace />} />
            <Route path="/tutorials" element={<TutorialsList />} />
            <Route path="/add" element={<AddTutorial />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

