import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./pages/Home/Home";
import Article from "./pages/Article/Article";
import Cities from "./pages/Cities/Cities";
import LastPage from "./pages/LastPage/LastPage";
import CityList from "./components/CityList/CityList";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Article />
      <Cities />
      <LastPage />
      <CityList />
    </>
  );
}

export default App;
