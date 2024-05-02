import {BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./pages/register"
import { Toaster } from "react-hot-toast"
import Login from "./pages/login"
import Auth from "./middlewares/auth"
import Home from "./pages/home"
import EditProfile from "./pages/edit-profile"


function App() {
  
  return (
    <main className="h-screen w-screen">
      <Toaster position="top-center"/>
      <BrowserRouter>
      <Routes>
        <Route index element={<Auth><Home/></Auth>} />
        <Route path="/register" Component={Register} />
        <Route path="/login" Component={Login}/>
        <Route path="/edit-profile" element={<Auth><EditProfile/></Auth>} />
      </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
