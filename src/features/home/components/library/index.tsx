import assets from '@/assets'
import { Button, LibraryItem } from '@/components/common'
import { arrowRightIcon } from '@/constants'
import './style.scss'

export interface LibraryProps {}

export function Library(props: LibraryProps) {
  return (
    <section className="library">
      <div className="container">
        <div className="library-header">
          <h2 className="heading heading--big">Sendlane Resource Library</h2>
          <p className="text">
            Cat in tuch with of our compare and take a personal tour of Sraklune
          </p>
        </div>

        <div className="library-tabs">
          <div className="library-tab is-active">Articles</div>
          <div className="library-tab">Ebooks</div>
          <div className="library-tab">Products</div>
        </div>

        <div className="library-list">
          <LibraryItem
            img={assets.img5}
            category="Email Marketing"
            title="Now to Grow lbw Email List 5 Email"
          />
          <LibraryItem
            img={assets.img6}
            category="Real-time anylitics"
            title="Now to Grow lbw Email List 6 Email"
          />
          <LibraryItem
            img={assets.img7}
            category="Marketing Autonation"
            title="Now to Grow lbw Email List 7 Email"
          />
        </div>

        <Button color="var(--primary-color)">
          <span>See Update</span>
          <span className="icon">{arrowRightIcon}</span>
        </Button>
      </div>
    </section>
  )
}
