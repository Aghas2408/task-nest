import { useEffect, useRef } from "react";
import { LayoutRouteProps } from "react-router-dom";
import Navbar from "../shared/navbar";

import "./styles.scss";

export default function Layout({ children }: LayoutRouteProps): JSX.Element {
  const accessToken = localStorage.getItem("accessToken");

  const accessTokenCurent = useRef<string | null>(null);

  useEffect(() => {
    accessTokenCurent.current = accessToken;
  }, [accessToken]);
  return (
    <div className="container">
      <Navbar />
      {accessToken ? <div>{children}</div> : ""}
    </div>
  );
}
