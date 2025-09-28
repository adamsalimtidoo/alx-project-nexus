import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./AppRoutes"

function App() {
  return (
   <div className='w-[100vw] h-[100vh] bg-white'>
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
   </div>
  )
}

export default App
