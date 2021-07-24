import './posts.css'
import AdminNavbar from '../AdminNavbar';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPostAction } from '../../../actions/postActions';
import { getAllCategoryAction } from '../../../actions/createCategoryAction';
import { getAllUsers } from '../../../actions/createUserAction';



const CreatePost = () => {

    const { categories } = useSelector(state => state.createCategory)
    const { allUsers } = useSelector(state => state.createUser)
    const { isLoading,createMessage,createError } = useSelector(state => state.posts)

    const dispatch = useDispatch()

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState("");
    const [status, setStatus] = useState("draft");
    const [metaKey, setMetaKey] = useState("");
    const [metaContent, setMetaContent] = useState("");

    useEffect(() => {
        if (categories.length === 0) {
            dispatch(getAllCategoryAction())
        }
        dispatch(getAllUsers())
    }, [dispatch, categories.length])

    var slugify = (str) => {
        return str.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    }
    const createNewPost = (e) => {
        e.preventDefault();

        const slug = slugify(title);
        const categorySlug = slugify(category);

        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("metaContent", metaContent);
        formData.append("content", content);
        formData.append("status", status);
        formData.append("slug", slug);
        formData.append("categorySlug", categorySlug);
        formData.append("category", category);
        formData.append("metaKey", metaKey);
        formData.append("author", allUsers[0]);
        
        dispatch(createPostAction(formData));

        setMetaContent("")
        setMetaKey("")
        setFile("")
        setStatus("draft")
        setTitle("")
        setContent("")
    }
    return (
        <div className="create-post">
            <AdminNavbar />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-md-12 my-5 bg-light">
                        <h1 className="text-center mb-3 heading-color py-3" >Create Post<i className="fas fa-folder-plus ms-3"></i></h1>
                        {createError && <div className="alert alert-danger text-center">{createError}</div>}
                        {createMessage && <div className="alert alert-danger text-center">{createMessage}</div>}
                        <form onSubmit={createNewPost} encType="multipart-formData">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    placeholder="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="content" className="form-label">Content</label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    id="content"
                                    placeholder="content"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    required
                                    rows="4"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">category</label>
                                <select value={category} className="form-control" onChange={(e) => setCategory(e.target.value)}>
                                    <option className="form-control" value="category">Select Category</option>
                                    {categories.length > 0 ?
                                        categories.map(cat => (<option key={cat._id} className="form-control" value={cat.category}>{cat.category}</option>)) :
                                        (<option className="form-control" value="category">Category</option>)
                                    }
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="status" className="form-label">Status</label>
                                <select value={status} className="form-control" onChange={(e) => setStatus(e.target.value)}>
                                    <option className="form-control" value="draft">Draft</option>
                                    <option className="form-control" value="publish">Publish</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="metaContent" className="form-label">Meta content</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="metaContent"
                                    placeholder="metaContent"
                                    value={metaContent}
                                    onChange={(e) => setMetaContent(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="metaKey" className="form-label">Meta Key</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="metaKey"
                                    placeholder="meta key"
                                    value={metaKey}
                                    onChange={(e) => setMetaKey(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="image"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    required
                                />
                            </div>
                                <button type="submit" className="btn btn-primary mb-3 text-center ">Create Post</button>
                            {isLoading && <i className="fas ms-2 fa-spinner fa-2x fa-spin"></i>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost
