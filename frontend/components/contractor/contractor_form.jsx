import React from 'react';

class ContractorForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.schedule;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      description : ""
    };
    // this.uploadImage = this.uploadImage.bind(this);
  }

  componentWillReceiveProps(newProps){
    this.setState(newProps);
  }

  handleSubmit(e) {
    e.preventDefault();
    let schedule = this.state;
    this.setState({completed: true});
    this.props.updateSchedule(schedule).then(()=>(this.props.fetchContractorSchedules(`${this.props.currentUser.category}`)));
  }

  updateInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  // uploadImage(e) {
  //   e.preventDefault();
  //   window.photoImage = this.photoImage.bind(this);
  //   window.cloudinary.openUploadWidget(
  //     window.cloudinary_options,
  //     function(errors, result){
  //       window.photoImage(result[0].url);
  //     }
  //   );
  // }

  render(){
    if (this.state._id === undefined) {
      return(
        <div>Hello</div>
      );
    }else {
      return(
        <form>
          <textarea onChange={this.updateInput("schedule.description")} placeholder="Description of Task" value={this.state.description}></textarea><br/>
          <div onClick={this.handleSubmit}>
            <button>Submit</button> <br/>
          </div>
          <div className="img-container">
          </div>
        </form>
      );
    }
  }
}

export default ContractorForm;
