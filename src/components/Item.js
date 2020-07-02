import React from 'react';

const Item = ({product, clickLessProduct, clickMoreProduct, clickDeleteProduct}) =>{
    return (   
        <div className="d-flex flex-row ml-3 mb-3" style={{alignItems: "center"}}>    
            <div>
                <img className="m-auto" src={product.image} alt={product.name} width="200"/>
            </div>
            <div className="ml-3">
                <h6 className="font-weight-bold">{product.name}</h6>
                <h6 className="my-3 text-danger">${product.price}</h6>
                <div>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => clickLessProduct(product.id)}> - </button>   
                    <span className="mx-2">{product.quantity}</span>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => clickMoreProduct(product.id)}> + </button>  
                    <button type="button" className="btn btn-outline-secondary ml-3" onClick={() => clickDeleteProduct(product.id)}> Delete </button>
                </div>
                
            </div>   
        </div>
    );
}

export default Item;