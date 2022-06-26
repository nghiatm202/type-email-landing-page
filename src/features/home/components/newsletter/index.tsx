import assets from '@/assets'
import './style.scss'

export interface NewsletterProps {}

export function Newsletter(props: NewsletterProps) {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-header">
          <h2 className="heading heading--big">More than just drips and newsletters</h2>
          <p className="text">
            awareness through email became a must-have, and our ESP wasn't cutting
          </p>
        </div>

        <div className="newsletter-main">
          <div className="newsletter-content">
            <h3 className="heading heading--normal newsletter-title">
              Drive 30-40% of your revenue with email marekiting
            </h3>
            <p className="text newsletter-desc">
              Unlock customer insights to grow your business faster. Store all your customer data
              collected from storefront to marketing channels in one central hub far easy use in
              every strategy.
            </p>
            <div className="newsletter-list">
              <div className="newsletter-item">
                <img srcSet={`${assets.iconHome} 2x`} alt="icon home" className="newsletter-icon" />
                <h4 className="heading heading--small newsletter-name">Marketing Automation</h4>
                <p className="text newsletter-text">
                  From open rates to conversion performance, get access to tons of data.
                </p>
                <a href="/" className="newsletter-link">
                  Read More
                </a>
              </div>

              <div className="newsletter-item">
                <img srcSet={`${assets.iconHome} 2x`} alt="icon home" className="newsletter-icon" />
                <h4 className="heading heading--small newsletter-name">Marketing Automation</h4>
                <p className="text newsletter-text">
                  From open rates to conversion performance, get access to tons of data.
                </p>
                <a href="/" className="newsletter-link">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="newsletter-img">
            <img srcSet={`${assets.img2} 2x`} alt="newsletter__img" />
          </div>
        </div>
      </div>
    </section>
  )
}
