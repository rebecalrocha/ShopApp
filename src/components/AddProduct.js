import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../actions';

function AddProduct() {
    const isLogged = useSelector(state => state.isLogged)
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return (
        <div className="App">
            {/* {counter}
            <button onClick={() => dispatch(increment())}>+</button> */}
            <h3>{isLogged? <span>Logged</span> : <span>notLogged</span>}</h3>
            <button type="button" className="btn btn-warning" onClick={() => dispatch(increment())}>Add to cart</button>
        </div>
    );
}

export default AddProduct;