import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Info from "./pages/info/Info";
import Farming from "./pages/farming/Farming";
import './App.css';
// import AboutUs from "./components/aboutUs/AboutUs";
// import ContactUs from "./components/contactUs/ContactUs";

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element = {<Home />}  />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/info" element = {<Info />} />
          <Route path = "/farming" element = {<Farming />} />
       </Routes>
    </BrowserRouter>
  
  );
}

export default App;
