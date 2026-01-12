import { useEffect } from "react";

export const Tabs = () => {
    useEffect(() => {
        let navLink = document.querySelectorAll('.nav-link');
        let tabPane = document.querySelectorAll('.tab-pane');

        navLink.forEach((link, index) => {
            link.addEventListener('click', () => {
                navLink.forEach((nav, index) => {
                    nav.classList.remove('active');
                    nav.classList.remove('show');
                });
                link.classList.add('active');
                link.classList.add('show');

                let getTargetTab = link.getAttribute('data-bs-target');
                tabPane.forEach((tab, index) => {
                    tab.classList.remove('active');
                    tab.classList.remove('show');
                    if (tab.id === getTargetTab) {
                        tab.classList.add('active');
                        tab.classList.add('show');
                    }
                });

            })
        })

    }, [])


    return (
        <section id="tabs" className="tabs">
            <div className="container" data-aos="fade-up">

                <ul className="nav nav-tabs row d-flex">
                    <li className="nav-item col-3">
                        <button className="nav-link active show" data-bs-toggle="tab" data-bs-target="tab-1" type="button">
                            <h4 className="d-lg-block">Members</h4>
                        </button>
                    </li>
                    <li className="nav-item col-3">
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="tab-2" type="button">
                            <h4 className="d-lg-block">Events</h4>
                        </button>
                    </li>
                    <li className="nav-item col-3">
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="tab-3" type="button">
                            <h4 className="d-lg-block">Talks</h4>
                        </button>
                    </li>
                    <li className="nav-item col-3">
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="tab-4" type="button">
                            <h4 className="d-lg-block" >StartUps</h4>
                        </button>
                    </li>
                </ul>

                <div className="tab-content">
                    <div className="tab-pane active show" id="tab-1">
                        <div className="row">
                            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0" data-aos="fade-up" data-aos-delay="100">
                                <p>
                                    The Entrepreneurship Cell consists of students from all around the campus. This diverse group of
                                    enthusiastic crowd comes from Engineering, Business Management, Applied Sciences background which
                                    brings in mixed sources of knowledge under one roof. The Entrepreneurship Cell boasts a record of
                                    excellence, discipline, and gratitude to its members and the Student Council.

                                </p>

                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                                <img src="assets/images/Team.JPG" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="tab-2">
                        <div className="row">
                            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                <p>E-Conclave:<br />
                                    The flagship event of E-Cell, GLAU, spans 3 days. It includes various events throughout the campus.
                                </p>
                                <p>Youtubers Meet:<br />
                                    Different YouTubers with diversified works on YouTube come under one roof and address the students
                                    about their success.</p>
                                <p>Creators Camp:<br />
                                    The place where creators meet, contribute to the discussions and provide inputs to the problems
                                    between students and their passion.</p>

                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 text-center">
                                <img src="assets/images/event.JPG" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="tab-3">
                        <div className="row">
                            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                <p>
                                    In all these years, the Entrepreneurship Cell, GLAU, has hosted over 60+ talks with Entrepreneurs,
                                    Social Workers, and eminent personalities like Rutvij Dasadia, Ayush Wadhwa, Saiman Shetty, etc.,.
                                    Attended by over 12,000+ participants, the talks deliver piles of knowledge, wisdom, and experience.
                                </p>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 text-center">
                                <img src="assets/images/talk.JPG" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="tab-4">
                        <div className="row">
                            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">

                                <p>

                                </p>

                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 text-center">
                                <img src="assets/images/j4.jpeg" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
};