import React, { Component } from 'react';
import {storeProducts,detailProduct,homeItems,fashionItems,electronicItems,stationaryItems,clotheItems} from './Data';

const ProductContext = React.createContext(); 
//Consumer
const ProductConsumer = ProductContext.Consumer;

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
        homeProducts:[],
        fashionProducts:[],
        electronicProducts:[],
        stationaryProducts:[],
        clothesProducts:[],
        detailProduct:detailProduct
    }
    componentDidMount(){
        this.setProducts();
        this.setHomeProducts();
        this.setFashionProducts();
        this.setElectronicProducts();
        this.setStationaryProducts();
        this.setClothesProducts();
    }
    addToCart = (id) =>{ // To add the item to the cart
        console.log(`hello from addToCart ${id}`);
    }

    // FRONT PAGE
    setProducts=()=>{ // This is to solve the problem which was seen in tester.
        let tempProducts=[];                
        storeProducts.forEach(item=>{
            const singleItem = {...item};                    // copying each value from storeProducts taking it to 'item' and put it to the singleItem.
            tempProducts=[...tempProducts,singleItem];      /* tempProducts=[...tempProducts(1),singleItem(2)];,(1)--> grab empty value from the tempProducts array,(2)--> add the values to the empty array from the 'singleItem' */
        })
        this.setState(()=>{
            return {products:tempProducts}
        })
    } 
    // HOME ITEMS
    setHomeProducts=()=>{
        let temphomeProducts=[];        
        homeItems.forEach(items=>{
            const singleitems1 = {...items};
            temphomeProducts=[...temphomeProducts,singleitems1];
        })
        this.setState(()=>{
            return {homeProducts:temphomeProducts}
        })
    }
    // FASHION PRODUCTS
    setFashionProducts=()=>{
        let tempfashionProducts=[];
        fashionItems.forEach(item=>{
            const singleItem ={...item};
            tempfashionProducts=[...tempfashionProducts,singleItem];
        })
        this.setState(()=>{
            return {fashionProducts:tempfashionProducts}
        })
    }
    // ELECTRONIC PRODUCTS
    setElectronicProducts=()=>{
        let tempelectronicProducts=[];
        electronicItems.forEach(item=>{
            const singleItem={...item};
            tempelectronicProducts=[...tempelectronicProducts,singleItem];
        })
        this.setState(()=>{
            return {electronicProducts:tempelectronicProducts}
        })
    }
    // STATIONARY PRODUCTS
    setStationaryProducts=()=>{
        let tempstationaryProducts=[];
        stationaryItems.forEach(item=>{
            const singleItem={...item};
            tempstationaryProducts=[...tempstationaryProducts,singleItem];
        })
        this.setState(()=>{
            return {stationaryProducts:tempstationaryProducts}
        })
    }
    // Clothes 
    setClothesProducts=()=>{
        let tempclotheProducts=[];
        clotheItems.forEach(item=>{
            const singleItem={...item};
            tempclotheProducts=[...tempclotheProducts,singleItem];
        })
        this.setState(()=>{
            return {clothesProducts:tempclotheProducts}
        })
    }
    // Fetching Required Product Details
    getItem = id =>{
        const product = this.state.products.find(item=> item.id === id);  //const homeproduct= this.state.homeProducts.find(item=> item.id === id);       
        return (product);
    }
    getHomeItem = id =>{
        const homeproduct= this.state.homeProducts.find(item=> item.id === id);
        return(homeproduct);
    }
    getFashionItem = id =>{
        const fashionproduct= this.state.fashionProducts.find(item=> item.id === id);
        return(fashionproduct);
    }
    getElectronicItem = id =>{
        const electronicproduct= this.state.electronicProducts.find(item=> item.id === id);
        return(electronicproduct);
    }
    getStationaryItem=id=>{
        const stationaryproduct= this.state.stationaryProducts.find(item=> item.id===id);
        return(stationaryproduct);
    }
    getClothesItem=id=>{
        const clothesproduct= this.state.clothesProducts.find(item=> item.id===id);
        return(clothesproduct);
    }

    // Passing back the control to state arrays.
    handleDetail = (id) =>{
        let product = this.getItem(id);        
        this.setState(()=>{return{detailProduct:product}}) // overridding        
    }
    handleHomeDetail=id=>{
        let homeprod = this.getHomeItem(id);
        this.setState(()=>{return{detailProduct:homeprod}}) 
    }
    handleFashionDetail=id=>{
        let fashionprod = this.getFashionItem(id);
        this.setState(()=>{return{detailProduct:fashionprod}}) 
    }
    handleElectronicDetail=id=>{
        let electronicprod = this.getElectronicItem(id);
        this.setState(()=>{return{detailProduct:electronicprod}})
    }
    handleStationaryDetail=id=>{
        let stationaryprod=this.getStationaryItem(id);
        this.setState(()=>{return{detailProduct:stationaryprod}})
    }
    handleClothesDetail=id=>{
        let clothesprod=this.getClothesItem(id);
        this.setState(()=>{return{detailProduct:clothesprod}})
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
            <ProductContext.Provider value={{...this.state,
                                              handleDetail:this.handleDetail,
                                              addToCart:this.addToCart,
                                              handleHomeDetail:this.handleHomeDetail,
                                              handleFashionDetail:this.handleFashionDetail,
                                              handleElectronicDetail:this.handleElectronicDetail,
                                              handleStationaryDetail:this.handleStationaryDetail,
                                              handleClothesDetail:this.handleClothesDetail
                                            }}>
                {this.props.children}    {/* returning all the children (within this component) in our application */}
            </ProductContext.Provider>
        )
    }
}

export {ProductProvider,ProductConsumer};

/* 
   Difference of syntax between assigning and copying.   
   products=storeProducts; -->This is assigning
   products=[...storeProducts] --> This is copying
*/
