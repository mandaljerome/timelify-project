import React from 'react'
import './TrackData.scss'
import ListItem from './ListItem'

const TrackData = () => {
   const data = [
      {
         id: 1,
         title: 'Front-End Task',
         description: 'Created a log in for to the home page',
         numberSeconds: 3600,
         date: '2023/07/24',
         time: '4:00pm',
         icon: 2,
      },
      {
         id: 2,
         title: 'Back-End Task',
         description: 'Created a log in for to the home page',
         numberSeconds: 6600,
         date: '2023/07/24',
         time: '4:00pm',
         icon: 3,
      },
      {
         id: 3,
         title: 'Back-End Task',
         description: 'Created a log in for to the home page',
         numberSeconds: 6613,
         date: '2023/07/24',
         time: '4:00pm',
         icon: 3,
      },
      {
         id: 4,
         title: 'Back-End Task',
         description: 'Created a log in for to the home page',
         numberSeconds: 6600,
         date: '2023/07/24',
         time: '4:00pm',
         icon: 3,
      },
   ]

   return (
      <div className='track-data'>
         {data.map((item) => (
            <ListItem
               key={item.id}
               title={item.title}
               description={item.description}
               numberSeconds={item.numberSeconds}
               date={item.date}
               time={item.time}
               icon={item.icon}
            />
         ))}
      </div>
   )
}

export default TrackData
