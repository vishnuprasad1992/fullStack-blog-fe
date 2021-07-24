import './navbar.css';
import { Link } from 'react-router-dom';
import Hero from '../hero/Hero';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllCategoryAction } from '../../actions/createCategoryAction';


const Navbar = () => {
    const { categories } = useSelector(state => state.createCategory)
    const firstThree = categories.slice(0,3)
    const len = categories.length + 1
    const remainingCategory = categories.slice(3,len)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCategoryAction())
    }, [dispatch])
    return (
        <div className="blog">
            <Hero />
            <nav className="navbar navbar-font-size navbar-expand-lg navbar-color">
                <div className="container">
                    <Link className="navbar-brand wheat" to="/">
                        <h5>Blog</h5>
                    </Link>
                    <button className="navbar-toggler wheat" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars text-white"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link wheat" aria-current="page" to="/">Home</Link>
                            </li>
                            {firstThree && firstThree.map(cat=>(
                            <li key={cat._id} className="nav-item">
                                <Link className="nav-link wheat" to={`/category/${cat.category}`}>{cat.category}</Link>
                            </li>
                            ))}
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle wheat" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </Link>
                                <ul className="dropdown-menu navbar-color" aria-labelledby="navbarDropdown">
                                    {remainingCategory && remainingCategory.map(cate=>(
                                        <li key={cate._id}><Link className="dropdown-item wheat" to={`/category/${cate.category}`}>{cate.category}</Link></li>
                                    ))}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link wheat" to="#!" tabIndex="-1" aria-disabled="true">Contact us</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
