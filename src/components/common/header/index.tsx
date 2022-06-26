import React from 'react'
import assets from '@/assets'
import './style.scss'
import { Button } from '@/components/common'

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <a href="/" className="header-logo">
            <img src={assets.logo} alt="logo" />
            <span>Type Email</span>
          </a>

          <ul className="menu">
            <li className="menu-item">
              <a href="/" className="menu-link">
                Home
              </a>
            </li>
            <li className="menu-item">
              <a href="/" className="menu-link">
                Pricing
              </a>
            </li>
            <li className="menu-item">
              <a href="/" className="menu-link">
                Reasources
              </a>
            </li>
            <li className="menu-item">
              <a href="/" className="menu-link">
                Support
              </a>
            </li>
          </ul>

          <a href="/" className="header-login">
            Log in
          </a>
        </div>

        <div className="header-content">
          <h1 className="header-heading text-primary">
            Online shoppers into loyal, lifetime customers with email & sms marketing
          </h1>

          <div className="header-buttons">
            <Button children="Get Started" color="var(--primary-color)" />
            <a href="/" className="header-works">
              <span>How it works</span>
              <img src={assets.iconPlay} alt="icon-play" />
            </a>
          </div>
        </div>

        <div className="header-img">
          <img srcSet={`${assets.img1} 2x`} alt="banner" />
        </div>
      </div>
    </header>
  )
}
