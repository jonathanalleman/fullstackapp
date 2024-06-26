import './App.css'
import Calculator from './components/calculator'
import Header from './components/header'
import {Route, Routes} from "react-router-dom"
import Layout from './layout'
import IndexPage from '../pages/Indexpage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import { UserContextProvider } from './Usercontext'

function App() {
 

  return (
    <UserContextProvider>

    
    <Routes>
      <Route path ="/" element = {<Layout />}>
      <Route index element= {<IndexPage />}/>
      <Route path={'/login'} element={<LoginPage />}/>
      <Route path={'/register'} element={<RegisterPage />}/>
    </Route>
    
    </Routes>

    </UserContextProvider>
    
     
      
 
  )
}

export default App
