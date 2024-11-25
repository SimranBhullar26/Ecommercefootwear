import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import styles from "../Styles/SignIn.css";  

export default function SignIn() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate=useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const data ={
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        const status=await SignIn(data);
        {status?navigate("/"):navigate("/signin")};
    }
    
    return (
        <div className='{styles.container}'>

            <div className={styles.inputForm}>
                <h1>Sign In</h1>

                <form actions="" onSubmit={handleSubmit}>

                    <input type="email" placeholder='Enter Email..'  required  ref={emailRef}/>
                    <input type="password" placeholder='Enter Password..' required ref={passwordRef}/>

                    <button type="submit">Sign In</button>
                    </form>
                    <br />
                    <span>or &nbsp; </span>
                    <NavLink to='/signup'> Create New Account</NavLink>
            </div>
            
        </div>
    )
}
