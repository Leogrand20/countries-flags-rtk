import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { IoMoon } from 'react-icons/io5'

import styles from './Header.module.css'

export const Header = () => {
  const originalTheme = localStorage.getItem('theme') || 'light'
  const [theme, setTheme] = useState(originalTheme)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <header className="header">
      <div className="container">
        <div className={styles.wrapper}>
          <Link to="/" className={styles.titleLink}>
            Where is the world?
          </Link>

          <div className={styles.modeSwitcher} onClick={toggleTheme}>
            <IoMoon className={styles.ioMoon} />

            <span className={styles.spanSwitcher}>
              {theme === 'dark' ? 'light' : 'dark'} theme
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
