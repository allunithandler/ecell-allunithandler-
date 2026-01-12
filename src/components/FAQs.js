export const FAQs = () => {

    const handleAccordion = (e) => {
      let getTarget = e.target.getAttribute('data-bs-target');
      let getId = document.querySelector(getTarget);
      getId.classList.toggle('show');
    }
    return (
        <section id="faq" className="faq">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
        </div>

        <ul className="faq-list accordion" data-aos="fade-up">

          <li>
            <button onClick={handleAccordion} data-bs-toggle="collapse" className="collapsed" data-bs-target="#faq1" type="button">What is the Entrepreneurship Cell? <i
                className="bx bx-chevron-down icon-show"></i><i className="bx bx-x icon-close"></i></button>
            <div id="faq1" className="collapse" data-bs-parent=".faq-list">
              <p>
                Entrepreneurship Cell is a non-profit student's organization dedicated to promoting the spirit of
                entrepreneurship among students. Therefore, the E-Cell organises various events related to
                entrepreneurship.
              </p>
            </div>
          </li>

          <li>
            <button onClick={handleAccordion} data-bs-toggle="collapse" data-bs-target="#faq2" className="collapsed" type="button">What does E-Cell focuses on? <i
                className="bx bx-chevron-down icon-show"></i><i className="bx bx-x icon-close"></i></button>
            <div id="faq2" className="collapse" data-bs-parent=".faq-list">
              <p>
                E-Cell focuses on leveraging Entrepreneurship and Innovation. We focus on fostering new ideas and we
                also help students to grow their network.
              </p>
            </div>
          </li>

          <li>
            <button onClick={handleAccordion} data-bs-toggle="collapse" data-bs-target="#faq3" className="collapsed" type="button">Where is the Entrepreneurship Cell,
              GLAU situated? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-x icon-close"></i></button>
            <div id="faq3" className="collapse" data-bs-parent=".faq-list">
              <p>
                Entrepreneurship Cell, GLAU, is situated at GLA University, Mathura.
              </p>
            </div>
          </li>

          <li>
            <button onClick={handleAccordion} data-bs-toggle="collapse" data-bs-target="#faq4" className="collapsed" type="button">How can i be a part of the E-Cell? <i
                className="bx bx-chevron-down icon-show"></i><i className="bx bx-x icon-close"></i></button>
            <div id="faq4" className="collapse" data-bs-parent=".faq-list">
              <p>
                The E-Cell has it's membership drive occasionally. One can register the form to be a member of the
                E-Cell, GLAU.
              </p>
            </div>
          </li>

          <li>
            <button onClick={handleAccordion} data-bs-toggle="collapse" data-bs-target="#faq5" className="collapsed" type="button">What is the size if the Student
              Council? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-x icon-close"></i></button>
            <div id="faq5" className="collapse" data-bs-parent=".faq-list">
              <p>
                The Student Council consists of 30 students from around the campus.
              </p>
            </div>
          </li>

          <li>
            <button onClick={handleAccordion} data-bs-toggle="collapse" data-bs-target="#faq6" className="collapsed" type="button">How is the E-Cell's environment? <i
                className="bx bx-chevron-down icon-show"></i><i className="bx bx-x icon-close"></i></button>
            <div id="faq6" className="collapse" data-bs-parent=".faq-list">
              <p>
                At the E-Cell, we have mentors who have immense experience, students who aid each other to achieve the
                next level and to rock as a team. New ideas are born at the E-Cell.
              </p>
            </div>
          </li>

        </ul>

      </div>
    </section>
    )
}