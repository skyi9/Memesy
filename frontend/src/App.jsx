import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import availableRoutes from "./utils/routes/availableRoutes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-span-2 h-screen">
          <Sidebar />
        </div>
        <div className="col-span-10 h-screen">
          <Routes>
            <Route path={availableRoutes.home} element={<Home />} />
            <Route path={availableRoutes.trending} element={<div />} />
            <Route path={availableRoutes.create} element={<div />} />
            <Route path={availableRoutes.pints} element={<div />} />
            <Route path={availableRoutes.login} element={<Login />} />
            <Route path={availableRoutes.signup} element={<SignUp />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
