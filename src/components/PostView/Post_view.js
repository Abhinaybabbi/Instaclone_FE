import React, { useState } from "react";
import '../PostView/Post_view.css';
import postimg from '../../res/images/image2.PNG';
import {BrowserRouter as Router,Link} from 'react-router-dom';




export default function Postview() {

    const [count,setcount]=useState(0)


function increment(){ 
    setcount(preCount => preCount+1)
}
    return(
    <div>
    
    {/* <h1>Hello</h1> */}
<nav className="navbar p-1 navbar-light bg-light justify-content-between">
  <p className="navbar-brand">Instagram</p>
  <i class="fas fa-camera"></i>
</nav>
 {/* Card1 */}
<div className="row justify-content-md-center pt-4 rb-50px">
    <div className="card fixed-width">
        <div className="card-header">
            <h4>Abhinay</h4>
            <small>Hyderabad</small>

        </div>
            <img className="card-img-top" src={postimg} alt=""/>
            <div className="card-body">

                <button onClick={increment} className="btn btn-success">Like</button>
                <span>{count}likes</span>
                <h5 className="card-title">Card title</h5>

                <p className="card-text">discription</p>
                
            </div>
        </div>
    </div>
    <Link to='/'><button className="btn">Go to Home page</button></Link>
    </div>        

    );
    
}