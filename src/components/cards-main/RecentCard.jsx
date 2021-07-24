import React from 'react'

const RecentCard = () => {
    return (
        <div className="col-4">
            <div className="card mb-3">
                <img src="../assets/card-images/pexels-daria-shevtsova-705675.jpg" className="card-img-top  " alt="popular" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <div className="card-text d-flex">
                        <small className="text-muted">Last updated 3 mins ago</small>
                        <small className="badge bg-dark ms-5">Popular</small>
                    </div>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero at commodi placeat. Iusto provident repudiandae similique laboriosam dicta pariatur porro? Ipsa, sint. Non, nesciunt quaerat? Suscipit quis minima veniam soluta.</p>
                </div>
            </div>
        </div>
    )
}

export default RecentCard
