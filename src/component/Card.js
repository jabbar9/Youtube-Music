import React from 'react'

const Card = ({data}) => {
  return (
    <div className='Card'>
    <div className='singerCard'>
      <img alt='thumb' className='singerImage' src={data.info.thumbnail_url}/>
      <div className='metaDataRowCard'>
        <div className='language'>Hindi</div>
        <div className='singerName'>{data.info.author_name}</div>
      </div>
    </div>
    </div>
  )
}

export default Card
