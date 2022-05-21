import React from 'react'
import Movies from '../content/movies.js';


const Items = ({img, title }) => {
    return ( 
        <div className='movie-items'>
          <img src= {img} alt='' className='photo'/>
            <div className='movie-title'>
                 <h4>{title}</h4>
            </div>
         </div>
    );
};


function MovieSection() {
  return (
    <section>
        <div className='film-title'>
            <h1 className='title'>Popular Movies</h1>
        </div>
        <section className='movie-section'>
            {Movies.map((tech, index)=>{
                return <Items key={tech.id} {...tech}></Items>;
             })}
        </section>
    </section>
  )
}


export default MovieSection
  