import React from 'react';

const Card = ({product, active, addProduct}) =>{
    return (
        <div className="flex-fill m-5 text-center">
            <h5 className="font-weight-bold text-center">{product.name}</h5>
            <img className="m-auto" src={product.image} alt={product.name} width="250px"/>                
            <h6 className="mt-3 text-danger">${product.price}</h6>

            { active ? 
                <button type="button" className="btn btn-success" disabled>Added to cart ✓</button> :
                <button type="button" className="btn btn-warning" onClick={() => addProduct(product)}>Add to cart</button>
            }
        </div>
    );
}

export default Card;