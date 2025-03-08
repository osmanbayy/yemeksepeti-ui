import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./pages/Home/Home";
import Article from "./pages/Article/Article";
import Cities from "./pages/Cities/Cities";
import LastPage from "./pages/LastPage/LastPage";
import CityList from "./components/CityList/CityList";
import HomeArticle from "./components/HomeArticle/HomeArticle";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Article />
      <Cities />
      <LastPage />
      <HomeArticle />
      <CityList />
      <Footer />
    </>
  );
}

export default App;
