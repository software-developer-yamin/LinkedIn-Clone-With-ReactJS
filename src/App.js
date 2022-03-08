import { useSelector } from "react-redux";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import userSlice, { selectUser } from "./features/users/userSlice";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <main className="app_body" >
          <Sidebar />
          <Feed />
        </main>
      )}
    </div>
  );
}

export default App;
