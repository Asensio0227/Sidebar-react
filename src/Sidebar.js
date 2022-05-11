import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';
import { useGlobalContext } from './Context';

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className="sidebar-header">
        <h4>sky<span>coding</span></h4>
        <button className="close-sidebar-btn" onClick={closeSidebar}>
          <FaTimes/>
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
              </a>
                {text}
            </li>
          )
        })}
      </ul>
      <ul className="social-icons">
        {social.map((icons) => {
          const { icon, url, id } = icons;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar