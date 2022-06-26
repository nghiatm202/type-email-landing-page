import './style.scss'

export interface TestimonialsProps {}

export function Testimonials(props: TestimonialsProps) {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="heading heading--big testimonials-heading">
          See what our customer have to say
        </h2>
        <div className="testimonials-main">
          <div className="testimonials-img">
            <img
              src="https://images.unsplash.com/photo-1543269664-647163ef2ee4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="SONY, ILCE-7RM2"
            />
          </div>
          <div className="testimonials-content">
            <div className="testimonials-text">
              "New 2022, we sent a few email blasts with MailChimp here and there, but it wasn't a
              focus. Once we shiftedaway from retail-only sales to eCornmerce soles, driving
              customer awareness through email became a must-have, and our ESP wasn't cutting
            </div>
            <h4 className="testimonials-author">Lello Mhoury. Crecter of Marketing</h4>
            <p className="testimonials-rating">4.5 Rating Capture</p>
          </div>
        </div>
      </div>
    </section>
  )
}
