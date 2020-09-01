import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Home from "./views/Home.js";
import Login from './views/Login.js'
import Signup from './views/Signup.js'
import About from "./views/About.js";
import Authentication from './views/Authentication.js';
import Otp from "./views/otp.js";




export default class Routes extends Component {
   render() {
       return (
           <Router barButtonIconStyle ={styles.barButtonIconStyle}
               hideNavBar={false} 
               navigationBarStyle={{backgroundColor: '#1565c0',}} 
               titleStyle={{color: 'white',}}
           >
               
               <Stack key="root">
               <Scene key = "home" component = {Home} title = "Home" icon="camera" initial = {true} />
         <Scene key = "login" component = {Login} title = "Login"  />
         <Scene key = "signup" component = {Signup} title = "Signup"  />
         <Scene key = "about" component = {About} title = "About"  />
         <Scene key = "authentication" component = {Authentication} title = "Authentication login"  />
         <Scene key = "otp" component = {Otp} title = "Otp Verification"  />

               </Stack>

           </Router>
       )
   }
}

const styles = {
   barButtonIconStyle: {
       tintColor: 'white'
   }
}