import React, {Component} from 'react';
import pnglogo from "../assets/images/pnglogo.png"

export default class Footer extends Component {
    render() {
        return(
            <div className="footer">                       
                        <div>
                            <img  className="footer-logo" src={pnglogo}/>
                        </div>
                        <p className="footer-rights">2016 Movies . All Rights Reserved</p>               
                    <div className="footer-mark">
                        <p>Terms of service</p>
                        <p>Privasy Policy</p>
                    </div>
             </div>
        )
    }
}