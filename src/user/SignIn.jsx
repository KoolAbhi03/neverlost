import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../styles.css";
import { useAuth } from "../auth/AuthContext";
import { auth } from "../auth/firebase";
import { DatabaseMethods, findUserWithEmail } from "../auth/database";
const SignIn = () => {
    const { signup } = useAuth();
    const [values, setValues] = useState({
        email: "",
        password: "",
        loading: false,
        error: "",
        didredirect: false,

    });
    const { email, password, error, loading, didredirect } = values;
    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const onsubmit = async e => {
        e.preventDefault();
        console.log("asd");
        setValues({ ...values, didredirect: true })
        try {
            console.log(email);
            await signup(email, password)
        } catch (error) {
            console.log(error.message);
        }
    }
    const performRedirect = () => {
        if (didredirect === true) {
            return <Redirect to="/home" />
        }
    }
    const SignInform = () => {
        return (
            <div
                style={{ width: "40%", minWidth: "400px", maxWidth: "800px", height: "500px", backgroundColor: "white", border: "15px", borderRadius: "5px", paddingLeft: "40px", paddingRight: "40px", paddingBottom: "40px", paddingTop: "50px", boxShadow: "0px 10px 6px -6px #000" }}>
                <h1>
                    SignIn
                </h1>
                <h6>Enter your details to continue</h6>
                <div style={{ paddingTop: "15px", paddingRight: "50px" }}>
                    <label style={{ fontSize: "18px", paddingBottom: "5px" }}>Email</label>
                    <input type="email" className="form-control" placeholder="johndoe@example.com" onChange={handleChange("email")} />
                </div>
                <div style={{ paddingTop: "15px", paddingRight: "50px" }}>
                    <label style={{ fontSize: "18px", paddingBottom: "5px" }}>Password</label>
                    <input type="password" className="form-control" onChange={handleChange("password")} />
                </div>
                <div style={{ marginTop: "15px", width: "30%" }}>
                    <button className="btn" style={{ color: "white", backgroundColor: "#12558A" }} onClick={onsubmit}>Sign In</button>
                </div>
                <div style={{ paddingTop: "15px" }}>
                    <h6>
                        Don't have a account? <Link to="/signup">Create new account</Link>
                    </h6>
                </div>
            </div>
        )
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            {SignInform()}
            {performRedirect()}
        </div>
    )

}

export default SignIn;