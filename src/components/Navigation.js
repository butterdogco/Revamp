import logo from '../img/butterdogco.png';
import menuOpen from '../img/icons/menu-open.png';
import menuClose from '../img/icons/menu-close.png';
import NavItem from './NavItem';

function Navigation() {
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Apps', path: '/applications' },
    { name: 'News', path: '/news' },
    { name: 'About', path: '/about' },
  ];

  function onNavToggleClicked() {
    document.querySelector(".Navigation").classList.toggle("Collapsed");
  }

  return (
    <div className="Navigation Collapsed">
      <button className="NavToggle NavItem" onClick={onNavToggleClicked}>
        <img src={menuOpen} className="NavOpen" alt="Navigation expand icon" />
        <img src={menuClose} className="NavClose" alt="Navigation collapse icon" />
      </button>
      <img className="Logo NavItem" src={logo} alt="ButterDogCo logo" />
      {pages.map((page, i) => (
        <NavItem key={i} pageName={page.name} path={page.path} />
      ))}
    </div>
  );
}

export default Navigation;