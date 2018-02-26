import React from 'react';
const keys = require('../../../config/keys');

class ContractorForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.schedule;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  componentWillReceiveProps(newProps){
    this.setState(newProps);
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.setState({completed: true});
    let schedule = this.state;
    console.log(schedule);
    this.props.updateWorkSchedule(schedule);
    this.props.handleCloseModal();
    this.props.fetchContractorSchedules(this.props.currentUser.category);
  }

  updateInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  uploadImage(e) {
    e.preventDefault();
    // window.photoImage = this.photoImage.bind(this);
    // window.cloudinary.openUploadWidget(
    //   window.cloudinary_options,
    //   function(errors, result){
    //     window.photoImage(result[0].url);
    //   }
    // );
    window.photoImage = this.photoImage.bind(this);
    cloudinary.openUploadWidget({cloud_name: keys.CLOUD_NAME,upload_preset: keys.UPLOAD_PRESET},
      function(error, result) {
        window.photoImage(result[0].url);
      });
  }

  photoImage(url) {
    if (this.state.img_url === undefined) {
      this.setState({["img_url"] : [url]})
    }else {
      let arr = this.state.img_url;
      arr.push(url);
      this.setState({ ["img_url"]: arr });
    }
  }

  render(){
      const street = this.props.schedule._package._property.street;
      const city = this.props.schedule._package._property.city;
      const state = this.props.schedule._package._property.state;
      let serviceCategoryIcon = {
        "contractor": "http://res.cloudinary.com/greenrabite/image/upload/v1519610083/02_contractor.png",
        "landscape": "http://res.cloudinary.com/greenrabite/image/upload/v1519610082/01_lawn_care.svg",
        "home clean": "http://res.cloudinary.com/greenrabite/image/upload/v1519610083/03_home_clean.png",
        "pest": "http://res.cloudinary.com/greenrabite/image/upload/v1519610083/04_no_pest.png"
      };
      return(
        <div className="contractor-form-container">
          <div>
            <img className="icon-container" src={`${serviceCategoryIcon[this.props.schedule._service.category]}`}></img>
          </div>
          <div>{street}</div>
          <div>{`${city}, ${state}`}</div>
          <form >
            <textarea cols="40" rows="4" charswidth="23" onChange={this.updateInput("description")} placeholder="Description of Services Rendered" value={this.state.description}></textarea><br/>
            <button className="button" onClick={this.uploadImage}>Upload Photo</button> <br/>
            <button className="button" onClick={this.handleSubmit}>Submit</button> <br/>
            <br/>
            <div className="img-container">
              <img className="imgSource"src={this.state.img_url ? this.state.img_url[0] : "" } />
              <div>Photo Uploaded: {this.state.img_url === undefined ? "0" : this.state.img_url.length}</div>
            </div>
          </form>
        </div>
      );
    }
}

export default ContractorForm;
