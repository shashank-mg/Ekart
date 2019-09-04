//Indivisual Products
import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from './Context';

export default class Product extends Component {
    render() {
        const {id,title,img,price,inCart}=this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card"> {/* bootstrap class 'card' */}
                    <div className="img-container p-5" onClick={console.log("Clicked")}>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"></img>
                        </Link>
                        <button style={{height:'20px',width:'20px'}} className="card-btn" disabled={inCart?true:false} onClick={()=>{console.log('added to the cart')}}>                            
                            {inCart?(<p className="text-capitalize mb-0" disabled>{" "}is inCart</p>):(<i className="fas fa-cart-plus"/>)}
                        </button>
                    </div>
                </div>            
                {/* Card footer */}
                <div className="card-footer d-flex justify-content-between"> {/* bootstrap class footer */}
                <p className="align-self-center mb-0" style={{fontFamily:'Trebuchet MS'}}>{title}</p>
                <p className="align-self-center mb-0" style={{diplay:'flex',fontFamily:'Trebuchet MS'}}>{price} $</p>
                </div>     
            </ProductWrapper>
        )
    }
}
const ProductWrapper = styled.div``

/*
 1. Remember to always give the link i.e <Link> in the file where the single or indivisual data is handled (Product.js), and not in the file 
    where all the data is handled i.e in arrays. (ProductList.js) 
 2. Data from ProductList to Product is coming from props, but data from Context.js to ProductList.js is coming from ContextAPI. 
*/