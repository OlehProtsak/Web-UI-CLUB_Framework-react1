import React from "react"



const HomePageBar = () => {
  return (
    <header>
      <div>
        <img src='https://www.pngall.com/wp-content/uploads/2016/03/Book-PNG-7.png' width="60px" height="60px" />
      </div>
      <nav className='nav-bar'>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Catalog</a>
          </li>
          <li>
            <a href='#'>Cart</a>
          </li>
        </ul>
      </nav>
    </header >
  )
}

export default HomePageBar;
