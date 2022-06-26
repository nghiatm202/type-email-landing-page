import { arrowRightIcon } from '@/constants'
import { Button } from '../button'
import './style.scss'

export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-header">
          <h2 className="heading heading--big">See it for yourself</h2>
          <p className="text">
            Cat in touch with of our compare and take a personal tour of Sraklune
          </p>
        </div>

        <Button color="var(--primary-color)">
          <span>See Update</span>
          <span className="icon">{arrowRightIcon}</span>
        </Button>
      </div>
    </footer>
  )
}
