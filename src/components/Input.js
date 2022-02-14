import React, {Component} from "react";

export default class Input extends Component {

    state = {
        Username: "",
        Email: ""
    }
    handleLogin = event => {
        this.setState({
            Username: event.target.value,
        })
    }
    handlePass = event => {
        this.setState({
            Email: event.target.value
        })
    }
    render(){
        const  {Username, Email} = this.state;       
        return (           
                <div className="input">      
                    <h1 className="input-tittle">
                        Get the movie & TV Shows straight
                        in your inbox each week
                    </h1>
                    <div>                     
                        <input 
                            placeholder="First Name"
                            className="name"
                            type="name"
                            value={Username}
                            onChange={ (event) => this.handleLogin(event)}                   
                        />                               
                        <input 
                            placeholder="Email"
                            className="mail"
                            type="email"
                            value={Email}
                            onChange={ (event) => this.handlePass(event)}                   
                        />
                        
                            <button className="subscribe-btn">
                               <p className="sub-text"> Subscribe </p>
                            </button>
                                              
                    </div>
            </div>
        )
    }
}
