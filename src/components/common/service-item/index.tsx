import './style.scss'

export interface ServiceItemProps {
  icon: React.ReactElement
  title: string
  text: string
}

export function ServiceItem({ icon, title, text }: ServiceItemProps) {
  return (
    <div className="service-item">
      <div className="service-icon">{icon}</div>
      <h3 className="heading heading-small service-title">{title}</h3>
      <p className="service-desc">{text}</p>
    </div>
  )
}
