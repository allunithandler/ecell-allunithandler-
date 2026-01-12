import { useRef } from "react"
import { HashLink } from "react-router-hash-link";

export const Navbar = () => {
    const ref = useRef(null);
    const handleNavbar = () => {
        ref.current.classList.toggle('active');
    };
    return (
        <header className="navbar-fintech fixed-top">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src="assets/images/E-Cell_New_Logo.png" alt="E-Cell" />
                </div>
                <nav className="navbar-menu" ref={ref}>
                    <HashLink to="/#hero" className="nav-item active">Home</HashLink>
                    <HashLink to="/#partners" className="nav-item">Partners</HashLink>
                    <HashLink to="/#about" className="nav-item">About</HashLink>
                    <HashLink to="/#genie" className="nav-item">Genie</HashLink>
                    <HashLink to="/#gallery" className="nav-item">Gallery</HashLink>
                    <HashLink to="/#testimonials" className="nav-item">Startups</HashLink>
                    <HashLink to="/#team" className="nav-item">Team</HashLink>
                    <HashLink to="/#mentor" className="nav-item">Mentors</HashLink>
                    <HashLink to="/#contact" className="nav-item">Contact</HashLink>
                </nav>
                <a href="http://localhost:3000/#testimonials" className="navbar-signin">Sign In</a>
                <input onClick={handleNavbar} type="checkbox" className="navbar-toggle" aria-label="Menu"></input>
            </div>
        </header>
    )
}