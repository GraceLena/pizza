import React, { Component } from 'react';
import './pizza-item.css';

class ItemPizza extends Component {
    render() {
        let priceS = (this.props.price*1.1).toFixed(2);
        return (
            <div className='pizza'>
                <img src={ this.props.pic } alt='pizza'/>
                <div className='pizza-details'>
                    <div className='pizza-name'>type { this.props.num }</div>
                    <div className='pizza-price'>{ this.props.price }&#8364; ({ priceS }$)</div>
                    <div className='btn-count'>
                        <input type='text' className='pizza-count' onChange={ this.props.countPizza } />
                        <button onClick={ this.props.bntClick }>Add</button>
                    </div>
                    
                </div>
            </div>
        );
    }    
}

export default ItemPizza;