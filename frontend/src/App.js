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

      fetch('http://127.0.0.1:8000/api/order/')  //http://localhost:3000/ //http://127.0.0.1:8000/api/order/
      .then(function(res) {
        res.json().then(function(resp) {
        this.setState({ pizzaData: resp.pizzaData });
        console.log(this.state.pizzaData);
      });
    });
    }

    this.toHomepage = () => {
      document.getElementById('homePage').style.display='none';
      document.getElementById('cart').style.display='block';

      document.getElementById('cart-container').style.display='none';
      document.getElementById('main').style.display='block';
    }

    /*this.changeCount = (event) => {
      //const { pizzaData } = this.state.pizzaData;
      //pizzaData[pizzaData[0].type-1].pizzaStatus = event.target.value;
      //this.setState({ pizzaData });
      console.log(event.target.parentElement.parentElement);
    }*/
   
    /*this.submit = () => {
      console.log(this.state);

      fetch('http://localhost:3000/', { //http://127.0.0.1:8000/api/login
        method: 'post',
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'aplication/json',
          'Content-Type': 'aplication/json'
        }
      }).then(function(res) {
        res.json().then(function(resp) {
          console.log(resp);
        })
      })
    }*/
  }

  componentDidMount() {
    /*fetch('http://localhost:3000/')  //http://127.0.0.1:8000/api/order/
    .then(function(res) {
      res.json().then(function(resp) {
        this.setState({ pizzaData: resp.pizzaData });
        //console.log(this.state.pizzaData);
      });
    });*/
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
