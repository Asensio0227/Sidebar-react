import React from 'react'
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './Context';

const Home = () => {
  const { openModal, openSidebar } = useGlobalContext(); 

  return (
    <>
    <nav>
        <div className="sidebar-header">
          <h4>sky<span>coding</span></h4>
          <button className="sidebar-toggle" onClick={openSidebar}>
            <FaBars/>
          </button>
        </div>
      </nav>
      <main>
        <button className="modal-btn" onClick={openModal}>
        open Modal
      </button>
      </main>
    </>
  )
}

export default Home