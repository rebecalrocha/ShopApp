import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, increment } from '../actions';

function Auth() {
    const isLogged = useSelector(state => state.isLogged)
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    // login = () => {
    //     dispatch(login());
    // }

    return (
        <div className="App">
            {/* {counter}
            <button onClick={() => dispatch(increment())}>+</button> */}
            <h3>{isLogged? <span>Logged</span> : <span>notLogged</span>}</h3>
            <button onClick={() => dispatch(login())}>Logar User</button>
        </div>
    );
}

export default Auth;