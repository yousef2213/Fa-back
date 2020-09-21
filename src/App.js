import React from 'react';
import './App.css';
import {Switch , Route} from 'react-router-dom'
import {FaConsumer} from './Context/context'

import Home from './Pages/Home'
import Information from './Pages/Information'
import Navbar from './component/Navbar'
import Profile from './Pages/Profile'
import Sign from './Pages/Sign'
import SignUp from './Pages/SignUp'
import Search from './Pages/SearchAcc'
import Post from './component/AlonePone'
import PostUser from './component/postcomponent'
import Profileposts from './component/profileposts'
import Eror from './Pages/Eror'
import User from './component/UsersSeacrh/user'
function App() {
  return (
    <FaConsumer>
      {value =>{
       const {login} = value;
        if(login === false){
          return(
            <Switch>
                <Route exact path="/"  component={Sign} />
                <Route path="/SignUp"  component={SignUp} />
                <Route component={Eror} />
            </Switch>
          )
        }

        return(
          <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Search" component={Search} />
            <Route path="/information" component={Information} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Info" component={Post} />
            <Route path="/ah2842001" component={PostUser} />
            <Route path="/2842001" component={Profileposts} />
            <Route exact path="/:Userfirstname:UserlastName" component={User} />
            <Route component={Eror} />
          </Switch>
          </>

        )

      }}
    </FaConsumer>
  );
}

export default App;
