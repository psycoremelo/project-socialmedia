import {browserRoute, Route, Routes } from "rect-router-dom"
import Register from "./pages/register"
import Auth from "./middlewares/auth"
import Home from "./pages/home"

function App() {
  
  return (
    <main className="h-screen w-screen">
      <browserRoute>
      <Route>
        <Route index componet={<Auth><Home/></Auth>}/>
        <Route path="/register" componet={Register} />
      </Route>
      </browserRoute>
    </main>
  )
}

export default App
