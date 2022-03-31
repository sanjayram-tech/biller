import React from 'react';
import SignUp from './containers/SignUp'
import {Routes,Route} from 'react-router-dom'
import SignIn from './containers/SignIn';
import Home from "./containers/Home"

export default function App(){
return(
    
    <Routes> 
        <Route path="/" element={<Home/>}/> 
        <Route path="/signin" element={<SignIn/>}/> 
        <Route path="/signup" element={<SignUp/>}/>
    </Routes>
)

}