import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
    const { categories } = useSelector(state => state.createCategory)
    const { allPosts } = useSelector(state => state.posts);
    const recentPosts = allPosts.slice(-5)


    return (
        <div className="footer">
            <div className="container">
                <div className="row pad">
                    <div className="col-lg-5 col-md-12 col-sm-12 my-3">
                        <h1 className="display-3" > Website Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rerum tempore aspernatur animi omnis a iure hic enim sequi quos, rem dolorum possimus quaerat quae doloremque autem laudantium quas perferendis ab voluptas vero. Tenetur beatae accusamus obcaecati mollitia officiis voluptas explicabo non? Autem aliquam placeat, harum optio deserunt minima! Quia architecto laboriosam expedita nulla. Similique labore.</p>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-12 my-3 quick">
                        <h5>Quick Links </h5>
                        <Link to="/" className="text-white">
                            <p>Home</p>
                        </Link>
                        {categories && categories.map(cat => (
                            <Link key={cat._id} style={{ textDecoration: "none", textTransform: "capitalize" }} className="text-white" to={`/category/${cat.category}`}>
                                <p>{cat.category}</p>
                            </Link>
                        ))}
                        <Link to="/contact-us" className="text-white">
                            <p>Contact us</p>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-12 my-3 cat">
                        <h5>Categories</h5>
                        {categories && categories.map(cat => (
                            <Link key={cat._id} style={{ textDecoration: "none", textTransform: "capitalize" }} className="text-white" to={`/category/${cat.category}`}>
                                <p>{cat.category}</p>
                            </Link>
                        ))}
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 my-3 recent">
                        <h5>Recent Posts</h5>
                        {recentPosts && recentPosts.map(post => (
                            <Link key={post._id} style={{ textDecoration: "none", textTransform: "capitalize" }} className="text-white" to={`/posts/${post.slug}`}>
                                <p>{post.title}</p>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="row">
                    <h6 style={{ textAlign: "center" }}>©blog-template by vishnu. All rights reserved.</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer
