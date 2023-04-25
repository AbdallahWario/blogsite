import React from 'react'
import {formatISO9075} from "date-fns";
import { Link } from 'react-router-dom';


const Post = ({_id,title,summary,cover,content,createdAt,author}) => {
  return (
    <div>
        <div className='m-5'>
            <Link to={`/post/${_id}`}>
          <img src={'http://localhost:4000/'+cover} alt=""/>
            </Link>
            <div> 
            <p className="info">
          <a className="author">{author?.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
           </p>
            </div>
            <h2 className='text-2xl m-5'>{title}</h2>
            <p>{summary}</p>

        </div>

    </div>
  )
}

export default Post