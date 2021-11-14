import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../styles.css";
import { useAuth } from "../auth/AuthContext";
import { auth } from "../auth/firebase";
import { createUserDatabase, findUserWithEmail } from "../auth/database";
const SignUp = () => {
    const { signup } = useAuth();
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        loading: false,
        error: "",
        didredirect: false,

    });
    const { name, email, password, error, loading, didredirect } = values;
    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const onsubmit = async e => {
        e.preventDefault();
        console.log("asd");
        try {
            console.log(email);
            await signup(email, password).then((data) => {
                const uid = data.user.uid
                createUserDatabase({ name, email, uid })
                setValues({ ...values, didredirect: true })
            })
        } catch (error) {
            console.log(error.message);
        }
    }
    const performRedirect = () => {
        if (didredirect === true) {
            return <Redirect to="/home" />
        }
    }
    const SignUpform = () => {
        return (
            <div
                style={{ width: "40%", minWidth: "400px", maxWidth: "800px", height: "500px", backgroundColor: "white", border: "15px", borderRadius: "5px", paddingLeft: "40px", paddingRight: "40px", paddingBottom: "40px", paddingTop: "50px", boxShadow: "0px 10px 6px -6px #000" }}>
                <h1>
                    SignUp
                </h1>
                <h6>Enter your details to continue</h6>
                <div style={{ paddingTop: "15px", paddingRight: "50px" }}>
                    <label style={{ fontSize: "18px", paddingBottom: "5px" }}>Name</label>
                    <input type="name" className="form-control" placeholder="John Doe" onChange={handleChange("name")} />
                </div>
                <div style={{ paddingTop: "15px", paddingRight: "50px" }}>
                    <label style={{ fontSize: "18px", paddingBottom: "5px" }}>Email</label>
                    <input type="email" className="form-control" placeholder="johndoe@example.com" onChange={handleChange("email")} />
                </div>
                <div style={{ paddingTop: "15px", paddingRight: "50px" }}>
                    <label style={{ fontSize: "18px", paddingBottom: "5px" }}>Password</label>
                    <input type="password" className="form-control" onChange={handleChange("password")} />
                </div>
                <div style={{ marginTop: "15px", width: "30%" }}>
                    <button className="btn" style={{ color: "white", backgroundColor: "#12558A" }} onClick={onsubmit}>Sign Up</button>
                </div>
                <div style={{ paddingTop: "15px" }}>
                    <h6>
                        Already have a account? <Link to="/">SignIn here</Link>
                    </h6>
                </div>
            </div>
        )
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            {SignUpform()}
            {performRedirect()}
        </div>
    )

}

export default SignUp;