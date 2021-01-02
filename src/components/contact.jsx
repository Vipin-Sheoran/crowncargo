import React, { Component } from "react";
import Axios from 'axios'

export class Contact extends Component {
  state={
    name2:'',
    email:'',
    message:'',
    to:'',
    from:'',
    type:'',
    phone:''
}
nameHandler=(e)=>{
  e.preventDefault()
this.setState({name2:e.target.value})
console.log(this.state.name2)
}
emailHandler=(e)=>{
  this.setState({email:e.target.value})
  console.log(this.state.email)
}
messageHandler=(e)=>{
  this.setState({message:e.target.value})
  console.log(this.state.message)
}
toLocationHandler=(e)=>{
  this.setState({to:e.target.value})
  console.log(this.state.to)
}
fromLocationHandler=(e)=>{
  this.setState({from:e.target.value})
  console.log(this.state.from)
}
phoneHandler=(e)=>{
  this.setState({phone:e.target.value})
  console.log(this.state.phone)
}
typeHandler=(e)=>{
  this.setState({type:e.target.value})
  console.log(this.state.type)
}

   func=(e)=>{
     e.preventDefault()
    // console.log(email.value)
    Axios.post("http://localhost:3001/api/emails",{
    "sender":this.state.email,
    "name":this.state.name2,
    "message":this.state.message,
    "phone":this.state.phone,
    "fromLocation":this.state.from,
    "toLocation":this.state.to,
    "type":this.state.type
  
  })
  // .then(data=>{
  //   console.log(data)
  //   alert('sent')
  //   // email.value='',
  //   // document.getElementById('name2').value='',
  //   // message.value=''
  
   
  // }).catch(e=>{
  //  alert('something went wrong try again')
  // //  email.value='',
  // //   document.getElementById('name2').value='',
  // //   message.value=''
    
  // })
   }
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Request A Quote</h2>
                  <p>
                    Please fill out the form below to send us an email and we
                    will get back to you as soon as possible.
                  </p>
                </div>
                <form onSubmit={(e)=>{this.func(e)}} name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                        onChange={(e)=>this.nameHandler(e)}
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                        onChange={(e)=>this.phoneHandler(e)}
                          type="text"
                          id="phone"
                          className="form-control"
                          placeholder="Phone No."
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                        onChange={(e)=>this.fromLocationHandler(e)}
                          type="text"
                          id="fromLocation"
                          className="form-control"
                          placeholder="From Location"
                          
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                        onChange={(e)=>this.toLocationHandler(e)}
                          type="text"
                          id="toLocation"
                          className="form-control"
                          placeholder="To location"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                        onChange={(e)=>this.typeHandler(e)}
                          type="text"
                          id="type"
                          className="form-control"
                          placeholder="Type"
                          
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                         onChange={(e)=>this.emailHandler(e)}
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                     onChange={(e)=>this.messageHandler(e)}
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  {this.props.data ? this.props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
