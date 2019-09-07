import React, { Component } from 'react'
import {storeProducts,detailProduct} from './Data';

const ProductContext = React.createContext(); 

//Place the ProductContext.Provider on top of the entire application.i.e in index.js
//Do the same thing as done in ProductList i.e getting data from the Data.js and put it in an array.
class ProductProvider extends Component {
    state={
        //products:storeProducts,  
        /* 
           assigning the objects to the variables, means passing them as a reference, storeProducts is the array of objects. 
           products:storeProducts --> means reference is getting passed. Its not a copy of the original array.
           This problem has to be solved. 
        */
        products:[], // This is to solve the problem which was seen in tester.
        detailProduct:detailProduct
    }
    componentDidMount(){
        this.setProducts();
    }
    addToCart = (id) =>{ // To add the item to the cart
        console.log(`hello from addToCart ${id}`);
    }

    setProducts=()=>{ // This is to solve the problem which was seen in tester.
        let tempProducts=[];
        storeProducts.forEach(item=>{
            const singleItem = {...item}; // copying each value from storeProducts taking it to 'item' and put it to the singleItem.
            tempProducts=[...tempProducts,singleItem]; /* tempProducts=[...tempProducts(1),singleItem(2)];,(1)--> grab empty value from the tempProducts array,(2)--> add the values to the empty array from the 'singleItem' */
        })
        this.setState(()=>{
            return {products:tempProducts}
        })
    }
    getItem = id =>{
        const product = this.state.products.find(item=> item.id ===id);
        return product;
    }
    handleDetail = (id) =>{
        let product = this.getItem(id);
        this.setState(()=>{return{detailProduct:product}}) // overridding
    }

   // This is to test if the value in products changes the value in the Data.js aslo changes.This problem can be solved by destructuring.
   /* 
        tester = () => {         
        console.log('State products :',this.state.products[0].inCart);
        console.log('Data products :',storeProducts[0].inCart);
        const tempProducts=[...this.state.products]; // getting the values out
        tempProducts[0].inCart=true;
        this.setState(()=>{
            return {products:tempProducts};
        },()=>{
            console.log('State products :',this.state.products[0].inCart);
            console.log('Data products :',storeProducts[0].inCart);
        }
        )}
    */

    render() {
        return (
           // Provider is returned 
            <ProductContext.Provider value={{...this.state,handleDetail:this.handleDetail,addToCart:this.addToCart}}>
                {this.props.children}    {/* returning all the children (within this component) in our application */}
            </ProductContext.Provider>
        )
    }
}

//Consumer
 const ProductConsumer = ProductContext.Consumer;

 export {ProductProvider,ProductConsumer};

/* 
   Difference of syntax between assigning and copying.   
   products=storeProducts; -->This is assigning
   products=[...storeProducts] --> This is copying
*/
