import React from 'react';

class Payment extends React.Component {
  constructor(){
    super();
    this.state = {
      cardNumber: '',
      cardHolderName: '',
      cardCV2: '',
      cardExpire: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  userId(){
    const userIdArr = this.props.currentUser._id.split(':')
    let userId;
    if (userIdArr.length > 1) {
      userId = userIdArr[userIdArr.length - 1].slice(1, userIdArr[userIdArr.length - 1].length - 1);
    } else {
      userId = this.props.currentUser._id;
    }
    return userId;
  }

  componentDidMount(){
    const userId = this.userId();
    if (!this.props.pac._id) {
      this.props.fetchUserPackage(userId);
    }
    if (!this.props.payment._id) {
      this.props.fetchPayment(userId)
    }
  }

  handleInput(type){
    return (e)=>{
      this.setState({[type]: e.target.value});
      if (type=='cardExpire' && !e.target.value.includes('/') && e.target.value.length > 2) {
        this.setState({'cardExpire': this.state.cardExpire.slice(0,2) + '/' + this.state.cardExpire.slice(2)})
      }
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const userId = this.userId();
    const payment = Object.assign(this.state, {
      _user: userId,
      _property: this.props.pac._property
    });
    this.props.createPayment(payment);
  }

  render(){
    const {payment, pac} = this.props;
    return(
    <div className='user-payment'>
      <h1>Payment</h1>
      {payment.cardNumber ?
        <div>
          <p>Your Payment</p>
          {pac.price ? <p>You pacakge price: <strong>{pac.price}</strong> / month</p> : ""}
          <div className='user-payment-info'>
            <p>**** **** **** {payment.cardNumber}</p>
            <div className='user-payment-info-bottom'>
              <div>
                <p>{payment.cardExpire}</p>
                <p>{payment.cardHolderName}</p>
              </div>
              <div className='user-payment-info-logo'>
                <h1><i className="fas fa-home"></i>Homeco</h1>
              </div>
            </div>
          </div>
        </div>
        :
        <div>
          <p>We don't have your payment information yet, please input your card information.</p>
          {pac.price ? <p>You pacakge price: <strong>{pac.price}</strong> / month</p> : ""}
          <p>We only start charging after your first service.</p>
          <form onSubmit={(e)=>this.handleSubmit(e)} className='payment-input'>
            <label>Card Number</label>
            <input type="number" pattern="[0-9]{13,16}" onChange={this.handleInput('cardNumber')} value={this.state.cardNumber} required/>
            <label>Name of Card Holder</label>
            <input type='text'  onChange={this.handleInput('cardHolderName')} value={this.state.cardHolderName} required/>
            <label>Expire Date</label>
            <input type='text'  onChange={this.handleInput('cardExpire')} value={this.state.cardExpire} placeholder='MM/YY' required/>
            <label>CVV2</label>
            <input type="number" pattern="[0-9]{3}" onChange={this.handleInput('cardCV2')} value={this.state.cardCV2} required placeholder='xxx'/>
            <input onClick={(e)=>this.handleSubmit(e)} type='submit'/>
          </form>
        </div>
      }
    </div>
    )
  }

}

export default Payment;
