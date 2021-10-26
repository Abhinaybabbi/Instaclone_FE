import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Post from "../Post/index";
import "./index.css";
import { getToken } from "../../utils/authOperations"


function Posts() {
    const [posts,setPosts] = useState([]);
  
    async function getData(){
      try {
        const response = await fetch("http://localhost:5000/posts", {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
              'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': `Bearer ${getToken()}`
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
           // body data type must match "Content-Type" header
        });
        const { data } = await response.json();
        setPosts(data.posts);
      } catch(e) {
        console.log(e);
      }
    
    }
    // Mocking ComponentDid Mount method
    useEffect(()=>{
      getData()
    },[]); //it will only call the getData once when the component is mounted 
  
    return(
    <div className="body">
      <nav className="navbar">
            <h1 className="navbar-brand">Instclone</h1>
            {/* <input className="search" type="search"></input> */}
            <Link to={"/addpost"}><button className="btn"><i className="fas fa-camera"/></button></Link>  
      </nav>
      {/* <Header showModel={()=> alert("Add Post")}/> */}
      <div className="posts">
        {posts.map(post=>
          <Post key={post._id} {...post}/>
          )}
      </div>
    </div>
    )
}
  
export default Posts;