import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import { DescriptionItem } from '../entities/descripion-item'

export const DescriptionPage = ({ data }) => {
      const params = useParams()
      const currentPostId = Number(params.id)
      const currentPost = data && data.find((el) => el.id === currentPostId)

      return (
            <div>
                  <DescriptionItem post={currentPost} />
            </div>
      )
}
