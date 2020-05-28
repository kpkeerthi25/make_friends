import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory
  
} from "react-router-dom";
import {useSelector} from 'react-redux'
import Homepage from '../screens/Homepage'
import Signup from '../screens/Signup'
import UserPage from '../screens/Userpage';



const MyRouter=(props)=>{
    const history=useHistory();
    const isLoggedIn=useSelector(state=>state.UserRed.isAuthenticated)
    

    const PrivateRoute=({children,...rest})=>(
            <Route {...rest} render={()=>(
                isLoggedIn===true?<UserPage/>:<Redirect to='/'/>
            )}/>
    )
    const LoginRoute=({children,...rest})=>(
        <Route {...rest} render={()=>(
            isLoggedIn===true?<Redirect to="/me"/>:<Homepage/>
        )}/>
)

    
    return(
        <Router>
      <Switch>
        <Route path="/signup">
           <Signup/>
        </Route>
        <PrivateRoute path="/me">
          <UserPage/>
        </PrivateRoute>
        <LoginRoute path="/" >
            <Homepage/>
        </LoginRoute>
      </Switch>
    </Router>
    )
}

export default MyRouter;