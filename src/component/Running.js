import React from 'react'

const Running = ({data}) => {
  return (
    <div className='Running'>
      <img alt='song' className='runningSong' src={data.info.thumbnail_url}/>
      <div className='runningMetaData'>
        <div className='runningSongName'>{data.info.title}</div>
        <div className='runningSongSinger'>{data.info.author_name}</div>
      </div>
    </div>
  )
}

export default Running
