import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import AppRoutes from "./AppRoutes"
import Footer from "./components/footer"

function App() {
  return (
   <Provider store={store}>
     <div className='w-[100vw] h-[100vh] bg-white'>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
      <div className="mt-8 w-full h-fit">
        <Footer/>
      </div>
     </div>
   </Provider>
  )
}

export default App
