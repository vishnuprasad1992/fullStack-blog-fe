import './adminnav.css'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                    <div className="container">
                        <Link className="nav-link me-auto fw-bolder fs-large text-dark" to="/blog-admin/home">admin</Link>
                        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                            <ul className=" navbar-nav fw-bold ">
                                <li className="nav-item px-5 ">
                                    <Link className="nav-link  text-dark" to="/blog-admin/users">Users</Link>
                                </li>
                                <li className="nav-item  px-5">
                                    <Link className="nav-link  text-dark" to="/blog-admin/posts">Posts</Link>
                                </li>
                                <li className="nav-item px-5">
                                    <Link className="nav-link  text-dark" to="/blog-admin/category">Category</Link>
                                </li>
                                <li className="nav-item px-5">
                                    <Link className="nav-link go-to-web text-white" to="/"> Goto Websilte</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default AdminNavbar
