import "../styles/App.scss";
import Navigation from "./navigation";
import Cards from "./cards";
import Sidebar from "./sidebar";


function App() {
  return(
  <div class="App">
      <Navigation/> 
      <main>
        <div className="container">
        <Cards/>
        <Sidebar />
        </div>
     </main>
  </div>
  );
}

export default App;
