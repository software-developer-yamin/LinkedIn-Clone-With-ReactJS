import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import { login, logout, selectUser } from "./features/users/userSlice";
import { auth } from "./firebase";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          profileUrl: userAuth.profileUrl,
        }))
      } else {
        dispatch(logout());
      }
    })
  }, [auth])

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <main className="app_body" >
          <Sidebar />
            <Feed />
            <Widgets />
        </main>
      )}
    </div>
  );
}

export default App;
