export const Contacts = () => {
    return (
        <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">

          <div className="col-lg-6">

            <div className="row">
              <div className="col-md-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.607731193856!2d77.59113581501313!3d27.60568868283421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736ce47bffc039%3A0xfe5fc3da92c6341!2sGLA%20University!5e0!3m2!1sen!2sin!4v1646131620621!5m2!1sen!2sin"
                  width="550" height="500" style={{border:"0"}} allowFullScreen loading="lazy"></iframe>

                <div className="info-box">
                  <i className="bx bx-map" style={{position:"absolute",left:"46%",top:"35%"}}></i>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-envelope"></i>
                  <h3>Email Us</h3>
                  <p>ecell@gla.ac.in</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-phone-call"></i>
                  <h3>Call Us</h3>
                  <p>+91 8076527770</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">
            <form action="https://formspree.io/f/mreegqzo" method="POST" className="php-email-form">
              <div className="row">
                <div className="col form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    )
}
