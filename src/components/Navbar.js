import { useRef, useState } from "react"
import { HashLink } from "react-router-hash-link";

export const Navbar = () => {
    const ref = useRef(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    const handleNavbar = () => {
        ref.current.classList.toggle('active');
    };
    
    return (
        <header className="navbar-fintech fixed-top">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <HashLink to="/">
                        <img src="assets/images/E-Cell_New_Logo.png" alt="E-Cell" />
                    </HashLink>
                </div>
                <nav className="navbar-menu" ref={ref}>
                    <HashLink to="/#partners" className="nav-item">Partners</HashLink>
                    <HashLink to="/#about" className="nav-item">About</HashLink>
                    <div className="nav-dropdown" 
                         onMouseEnter={() => setDropdownOpen(true)}
                         onMouseLeave={() => setDropdownOpen(false)}>
                        <span className="nav-item">Team ▼</span>
                        {dropdownOpen && (
                            <div className="dropdown-content">
                                <HashLink to="/councils" className="dropdown-link">Team Council</HashLink>
                                <HashLink to="/#genie" className="dropdown-link">Genie</HashLink>
                            </div>
                        )}
                    </div>
                    <HashLink to="/#gallery" className="nav-item">Gallery</HashLink>
                    <HashLink to="/#testimonials" className="nav-item">Startups</HashLink>
                    <HashLink to="/#mentor" className="nav-item">Mentors</HashLink>
                    <HashLink to="/#contact" className="nav-item">Contact</HashLink>
                </nav>
                <a href="https://dashboard-glauecell.netlify.app/" target="_blank" rel="noreferrer" className="navbar-signin">Sign In</a>
                <input onClick={handleNavbar} type="checkbox" className="navbar-toggle" aria-label="Menu"></input>
            </div>
        </header>
    )
}