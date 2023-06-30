import React from 'react';





export default  function ShopHeaderSlideChildComponent({slide}){
  return (
    <div className="title-slide-view">
      <ul className="title-slide-wrap">

        {
          slide.map((item,idx)=>{
            return(
              <li className="title-slide " key={idx}>
              <a href="!#">
                  <img src={`http://localhost:3000/images/shop-header-slide/${item.img}`} alt="" />
                  <h4>{item.desc}</h4>
              </a>
          </li>
            )
          })

      }


      </ul>
    </div>
  );
};

