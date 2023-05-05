import Home from "./Pages/Home"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-span-2 h-screen">
          <Sidebar />
        </div>
        <div className="col-span-10 h-screen">
          <Home />
        </div>
      </div>
    </>
  )
}

export default App