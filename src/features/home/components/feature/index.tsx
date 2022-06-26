import assets from '@/assets'
import { Button } from '@/components/common'
import './style.scss'

export interface FeatureProps {}

export function Feature(props: FeatureProps) {
  return (
    <section className="feature">
      <div className="container">
        <div className="feature-main">
          <div className="feature-img">
            <img srcSet={`${assets.img3} 2x`} alt="feature-img" />
          </div>
          <div className="feature-content">
            <h3 className="heading heading--normal feature-title">
              Create raving fans that keep buying over and over you get the point.
            </h3>
            <p className="text feature-text">
              Unlock customer insights to grow your business faster. Store all your customer data
              collected from storefront to marketing channels in one central hub far easy use in
              every strategy.
            </p>
            <p className="text">
              Our open rate has tripled and our click rate on links is up at least 15%.
            </p>
            <Button children="Learn More" color="var(--primary-color)" />
          </div>
        </div>
      </div>
    </section>
  )
}
