import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import availableRoutes from "./utils/routes/availableRoutes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        <div className="w-1/6 bg-gray-200 h-screen">
          <Sidebar />
        </div>
        <div className="w-5/6 bg-white h-screen">
          <Routes>
            <Route path={availableRoutes.home} element={<Home />} />
            <Route path={availableRoutes.trending} element={<div />} />
            <Route path={availableRoutes.create} element={<div />} />
            <Route path={availableRoutes.pints} element={<div />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
