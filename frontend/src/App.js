import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
//import logo from './logo.svg';
import './App.css';
import ListItems from './list-items.js';
import Cart from './cart.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      pizzaData: []
    };

    this.openCart = () => {
      document.getElementById('cart').style.display='none';
      document.getElementById('homePage').style.display='block';

      document.getElementById('main').style.display='none';
      document.getElementById('cart-container').style.display='block';

      fetch('http://127.0.0.1:8000/api/order/')
      .then(function(res) {
        /*res.json().then(function(resp) {
        this.setState({ pizzaData: resp.pizzaData });
      });*/
      
      /* dummy data 
      const pizzaData = [
        {type: 1, pic: './pic-pizza.jpg', price: 5, pizzaStatus: 2},
        {type: 2, pic: './pic-pizza-2.jpg', price: 6, pizzaStatus: 0},
        {type: 3, pic: './pic-pizza-3.jpg', price: 7, pizzaStatus: 0},
        {type: 4, pic: './pic-pizza-4.jpg', price: 8, pizzaStatus: 0},
        {type: 5, pic: './pic-pizza-5.jpg', price: 9, pizzaStatus: 0},
        {type: 6, pic: './pic-pizza-6.jpg', price: 10, pizzaStatus: 0},
        {type: 7, pic: './pic-pizza-7.jpg', price: 11, pizzaStatus: 0},
        {type: 8, pic: './pic-pizza-8.jpg', price: 12, pizzaStatus: 0}
      ];
      this.setState({ pizzaData });*/
    });
    }

    this.toHomepage = () => {
      document.getElementById('homePage').style.display='none';
      document.getElementById('cart').style.display='block';

      document.getElementById('cart-container').style.display='none';
      document.getElementById('main').style.display='block';
    }

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='login'>
            <input type='text' onChange={(item)=>{this.setState({email: item.target.value})}} />
            <input type='password' onChange={(item)=>{this.setState({password: item.target.value})}} />
            <button onClick={()=>{this.submit()}}>Log in</button>
          </div>
          <FontAwesomeIcon icon={ faShoppingCart } id="cart" onClick={ () =>{this.openCart()} } />
          <FontAwesomeIcon icon={ faHome } id="homePage" onClick={ () =>{this.toHomepage()} } />
        </header>     
        <div id='main'>
          <h1>Order your pizza</h1>
          <ListItems />
        </div>
        
        <Cart pizzaData={ this.state.pizzaData } />
      </div>
    );
  }
}

export default App;