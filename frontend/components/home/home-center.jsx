import React from 'react';

class HomeCenter extends React.Component {
  constructor(){
    super();
    this.state = {selected: 0};
  }

  handleHover(n){
    this.setState({selected: n});
  }

  render(){
    const img = [
      'https://res.cloudinary.com/ddwejrtgh/image/upload/v1519591811/Screenshot_from_2018-02-25_12-49-26_vl5sfr.png',
      'https://res.cloudinary.com/ddwejrtgh/image/upload/v1519592835/Screenshot_from_2018-02-25_12-55-26_cfquu3.png',
      'https://res.cloudinary.com/ddwejrtgh/image/upload/v1519196262/home-services-local-search-ss-1920_sc8s2o.jpg'
    ];
    return(
      <div className='home-center'>
        <h1>We'll get all your home maintainance jobs done</h1>
        <p>Your free Home Assistant is here for you, every step of the way</p>
        <div className='home-center-detail'>
          <div className='home-center-detail-img-container'>
            <img src={img[this.state.selected]}/>
          </div>
          <div className='home-center-detail-description'>
            <div onMouseOver={()=>this.handleHover(0)} className='home-center-detail-description-item'>
              <h2>Tackle your home services schedule list</h2>
              <p>Think of Home Assistant as your 24/7 personal support team for every home maintainance service.</p>
            </div>
            <div onMouseOver={()=>this.handleHover(1)} className='home-center-detail-description-item'>
              <h2>We've got you covered</h2>
              <p>Home Assistant will match you with one of our Homeco Services pros. Choose the package fit for your home.</p>
            </div>
            <div onMouseOver={()=>this.handleHover(2)} className='home-center-detail-description-item'>
              <h2>We're here when you need us</h2>
              <p>Homeco provieds all necessary maintainance services for your home. </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeCenter;
