import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    `whitespace-nowrap rounded-lg px-3 py-2 text-sm transition hover:-translate-y-0.5 hover:bg-white sm:text-base ${
      isActive ? 'bg-blue-600 text-white shadow-md' : 'text-slate-700 hover:text-blue-600'
    }`;

  return (
    <header className = "header gap-3">
        <NavLink to = "/" className = "flex min-w-max items-center justify-center rounded-lg bg-white px-4 py-2 font-bold shadow-md">
          <p className = "blue-gradient_text">
                Karthi Raju
            </p>

        </NavLink>
        <nav className = "flex flex-wrap justify-end gap-1 rounded-xl border border-white/30 bg-white/65 p-1 shadow-lg backdrop-blur-md font-medium">
            <NavLink to = "/" className = {navLinkClass}>
                Home
            </NavLink>

            <NavLink to = "/about" className = {navLinkClass}>
                About
            </NavLink>

            <NavLink to = "/projects" className = {navLinkClass}>
                Projects
            </NavLink>

            <NavLink to = "/contact" className = {navLinkClass}>
                Contact
            </NavLink>

        </nav>
    </header>

  )
}

export default Navbar