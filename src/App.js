import "./App.css";

//Import Pages Here
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}
export default App;
