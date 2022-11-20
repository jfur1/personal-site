import React, { useState, useEffect } from 'react'
import styles from '../../styles/work.module.scss'
import WUImages from '../ParallaxImages/WUImages.jsx'

const ProjectGalleryImages = ({ scrollPercent, pageSplitTimes }) => {
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


  return (
    <div className={styles.imageContainer}>
      <div className={styles.imageBox}>
        <WUImages
          index={1}
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