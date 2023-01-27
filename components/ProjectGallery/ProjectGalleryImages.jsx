import React, { useState, useEffect } from 'react'
import styles from '../../styles/work.module.scss'
import WUImages from '../ParallaxImages/WUImages.jsx'
import HabitTrackerImages from '../ParallaxImages/HabitTrackerImages'
import MyPortfolioImages from '../ParallaxImages/MyPortfolioImages'
import PathfindingImages from '../ParallaxImages/PathfindingImages'
import SortingImages from '../ParallaxImages/SortingImages'

const ProjectGalleryImages = ({ scrollPercent, pageSplitTimes, width }) => {
  const [screenHeight, setScreenHeight] = useState(
    typeof(window) !== 'undefined' ? 
      Math.round(window.document.documentElement.clientHeight)
      : 0
  )
  const [scrollHeight, setScrollHeight] = useState(
    typeof(window) !== 'undefined' ? 
      Math.round(window.document.documentElement.scrollHeight)
      : 0
  )

  const boxHeight = pageSplitTimes * 100;

  var scale = 0.9;
  if(width < 395)
      scale = 0.7
  else if(width >= 395 && width < 500)
      scale = 0.65
  else if(width >= 500 && width < 780)
      scale = 0.75
  else if(width >= 780 && width < 1024)
      scale = 0.9
  else if(width >= 1024)
      scale = .9

  return (
    <div className={styles.imageContainer}>
      <div className={styles.imageBox}>
        <WUImages
          index={1}
          scale={scale}
          boxHeight={boxHeight}
          scrollPercent={scrollPercent}
          screenHeight={screenHeight}
          scrollHeight={scrollHeight}
          width={width}
        />
        <HabitTrackerImages
          index={2}
          scale={scale}
          boxHeight={boxHeight}
          scrollPercent={scrollPercent}
          screenHeight={screenHeight}
          scrollHeight={scrollHeight}
        />
        <MyPortfolioImages
          index={3}
          scale={scale}
          boxHeight={boxHeight}
          scrollPercent={scrollPercent}
          screenHeight={screenHeight}
          scrollHeight={scrollHeight}
        />
         <PathfindingImages
          index={4}
          scale={scale}
          boxHeight={boxHeight}
          scrollPercent={scrollPercent}
          screenHeight={screenHeight}
          scrollHeight={scrollHeight}
        />
        <SortingImages
          index={5}
          scale={scale}
          boxHeight={boxHeight}
          scrollPercent={scrollPercent}
          screenHeight={screenHeight}
          scrollHeight={scrollHeight}
        />
      </div>
    </div>
  )
}

export default ProjectGalleryImages