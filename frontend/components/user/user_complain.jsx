import React from 'react';

class UserComplain extends React.Component {
  constructor(){
    super();
    this.state = {title: '', body: ''};
    this.handleInput = this.handleInput.bind(this);
  }

  userId(){
    const userIdArr = this.props.currentUser._id.split(':');
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
    this.props.fetchComplains(userId);
  }

  handleInput(type){
    return (e)=>{
      this.setState({[type]: e.target.value});
    }
  }

  handleSubmit(e){
    e.preventDefault();
    if (!this.state.body || !this.state.title) {

    } else {
      const userId = this.userId();
      const complain = Object.assign(this.state, {
        _user: userId,
      });
      this.props.createComplain(complain).then(()=>{
        this.setState({title: '', body: ''})
      });
    }
  }

  render(){
    const complains = Object.values(this.props.complains);
    return(
    <div className='user-complain'>
      <h1>Complain</h1>
        <div className='user-complain-info'>
        {complains.length > 1 ?
        <div className=''>
          {complains.map((complain, idx)=>
            <div className='user-complain-item' key={idx}>
              <p className='complain-title'>{complain.title}</p>
              <p>{complain.body}</p>
              <p>status: {complain.process ? 'processing' : 'received'}</p>
            </div>)}
        </div>
         : ""}
        <form onSubmit={(e)=>this.handleSubmit(e)} className='user-complain-form'>
          <h3>Submit a new complain</h3>
          <label>Title</label>
          <input onChange={this.handleInput('title')} value={this.state.title} type='text'/>
          <textarea onChange={this.handleInput('body')} value={this.state.body} cols="30" rows="5"/>
          <input onClick={(e)=>this.handleSubmit(e)} type='submit' value='Submit'/>
        </form>
      </div>
    </div>
    )
  }

}

export default UserComplain;
