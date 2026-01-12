export const About = () => {
    return (
        <section id="about" className="about section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>E-Cell GLAU & Its Pillars</h2>
                </div>

                <div className="row no-gutters">
                    <div className="content col-xl-5 d-flex align-items-stretch">
                        <div className="content">
                            <h3 style={{ marginBottom: "5px" }}>Entrepreneurship Cell</h3>
                            <h4>GLA University, Mathura</h4>
                            <p>
                                Entrepreneurship Cell, GLAU is a student run, non-profit organization solely formed with the purpose of
                                inspiring & guiding start-ups and believes that Entrepreneurship is the key to India's development. We
                                aim to develop an Entrepreneurial Spirit among students and share a vision to foster innovation and
                                budding ideas in youth.
                            </p>
                            <a href="/#about" className="about-btn"><span>About us</span> <i className="bx bx-chevron-right"></i></a>
                        </div>
                    </div>
                    <div className="col-xl-7 d-flex align-items-stretch">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                            <div className="row">
                                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <img src="assets/images/bulb-01.png" alt="" style={{ paddingBottom: "10px" }} />
                                    <h4>GENIE</h4>
                                    <p>GLAU Ecosystem for Nurturing Innovation & Entrepreneurship will be an overarching ecosystem. It
                                        will have a new structure and a new Governance Model, to include all the entrepreneurship and
                                        innovation-based organizations launched and nurtured at GLA University.</p>
                                </div>
                                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                                    <img src="assets/images/iedc-01.png" alt="" style={{ paddingBottom: "10px" }} />
                                    <h4>NewGen IEDC</h4>
                                    <p>New Generation Innovation and Entrepreneurship Development Centre is a programme launched by
                                        NSTEDB, DST, Govt. of India. NewGen IEDC aims to inculcate the spirit of innovation and
                                        entrepreneurship amongst the young S&T students, encourage and support start-up creation through
                                        guidance, mentorship and support.</p>
                                </div>
                                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                                    <img src="assets/images/iic-01.png" alt="" style={{ paddingBottom: "10px" }} />
                                    <h4>IIC</h4>
                                    <p>GLA University, Mathura has established Institution Innovation Council (IIC) as per the norms of
                                        Innovation Cell, Ministry of HRD, Govt. Of India during IIC Calendar year 2018-19.</p>
                                </div>
                                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                                    <img src="assets/images/startupLauncpad-01.png" alt="" style={{ paddingBottom: "10px" }} />
                                    <h4>StartUp LaunchPad</h4>
                                    <p>StartUp LaunchPad was established at GLA University, Mathura with the aim of encouraging students
                                        to start their own venture. Currently 21 different teams are working on different startups, out of
                                        these 12 are Physical Startups and 09 are working in virtual mode.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
};