import content from '../data'
import { Link, useParams} from 'react-router-dom';
import React from 'react'



function Single() {
  const {title} =useParams();
  const article =content.find((post) =>post.title === title)
  
  if(!article) return <h1>Sorry! This article doesn't exist</h1>

    // eslint-disable-next-line
  const otherArticles = content.filter((otherPosts)=> otherPosts.title !== title);

  return (
    <div className='container'>
      <div className='row'>
          <div className='col-12'>
                        <div class="card">
                        <h1 class="card-title">{article.title}</h1>
                          <img src= {article.image} class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <p class="card-text">{article.excerpt}</p>

                              <Link to="/article" className='btn-primary'>Back to Article </Link>

                            </div>
                        </div>

          </div>

        
      </div>

    </div>
      
    
  )
}

export default Single