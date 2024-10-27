import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './Menu'
import SignIn from  'components/Auth/SignIn/Index'
import SignUp  from 'components/Auth/SignUp/Index'
import Game from 'components/App.'




const App: React.FC = () => {
  return (
    <div style={{width : "100vw" , height : "100vh" , display : "flex" , justifyContent :"center" , alignItems:"center"}}>
    <Router>
      <Routes>
        <Route path='/' element={<Menu/>} />
        <Route path='/SignIn' element = {<SignIn/>}/>
        <Route path='/SignUp' element = {<SignUp/>}/>
        <Route path='/Game' element = {<Game/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App