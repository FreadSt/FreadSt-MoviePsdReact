import  React, {Component} from 'react';
import './Style.css';
import logo from '../assets/images/logo.jpg';
import daredevillogo from "../assets/images/daredevillogo.png";
import label from "../assets/images/label.png";
import uparrow from "../assets/images/uparrow.png";
import arrow from "../assets/images/arrow.png";


export default class Header extends Component {
    
    state = { 
        number: 3
    }

    changePosNumber = () => {
        this.setState( ({number}) => ({number: number < 13 ? number + 1 : 13})
    )}
    
    changeNegNumber = () => {
        this.setState( ({number}) => ({number: number -1 || 1}) )      
    }    
    
    render() {       
        return (           
            <div className="container">                
                <div className="header-container">                                
                    <div className="header-nav">                       
                        <div className="header-logo">
                            <img className="logo-title" src={logo}/>
                        </div>                       
                        <div className="nav-links">
                            <a className="nav-link" href="#">Browse</a>
                            <a className="nav-link" href="#">Movies</a>
                            <a className="nav-link" href="#">TV Shows</a>
                            <a className="nav-link" href="#">News</a>
                        </div>                    
                    </div>
                    <div className = "header-banner">
                        <img src={daredevillogo}/>
                    </div>
                    <div className = "header-label">
                        <img src={label}/>
                    </div>
                    <div className="header-text">
                        Matt Murdock, with his other senses superhumanly 
                        enhanced, fights crime as a blind Lawyer 
                        by day, and vigilante by night.
                    </div>                    
                    <p className="text-footer">54min  |  Action, Crime, Drama  |   TV Series (2015– )</p>
                    <div className="counter">                                        
                        <div className="play-link">
                            <button className="play-btn">
                                <p className="play-text">Watch episode</p>
                            </button>
                        </div>                       
                        <div className="btn-counter">                           
                            <button onClick = {this.changePosNumber} className="btn-inc">
                                <img src={uparrow}/>
                            </button>
                            <p className="ep-btn">{this.state.number}</p>                       
                           <button onClick = {this.changeNegNumber} className="btn-dec">
                                <img src={arrow}/>
                            </button>                       
                        </div>                   
                    </div>                
                </div>  
            </div>

        )
    }
} 
