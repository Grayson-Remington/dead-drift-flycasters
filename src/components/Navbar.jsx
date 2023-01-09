import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
  <div className="h-[72px]">
  <nav className=" w-full bg-yellow-500 text-black flex justify-between items-stretch gap-8 p-4" >
    <ul className="p-0 m-0 list-none flex gap-9 items-stretch h-full sm-max:hidden">
        <CustomLink 
          to="/" 
          className="overflow-hidden text-inherit h-full flex items-center p-2 active:bg-white nav-button leading-4">
          Home
        </CustomLink>
        <CustomLink to="/team" className="text-inherit h-full flex items-center p-2 text-center hover:bg-white">Meet the Team</CustomLink>
        
        
    </ul>
    
    <div className="flex gap-2">
      <img  className="aspect-auto h-10" src="./assets/dead-drift-river.png" alt="" />
      <img  className="aspect ratio-auto h-10" src="./assets/dead-drift-logo.png" alt="" />
    </div>
    <ul className="p-0 m-0 list-none flex gap-9 items-stretch h-full">
        <CustomLink 
          to="/" 
          className="text-inherit h-full flex items-center p-2 active:bg-white nav-button">
          Merchandise
        </CustomLink>
        <CustomLink to="/team" className="text-inherit h-full flex items-center p-2 text-center hover:bg-white">Upcoming Events</CustomLink>
        
        
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
