import { LayoutRouteProps } from "react-router-dom";
import Navbar from "../shared/navbar";

import "./styles.css";

export default function Layout({ children }: LayoutRouteProps): JSX.Element {
  return (
    <div className="container">
      <Navbar />
      {children}
    </div>
  );
}
