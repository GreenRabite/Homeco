import React from 'react';
import {Redirect} from 'react-router-dom';
import Footer from '../home/footer';


class Package extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }

  handleClick(pacName){
    if (!this.props.currentUser) {
      this.props.createPackage({
        pac: this.props.packages[pacName],
        property: this.props.property
      }).then(this.props.history.push('/signup'));
    } else {
      this.props.history.push('/user');
    }
  }

  render(){
    const {packages} = this.props;
    const imgs = {
      'prime': 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1519196248/HOMESERVICES_yijkib.jpg',
      'plus': 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1519196262/home-services-local-search-ss-1920_sc8s2o.jpg',
      'supreme': 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1519196283/images_hoso6d.jpg'
    }
    return(
      <div className='package-list'>
        {Object.values(packages).length === 3 ?
        <div className='package-index'>
          <div className='package-item'>
            <div>
              <h1>Prime Plan</h1>
              <div className='package-img-container'>
                <img src={imgs.prime} onClick={()=>this.handleClick('prime')}/>
              </div>
              <ul>
                {packages.prime.slice(1).map((service, idx)=><li key={idx}>{service}</li>)}
              </ul>
            </div>
            <div>
              <div className='package-price'>{packages.prime[0]}<p> / month</p></div>
              <button onClick={()=>this.handleClick('prime')}>Choose this plan</button>
            </div>
          </div>
          <div className='package-item'>
            <div>
              <h1>Plus Plan</h1>
              <div className='package-img-container'>
                <img src={imgs.plus} onClick={()=>this.handleClick('plus')} />
              </div>
              <ul>
                {packages.plus.slice(1).map((service, idx)=><li key={idx}>{service}</li>)}
              </ul>
            </div>
            <div>
              <div className='package-price'>{packages.plus[0]}<p> / month</p></div>
              <button onClick={()=>this.handleClick('plus')}>Choose this plan</button>
            </div>
          </div>
          <div className='package-item'>
            <div>
              <h1>Supreme Plan</h1>
              <div className='package-img-container'>
                <img src={imgs.supreme} onClick={()=>this.handleClick('supreme')} />
              </div>
              <ul>
                {packages.supreme.slice(1).map((service, idx)=><li key={idx}>{service}</li>)}
              </ul>
            </div>
            <div>
              <div className='package-price'>{packages.supreme[0]}<p> / month</p></div>
              <button onClick={()=>this.handleClick('supreme')}>Choose this plan</button>
            </div>
          </div>
        </div>
        :
        ""}
        <Footer />
      </div>
    )
  }
}

export default Package;
