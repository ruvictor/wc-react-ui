import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    userToken: ''
  }

  componentDidMount() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'admin',
        password: 'M2gu8n35D@AIKGZ&j@oEqaFF'
      }),
      
    };

    fetch("http://localhost/wp-json/jwt-auth/v1/token", requestOptions)
        .then(res => res.json())
        .then(mainResult => console.log(mainResult));
    

}

  render(){
    return (
        <div className="LoginBlock">
          fdfd
        </div>
      );
  }
  
}

export default App;
