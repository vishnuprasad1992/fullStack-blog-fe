import './registeration.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { createUserAction } from '../../../actions/createUserAction';



const BlogAdminRegisteration = () => {

    const { userIsLoading, createUserMessage, createUserError } = useSelector(state => state.createUser)
    const dispatch = useDispatch()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCpassword] = useState("");


    const createNewUser = async (e) => {
        e.preventDefault();
        try {
            if (password !== cPassword) {
                return alert("password no match")
            }
            const newUser = {
                name,
                email,
                mobile,
                address,
                password,
                cPassword
            }
            await dispatch(createUserAction(newUser));
            setAddress('');
            setCpassword('');
            setEmail('');
            setMobile('');
            setName('');
            setPassword('');
            setCpassword('')

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className="register">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 bg-light my-3 beautify">
                        <h1 className="text-center mb-3 heading-color" >Register <i className="fas fa-user-plus"></i></h1>
                        {createUserError && <div className="alert alert-danger text-center">{createUserError}</div>}
                        {createUserMessage && <div className="alert alert-success text-center">{createUserMessage}</div>}
                        <form onSubmit={createNewUser}>
                            <div className="mb-3 ">
                                <label htmlFor="name" className="form-label">Enter your name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Enter your email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mobile" className="form-label">Enter your mobile</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="mobile"
                                    placeholder="mobile number"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Enter your Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    placeholder="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="cpassword"
                                    placeholder="confirm password"
                                    value={cPassword}
                                    onChange={(e) => setCpassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary text-center ">Submit</button>
                            {userIsLoading && <i className="fas ms-2 fa-spinner fa-1x fa-spin"></i>}
                        </form>
                        <div className="mt-3">
                            <span>Having an account?
                                <Link className="ms-1" to="/blog-admin-login">
                                    Login
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BlogAdminRegisteration

