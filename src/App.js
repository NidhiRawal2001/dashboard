import logo from "./logo.svg";
import "./App.css";
import LeftSideBar from "./Components/LeftSideBar";
import NavBar from "./Components/NavBar";
import FinancialPerformance from './Components/FinancialPerformance'

function App() {
  return (
    <div>
      <header>
      <div style={{ display: "flex" }}>
          <div  style={{ width: "20.3%" }}>
            <LeftSideBar />
          </div>
          <div style={{ width: "76.6%" }}>
<NavBar/>
<FinancialPerformance/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
