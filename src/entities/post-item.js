import React from 'react'
import style from './post-items.module.css'
import { Button, Paper } from '@mui/material'
import { NavLink } from 'react-router-dom'

export const PostItem = ({ post }) => {
      return (
            <Paper elevation={12} className={style.post_item}>
                  <div className={style.number}>{post.id}</div>
                  <div className={style.title}>
                        <h3>{post.title}</h3>
                  </div>
                  <div className={style.body}>{post.body}</div>
                  <div className={style.button}>
                        <NavLink to={`/description/${post.id}`}>
                              <Button variant='outlined'>Просмотр</Button>
                        </NavLink>
                  </div>
            </Paper>
      )
}
