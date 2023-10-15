import React from 'react'
import style from './description-items.module.css'
import { Button, Paper } from '@mui/material'
import { NavLink } from 'react-router-dom'

export const DescriptionItem = ({ post }) => {
      return (
            <Paper elevation={12} className={style.description_item}>
                  <div className={style.number}>{post.id}</div>
                  <div className={style.title}>
                        <h3>{post.title}</h3>
                  </div>
                  <div className={style.body}>{post.body}</div>
                  <NavLink to={`/picasso-test-task`}>
                        <Button variant='outlined' className={style.button}>
                              Назад
                        </Button>
                  </NavLink>
            </Paper>
      )
}
