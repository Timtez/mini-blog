import { Link } from "react-router-dom";

// nav

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Mini-blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;