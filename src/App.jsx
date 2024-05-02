import {BrowserRouter, Route, Routes } from "rect-router-dom"
import Register from "./pages/register"
import Auth from "./middlewares/auth"
import Home from "./pages/home"

function App() {
  
  return (
    <main className="h-screen w-screen">
      <BrowserRouter>
      <Routes>
        <Route index element={<Auth><Home/></Auth>} />
        <Route path="/register" Component={Register} />
        {/* <Route path="/login" Component={Login}/> */}
      </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
