import React, {Component} from "react";
import post1 from "../assets/images/post1.jpg";
import post2 from "../assets/images/post2.jpg";
import post3 from "../assets/images/post3.jpg";
import post4 from "../assets/images/post4.jpg";
import post5 from "../assets/images/post5.jpg";
import post6 from "../assets/images/post6.jpg";
import post7 from "../assets/images/post7.jpg";
import post8 from "../assets/images/post8.jpg";
import post9 from "../assets/images/post9.jpg";
import post10 from "../assets/images/post10.jpg";
import post11 from "../assets/images/post11.jpg";
import post12 from "../assets/images/post12.jpg";

const cards = [post1, post2, post3, post4, post5, post6];
const cards2 = [post7, post8, post9, post10, post11, post12];


export default class Body extends Component {
    render () {
        return(
            <div className="body">
                        <h1 className="body-title">Popular Movies</h1>                    
                    
                    <div className="body-post">
                        {cards.map((item, index) => 
                            <img key={index} src={item}/>
                        )}
                    </div>
                        <h1 className="shows-title">Popular TV Shows</h1>

                    <div className="body-shows">
                        {cards2.map((item, index) => 
                            <img key={index} src={item}/>
                        )}                                      
                    </div>                
                    
            </div>
        )
    }
}
