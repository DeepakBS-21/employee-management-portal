import { useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AppRoutes from "./routes/Approutes";
import UserContext from "./context/UserContext";

function App() {
  const location = useLocation();

  // Show layout only after login
  const showLayout = location.pathname !== "/";

  return (
    <UserContext.Provider
      value={{
        name: "Deepak",
        role: "Admin",
      }}
    >
      {showLayout ? (
        <div className="flex min-h-screen bg-slate-50">
          <Sidebar />

          <div className="min-w-0 flex-1">
            <Header />

            <main className="p-6">
              <AppRoutes />
            </main>
          </div>
        </div>
      ) : (
        <AppRoutes />
      )}
    </UserContext.Provider>
  );
}

export default App;