import { NavLink } from 'react-router-dom';

function NavItem({ pageName, path }) {
  return (
    <NavLink className='NavItem NavLink' to={path} viewTransition>{pageName}</NavLink>
  );
}

export default NavItem;