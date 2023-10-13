import React from 'react'
import style from './post-items.module.css'
import { Paper } from '@mui/material'

export const PostItem = ({ post }) => {
      return (
            <Paper elevation={12} className={style.post_item}>
                  <div className={style.number}>{post.id}</div>
                  <div className={style.title}>
                        <h3>{post.title}</h3>
                  </div>
                  <div className={style.body}>{post.body}</div>
            </Paper>
      )
}
