import React from 'react'
import habitsMonth from '../../public/habit_tracker_monthly.png'
import habitsYear from '../../public/habit_tracker_yearly.png'

const HabitTrackerImages = ({  scrollPercent, boxHeight, scrollHeight, screenHeight, index  }) => {
  var sp = scrollPercent
  const heighttoBeReducedinVH = ((boxHeight * index) - 100);
  const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
  sp -= scrollOffsetInPercent;

  return (
      <> 
        <img
            src={'habit_tracker_home.png'}
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
    </>
  )
}

export default HabitTrackerImages