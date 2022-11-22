import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
  <div className="w-full">
  <nav className="bg-yellow-300 text-black flex justify-between items-stretch gap-8 px-0 py-4" >
    <Link to="/" className="text-3xl text-center">
      Dead Drift Flycasters
      </Link>
      <ul className="p-0 m-0 list-none flex gap-9">
        <CustomLink 
          to="/pricing" 
          className="text-inherit h-full flex items-center p-2 active:bg-white hover:bg-white">
          Home
        </CustomLink>
        <CustomLink to="/about" className="text-inherit h-full flex items-center p-2 text-center">Meet the Team</CustomLink>
      </ul>
    
  </nav>
  </div>
  )
}

function CustomLink({to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
      {children}
      </Link>
    </li>
  )
}
