import React from 'react'
import BelowRecentCard from '../../below-recent-cards/BelowRecentCard'
import TopCards from '../../cards/TopCards'
import Footer from '../../footer/Footer'
import Navbar from '../../navbar/Navbar'
import Popular from '../../popular/Popular'
import RecentCard from '../../recent-card-3col/RecentCard'
import TopDestination from '../../top-destination/TopDestination'

const Home = () => {
    return (
        <div className="home">
            < Navbar />
            <div className="container-fluid bg-light">
                <TopCards />
                <Popular />
                <TopDestination />
                <RecentCard />
                <BelowRecentCard />
            </div>
            <Footer />
        </div>

    )
}

export default Home
