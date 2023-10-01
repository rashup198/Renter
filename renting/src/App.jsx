import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Signin from './Pages/Signin'
import SignUp from './Pages/SignUp'
import Header from './Componets/Header'
import PrivateRoute from './Componets/PrivateRoute'
import CreateListing from './Pages/CreateListing'
import UpdateListing from './Pages/UpdateListing';


function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/sign-in" element={<Signin/>} />  
      <Route path="/sign-up" element={<SignUp/>} />
      <Route element={<PrivateRoute/>}>
      <Route path="/profile" element={<Profile/>} />
      <Route path="/create-listing" element={<CreateListing/>} />
      <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
