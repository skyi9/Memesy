import Home from "./Pages/Home"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="w-1/6 bg-gray-200 h-screen">
          <Sidebar />
        </div>
        <div className="w-5/6 bg-white h-screen">
          <Home />
        </div>
      </div>
    </>
  )
}

export default App