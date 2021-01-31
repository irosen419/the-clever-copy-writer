import { useState } from 'react'
import { Link } from 'react-router'
function Header() {

    const [menu, setMenu] = useState(false)

    const links = () => {
        return (
            <>
                <Link to="/home" id="home" onClick={() => decideMenu()}><li>Home</li><div className="hoverBorder"></div></Link>
                <Link to="/about" id="about" onClick={() => decideMenu()}><li>About</li><div className="hoverBorder"></div></Link>
                <Link to="/portfolio" id="portfolio" onClick={() => decideMenu()}><li>Portfolio</li><div className="hoverBorder"></div></Link>
                <Link to="/contact" id="contact" onClick={() => decideMenu()}><li>Contact</li><div className="hoverBorder"></div></Link>
            </>
        )
    }

    const decideMenu = () => {
        if (menu) {
            setMenu(false)
        } else {
            setMenu(true)
        }
    }

    return (
        <div className="header">
            <Link to="/home" className="header__left">The Clever Copy Writer</Link>


            <ul className="header__right links hide-for-mobile">
                {links()}
            </ul>
            <div className={`header__right menu hide-for-desktop ${menu && 'open'}`} onClick={() => decideMenu()}>
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