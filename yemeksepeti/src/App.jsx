import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./pages/Home/Home";
import Article from "./pages/Article/Article";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Article />
    </>
  );
}

export default App;
