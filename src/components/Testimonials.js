import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>StartUps</h2>
                </div>

                <Swiper className="testimonials-slider" style={{overflow: "hidden"}} data-aos="fade-up" data-aos-delay="100" speed={600} loop={true} autoplay={{ delay: 5000, disableOnInteraction: false }} slidesPerView={'auto'} breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },

                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    }
                }} >

                    <SwiperSlide >
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                                <img src="assets/images/logoorange.png" className="testimonial-img" alt="Tredmolen E-Cycle" />
                                <h3>Tredmolen E-Cycle Pvt. Ltd</h3>
                                <h4>Mr.Sachin Singh Sengar</h4>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    This is a manufacturing unit, blending three products into a single convertible bike, giving rise to
                                    a product which can be used as Treadmill, Cycle, E-bike, sold under the name “Tred-E-cycle”. The
                                    company is registered as Tredmolen -E-Cycle Pvt . Ltd. This is a perfect amalgamation of useful
                                    products to create something extraordinary.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide >
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                                <img src="assets/images/logoorange.png" className="testimonial-img" alt="Meri Kitaab" />
                                <h3>Meri Kitaab Pvt. Ltd.</h3>
                                <h4>Mr.Shiv Kumar Sharma</h4>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    A comprehensive approach to make learning easier and interesting, by providing school books and
                                    stationery online, a one-stop online shop for all your school-related stuff. This start-up is
                                    supporting the new, better way of buying school products and has proven to be trustworthy and
                                    convenient in school learning.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide >
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                                <img src="assets/images/logoorange.png" className="testimonial-img" alt="Heptism" />
                                <h3>Heptism</h3>
                                <h4>Mr.Atul Maurya</h4>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    A start-up providing IT services and IT consulting, using technology to assist their clients in
                                    establishing a brand identity for their ventures. Be it website development, application development
                                    or digital marketing, they provide exclusive solutions to their clients, as per their requirements.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide >
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                                <img src="assets/images/logoorange.png" className="testimonial-img" alt="BluNux" />
                                <h3>BluNux</h3>
                                <h4>Mr.Naman Bhatnagar</h4>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    Working earnestly in the field of design, development, media and marketing, this start-up has served
                                    more than 200 clients by coming up with innovative and extravagant solutions for their projects and
                                    businesses. This is yet another example of a putting technology of making business easier using
                                    technology
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide >
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                                <img src="assets/images/logoorange.png" className="testimonial-img" alt="The Vilg" />
                                <h3>The Vilg</h3>
                                <h4>Mr.Anindya Singh</h4>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    A handicraft lifestyle brand, acting as a bridge between authentic art and the art-lovers. The
                                    start-up is indirectly acting as an incubator for the handicrafts by helping them to reach common
                                    people, helping the artists and satisfying the needs of common buyers at the same time.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                                <img src="assets/images/logoorange.png" className="testimonial-img" alt="Legal24by7" />
                                <h3>Legal24by7</h3>
                                <h4>Mr.Prince Agrawal</h4>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    This is a technology-driven platform, offering services that satisfy the legal needs of start-ups
                                    and established businesses. Some of their services include incorporation, government registrations &
                                    filings, accounting, documentation, annual compliances, etc. Its mission is to provide one-click
                                    help to individuals and businesses for all legal and professional issues.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                                <img src="assets/images/logoorange.png" className="testimonial-img" alt="TourInTown" />
                                <h3>TourInTown</h3>
                                <h4>Mr.Neetesh Pandey</h4>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    We Are Providing Tour Package for Students at very Cheap Prices Across India and Also Deals in
                                    Rental bike and Cars
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                                <img src="assets/images/logoorange.png" className="testimonial-img" alt="FoodWagon" />
                                <h3>FoodWagon</h3>
                                <h4>Mr.Rajdeep Gautam </h4>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    FoodWagon manufacturers and supplies food trucks and carts with pieces of equipment. It also
                                    provides its buyers an online presence with the use of Information Technology and its applications.
                                    Apart from manufacturing and supplying, they also provide catering services and restaurant outlets.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                                <img src="assets/images/logoorange.png" className="testimonial-img" alt="Codven Solutions" />
                                <h3>Codven Solutions Pvt. Ltd.</h3>
                                <h4>Mr.Arpit Kumar Garg</h4>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    Codven enables businesses, enterprises, and startups to build a strong online presence. From an idea
                                    written on a tissue to a full-blown, successful website, we make sure to provide maximum effort and
                                    services. This business model is based on transparency and communication with our clients to ensure
                                    that websites.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                                <img src="assets/images/logoorange.png" className="testimonial-img" alt="Coding Dev" />
                                <h3>Coding Dev</h3>
                                <h4>Mr.Rahul Dev Garg</h4>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    Coding Devs is a programming boot camp that offers accelerated, full-stack web development training.
                                    We provide intensive training in both the front-end and back-end, allowing students and
                                    professionals to specialize in their areas of interest.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                                <img src="assets/images/logoorange.png" className="testimonial-img" alt="Ebibil Media" />
                                <h3>Ebibil Media Pvt.Ltd</h3>
                                <h4>Mr.Anindya Singh</h4>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    They are going to be the major manufactures for smart products in India . It will be the start of
                                    the smart Revolution. We are visioned towards being first mart manufacturers in India.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="swiper-pagination"></div>
                </Swiper>

            </div >
        </section >
    )
}