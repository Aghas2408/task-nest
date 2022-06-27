import { LayoutRouteProps } from "react-router-dom";
import Navbar from "../shared/navbar";

import "./styles.scss";

export default function Layout({ children }: LayoutRouteProps): JSX.Element {
  const accessToken = localStorage.getItem("accessToken");

  return (
    <div className="container">
      {accessToken && <Navbar />}
      {children}
    </div>
  );
}
