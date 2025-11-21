import { useRef } from "react"
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Navbar = () => {
    const ref = useRef(null);
    const handleNavbar = () => {
        ref.current.classList.toggle('active');
    };
    return (
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center relative">
                <h1 className="logo me-auto"><img src="assets/images/E-Cell_New_Logo.png" alt="img" /></h1>
                {/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt=""></a>--> */}

                <nav id="navbar" ref={ref} className="navbar order-last order-lg-0 py-0">
                    <ul>
                        {/* <li><Link to={'/'} className="nav-link scrollto active" href="#hero">Home</Link></li>
                        <li><HashLink to="/#partners" className="nav-link scrollto active">Part</HashLink></li>
                        <li><a className="nav-link scrollto" href="#partners">Partners</a></li>
                        <li><a className="nav-link scrollto" href="#about">About</a></li>
                        <li><a className="nav-link scrollto" href="#genie">Genie</a></li>
                        <li><a className="nav-link scrollto " href="#gallery">Gallery</a></li>
                        <li><a className="nav-link scrollto " href="#testimonials">StartUps</a></li>
                        <li><a className="nav-link scrollto" href="#team">Team</a></li>
                        <li><a className="nav-link scrollto" href="#mentor">Mentors</a></li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li> */}
                        {/* <Link to={'/events'} className="get-started-btn scrollto "><span style={{ marginRight: "25px" }}>E-Summit'24</span></Link> */}
                        <li><HashLink to="/#hero" className="nav-link scrollto active">Home</HashLink></li>
                        <li><HashLink to="/#partners" className="nav-link scrollto">Partners</HashLink></li>
                        <li><HashLink to="/#about" className="nav-link scrollto">About</HashLink></li>
                        <li><HashLink to="/#genie" className="nav-link scrollto">Genie</HashLink></li>
                        <li><HashLink to="/#gallery" className="nav-link scrollto">Gallery</HashLink></li>
                        <li><HashLink to="/#testimonials" className="nav-link scrollto">StartUps</HashLink></li>
                        <li><HashLink to="/#team" className="nav-link scrollto">Team</HashLink></li>
                        <li><HashLink to="/#mentor" className="nav-link scrollto">Mentors</HashLink></li>
                        <li><HashLink to="/#contact" className="nav-link scrollto">Contact</HashLink></li>
                        <a href="https://forms.gle/kEtp9vN4xUy7YUxy8" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#E62B1E", color: "black", fontWeight: "bold", padding: "5px 10px", borderRadius: "5px", textDecoration: "none", transition: "background-color 0.3s", marginLeft: "25px" }} onMouseEnter={(e) => e.target.style.backgroundColor = "#D9241A"} onMouseLeave={(e) => e.target.style.backgroundColor = "#E62B1E"}>TEDxGLAU</a>



                    </ul>
                </nav>
                    <input onClick={handleNavbar} type="checkbox" role="button" aria-label="Display the menu" className="menu"></input>

            </div>
        </header>
    )

}
