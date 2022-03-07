import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css"

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app_body" >
        <Sidebar />
      </main>
    </div>
  );
}

export default App;
