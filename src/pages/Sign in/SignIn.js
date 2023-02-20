import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css"
function SignIn() {
    const naviagte = useNavigate()
    const [user1, setuser1] = useState({})
    function signInhandler(e) {
        e.preventDefault();
        console.log(user1)
        naviagte("/")


    }
    return (
        <div className="MainDiv">
            <h3> please SignIn  </h3><div className="form-signin">

                <form onSubmit={signInhandler}>
                    <label > Username</label>
                    <input onInput={function (e) {
                        user1.UserName = e.target.value;
                        setuser1(user1)
                    }}
                        className="form-control" type="text"></input>
                    <div>
                        <label> password</label>
                        <input onInput={(e) => {
                            user1.password = e.target.value;
                            setuser1(user1)
                        }} className="form-control" type="password"></input>
                    </div>
                    <button type="submit" className="btn btn-success float-end"> SignIn</button>

                </form>
            </div>

        </div>

    )
}
export default SignIn