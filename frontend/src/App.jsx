import Home from "./components/Home"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <>
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