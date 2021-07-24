import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../../actions/postActions';
import AdminNavbar from '../AdminNavbar';


const Posts = () => {

    const { allPosts, getAllPostError, postIsLoading } = useSelector(state => state.posts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    const deletePost = (id)=>{
        console.log(id)
    }

    return (
        <div className="posts">
            <AdminNavbar />
            <div className="container">
                <Link to='/blog-admin/create-post' className="btn btn-primary mt-5 mb-3"> Create Post</Link>
                <div className="row py-3">
                    <h1 className="text-center mb-3" >All Posts</h1>
                    {postIsLoading && <div className="text-center">
                        <i className="fas ms-2 fa-spinner fa-2x fa-spin"></i>
                        </div>
                        }
                    {getAllPostError && <div className="alert alert-danger text-center">{getAllPostError}</div>}
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Content</th>
                                    <th>Image</th>
                                    <th>Status</th>
                                    <th>Created-Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allPosts.length > 0 ?
                                    allPosts.map((post) => (
                                        <tr key={post._id}>
                                            <td>{post._id}</td>
                                            <td>{post.title}</td>
                                            <td>{post.category}</td>
                                            <td>{post.content}</td>
                                            <td>{post.file.filename}</td>
                                            <td>{post.status}</td>
                                            <td>{new Date(post.createdAt).toLocaleDateString()}</td>
                                            <td className="text-center">
                                                <Link to={`/blog-admin/posts/${post._id}`}>
                                                    <i className="fas text-success me-2 fa-edit"></i>
                                                </Link>
                                                <i onClick={()=>deletePost(post._id)} className="fas text-danger  ms-2 fa-trash"></i>
                                            </td>
                                        </tr>
                                    )) :
                                    <tr>
                                        <td colSpan="7" className="text-center">
                                            No Posts Found
                                        </td>

                                    </tr>}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Posts
