import Main from "./Components/Main"
import Sidebar from "./Components/Sidebar"


const App = () => {
  return (
    <div className="w-full h-screen flex">
       <div className="hidden md:block md:w-[20%]">
        <Sidebar/>
       </div>
       <div className="w-full md:w-[80%]">
        <Main/>
       </div>
    </div>
  )
}

export default App