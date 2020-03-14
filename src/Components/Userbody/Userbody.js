import React, { useState } from 'react';
import './Userbody.css';
import fakeData from '../../fakeData/fakeData'
import User from '../User/User';
import Cart from '../Cart/Cart';
const shuffleData = fakeData.sort(() => Math.random() - 0.5);

const Userbody = () => {
    const [users, setUsers] = useState(shuffleData)
    const [cart, setCart] = useState([]);
    const cartHandler = (user) => {
        const added = users.find(x => x.id === user.id)
        added.add = true
        let newCart = [...cart, user]
        const remove = newCart.filter(function (u, ind) {
            return newCart.indexOf(u) === ind
        })
        setCart(remove)
    }

    return (
        <div className="row">
            <div className="col-lg-8">
                {
                    users.map(data => <User cartHandler={cartHandler} user={data}></User>)
                }
            </div>
            <div className="col-lg-3 offset-lg-1">
                {
                    <Cart cart={cart}></Cart>
                }
            </div>
        </div>
    );
};

export default Userbody;