
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

import styles from "../Styles/SignUp.css";
import { useAuthValue } from '../authContext';

export default function SignUp() {

    const nameRef= useRef();
    const emailRef= useRef();   
    const passwordRef= useRef();

    // const {createUser}=useAuthValue();

    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        // createUser(data);
        // navigate("/signin");
    }
    return (
        <div className={styles.container}>


            <div className={styles.inputForm}>
                <h1>Sign Up</h1>

                <form actions="" onSubmit={handleSubmit}>

                    <input type="text" placeholder='Name'  required ref={nameRef}/>
                    <input type="email" placeholder='Enter email'  required ref={emailRef}/>
                    <input type="password" placeholder='Enter password..' required ref={passwordRef} />

                    <button type="submit">Sign Up</button>
    
                </form>
                </div></div>
                )
                }
