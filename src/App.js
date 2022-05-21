import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homep from "./pages/Home";
import Filter from "./pages/Filter";
import Login from "./pages/Login";
import './index.css'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Homep />} />
          <Route path="filter" element={<Filter />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



