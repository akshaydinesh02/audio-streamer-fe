import "./App.css";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "./hooks/Auth";
import Info from "./homepage/info";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import RootLayout from "./components/common/RootLayout";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RecoilRoot>
          <RootLayout>
            <Routes>
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <div>PROFILE - Protected route</div>
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Info />} />
            </Routes>
          </RootLayout>
        </RecoilRoot>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
