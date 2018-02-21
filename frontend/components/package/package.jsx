import React from 'react';

class Package extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }

  handleClick(pacName){
    this.props.createPackage({
      pac: this.props.packages[pacName],
      property: this.props.property
    }).then(this.props.history.push('/signup'));
  }

  render(){
    const {packages} = this.props;
    const imgs = {
      'prime': 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1519196248/HOMESERVICES_yijkib.jpg',
      'plus': 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1519196262/home-services-local-search-ss-1920_sc8s2o.jpg',
      'supreme': 'https://res.cloudinary.com/ddwejrtgh/image/upload/v1519196283/images_hoso6d.jpg'
    }
    return(
      <div>
        {Object.values(packages).length === 3 ?
        <div className='package-index'>
          <div>
            <h1>Prime Plan</h1>
            <div className='package-img-container'>
              <img src={imgs.prime} onClick={()=>this.handleClick('prime')}/>
            </div>
            <ul>
              {packages.prime.map((service, idx)=><li key={idx}>{service}</li>)}
            </ul>
            <button onClick={()=>this.handleClick('prime')}>Choose this plan</button>
          </div>
          <div>
            <h1>Plus Plan</h1>
            <div className='package-img-container'>
              <img src={imgs.plus} onClick={()=>this.handleClick('plus')} />
            </div>
            <ul>
              {packages.plus.map((service, idx)=><li key={idx}>{service}</li>)}
            </ul>
            <button onClick={()=>this.handleClick('plus')}>Choose this plan</button>
          </div>
          <div>
            <h1>Supreme Plan</h1>
            <div className='package-img-container'>
              <img src={imgs.supreme} onClick={()=>this.handleClick('supreme')} />
            </div>
            <ul>
              {packages.supreme.map((service, idx)=><li key={idx}>{service}</li>)}
            </ul>
            <button onClick={()=>this.handleClick('supreme')}>Choose this plan</button>
          </div>
        </div>
        : ""}
      </div>
    )
  }
}

export default Package;
