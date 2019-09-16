import React from 'react';
import './loginstyle.scss';
import './timerstyle.scss';
import {Link} from 'react-router-dom';
import { ProductConsumer } from '../Context';

const LoginBox=props=> {      
      return(  
              
          <div className="inner-container">
          <div className="header">
          Login
          </div>
           <div className="box">
           <form>
              <div className="input-group">
            
              <label htmlFor="username">Username</label>              
              <input type="text" 
                     name="username" 
                     className="login-input" 
                     placeholder="username"                         
              />
            </div>
            <br/>

            <div className="input-group">
              <label htmlFor="password">Password</label>              
              <input type="password" 
                     name="password" 
                     className="login-input" 
                     placeholder="password"                        
              />
            </div>
            <br/> 
            <Link to="/">     
            <button type="button" className="login-btn" onClick={props.picks}>
              Login        
            </button>
            </Link>
            </form>
          </div>      
        </div>
        
      )
    }

  export default LoginBox;
