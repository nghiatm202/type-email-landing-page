import './style.scss'

export interface CountdownProps {}

export function Countdown(props: CountdownProps) {
  return (
    <section className="countdown">
      <div className="container">
        <div className="countdown__list">
          <div className="countdown__item">
            <h3 className="countdown__title">1,700+</h3>
            <p className="countdown__text">Companies using Sendlance</p>
          </div>

          <div className="countdown__item">
            <h3 className="countdown__title">40 million+</h3>
            <p className="countdown__text">Emails sent daily</p>
          </div>

          <div className="countdown__item">
            <h3 className="countdown__title">20.000+</h3>
            <p className="countdown__text">Users on sendlance</p>
          </div>
        </div>
      </div>
    </section>
  )
}
