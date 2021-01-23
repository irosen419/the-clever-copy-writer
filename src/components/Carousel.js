import { useState, useEffect } from 'react'
import quoteURLs from '../quotes'
function Carousel() {
    const [quote, setQuote] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setQuote(prevQuote => ((prevQuote + 1) % quoteURLs.length))
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="top__carousel">
            <img className="quote" src={quoteURLs[quote].url} alt={quoteURLs[quote].speaker} />
        </div>
    )
}

export default Carousel