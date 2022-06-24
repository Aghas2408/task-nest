import { NAVBAR_ITEMS } from "../../../utils/constant/navbar_items";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="container">
      <ul className="nav_items">
        {NAVBAR_ITEMS.map((item) => {
          return (
            <a href="/">
              <li>{item.ref}</li>
            </a>
          );
        })}
      </ul>
      <div className="bottom_row" />
    </div>
  );
}
