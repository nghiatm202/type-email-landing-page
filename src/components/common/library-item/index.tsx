import * as React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export interface LibraryItemProps {
  img: string
  category: string
  title: string
}

export function LibraryItem({ img, category, title }: LibraryItemProps) {
  return (
    <div className="library-item">
      <Link to="/" className="library-img">
        <img srcSet={`${img} 2x`} alt="library-img" />
      </Link>
      <Link to="/" className="library-category">
        {category}
      </Link>
      <h3>
        <Link to="/" className="library-title">
          {title}
        </Link>
      </h3>
    </div>
  )
}
