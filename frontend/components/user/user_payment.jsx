import React from 'react';

class Payment extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    const userIdArr = this.props.currentUser._id.split(':')
    let userId;
    if (userIdArr.length > 1) {
      userId = userIdArr[userIdArr.length - 1].slice(1, userIdArr[userIdArr.length - 1].length - 1);
    } else {
      userId = this.props.currentUser._id;
    }
    if (!this.props.pac._id) {
      this.props.fetchUserPackage(userId);
    }
    if (!this.props.payment._id) {
      this.props.fetchPayment(userId)
    }
  }

  handleInput(){

  }

  handleSubmit(){
    e.preventDefault();
  }

  render(){
    const {payment, pac} = this.props;
    return(
    <div className='user-payment'>
      <h1>Payment</h1>
      {payment.cardNumber ?
        <div>
        </div>
        :
        <div>
          <p>We don't have your payment information yet, please input your card information.</p>
          {pac.price ? <p>You pacakge price: <strong>{pac.price}</strong> / month</p> : ""}
          <p>We will only start charge after first service.</p>
          <form onSubmit={(e)=>this.handleSubmit(e)} className='payment-input'>
            <label>Card Number</label>
            <input type='text' required/>
            <label>Name of Card Holder</label>
            <input type='text' required/>
            <label>Expire Date</label>
            <input type='text' required/>
            <label>CVV2</label>
            <input type="number" min='000' max='999' required/>
            <input onClick={(e)=>this.handleSubmit(e)} type='submit'/>
          </form>
        </div>
      }
    </div>
    )
  }

}

export default Payment;
