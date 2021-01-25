import React from 'react'
import Carousel from './Carousel'
function Home() {
    return (
        <div className="home">
            <div className="home__top">
                <img className="top__image" src="/images/Head Shot.png" alt="Richard Stilitino" />
                <Carousel />
            </div>
            <div className="home__missionStatement">
                <p>Mark Twain once said, “Many a small thing has been made large by the right kind of advertising.” The reality is that good advertising can make the difference between a struggling business and one that prospers for years to come.
                <br></br>
                    <br></br>
                So, what does your business look like?
                <br></br>
                    <br></br>
                Are you just not selling enough, even after seemingly endless email or advertising campaigns? Have you been pouring money into advertising campaigns that don’t bring in enough to justify the cost, let alone generate a meaningful ROI?
                <br></br>
                    <br></br>
                Do you love talking about your business but can’t find the right words when you’re sitting in front of the keyboard? Or do you struggle to find the time to write your own copy? Maybe you don’t even have the desire to write?
                <br></br>
                    <br></br>
                Well you aren’t alone, because many business owners feel the same way. My mission is to write copy that speaks to your CUSTOMER so that you can sell your product or service – And lots of it. It’s really that simple.
                <br></br>
                    <br></br>
                If this all sounds appealing then we should talk. I may already be working on some interesting ideas to help grow your business. Contact me, and I’ll tell you more about them.
                </p>
            </div>
        </div>
    )
}

export default Home