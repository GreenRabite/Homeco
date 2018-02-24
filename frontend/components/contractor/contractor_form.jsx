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
    this.setState({ ["img_url"]: url });
  }

  render(){
      const street = this.props.schedule._package._property.street;
      const city = this.props.schedule._package._property.city;
      const state = this.props.schedule._package._property.state;
      return(
        <div>
          <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=420&h=250&auto=compress&cs=tinysrgb"></img>
          <div>{street}</div>
          <div>{`${city}, ${state}`}</div>
          <form>
            <textarea onChange={this.updateInput("description")} placeholder="Description of Task" value={this.state.description}></textarea><br/>
            <button className="button" onClick={this.uploadImage}>Upload Photo</button> <br/>
            <button className="button" onClick={this.handleSubmit}>Submit</button> <br/>
            <div className="img-container">
              <img className="imgSource"src={this.state.img_url ? this.state.img_url[0] : "" } />
            </div>
          </form>
        </div>
      );
    }
  // }
}

export default ContractorForm;
