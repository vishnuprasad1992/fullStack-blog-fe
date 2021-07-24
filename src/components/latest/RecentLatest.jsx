import { Link } from 'react-router-dom'
import './latest.css'

const RecentLatest = ({ lastRecent, pf }) => {

    return (
        <>
            {lastRecent && lastRecent.map(post => (
                <Link key={post._id} to={`/posts/${post.slug}`} className="link">
                    <div className="row mb-3">
                        <div className="col-4">
                            <img src={pf + post.file.filepath} className="img-border-radius" alt={post.title} />
                        </div>
                        <div className="col-8">
                            <h6>{post.title}</h6>
                            <p className="card-text"><small className="text-muted">{new Date(post.createdAt).toLocaleDateString()}</small></p>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default RecentLatest
