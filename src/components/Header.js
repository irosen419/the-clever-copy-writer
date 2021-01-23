import { Link } from 'react-router'
function Header() {
    return (
        <div className="header">
            <Link to="/home" className="header__left">The Clever Copy Writer</Link>
            <ul className="header__right">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/samples">Samples</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Header