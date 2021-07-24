import './latest.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Latest = () => {
    const { allPosts, postIsLoading } = useSelector(state => state.posts);
    const animal = allPosts.filter(post => post.category === "animals")
    const postFour = animal.slice(-4)

    const pf = "http://localhost:5000/"

    return (
        <>
            {postFour.map(animalPost => (
                <Link key={animalPost._id} to={`/posts/${animalPost.slug}`} className="link">
                    <div className="row mb-3">
                        {postIsLoading && <div className="text-center m-auto">
                            <i className="fas ms-2 fa-spinner fa-2x fa-spin"></i>
                        </div>
                        }
                        <div className="col-4">
                            <img src={pf + animalPost.file.filepath} className="img-border-radius" alt={animalPost.title} />
                        </div>
                        <div className="col-8">
                            <h6>{animalPost.title}</h6>
                            <p className="card-text"><small className="text-muted">{new Date(animalPost.createdAt).toLocaleDateString()}</small></p>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default Latest
