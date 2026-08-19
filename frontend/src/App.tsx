import Login from "./pages/auth/Login";
import RefExample from "./components/practice/RefExample";
import UserContext from "./context/UserContext";
import UserInfo from "./components/practice/UserInfo";

function App() {
  return(
    <>
      <UserContext.Provider
        value={{
          name: "Deepak",
          role: "Admin",
        }}
      >
          <Login />
          <RefExample/>
          <UserInfo/>
      </UserContext.Provider>
    </>
  );
}

export default App;