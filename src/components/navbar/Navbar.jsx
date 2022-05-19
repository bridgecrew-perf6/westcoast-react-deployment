import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav id="navbar">
            <h1 className="logo"><span className="text-primary">
                <i className="fa-solid fa-car"></i> Westcoast </span>
                <span className="text-secondary">Cars</span>
            </h1>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/list">Our vehicles</NavLink>
                <NavLink to="/add">Add vehicle</NavLink>
                <NavLink to="/login">Login</NavLink>
            </ul>
        </nav>
    );
}

export default Navbar;