import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LINKS } from '../../static';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header id="header" className="shadow-md">
      <nav
        className={`flex gap-6 p-4 items-center justify-center ${
          pathname === '/about' ? 'bg-blue-400' : 'bg-slate-300'
        }`}
      >
        {LINKS?.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            className={({ isActive }) =>
              `text-slate-800 flex items-center gap-2 px-4 py-2 rounded-md transition 
              ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-100 hover:text-blue-600'}`
            }
          >
            {link.icon}
            <span className="text-sm font-medium">{link.name}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
