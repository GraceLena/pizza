import React, { Component } from "react";
import './cart.css';

class Cart extends Component {
    render() {
        const pizzaCart = this.props.pizzaData.filter((item) => {
            return item.pizzaStatus > 0; 
        });
        let totalPrice = 0;
        pizzaCart.forEach(function(item){
            totalPrice += item.pizzaStatus * item.pizzaPrice;
          });

        const tableItems = pizzaCart.map((item) =>            
            <tr><td>{ item.pic }</td><td>{ item.type }</td><td>{ item.price }</td><td>{ item.pizzaStatus }</td><td>{ item.pizzaStatus * item.pizzaPrice }</td> }</tr>
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
                <div>Total for order: <span id="total-order-euro">{ totalPrice }</span> &#8364; (<span id="total-order-dollar">{ (totalPrice*1.1).toFixed(2) }</span>$)</div>
                <div>Delivery: <span id="delivery-euro">5</span> &#8364; (<span id="delivery-dollar">{ (5*1.1).toFixed(2) }</span>$)</div>
                <div>Total price: <span id="total-euro">{ totalPrice + 5 }</span> &#8364; (<span id="total-dollar">{ ((totalPrice+5)*1.1).toFixed(2) }</span>$)</div>
                <button className="order">Order</button>
            </div>
        )
    }
}

export default Cart;