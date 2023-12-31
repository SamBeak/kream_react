import React from 'react';



const PageNationComponent = ({postsPerPage, totalPosts, paginate}) => {

  const pageNumbers = [];
  for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul>
          {pageNumbers.map((number)=>(
            <li key={number} className='page-item'>
              <span onClick={()=> paginate(number)} className='page-link'>{number}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default PageNationComponent;