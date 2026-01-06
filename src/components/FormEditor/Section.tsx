import { ReactNode, useState } from 'react'
import './FormEditor.css'

interface SectionProps {
  title: string
  children: ReactNode
  defaultOpen?: boolean
  action?: ReactNode
}

export default function Section({ title, children, defaultOpen = true, action }: SectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="form-section">
      <div className="form-section-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="form-section-title">
          <span className={`form-section-arrow ${isOpen ? 'open' : ''}`}>▶</span>
          {title}
        </div>
        {action && <div onClick={e => e.stopPropagation()}>{action}</div>}
      </div>
      {isOpen && <div className="form-section-content">{children}</div>}
    </div>
  )
}
