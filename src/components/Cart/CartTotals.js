import React from 'react'
import {Link} from 'react-router-dom';

export default function CartTotals({values}) {
    const { cartSubTotal,cartTax,cartTotal,clearCart }=values
    return (
        <React.Fragment>
            <div className="">
                <div className="row">
                    <div className="col-10 mt-10 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">                
                        <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>{clearCart()}}>
                        clear cart
                        </button>
                        <h5>
                            <span className="text-tile">SubTotal:</span>
                            <strong>$ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">tax:</span>
                            <strong>$ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">total:</span>
                            <strong>$ {cartTotal}</strong>
                        </h5>                
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
