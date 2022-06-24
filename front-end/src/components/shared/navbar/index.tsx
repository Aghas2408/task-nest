import { NavLink } from "react-router-dom";
import { NAVBAR_ITEMS } from "../../../utils/constant/navbar_items";

import "./styles.css";

export default function Navbar(): JSX.Element {
  const links = NAVBAR_ITEMS;
  return (
    <>
      <ul className="nav_items">
        {links.map((item, index) => {
          return (
            <NavLink key={index} to={item.href}>
              <li>{item.name}</li>
            </NavLink>
          );
        })}
      </ul>
      <div className="bottom_row" />
    </>
  );
}
