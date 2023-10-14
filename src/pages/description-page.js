import React from 'react'
import { useParams } from 'react-router-dom'
import { DescriptionItem } from '../entities/descripion-item'

export const DescriptionPage = ({ data }) => {
      const params = useParams()
      const currentPostId = Number(params.id)
      const currentPost = data && data.find((el) => el.id === currentPostId)

      return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <DescriptionItem post={currentPost} />
            </div>
      )
}
