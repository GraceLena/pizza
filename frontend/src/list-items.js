import React, { Component } from 'react';
import ItemPizza from './pizza-item.js';
//import './list-items.css';

class ListItems extends Component {
    constructor() {
        super();
        this.state = {
            pizzaData: [
              {type: 1, pic: './pic-pizza.jpg', price: 5, pizzaStatus: 0},
              {type: 2, pic: './pic-pizza-2.jpg', price: 6, pizzaStatus: 0},
              {type: 3, pic: './pic-pizza-3.jpg', price: 7, pizzaStatus: 0},
              {type: 4, pic: './pic-pizza-4.jpg', price: 8, pizzaStatus: 0},
              {type: 5, pic: './pic-pizza-5.jpg', price: 9, pizzaStatus: 0},
              {type: 6, pic: './pic-pizza-6.jpg', price: 10, pizzaStatus: 0},
              {type: 7, pic: './pic-pizza-7.jpg', price: 11, pizzaStatus: 0},
              {type: 8, pic: './pic-pizza-8.jpg', price: 12, pizzaStatus: 0}
            ]
          };

       this.changeCount = (event, index) => {
            const pizzaData = this.state.pizzaData;
            pizzaData[index].pizzaStatus = +event.target.value ? +event.target.value : 0 ;
            this.setState({ pizzaData });
          }
         
        this.submit = () => {
        //console.log(this.state);
    
        fetch('http://127.0.0.1:8000/api/order/', { //http://127.0.0.1:8000/api/login
            method: 'post',
            body: JSON.stringify(this.state),
            headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'aplication/json'
            }
        }).then(function(res) {
            res.json().then(function(resp) {
            })
        })
        }
    }

    render() {
        const pizzaData = this.state.pizzaData; // 
        const listItems = pizzaData.map((item, index) =>
            <ItemPizza 
                key={ item.type }
                pic={ item.pic }
                num={ item.type }
                price={ item.price }
                bntClick={ this.submit }
                countPizza={ (event) => this.changeCount(event, index) }
            />
        );
        return (
            <div className='pizza-container'>{listItems}</div>
            );
    }
}

export default ListItems;