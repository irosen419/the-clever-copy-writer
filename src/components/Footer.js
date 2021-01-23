import { Link } from 'react-router'
function Footer() {
    return (
        <div className="footer">
            <Link className="footer__contactButton" to="/contact">Contact</Link>
        </div >
    )
}

export default Footer