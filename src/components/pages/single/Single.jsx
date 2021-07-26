import Footer from '../../footer/Footer'
import Navbar from '../../navbar/Navbar'
import './single.css';
import { useParams } from 'react-router';
import { getAllPosts } from '../../../actions/postActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoryAction } from '../../../actions/createCategoryAction';
import { Link } from 'react-router-dom';
import RecentCardForCategory from '../../cards-main/RecentCardForCategory';

const Single = () => {

    const { slug } = useParams()
    const { categories } = useSelector(state => state.createCategory)
    const { allPosts, postIsLoading } = useSelector(state => state.posts);
    const singlePost = allPosts.filter(post => post.slug === slug)
    const categorywisePosts = allPosts.filter(post => post.category === singlePost[0].category)

    const lastElement = categorywisePosts.slice(-2, -1)
    const forCardPosts = categorywisePosts.slice(-4, -1)

    const dispatch = useDispatch()

    const pf = "https://blog-start-backend.herokuapp.com/";

    useEffect(() => {
        dispatch(getAllPosts());
        dispatch(getAllCategoryAction())
    }, [dispatch])


    return (
        <div className="hotel">
            < Navbar />
            <div className="container">
                <div className="row py-5">
                    <div className="col-lg-9 col-md-12 col-sm-12 mb-5">
                        {singlePost.map(recent => (
                            <div key={recent._id}>
                                {postIsLoading && <div className="m-auto text-center">
                                    <i className="fas ms-2 fa-spinner fa-2x fa-spin"></i>
                                </div>
                                }
                                <img src={pf + recent.file.filepath} className="recent-img" alt={recent.title} />
                                <div className="recent-badge my-3">
                                    <small className="badge bg-dark ">{recent.category}</small>
                                    <small className="text-muted">{new Date(recent.createdAt).toLocaleDateString()}</small>
                                </div>
                                <h2 >{recent.title}</h2>
                                <small className="badge bg-success p-2 mb-3 ">{recent.author}</small>
                                <p className="recent-para">{recent.content}</p>
                            </div>
                        ))}
                        <hr />
                        <div className="row my-3 py-5">
                            <RecentCardForCategory posts={forCardPosts} pf={pf} />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-12 col-sm-12">
                        {lastElement && lastElement.map(last => (
                            <Link key={last._id} to={`/posts/${last.slug}`} className="link" >
                                <div  className="card mb-3">
                                    {postIsLoading && <div className="m-autotext-center">
                                        <i className="fas ms-2 fa-spinner fa-1x fa-spin"></i>
                                    </div>
                                    }
                                    <img src={pf + last.file.filepath} className="card-img-top  " alt={last.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{last.title}</h5>
                                        <div className="card-text d-flex">
                                            <small className="text-muted">{new Date(last.createdAt).toLocaleDateString()}</small>
                                            <small className="badge bg-dark ms-5">{last.category}</small>
                                        </div>
                                        <p className="card-text">{last.content}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                        <hr />
                        <div className="category">
                            <h5>Categories</h5>
                            {categories && categories.map(cat => (
                                <Link key={cat._id} style={{ textDecoration: "none", textTransform: "capitalize" }} className="text-dark" to={`/category/${cat.category}`}>
                                    <p>{cat.category}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Single
