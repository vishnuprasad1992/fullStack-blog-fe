import { Link } from 'react-router-dom'
import './cards.css'

const RecentCardForCategory = ({ posts, pf }) => {
    return (
        <>
            {posts &&
                posts.map(post => (
                    <div key={post._id} className="col-lg-4 col-sm-12 col-md-6">
                        <Link to={`/posts/${post.slug}`} className="link">
                            <div className="card mb-3">
                                <img src={pf + post.file.filepath} className="card-img-top" alt={post.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <div className="card-text d-flex">
                                        <small className="text-muted">{new Date(post.createdAt).toLocaleDateString()}</small>
                                        <small className="badge bg-dark ms-5">{post.category}</small>
                                    </div>
                                    <p className="card-text">{post.content}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </>
    )
}

export default RecentCardForCategory
