import React, { Component } from 'react';
import Auxion from '../../../hoc/Auxion/Auxion';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate (){
        console.log('[OrderSummary] willUpdate');
    }
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(key => {
        return <li key = {key}><span style = {{textTransform: 'capitalize'}}>{key}:</span> {this.props.ingredients[key]}</li>
        });
        return (
        <Auxion>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price is: {this.props.price.toFixed(2)}</p>
            <p>Continue to Checkout?</p>
            <Button btnType = "Danger" clicked = {this.props.purchaseCancelled}>Cancel</Button>
            <Button btnType = "Success" clicked = {this.props.purchaseContinueHandler}>Continue</Button>
        </Auxion>
        );
    }
}

export default OrderSummary;