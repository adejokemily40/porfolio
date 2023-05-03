import React from 'react'
import { Link } from 'react-router-dom'



function ArticleList({content}) {
  return (
    <div className='container'>
      <div className='row'>

        {content.map((post) => (

              <div className='col-12 col-md-6'>
              <div class="card">
                <img src= {post.image} class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">{post.title}</h5>
                    <p class="card-text">{post.excerpt.substring(0, 200)}...</p>
                    <Link to={`/article/${post.title}`} className='btn-primary'>Read More</Link>
                  
                  </div>
              </div>
              </div>

        ))} 


          

      
        
      </div>

    </div>
  )
}

export default ArticleList