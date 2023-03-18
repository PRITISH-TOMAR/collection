import React from "react";

const MenuCard = ({menuData}) => {
  //   console.log(menuData);

  return (
    <>

    <section className="main-card--cointainer">

      {menuData.map((curElem)=>{

        const{id,name,author,category,image,description}=curElem
        return(
<>
          <div className="card-container card" key={id}>
          <div className="card front ">
            <div className="card-body">
              {/* <span className="card-number card-circle subtle">{id}</span> */}
              <h2 className="card-title"> {name} </h2>
              <span className="card-author subtle">{author} </span>
              <span className="card-description subtle">
              {description}
              </span>
              {/* <div className="card-read">Read</div> */}
            </div>
            {/* <img src={image} /> */}
            {/* <span className="card-tag  subtle">Order Now</span> */}
            <a href="#" class="botn"><span>+ Add to Wish List</span></a>

          </div>
          <div className="card back ">
            <div className="card-bk">
              {/* <span className="card-number card-circle subtle">{id}</span> */}
              <h2 className="card-title"> {name} </h2>
              <span className="card-author subtle">{author} </span>
              {/* <span className="card-description subtle">
              {description}
              </span> */}
              {/* <div className="card-read">Read</div> */}
            </div>
            <img src={image} />
            {/* <span className="card-tag  subtle">Order Now</span> */}
          </div>
        </div>

</>

)


})}
            

          
</section>
        
      
    </>
  );
};

export default MenuCard;