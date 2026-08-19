// import EmployeePage from "./pages/EmployeePage";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AppRoutes from "./routes/Approutes";

function App() {

  return (
    <div  className="flex min-h-screen bg-slate-50">

      <Sidebar />
      <div className="min-w-0 flex-1">
        <Header />

        <main className="p-6">
          <AppRoutes />
        </main>
      </div>
    </div>
    
    
  )
}

export default App;
