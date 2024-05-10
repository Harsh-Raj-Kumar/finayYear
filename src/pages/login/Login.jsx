import React, { useRef, useState } from "react";
import "./login.css";
import axios from "axios";
// import PersonIcon from '@mui/icons-material/Person';
// import EmailIcon from '@mui/icons-material/Email';
// import HttpsIcon from '@mui/icons-material/Https';
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    const [check,setCheck] = useState(false);
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleIconClick = () => {
        navigate("/");
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const newUser = {
            username : nameRef.current.value,
            email : emailRef.current.value,
            password : passwordRef.current.value
        };

        try {
            await axios.post("http://localhost:8080/user/register",newUser);
            console.log("New User registered", newUser);
        }catch(err) {
            console.log("Couldn't register",err);
        }
    }

    return (
        <div className="Login">
            
            <div className="loginContainer">

                <CancelIcon className="materialIcon" 
                onClick={() => handleIconClick()}
                />
                {/* <input type="checkbox" id="chk" aria-hidden="true" /> */}
                
                <div className="signUp">

                    <form onSubmit={handleSubmit}>
                        <label 
                        for="chk" 
                        aria-hidden="true"
                        onClick={() => {
                            console.log(check);
                            setCheck(!check)}}
                        style={ check ?  {  transform:`scale(${.6})` } : {}}
                        > Sign up </label>
                        <input
                            type="text"
                            name="txt"
                            placeholder="User name"
                            required=""
                            ref={nameRef}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required=""
                            ref={emailRef}
                        />
                        <input
                            type="password"
                            name="pswd"
                            placeholder="Password"
                            required=""
                            ref={passwordRef}
                        />
                        <button>Sign up</button>
                    </form>

                </div>

                <div 
                className={check ? "activateSignIn" : "signIn"}
                // style={ check ?  {  transform:`translateY(${-500})` } : {transform:`translateY(${-180})`}}
                >
                    <form >

                        <label 
                        for="chk" 
                        aria-hidden="true"
                        onClick={() => setCheck(!check)}
                        style={ check ?  {  color:"green" , transform:`scale(${1})` } : {}}
                         >
                            Login
                         </label>
                         <input type="email" name="email" placeholder="Email" required="" />
                         <input type="password" name="pswd" placeholder="Password" required="" />
                        
                        
                        <button>Login</button>
                    </form>

                </div>
            </div>




        </div>
    )
}

export default Login;