import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const RecentCard = () => {
    const { allPosts, postIsLoading } = useSelector(state => state.posts);
    const hotel = allPosts.filter(post => post.category === "hotels")
    const hotelRecentPosts = hotel.slice(-4)

    const pf = "http://localhost:5000/"

    return (
        <div className="container">
            <div className="row mt-3 mb-3">
                {hotelRecentPosts && hotelRecentPosts.map(post => (
                    <div key={post._id} className="col-lg-3 col-md-6 col-sm-12 mb-3">
                        {postIsLoading && <div className="text-center">
                            <i className="fas ms-2 fa-spinner fa-2x fa-spin"></i>
                        </div>
                        }
                        <Link to={`/posts/${post.slug}`} className="link">
                            <div className="card bg-dark text-white">
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
        </div>
    )
}

export default RecentCard
