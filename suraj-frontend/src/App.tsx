import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<ProductDetailsPage />} path="/details/:id" />
      </Routes>
    </Router>
  );
}

export default App;
