import React from 'react'
import Card from '../cards-main/Card'
import Latest from '../latest/Latest'

const Popular = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-8 col-md-12">
                    <span className="bg-dark text-white p-1">Popular</span>
                    <hr />
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <Card />
                        </div>
                        <div className="col-lg-6">
                            <Latest />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <span className="bg-dark text-white p-1">Latest</span>
                    <hr />
                    <Latest />
                </div>
            </div>
        </div>
    )
}

export default Popular
