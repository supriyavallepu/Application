import axios from 'axios'
import React, { Component } from 'react'
//import axios from 'axios'

export default class Gethttp extends Component {
    constructor(props){
        super(props)
        this.state={
            postList:[],
            errorMsg:""
        }
    }
    componentDidMount(){
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then((response)=>{console.log(response);this.setState({postList:response.data})})
       .catch((error)=>{console.log(error);this.setState({errorMsg:"something wrong..."})}) 
    }
  render() {
    const {postList,errorMsg}=this.state
    return (
      <div>
        {postList.length?postList.map(post=><div key={post.id}> {post.title}</div>):null}
        {errorMsg ?<div>{errorMsg}</div>:null}
      </div>
    )
  }
}
