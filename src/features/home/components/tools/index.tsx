import assets from '@/assets'
import { Button } from '@/components/common'
import './style.scss'

export interface ToolsProps {}

export function Tools(props: ToolsProps) {
  return (
    <section className="tools">
      <div className="container">
        <div className="tools-main">
          <div className="tools-content">
            <h2 style={{ color: 'white' }} className="heading heading--big tools-heading">
              Join forces with your favorite business tools
            </h2>
            <p className="text tools-text">
              awareness through email became a must-have, and our ESP wasn't cutting
            </p>
            <Button children="See imagradtions" color="var(--primary-color)" />
          </div>

          <div className="tools-img">
            <img srcSet={`${assets.img4} 2x`} alt="business tools" />
          </div>
        </div>
      </div>
    </section>
  )
}
