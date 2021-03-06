import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NAVBAR_ITEMS } from "../../../utils/constant/navbar_items";

import "./styles.scss";

export default function Navbar(): JSX.Element {
  const links = NAVBAR_ITEMS;
  const accessToken = localStorage.getItem("accessToken");

  const accessTokenCurent = useRef<string | null>(null);

  useEffect(() => {
    accessTokenCurent.current = accessToken;
  }, [accessToken]);

  return (
    <div className="header_container">
      {accessToken && (
        <ul className="nav_items">
          {links.map((item, index) => {
            return (
              <NavLink key={index} to={item.href}>
                <li>{item.name}</li>
              </NavLink>
            );
          })}
        </ul>
      )}
      <div className="sign_btn">
        <NavLink to="sign-in">
          <button>Sign In</button>
        </NavLink>
        <NavLink to="sign-up">
          <button>Sign Up</button>
        </NavLink>
      </div>
    </div>
  );
}
