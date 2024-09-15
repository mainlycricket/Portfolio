import { menus } from '../data';

const Navbar = () => {
  return (
    <div className="navbar justify-around bg-black sm:justify-center">
      <ul className="menu menu-horizontal px-1">
        {menus.map((menu) => {
          const { id, text, href, icon } = menu;
          return (
            <li
              key={id}
              className="capitalize sm:text-xl hover:underline hover:bg-transparent rounded-lg"
            >
              <a href={href}>{text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Navbar;
