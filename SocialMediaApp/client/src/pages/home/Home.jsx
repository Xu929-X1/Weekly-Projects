import './home.scss';

import React from 'react'
import Stories from '../../components/stories/Stories';
import Post from '../../components/post/Post';

export default function Home() {
  return (
    <div className="home">
      <Stories/>
      <Post/>
    </div>
  )
}
