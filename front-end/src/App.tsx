import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/user";
import Admin from "./pages/admin";
import Guest from "./pages/guest";
import SignIn from "./pages/auth/signIn";
import SignUp from "./pages/auth/signUp";
import Layout from "./components/layout";
import Supervisor from "./pages/supervisor";
import { AuthProvider } from "./hook/useAuth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="guest" element={<Guest />} />
            <Route path="user" element={<User />} />
            <Route path="supervisor" element={<Supervisor />} />
            <Route path="admin" element={<Admin />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
