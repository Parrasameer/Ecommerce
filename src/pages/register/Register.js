
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'


function Register() {
    // one way 
    // let user = {}
    const naviagte = useNavigate();
    function HandleFormSubmit(event) {
        // console.log(event.target.email.value)
        event.preventDefault()
        // redirect to sign in page
        naviagte("/SignIn")
    }
    // second way
    const [user, setUser] = useState({})
    return (
        <div className="register-form" >
            <h5> Please Register</h5>
            <hr />
            <form onSubmit={HandleFormSubmit} action="">
                <div className="mb-3">
                    <label className="form-label">
                        Email
                    </label>
                    <input onInput={(e) => {
                        user.email = e.target.value;
                        setUser(user)
                    }} name='email' className="form-control" type="email" />
                </div>
                <div className='row'>
                    <div className="mb-3 col-6 ">
                        <label className="form-label">
                            First Name
                        </label>
                        <input onInput={(e) => {
                            if (!user.name) user.name = {}
                            user.name.firstname = e.target.value;
                            setUser(user)
                        }} className="form-control" type="text" />
                    </div>
                    <div className="mb-3 col-6">
                        <label className="form-label">
                            Last Name
                        </label>
                        <input onInput={(e) => {
                            if (!user.name) user.name = {}
                            user.name.lastname = e.target.value;
                            setUser(user)
                        }} className="form-control" type="text" />
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Username
                    </label>
                    <input onInput={(e) => {

                        user.username = e.target.value;
                        setUser(user)
                    }} className="form-control" type="text" />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Password
                    </label>
                    <input onInput={(e) => {

                        user.password = e.target.value;
                        setUser(user)
                    }} className="form-control" type="password" />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Phone Number
                    </label>
                    <input onInput={(e) => {

                        user.phoneNumber = e.target.value;
                        setUser(user)
                    }} className="form-control" type="tel" />
                </div>
                <h6> Address</h6>
                <div className='row'>
                    <div className="mb-3 col-6">

                        <input onInput={(e) => {
                            if (!user.address) user.address = {}
                            user.address.city = e.target.value;
                            setUser(user)
                        }} placeholder="City" className="form-control" type="text" />
                    </div>
                    <div className="mb-3 col-6">

                        <input onInput={(e) => {
                            if (!user.address) user.address = {}
                            user.address.street = e.target.value;
                            setUser(user)
                        }} placeholder="Street" className="form-control" type="text" />
                    </div>

                    <div className="mb-3 col-4">

                        <input onInput={(e) => {
                            if (!user.address) user.address = {}
                            user.address.zipcode = e.target.value;
                            setUser(user)
                        }} placeholder="Zip Code" className="form-control" type="text" />
                    </div>
                    <div className="mb-3 col-2">

                        <input onInput={(e) => {
                            if (!user.address) user.address = {}
                            user.address.flatNumber = e.target.value;
                            setUser(user)
                        }} placeholder="Flat No" className="form-control" type="text" />
                    </div>
                </div>

                <button type="submit" className='float-end btn btn-success'> Register</button>
            </form>

        </div>
    )

}
export default Register