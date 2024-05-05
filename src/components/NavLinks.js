import { links } from "../utils/links-data";
import { NavLink } from "react-router-dom";

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { id, text, path, icon, active } = link;
        return (
          active ? <NavLink
            key={id}
            to={path}
            className={({ isActive }) => {
              return isActive ? "nav-link active" : "nav-link";
            }}
            onClick={toggleSidebar}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink> :
            <div className='nav-link' >
              <span className="icon">{icon}</span>
              {text}
            </div>
        );
      })}
    </div>
  );
};

export default NavLinks;
