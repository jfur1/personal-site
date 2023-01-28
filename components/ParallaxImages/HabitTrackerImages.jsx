import React from 'react'
import habitsMonth from '../../public/habit_tracker_monthly.png'
import habitsYear from '../../public/habit_tracker_yearly.png'

const HabitTrackerImages = ({  scrollPercent, boxHeight, scrollHeight, screenHeight, index, width, scale  }) => {
  var sp = scrollPercent
  const heighttoBeReducedinVH = ((boxHeight * index) - 100);
  const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
  const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
  sp -= scrollOffsetInPercent;

  var top = ['160vh', '230vh', '240vh']
  var left = ['-4vw', '25vw', '4vw']
  var scrollSpeed = [1.5, 9, 6]

  if(width < 400){
    top = ['160vh', '275vh', '255vh'];
    left =['-65vw', '45vw', '-3vw']
  } else if(width >= 400 && width < 780){
      top = ['160vh', '260vh', '240vh'];
      left =['-13vw', '55vw', '14vw']
      scrollSpeed = [1.5, 7, 7]

  } else if(width >= 780 && width < 1090){  
      top = ['160vh', '270vh', '240vh']
      left = ['4vw', '25vw', '5vw']
      scrollSpeed = [1.5, 9, 6]
  } else if(width >= 1090 && width < 1281){  
    top = ['148vh', '310vh', '270vh']
    left = ['2vw', '29vw', '6vw']
    scrollSpeed = [1.5, 9, 6]
  } else if(width >= 1281){ // MBP 15
      top = ['160vh', '310vh', '280vh']
      left = ['6vw', '32vw', '10vw']
      scrollSpeed = [1.5, 9, 6]
  }

  return (
      <> 
        <img
            src={'habit_tracker_laptop.png'}
            height={'465'}
            style={{
                transition: 'transform 0.2s ease-out',
                transform: `translate(0px,-${(sp) * 1.5}%) scale(${scale * 1.15})`,
                position: 'absolute',
                left: left[0],
                top: top[0],
                zIndex: 1
            }}
            alt="Habit Tracker Home"
        />
        <img
            src={'habit_tracker_mobile.png'}
            height={'465'}
            style={{
                transition: 'transform 0.2s ease-out',
                transform: `translate(0px,-${(sp) * 8}%) scale(${scale * 1.4})`,
                position: 'absolute',
                left: left[1],
                top: top[1],
                zIndex: 4
            }}
            alt="Habit Tracker iPhone"
        />
        <img
            src={'habit_tracker_mobile_2.png'}
            height={'465'}
            style={{
                transition: 'transform 0.2s ease-out',
                transform: `translate(0px,-${(sp) * 7}%) scale(${scale * 1.2})`,
                position: 'absolute',
                left: left[2],
                top: top[2],
                zIndex: 1
            }}
            alt="Habit Tracker iPhone"
        />
    </>
  )
}

export default HabitTrackerImages