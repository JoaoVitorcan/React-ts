import './App.css'
import { Route, Routes } from "react-router-dom"
import Batman from './pages/Batman'
import NotFound from './components/NotFound'

function App() {

  return (
    <>
  <Routes>
    <Route path='/batman' element={<Batman/>}/>
    <Route path='/*' element={<NotFound/>}/>
  </Routes>
    </>
  )
}

export default App
