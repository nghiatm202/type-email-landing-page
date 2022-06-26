import { ServiceItem } from '@/components/common'
import { emailIcon, intelligentIcon, smsIcon } from '@/constants'
import './style.scss'

export interface ServiceProps {}

export function Service(props: ServiceProps) {
  return (
    <section className="service">
      <div className="container">
        <h2 className="heading heading--big service-heading">Our some service</h2>
        <div className="service-list">
          <ServiceItem
            icon={emailIcon}
            title="Email Marketing"
            text="Set up standing order in-app, and send money to any other bank account instantly"
          />
          <ServiceItem
            icon={smsIcon}
            title="SMS Marketing"
            text="Manage your account from your phone or computer. Do everything you need from the app."
          />
          <ServiceItem
            icon={intelligentIcon}
            title="Intelligent pop ups"
            text="Your bank account lets you easily lock your card in the app, and later reorder it witha tap of a button"
          />
        </div>
      </div>
    </section>
  )
}
