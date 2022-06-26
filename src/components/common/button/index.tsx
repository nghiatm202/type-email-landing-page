import './style.scss'

export interface ButtonProps {
  color: string
  children: String | React.ReactNode
}

export function Button({ color, children }: ButtonProps) {
  return (
    <button
      className="button"
      style={{
        backgroundColor: color,
      }}
    >
      {children}
    </button>
  )
}
