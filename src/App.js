import "./App.css";
import HomePage from "./Components/Home/HomePage";
import Partners from "./Components/Home/Partners";
// import HomePage from "./Components/Home/HomePage";
// import LoginForm from "./Components/Home/LoginForm";
import NavbarConst from "./Components/Home/Navbar";
import Booking from "./Components/Home/Booking";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/Home/LoginForm";
import Form from "./Components/Home/Form";
import RegForm from "./Components/Home/RegForm";
import Productlist from "./Components/Home/Productlist";
import Registerform from "./Components/Home/Registerform";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Form" element={<Form />}></Route>
          <Route path="/Partners" element={<Partners />}></Route>
          <Route path="/RegForm" element={<RegForm />}></Route>
          <Route path="/Navbar" element={<NavbarConst />}></Route>
          <Route path="/Booking" element={<Booking />}></Route>
          <Route path="/Productlist" element={<Productlist />}></Route>
          {/* <Route path="/Login" element={<LoginForm />}></Route>
          <Route path="/Register" element={<Registerform />}></Route> */}

          {/* <Route path="/Formsignup" element={<FormSignup />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Booking" element={<Booking />}></Route>
          <Route path="/Navbar" element={<NavbarConst />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/Partners" element={<Partners />}></Route>
          <Route path="/Footer" element={<Footer />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
