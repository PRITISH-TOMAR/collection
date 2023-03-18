import React from 'react'

const Navbar = ({ filteritem, menuList }) => {
  return (
  <>

<nav className="navbar">

  
        <div className="btn-group">

          {
            menuList.map((curElem)=>{
              return (
                <button className="btn-group__item" onClick={()=>filteritem(curElem)}>{curElem}</button>
              )
            })
          }
          
          
          {/* <button className="btn-group__item"  onClick={()=>setMenuData(Menu)}>All</button> */}
        </div>
        <div class="search-box">
    <button class="btn-search">
<img src="./images/search.svg" alt="" width="60%" height="60%"/>

    </button>
    <input type="text" class="input-search" placeholder="Type to Search..."/>
  </div>
      </nav>



  </>
  )
}

export default Navbar
