import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
  <div className="w-full items-stretch">
  <nav className="bg-yellow-500 text-black flex justify-between items-stretch gap-8" >
    <h1 className="text-2xl">
      Dead Drift Flycasters
      </h1>
      <ul className="p-0 m-0 list-none flex gap-9 items-stretch">
        <CustomLink 
          to="/" 
          className="text-inherit h-full flex items-center p-2 active:bg-white hover:bg-white">
          Home
        </CustomLink>
        <CustomLink to="/team" className="text-inherit h-full flex items-center p-2 text-center hover:bg-white">Meet the Team</CustomLink>
        <CustomLink to="/merchandise" className="text-inherit h-full flex items-center p-2 text-center hover:bg-white">Merchandise</CustomLink>
        
      </ul>
      <h1 className="hidden text-center">Hamburger</h1>
    
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
