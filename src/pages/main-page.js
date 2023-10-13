import React from 'react'
import { PostItem } from '../entities/post-item'

export const MainPage = ({ data }) => {
      return <div>{data && data.map((i) => <PostItem key={i.id} post={i} />)}</div>
}
