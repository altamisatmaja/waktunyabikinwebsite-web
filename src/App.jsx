import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Portofolio from "./pages/Portofolio";
import Layanan from "./pages/Layanan";
import Kontak from "./pages/Kontak";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="/portofolio" element={ <Portofolio/> } />
        <Route path="/layanan" element={ <Layanan/> } />
        <Route path="/kontak" element={ <Kontak/> } />
      </Routes>
    </div>
  )
}