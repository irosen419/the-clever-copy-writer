import { useState } from 'react'
import { Link } from 'react-router'
function Header() {

    const [menu, setMenu] = useState(false)

    const links = () => {
        return (
            <>
                <li id="home"><Link to="/home">Home</Link></li>
                <li id="about"><Link to="/about">About</Link></li>
                <li id="samples"><Link to="/samples">Samples</Link></li>
                <li id="contact"><Link to="/contact">Contact</Link></li>
            </>
        )
    }

    return (
        <div className="header">
            <Link to="/home" className="header__left">The Clever Copy Writer</Link>


            <ul className="header__right links hide-for-mobile">
                {links()}
            </ul>
            <div className="header__right menu hide-for-desktop" onClick={() => setMenu(prevMenu => !prevMenu)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {
                menu &&
                <ul className="dropdown hide-for-desktop">
                    {links()}
                </ul>
            }

        </div>
    )
}

export default Header