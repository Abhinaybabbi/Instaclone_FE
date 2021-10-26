import "./register.css";
// import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
// import { setToken } from "../../utils/authOperations";
// import history from '../../utils/history';
function Register() {
    const register = async e => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/register", {
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
                name:e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value
            }) // body data type must match "Content-Type" header
          });
        // const{ Data }=await response.json(); // parses JSON response into native JavaScript objects
        // setToken(Data.token);
        console.log(response)
        window.location.href="/";
    }
    return <div className="homepage">
        <div className="form-login">
            <form onSubmit={e => register(e)}>
                <label htmlFor="name">Name:</label>
                <input name="name" type="name"/>
                <br/>
                <label htmlFor="email">Email:</label>
                <input name="email" type="email"/>
                <br/>
                <label htmlFor="password">Password:</label>
                <input name="password" type="password" /> 
                <br/>
                <br/>
                <Button type="submit" className="btn">Register</Button>

            </form>
        </div>
    </div>
};
export default Register;