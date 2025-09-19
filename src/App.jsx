import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./services/ScrollToTop";
import HomePage from "./pages/HomePage";
import CareerPage from "./pages/CareerPage";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/career" element={<CareerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
