import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css"
import Feed from "./components/Feed";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app_body" >
        <Sidebar />
        <Feed />
      </main>
    </div>
  );
}

export default App;
