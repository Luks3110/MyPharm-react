import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Brands from "./components/Brands";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Login from "./components/Login";
import Register from "./components/Register";
import { useSelector } from "react-redux";
import Logout from "./components/Logout";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/products" />} />
        <Route path="/logout" element={<Logout /> } />
        <Route path="/register" element={<Register />}/>
        <Route path="/products" element={isLoggedIn ? <Products /> : <Navigate to="/login" />} />
        <Route path="categories" element={isLoggedIn ? <Categories /> : <Navigate to="/login" />} />
        <Route path="brands" element={isLoggedIn ? <Brands /> : <Navigate to="/login" />} />
        <Route
          path="*"
          element={ 
            <Login />
          } />
      </Routes>
    </Router>
  );
}

export default App;
