import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../cards-main/Card'
import './belowrecentcard.css'


const BelowRecentCard = () => {
    const { allPosts, postIsLoading } = useSelector(state => state.posts);
    const birds = allPosts.filter(post => post.category === "birds")
    const recentBirds = birds.slice(-3);

    const pf = "https://blog-start-backend.herokuapp.com/"


    return (
        <div className="container">
            <div className="row mt-5 pb-5">
                <div className="col-lg-9 col-md-12">
                    <span className="bg-dark text-white p-1">Travel</span>
                    <hr />
                    {recentBirds && recentBirds.map(post => (
                        <Link key={post._id} to={`/posts/${post.slug}`} className="link">
                            <div className="row mb-3 align-items-center">
                                {postIsLoading && <div className="text-center">
                                    <i className="fas ms-2 fa-spinner fa-2x fa-spin"></i>
                                </div>
                                }
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <img src={pf + post.file.filepath} className="card-img-ht " alt={post.title} />
                                </div>
                                <div className="col-lg-8 col-md-12 col-sm-12 details">
                                    <p className="badge bg-dark ms-2">{post.category}</p>
                                    <h5 className="card-title">{post.title}</h5>
                                    <p>{post.content}</p>
                                    <p className="card-text">{new Date(post.createdAt).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="col-lg-3 col-md-12">
                    <span className="bg-dark text-white p-1">Experiences</span>
                    <hr />
                    <Card />
                </div>
            </div>

        </div>
    )
}

export default BelowRecentCard
