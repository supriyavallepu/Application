import React, { Component } from 'react'
//import axios from 'axios'

export default class Posthttp extends Component {

    constructor(props){
        super(props)
        this.state={
          firstName:'',
          lastName:'',
          errorMsg:''
        }
    }

    onsubmitfarm=(e)=>{
        e.preventDefault()
        const data={
          
          firstName:this.state.firstName,
          lastName:this.state.lastName,
        }
        console.log("hhh99999999999",data)
        fetch('http://localhost:8081/students/add',{method:'POST'},JSON.stringify(data))
        .then((response)=>
        {console.log(response,"supriyaresponse")})
        .catch((error)=>{console.log(error);this.setState({errorMsg:"something wrong..."})}) 
     }
     changehandler=(e)=>{
        e.preventDefault()
        this.setState({[e.target.name]:e.target.value})
        console.log("89977777",e.target.value)
     }

  render() {
    return (
  <form onSubmit={this.onsubmitfarm}>
      <div>
 
  <label htmlFor="userid">firstName</label>
  <input type="text" required value={this.state.firstName} name="firstName"  onChange={this.changehandler}></input>
  <label htmlFor="userid">lastName</label>
  <input type="text" required value={this.state.lastName} name="lastName" onChange={this.changehandler} ></input>
 {/* <button onClick={this.onsubmitfarm}>onSubmit</button>   */}
 <button type='submit'>onSubmit</button>   
  {this.state.errorMsg ?<div>{this.state.errorMsg}</div>:null}
      </div>
      </form>
    )
  }
}
