import React from "react";
import './LandingPage.css';
import landingimg from "../../res/images/image.png";
import {BrowserRouter as Router,Link} from 'react-router-dom';
 


export default function Landingpage(){
    return(
    <div className="container">
        <div className="row justify-content-md-center pt-5">
            <div className="col-md-3">
                <img src={landingimg} className="img" alt=""></img>
            </div>
            <div className="col-md-3"> 
                <div className="text-center">
                <h1>10x Acadamey</h1>
                <Link to='/postView'><button className="btn btn-primary">Enter without Login</button></Link>
                </div>
            </div>
        </div>
    </div>
    );
}
            
    


