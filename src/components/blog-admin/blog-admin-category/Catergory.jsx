import React from 'react'
import AdminNavbar from '../AdminNavbar';
import { useState, useEffect } from 'react';
import { createCategoryAction, getAllCategoryAction } from '../../../actions/createCategoryAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Catergory = () => {
    const { catIsLoading,
        createCatMessage,
        createCatError,
        getAllCatLoading,
        getAllCatError,
        categories
    } = useSelector(state => state.createCategory)

    const [category, setCategory] = useState("");
    const [metaContent, setMetaContent] = useState("");
    const [metaKey, setMetaKey] = useState("");
    const [pagename, setPagename] = useState("");

    const dispatch = useDispatch()

    useEffect(() => {
            dispatch(getAllCategoryAction())
    }, [dispatch])

    const addCategory = async (e) => {

        e.preventDefault();
        const catData = {
            category,
            metaContent,
            metaKey,
            pagename
        }
        await dispatch(createCategoryAction(catData))
        await dispatch(getAllCategoryAction())


        setCategory("")
        setMetaContent("")
        setMetaKey("")
        setPagename("")
    }

    const deleteCategory = (id)=>{
        console.log(id)
    }

    return (
        <div className="category">
            <AdminNavbar />
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-6 col-md-12 my-5 bg-light">
                        <h1 className="text-center mb-3 heading-color py-3" >Add category<i className="fas fa-folder-plus ms-3"></i></h1>
                        {createCatMessage && <div className="alert alert-danger text-center">{createCatMessage}</div>}
                        {createCatError && <div className="alert alert-danger text-center">{createCatError}</div>}
                        <form onSubmit={addCategory}>
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Category Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="category"
                                    placeholder="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="metaContent" className="form-label">Add meta content</label>
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
                                <label htmlFor="metaKey" className="form-label">MetaKey</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="metaKey"
                                    placeholder="metaKey"
                                    value={metaKey}
                                    onChange={(e) => setMetaKey(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pagename" className="form-label">Category pagename</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="pagename"
                                    placeholder="pagename"
                                    value={pagename}
                                    onChange={(e) => setPagename(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mb-3 text-center ">Add Category</button>
                            {catIsLoading && <i className="fas ms-2 fa-spinner fa-1x fa-spin"></i>}
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-12 my-5 bg-light login-beautify">
                        <h1 className="mb-3 py-3 text-center"> List of Categories</h1>
                        {getAllCatLoading && <div className="text-center"><i className="fas ms-2 fa-spinner fa-3x fa-spin"></i></div>}
                        {getAllCatError && <div className="alert alert-danger text-center">{getAllCatError}</div>}
                        <div className="table-responsive">
                            <table className="table table-light table-hover table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Category Id</th>
                                        <th>Category Name</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        categories.length > 0 ? 
                                        categories.map((cat) =>
                                        (
                                            <tr key={cat._id}>
                                                <td>{cat._id}</td>
                                                <td>{cat.category}</td>
                                                <td className="text-center">
                                                    <Link to={`/blog-admin/category/${cat._id}`}>
                                                        <i className="fas text-success me-2 fa-edit"></i>
                                                    </Link>
                                                    <i onClick={()=>deleteCategory(cat._Id)} className="fas text-danger  ms-2 fa-trash"></i>
                                                </td>
                                            </tr>
                                        )) : <tr className="text-center">
                                            <td colSpan="3">No Categories Found</td></tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catergory
