import { Route, Routes } from "react-router-dom"
import './App.css'
import Account from "./components/Account"
import Customer from './components/Customer'
import Home from "./pages/Home"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/customer' element={<Customer></Customer>}> </Route>
        <Route path="/account" element={<Account/>}></Route>

      </Routes>
    </>
  )
}

export default App
