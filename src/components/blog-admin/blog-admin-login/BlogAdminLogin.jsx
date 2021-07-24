import "./blogadminlogin.css";
import { useState,useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { loginUserAction } from "../../../actions/loginAction";

const BlogAdminLogin = () => {
    const dispatch = useDispatch()
    const history= useHistory()
    var {loginIsLoading,loginUserError} = useSelector(state => state.login)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if(localStorage.getItem("logged-user")){
            history.push("/blog-admin/")
        }else{
            history.push("/blog-admin-login")
        }
    }, [history])

    const loginUser = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password
        }
        if (!userData) {
            return alert("Please fill the credentials")
        }
        dispatch(loginUserAction(userData));
        window.location.href="/blog-admin"
    }

    return (
        <div className="login">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 my-5 bg-light login-beautify">
                        <h1 className="text-center mb-3 heading-color" >Login <i className="fas fa-sign-in-alt"></i></h1>
                        {loginUserError && <div className="alert alert-danger text-center">{loginUserError}</div>}
                        <form onSubmit={loginUser}>
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
                            <button type="submit" className="btn btn-primary text-center ">Submit</button>
                            {loginIsLoading && <i className="fas ms-2 fa-spinner fa-1x fa-spin"></i>}
                        </form>
                        <div className="mt-3">
                            <span >Are you a new user?
                                <Link className="ms-1" to="/blog-admin-registeration">
                                    Register
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BlogAdminLogin
