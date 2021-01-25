import React, { useState, useEffect } from 'react'
function About() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        let isMounted = true
        if (isMounted) {
            window.addEventListener("resize", handleResize)
        }
        return () => isMounted = false
    }, [])

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    return (
        <div className="about">
            <h1>About</h1>
            <p>
                Hi, my name is Richard Stilitino and I’d like to tell you a little bit about myself. I’m a business owner and a copywriter. I have a strong background in investing and finance, so if you need solid copy in this genre, then I’m your guy. Outside of finance copy, I like to write for just about any niche, so don’t worry, odds are I’ve got your copy needs covered.
                <br></br>
                <br></br>
            How did I get into writing copy, you ask? Well believe it or not, my love for music inspired me to take a more artistic path in my career. I’m too old to become a rock star, musician, Grammy award winning songwriter, but I can still write creative and inspirational copy for my clients. And who knows, maybe one day I will write that Grammy award winning song.
            <br></br>
                <br></br>
                <img src="/images/Scenic.jpg" alt="Richard Stilitino" />
                {windowWidth <= '769' ?
                    <>
                        <br></br>
                        <br></br>
                    </>
                    : null}
            I do appreciate a very wide variety of music and some of my favorites are rock music from the 70’s and 80’s and smooth jazz.
            I’m a food and wine enthusiast who believes that when it comes to food and wine pairings, it’s all about whatever grows together that goes together. I also love wild seafood, especially wild salmon. I haven’t been up to Alaska yet, but I’d love to go salmon fishing there one day.
            <br></br>
                <br></br>
            I’m a dog lover. My favorite breeds are golden retrievers, golden doodles and sheepadoodles. Did I mention that I can write terrific copy for the pet industry?
                <br></br>
                <br></br>
            I went to undergrad at UNC Chapel Hill and it was there that I developed my love for basketball and country music. Nowadays, I prefer professional over college, but I still follow my Tarheels every season. I love the Golden State Warriors and am sad to see that their dynasty seems to be coming to an end. I do like football, too, and hate to say it, but I’m a frustrated NY Giants fan. Does anybody feel my pain?
            <br></br>
                <br></br>
            I currently live in Westchester County, New York and when I’m not writing great copy you can find me exploring the many beautiful mountain towns in the Hudson Valley – too many to mention here.
            </p>
        </div>
    )
}

export default About