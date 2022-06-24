import { BrowserRouter, Routes, Route } from "react-router-dom";
import Guest from "./pages/guest";
import User from "./pages/user";
import Layout from "./components/layout";
import Supervisor from "./pages/supervisor";
import Admin from "./pages/admin";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="guest" element={<Guest />} />
          <Route path="user" element={<User />} />
          <Route path="supervisor" element={<Supervisor />} />
          <Route path="admin" element={<Admin />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
