import React from 'react';
import './Cart.css'
import box from './empty-box.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const cart = props.cart
    const totalPrice = cart.reduce((total, user) => total + user.salary, 0)

    return (
        <div className="shadow rounded p-4 sidebar text-center">
            <h4 className="mb-4"> <span className="badge bg-info text-white px-4 py-2"><FontAwesomeIcon className="icon" icon={faUser} /> {cart.length}</span> </h4>
            <hr />
            <div className="scroll text-center"> 
                {
                    cart.length === 0 ? (
                        <img src={box} className="box pt-4" alt="Empty box"/>
                    ) : (
                            cart.map(mem => (
                                
                                <div className="member text-left">
                            <div className="mem-text">
                                <p className="name"> {mem.name} </p>
                                <p className="badge badge-danger text-white"> ${mem.salary} </p>
                            </div>
                            <div>
                                <img src={mem.imgUrl} alt="" />
                            </div>
                        </div>
                            
                            ))
                    )
                }
            </div>
            <h5 className="mt-4 border-top py-4 text-center"> Total salary: ${totalPrice} </h5>
        </div>
    );
};

export default Cart;