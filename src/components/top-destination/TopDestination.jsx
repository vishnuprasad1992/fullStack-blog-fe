import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TopDestination = () => {

    const { allPosts, postIsLoading } = useSelector(state => state.posts);
    const latestPost = allPosts.slice(-6)

    const pf = "http://localhost:5000/"

    return (
        <div className="container my-3">
            <span className="bg-dark text-white p-1">Top Destination</span>
            <div className="row mt-3">
                <hr />
                {latestPost && latestPost.map(post => (
                    <div key={post._id} className="col-lg-4 col-md-9 col-sm-12 mb-3">
                        <Link to={`/posts/${post.slug}`} className="link">
                            {postIsLoading && <div className="text-center">
                                <i className="fas ms-2 fa-spinner fa-1x fa-spin"></i>
                            </div>
                            }
                            <div className="row">
                                <div className="col-4">
                                    <img src={pf + post.file.filepath} className="img-border-radius" alt={post.title} />
                                </div>
                                <div className="col-8">
                                    <h6>{post.title}</h6>
                                    <p className="card-text"><small className="text-muted">{new Date(post.createdAt).toLocaleDateString()}</small></p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
                <hr />
            </div>
        </div>
    )
}

export default TopDestination
