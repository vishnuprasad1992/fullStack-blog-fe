import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Card = () => {

    const { allPosts, postIsLoading } = useSelector(state => state.posts);
    const hotel = allPosts.filter(post => post.category === "hotels")
    const lastHotelPost = hotel.slice(-1)
    const pf = "https://blog-start-backend.herokuapp.com/"



    return (
        <div className="card mb-3">
            {lastHotelPost.map(post => (
                <div key={post._id}>
                    {postIsLoading && <div className="m-autotext-center">
                        <i className="fas ms-2 fa-spinner fa-2x fa-spin"></i>
                    </div>
                    }
                    <Link to={`/posts/${post.slug}`} className="link">
                        <img src={pf + post.file.filepath} className="card-img-top  " alt={post.title} />
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <div className="card-text d-flex">
                                <small className="text-muted">{new Date(post.createdAt).toLocaleDateString()}</small>
                                <small className="badge bg-dark ms-5">{post.category}</small>
                            </div>
                            <p className="card-text">{post.content}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Card
