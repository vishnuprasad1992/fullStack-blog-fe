import './topcard.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllPosts } from '../../actions/postActions';
import { Link } from 'react-router-dom';

const TopCards = () => {

    const { allPosts, postIsLoading } = useSelector(state => state.posts);
    const recentPosts = allPosts.slice(-3)
    const dispatch = useDispatch()

    const pf = "http://localhost:5000/"

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    return (
        <div className="row mt-3 mb-3">
            {recentPosts.map((post) => (
                <div key={post._id} className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <Link to={`/posts/${post.slug}`} className="link">
                    <div className="card bg-dark text-white">
                        {postIsLoading && <div className="text-center">
                            <i className="fas ms-2 fa-spinner fa-1x fa-spin"></i>
                        </div>
                        }
                        <img src={pf + post.file.filepath} className="card-img" alt={post.title} />
                        <div className="card-img-overlay d-flex align-items-start justify-content-end flex-column">
                            <div className="badges">
                                <p className="badge bg-dark">{post.category}</p>
                            </div>
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{new Date(post.createdAt).toLocaleDateString()}</p>
                        </div>
                    </div>
                </Link>
                </div>
            ))}

        </div>
    )
}

export default TopCards
