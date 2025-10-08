import React, { Component } from "react";

export default class Task8 extends Component {
  render() {
    const { isSuccess } = this.props;
    return (
     isSuccess ? 
          <h1 >Success!</h1>
        : 
          <h1>Error!</h1>
        
   
    );
  }
}






