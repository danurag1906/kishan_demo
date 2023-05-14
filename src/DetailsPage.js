import React from 'react'
import {useParams} from 'react-router-dom'

const DetailsPage = ({data}) => {
    // const navigate=useNavigate()
    console.log(data);
    const {id}=useParams()
    const post=data.find(post=>(post.id).toString()===id)

    // console.log(post)

  return (
    <>
        {post && 
            <div className="row-items">
        
            <p>
              <span>Code  </span><span className=".span">:</span> {post.code}
            </p>
            <p>
              <span>Description</span><span className=".span">:</span> {post.description}
            </p>
            <p>
              <span>Size</span> <span className=".span">:</span>{post.size}
            </p>
            <p>
              <span>MRP</span><span className=".span">:</span> {post.mrp}
            </p>
            <p>
              <span>Company</span><span className=".span">:</span> {post.company}
            </p>
          </div>
        }
        {!post && <p> post not found</p>}
    </>
  )
}

export default DetailsPage