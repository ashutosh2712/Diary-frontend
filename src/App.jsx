
import './App.css'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route path="login" element={<Login/>}></Route>
        <Route path="register" element={<Register/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
