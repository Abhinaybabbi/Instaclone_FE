import "./addpost.css";
// import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
// import { setToken } from "../../utils/authOperations";
// import history from '../../utils/history';
function Addpost() {
    const add_post = async e => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/posts", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({
                location:e.target.location.value,
                author: e.target.author.value,                
                title: e.target.title.value,
                body: e.target.body.value,
                image: e.target.image.value
            }) // body data type must match "Content-Type" header
          });
        // const{ Data }=await response.json(); // parses JSON response into native JavaScript objects
        // setToken(Data.token);
        console.log(response)
        window.location.href="/posts";
    }
    return <div className="postpage">
        <div className="form-addpost">
            <form onSubmit={e => add_post(e)}>
            <label htmlFor="image">Image:</label>
                <input name="file" type="file"/>
                <br/>
                <div className="Aulo">
                <label htmlFor="author">Author:</label>
                <input name="author" type="text"/>
                <br/>
                <label htmlFor="location">Location:</label>
                <input name="location" type="text"/>
                <br/>
                </div>
                <div className="disc">
                <label htmlFor="body">Discription:</label>
                <input name="body" type="text" /> 
                </div>
                <br/>
                <Button type="submit" className="btn">Post</Button>

            </form>
        </div>
    </div>
};
export default Addpost;