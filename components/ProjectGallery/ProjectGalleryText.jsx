import React, { useState, useEffect } from 'react'
import styles from '../../styles/work.module.scss'
import device from '../../components/Responsive.js'

const ProjectGalleryText = (props) => {
  const { number, projectName, projectDesc, projectType, roles, refreshToggle } = props
  const [refreshBlock, setRefreshBlock ] = useState(false)

  let BlockTextReveal = (props) => {
    return(
      <span {...props}>
        {props.children}
      </span>
    )
  }
  
  const BlockTextRevealNoAnim = (props) => {
    return(
      <span {...props}>
        {props.children}
      </span>
    )
  }
  
  const BlockTextRevealQuick = (props) => {
    return(
      <span 
        style={{ display : `${props => (props.inline ? 'inline' : 'block')}` }}
      >
        {props.children}
      </span>
    )
  }
  
  useEffect(() => {
    refresh(props)
  }, [number])

  const refresh = (nextProps) => {
    const { refreshToggle } = nextProps;
    if (refreshToggle) {
      console.log('in refresh w props:', BlockTextReveal)
      BlockTextReveal = BlockTextRevealNoAnim;
      setRefreshBlock(true),
      () => {
        BlockTextReveal = BlockTextRevealQuick;
        setRefreshBlock(false);
      }
    }
  }

  return (
    <section className={styles.textContainer}>
        <div className={styles.projectIDRevealContainer}>
          <BlockTextReveal className={styles.textMask} refreshToggle={refreshToggle} inline={true}>
          <span className={`${styles.projectID}` }>{number}</span>
          </BlockTextReveal>
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.details}>
            
              <div className={styles.projectNameRevealContainer} >
                <BlockTextReveal 
                  className={styles.textMask}
                  refreshToggle={refreshToggle} inline={true}>
                  <span className={`${styles.projectName}` }>{projectName}</span>
                </BlockTextReveal>
              </div>

            <div className={styles.textRevealContainer}>
              <BlockTextReveal className={styles.textMask} refreshToggle={refreshToggle} inline={true}>
                {roles.map((role, index, arr) => (index === arr.length - 1 ? (
                  <span className={styles.projectRole} key={role}>
                    {role}
                  </span>
                ) : (
                  <span className={styles.projectRole} key={role}>
                    {role}
                        &nbsp; • &nbsp;
                  </span>
                )))}
              </BlockTextReveal>
            </div>
            <div className={styles.textRevealContainer}>
              <BlockTextReveal 
                  className={styles.textMask}
                  style={{ display : 'block' }} 
                  refreshToggle={refreshToggle} inline={false}>
                <span className={`${styles.projectDesc}` }>{projectDesc}</span>
              </BlockTextReveal>
            </div>
          </div>

        <div className={styles.textRevealContainer}>
          <BlockTextReveal className={styles.textMask} refreshToggle={refreshToggle} inline={true}>
            <span className={`${styles.projectType}` }>{projectType}</span>
          </BlockTextReveal>
        </div>

      </div>
    </section>
  )
}

export default ProjectGalleryText