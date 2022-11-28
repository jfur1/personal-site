import React from 'react'
import habitsHome from '../../public/habit_tracker_home.png'
import habitsMonth from '../../public/habit_tracker_monthly.png'
import habitsYear from '../../public/habit_tracker_yearly.png'
import Image from 'next/image'

const HabitTrackerImages = ({  scrollPercent, boxHeight, scrollHeight, screenHeight, index  }) => {
  var sp = scrollPercent
  const heighttoBeReducedinVH = ((boxHeight * index) - 100);
  const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
  sp -= scrollOffsetInPercent;

  return (
      <> 
        <img
            src={habitsHome}
            height={'465'}
            style={{
                transition: 'transform 0.2s ease-out',
                transform: `translate(0px,-${(sp) * 1.5}%) scale(0.96)`,
                position: 'absolute',
                left: '-2vw',
                top: '160vh',
                zIndex: 1
            }}
            alt="Habit Tracker Home"
        />
        {/* <Image
            src={habitsMonth}
            height={'465'}
            style={{
                transition: 'transform 0.2s ease-out',
                transform: `translate(0px,-${(sp) * 6}%) scale(0.94)`,
                position: 'absolute',
                top: '165vh',
                left: '5vw',
                zIndex: 2
            }}
            alt="Habit Tracker Monthly Overview"
        />
        <Image
            src={habitsYear}
            height={'465'}
            style={{
                transition: 'transform 0.2s ease-out',
                transform: `translate(0px,-${(sp) * 6}%)  scale(0.84)`,
                position: 'absolute',
                top: '170vh',
                left: '25vw',
                zIndex: 4
            }}
            alt="Habit Tracker Yearly Overview"
        /> */}
    </>
  )
}

export default HabitTrackerImages