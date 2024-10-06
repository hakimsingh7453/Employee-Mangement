import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="background">
        <h1 className="welcome">Welcome! </h1>
        <h2>Manage Your Employees</h2>
        <p>Efficiently manage your team with our employee management system</p>
      </div>
    </div>
  );
}

export default App;
