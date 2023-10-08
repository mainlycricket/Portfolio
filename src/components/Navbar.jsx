import { menus } from '../data';

const Navbar = () => {
  return (
    <div className="navbar bg-emerald-100 justify-center">
      <ul className="menu menu-horizontal px-1">
        {menus.map((menu) => {
          const { id, text, href } = menu;
          return (
            <li key={id} className="capitalize lg:text-lg">
              <a href={href}>{text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Navbar;
