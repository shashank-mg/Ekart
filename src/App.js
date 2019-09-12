/* eslint-disable no-lone-blocks */
import React from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/Sidedrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Details1 from './components/Details1';
import Details2 from './components/Details2';
import Details3 from './components/Details3';
import Details4 from './components/Details4';
import Details5 from './components/Details5';
import Cart from './components/Cart';
import Default from './components/Default';
import Account1 from './components/AccountSL/Account1';
import Newnav from './components/Toolbar/Newnav';
import HomeProductList from './components/AllProducts/HomeProductList';
import FashionProductList from './components/AllProducts/FashionProductList';
import ElectronicProductList from './components/AllProducts/ElectronicProductList';
import StationaryProductList from './components/AllProducts/StationaryProductList';
import ClothesProductList from './components/AllProducts/ClothesProductList';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state={
    sideDrawerOpen: false,
    signupLog: false,
    originalNav:true
  };

  drawerToggleClickHandler=()=>{
    this.setState((prevState)=>{
      return{sideDrawerOpen:!prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler=()=>{
    this.setState({sideDrawerOpen:false});
  };

  signUpLogOpener=()=>{
    this.setState({signupLog:true});
    this.setState({originalNav:false});
  }

  render(){
    //let sideDrawer;
    //let openup;
    let backDrop;
    let newNav;
    

    if(this.state.sideDrawerOpen)
    {       
      {/* sideDrawer=<SideDrawer/> //since, the sideDrawerOpen is false initially,the SideDrawer wont be displayed,i.e <SideDrawer /> component will not be displayed.*/}
      backDrop=<Backdrop backdropHandler={this.backdropClickHandler}/>;      
    }

    if(this.state.signupLog){
     // openup=<Account1/>
      newNav=<Newnav/>
    }

  return (
    <div>
      <div className="signUpLogs">
        {newNav}
        {/*{openup}*/}
      </div>
      <div style={{height:'100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} signLog={this.signUpLogOpener}/>
        <SideDrawer shows={this.state.sideDrawerOpen} goBack={this.backdropClickHandler}/>
        {/* To Add some animations these changes were made, in line 24 and 30, i.e adding 'shows' */}
        {backDrop}        
        <Switch>    { /* Specifies where the page has to go when the following path is typed */ }
          <Route path="/details" component={Details}/>
          <Route path="/details1" component={Details1}/>
          <Route path="/details2" component={Details2}/>
          <Route path="/details3" component={Details3}/>
          <Route path="/details4" component={Details4}/>
          <Route path="/details5" component={Details5}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/signup" component={Account1}/>
          <Route path="/homeitems" component={HomeProductList}/>
          <Route path="/fashionitems" component={FashionProductList}/>
          <Route path="/electronicitems" component={ElectronicProductList}/>
          <Route path="/stationaryitems" component={StationaryProductList}/>
          <Route path="/clothitems" component={ClothesProductList}/> 
          <Route exact path="/" component={ProductList}/>
          <Route component={Default}/>
        </Switch>
        <main style={{marginTop:'64px'}}>
          {/*<p>this is a para</p>*/}
        </main>
      </div>
    </div>
    );
  }
}
export default App;

/* 
  As per the code Sidedrawer is always open yet invisible at the beginning when the site is opened  on the click
  of the button i.e the button on the toolbar the sideDrawerOpen becomes true  the animation function gets executed,
  in the SideDrawer.css, and the side drawer slides in when the backdrop is pressed the side drawer slides away since
  the sideDrawerOpen in closed. This means that side drawer is always present but hidden the process of sliding in and
  sliding out, as per the animation, and is controlled by the sideDrawerOpen condition. 
*/

/* 
  Route path='' always takes to a new page, if not, using only event handlers takes to the default page i.email
  path="/" with the contents of the page which is in the function controlled by events and along with that of the
  path="/" page 
*/
