import React from 'react';
import './loginstyle.scss';
import './timerstyle.scss';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
const phoneRegex = RegExp(/^\d{3}\d{3}\d{4}$/);

const formValid = formErrors => {
  let valid=true;

  Object.values(formErrors).forEach(val => val.length > 0 && (valid=false));
  return valid;
};

export default class RegisterBox extends React.Component{   
  constructor(props){
    super(props);
    this.state={
      username:null,
      email:null,
      phonenum:null,
      password:null,
      formErrors:{
        username:"",
        email:"",
        phonenum:"",
        password:""
      }
    };
  } 
    handleSubmit = e => {
      e.preventDefault(); //Prevents the page from going to next page when the submit button is pressed.
      
      if(formValid(this.state.formErrors)){

        
      }
    }

    handleChange = e => {
      e.preventDefault();
      const {name,value}=e.target;
      let formErrors = this.state.formErrors;

      switch(name){
        case 'username': 
            formErrors.username = 
              value.length <3 && value.length >0 ? 
              "minimum 3 characters required": 
              "";
              break;
        case 'email':
            formErrors.email =
              emailRegex.test(value) && value.length >0 ? 
              '': 
              "invalid email address";
              break;
        case 'phonenum': 
            formErrors.username = 
              phoneRegex.test(value) && value.length >0 ? 
              "": 
              "invalid phone number";
              break;
        case 'password': 
            formErrors.username = 
              value.length <6 && value.length >0 ? 
              "minimum 6 characters required": 
              "";
              break;
        default:
          break;
      }
      this.setState({formErrors, [name]:value}, () => console.log(this.state));
    };

    render(){
      const {formErrors} = this.state;
      return(
        <div className="inner-container">
        <div className="header">
          Sign up
        </div>
        <div className="box">    
        <form onSubmit={this.handleSubmit} noValidate>           
            <div className="input-group">           
              <label htmlFor="username">Username</label>              
              <input type="text" 
                     name="username"                       
                     className="login-input" 
                     placeholder="username"
                     noValidate
                     onChange={this.handleChange}
               />    
               {formErrors.username.length>0 && (
                 <span className='errorMessage'>{formErrors.username}</span>
               )}          
            </div>
            <br/>    

            <div className="input-group">            
            <label htmlFor="email">Email</label>              
              <input type="email"
                     name="email" 
                     className="login-input" 
                     placeholder="email"
                     noValidate
                     onChange={this.handleChange}
              />              
            </div>
            <br/>

            <div className="input-group">
              <label htmlFor="phonenum">Phone No:</label>              
              <input type="number" 
                     name="phonenum" 
                     className="login-input" 
                     placeholder="phone number"
                     noValidate
                     onChange={this.handleChange}
              />
            </div>
            <br/>

            <div className="input-group">
              <label htmlFor="password">Password</label>              
              <input type="password" 
                     name="password" 
                     className="login-input" 
                     placeholder="password"
                     noValidate
                     onChange={this.handleChange}
              />
            </div>
            <br/>      
            <button type="button" className="login-btn">Sign up</button>
            </form>         
          </div>            
        </div>    
      )
    }
  }