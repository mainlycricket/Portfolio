import { menus } from '../data';

const Navbar = () => {
  return (
    <div className="navbar bg-emerald-100 justify-around sm:justify-center">
      <ul className="menu menu-horizontal px-1">
        {menus.map((menu) => {
          const { id, text, href, icon } = menu;
          return (
            <li key={id} className="capitalize sm:text-xl">
              <a href={href}>{text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Navbar;
