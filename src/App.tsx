import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import StockHome from "./pages/StockHome";
import Quote from "./pages/Quote";
import Order from "./pages/Order";
import Chart from "./pages/Chart";
import Account from "./pages/Account";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        
        <Route path="/home" element={<Home />} />
        <Route path="/stockhome" element={<StockHome />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/order" element={<Order />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/account" element={<Account />} />

        <Route path="*" element={<div>페이지를 찾을 수 없습니다 😢</div>} />
      </Routes>
    </Router>
  );
}
