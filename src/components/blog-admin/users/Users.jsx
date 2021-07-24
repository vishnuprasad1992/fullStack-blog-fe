import React, { useEffect } from 'react'
import { getAllUsers } from '../../../actions/createUserAction'
import AdminNavbar from '../AdminNavbar';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Users = () => {
    const { getAllUserIsLoading, allUsers, getAllUserError } = useSelector(state => state.createUser)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    const deleteUser = (id) => {
        console.log(id)
    }

    return (
        <div className="users">
            <AdminNavbar />
            <div className="container">
                <div className="row py-3 justify-content-center">
                    <h1 className="text-center mb-3" >All Users</h1>
                    {getAllUserIsLoading && <div className="text-center">
                        <i className="fas ms-2 fa-spinner fa-2x fa-spin"></i></div>}
                    {getAllUserError && <div className="alert alert-danger text-center">{getAllUserError}</div>}
                    <div className="col-lg-9">
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Roll</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allUsers.length > 0 ?
                                        allUsers.map((user) => (
                                            <tr key={user._id}>
                                                <td>{user._id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.isAdmin}</td>
                                                <td className="text-center">
                                                    <Link to={`/blog-admin/user/${user._id}`}>
                                                        <i className="fas text-success me-2 fa-edit"></i>
                                                    </Link>
                                                    <i onClick={deleteUser(user._id)} className="fas text-danger  ms-2 fa-trash"></i>
                                                </td>
                                            </tr>
                                        )) :
                                        <tr>
                                            <td colSpan="4" className="text-center">
                                                No users Found
                                            </td>
                                        </tr>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Users
