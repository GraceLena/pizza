import React, { Component } from "react";
import './cart.css';

class Cart extends Component {
    render() {
        //const pizzaData = this.props.pizzaData;
        //let totalPrice = +item.pizzaStatus * +item.pizzaPrice;

        const pizzaCart = this.props.pizzaData.filter((item) => {
            return item.pizzaStatus > 0; 
        });

        const tableItems = pizzaCart.map((item) =>            
            <tr><td>{ item.pic }</td><td>{ item.type }</td><td>{ item.price }</td><td>{ item.pizzaStatus }</td><td>{ 0 }</td> }</tr>
        );

        return (
            <div id="cart-container">
                <h2>Your order:</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Pizza</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="cart">
                        { tableItems }
                    </tbody>
                </table>
                <div>Total for order: <span id="total-euro">0</span> &#8364; (<span id="total-dollar">0</span>$)</div>
                <button className="order">Order</button>
            </div>
        )
    }
}

export default Cart;


       /* const pizzaData = this.state.pizzaData; 
        const tableItems = pizzaData.map((item, index) =>
            let totalPrice = +item.pizzaStatus * +item.pizzaPrice;
            item.pizzaStatus > 0 ? <td>{ item.pic }</td><td>{ item.type }</td><td>{ item.price }</td><td>{ item.pizzaStatus }</td><td>{ totalPrice }</td>
        );*/
        /*return (
            <div className='pizza-container'>{tableItems}</div>
            );*/