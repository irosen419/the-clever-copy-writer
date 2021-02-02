function Footer() {
    let d = new Date()
    return (
        <div className="footer">
            <p>© {d.getFullYear()} - The Clever Copy Writer</p>
        </div >
    )
}

export default Footer